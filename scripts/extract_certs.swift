import Cocoa
import Vision
import PDFKit
import Foundation

struct CertRecord: Codable {
    let yearFolder: String
    let testType: String
    let fileName: String
    let filePath: String
    var studentName: String
    var score: String
    var details: [String: String]
    var rawText: [String]
}

let baseDir = "/Users/libertywalk/tashkentps-vite/IELTS and SAT"
let fm = FileManager.default

func getTextFromPDF(url: URL) -> [String] {
    var lines: [String] = []
    if let doc = PDFDocument(url: url) {
        for i in 0..<doc.pageCount {
            if let page = doc.page(at: i), let pageString = page.string {
                for line in pageString.components(separatedBy: "\n") {
                    let trimmed = line.trimmingCharacters(in: .whitespacesAndNewlines)
                    if !trimmed.isEmpty {
                        lines.append(trimmed)
                    }
                }
            }
        }
    }
    // If text was empty (scanned PDF), use OCR
    if lines.isEmpty {
        lines = ocrPDF(url: url)
    }
    return lines
}

func ocrPDF(url: URL) -> [String] {
    var lines: [String] = []
    guard let doc = PDFDocument(url: url) else { return lines }
    for i in 0..<min(doc.pageCount, 2) {
        guard let page = doc.page(at: i) else { continue }
        let pageRect = page.bounds(for: .mediaBox)
        let renderer = NSImage(size: pageRect.size)
        renderer.lockFocus()
        if let ctx = NSGraphicsContext.current?.cgContext {
            ctx.setFillColor(NSColor.white.cgColor)
            ctx.fill(pageRect)
            page.draw(with: .mediaBox, to: ctx)
        }
        renderer.unlockFocus()
        if let cg = renderer.cgImage(forProposedRect: nil, context: nil, hints: nil) {
            lines.append(contentsOf: ocrCGImage(cg))
        }
    }
    return lines
}

func ocrImage(url: URL) -> [String] {
    guard let img = NSImage(contentsOf: url),
          let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        return []
    }
    return ocrCGImage(cg)
}

func ocrCGImage(_ cg: CGImage) -> [String] {
    let handler = VNImageRequestHandler(cgImage: cg, options: [:])
    let req = VNRecognizeTextRequest()
    req.recognitionLanguages = ["en-US", "uz-UZ", "ru-RU"]
    req.recognitionLevel = .accurate
    req.usesLanguageCorrection = false
    try? handler.perform([req])
    var lines: [String] = []
    if let obs = req.results {
        for ob in obs {
            if let str = ob.topCandidates(1).first?.string {
                let trimmed = str.trimmingCharacters(in: .whitespacesAndNewlines)
                if !trimmed.isEmpty {
                    lines.append(trimmed)
                }
            }
        }
    }
    return lines
}

var allRecords: [CertRecord] = []

let subdirs = (try? fm.contentsOfDirectory(atPath: baseDir)) ?? []
for sub in subdirs.sorted() {
    if sub.hasPrefix(".") { continue }
    let subPath = "\(baseDir)/\(sub)"
    var isDir: ObjCBool = false
    if fm.fileExists(atPath: subPath, isDirectory: &isDir), isDir.boolValue {
        // Enumerate files inside
        let enumerator = fm.enumerator(atPath: subPath)
        while let relFile = enumerator?.nextObject() as? String {
            if relFile.hasPrefix(".") { continue }
            let fullPath = "\(subPath)/\(relFile)"
            var fIsDir: ObjCBool = false
            if fm.fileExists(atPath: fullPath, isDirectory: &fIsDir), !fIsDir.boolValue {
                let ext = (relFile as NSString).pathExtension.lowercased()
                if ["pdf", "jpg", "jpeg", "png", "heic"].contains(ext) {
                    let fileUrl = URL(fileURLWithPath: fullPath)
                    var lines: [String] = []
                    if ext == "pdf" {
                        lines = getTextFromPDF(url: fileUrl)
                    } else {
                        lines = ocrImage(url: fileUrl)
                    }
                    
                    let testType = (fullPath.uppercased().contains("SAT") && !fullPath.uppercased().contains("IELTS")) ? "SAT" : "IELTS"
                    
                    let baseName = (relFile as NSString).lastPathComponent
                    allRecords.append(CertRecord(
                        yearFolder: sub,
                        testType: testType,
                        fileName: baseName,
                        filePath: fullPath,
                        studentName: "",
                        score: "",
                        details: [:],
                        rawText: lines
                    ))
                }
            }
        }
    }
}

print("Processed \(allRecords.count) files.")

let encoder = JSONEncoder()
encoder.outputFormatting = .prettyPrinted
if let data = try? encoder.encode(allRecords) {
    let outURL = URL(fileURLWithPath: "/Users/libertywalk/tashkentps-vite/src/data/raw-certificates.json")
    try? data.write(to: outURL)
    print("Saved raw text to src/data/raw-certificates.json")
}

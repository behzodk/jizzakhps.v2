import Cocoa
import Vision
import Foundation

let staffDir = "/Users/libertywalk/psJizzax/tashkentps.uz/tashkentps-vite/src/assets/psstaff"
let fm = FileManager.default
let files = try! fm.contentsOfDirectory(atPath: staffDir).filter { $0.hasSuffix(".png") }.sorted { (a, b) -> Bool in
    let numA = Int(a.components(separatedBy: ".").first ?? "") ?? 999
    let numB = Int(b.components(separatedBy: ".").first ?? "") ?? 999
    if numA != numB { return numA < numB }
    return a < b
}

struct StaffInfo: Codable {
    let filename: String
    let name: String
    let position: String
}

var results: [StaffInfo] = []

for file in files {
    let path = "\(staffDir)/\(file)"
    guard let img = NSImage(contentsOfFile: path),
          let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        continue
    }

    let handler = VNImageRequestHandler(cgImage: cg, options: [:])
    let req = VNRecognizeTextRequest()
    req.recognitionLanguages = ["uz-UZ", "ru-RU", "en-US"]
    req.recognitionLevel = .accurate
    req.usesLanguageCorrection = true

    try? handler.perform([req])

    var lines: [String] = []
    if let obs = req.results {
        for ob in obs {
            if let str = ob.topCandidates(1).first?.string {
                // Filter out small artifacts, keep meaningful text
                let trimmed = str.trimmingCharacters(in: .whitespacesAndNewlines)
                if !trimmed.isEmpty {
                    lines.append(trimmed)
                }
            }
        }
    }

    // Usually name is the second-to-last or largest, and position is at the bottom
    let count = lines.count
    let name = count >= 2 ? lines[count - 2] : (lines.first ?? file)
    let pos = count >= 1 ? lines[count - 1] : ""

    results.append(StaffInfo(filename: file, name: name, position: pos))
    print("[\(file)] => Name: \(name) | Position: \(pos)")
}

let encoder = JSONEncoder()
encoder.outputFormatting = .prettyPrinted
if let jsonData = try? encoder.encode(results) {
    let outPath = "/Users/libertywalk/psJizzax/tashkentps.uz/tashkentps-vite/src/data/staff-ocr.json"
    try? jsonData.write(to: URL(fileURLWithPath: outPath))
    print("\n✅ Saved OCR results to \(outPath)")
}

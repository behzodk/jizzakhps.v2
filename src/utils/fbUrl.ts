/**
 * Firebase URL helper
 * -------------------
 * Yuklanganidan keyin firebase-urls.json dan URL ni qaytaradi.
 * Agar Firebase URL mavjud bo'lmasa, local URL qaytaradi (fallback).
 */

// URL map — firebase:upload ishga tushirilgach to'ldiriladi
const urlMap: Record<string, string> = {};

/**
 * Local storage path dan Firebase URL qaytaradi.
 * @param localPath - masalan: '/storage/gallery/image.jpg'
 * @returns Firebase Storage download URL yoki localPath (fallback)
 */
export function fbUrl(localPath: string): string {
  return urlMap[localPath] ?? localPath;
}

export default fbUrl;

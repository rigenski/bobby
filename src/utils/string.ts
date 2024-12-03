/**
 * Truncate a string if it exceeds the specified length and append "..."
 * @param {string} str - The string to be truncated.
 * @param {number} maxLength - The maximum allowed length of the string.
 * @returns {string} - The truncated string with "..." appended if it exceeds maxLength.
 */

export function maxString(str: string, maxLength: number): string {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;
}

export function camelToKebab(str: string) {
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function camelToTitle(str: string) {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
}

export function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

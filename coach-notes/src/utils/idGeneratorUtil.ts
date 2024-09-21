/**
 * Utility function to generate a UUID.
 * Uses the native `crypto.randomUUID()` method if available.
 * Falls back to a custom UUID generator or `uuidv4()` if running in a legacy environment.
 */
export const generateUUID = (): string => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  } else {
    // Fallback to a custom UUID generator if crypto.randomUUID is not available
    return generateFallbackUUID();
  }
};

/**
 * Custom fallback UUID generator in case crypto.randomUUID() is not available.
 * It creates a UUID version 4.
 */
const generateFallbackUUID = (): string => {
  // This is a basic implementation of UUID v4 generation
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === 'x' ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

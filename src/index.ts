/**
 * Checks if a value is a signed integer within the range for a given bit size.
 * @param bits - The bit size for the signed integer (must be one of 8, 16, 32, 64, 128, 256).
 * @param value - The value to check.
 * @returns `true` if the value is within the range of the signed integer for the given bit size, otherwise `false`.
 * @throws Error if the bit size is not a valid multiple of 8.
 */
function isInt(bits: 8 | 16 | 32 | 64 | 128 | 256, value: number): boolean {
    if (!Number.isInteger(bits) || bits <= 0 || bits % 8 !== 0) {
      throw new Error("Bits must be a positive multiple of 8.");
    }
    const min = -(2 ** (bits - 1)); // Minimum value for signed integer
    const max = 2 ** (bits - 1) - 1; // Maximum value for signed integer
    return Number.isInteger(value) && value >= min && value <= max;
}

/**
 * Checks if a value is an unsigned integer within the range for a given bit size.
 * @param bits - The bit size for the unsigned integer (must be one of 8, 16, 32, 64, 128, 256).
 * @param value - The value to check.
 * @returns `true` if the value is within the range of the unsigned integer for the given bit size, otherwise `false`.
 * @throws Error if the bit size is not a valid multiple of 8.
 */
function isUint(bits: 8 | 16 | 32 | 64 | 128 | 256, value: number): boolean {
    if (!Number.isInteger(bits) || bits <= 0 || bits % 8 !== 0) {
        throw new Error("Bits must be a positive multiple of 8.");
    }
    const max = 2 ** bits - 1; // Maximum value for unsigned integer
    return Number.isInteger(value) && value >= 0 && value <= max;
}

/**
 * Checks if a value is a valid bytes array of the specified size.
 * @param bytes - The expected size of the bytes array (must be one of 1, 2, 4, 8, 16, 32).
 * @param value - The value to check, should be a hex string.
 * @returns `true` if the value is a valid hex string and matches the expected byte size, otherwise `false`.
 * @throws Error if the byte size is not between 1 and 32.
 */
function isBytes(bytes: 1 | 2 | 4 | 8 | 16 | 32, value: string): boolean {
    // Check if the byte size is valid
    if (![1, 2, 4, 8, 16, 32].includes(bytes)) {
      throw new Error("Bytes must be one of the following sizes: 1, 2, 4, 8, 16, 32.");
    }
    if (typeof value !== "string") return false;
  
    // Check if the value is a valid hex string and matches the expected byte size
    const hexRegex = /^0x[0-9a-fA-F]+$/;
    return hexRegex.test(value) && (value.length - 2) / 2 === bytes;
}

/**
 * Checks if a value is a valid Ethereum address.
 * Ethereum addresses are 40 hexadecimal characters, preceded by the `0x` prefix.
 * @param value - The value to check.
 * @returns `true` if the value is a valid Ethereum address, otherwise `false`.
 */
function isAddress(walletAddress: string): boolean {
    // Validate that the string starts with "0x" and contains exactly 40 hexadecimal characters
    const addressRegex = /^0x[a-fA-F0-9]{40}$/;
    return typeof walletAddress === "string" && addressRegex.test(walletAddress);
}

/**
 * Checks if a value is a valid Ethereum transaction hash.
 * A valid hash is a 66-character string starting with `0x`, followed by 64 hexadecimal characters.
 * @param value - The value to check.
 * @returns `true` if the value is a valid Ethereum transaction hash, otherwise `false`.
 */
function isHash(transactionHash: string): boolean {
    // Validate that the string is a valid Ethereum transaction hash (66 characters, 0x + 64 hex characters)
    const hashRegex = /^0x[a-fA-F0-9]{64}$/;
    return typeof transactionHash === "string" && hashRegex.test(transactionHash);
}

module.exports = {
    isInt,
    isUint,
    isBytes,
    isAddress,
    isHash
};

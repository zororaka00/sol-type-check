"use strict";
function isInt(bits, value) {
    if (!Number.isInteger(bits) || bits <= 0 || bits % 8 !== 0) {
        throw new Error("Bits must be a positive multiple of 8.");
    }
    const min = -(2 ** (bits - 1));
    const max = 2 ** (bits - 1) - 1;
    return Number.isInteger(value) && value >= min && value <= max;
}
function isUint(bits, value) {
    if (!Number.isInteger(bits) || bits <= 0 || bits % 8 !== 0) {
        throw new Error("Bits must be a positive multiple of 8.");
    }
    const max = 2 ** bits - 1;
    return Number.isInteger(value) && value >= 0 && value <= max;
}
function isBytes(bytes, value) {
    if (![1, 2, 4, 8, 16, 32].includes(bytes)) {
        throw new Error("Bytes must be one of the following sizes: 1, 2, 4, 8, 16, 32.");
    }
    if (typeof value !== "string")
        return false;
    const hexRegex = /^0x[0-9a-fA-F]+$/;
    return hexRegex.test(value) && (value.length - 2) / 2 === bytes;
}
function isAddress(walletAddress) {
    const addressRegex = /^0x[a-fA-F0-9]{40}$/;
    return typeof walletAddress === "string" && addressRegex.test(walletAddress);
}
function isHash(transactionHash) {
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
//# sourceMappingURL=index.js.map
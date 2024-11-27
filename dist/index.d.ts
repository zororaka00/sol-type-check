declare function isInt(bits: 8 | 16 | 32 | 64 | 128 | 256, value: number): boolean;
declare function isUint(bits: 8 | 16 | 32 | 64 | 128 | 256, value: number): boolean;
declare function isBytes(bytes: 1 | 2 | 4 | 8 | 16 | 32, value: string): boolean;
declare function isAddress(walletAddress: string): boolean;
declare function isHash(transactionHash: string): boolean;
//# sourceMappingURL=index.d.ts.map

export {
    isInt,
    isUint,
    isBytes,
    isAddress,
    isHash,
};
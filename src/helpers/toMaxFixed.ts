function toMaxFixed(num: number, maxDecimals: number): number {
    const multiplier = Math.pow(10, maxDecimals);
    return Math.floor(num * multiplier) / multiplier
}

export default toMaxFixed;
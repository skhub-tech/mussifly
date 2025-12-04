export type TimeSpanUnit = "ms" | "s" | "m" | "h" | "d" | "w";
export declare class TimeSpan {
    constructor(value: number, unit: TimeSpanUnit);
    value: number;
    unit: TimeSpanUnit;
    milliseconds(): number;
    seconds(): number;
    transform(x: number): TimeSpan;
}
export declare function isWithinExpirationDate(date: Date): boolean;
export declare function createDate(timeSpan: TimeSpan): Date;

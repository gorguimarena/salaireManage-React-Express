export declare function setRedisVal(key: string, value: string, ttlSeconds?: number): Promise<void>;
export declare function getRedisVal(key: string): Promise<string | null>;
export declare function deleteRedisVal(key: string): Promise<number>;
//# sourceMappingURL=redis.d.ts.map
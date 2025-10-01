import { createClient } from "redis";
const redis = createClient({
    url: "redis://redis:6379",
});
redis.on("error", (err) => console.error("Redis Error:", err));
// Connecter une seule fois
await redis.connect();
export async function setRedisVal(key, value, ttlSeconds) {
    if (ttlSeconds) {
        await redis.setEx(key, ttlSeconds, value);
    }
    else {
        await redis.set(key, value);
    }
}
export async function getRedisVal(key) {
    return redis.get(key);
}
//export const redis = new Redis(process.env.REDIS_URL as string); // redis://localhost:6379
//# sourceMappingURL=redis.js.map
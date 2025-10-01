import crypto from "crypto";

const SECRET_KEY = process.env.JWT_DB_SECRET || "supersecretkey123456789";
const ALGO = "aes-256-cbc";
const IV_LENGTH = 16;

// Chiffrement
export function encrypt(text: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGO, Buffer.from(SECRET_KEY, "utf8"), iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
}

// Déchiffrement
export function decrypt(encryptedText: string): string {
  const [ivHex, encrypted] = encryptedText.split(":");
  const iv = Buffer.from(ivHex as string, "hex");
  const decipher = crypto.createDecipheriv(ALGO, Buffer.from(SECRET_KEY, "utf8"), iv);
  let decrypted = decipher.update(encrypted as string, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

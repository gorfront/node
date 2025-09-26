import crypto from "crypto";

export const getPassworHash = (password: string) => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

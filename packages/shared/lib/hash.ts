import * as crypto from "crypto";
import bcrypt from "bcryptjs";

export const hash256 = (input = ""): string => {
  const sha256 = crypto.createHash("sha256");
  return sha256.update(input).digest("hex");
};

export const hmac = (input = "", secret = ""): string => {
  const hmac = crypto.createHmac("sha256", secret);
  return hmac.update(input).digest("hex");
};

export const hashPassword = (password: string, pepper: string): string => {
  const salt = bcrypt.genSaltSync(12);
  return bcrypt.hashSync(hmac(password, pepper), salt);
};

export const matchPassword = (
  password: string,
  hashedPassword: string,
  pepper: string,
): boolean => {
  return bcrypt.compareSync(hmac(password, pepper), hashedPassword);
};

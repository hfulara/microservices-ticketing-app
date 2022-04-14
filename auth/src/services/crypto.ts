import bcrypt from "bcryptjs";

export class Crypto {
  static async toHash(password: string) {
    return await bcrypt.hash(password, 12);
  }

  static async compare(suppliedPassword: string, storedPassword: string) {
    return await bcrypt.compare(suppliedPassword, storedPassword);
  }
}

import { betterAuth } from "better-auth";
import { openAPI } from "better-auth/plugins";
import { Database } from "bun:sqlite";

export const auth = betterAuth({
  baseURL: "http://localhost:3000",
  database: new Database("sqlite.db"),
  emailAndPassword : {
    enabled : true
  },
  plugins:[openAPI()],
  trustedOrigins: ["http://localhost:5173", "http://localhost:8000"], 
});

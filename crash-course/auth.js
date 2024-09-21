import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import client from "./lib/db.js";


export const {
  handlers,
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: MongoDBAdapter(client, {databaseName: process.env.ENVIRONMENT}),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,      
    }),

  ],
});

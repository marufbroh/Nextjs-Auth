// import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth, { CredentialsSignin } from "next-auth";
import Google from "next-auth/providers/google";
// import client from "./lib/db.js";
import Credentials from "next-auth/providers/credentials"
import { dbConnect } from "./lib/mongo";
// import { userModel } from "./model/user-model";


export const {
  handlers,
  signIn,
  signOut,
  auth,
} = NextAuth({
  // adapter: MongoDBAdapter(client, {databaseName: process.env.ENVIRONMENT}),
  session: {
    strategy: "jwt",

  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,      
    }),
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        if(credentials === null) return null;
        await dbConnect();
        try {
          const user = await userModel.findOne({email: credentials.email});
          if(user){
            const isMatch = user?.password === credentials.password;
            if(isMatch){
              return user;
            }else{
              throw new Error("Email or Password is not correct");
            }
          }else{
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error)
        }
      },
    })

  ],
});

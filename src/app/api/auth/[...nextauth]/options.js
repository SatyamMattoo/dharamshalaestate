import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/utils/connectDB";
import { User } from "@/models/users";

export const authOptions = {

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      connectDB();
      try {
        const findUser = await User.findOne({ email: user.email });
        if (findUser) {
          return true;
        }
        await User.create({
          email: user.email,
          name: user.name,
          role: "User",
        });
        return true;
      } catch (error) {
        console.log("The error is ", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        user.role = user?.role == null ? "User" : user?.role;
        token.user = user;
      }
      return token;
    },
    async session({
      session,
      token,
      user,
    }) {
      session.user = token.user;
      return session;
    },
  },
  
  providers: [
    Credentials({
      name: "Welcome Back",
      type: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // * Connect to the MongoDb
        connectDB();
        const user = await User.findOne({ email: credentials?.email });
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
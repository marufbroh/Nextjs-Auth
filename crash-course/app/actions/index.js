"use server";

import { signIn, signOut } from "@/auth";

export const doSignOut =async() => {
    await signOut();
};

export const doSignIn = async () => {
    await signIn("google", {callbackUrl: "http://localhost:3000"});
}
"use server";

import { signIn, signOut } from "@/auth";

export const doSignOut = async () => {
  await signOut();
};

export const doSignIn = async () => {
  await signIn("google", { callbackUrl: "http://localhost:3000" });
};

export const login = async (formData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

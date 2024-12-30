"use server";

import { createClient } from "@/lib/supabase/server";
import { Auth } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: Auth) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: Auth) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/`,
    },
  });

  if (error) {
    return { success: false, message: error.message };
  }

  redirect("/");
}

export const signout = async () => {
  const supabase = await createClient();

  await supabase.auth.signOut();
};

"use server";

import { createClient } from "@/lib/supabase/server";
import { User } from "@supabase/supabase-js";

export const fetchUser = async (): Promise<User | null> => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return data?.user ?? null;
};

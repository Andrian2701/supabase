"use client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { fetchUser } from "@/services/user";
import { signout } from "@/services/auth";

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser();

      setUser(userData);
    };

    getUser();
  }, []);

  return (
    <div className="text-black flex flex-col items-start gap-2">
      <span>{user?.email}</span>
      <button onClick={signout}>Sign out</button>
    </div>
  );
}

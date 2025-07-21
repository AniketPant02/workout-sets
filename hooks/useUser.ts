"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function useUser(): User | null {
    const [user, setUser] = useState<User | null>(null);
    const supabase = createClient();

    useEffect(() => {
        supabase.auth.getUser().then(({ data, error }) => {
            if (error) {
                console.error("Error fetching user (useUser.ts hook):", error);
            } else {
                // data.user is User | null, matches our state type
                setUser(data.user);
            }
        });
    }, [supabase]);

    return user;
}
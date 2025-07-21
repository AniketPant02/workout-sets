import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import useUser from "@/hooks/useUser";

export default function useWorkouts() {
    const user = useUser();
    const [workouts, setWorkouts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        async function fetchData() {
            try {
                const { data: workoutsData, error: workoutsError } = await supabase
                    .from("workouts")
                    .select("*");
                if (workoutsError) throw workoutsError;
                setWorkouts(workoutsData);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData(); // run fetch
    }, [user?.id, supabase]);

    return { workouts, isLoading };
}
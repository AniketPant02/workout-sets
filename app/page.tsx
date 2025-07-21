"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Plus } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import useUser from '@/hooks/useUser';
import WorkoutCard from '@/components/WorkoutCard';
import useWorkouts from '@/hooks/useWorkouts';

import type { Workout } from '@/components/WorkoutCard';

export default function Home(): React.ReactElement {
  const user = useUser();
  const supabase = createClient();
  const router = useRouter();
  const { workouts = [], isLoading } = useWorkouts();

  const handleSignOut = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Sign out error:', error);
    } else {
      router.push('/login');
    }
  };

  const handleCreateWorkout = (): void => {
    // TODO: Navigate to create workout page
    console.log('Create new workout');
  };

  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <div>
          <h1 className="text-2xl font-bold">
            {getGreeting()}, {user?.user_metadata?.name || '...'}!
          </h1>
          <p className="text-gray-400 text-sm mt-1">Ready for your next workout?</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSignOut}
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <LogOut size={16} />
        </Button>
      </div>
      <div className="p-4 space-y-6">
        <Button
          onClick={handleCreateWorkout}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-6 text-lg transition-colors"
        >
          <Plus className="mr-2" size={20} />
          Create New Workout
        </Button>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Recent Workouts</h2>
          {workouts?.map((workout: Workout) => (
            <WorkoutCard workout={workout} key={workout.id} />
          ))}
        </div>
        {workouts?.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-300 mb-2">No workouts yet</h3>
            <p className="text-gray-500 text-sm">Create your first workout to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
"use client";

import React from 'react';
import { Target, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export type Exercise = {
    id: number;
    name: string;
};

export type Workout = {
    id: number;
    created_at: string;
    exercises: Exercise[];
    completed: boolean;
};

interface WorkoutCardProps {
    workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <Card
            key={workout.id}
            className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer"
        >
            <CardContent className="pt-0 space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(workout.created_at)}
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                        <Target size={14} className="mr-1" />
                        Exercises
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {workout.exercises.map((exercise, idx) => (
                            <span
                                key={`${exercise.name}-${idx}`}
                                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                            >
                                {exercise.name}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
'use client'
import { use } from 'react'

export default function WorkoutPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = use(params)
    console.log('Workout ID:', slug)
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <p>Hello world</p>
            <p>Workout ID: {slug}</p>
        </div>
    )
}
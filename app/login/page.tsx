"use client"

import { signInWithDiscord, signInWithGoogle } from "./actions"
import { MessageCircle, Mail } from "lucide-react"

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="w-full max-w-sm">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-zinc-100 mb-2">Workout App</h1>
                    <p className="text-zinc-500 text-base">Sign in with your favorite platform</p>
                </div>
                <div className="space-y-4">
                    <button
                        onClick={signInWithDiscord}
                        className="w-full group relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-center gap-3 text-zinc-100 font-medium text-base transition-all duration-200 hover:bg-zinc-800 hover:border-zinc-700 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-black"
                    >
                        <MessageCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Continue with Discord</span>
                    </button>
                    <button
                        onClick={signInWithGoogle}
                        className="w-full group relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-center gap-3 text-zinc-100 font-medium text-base transition-all duration-200 hover:bg-zinc-800 hover:border-zinc-700 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-black"
                    >
                        <Mail className="w-5 h-5 flex-shrink-0" />
                        <span>Continue with Google</span>
                    </button>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-zinc-600 text-sm leading-relaxed">
                        By continuing, you agree to our{' '}
                        <button className="text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-2">
                            Terms of Service
                        </button>{' '}
                        and{' '}
                        <button className="text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-2">
                            Privacy Policy
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
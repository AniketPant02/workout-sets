"use client"

import { signInWithGitHub, signInWithDiscord, signInWithGoogle } from "./actions"
import { Github, Disc, Mail } from "lucide-react"

export default function SignInPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-4 py-12">
            <div className="w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-semibold text-white">Workout App</h1>
                    <p className="mt-1 text-sm text-zinc-400">Sign in with your favorite platform</p>
                </div>
                <div className="space-y-4">
                    <form action={signInWithGitHub}>
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-3 rounded-md border border-zinc-800 bg-zinc-900 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-900"
                        >
                            <Github className="h-5 w-5" />
                            <span>Continue with GitHub</span>
                        </button>
                    </form>
                    <form action={signInWithDiscord}>
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-3 rounded-md border border-zinc-800 bg-zinc-900 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-900"
                        >
                            <Disc className="h-5 w-5" />
                            <span>Continue with Discord</span>
                        </button>
                    </form>
                    <form action={signInWithGoogle}>
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-3 rounded-md border border-zinc-800 bg-zinc-900 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-900"
                        >
                            <Mail className="h-5 w-5" />
                            <span>Continue with Google</span>
                        </button>
                    </form>
                </div>
                <p className="mt-8 text-center text-xs text-zinc-500">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    )
}
'use server'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

// for vercel deployment
const redirectToURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/auth/callback'
    : `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/auth/callback`

export async function signInWithDiscord() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
            redirectTo: redirectToURL,
        },
    })
    if (error) { redirect('/error') }
    if (data.url) {
        redirect(data.url)
    }
}

export async function signInWithGoogle() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: redirectToURL,
        },
    })
    if (error) { redirect('/error') }
    if (data.url) {
        redirect(data.url)
    }
}
'use client'

import { signIn } from 'next-auth/react'
import { DiscordLogo } from '@phosphor-icons/react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-darker-bg to-dark-bg flex items-center justify-center">
      <div className="bg-dark-card p-8 rounded-xl border border-border-color max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <DiscordLogo size={64} className="text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Connexion</h1>
          <p className="text-text-muted">
            Connectez-vous avec Discord pour accéder au dashboard
          </p>
        </div>

        <button
          onClick={() => signIn('discord')}
          className="w-full bg-primary hover:bg-blue-600 text-white px-6 py-4 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-3 text-lg font-semibold"
        >
          <DiscordLogo size={24} />
          Connexion avec Discord
        </button>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-muted">
          <span>🔒</span>
          <span>Connexion sécurisée via OAuth2</span>
        </div>
      </div>
    </div>
  )
}

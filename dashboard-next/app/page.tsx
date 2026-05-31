'use client'

import Link from 'next/link'
import { 
  Server, 
  Users, 
  Shield, 
  Coins, 
  Ticket, 
  Cog, 
  ChartLine,
  PlusCircle,
  DiscordLogo
} from '@phosphor-icons/react'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Navbar */}
      <nav className="bg-darker-bg border-b border-border-color sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎲</div>
              <span className="text-xl font-bold text-primary">Dice Bot</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/commands" className="text-white hover:text-primary transition-colors">
                Commandes
              </Link>
              <Link href="/docs" className="text-white hover:text-primary transition-colors">
                Documentation
              </Link>
              <Link 
                href="/api/auth/signin" 
                className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Connexion
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="py-20 bg-gradient-to-br from-darker-bg to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              🎲 Dice Bot
            </h1>
            <p className="text-xl text-text-muted mb-8">
              Le bot Discord ultime avec modération, économie, fun et bien plus encore !
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <a 
                href={`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=8&scope=bot%20applications.commands`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                <DiscordLogo size={24} />
                Ajouter le bot
              </a>
              <Link href="/commands" className="bg-dark-card hover:bg-dark-darker text-white px-6 py-3 rounded-lg border border-border-color transition-all hover:scale-105">
                Commandes
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-dark-card p-6 rounded-lg border border-border-color">
                <Server size={40} className="text-primary mx-auto mb-2" />
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-text-muted">Serveurs</p>
              </div>
              <div className="bg-dark-card p-6 rounded-lg border border-border-color">
                <Users size={40} className="text-primary mx-auto mb-2" />
                <h3 className="text-2xl font-bold">50K+</h3>
                <p className="text-text-muted">Utilisateurs</p>
              </div>
              <div className="bg-dark-card p-6 rounded-lg border border-border-color">
                <Shield size={40} className="text-primary mx-auto mb-2" />
                <h3 className="text-2xl font-bold">200+</h3>
                <p className="text-text-muted">Commandes</p>
              </div>
              <div className="bg-dark-card p-6 rounded-lg border border-border-color">
                <Coins size={40} className="text-primary mx-auto mb-2" />
                <h3 className="text-2xl font-bold">99.9%</h3>
                <p className="text-text-muted">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 bg-darker-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-card p-6 rounded-lg border border-border-color hover:scale-105 transition-transform">
              <Shield size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Modération</h3>
              <p className="text-text-muted">Système complet de modération avec logs, auto-modération et protection anti-raid.</p>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border border-border-color hover:scale-105 transition-transform">
              <Coins size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Économie</h3>
              <p className="text-text-muted">Système d'économie complet avec banque, shop, giveaways et jeux de casino.</p>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border border-border-color hover:scale-105 transition-transform">
              <Ticket size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Tickets</h3>
              <p className="text-text-muted">Système de tickets avancé avec panneaux personnalisables et transcription.</p>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border border-border-color hover:scale-105 transition-transform">
              <Cog size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Configuration</h3>
              <p className="text-text-muted">Dashboard intuitif pour configurer facilement toutes les fonctionnalités du bot.</p>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border border-border-color hover:scale-105 transition-transform">
              <ChartLine size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Statistiques</h3>
              <p className="text-text-muted">Statistiques détaillées et analytics pour suivre l'activité de votre serveur.</p>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border border-border-color hover:scale-105 transition-transform">
              <PlusCircle size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Et plus...</h3>
              <p className="text-text-muted">Fun, niveaux, Roblox, sécurité et bien plus encore !</p>
            </div>
          </div>
        </div>
      </section>

      {/* Invite Section */}
      <section className="py-20 bg-gradient-to-br from-darker-bg to-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                🚀 Ajoutez Dice Bot à votre serveur
              </h2>
              <p className="text-xl text-text-muted mb-6">
                Rejoignez des milliers de serveurs qui utilisent déjà Dice Bot pour améliorer leur communauté Discord.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="text-success">✓</div>
                  <span>Modération avancée</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-success">✓</div>
                  <span>Système d'économie complet</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-success">✓</div>
                  <span>Commandes fun et divertissantes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-success">✓</div>
                  <span>Dashboard web intuitif</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-success">✓</div>
                  <span>Support 24/7</span>
                </li>
              </ul>
            </div>
            <div className="bg-dark-card p-8 rounded-xl border border-border-color shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <DiscordLogo size={40} className="text-primary" />
                <h3 className="text-2xl font-bold">Invitation</h3>
              </div>
              <p className="text-text-muted mb-6">
                Cliquez sur le bouton ci-dessous pour ajouter Dice Bot à votre serveur Discord.
              </p>
              <a 
                href={`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=8&scope=bot%20applications.commands`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-blue-600 text-white px-6 py-4 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold"
              >
                <DiscordLogo size={24} />
                Ajouter au serveur
              </a>
              <p className="text-center text-text-muted text-sm mt-4">
                Permissions administrateur requises pour une configuration optimale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darker-bg border-t border-border-color py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-text-muted">
            © 2024 Dice Bot. Tous droits réservés.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/docs" className="text-text-muted hover:text-primary transition-colors">
              Documentation
            </Link>
            <Link href="/commands" className="text-text-muted hover:text-primary transition-colors">
              Commandes
            </Link>
            <a href="#" className="text-text-muted hover:text-primary transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

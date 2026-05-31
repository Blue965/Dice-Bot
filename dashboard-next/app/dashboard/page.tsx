'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { 
  House, 
  Server, 
  PlusCircle, 
  Cog, 
  ChartLine, 
  Ticket,
  SignOut
} from '@phosphor-icons/react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-darker-bg border-r border-border-color p-4 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-8">
          <div className="text-3xl">🎲</div>
          <span className="text-xl font-bold text-primary">Dice Bot</span>
        </div>

        <div className="bg-dark-card p-4 rounded-lg mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl">
              {session.user?.name?.[0] || 'U'}
            </div>
            <div>
              <h3 className="font-semibold">{session.user?.name}</h3>
              <p className="text-sm text-text-muted">Utilisateur</p>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white">
            <House size={20} />
            <span>Accueil</span>
          </Link>
          <Link href="/dashboard/servers" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-dark-card transition-colors">
            <Server size={20} />
            <span>Serveurs</span>
          </Link>
          <a
            href={`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=8&scope=bot%20applications.commands`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold"
          >
            <PlusCircle size={20} />
            <span>Ajouter le bot</span>
          </a>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-dark-card transition-colors">
            <Cog size={20} />
            <span>Paramètres</span>
          </Link>
          <Link href="/dashboard/stats" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-dark-card transition-colors">
            <ChartLine size={20} />
            <span>Statistiques</span>
          </Link>
          <Link href="/dashboard/tickets" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-dark-card transition-colors">
            <Ticket size={20} />
            <span>Tickets</span>
          </Link>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-dark-card transition-colors w-full text-left">
            <SignOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-text-muted">Bienvenue sur le dashboard de Dice Bot</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-dark-card p-6 rounded-lg border border-border-color">
            <Server size={32} className="text-primary mb-2" />
            <h3 className="text-2xl font-bold">5</h3>
            <p className="text-text-muted">Serveurs</p>
          </div>
          <div className="bg-dark-card p-6 rounded-lg border border-border-color">
            <ChartLine size={32} className="text-primary mb-2" />
            <h3 className="text-2xl font-bold">1,234</h3>
            <p className="text-text-muted">Utilisateurs</p>
          </div>
          <div className="bg-dark-card p-6 rounded-lg border border-border-color">
            <Ticket size={32} className="text-primary mb-2" />
            <h3 className="text-2xl font-bold">42</h3>
            <p className="text-text-muted">Tickets</p>
          </div>
          <div className="bg-dark-card p-6 rounded-lg border border-border-color">
            <Cog size={32} className="text-primary mb-2" />
            <h3 className="text-2xl font-bold">98%</h3>
            <p className="text-text-muted">Uptime</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/dashboard/servers" className="bg-dark-card p-6 rounded-lg border border-border-color hover:scale-105 transition-transform">
            <Server size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Gérer les serveurs</h3>
            <p className="text-text-muted">Configurez Dice Bot sur vos serveurs</p>
          </Link>
          <Link href="/dashboard/settings" className="bg-dark-card p-6 rounded-lg border border-border-color hover:scale-105 transition-transform">
            <Cog size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Paramètres globaux</h3>
            <p className="text-text-muted">Configurez les paramètres du bot</p>
          </Link>
          <a
            href={`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&permissions=8&scope=bot%20applications.commands`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-card p-6 rounded-lg border border-border-color hover:scale-105 transition-transform"
          >
            <PlusCircle size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Ajouter un serveur</h3>
            <p className="text-text-muted">Invitez Dice Bot sur un nouveau serveur</p>
          </a>
        </div>
      </main>
    </div>
  )
}

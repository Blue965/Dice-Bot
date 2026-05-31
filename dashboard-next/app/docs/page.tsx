'use client'

import Link from 'next/link'

export default function DocsPage() {
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
              <Link href="/" className="text-white hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link href="/commands" className="text-white hover:text-primary transition-colors">
                Commandes
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

      {/* Docs Section */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-text-muted">
              Guide complet pour installer et utiliser Dice Bot
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-dark-card p-6 rounded-lg border border-border-color">
              <h2 className="text-2xl font-bold mb-4 text-primary">Installation</h2>
              <p className="text-text-muted mb-4">
                Pour installer Dice Bot sur votre serveur Discord :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-text-muted">
                <li>Allez sur le Discord Developer Portal</li>
                <li>Créez une application et un bot</li>
                <li>Activez les intents nécessaires</li>
                <li>Invitez le bot sur votre serveur avec les permissions requises</li>
              </ol>
            </section>

            <section className="bg-dark-card p-6 rounded-lg border border-border-color">
              <h2 className="text-2xl font-bold mb-4 text-primary">Configuration</h2>
              <p className="text-text-muted mb-4">
                Configurez Dice Bot selon vos besoins :
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-muted">
                <li>Utilisez le dashboard pour configurer les paramètres</li>
                <li>Définissez les salons de logs et de bienvenue</li>
                <li>Configurez le système d'économie</li>
                <li>Activez les fonctionnalités de sécurité</li>
              </ul>
            </section>

            <section className="bg-dark-card p-6 rounded-lg border border-border-color">
              <h2 className="text-2xl font-bold mb-4 text-primary">Commandes</h2>
              <p className="text-text-muted mb-4">
                Dice Bot utilise des slash commands. Tapez <code className="bg-darker-bg px-2 py-1 rounded">/</code> pour voir toutes les commandes disponibles.
              </p>
              <p className="text-text-muted">
                Consultez la <Link href="/commands" className="text-primary hover:underline">page des commandes</Link> pour la liste complète.
              </p>
            </section>

            <section className="bg-dark-card p-6 rounded-lg border border-border-color">
              <h2 className="text-2xl font-bold mb-4 text-primary">Support</h2>
              <p className="text-text-muted mb-4">
                Besoin d'aide ? Rejoignez notre serveur de support :
              </p>
              <a
                href="#"
                className="inline-block bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Serveur Support
              </a>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-darker-bg border-t border-border-color py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-text-muted">
            © 2024 Dice Bot. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

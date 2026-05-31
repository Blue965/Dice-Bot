'use client'

import Link from 'next/link'

const commandsByCategory = {
  'Modération': ['kick', 'ban', 'warn', 'mute', 'unmute', 'lock', 'unlock', 'clear', 'slowmode', 'timeout'],
  'Administration': ['config', 'setup', 'autorole', 'welcome', 'logs', 'prefix', 'language', 'disable'],
  'Utilitaires': ['ping', 'help', 'userinfo', 'serverinfo', 'avatar', 'roleinfo', 'channelinfo', 'emoji'],
  'Fun': ['roll', 'coinflip', '8ball', 'meme', 'joke', 'trivia', 'rps', 'slot', 'wheel', 'fact'],
  'Économie': ['balance', 'daily', 'work', 'shop', 'buy', 'sell', 'giveaway', 'leaderboard', 'transfer', 'rob'],
  'Tickets': ['ticket', 'close', 'claim', 'transcript', 'add', 'remove', 'priority', 'topic'],
  'Roblox': ['robloxuser', 'robloxgame', 'robuxcalculator', 'robloxgroup', 'robloxfriends', 'robloxbadges'],
  'Sécurité': ['antiraid', 'antinuke', 'security', 'audit', 'backup', 'restore', 'whitelist', 'blacklist'],
}

export default function CommandsPage() {
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

      {/* Commands Section */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Commandes</h1>
            <p className="text-xl text-text-muted">
              Découvrez toutes les commandes disponibles de Dice Bot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(commandsByCategory).map(([category, commands]) => (
              <div key={category} className="bg-dark-card p-6 rounded-lg border border-border-color">
                <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {commands.map((command) => (
                    <span
                      key={command}
                      className="bg-darker-bg px-3 py-1 rounded-full text-sm text-text-muted border border-border-color"
                    >
                      /{command}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-dark-card p-6 rounded-lg border border-border-color">
            <h3 className="text-xl font-bold mb-4">Comment utiliser les commandes</h3>
            <p className="text-text-muted mb-4">
              Dice Bot utilise des slash commands Discord. Tapez <code className="bg-darker-bg px-2 py-1 rounded">/</code> dans n'importe quel salon pour voir la liste des commandes disponibles.
            </p>
            <p className="text-text-muted">
              Pour plus d'informations sur une commande spécifique, consultez la <Link href="/docs" className="text-primary hover:underline">documentation</Link>.
            </p>
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

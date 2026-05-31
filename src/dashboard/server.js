import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.DASHBOARD_PORT || 3000;

// Database connection (optional for dashboard basic functionality)
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('[DASHBOARD] Connected to MongoDB'))
        .catch(err => console.error('[DASHBOARD] Database error:', err));
} else {
    console.log('[DASHBOARD] Running without database connection');
}

// Express session
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Passport configuration
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_REDIRECT_URI || 'http://localhost:3000/auth/discord/callback',
    scope: ['identify', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
    profile.accessToken = accessToken;
    profile.refreshToken = refreshToken;
    return done(null, profile);
}));

app.use(passport.initialize());
app.use(passport.session());

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to check authentication
const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        user: req.user,
        title: 'Dice Bot - Dashboard'
    });
});

app.get('/login', (req, res) => {
    res.render('login', { 
        title: 'Dice Bot - Login'
    });
});

app.get('/auth/discord', passport.authenticate('discord'));

app.get('/auth/discord/callback', 
    passport.authenticate('discord', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

app.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect('/');
    });
});

app.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', { 
        user: req.user,
        title: 'Dice Bot - Dashboard'
    });
});

app.get('/servers', ensureAuth, (req, res) => {
    res.render('servers', { 
        user: req.user,
        title: 'Dice Bot - Serveurs'
    });
});

app.get('/server/:id', ensureAuth, async (req, res) => {
    try {
        const Guild = (await import('../models/Guild.js')).default;
        const guild = await Guild.findOne({ guildId: req.params.id });
        
        if (!guild) {
            return res.redirect('/servers');
        }

        // Check if user has permission to manage this guild
        const userGuild = req.user.guilds.find(g => g.id === req.params.id);
        if (!userGuild || !(userGuild.permissions & 0x20)) { // 0x20 = MANAGE_GUILD
            return res.redirect('/servers');
        }

        res.render('server', { 
            user: req.user,
            guild,
            title: `Dice Bot - ${guild.guildName}`
        });
    } catch (error) {
        console.error('Error loading server:', error);
        res.redirect('/servers');
    }
});

app.get('/commands', (req, res) => {
    res.render('commands', { 
        user: req.user,
        title: 'Dice Bot - Commandes'
    });
});

app.get('/docs', (req, res) => {
    res.render('docs', { 
        user: req.user,
        title: 'Dice Bot - Documentation'
    });
});

// API Routes
app.get('/api/user', ensureAuth, (req, res) => {
    res.json(req.user);
});

app.get('/api/guilds', ensureAuth, (req, res) => {
    res.json(req.user.guilds);
});

// Start server
app.listen(PORT, () => {
    console.log(`[DASHBOARD] Server running on http://localhost:${PORT}`);
});

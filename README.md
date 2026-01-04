# AMUNIR Trading - Site Web Officiel

Site web moderne pour AMUNIR Trading / AMS International Group, spécialisé en logistique et transit entre la Chine et l'Afrique.

## 🌟 Caractéristiques

### Pages Principales
- **Accueil** - Hero "Solutions logistiques complètes Chine–Afrique" avec CTAs
- **Services** - Sourcing Chine, Transit Express/Standard, Dédouanement, Centrale d'achat
- **Secteurs** - 8 secteurs d'activité couverts
- **À propos** - Histoire de l'entreprise, valeurs, équipe
- **Blog** - Articles et actualités sur la logistique
- **Contact** - Formulaire de contact avec carte

### Fonctionnalités
- 💬 **Chat en direct** - Widget de chat interactif avec réponses rapides
- 📊 **Calculateur de devis** - Estimation des coûts de transport
- 📦 **Suivi de colis** - Tracking en temps réel
- ❓ **FAQ** - Questions fréquentes avec accordéon
- ⭐ **Témoignages** - Carrousel de témoignages clients
- 📱 **Design responsive** - Mobile, tablette et desktop

### Design
- **Couleurs** : Bleu marine (#0A1E3D) & Orange (#FF6B35)
- **Typographies** : Montserrat (titres) & Open Sans (texte)
- **Style** : Moderne, professionnel, B2B

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Démarrer le serveur de production
npm start
```

## 📁 Structure du Projet

```
amsit.co/
├── app/                      # Pages Next.js (App Router)
│   ├── page.tsx             # Page d'accueil
│   ├── services/page.tsx    # Page Services
│   ├── secteurs/page.tsx    # Page Secteurs
│   ├── a-propos/page.tsx    # Page À propos
│   ├── blog/page.tsx        # Page Blog
│   ├── contact/page.tsx     # Page Contact
│   ├── layout.tsx           # Layout principal
│   └── globals.css          # Styles globaux
├── components/              # Composants réutilisables
│   ├── Header.tsx          # En-tête de navigation
│   ├── Footer.tsx          # Pied de page
│   ├── ChatWidget.tsx      # Widget de chat
│   ├── QuoteCalculator.tsx # Calculateur de devis
│   ├── PackageTracking.tsx # Suivi de colis
│   ├── Testimonials.tsx    # Témoignages
│   └── FAQ.tsx             # Questions fréquentes
├── public/                 # Fichiers statiques
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🛠️ Technologies

- **Framework** : Next.js 16 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS v4
- **Fonts** : Google Fonts (Montserrat, Open Sans)

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil |
| `/services` | Nos services logistiques |
| `/secteurs` | Secteurs d'activité |
| `/a-propos` | À propos d'AMUNIR Trading |
| `/blog` | Blog et actualités |
| `/contact` | Formulaire de contact |

## 📞 Contact

**AMUNIR Trading - AMS International Group**
- 📍 Libreville, Gabon
- 📧 contact@amsit.co
- ☎️ +241 01 23 45 67
- 🌐 [amsit.co](https://amsit.co)

## 📝 License

Copyright © 2026 AMUNIR Trading - AMS International Group. Tous droits réservés.


# 🚀 Déploiement Vercel - Guide Complet

## ✅ Étape 1: Préparer votre projet en local

```bash
# 1. Installer les dépendances
npm install

# 2. Vérifier que tout fonctionne en local
npm run build
npm run preview

# 3. Commit et push les changements
git add .
git commit -m "feat: Add Vercel Analytics integration"
git push origin main
```

## 📦 Étape 2: Installer Vercel CLI (optionnel mais recommandé)

```bash
# Installation globale
npm i -g vercel

# Vérifier l'installation
vercel --version
```

## 🔗 Étape 3: Connecter votre projet à Vercel

### Option A: Via GitHub (RECOMMANDÉ - Automatique)
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez **"New Project"**
3. Sélectionnez votre repo GitHub **@DEV - CODE/PORTFOLIO**
4. Cliquez **"Import"**
5. Vercel détectera automatiquement:
   - Framework: **Vue.js**
   - Build command: `npm run build`
   - Output directory: `dist`
6. Cliquez **"Deploy"** ✅

### Option B: Via Vercel CLI (Manuel)
```bash
# Se connecter à Vercel
vercel login

# Déployer le projet
vercel

# Suivez les prompts:
# ? Set up and deploy "~/portfolio"? (y/N) → y
# ? Which scope do you want to deploy to? → [Votre compte]
# ? Link to existing project? (y/N) → n
# ? What's your project's name? → portfolio
# ? In which directory is your code located? → ./
# ? Want to modify these settings before deploying? (y/N) → n
```

## 🎯 Étape 4: Activer Vercel Analytics

### 📊 Web Analytics (Gratuit - Page Views)
1. Allez sur **[vercel.com/dashboard](https://vercel.com/dashboard)**
2. Sélectionnez votre projet **portfolio**
3. Allez dans l'onglet **Analytics** → **Web Analytics**
4. Cliquez **"Enable Web Analytics"** ✅
5. Confirmez
6. Le script se charge automatiquement via `/_vercel/insights/script.js`

### 📈 Speed Insights (Gratuit - Core Web Vitals)
1. Dans le même menu **Analytics**
2. Allez à l'onglet **Speed Insights**
3. Cliquez **"Enable Speed Insights"** ✅
4. Les données commenceront à apparaître après quelques visites

## 🔍 Étape 5: Vérifier que les Analytics fonctionnent

### Vérification en temps réel:
1. Allez sur votre site Vercel: `https://portfolio-xxxx.vercel.app`
2. Visitez plusieurs pages et interagissez
3. Allez sur le dashboard **Analytics** → **Web Analytics**
4. Vous devriez voir:
   - **Page Views**: Nombre total de visites
   - **Real Time**: Vue en direct des visiteurs
   - **Referrers**: D'où viennent les utilisateurs
   - **Top Pages**: Pages les plus visitées
   - **Browsers**: Navigateurs utilisés
   - **Devices**: Types d'appareils

### Vérification dans la console:
```javascript
// Ouvrez DevTools (F12) → Console
// Vercel Analytics a injecté `window.va`
window.va

// Vous devez voir la fonction va() chargée
// Exemple: ƒ va(action, properties)
```

## 🎨 Configuration Vue Analytics (Optionnel - Personnalisé)

Vous pouvez tracker des événements personnalisés:

```vue
<template>
  <button @click="trackClick">Click me</button>
</template>

<script setup lang="ts">
import { useVercelAnalytics } from '@/composables/useVercelAnalytics'

const { trackEvent } = useVercelAnalytics()

const trackClick = () => {
  // Track custom event
  trackEvent('button_clicked', {
    buttonName: 'my-button',
    timestamp: new Date().toISOString(),
  })
}
</script>
```

## 📱 Dashboard Vercel - Ce que vous verrez

### Onglet "Analytics" → "Web Analytics":
- **Real Time**: Visiteurs en direct
- **Page Views**: Graphique des visites (24h, 7j, 30j)
- **Top Pages**: Pages les plus populaires
- **Referrers**: Sources de trafic
- **Browsers**: Chrome, Firefox, Safari, etc.
- **Devices**: Desktop/Mobile/Tablet
- **Countries**: Géolocalisation
- **OS**: Systèmes d'exploitation

### Onglet "Analytics" → "Speed Insights":
- **Core Web Vitals**: FCP, LCP, CLS
- **Interactions**: TTI (Time to Interactive)
- **Next.js Metrics**: (spécifique Next.js)

## 🔧 Configuration avancée

### Ignorer certaines pages (optionnel):
```typescript
// Dans src/main.ts ou composable
if ((window as any).va) {
  // Ignorer les pages d'admin ou test
  if (!location.pathname.includes('/admin')) {
    (window as any).va('pageview', {
      page: location.pathname,
    })
  }
}
```

### Custom Events Tracking:
```typescript
// Exemple: Tracker les clics sur liens externes
const trackExternalLink = (url: string) => {
  trackEvent('external_link_clicked', {
    url,
    referrer: document.referrer,
  })
}
```

## 📋 Checklist avant déploiement

- [ ] `npm install` exécuté
- [ ] `npm run build` fonctionne sans erreur
- [ ] `package.json` a `@vercel/analytics` en dependencies
- [ ] `src/main.ts` importe Vercel Analytics
- [ ] `index.html` a le script Web Analytics
- [ ] `vercel.json` présent et configuré
- [ ] `.vercelignore` présent
- [ ] Code poussé sur GitHub
- [ ] Projet importé dans Vercel
- [ ] Web Analytics activé

## 🌍 URL de votre site déployé

Après déploiement, Vercel vous donnera une URL comme:
```
https://portfolio-[unique-id].vercel.app
```

Elle apparaîtra aussi sur votre dashboard Vercel.

## 🔄 Déploiements automatiques

Une fois connecté à GitHub:
- **Chaque push sur `main`** → Déploiement auto en production
- **Chaque PR** → Déploiement preview automatique
- **Erreurs de build** → Email de notification

## 📞 Support

- **Docs Vercel**: https://vercel.com/docs
- **Vercel Analytics**: https://vercel.com/docs/analytics
- **Vue.js Guide**: https://vercel.com/docs/frameworks/vue

---

**✅ Vous êtes prêt!** Une fois déployé, les données commenceront à s'accumuler immédiatement dans le dashboard Vercel Analytics.

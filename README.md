# Portfolio - Melvin Yetonde 🚀

Portfolio Full Stack Developer moderne, responsive et hautement performant avec support dual Contact (WhatsApp + EmailJS), construit avec HTML5, Tailwind CSS, JavaScript et Vite.

## 📋 Table des matières
- [Fonctionnalités](#-fonctionnalités)
- [Installation et Démarrage](#-installation-et-démarrage)
- [Structure du Projet](#-structure-du-projet)
- [Configuration EmailJS & Contact](#-configuration-emailjs--contact)
- [Sécurité](#-sécurité)
- [Déploiement](#-déploiement)
- [Technologies](#-technologies)

---

## ✨ Fonctionnalités

- 🎨 **Design Immersif & Dark Mode** : Thème clair / sombre dynamique avec des polices soigneusement sélectionnées (*Inter*, *Playfair Display*, *Fira Code*).
- 📱 **Responsive & Mobile First** : Menu burger mobile rétractable et mise en page réactive.
- ⚡ **Compilateur Vite + Tailwind CSS** : Build de production rapide et CSS minifié.
- 📬 **Formulaire de Contact Hybride (WhatsApp + EmailJS)** : Envoi automatique par email tout en ouvrant l'application WhatsApp pré-remplie.
- 📄 **Curriculum Vitae Intégré** : Téléchargement direct de `CV_Melvin_Yetonde.pdf`.
- 🔍 **SEO & OpenGraph Optimisés** : Balises méta complètes pour les moteurs de recherche et les cartes de partage social (LinkedIn, Twitter/X, WhatsApp).

---

## 🔧 Installation et Démarrage

### Mode Développement (Recommandé)

```bash
# 1. Cloner le projet
git clone https://github.com/MelvinTnd/Portofolio.git
cd Portofolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement Vite
npm run dev
```

### Build de Production

```bash
# Générer le bundle minifié dans le dossier /dist
npm run build

# Prévisualiser la version de production
npm run preview
```

### Utilisation Statique Directe (Sans Node.js)
Vous pouvez également simplement double-cliquer sur `index.html` pour l'ouvrir directement dans n'importe quel navigateur Web !

---

## 📁 Structure du Projet

```text
├── dist/                    # Bundle de production généré par Vite
├── image/                   # Captures et visuels des projets
│   ├── BlackcineAdmin.png
│   ├── Ecomerce.png
│   ├── graphiste.png        # Image renommée et optimisée
│   └── upcompany.png
├── src/
│   └── style.css            # Styles Tailwind CSS & effets custom (Toasts, Hero, Syntax Highlighting)
├── .env.example             # Modèle de variables d'environnement
├── .gitignore               # Fichiers ignorés par Git (dist, node_modules, .env)
├── CV_Melvin_Yetonde.pdf    # CV officiel téléchargeable
├── EMAILJS_SETUP.md         # Guide détaillé de configuration d'EmailJS
├── index.html               # Page principale de l'application
├── package.json             # Dépendances et scripts npm
├── postcss.config.js        # Configuration PostCSS
├── profile.jpg              # Photo de profil
├── README.md                # Documentation du projet
├── SECURITY.md              # Recommandations de sécurité
├── tailwind.config.js       # Configuration Tailwind CSS
└── vite.config.js           # Configuration du bundler Vite
```

---

## ⚙️ Configuration EmailJS & Contact

Les clés de contact sont configurées dans l'objet `CONFIG` du fichier `index.html` :

```javascript
const CONFIG = {
    emailjs: {
        publicKey: "BGSgPmygqLJJc1_gt",
        serviceId: "service_kdyo5iz",
        templateId: "template_xi9qynx"
    },
    contact: {
        email: "melvinyetonde@gmail.com",
        whatsapp: "2290191680276"
    }
};
```

Pour personnaliser ces informations avec vos propres identifiants, suivez le guide détaillé dans [`EMAILJS_SETUP.md`](EMAILJS_SETUP.md).

---

## 🔐 Sécurité

Consultez le fichier [`SECURITY.md`](SECURITY.md) pour les recommandations complètes :
- 🛡️ **Whitelisting de domaine** dans le tableau de bord EmailJS (*Settings > Access Control*).
- 🔒 Masquage des variables dans un proxy backend pour les architectures d'entreprise.

---

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre dépôt GitHub à [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`, Output Directory: `dist`.

### Netlify / GitHub Pages
- **Output Directory** : `dist`
- **Build Command** : `npm run build`

---

## 🛠️ Technologies

- **Frontend** : HTML5, CSS3, JavaScript (ES6+), Tailwind CSS v3, Vite
- **Icons & Typography** : Material Symbols Outlined, Google Fonts (Inter, Playfair Display, Fira Code)
- **Services Web** : EmailJS Browser SDK, WhatsApp Web API
- **Build Tooling** : Node.js, PostCSS, Autoprefixer, Vite

---

**Créé avec ❤️ par Melvin Yetonde**

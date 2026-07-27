# Portfolio de Melvin Yetonde - Configuration

## 🔐 Configuration de Sécurité

### EmailJS
1. **Clés API exposées détectées** ⚠️
   - Public Key: `BGSgPmygqLJJc1_gt`
   - Service ID: `service_kdyo5iz` 
   - Template ID: `template_xi9qynx`

### Actions Recommandées

#### Option 1 : Utiliser un Backend (Recommandé)
```
Frontend (HTML/JS) 
    ↓
Backend (Node.js/PHP/Laravel)
    ↓
EmailJS API (clés sécurisées côté serveur)
```

#### Option 2 : Limiter les accès dans EmailJS
1. Rendez votre Public Key restrictive (domaine whitelist)
2. Limitez les templates accessibles
3. Activez les rate limits

### .env.example
Un fichier `.env.example` a été créé avec les variables requises.

## 📋 Checklist de Sécurité

- [ ] Changer les clés EmailJS après déploiement
- [ ] Ajouter domain whitelist dans EmailJS
- [ ] Masquer le numéro WhatsApp (optionnel)
- [ ] Implémenter un backend pour EmailJS
- [ ] Ajouter CORS policy
- [ ] Tester avec HTTPS
- [ ] Configurer un .gitignore

## 🔧 Configuration rapide (Sans backend)

Si vous voulez garder la solution simple :

1. Allez sur https://www.emailjs.com/
2. Dans Settings > Security > Access Control
3. Ajoutez votre domaine en whitelist
4. Activez "Restrict by Sender Email"

## 📱 WhatsApp
Le numéro est visible en clair (acceptable pour WhatsApp, c'est public).

# Configuration EmailJS pour le formulaire de contact

## Étapes pour configurer l'envoi d'email automatique

### 1. Créer un compte EmailJS
1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit (100 emails/mois)
3. Connectez-vous à votre compte

### 2. Créer un service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail recommandé)
4. Suivez les instructions pour connecter votre compte Gmail
5. Notez votre **Service ID** (ex: service_xxxxxxx)

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

**Subject:** Nouveau message depuis votre portfolio - {{from_name}}

**Content:**
```
Bonjour Melvin,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Type de projet: {{project_type}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
```

4. Notez votre **Template ID** (ex: template_xxxxxxx)

### 4. Obtenir votre clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key** (ex: xxxxxxxx)

### 5. Mettre à jour le code
Dans le fichier `index.html`, remplacez :
- `YOUR_PUBLIC_KEY` par votre Public Key
- `YOUR_SERVICE_ID` par votre Service ID
- `YOUR_TEMPLATE_ID` par votre Template ID

### Exemple de configuration finale :
```javascript
emailjs.init("abc123xyz456"); // Votre Public Key
await emailjs.send('service_abc123', 'template_xyz789', emailParams);
```

## Test
1. Remplissez le formulaire de contact
2. Cliquez sur "Envoyer le Message"
3. Vérifiez que :
   - WhatsApp s'ouvre avec le message pré-rempli
   - Vous recevez un email à melvinyetonde@gmail.com

## Note
Si vous ne configurez pas EmailJS, le formulaire fonctionnera toujours avec WhatsApp uniquement. L'envoi d'email sera simplement ignoré en cas d'erreur.

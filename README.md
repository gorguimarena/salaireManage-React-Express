# MultiPloy Pay - Système de Gestion de Paie Multi-Entreprises

Un système complet de gestion de paie et de présence pour entreprises multiples, avec suivi des employés, pointage QR code, traitement des salaires et gestion des paiements.

## 🚀 Fonctionnalités

### 👥 Gestion des Utilisateurs et Rôles
- **Super Admin**: Accès complet à toutes les entreprises
- **Admin**: Gestion d'une entreprise spécifique
- **Caissier**: Gestion des paiements et validation des bulletins
- **Vigile**: Pointage des présences via QR codes
- **Employé**: Accès à ses propres informations

### 🏢 Gestion Multi-Entreprises
- Isolation complète des données par entreprise
- Gestion des couleurs et logos personnalisés
- Paramètres spécifiques par entreprise (déductions, jours travaillés)

### 👷 Gestion des Employés
- Profils complets (nom, poste, contrat, salaire)
- Types de contrats: Journalier, Horaire, Fixe, Commission
- Suivi des horaires de travail
- Gestion absences

### 📱 Pointage des Présences
- Génération de QR codes sécurisés
- Validation en temps réel
- Délégation de validation pour les vigiles
- Historique des présences

### 💰 Gestion des Salaires
- Calcul automatique des bulletins de paie
- Gestion des déductions (absences, prêts)
- Différents types de payruns (mensuel, hebdomadaire, quotidien)
- Validation et approbation des bulletins

### 💳 Gestion des Paiements
- Suivi des paiements par bulletin
- Modes de paiement multiples (espèces, virement, mobile money)
- Historique complet des transactions

### 💰 Gestion des Prêts
- Création et suivi des prêts employés
- Calcul automatique des mensualités
- Suivi de la progression du remboursement

## 🛠️ Technologies Utilisées

### Backend
- **Node.js** avec **TypeScript**
- **Express.js** pour l'API REST
- **Prisma ORM** pour la base de données
- **MySQL** comme base de données principale
- **Stockage en mémoire** pour le cache des QR codes
- **JWT** pour l'authentification
- **bcryptjs** pour le hashage des mots de passe
- **Zod** pour la validation des données

### Frontend
- **React 18** avec **Vite**
- **React Router** pour la navigation
- **Tailwind CSS** pour le styling
- **shadcn/ui** pour les composants UI
- **Axios** pour les appels API
- **React Query** pour la gestion d'état serveur
- **Zustand** pour la gestion d'état client
- **Recharts** pour les graphiques

## 📋 Prérequis

- **Node.js** >= 18.0.0
- **npm** ou **yarn** ou **bun**
- **MySQL** >= 8.0
- **Git**

## 🚀 Installation et Configuration

### 1. Clonage du Repository

```bash
git clone <repository-url>
cd gestionLovable
```

### 2. Configuration de l'Environnement

#### Backend (.env dans /backend)
```env
# Base de données
DATABASE_URL="mysql://username:password@localhost:3306/multipoly_pay"
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DRIVER=mysql

# JWT
JWT_SECRET=your_super_secure_jwt_secret_minimum_32_characters
JWT_EXPIRES_IN=7d
COOKIE_NAME=auth-token

# Serveur
PORT=3000
NODE_ENV=development
```

#### Frontend (.env dans /frontend)
```env
VITE_API_URL=http://localhost:3000/api
```

### 3. Configuration de MySQL

#### Installation de MySQL (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

#### Installation de MySQL (macOS)
```bash
brew install mysql
brew services start mysql
mysql_secure_installation
```

#### Création de la base de données
```sql
CREATE DATABASE multipoly_pay CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'multipoly_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON multipoly_pay.* TO 'multipoly_user'@'localhost';
FLUSH PRIVILEGES;
```

### 4. Installation des Dépendances

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 5. Configuration de Prisma

```bash
cd backend
# Générer le client Prisma
npm run generate

# Appliquer les migrations
npx prisma migrate dev --name init

# (Optionnel) Peupler la base avec des données de test
npm run seed
```

### 6. Démarrage de l'Application

#### Terminal 1: Backend
```bash
cd backend
npm run dev
# L'API sera disponible sur http://localhost:3000
```

#### Terminal 2: Frontend
```bash
cd frontend
npm run dev
# L'application sera disponible sur http://localhost:5173
```

## 📊 Structure du Projet

```
gestionLovable/
├── backend/
│   ├── src/
│   │   ├── config/          # Configuration (DB, etc.)
│   │   ├── middlewares/     # Middlewares Express
│   │   ├── modules/         # Modules métier
│   │   │   ├── attendance/      # Gestion des présences
│   │   │   ├── company/         # Gestion des entreprises
│   │   │   ├── employee/        # Gestion des employés
│   │   │   ├── loan/            # Gestion des prêts
│   │   │   ├── payment/         # Gestion des paiements
│   │   │   ├── payRun/          # Gestion des payruns
│   │   │   ├── payslip/         # Gestion des bulletins
│   │   │   ├── qrAttendance/    # Pointage QR
│   │   │   ├── superAdminPermission/ # Permissions super admin
│   │   │   └── users/           # Authentification
│   │   ├── seed/            # Données de test
│   │   ├── types/           # Types TypeScript
│   │   └── utils/           # Utilitaires
│   ├── prisma/
│   │   ├── schema.prisma   # Schéma de base de données
│   │   └── migrations/     # Migrations Prisma
│   └── uploads/            # Fichiers uploadés
├── frontend/
│   ├── src/
│   │   ├── api/            # Services API
│   │   ├── components/     # Composants React
│   │   │   ├── ui/         # Composants UI réutilisables
│   │   │   └── layout/     # Layout et navigation
│   │   ├── pages/          # Pages de l'application
│   │   │   ├── dashboard/  # Dashboards par rôle
│   │   │   ├── companies/  # Gestion entreprises
│   │   │   ├── employees/  # Gestion employés
│   │   │   ├── loans/      # Gestion prêts
│   │   │   ├── payments/   # Gestion paiements
│   │   │   └── payruns/    # Gestion payruns
│   │   ├── schemas/       # Schémas de validation
│   │   ├── store/         # État global (Zustand)
│   │   └── hooks/         # Hooks personnalisés
│   └── public/            # Assets statiques
└── README.md
```

## 🔧 Scripts Disponibles

### Backend
```bash
npm run format      # Formater le code avec Prisma
npm run generate    # Générer le client Prisma
npm run migrate     # Appliquer les migrations
npm run build       # Compiler TypeScript
npm run dev         # Démarrer en mode développement
npm run seed        # Peupler la base avec des données de test
```

### Frontend
```bash
npm run dev         # Démarrer le serveur de développement
npm run build       # Build pour la production
npm run build:dev   # Build pour le développement
npm run preview     # Prévisualiser le build
npm run lint        # Vérifier le code avec ESLint
```

## 🔐 Comptes de Test

Après avoir exécuté `npm run seed`, les comptes suivants sont disponibles:

### Super Admin
- Email: `superadmin@demo.com`
- Mot de passe: `SuperAdmin123`

### Admins d'Entreprise
- CompanyOne: `admin1@companyone.com` / `Admin123`
- CompanyTwo: `admin2@companytwo.com` / `Admin123`

### Caissiers
- CompanyOne: `cashier1@companyone.com` / `Cashier123`
- CompanyTwo: `cashier2@companytwo.com` / `Cashier123`

### Vigiles
- CompanyOne: `vigile1@companyone.com` / `Vigile123`

### Employés
- Plusieurs comptes employés par entreprise avec mot de passe `Employee123`

## 🔄 Flux de Travail

1. **Configuration initiale**: Créer des entreprises et configurer les paramètres
2. **Gestion des employés**: Ajouter les employés avec leurs contrats et horaires
3. **Pointage des présences**: Les vigiles scannent les QR codes des employés
4. **Traitement des salaires**: Créer des payruns et calculer les bulletins
5. **Validation et paiement**: Les caissiers valident et paient les bulletins

## 🚀 Déploiement

### Variables d'Environnement de Production

```env
NODE_ENV=production
DATABASE_URL=mysql://user:pass@host:port/db
JWT_SECRET=your_production_jwt_secret
```

### Build et Déploiement

```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
# Servir les fichiers statiques depuis dist/
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Pour obtenir de l'aide:
1. Vérifiez la documentation
2. Consultez les issues GitHub
3. Contactez l'équipe de développement

---

**MultiPloy Pay** - Solution complète de gestion de paie pour entreprises modernes.
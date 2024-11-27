# Admin TODOs

## 🚀 Getting Started

1. Clone the Repository:
```bash
  git clone https://github.com/your-username/learn-nextjs.git
  cd learn-nextjs/admin-todos/
```
2. Install dependencies:
```bash
  npm install
```
3. Start the database:
```bash
docker compose up -d
```
4. Rename `.env.template` to `.env`.
5. Replace the environment variables in the `.env` file with the appropriate values.
6. Run development server:
```bash
  npm run dev
```
7. Open [http://localhost:3000](http://localhost:3000) in your browser
8. Run Prisma commands:
 ```bash
  npx prisma migrate dev
  npx prisma generate
```
9. Execute SEED to [create local database](http://localhost:3000/api/seed)

## 📦 Prisma Commands

Use these commands to set up and manage Prisma:
- Initialize Prisma:
```bash
  npx prisma init
```
- Migrate the database:
```bash
  npx prisma migrate dev
```
- Generate the Prisma client:
```bash
  npx prisma generate
```
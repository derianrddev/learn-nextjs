# Development
Steps to run the app in development mode:

1. Start the database:
   ```bash
    docker compose up -d
   ```
2. Rename `.env.template` to `.env`.
3. Replace the environment variables in the `.env` file with the appropriate values.

# Prisma Commands
Run the following commands to set up Prisma:
   ```bash
    npx prisma init
    npx prisma migrate dev
    npx prisma generate
   ```
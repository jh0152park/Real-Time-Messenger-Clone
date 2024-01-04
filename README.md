# Real Time Messenger Clone

# Source: [Code With Antonio](https://www.youtube.com/watch?v=PGPGcKBpAk8)

# Tech to be used for this project

-   Next.js13
-   React
-   Tailwind
-   Prisma
-   MongoDB
-   NextAuth
-   Pusher
-   Cloudinary
-   Vercel

# How to start

start with `num run dev` command

-   Create Next Project: `npx create-next-app@latest --typescript --tailwind`
-   Install some packages and instructions

    -   `npm install react-icons react-hook-form clsx`
    -   `npm i @tailwindcss/forms `
    -   `npm install -D prisma` after that run `npx prisma init`
    -   Replace `provider` to `mongodb` at schema.prisma as below
        ```
        datasource db {
            provider = "mongodb"
            url      = env("DATABASE_URL")
            }
        ```
    -   [move tpo MongoDB homepage](https://www.mongodb.com/atlas/database)
    -   Sign in to MongoDB
    -   Create a new Project with free course
    -   Go to `Security` -> `Quickstart` then Create a new Account
    -   Add IP address as `0.0.0.0/0` and it make allowe anywhere
    -   Finish and close and move to `Overview`
    -   Click on `CONNECT` button, press `MongoDB for VS Code`
    -   Copy the connection string and replace to `DATABASE_URL` at `.env` file
    -   Replace `<password>` to real password when made at the beginning
    -   Write down our model into `schema.prisma` file
    -   Cf) `npx prisma db push` run this command when wrote down models of mongoDB at `schema.prisma`
    -   `npm install next-auth@latest @prisma/client @next-auth/prisma-adapter bcrypt`
    -   `npm install -D @types/bcrypt`

# SetAside Financial

SetAside Financial is a freelancer-first finance application designed to help independent professionals manage tax set-asides, invoices, reminders, and recurring subscription plans.

## What’s included

- Secure login and registration flow
- Protected dashboard routes
- Invoice tracking and quick invoice creation
- Cash flow visualization
- Automatic reminders
- Stripe-ready checkout API for subscription monetization
- Production-ready deployment config for Render

## Tech stack

- Node.js
- Express
- Express session authentication
- bcryptjs password hashing
- Stripe Checkout integration
- Vanilla HTML, CSS and JavaScript

## Getting started

1. Install dependencies:

   npm install

2. Copy the environment file:

   cp .env.example .env

3. Update the values in `.env` with your own secrets.

4. Start the app:

   npm start

5. Open the app:

   http://localhost:3000

## Demo login

- Email: demo@setaside.app
- Password: demo123

## Stripe setup

To enable live payments, add your Stripe secret key in `.env`:

```bash
STRIPE_SECRET_KEY=sk_live_... 
APP_URL=https://your-app-url.com
```

The server will create a real Stripe Checkout session automatically when a user clicks a pricing plan and the Stripe key is present.

## Deployment

This project includes deployment config for Render:

- `render.yaml`
- `Dockerfile`

### Render deployment steps

1. Push this repo to GitHub.
2. Sign in to Render and create a new Web Service.
3. Connect the repository.
4. Choose the default build and start commands or use the included `render.yaml`.
5. Add environment variables from `.env.example`.
6. Deploy.

## Production notes

This version adds authentication and a Stripe-ready checkout flow, but for a real production system you should also add:

- database persistence (Postgres or MongoDB)
- email delivery and password reset flow
- bank sync and transaction ingestion
- role-based access control
- audit logs and monitoring
- CI/CD and automated tests

## Project structure

- `server.js` — app server and API
- `public/index.html` — auth + dashboard frontend
- `public/styles.css` — styling
- `public/app.js` — frontend logic
- `data/` — local JSON data store
- `render.yaml` — Render deployment config
- `Dockerfile` — container configuration

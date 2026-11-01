const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const dataDir = path.join(__dirname, 'data');
const storePath = path.join(dataDir, 'store.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function ensureStore() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(storePath)) {
    const seed = {
      summary: {
        cashOnHand: 18420,
        taxReserve: 6280,
        thisMonthRevenue: 9700,
        upcomingExpenses: 2360,
        runwayDays: 48,
        netProfit: 4820
      },
      invoices: [
        { id: 'INV-1042', client: 'Northstar Studio', amount: 2400, due: '2026-11-10', status: 'Paid', type: 'Retainer' },
        { id: 'INV-1043', client: 'Luma Health', amount: 3600, due: '2026-11-12', status: 'Pending', type: 'Project' },
        { id: 'INV-1044', client: 'Oak & Pine', amount: 1850, due: '2026-11-15', status: 'Pending', type: 'Consulting' },
        { id: 'INV-1045', client: 'Brightlane', amount: 2900, due: '2026-11-18', status: 'Draft', type: 'Retainer' }
      ],
      reminders: [
        { id: 'rem-1', title: 'Quarterly tax payment due', due: '2026-11-08', amount: 1800 },
        { id: 'rem-2', title: 'Client follow-up for INV-1043', due: '2026-11-11', amount: 3600 },
        { id: 'rem-3', title: 'Stripe invoice reminder', due: '2026-11-14', amount: 1850 }
      ],
      cashflow: [
        { label: 'Jan', income: 4200, expenses: 2100 },
        { label: 'Feb', income: 5300, expenses: 2600 },
        { label: 'Mar', income: 6100, expenses: 2800 },
        { label: 'Apr', income: 7000, expenses: 2900 },
        { label: 'May', income: 7100, expenses: 3200 },
        { label: 'Jun', income: 8200, expenses: 3500 }
      ],
      plans: [
        { id: 'starter', name: 'Starter', price: 19, description: 'Built for solo freelancers tracking cash flow and tax reserves.', features: ['Bank sync', 'Tax set-aside', 'Invoice tracking', '2 clients'] },
        { id: 'pro', name: 'Pro', price: 49, description: 'For growing freelancers with client management and automation.', features: ['Everything in Starter', 'Unlimited clients', 'Smart reminders', 'Advanced reports'], popular: true },
        { id: 'agency', name: 'Agency', price: 99, description: 'For teams and multi-client businesses scaling operations.', features: ['Everything in Pro', 'Team access', 'Custom invoices', 'Priority onboarding'] }
      ]
    };

    fs.writeFileSync(storePath, JSON.stringify(seed, null, 2));
  }
}

function readStore() {
  ensureStore();
  return JSON.parse(fs.readFileSync(storePath, 'utf8'));
}

function writeStore(data) {
  fs.writeFileSync(storePath, JSON.stringify(data, null, 2));
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, app: 'SetAside Financial', mode: 'live-demo', timestamp: new Date().toISOString() });
});

app.get('/api/dashboard', (req, res) => {
  const data = readStore();
  res.json(data);
});

app.get('/api/invoices', (req, res) => {
  const data = readStore();
  res.json(data.invoices);
});

app.post('/api/invoices', (req, res) => {
  const data = readStore();
  const { client, amount, due, type = 'Consulting' } = req.body || {};

  if (!client || !amount || !due) {
    return res.status(400).json({ error: 'Client, amount and due date are required.' });
  }

  const invoice = {
    id: `INV-${Math.floor(1000 + Math.random() * 9000)}`,
    client,
    amount: Number(amount),
    due,
    status: 'Draft',
    type
  };

  data.invoices.unshift(invoice);
  data.summary.thisMonthRevenue += Number(amount) * 0.45;
  writeStore(data);

  res.status(201).json(invoice);
});

app.get('/api/billing/plans', (req, res) => {
  const data = readStore();
  res.json(data.plans);
});

app.post('/api/billing/checkout', (req, res) => {
  const { planId, email } = req.body || {};
  const data = readStore();
  const plan = data.plans.find((item) => item.id === planId) || data.plans[1];

  const checkoutSession = {
    id: `cs_demo_${Date.now()}`,
    mode: 'demo',
    status: 'created',
    url: '/#pricing',
    plan: plan.name,
    amount: plan.price,
    email: email || 'freelancer@example.com',
    message: 'Demo checkout created successfully. Add Stripe keys in .env to activate live processing.'
  };

  res.status(200).json(checkoutSession);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`SetAside Financial app running on http://localhost:${port}`);
});

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

const formatMoney = (value) => money.format(value || 0);

async function loadDashboard() {
  const response = await fetch('/api/dashboard');
  const data = await response.json();

  document.getElementById('cashOnHand').textContent = formatMoney(data.summary.cashOnHand);
  document.getElementById('taxReserve').textContent = formatMoney(data.summary.taxReserve);
  document.getElementById('monthlyRevenue').textContent = formatMoney(data.summary.thisMonthRevenue);
  document.getElementById('upcomingExpenses').textContent = formatMoney(data.summary.upcomingExpenses);
  document.getElementById('netProfit').textContent = formatMoney(data.summary.netProfit);
  document.getElementById('runwayDays').textContent = `${data.summary.runwayDays} days`;

  const openInvoicesTotal = data.invoices
    .filter((invoice) => invoice.status !== 'Paid')
    .reduce((sum, invoice) => sum + Number(invoice.amount), 0);

  document.getElementById('openInvoices').textContent = formatMoney(openInvoicesTotal);

  renderCashflow(data.cashflow);
  renderInvoices(data.invoices);
  renderReminders(data.reminders);
  renderPlans(data.plans);
}

function renderCashflow(items) {
  const chart = document.getElementById('cashflowChart');
  chart.innerHTML = items
    .map(
      (item) => `
        <div class="bar-group">
          <div>
            <div class="bar" style="height:${(item.income / 10000) * 100}%"></div>
            <div class="bar expense" style="height:${(item.expenses / 10000) * 100}%"></div>
          </div>
          <div class="bar-label">${item.label}</div>
        </div>
      `
    )
    .join('');
}

function renderInvoices(invoices) {
  const list = document.getElementById('invoiceList');
  list.innerHTML = invoices.slice(0, 4).map((invoice) => {
    const status = invoice.status.toLowerCase();
    return `
      <div class="list-item">
        <div class="meta">
          <strong>${invoice.client}</strong>
          <small>${invoice.id} • ${invoice.type}</small>
          <small>Due ${invoice.due}</small>
        </div>
        <div class="meta align-right">
          <strong>${formatMoney(invoice.amount)}</strong>
          <span class="status-pill ${status}">${invoice.status}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderReminders(reminders) {
  const list = document.getElementById('reminderList');
  list.innerHTML = reminders.map((reminder) => `
    <div class="list-item">
      <div class="meta">
        <strong>${reminder.title}</strong>
        <small>Due ${reminder.due}</small>
      </div>
      <div class="meta align-right">
        <strong>${formatMoney(reminder.amount)}</strong>
      </div>
    </div>
  `).join('');
}

function renderPlans(plans) {
  const grid = document.getElementById('pricingGrid');
  grid.innerHTML = plans.map((plan) => `
    <article class="plan-card ${plan.popular ? 'popular' : ''}">
      ${plan.popular ? '<span class="popular-badge">Most popular</span>' : ''}
      <h3>${plan.name}</h3>
      <div class="price"><strong>${formatMoney(plan.price)}</strong><span>/mo</span></div>
      <p>${plan.description}</p>
      <ul>
        ${plan.features.map((feature) => `<li>${feature}</li>`).join('')}
      </ul>
      <button class="primary-btn wide" data-plan-id="${plan.id}">Choose ${plan.name}</button>
    </article>
  `).join('');

  document.querySelectorAll('[data-plan-id]').forEach((button) => {
    button.addEventListener('click', async () => {
      const planId = button.getAttribute('data-plan-id');
      const payload = { planId, email: 'freelancer@example.com' };
      const response = await fetch('/api/billing/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      alert(`${result.plan} checkout ready: ${result.message}`);
    });
  });
}

document.getElementById('invoiceForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const payload = {
    client: formData.get('client'),
    amount: Number(formData.get('amount')),
    due: formData.get('due'),
    type: 'Consulting'
  };

  const response = await fetch('/api/invoices', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    event.currentTarget.reset();
    await loadDashboard();
  }
});

document.getElementById('quickInvoiceBtn').addEventListener('click', () => {
  document.getElementById('invoiceForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

loadDashboard();

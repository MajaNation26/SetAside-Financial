:root {
  --bg: #f5f7fb;
  --card: #ffffff;
  --card-alt: #eaf4ff;
  --primary: #0f172a;
  --accent: #3b82f6;
  --accent-strong: #1d4ed8;
  --success: #2eb67d;
  --warning: #f59e0b;
  --text: #1f2937;
  --muted: #6b7280;
  --line: #e5e7eb;
  --shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
}

.hidden {
  display: none !important;
}

.container {
  width: min(1180px, calc(100vw - 40px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(245, 247, 251, 0.83);
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  font-weight: 800;
  gap: 10px;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  color: white;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
}

nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

nav a {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-badge {
  background: #dbeafe;
  color: var(--accent-strong);
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
}

.primary-btn, .secondary-btn, .small-btn, .tab-btn {
  border: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #fff;
  padding: 0.9rem 1.4rem;
  border-radius: 12px;
  font-weight: 700;
  box-shadow: var(--shadow);
}

.secondary-btn {
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--line);
  padding: 0.85rem 1.15rem;
  border-radius: 12px;
  font-weight: 600;
}

.small-btn {
  background: #f3f4f6;
  color: var(--primary);
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
  font-weight: 600;
}

.primary-btn:hover, .secondary-btn:hover, .small-btn:hover, .tab-btn:hover {
  transform: translateY(-1px);
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #eff6ff, #f8fafc 40%, #eef2ff);
  padding: 24px;
}

.auth-card {
  width: min(440px, 100%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(229, 231, 235, 0.9);
  border-radius: 30px;
  box-shadow: var(--shadow);
  padding: 28px 24px;
  backdrop-filter: blur(12px);
}

.auth-brand {
  justify-content: center;
  margin-bottom: 20px;
}

.auth-tabs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  background: #f3f4f6;
  border-radius: 14px;
  padding: 6px;
  margin-bottom: 18px;
}

.tab-btn {
  background: transparent;
  border-radius: 10px;
  padding: 0.75rem;
  font-weight: 700;
  color: var(--muted);
}

.tab-btn.active {
  background: #ffffff;
  color: var(--primary);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
}

.auth-form {
  display: grid;
  gap: 1rem;
}

.auth-form label,
.stack-form label {
  display: grid;
  gap: 0.45rem;
  font-weight: 600;
  color: var(--text);
}

.auth-form input,
.stack-form input {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  padding: 0.85rem 0.9rem;
}

.auth-form .wide,
.stack-form .wide {
  width: 100%;
}

.demo-note {
  margin: 0;
  text-align: center;
  color: var(--muted);
  font-size: 0.82rem;
}

.hero {
  padding: 72px 0 32px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 30px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: #dbeafe;
  color: var(--accent-strong);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hero-copy h1 {
  font-size: clamp(2.6rem, 4vw, 4.2rem);
  line-height: 1.08;
  margin: 1rem 0 1rem;
  letter-spacing: -0.06em;
}

.hero-copy p {
  font-size: 1.08rem;
  line-height: 1.7;
  color: var(--muted);
  max-width: 580px;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 1.75rem;
}

.hero-meta {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 1.5rem 0 0;
  color: var(--muted);
  font-weight: 500;
  flex-wrap: wrap;
}

.hero-card {
  display: grid;
  gap: 16px;
  padding: 20px;
  border-radius: 28px;
  background: linear-gradient(145deg, #eff6ff, #ffffff);
  border: 1px solid rgba(148, 163, 184, 0.15);
  box-shadow: var(--shadow);
}

.mini-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mini-card strong {
  font-size: 1.4rem;
}

.mini-card.highlight {
  background: linear-gradient(135deg, #dbeafe, #eff6ff);
}

.stats-section {
  padding: 12px 0 18px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 20px;
}

.card {
  background: var(--card);
  border: 1px solid rgba(229, 231, 235, 0.9);
  border-radius: 22px;
  box-shadow: var(--shadow);
  padding: 1.2rem 1.25rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.stat-card span,
.list-item small,
.card-header span,
.mini-card span {
  color: var(--muted);
}

.stat-card strong {
  font-size: clamp(1.6rem, 2vw, 2.1rem);
  letter-spacing: -0.05em;
}

.dashboard-grid,
.lower-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.9fr;
  gap: 20px;
  padding-top: 18px;
  padding-bottom: 18px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-header h2 {
  margin: 0;
  font-size: 1.3rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.3rem 0.7rem;
  font-size: 0.76rem;
  font-weight: 700;
}

.badge.success {
  color: #0d7c4f;
  background: #dbf7ea;
}

.chart {
  display: flex;
  align-items: end;
  gap: 12px;
  height: 210px;
  padding-top: 14px;
}

.bar-group {
  display: flex;
  flex: 1;
  gap: 8px;
  height: 100%;
  align-items: end;
  justify-content: center;
}

.bar {
  width: 18px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #60a5fa, #1d4ed8);
  min-height: 18px;
}

.bar.expense {
  background: linear-gradient(180deg, #fcd34d, #f59e0b);
}

.bar-label {
  font-size: 0.77rem;
  color: var(--muted);
  margin-top: 8px;
  text-align: center;
}

.list {
  display: grid;
  gap: 12px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 0.8rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fafbff;
}

.list-item strong {
  display: block;
  margin-bottom: 0.2rem;
}

.list-item .meta {
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
}

.status-pill {
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 700;
  background: #e0f2fe;
  color: #0369a1;
}

.status-pill.pending {
  background: #fef3c7;
  color: #92400e;
}

.status-pill.paid {
  background: #dcfce7;
  color: #166534;
}

.status-pill.draft {
  background: #f3f4f6;
  color: #374151;
}

.stack-form {
  display: grid;
  gap: 1rem;
}

.pricing-section {
  padding: 32px 0 72px;
}

.section-title {
  text-align: center;
  margin-bottom: 28px;
}

.section-title h2 {
  margin: 0.8rem auto 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
  max-width: 700px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 20px;
}

.plan-card {
  position: relative;
  padding: 1.6rem 1.2rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.plan-card.popular {
  border: 2px solid var(--accent);
  transform: translateY(-4px);
}

.popular-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  background: #dbeafe;
  color: var(--accent-strong);
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
}

.plan-card h3 {
  margin: 0.5rem 0 0.8rem;
  font-size: 1.4rem;
}

.price {
  display: flex;
  align-items: end;
  gap: 0.35rem;
  margin-bottom: 0.8rem;
}

.price strong {
  font-size: 2.3rem;
  letter-spacing: -0.07em;
}

.plan-card p {
  color: var(--muted);
  line-height: 1.6;
}

.plan-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 1.3rem;
  display: grid;
  gap: 0.75rem;
  color: var(--text);
}

.plan-card li::before {
  content: '✓';
  color: var(--success);
  font-weight: 800;
  margin-right: 0.6rem;
}

@media (max-width: 900px) {
  .hero-grid,
  .dashboard-grid,
  .lower-grid,
  .pricing-grid,
  .stat-grid {
    grid-template-columns: 1fr;
  }

  nav {
    display: none;
  }
}

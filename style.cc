:root {
  --bg-dark: #0f0c0b;
  --card-bg: rgba(25, 20, 18, 0.65);
  --accent-gold: #e2b170;
  --accent-glow: rgba(226, 177, 112, 0.15);
  --text-primary: #f5ede6;
  --text-secondary: #a39589;
  --border-glass: rgba(226, 177, 112, 0.12);
  --border-active: #e2b170;
  --whatsapp-color: #25d366;
  --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Tajawal', 'Plus Jakarta Sans', sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

/* خلفية توهج أنيقة */
.bg-glow {
  position: fixed;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(168, 107, 50, 0.12) 0%, rgba(15, 12, 11, 0) 70%);
  z-index: -1;
  pointer-events: none;
}

/* الهيدر والشريط العلوي */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 8%;
  border-bottom: 1px solid var(--border-glass);
  backdrop-filter: blur(12px);
}

.logo {
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #fff;
}

.logo span { color: var(--accent-gold); }

.nav-status {
  font-size: 0.85rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.pulse {
  width: 8px;
  height: 8px;
  background-color: #25d366;
  border-radius: 50%;
  box-shadow: 0 0 10px #25d366;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 1rem 3rem;
  animation: fadeIn 1s ease-out;
}

.tagline {
  font-size: 0.75rem;
  letter-spacing: 3px;
  color: var(--accent-gold);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.8rem;
  display: inline-block;
}

.hero h1 {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 0.8rem;
  background: linear-gradient(180deg, #ffffff 0%, #c4b5a5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 550px;
  margin: 0 auto;
}

.container {
  max-width: 1050px;
  margin: 0 auto 5rem;
  padding: 0 1.5rem;
}

/* قسم عرض المنتجات التفاعلي */
.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-header h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.section-header p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.product-card {
  background: var(--card-bg);
  border: 1px solid var(--border-glass);
  border-radius: 20px;
  padding: 1.8rem 1.4rem;
  position: relative;
  cursor: pointer;
  transition: var(--transition);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-8px);
  border-color: rgba(226, 177, 112, 0.4);
  box-shadow: 0 15px 35px var(--accent-glow);
}

.product-card.active {
  border-color: var(--border-active);
  background: rgba(35, 27, 24, 0.85);
  box-shadow: 0 0 25px var(--accent-glow);
}

.badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(226, 177, 112, 0.15);
  color: var(--accent-gold);
  border: 1px solid var(--accent-gold);
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 20px;
  font-weight: 700;
}

.product-icon {
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  transition: var(--transition);
}

.product-card:hover .product-icon {
  transform: scale(1.15) rotate(-5deg);
}

.product-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.tasting-notes {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-glass);
  padding-top: 1rem;
}

.weight { font-size: 0.78rem; color: #7a6e65; }
.price { font-size: 1.1rem; font-weight: 700; color: var(--accent-gold); }

/* Glassmorphic Form Card */
.checkout-card {
  background: var(--card-bg);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  padding: 3rem;
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-glass);
  padding-bottom: 1.5rem;
}

.selected-product-badge {
  background: var(--accent-glow);
  color: var(--accent-gold);
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.88rem;
  font-weight: 600;
  border: 1px solid rgba(226, 177, 112, 0.2);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.input-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-box.full-width { grid-column: 1 / -1; }

.input-box label {
  font-size: 0.88rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.input-box input,
.input-box textarea {
  background: rgba(15, 12, 11, 0.6);
  border: 1px solid var(--border-glass);
  border-radius: 12px;
  padding: 0.9rem 1.1rem;
  color: #fff;
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: var(--transition);
}

.input-box input:focus,
.input-box textarea:focus {
  border-color: var(--accent-gold);
  box-shadow: 0 0 15px var(--accent-glow);
}

/* تحكم الكمية التفاعلي */
.quantity-control {
  display: flex;
  align-items: center;
  background: rgba(15, 12, 11, 0.6);
  border: 1px solid var(--border-glass);
  border-radius: 12px;
  overflow: hidden;
}

.quantity-control button {
  background: transparent;
  border: none;
  color: var(--accent-gold);
  width: 45px;
  height: 45px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
}

.quantity-control button:hover {
  background: var(--accent-glow);
}

.quantity-control input {
  border: none;
  text-align: center;
  padding: 0;
  background: transparent;
  font-weight: 700;
}

/* زر التبديل للإهداء */
.gift-toggle-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 1.8rem 0;
}

.switch-container {
  position: relative;
  width: 46px;
  height: 24px;
}

.switch-container input { opacity: 0; width: 0; height: 0; }

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: rgba(255,255,255,0.1);
  border-radius: 30px;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: #fff;
  border-radius: 50%;
  transition: .4s;
}

input:checked + .slider { background-color: var(--accent-gold); }
input:checked + .slider:before { transform: translateX(22px); }

.gift-label { font-size: 0.9rem; color: var(--text-primary); }

.gift-expandable {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  margin-bottom: 1.5rem;
}

.gift-expandable.active {
  max-height: 200px;
  transition: max-height 0.5s ease-in-out;
}

/* زر الإرسال */
.submit-btn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #25d366, #128c7e);
  border: none;
  border-radius: 14px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: var(--transition);
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.25);
  margin-top: 1.5rem;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero h1 { font-size: 2rem; }
  .checkout-card { padding: 1.8rem 1.2rem; }
}

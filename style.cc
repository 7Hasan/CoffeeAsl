:root {
  --espresso: #261716;
  --coffee-brown: #4A3331;
  --caramel: #C88A58;
  --cream-bg: #F7F3EE;
  --card-bg: #FFFFFF;
  --text-main: #2B1A19;
  --border-light: #E6DCD0;
  --gold: #D4AF37;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Tajawal', sans-serif;
  background-color: var(--cream-bg);
  color: var(--text-main);
  line-height: 1.7;
}

/* شريط الإعلانات */
.announcement-bar {
  background-color: var(--espresso);
  color: var(--gold);
  text-align: center;
  padding: 0.6rem;
  font-size: 0.9rem;
  font-weight: 500;
}

/* الهيدر */
.header {
  background: linear-gradient(135deg, var(--espresso), var(--coffee-brown));
  color: #fff;
  text-align: center;
  padding: 4rem 1rem 3rem 1rem;
  border-bottom: 4px solid var(--caramel);
}

.logo {
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--gold);
  margin-bottom: 0.8rem;
}

.header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.header p {
  color: #d1c7bc;
  font-size: 1rem;
}

.container {
  max-width: 950px;
  margin: 2.5rem auto;
  padding: 0 1rem;
}

h2 {
  color: var(--espresso);
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
}

.section-subtitle {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

/* مستكشف القهوة التفاعلي */
.interactive-section {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 25px rgba(38,23,22,0.04);
}

.quiz-box label {
  display: block;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--coffee-brown);
}

.quiz-options {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.quiz-btn {
  background: var(--cream-bg);
  border: 1.5px solid var(--caramel);
  color: var(--espresso);
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.3s ease;
}

.quiz-btn:hover {
  background: var(--caramel);
  color: white;
  transform: translateY(-2px);
}

.quiz-result {
  margin-top: 1.2rem;
  text-align: center;
  font-weight: 700;
  color: var(--caramel);
  font-size: 1.05rem;
}

/* بطاقات المنتجات */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.product-card {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 1.8rem 1.2rem;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 15px rgba(0,0,0,0.03);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(38,23,22,0.08);
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--gold);
  color: var(--espresso);
  font-size: 0.7rem;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 6px;
}

.product-img {
  font-size: 3.5rem;
  margin-bottom: 0.8rem;
}

.product-card h3 {
  font-size: 1.05rem;
  color: var(--espresso);
  margin-bottom: 0.5rem;
}

.product-card .description {
  font-size: 0.82rem;
  color: #666;
  margin-bottom: 1rem;
}

.product-card .weight {
  display: block;
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.3rem;
}

.product-card .price {
  font-weight: 900;
  color: var(--caramel);
  font-size: 1.1rem;
}

/* نموذج الطلب */
.order-section {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(38,23,22,0.05);
}

.form-group {
  margin-bottom: 1.4rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--espresso);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.85rem;
  border: 1px solid var(--border-light);
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.95rem;
  background: #fcfbfa;
  outline: none;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--caramel);
  background: #fff;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 600;
}

.checkbox-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--caramel);
  cursor: pointer;
}

.gift-box {
  background: #fdf6ec;
  border: 1px dashed var(--caramel);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1.4rem;
}

.hidden {
  display: none;
}

.whatsapp-btn {
  width: 100%;
  padding: 1.1rem;
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  box-shadow: 0 4px 12px rgba(37,211,102,0.3);
}

.whatsapp-btn:hover {
  background-color: #1ebc57;
  transform: translateY(-2px);
}

/* التذييل */
.footer {
  text-align: center;
  padding: 2rem;
  color: #777;
  font-size: 0.85rem;
  border-top: 1px solid var(--border-light);
  margin-top: 3rem;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 라우팅
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(getHTML(), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};

function getHTML() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AllPayStore - 포스기 카드단말기 전문</title>
<meta name="description" content="포스기부터 카드단말기, 키오스크, CCTV까지. 매장 운영에 필요한 모든 솔루션을 한 곳에서. AllPayStore">
<meta name="keywords" content="포스기,카드단말기,키오스크,CCTV,무인결제,테이블오더,올인원포스">
<link rel="canonical" href="https://allpaystore.com/">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --blue: #1A6BFF;
    --blue2: #0051CC;
    --blue-light: #EEF4FF;
    --dark: #0F172A;
    --gray: #64748B;
    --gray2: #94A3B8;
    --gray3: #F1F5F9;
    --white: #FFFFFF;
    --border: #E2E8F0;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: var(--white); color: var(--dark); font-family: 'Noto Sans KR', sans-serif; overflow-x: hidden; }

  /* NAV */
  nav {
    position: fixed; top: 0; width: 100%; z-index: 100;
    padding: 0 40px; height: 88px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .nav-inner { max-width: 1200px; width: 100%; display: flex; align-items: center; justify-content: space-between; }
  .logo { font-size: 22px; font-weight: 800; color: var(--dark); letter-spacing: -0.5px; }
  .logo span { color: var(--blue); }
  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a { color: var(--gray); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
  .nav-links a:hover { color: var(--blue); }
  .nav-cta {
    background: var(--blue); color: white; border: none;
    padding: 10px 24px; border-radius: 8px;
    font-size: 14px; font-weight: 600; cursor: pointer;
    transition: all 0.2s; font-family: 'Noto Sans KR', sans-serif;
  }
  .nav-cta:hover { background: var(--blue2); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(26,107,255,0.3); }

  /* HERO */
  .hero {
    min-height: 100vh; padding: 88px 40px 0;
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background: linear-gradient(160deg, #F8FAFF 0%, #FFFFFF 50%, #F0F7FF 100%);
  }
  .hero-dots {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, #CBD5E1 1px, transparent 1px);
    background-size: 32px 32px; opacity: 0.4;
  }
  .hero-blob {
    position: absolute; right: -100px; top: 50%; transform: translateY(-50%);
    width: 600px; height: 600px;
    background: radial-gradient(ellipse, rgba(26,107,255,0.08) 0%, transparent 70%);
    border-radius: 50%;
  }
  .hero-content { position: relative; z-index: 2; max-width: 620px; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--blue-light); color: var(--blue);
    padding: 6px 14px; border-radius: 100px;
    font-size: 12px; font-weight: 600; margin-bottom: 32px;
  }
  .hero-badge::before { content: '●'; font-size: 8px; animation: blink 1.5s infinite; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
  .hero h1 {
    font-size: clamp(40px, 5.5vw, 68px); font-weight: 800;
    line-height: 1.15; letter-spacing: -1.5px; margin-bottom: 20px;
  }
  .hero h1 .blue { color: var(--blue); }
  .hero p {
    font-size: 17px; color: var(--gray); line-height: 1.8;
    margin-bottom: 40px; max-width: 500px;
  }
  .hero-btns { display: flex; gap: 12px; margin-bottom: 60px; }
  .btn-primary {
    background: var(--blue); color: white; border: none;
    padding: 15px 32px; border-radius: 10px; font-size: 15px; font-weight: 700;
    cursor: pointer; transition: all 0.25s; font-family: 'Noto Sans KR', sans-serif;
    box-shadow: 0 4px 20px rgba(26,107,255,0.25);
  }
  .btn-primary:hover { background: var(--blue2); transform: translateY(-2px); }
  .btn-secondary {
    background: white; color: var(--dark); border: 1.5px solid var(--border);
    padding: 15px 32px; border-radius: 10px; font-size: 15px; font-weight: 600;
    cursor: pointer; transition: all 0.25s; font-family: 'Noto Sans KR', sans-serif;
  }
  .btn-secondary:hover { border-color: var(--blue); color: var(--blue); }
  .hero-stats { display: flex; gap: 40px; padding-top: 40px; border-top: 1px solid var(--border); }
  .stat-num { font-size: 32px; font-weight: 800; color: var(--dark); letter-spacing: -1px; }
  .stat-num span { color: var(--blue); }
  .stat-lbl { font-size: 13px; color: var(--gray2); margin-top: 2px; }
  .hero-img {
    position: absolute; right: 80px; top: 50%; transform: translateY(-50%);
    width: 480px; height: 380px; background: white; border-radius: 24px;
    box-shadow: 0 32px 80px rgba(0,0,0,0.1), 0 0 0 1px var(--border);
    display: flex; align-items: center; justify-content: center; overflow: hidden;
  }
  .hero-img-inner {
    width: 100%; height: 100%;
    background: linear-gradient(135deg, var(--blue-light) 0%, white 100%);
    display: flex; align-items: center; justify-content: center;
    font-size: 80px; flex-direction: column; gap: 16px;
  }
  .hero-img-tag {
    font-size: 14px; font-weight: 600; color: var(--blue);
    background: var(--blue-light); padding: 8px 20px; border-radius: 100px;
  }

  /* SECTIONS */
  section { padding: 100px 40px; }
  .sec-inner { max-width: 1200px; margin: 0 auto; }
  .sec-tag { font-size: 12px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--blue); margin-bottom: 12px; }
  h2.sec-title { font-size: clamp(28px, 3.5vw, 44px); font-weight: 800; letter-spacing: -1px; line-height: 1.2; margin-bottom: 16px; }
  .sec-desc { color: var(--gray); font-size: 16px; line-height: 1.7; }
  .blue-bar { width: 48px; height: 4px; background: var(--blue); border-radius: 2px; margin: 16px 0; }

  /* PRODUCTS */
  .products { background: var(--gray3); }
  .prod-head { text-align: center; margin-bottom: 60px; }
  .prod-head .blue-bar { margin: 16px auto; }
  .prod-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .prod-card {
    background: white; border-radius: 16px; padding: 32px;
    border: 1.5px solid var(--border); transition: all 0.25s; cursor: pointer;
    position: relative; overflow: hidden;
  }
  .prod-card::before {
    content: ''; position: absolute; top: 0; left: 0;
    width: 100%; height: 3px; background: var(--blue);
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }
  .prod-card:hover { border-color: var(--blue); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(26,107,255,0.1); }
  .prod-card:hover::before { transform: scaleX(1); }
  .prod-icon { width: 52px; height: 52px; background: var(--blue-light); border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
  .prod-card h3 { font-size: 17px; font-weight: 700; margin-bottom: 10px; }
  .prod-card p { color: var(--gray); font-size: 13px; line-height: 1.7; }
  .prod-more { display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; font-size: 13px; font-weight: 600; color: var(--blue); }

  /* FEATURES */
  .features { background: white; }
  .feat-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .feat-list { display: grid; gap: 20px; }
  .feat-item { display: flex; gap: 20px; padding: 24px; border: 1.5px solid var(--border); border-radius: 14px; transition: all 0.25s; }
  .feat-item:hover { border-color: var(--blue); box-shadow: 0 4px 20px rgba(26,107,255,0.08); }
  .feat-ico { width: 44px; height: 44px; background: var(--blue-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
  .feat-item h3 { font-size: 15px; font-weight: 700; margin-bottom: 6px; }
  .feat-item p { font-size: 13px; color: var(--gray); line-height: 1.6; }
  .feat-visual { background: linear-gradient(135deg, var(--blue-light) 0%, #EEF2FF 100%); border-radius: 24px; height: 480px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 20px; border: 1px solid rgba(26,107,255,0.1); }
  .feat-visual-icon { font-size: 80px; }
  .feat-visual-txt { font-size: 16px; font-weight: 700; color: var(--blue); }

  /* PARTNERS */
  .partners { background: var(--gray3); text-align: center; }
  .partner-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-top: 48px; }
  .partner-logo { background: white; border: 1.5px solid var(--border); padding: 20px 36px; border-radius: 12px; font-size: 16px; font-weight: 700; color: var(--gray); transition: all 0.2s; }
  .partner-logo:hover { border-color: var(--blue); color: var(--blue); box-shadow: 0 4px 16px rgba(26,107,255,0.1); }

  /* CCTV */
  .cctv { background: white; }
  .cctv-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-top: 60px; }
  .cctv-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .cctv-card { background: var(--gray3); border-radius: 16px; padding: 28px 20px; text-align: center; border: 1.5px solid transparent; transition: all 0.25s; }
  .cctv-card:hover { border-color: var(--blue); background: var(--blue-light); }
  .cctv-card .ico { font-size: 32px; margin-bottom: 12px; }
  .cctv-card p { font-size: 13px; color: var(--gray); line-height: 1.5; }
  .cctv-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 24px; }
  .badge { padding: 8px 16px; background: var(--blue-light); color: var(--blue); border-radius: 100px; font-size: 13px; font-weight: 600; }

  /* TESTIMONIALS */
  .testimonials { background: var(--gray3); }
  .slider-wrap { position: relative; overflow: hidden; margin-top: 48px; }
  .slider-track { display: flex; gap: 24px; transition: transform 0.5s cubic-bezier(0.4,0,0.2,1); }
  .test-card { background: white; border-radius: 16px; padding: 32px; border: 1.5px solid var(--border); min-width: 360px; flex-shrink: 0; }
  .test-card:hover { border-color: var(--blue); box-shadow: 0 8px 30px rgba(26,107,255,0.08); }
  .test-stars { color: #FBBF24; font-size: 14px; margin-bottom: 16px; }
  .test-card p { font-size: 14px; color: var(--gray); line-height: 1.8; margin-bottom: 24px; }
  .test-author { display: flex; align-items: center; gap: 12px; }
  .test-ava { width: 44px; height: 44px; border-radius: 50%; overflow: hidden; flex-shrink: 0; border: 2px solid var(--border); }
  .test-ava img { width: 100%; height: 100%; object-fit: cover; }
  .test-name { font-size: 14px; font-weight: 700; }
  .test-role { font-size: 12px; color: var(--gray2); }
  .slider-controls { display: flex; justify-content: center; align-items: center; gap: 16px; margin-top: 32px; }
  .slider-btn { width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--border); background: white; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
  .slider-btn:hover { border-color: var(--blue); color: var(--blue); }
  .slider-dots { display: flex; gap: 8px; }
  .slider-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border); cursor: pointer; transition: all 0.2s; }
  .slider-dot.active { background: var(--blue); width: 24px; border-radius: 4px; }

  /* VENDING */
  .vending { background: white; }
  .vend-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-top: 60px; }
  .vend-list { display: grid; gap: 16px; }
  .vend-item { display: flex; gap: 16px; padding: 20px 24px; background: var(--gray3); border-radius: 14px; border: 1.5px solid transparent; transition: all 0.25s; }
  .vend-item:hover { border-color: var(--blue); background: var(--blue-light); }
  .vend-ico { font-size: 22px; }
  .vend-item h4 { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
  .vend-item p { font-size: 12px; color: var(--gray); }
  .vend-spaces { background: var(--gray3); border-radius: 20px; padding: 36px; }
  .vend-spaces h3 { font-size: 18px; font-weight: 800; margin-bottom: 20px; }
  .spaces-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .space-item { background: white; border-radius: 10px; padding: 12px; text-align: center; font-size: 13px; color: var(--gray); border: 1.5px solid var(--border); font-weight: 500; transition: all 0.2s; }
  .space-item:hover { border-color: var(--blue); color: var(--blue); }

  /* DEMOLITION */
  .demolition { background: var(--gray3); }
  .demo-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-top: 60px; }
  .demo-img {
    border-radius: 20px; overflow: hidden; position: relative;
    height: 480px; background: #1a1a1a;
    display: flex; align-items: flex-end;
  }
  .demo-img-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
  }
  .demo-img-text {
    position: relative; z-index: 2; padding: 32px;
    color: white; font-size: 24px; font-weight: 800; line-height: 1.3;
  }
  .demo-img-bg {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, #2d1b00, #1a0a00);
    display: flex; align-items: center; justify-content: center;
    font-size: 100px;
  }
  .demo-right h3 { font-size: 26px; font-weight: 800; margin-bottom: 8px; }
  .demo-right .demo-sub { color: var(--gray); font-size: 15px; line-height: 1.7; margin-bottom: 28px; }
  .accordion { display: grid; gap: 10px; }
  .acc-item { background: white; border-radius: 12px; border: 1.5px solid var(--border); overflow: hidden; transition: border-color 0.2s; }
  .acc-item.open { border-color: var(--blue); }
  .acc-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 24px; cursor: pointer; transition: background 0.2s;
  }
  .acc-header:hover { background: var(--blue-light); }
  .acc-title { font-size: 15px; font-weight: 700; color: var(--dark); }
  .acc-item.open .acc-title { color: var(--blue); }
  .acc-icon {
    width: 28px; height: 28px; border-radius: 50%;
    background: var(--blue-light); color: var(--blue);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; font-weight: 700; flex-shrink: 0; transition: all 0.2s;
  }
  .acc-item.open .acc-icon { background: var(--blue); color: white; }
  .acc-body { display: none; padding: 0 24px 20px; color: var(--gray); font-size: 14px; line-height: 1.7; }
  .acc-item.open .acc-body { display: block; }

  /* NUMBERS */
  .numbers { background: var(--blue-light); text-align: center; }
  .numbers-grid { display: flex; gap: 0; justify-content: center; margin-top: 48px; flex-wrap: wrap; }
  .number-item { padding: 40px 60px; border-right: 1px solid rgba(26,107,255,0.15); }
  .number-item:last-child { border-right: none; }
  .number-big { font-size: 52px; font-weight: 900; color: var(--blue); letter-spacing: -2px; line-height: 1; }
  .number-desc { font-size: 13px; color: var(--gray); margin-top: 8px; line-height: 1.5; }

  /* CTA */
  .cta { background: linear-gradient(135deg, var(--blue) 0%, var(--blue2) 100%); text-align: center; color: white; }
  .cta .sec-tag { color: rgba(255,255,255,0.7); }
  .cta h2 { color: white; }
  .cta .sec-desc { color: rgba(255,255,255,0.8); max-width: 480px; margin: 0 auto 40px; }
  .cta-btns { display: flex; gap: 12px; justify-content: center; margin-bottom: 48px; }
  .btn-white { background: white; color: var(--blue); border: none; padding: 15px 36px; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.25s; font-family: 'Noto Sans KR', sans-serif; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
  .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.2); }
  .btn-wout { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.5); padding: 15px 36px; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.25s; font-family: 'Noto Sans KR', sans-serif; }
  .btn-wout:hover { border-color: white; }
  .contact-row { display: flex; gap: 32px; justify-content: center; font-size: 14px; color: rgba(255,255,255,0.7); }
  .contact-row a { color: white; text-decoration: none; font-weight: 600; }

  /* FOOTER */
  footer { background: var(--dark); padding: 48px 40px; }
  .footer-logo { font-size: 20px; font-weight: 800; color: white; }
  .footer-logo span { color: var(--blue); }
  .footer-copy { font-size: 13px; color: #64748B; }

  /* MOBILE */
  @media (max-width: 768px) {
    nav { padding: 0 20px; }
    .nav-links { display: none; }
    section { padding: 60px 20px; }
    .hero { padding: 88px 20px 60px; }
    .hero-img { display: none; }
    .hero h1 { font-size: 36px; }
    .prod-grid { grid-template-columns: 1fr; }
    .feat-wrap { grid-template-columns: 1fr; }
    .feat-visual { height: 220px; }
    .cctv-wrap { grid-template-columns: 1fr; }
    .test-card { min-width: 280px; }
    .vend-wrap { grid-template-columns: 1fr; }
    .hero-stats { gap: 20px; flex-wrap: wrap; }
    footer { flex-direction: column; gap: 16px; text-align: center; padding: 32px 20px; }
  }

  /* ANIMATIONS */
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  .hero-badge{animation:fadeUp .5s ease .1s both}
  .hero h1{animation:fadeUp .5s ease .25s both}
  .hero p{animation:fadeUp .5s ease .4s both}
  .hero-btns{animation:fadeUp .5s ease .55s both}
  .hero-stats{animation:fadeUp .5s ease .7s both}
</style>
</head>
<body>

<nav>
  <div class="nav-inner">
  <div class="logo">AllPay<span>Store</span></div>
  <ul class="nav-links">
    <li><a href="#products">제품</a></li>
    <li><a href="#features">서비스</a></li>
    <li><a href="#partners">파트너</a></li>
    <li><a href="#cta">문의</a></li>
  </ul>
  <button class="nav-cta" onclick="location.href='#cta'">무료 견적 받기</button>
  </div>
</nav>

<section class="hero">
  <div class="hero-dots"></div>
  <div class="hero-blob"></div>
  <div class="sec-inner" style="width:100%;padding:80px 0;">
  <div class="hero-content">
    <div class="hero-badge">Smart Payment Solution</div>
    <h1>사장님의 매장을<br><span class="blue">완성하는</span><br>결제 파트너</h1>
    <p>포스기부터 카드단말기, 키오스크, CCTV까지.<br>매장 운영에 필요한 모든 솔루션을 한 곳에서.</p>
    <div class="hero-btns">
      <button class="btn-primary" onclick="location.href='#cta'">무료 견적 받기</button>
      <button class="btn-secondary" onclick="location.href='#products'">제품 둘러보기 →</button>
    </div>
    <div class="hero-stats">
      <div class="stat"><div class="stat-num">1,499<span>+</span></div><div class="stat-lbl">누적 설치 실적</div></div>
      <div class="stat"><div class="stat-num">87</div><div class="stat-lbl">월평균 설치</div></div>
      <div class="stat"><div class="stat-num"><span>0</span>%</div><div class="stat-lbl">사고 발생률</div></div>
      <div class="stat"><div class="stat-num">28</div><div class="stat-lbl">협력 파트너사</div></div>
    </div>
  </div>
  </div>
</section>

<section class="products" id="products">
  <div class="sec-inner">
  <div class="prod-head">
    <div class="sec-tag">Product Lineup</div>
    <h2 class="sec-title">매장에 딱 맞는 스마트 결제 라인업</h2>
    <div class="blue-bar"></div>
    <p class="sec-desc">검증된 하드웨어로 더 쉽고 빠른 결제 환경을 경험하세요</p>
  </div>
  <div class="prod-grid">
    <div class="prod-card"><div class="prod-icon">🖥️</div><h3>올인원 포스시스템</h3><p>어떤 업종도 OK. 실시간 매출 분석까지 한 번에 관리합니다.</p><div class="prod-more">자세히 보기 →</div></div>
    <div class="prod-card"><div class="prod-icon">💳</div><h3>자동커팅 단말기</h3><p>빠른 영수증 출력과 자동 커팅 기능으로 매장 회전율을 높여줍니다.</p><div class="prod-more">자세히 보기 →</div></div>
    <div class="prod-card"><div class="prod-icon">📱</div><h3>컴팩트 실속형 단말기</h3><p>좁은 카운터에서도 공간 활용이 뛰어난 소규모 매장 최적 모델.</p><div class="prod-more">자세히 보기 →</div></div>
    <div class="prod-card"><div class="prod-icon">🤳</div><h3>고객 토스단말기</h3><p>고객이 직접 결제하고 포인트를 적립하는 스마트한 경험.</p><div class="prod-more">자세히 보기 →</div></div>
    <div class="prod-card"><div class="prod-icon">📡</div><h3>무선 카드단말기</h3><p>배달, 야외 행사장 어디서나. LTE 통신으로 완벽한 결제 지원.</p><div class="prod-more">자세히 보기 →</div></div>
    <div class="prod-card"><div class="prod-icon">🔵</div><h3>초소형 블루투스 단말기</h3><p>스마트폰만 있으면 결제 준비 끝. 1인 창업자에게 최적.</p><div class="prod-more">자세히 보기 →</div></div>
    <div class="prod-card"><div class="prod-icon">🍽️</div><h3>프리미엄 테이블 오더</h3><p>고객이 자리에서 직접 주문과 결제. 인건비 절감과 스마트한 운영.</p><div class="prod-more">자세히 보기 →</div></div>
    <div class="prod-card"><div class="prod-icon">🖥</div><h3>공간절약형 미니키오스크</h3><p>카운터 위에 간편 배치. 좁은 매장에서도 인건비 절감 효과.</p><div class="prod-more">자세히 보기 →</div></div>
    <div class="prod-card"><div class="prod-icon">🤖</div><h3>스마트 무인결제 키오스크</h3><p>직관적인 UI로 주문 대기 시간을 줄이고 운영 효율을 극대화.</p><div class="prod-more">자세히 보기 →</div></div>
  </div>
  </div>
</section>

<section class="features" id="features">
  <div class="sec-inner">
  <div class="feat-wrap">
    <div class="feat-visual">
      <div class="feat-visual-icon">💼</div>
      <div class="feat-visual-txt">Smart Business Solution</div>
    </div>
    <div>
      <div class="sec-tag">Why AllPayStore</div>
      <h2 class="sec-title">AllPayStore는<br>무엇을 도와드릴까요?</h2>
      <div class="blue-bar"></div>
      <div class="feat-list">
        <div class="feat-item"><div class="feat-ico">⚙️</div><div><h3>맞춤형 UI 설정</h3><p>메뉴 배치와 결제 동선을 직접 설계하여 계산 시간을 단축하세요.</p></div></div>
        <div class="feat-item"><div class="feat-ico">📊</div><div><h3>통합 매출 관리</h3><p>배달 앱, 오프라인 데이터를 하나로 모아 실시간 매출 추이를 파악합니다.</p></div></div>
        <div class="feat-item"><div class="feat-ico">🤖</div><div><h3>AI 매출 분석 리포트</h3><p>요일·시간대별 패턴 분석으로 최적의 운영 시간을 제안합니다.</p></div></div>
        <div class="feat-item"><div class="feat-ico">🔧</div><div><h3>즉시 원격 지원</h3><p>기기 장애 발생 시 즉시 원격 지원으로 문제를 해결합니다.</p></div></div>
        <div class="feat-item"><div class="feat-ico">⭐</div><div><h3>스마트 리뷰 연동</h3><p>매장 리뷰와 SNS 피드백을 실시간으로 확인하며 고객 소통을 강화합니다.</p></div></div>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="partners" id="partners">
  <div class="sec-inner">
  <div class="sec-tag">Partnership</div>
  <h2 class="sec-title">결제 라인 파트너사</h2>
  <div class="blue-bar" style="margin:16px auto"></div>
  <p class="sec-desc">대한민국 대표 브랜드와 함께 사장님의 매장 퀄리티를 높여드립니다</p>
  <div class="partner-logos">
    <div class="partner-logo">POSBANK</div>
    <div class="partner-logo">toss place</div>
    <div class="partner-logo">UNION</div>
    <div class="partner-logo">KOVAN</div>
    <div class="partner-logo">imu</div>
    <div class="partner-logo">SK텔레콤</div>
    <div class="partner-logo">coway</div>
    <div class="partner-logo">LG전자</div>
    <div class="partner-logo">SK매직</div>
    <div class="partner-logo">KT올레</div>
  </div>
  </div>
</section>

<section class="cctv">
  <div class="sec-inner">
  <div class="sec-tag">Security</div>
  <h2 class="sec-title">스마트 매장 안심 CCTV</h2>
  <div class="blue-bar"></div>
  <p class="sec-desc">24시간 고화질 녹화는 기본, 포스기와 연동되어 결제 시점의 영상을 즉시 확인하세요.</p>
  <div class="cctv-wrap">
    <div class="cctv-cards">
      <div class="cctv-card"><div class="ico">📷</div><p>360° 회전형<br>실내 카메라</p></div>
      <div class="cctv-card"><div class="ico">🔭</div><p>야외용<br>불릿 카메라</p></div>
      <div class="cctv-card"><div class="ico">🎯</div><p>PTZ<br>고성능 카메라</p></div>
      <div class="cctv-card"><div class="ico">🌐</div><p>컴팩트<br>돔 카메라</p></div>
    </div>
    <div>
      <h3 style="font-size:24px;font-weight:800;margin-bottom:16px;">포스기와 완벽 연동</h3>
      <p style="color:var(--gray);line-height:1.8;font-size:15px;margin-bottom:24px;">결제 시점을 자동으로 태깅하여 의심 거래를 즉시 확인할 수 있습니다. 실시간 원격 모니터링으로 어디서든 매장을 지킬 수 있어요.</p>
      <div class="cctv-badges">
        <span class="badge">24시간 녹화</span>
        <span class="badge">실시간 모니터링</span>
        <span class="badge">POS 연동</span>
        <span class="badge">원격 접속</span>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="testimonials">
  <div class="sec-inner">
  <div class="sec-tag">Reviews</div>
  <h2 class="sec-title">사장님들의 실제 후기</h2>
  <div class="blue-bar"></div>
  <div class="slider-wrap">
    <div class="slider-track" id="sliderTrack">
      <div class="test-card">
        <div class="test-stars">★★★★★</div>
        <p>인터넷과 포스기를 함께 설치하니 훨씬 안정적이에요. 예약 시스템과 결제가 끊김 없이 운영되어 고객 응대가 훨씬 수월해졌습니다. 설치 후 매출도 올라간 것 같아 정말 만족합니다.</p>
        <div class="test-author">
          <div class="test-ava"><img src="https://api.dicebear.com/7.x/personas/svg?seed=choi&backgroundColor=b6e3f4" alt="최다은"></div>
          <div><div class="test-name">최다은</div><div class="test-role">미용실 운영 · 서울 강남</div></div>
        </div>
      </div>
      <div class="test-card">
        <div class="test-stars">★★★★★</div>
        <p>24시간 운영 매장이라 안정성이 가장 중요한데 만족합니다. 문제 발생 시 빠른 대응이 큰 장점입니다. 사장님이 친절하시고 설치도 깔끔하게 해주셨어요.</p>
        <div class="test-author">
          <div class="test-ava"><img src="https://api.dicebear.com/7.x/personas/svg?seed=jung&backgroundColor=c0aede" alt="정우성"></div>
          <div><div class="test-name">정우성</div><div class="test-role">편의점 운영 · 경기 수원</div></div>
        </div>
      </div>
      <div class="test-card">
        <div class="test-stars">★★★★★</div>
        <p>포스기 설치 후 매장 운영이 훨씬 편해졌어요. 초보 사장도 쉽게 사용할 수 있어 만족합니다. 직원 교육도 따로 필요 없을 정도로 직관적이에요.</p>
        <div class="test-author">
          <div class="test-ava"><img src="https://api.dicebear.com/7.x/personas/svg?seed=kim&backgroundColor=ffd5dc" alt="김지훈"></div>
          <div><div class="test-name">김지훈</div><div class="test-role">카페 운영 · 부산 해운대</div></div>
        </div>
      </div>
      <div class="test-card">
        <div class="test-stars">★★★★★</div>
        <p>키오스크 도입 후 주문 실수가 확 줄었어요. 손님들도 기다리지 않고 바로 주문하니까 회전율이 높아졌습니다. 투자 대비 효과가 정말 뛰어나요.</p>
        <div class="test-author">
          <div class="test-ava"><img src="https://api.dicebear.com/7.x/personas/svg?seed=park&backgroundColor=d1f7c4" alt="박소연"></div>
          <div><div class="test-name">박소연</div><div class="test-role">분식집 운영 · 인천 부평</div></div>
        </div>
      </div>
      <div class="test-card">
        <div class="test-stars">★★★★★</div>
        <p>무선 카드단말기 덕분에 배달 결제가 너무 편해졌어요. 이전에는 단말기 들고 다니기 불편했는데 지금은 가볍고 배터리도 오래가서 아주 만족합니다.</p>
        <div class="test-author">
          <div class="test-ava"><img src="https://api.dicebear.com/7.x/personas/svg?seed=lee&backgroundColor=ffecc7" alt="이민호"></div>
          <div><div class="test-name">이민호</div><div class="test-role">치킨집 운영 · 대구 수성</div></div>
        </div>
      </div>
      <div class="test-card">
        <div class="test-stars">★★★★★</div>
        <p>CCTV까지 함께 설치했는데 포스기와 연동되니까 의심 거래도 바로 확인할 수 있어요. 혼자 운영하는 매장인데 이제 집에서도 안심이 돼요.</p>
        <div class="test-author">
          <div class="test-ava"><img src="https://api.dicebear.com/7.x/personas/svg?seed=han&backgroundColor=c9e8ff" alt="한지영"></div>
          <div><div class="test-name">한지영</div><div class="test-role">네일샵 운영 · 서울 홍대</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="slider-controls">
    <button class="slider-btn" onclick="slideMove(-1)">←</button>
    <div class="slider-dots" id="sliderDots"></div>
    <button class="slider-btn" onclick="slideMove(1)">→</button>
  </div>
  </div>
</section>

<section class="vending">
  <div class="sec-inner">
  <div class="sec-tag">Vending Machine</div>
  <h2 class="sec-title">24시간 무인매장의 혁신<br>LK 광고형 홈타운 밴딩머신</h2>
  <div class="blue-bar"></div>
  <div class="vend-wrap">
    <div class="vend-list">
      <div class="vend-item"><div class="vend-ico">📺</div><div><h4>광고 수익 창출</h4><p>23.4인치 터치스크린으로 효과적인 광고 송출 가능</p></div></div>
      <div class="vend-item"><div class="vend-ico">⚙️</div><div><h4>운영 편의성</h4><p>원하는 매장 공지사항을 손쉽게 송출하여 편의성 극대화</p></div></div>
      <div class="vend-item"><div class="vend-ico">🎨</div><div><h4>커스터마이징</h4><p>어떤 공간에도 어울리는 화이트톤, 브랜드 로고 적용 가능</p></div></div>
      <div class="vend-item"><div class="vend-ico">📊</div><div><h4>스마트 관리프로그램</h4><p>실시간 재고 파악 및 알림, 매출 데이터 리포트 제공</p></div></div>
      <div class="vend-item"><div class="vend-ico">🔧</div><div><h4>원격 관리 & 유지보수</h4><p>문제 발생 시 즉시 원격 제어 가능</p></div></div>
    </div>
    <div class="vend-spaces">
      <h3>설치 가능 공간</h3>
      <div class="spaces-grid">
        <div class="space-item">병원</div><div class="space-item">PC방</div><div class="space-item">카페</div>
        <div class="space-item">학교/학원</div><div class="space-item">아파트</div><div class="space-item">헬스장</div>
        <div class="space-item">관공서</div><div class="space-item">오피스</div><div class="space-item">종교시설</div>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="demolition">
  <div class="sec-inner">
  <div class="sec-tag">Demolition Solution</div>
  <h2 class="sec-title">AllPayStore 철거 솔루션</h2>
  <div class="blue-bar"></div>
  <p class="sec-desc">복잡한 철거부터 폐기물 처리, 원상복구까지 한 번에 해결하세요. 전문 엔지니어팀이 안전하고 신속하게 사장님의 다음 시작을 도와드립니다.</p>
  <div class="demo-wrap">
    <div class="demo-img">
      <div class="demo-img-bg">🔨</div>
      <div class="demo-img-overlay"></div>
      <div class="demo-img-text">정확한 견적과 완벽한 시공으로<br>믿음을 드립니다.</div>
    </div>
    <div class="demo-right">
      <h3>철거 솔루션 서비스</h3>
      <p class="demo-sub">전문 엔지니어팀이 안전하고 신속하게 사장님의 다음 시작을 도와드립니다.</p>
      <div class="accordion">
        <div class="acc-item open" onclick="toggleAcc(this)">
          <div class="acc-header">
            <span class="acc-title">정밀 현장 분석</span>
            <div class="acc-icon">−</div>
          </div>
          <div class="acc-body">철거 전 구조물 진단 및 안전 계획 수립으로 사고를 방지합니다.</div>
        </div>
        <div class="acc-item" onclick="toggleAcc(this)">
          <div class="acc-header">
            <span class="acc-title">원스톱 원상복구</span>
            <div class="acc-icon">+</div>
          </div>
          <div class="acc-body">철거 후 다음 임차인을 위한 완벽한 원상복구 공사까지 통합 제공합니다.</div>
        </div>
        <div class="acc-item" onclick="toggleAcc(this)">
          <div class="acc-header">
            <span class="acc-title">폐기물 적법 처리</span>
            <div class="acc-icon">+</div>
          </div>
          <div class="acc-body">모든 폐기물은 관련 법규에 따라 투명하고 깔끔하게 처리 및 신고 대행합니다.</div>
        </div>
        <div class="acc-item" onclick="toggleAcc(this)">
          <div class="acc-header">
            <span class="acc-title">실시간 공정 보고</span>
            <div class="acc-icon">+</div>
          </div>
          <div class="acc-body">현장에 오지 않아도 카톡으로 철거 진행 상황을 사진과 영상으로 보고합니다.</div>
        </div>
        <div class="acc-item" onclick="toggleAcc(this)">
          <div class="acc-header">
            <span class="acc-title">합리적 정찰제</span>
            <div class="acc-icon">+</div>
          </div>
          <div class="acc-body">숨은 추가 비용 없이, 면적과 난이도에 따른 투명한 견적 시스템을 운영합니다.</div>
        </div>
        <div class="acc-item" onclick="toggleAcc(this)">
          <div class="acc-header">
            <span class="acc-title">100% 사후 책임</span>
            <div class="acc-icon">+</div>
          </div>
          <div class="acc-body">공사 중 발생할 수 있는 소음, 분쟁 해결 및 완벽한 마무리를 보장합니다.</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="numbers">
  <div class="sec-inner">
  <div class="sec-tag">Some Numbers</div>
  <h2 class="sec-title">숫자로 증명하는 신뢰</h2>
  <div class="blue-bar" style="margin:16px auto"></div>
  <p class="sec-desc">숫자 데이터 기반 신뢰 지표</p>
  <div class="numbers-grid">
    <div class="number-item"><div class="number-big">87</div><div class="number-desc">월평균 87곳의<br>현장 완료</div></div>
    <div class="number-item"><div class="number-big">28</div><div class="number-desc">28개의<br>협력 파트너사</div></div>
    <div class="number-item"><div class="number-big">0%</div><div class="number-desc">사고<br>발생률</div></div>
    <div class="number-item"><div class="number-big">1,500</div><div class="number-desc">최근 1년간<br>1,500+건의 실적</div></div>
  </div>
  </div>
</section>

<section class="cta" id="cta">
  <div class="sec-inner">
  <div class="sec-tag">Get Started</div>
  <h2 class="sec-title">지금 바로 전문가의 추천을 받아보세요</h2>
  <div class="blue-bar" style="margin:16px auto 20px; background:rgba(255,255,255,0.4)"></div>
  <p class="sec-desc">매장 업종에 딱 맞는 장비가 궁금하신가요? 1분 안에 무료 견적을 받아보세요.</p>
  <div class="cta-btns">
    <button class="btn-white" onclick="location.href='tel:010-9876-8282'">1분 견적 요청하기</button>
    <button class="btn-wout" onclick="location.href='tel:010-9876-8282'">전화 상담</button>
  </div>
  <div class="contact-row">
    <span>📧 <a href="mailto:dandylsk@naver.com">dandylsk@naver.com</a></span>
    <span>📞 <a href="tel:010-9876-8282">010-9876-8282</a></span>
  </div>
  </div>
</section>

<footer>
  <div class="sec-inner" style="display:flex;justify-content:space-between;align-items:center;">
  <div class="footer-logo">AllPay<span>Store</span></div>
  <div class="footer-copy">© 2025 AllPayStore. All rights reserved. | allpaystore.com</div>
  </div>
</footer>

<script>
// 슬라이더
let slideIndex = 0;
const totalSlides = 6;
const visibleSlides = 3;
const maxIndex = totalSlides - visibleSlides;

function initSlider() {
  const dots = document.getElementById('sliderDots');
  if (!dots) return;
  dots.innerHTML = '';
  for (let i = 0; i <= maxIndex; i++) {
    const d = document.createElement('div');
    d.className = 'slider-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goToSlide(i);
    dots.appendChild(d);
  }
}

function goToSlide(idx) {
  slideIndex = Math.max(0, Math.min(idx, maxIndex));
  const track = document.getElementById('sliderTrack');
  const cardWidth = 360 + 24;
  track.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => {
    d.classList.toggle('active', i === slideIndex);
  });
}

function slideMove(dir) {
  goToSlide(slideIndex + dir);
}

// 자동 슬라이드
setInterval(() => slideMove(slideIndex < maxIndex ? 1 : -maxIndex), 4000);

document.addEventListener('DOMContentLoaded', initSlider);
if (document.readyState !== 'loading') initSlider();

function toggleAcc(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.acc-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.acc-icon').textContent = '+';
  });
  if (!isOpen) {
    item.classList.add('open');
    item.querySelector('.acc-icon').textContent = '−';
  }
}
</script>
</body>
</html>`;
}

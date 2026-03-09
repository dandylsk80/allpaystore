export default {
  async fetch(request) {
    const url = new URL(request.url);
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
<title>AllPayStore | 포스기·카드단말기·키오스크 전문</title>
<meta name="description" content="포스기, 카드단말기, 키오스크, CCTV 전문 올페이스토어. 매장에 맞는 최적 솔루션을 컨설팅해드립니다.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800;900&display=swap" rel="stylesheet">
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Noto Sans KR',sans-serif; color:#111; background:#fff; }
a { text-decoration:none; color:inherit; }

/* NAV */
nav {
  position:fixed; top:0; left:0; width:100%; z-index:1000;
  background:rgba(255,255,255,0.97); backdrop-filter:blur(10px);
  border-bottom:1px solid #e8e8e8;
  height:80px; display:flex; align-items:center;
}
.nav-inner {
  max-width:1100px; margin:0 auto; width:100%; padding:0 48px;
  display:flex; align-items:center; gap:48px;
}
.logo { font-size:26px; font-weight:900; color:#111; letter-spacing:-1px; flex-shrink:0; }
.logo span { color:#1A6BFF; }
.nav-links { display:flex; gap:32px; list-style:none; flex:1; }
.nav-links a { font-size:15px; font-weight:500; color:#333; transition:color 0.2s; }
.nav-links a:hover { color:#1A6BFF; }
.nav-right { display:flex; align-items:center; gap:16px; margin-left:auto; }
.nav-consult {
  background:#1A6BFF; color:#fff; border:none; padding:10px 22px;
  border-radius:6px; font-size:14px; font-weight:700; cursor:pointer;
  font-family:'Noto Sans KR',sans-serif; transition:background 0.2s;
}
.nav-consult:hover { background:#0052cc; }

/* HERO SLIDER */
.hero { position:relative; width:100%; height:100vh; min-height:600px; overflow:hidden; margin-top:80px; }
.hero-slides { display:flex; height:100%; transition:transform 0.7s cubic-bezier(0.4,0,0.2,1); }
.hero-slide {
  min-width:100%; height:100%; position:relative;
  display:flex; align-items:center;
}
.hero-slide-bg {
  position:absolute; inset:0;
  background-size:cover; background-position:center;
}
.hero-slide-bg::after {
  content:''; position:absolute; inset:0;
  background:linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
}
.hero-content {
  position:relative; z-index:2;
  max-width:1100px; margin:0 auto; width:100%; padding:0 48px;
}
.hero-label {
  display:inline-block; background:rgba(26,107,255,0.9); color:#fff;
  font-size:13px; font-weight:700; padding:5px 14px; border-radius:4px;
  margin-bottom:20px; letter-spacing:1px;
}
.hero-title {
  font-size:clamp(36px,5vw,68px); font-weight:900; color:#fff;
  line-height:1.15; margin-bottom:20px; letter-spacing:-2px;
}
.hero-desc {
  font-size:clamp(15px,1.5vw,20px); color:rgba(255,255,255,0.88);
  margin-bottom:36px; line-height:1.7;
}
.hero-btns { display:flex; gap:14px; }
.btn-hero-primary {
  background:#1A6BFF; color:#fff; border:none; padding:16px 32px;
  border-radius:6px; font-size:16px; font-weight:700; cursor:pointer;
  font-family:'Noto Sans KR',sans-serif; transition:all 0.2s;
}
.btn-hero-primary:hover { background:#0052cc; }
.btn-hero-secondary {
  background:rgba(255,255,255,0.15); color:#fff;
  border:2px solid rgba(255,255,255,0.7); padding:16px 32px;
  border-radius:6px; font-size:16px; font-weight:600; cursor:pointer;
  font-family:'Noto Sans KR',sans-serif; transition:all 0.2s; backdrop-filter:blur(4px);
}
.btn-hero-secondary:hover { background:rgba(255,255,255,0.25); }
.hero-dots {
  position:absolute; bottom:36px; left:50%; transform:translateX(-50%);
  display:flex; gap:10px; z-index:10;
}
.hero-dot {
  width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,0.5);
  cursor:pointer; transition:all 0.3s;
}
.hero-dot.active { background:#fff; width:28px; border-radius:4px; }
.hero-arrow {
  position:absolute; top:50%; transform:translateY(-50%); z-index:10;
  width:52px; height:52px; background:rgba(255,255,255,0.15); border:none;
  border-radius:50%; color:#fff; font-size:20px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  backdrop-filter:blur(4px); transition:background 0.2s;
}
.hero-arrow:hover { background:rgba(255,255,255,0.3); }
.hero-arrow-left { left:32px; }
.hero-arrow-right { right:32px; }

/* SECTION COMMON */
.sec { padding:100px 0; }
.sec-inner { max-width:1100px; margin:0 auto; padding:0 48px; }
.sec-top { text-align:center; margin-bottom:60px; }
.sec-top h2 { font-size:clamp(28px,3vw,42px); font-weight:900; letter-spacing:-1px; margin-bottom:12px; }
.sec-top p { font-size:16px; color:#666; }

/* INDUSTRY */
.industry { background:#f8f9fa; }
.industry-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; }
.industry-card-lg {
  border-radius:16px; overflow:hidden; background:#fff;
  border:1px solid #eee; cursor:pointer; transition:all 0.25s;
}
.industry-card-lg:hover { box-shadow:0 12px 40px rgba(0,0,0,0.1); transform:translateY(-3px); }
.ind-img { width:100%; height:220px; display:flex; align-items:center; justify-content:center; font-size:72px; }
.ind-body { padding:24px 28px; }
.ind-title-bar { display:flex; align-items:center; gap:10px; margin-bottom:14px; }
.ind-bar { width:4px; height:22px; background:#1A6BFF; border-radius:2px; }
.ind-title { font-size:20px; font-weight:800; }
.ind-tags { display:flex; flex-wrap:wrap; gap:8px; }
.ind-tag { background:#f0f5ff; color:#1A6BFF; font-size:13px; font-weight:600; padding:5px 12px; border-radius:20px; }
.industry-grid-sm { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin-top:20px; }
.industry-card-sm {
  border-radius:16px; overflow:hidden; background:#fff;
  border:1px solid #eee; cursor:pointer; transition:all 0.25s;
}
.industry-card-sm:hover { box-shadow:0 8px 30px rgba(0,0,0,0.1); transform:translateY(-3px); }
.ind-img-sm { width:100%; height:160px; display:flex; align-items:center; justify-content:center; font-size:48px; }
.ind-body-sm { padding:16px 20px; }
.ind-title-bar-sm { display:flex; align-items:center; gap:8px; margin-bottom:10px; }
.ind-title-sm { font-size:16px; font-weight:800; }
.ind-tags-sm { display:flex; flex-wrap:wrap; gap:6px; }
.ind-tag-sm { background:#f0f5ff; color:#1A6BFF; font-size:12px; font-weight:600; padding:3px 10px; border-radius:20px; }

/* PRODUCTS */
.products { background:#fff; }
.prod-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.prod-card {
  border-radius:16px; border:1.5px solid #eee;
  overflow:hidden; cursor:pointer; transition:all 0.25s;
}
.prod-card:hover { border-color:#1A6BFF; box-shadow:0 8px 32px rgba(26,107,255,0.1); transform:translateY(-4px); }
.prod-img { width:100%; height:200px; display:flex; align-items:center; justify-content:center; font-size:56px; background:#f8f9fa; overflow:hidden; }
.prod-img img { width:100%; height:100%; object-fit:contain; padding:16px; transition:transform 0.3s; }
.prod-card:hover .prod-img img { transform:scale(1.05); }
.prod-body { padding:22px; }
.prod-name { font-size:17px; font-weight:800; margin-bottom:8px; }
.prod-desc { font-size:13px; color:#666; line-height:1.7; margin-bottom:14px; }
.prod-more { color:#1A6BFF; font-size:13px; font-weight:700; }

/* SERVICES */
.services { background:#f8f9fa; }
.serv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.serv-card {
  border-radius:16px; overflow:hidden; position:relative; cursor:pointer;
  aspect-ratio:4/3; transition:transform 0.25s;
}
.serv-card:hover { transform:translateY(-4px); }
.serv-card:hover .serv-overlay { background:rgba(0,0,0,0.15); }
.serv-bg { width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:56px; }
.serv-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.35); transition:background 0.3s; }
.serv-label {
  position:absolute; top:20px; left:20px; z-index:2;
  background:rgba(255,255,255,0.15); backdrop-filter:blur(8px);
  color:#fff; font-size:14px; font-weight:700; padding:6px 14px;
  border-radius:6px; border:1px solid rgba(255,255,255,0.2);
}

/* CASES */
.cases { background:#fff; }
.cases-slider-wrap { overflow:hidden; }
.cases-track { display:flex; gap:20px; transition:transform 0.5s cubic-bezier(0.4,0,0.2,1); }
.case-card {
  min-width:300px; border-radius:16px; overflow:hidden;
  position:relative; cursor:pointer; aspect-ratio:3/4; flex-shrink:0; transition:transform 0.25s;
}
.case-card:hover { transform:translateY(-4px); }
.case-bg { width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:64px; }
.case-overlay {
  position:absolute; inset:0;
  background:linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
}
.case-badge {
  position:absolute; top:20px; left:20px;
  background:#FF6B35; color:#fff; font-size:12px; font-weight:700; padding:4px 12px; border-radius:4px;
}
.case-info { position:absolute; bottom:24px; left:24px; right:24px; z-index:2; color:#fff; }
.case-type { font-size:22px; font-weight:900; margin-bottom:6px; }
.case-place { font-size:13px; color:rgba(255,255,255,0.75); }
.cases-nav { display:flex; justify-content:center; align-items:center; gap:16px; margin-top:32px; }
.cases-btn {
  width:44px; height:44px; border-radius:50%; border:1.5px solid #ddd;
  background:#fff; font-size:18px; cursor:pointer;
  display:flex; align-items:center; justify-content:center; transition:all 0.2s;
}
.cases-btn:hover { border-color:#1A6BFF; color:#1A6BFF; }
.cases-dots { display:flex; gap:8px; }
.cases-dot { width:8px; height:8px; border-radius:50%; background:#ddd; cursor:pointer; transition:all 0.2s; }
.cases-dot.active { background:#1A6BFF; width:24px; border-radius:4px; }
.more-btn {
  display:inline-flex; align-items:center; gap:8px;
  border:1.5px solid #ddd; background:#fff; color:#333;
  padding:10px 22px; border-radius:24px; font-size:14px; font-weight:600;
  cursor:pointer; font-family:'Noto Sans KR',sans-serif; transition:all 0.2s; margin-bottom:40px;
}
.more-btn:hover { border-color:#1A6BFF; color:#1A6BFF; }

/* REVIEWS */
.reviews { background:#f8f9fa; }
.review-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.review-card { background:#fff; border-radius:14px; padding:24px; border:1px solid #eee; }
.rev-stars { color:#FBBF24; font-size:14px; margin-bottom:10px; }
.rev-id { font-size:13px; color:#999; margin-bottom:10px; font-weight:600; }
.rev-text { font-size:14px; color:#444; line-height:1.7; }

/* PARTNERS */
.partners { background:#fff; padding:60px 0; overflow:hidden; }
.partners-title { text-align:center; font-size:14px; font-weight:700; color:#999; letter-spacing:2px; margin-bottom:32px; }
.partners-track-wrap { overflow:hidden; }
.partners-track {
  display:flex; gap:48px; align-items:center;
  animation:scrollLeft 20s linear infinite; width:max-content;
}
.partners-track:hover { animation-play-state:paused; }
@keyframes scrollLeft {
  0% { transform:translateX(0); }
  100% { transform:translateX(-50%); }
}
.partner-item {
  font-size:17px; font-weight:800; color:#555; white-space:nowrap;
  padding:12px 28px; background:#f8f9fa; border-radius:8px;
  border:1px solid #eee; flex-shrink:0; transition:all 0.2s;
}
.partner-item:hover { color:#1A6BFF; border-color:#1A6BFF; background:#f0f5ff; }

/* NUMBERS */
.numbers { background:#1A6BFF; padding:80px 0; }
.numbers-inner { max-width:1100px; margin:0 auto; padding:0 48px; }
.numbers-grid { display:grid; grid-template-columns:repeat(4,1fr); }
.number-item { text-align:center; padding:40px 20px; border-right:1px solid rgba(255,255,255,0.2); }
.number-item:last-child { border-right:none; }
.number-big { font-size:clamp(40px,4vw,60px); font-weight:900; color:#fff; letter-spacing:-2px; margin-bottom:10px; }
.number-big span { color:#7DD3FC; }
.number-desc { font-size:15px; color:rgba(255,255,255,0.8); line-height:1.6; }

/* CTA */
.cta-banner { background:linear-gradient(135deg,#0f0c29,#302b63,#24243e); padding:100px 0; text-align:center; }
.cta-banner h2 { font-size:clamp(28px,3.5vw,48px); font-weight:900; color:#fff; letter-spacing:-1px; margin-bottom:16px; }
.cta-banner p { font-size:18px; color:rgba(255,255,255,0.75); margin-bottom:40px; }
.cta-btns { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }
.btn-cta-yellow {
  background:#FBBF24; color:#111; border:none; padding:18px 40px;
  border-radius:8px; font-size:17px; font-weight:800; cursor:pointer;
  font-family:'Noto Sans KR',sans-serif; transition:all 0.2s;
}
.btn-cta-yellow:hover { background:#F59E0B; }
.btn-cta-white {
  background:transparent; color:#fff; border:2px solid rgba(255,255,255,0.5);
  padding:18px 40px; border-radius:8px; font-size:17px; font-weight:700;
  cursor:pointer; font-family:'Noto Sans KR',sans-serif; transition:all 0.2s;
}
.btn-cta-white:hover { background:rgba(255,255,255,0.1); }

/* FIXED BAR */
.consult-bar {
  position:fixed; bottom:0; left:0; width:100%; z-index:999;
  background:#E53935; padding:14px 48px;
  display:flex; align-items:center; justify-content:center; gap:20px;
}
.consult-bar-text { color:#fff; font-size:16px; font-weight:700; }
.consult-bar-phone {
  background:#fff; color:#E53935; border:none; padding:10px 28px;
  border-radius:24px; font-size:15px; font-weight:800; cursor:pointer;
  font-family:'Noto Sans KR',sans-serif; display:flex; align-items:center; gap:8px;
}
.consult-bar-phone:hover { background:#fff3f3; }
.consult-bar-kakao {
  background:#FEE500; color:#3C1E1E; border:none; padding:10px 24px;
  border-radius:24px; font-size:15px; font-weight:800; cursor:pointer;
  font-family:'Noto Sans KR',sans-serif; display:flex; align-items:center; gap:8px;
}
.consult-bar-kakao:hover { background:#FFD700; }

/* FOOTER */
footer { background:#111; padding:60px 0 100px; }
.footer-inner { max-width:1100px; margin:0 auto; padding:0 48px; }
.footer-logo { font-size:24px; font-weight:900; color:#fff; margin-bottom:16px; }
.footer-logo span { color:#1A6BFF; }
.footer-info { font-size:13px; color:#666; line-height:2; }
.footer-copy { margin-top:32px; padding-top:24px; border-top:1px solid #222; font-size:13px; color:#444; }

/* MOBILE */
@media (max-width:768px) {
  .nav-links { display:none; }
  .nav-inner { padding:0 20px; }
  .hero { height:70vh; }
  .hero-content { padding:0 20px; }
  .sec { padding:60px 20px; }
  .industry-grid { grid-template-columns:1fr; }
  .industry-grid-sm { grid-template-columns:repeat(2,1fr); }
  .prod-grid { grid-template-columns:1fr; }
  .serv-grid { grid-template-columns:1fr; }
  .review-grid { grid-template-columns:repeat(2,1fr); }
  .numbers-grid { grid-template-columns:repeat(2,1fr); }
  .number-item { border-right:none; border-bottom:1px solid rgba(255,255,255,0.2); }
  .consult-bar { padding:12px 20px; gap:10px; }
  .consult-bar-text { display:none; }
  footer { padding:40px 20px 100px; }
}
</style>
</head>
<body>

<nav>
  <div class="nav-inner">
    <div class="logo">AllPay<span>Store</span></div>
    <ul class="nav-links">
      <li><a href="#industry">업종별 추천</a></li>
      <li><a href="#products">제품 라인업</a></li>
      <li><a href="#services">매장관리솔루션</a></li>
      <li><a href="#cases">설치 사례</a></li>
      <li><a href="#cta">문의하기</a></li>
    </ul>
    <div class="nav-right">
      <button class="nav-consult" onclick="location.href='tel:010-9876-8282'">📞 무료 상담</button>
    </div>
  </div>
</nav>

<div class="hero">
  <div class="hero-slides" id="heroSlides">
    <div class="hero-slide">
      <div class="hero-slide-bg" style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#0f3460 100%);"></div>
      <div class="hero-content">
        <div class="hero-label">AllPayStore 포스시스템</div>
        <h1 class="hero-title">사장님 매장에<br>딱 맞는 포스기</h1>
        <p class="hero-desc">업종·규모별 맞춤 컨설팅으로<br>최적의 결제 솔루션을 제안해드립니다</p>
        <div class="hero-btns">
          <button class="btn-hero-primary" onclick="location.href='#products'">제품 보기</button>
          <button class="btn-hero-secondary" onclick="location.href='tel:010-9876-8282'">도입 문의하기</button>
        </div>
      </div>
    </div>
    <div class="hero-slide">
      <div class="hero-slide-bg" style="background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);"></div>
      <div class="hero-content">
        <div class="hero-label">AllPayStore 키오스크</div>
        <h1 class="hero-title">인건비 절감의<br>스마트한 선택</h1>
        <p class="hero-desc">직관적인 UI로 주문 실수를 줄이고<br>매장 회전율을 높여드립니다</p>
        <div class="hero-btns">
          <button class="btn-hero-primary" onclick="location.href='#products'">제품 보기</button>
          <button class="btn-hero-secondary" onclick="location.href='tel:010-9876-8282'">도입 문의하기</button>
        </div>
      </div>
    </div>
    <div class="hero-slide">
      <div class="hero-slide-bg" style="background:linear-gradient(135deg,#1a0533,#2d1b69,#11043e);"></div>
      <div class="hero-content">
        <div class="hero-label">AllPayStore CCTV</div>
        <h1 class="hero-title">포스기와 연동되는<br>스마트 CCTV</h1>
        <p class="hero-desc">결제 시점 자동 태깅으로<br>어디서든 매장을 안심하고 지키세요</p>
        <div class="hero-btns">
          <button class="btn-hero-primary" onclick="location.href='#services'">서비스 보기</button>
          <button class="btn-hero-secondary" onclick="location.href='tel:010-9876-8282'">도입 문의하기</button>
        </div>
      </div>
    </div>
  </div>
  <button class="hero-arrow hero-arrow-left" onclick="heroMove(-1)">&#8592;</button>
  <button class="hero-arrow hero-arrow-right" onclick="heroMove(1)">&#8594;</button>
  <div class="hero-dots" id="heroDots">
    <div class="hero-dot active"></div>
    <div class="hero-dot"></div>
    <div class="hero-dot"></div>
  </div>
</div>

<section class="sec industry" id="industry">
  <div class="sec-inner">
    <div class="sec-top">
      <h2>업종별로 딱 맞게 추천해드려요</h2>
      <p>매장에 맞는 최적 구성으로 컨설팅해드립니다</p>
    </div>
    <div class="industry-grid">
      <div class="industry-card-lg">
        <div class="ind-img" style="background:linear-gradient(135deg,#e8f4f8,#d1ecf1);">☕</div>
        <div class="ind-body">
          <div class="ind-title-bar"><div class="ind-bar"></div><div class="ind-title">카페</div></div>
          <div class="ind-tags">
            <span class="ind-tag">포스기</span><span class="ind-tag">키오스크</span>
            <span class="ind-tag">호출모니터</span><span class="ind-tag">주방모니터</span><span class="ind-tag">알림톡</span>
          </div>
        </div>
      </div>
      <div class="industry-card-lg">
        <div class="ind-img" style="background:linear-gradient(135deg,#fff3e0,#ffe0b2);">🍽️</div>
        <div class="ind-body">
          <div class="ind-title-bar"><div class="ind-bar"></div><div class="ind-title">음식점</div></div>
          <div class="ind-tags">
            <span class="ind-tag">포스기</span><span class="ind-tag">테이블오더</span>
            <span class="ind-tag">웨이팅</span><span class="ind-tag">주방모니터</span><span class="ind-tag">QR오더</span>
          </div>
        </div>
      </div>
    </div>
    <div class="industry-grid-sm">
      <div class="industry-card-sm">
        <div class="ind-img-sm" style="background:linear-gradient(135deg,#fce4ec,#f8bbd0);">🥐</div>
        <div class="ind-body-sm">
          <div class="ind-title-bar-sm"><div class="ind-bar"></div><div class="ind-title-sm">베이커리</div></div>
          <div class="ind-tags-sm"><span class="ind-tag-sm">포스기</span><span class="ind-tag-sm">키오스크</span></div>
        </div>
      </div>
      <div class="industry-card-sm">
        <div class="ind-img-sm" style="background:linear-gradient(135deg,#e8f5e9,#c8e6c9);">💇</div>
        <div class="ind-body-sm">
          <div class="ind-title-bar-sm"><div class="ind-bar"></div><div class="ind-title-sm">헤어·뷰티</div></div>
          <div class="ind-tags-sm"><span class="ind-tag-sm">포스기</span><span class="ind-tag-sm">예약관리</span></div>
        </div>
      </div>
      <div class="industry-card-sm">
        <div class="ind-img-sm" style="background:linear-gradient(135deg,#e3f2fd,#bbdefb);">🏪</div>
        <div class="ind-body-sm">
          <div class="ind-title-bar-sm"><div class="ind-bar"></div><div class="ind-title-sm">편의점·마트</div></div>
          <div class="ind-tags-sm"><span class="ind-tag-sm">포스기</span><span class="ind-tag-sm">바코드스캐너</span></div>
        </div>
      </div>
      <div class="industry-card-sm">
        <div class="ind-img-sm" style="background:linear-gradient(135deg,#f3e5f5,#e1bee7);">🏥</div>
        <div class="ind-body-sm">
          <div class="ind-title-bar-sm"><div class="ind-bar"></div><div class="ind-title-sm">병원·의원</div></div>
          <div class="ind-tags-sm"><span class="ind-tag-sm">키오스크</span><span class="ind-tag-sm">번호표발행</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec products" id="products">
  <div class="sec-inner">
    <div class="sec-top">
      <h2>매장에 딱 맞는 스마트 결제 라인업</h2>
      <p>검증된 하드웨어로 더 쉽고 빠른 결제 환경을 경험하세요</p>
    </div>
    <div class="prod-grid">
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/pos.png" alt="포스기"></div>
        <div class="prod-body">
          <div class="prod-name">올인원 포스시스템</div>
          <div class="prod-desc">어떤 업종도 OK. 실시간 매출 분석부터 재고 관리까지 한 번에.</div>
          <div class="prod-more">자세히 보기 →</div>
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/cutting.png" alt="자동커팅단말기"></div>
        <div class="prod-body">
          <div class="prod-name">자동커팅 단말기</div>
          <div class="prod-desc">빠른 영수증 출력과 자동 커팅으로 매장 회전율을 높여줍니다.</div>
          <div class="prod-more">자세히 보기 →</div>
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/card.png" alt="카드단말기"></div>
        <div class="prod-body">
          <div class="prod-name">컴팩트 카드단말기</div>
          <div class="prod-desc">좁은 카운터에서도 공간 활용이 뛰어난 소규모 매장 최적 모델.</div>
          <div class="prod-more">자세히 보기 →</div>
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/toss.png" alt="토스단말기"></div>
        <div class="prod-body">
          <div class="prod-name">토스 단말기</div>
          <div class="prod-desc">고객이 직접 결제하고 포인트를 적립하는 스마트한 경험.</div>
          <div class="prod-more">자세히 보기 →</div>
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/wireless.png" alt="무선단말기"></div>
        <div class="prod-body">
          <div class="prod-name">무선 카드단말기</div>
          <div class="prod-desc">배달·야외 행사장 어디서나. LTE 통신으로 완벽한 결제 지원.</div>
          <div class="prod-more">자세히 보기 →</div>
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/bluetooth.png" alt="블루투스단말기"></div>
        <div class="prod-body">
          <div class="prod-name">블루투스 단말기</div>
          <div class="prod-desc">스마트폰만 있으면 결제 준비 끝. 1인 창업자에게 최적.</div>
          <div class="prod-more">자세히 보기 →</div>
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/table.png" alt="테이블오더"></div>
        <div class="prod-body">
          <div class="prod-name">테이블 오더</div>
          <div class="prod-desc">고객이 자리에서 직접 주문·결제. 인건비 절감과 스마트한 운영.</div>
          <div class="prod-more">자세히 보기 →</div>
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/mini-kiosk.png" alt="알뜰키오스크"></div>
        <div class="prod-body">
          <div class="prod-name">알뜰 미니키오스크</div>
          <div class="prod-desc">카운터 위에 간편 배치. 좁은 매장에서도 인건비 절감 효과.</div>
          <div class="prod-more">자세히 보기 →</div>
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/kiosk.png" alt="키오스크"></div>
        <div class="prod-body">
          <div class="prod-name">스마트 무인키오스크</div>
          <div class="prod-desc">직관적인 UI로 주문 대기 시간을 줄이고 운영 효율을 극대화.</div>
          <div class="prod-more">자세히 보기 →</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec services" id="services">
  <div class="sec-inner">
    <div class="sec-top">
      <h2>통합 매장관리 서비스</h2>
      <p>매장 운영에 필요한 모든 기능을 한곳에서 편하게 이용하세요</p>
    </div>
    <div class="serv-grid">
      <div class="serv-card"><div class="serv-bg" style="background:linear-gradient(135deg,#1a1a2e,#16213e);">🖥️</div><div class="serv-overlay"></div><div class="serv-label">포스 · 결제</div></div>
      <div class="serv-card"><div class="serv-bg" style="background:linear-gradient(135deg,#0f2027,#203a43);">📱</div><div class="serv-overlay"></div><div class="serv-label">NFC · QR오더</div></div>
      <div class="serv-card"><div class="serv-bg" style="background:linear-gradient(135deg,#141e30,#243b55);">📊</div><div class="serv-overlay"></div><div class="serv-label">주방모니터(KDS)</div></div>
      <div class="serv-card"><div class="serv-bg" style="background:linear-gradient(135deg,#1a0533,#2d1b69);">🔔</div><div class="serv-overlay"></div><div class="serv-label">고객호출모니터</div></div>
      <div class="serv-card"><div class="serv-bg" style="background:linear-gradient(135deg,#0d0d0d,#1a1a1a);">⏱️</div><div class="serv-overlay"></div><div class="serv-label">웨이팅 시스템</div></div>
      <div class="serv-card"><div class="serv-bg" style="background:linear-gradient(135deg,#0f3460,#533483);">📈</div><div class="serv-overlay"></div><div class="serv-label">AI 매출분석</div></div>
    </div>
  </div>
</section>

<section class="sec cases" id="cases">
  <div class="sec-inner">
    <div class="sec-top">
      <h2>고객과 함께 쌓아온 신뢰의 기록</h2>
      <p>카페, 음식점, 전문점까지 업종별 설치 사례를 확인하세요</p>
    </div>
    <div style="text-align:center;">
      <button class="more-btn">더 많은 설치사례 보기 →</button>
    </div>
    <div class="cases-slider-wrap">
      <div class="cases-track" id="casesTrack">
        <div class="case-card"><div class="case-bg" style="background:linear-gradient(135deg,#1a1a2e,#16213e);">☕</div><div class="case-overlay"></div><div class="case-badge">Case Study</div><div class="case-info"><div class="case-type">POS + 키오스크</div><div class="case-place">🏪 카페 · 서울 강남</div></div></div>
        <div class="case-card"><div class="case-bg" style="background:linear-gradient(135deg,#0f2027,#203a43);">🍜</div><div class="case-overlay"></div><div class="case-badge">Case Study</div><div class="case-info"><div class="case-type">POS + 테이블오더</div><div class="case-place">🏪 분식집 · 경기 수원</div></div></div>
        <div class="case-card"><div class="case-bg" style="background:linear-gradient(135deg,#141e30,#243b55);">🥐</div><div class="case-overlay"></div><div class="case-badge">Case Study</div><div class="case-info"><div class="case-type">AI Scanner + 키오스크</div><div class="case-place">🏪 베이커리 · 부산</div></div></div>
        <div class="case-card"><div class="case-bg" style="background:linear-gradient(135deg,#1a0533,#2d1b69);">💇</div><div class="case-overlay"></div><div class="case-badge">Case Study</div><div class="case-info"><div class="case-type">KIOSK &amp; POS</div><div class="case-place">🏪 헤어샵 · 인천</div></div></div>
        <div class="case-card"><div class="case-bg" style="background:linear-gradient(135deg,#0d0d0d,#1a1a1a);">🍖</div><div class="case-overlay"></div><div class="case-badge">Case Study</div><div class="case-info"><div class="case-type">POS + 주방모니터</div><div class="case-place">🏪 고기집 · 대구</div></div></div>
      </div>
    </div>
    <div class="cases-nav">
      <button class="cases-btn" onclick="casesMove(-1)">&#8592;</button>
      <div class="cases-dots" id="casesDots"></div>
      <button class="cases-btn" onclick="casesMove(1)">&#8594;</button>
    </div>
  </div>
</section>

<section class="sec reviews" id="reviews">
  <div class="sec-inner">
    <div class="sec-top">
      <h2>사장님이 직접 말하는 매장 운영 이야기</h2>
    </div>
    <div class="review-grid">
      <div class="review-card"><div class="rev-stars">★★★★★</div><div class="rev-id">choi****</div><div class="rev-text">"포스기 설치 후 계산이 훨씬 빨라졌어요. 직원들도 금방 익숙해져서 별도 교육이 거의 필요 없었어요"</div></div>
      <div class="review-card"><div class="rev-stars">★★★★★</div><div class="rev-id">jung****</div><div class="rev-text">"빠른 결제 및 취소 처리가 가능해요. 24시간 운영 매장인데 한 번도 오류 없이 잘 돌아가고 있습니다"</div></div>
      <div class="review-card"><div class="rev-stars">★★★★★</div><div class="rev-id">kim****</div><div class="rev-text">"업체에 따로 연락 없이 포스에서 직접 설정할 수 있어요. 직관적이라 혼자서도 다 할 수 있습니다"</div></div>
      <div class="review-card"><div class="rev-stars">★★★★★</div><div class="rev-id">park****</div><div class="rev-text">"키오스크 도입 후 주문 실수가 확 줄었어요. 결제 인증 팝업도 없고 안정적으로 잘 운영되고 있어요"</div></div>
    </div>
  </div>
</section>

<!-- CCTV -->
<section class="sec" id="cctv" style="background:#fff;">
  <div class="sec-inner">
    <div class="sec-top">
      <h2>스마트 매장 안심 CCTV</h2>
      <p>24시간 고화질 녹화는 기본, 포스기와 연동되어 결제 시점의 영상을 즉시 확인하세요</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div style="background:#f8f9fa;border-radius:16px;padding:32px 20px;text-align:center;border:1.5px solid #eee;">
          <div style="font-size:40px;margin-bottom:12px;">📷</div>
          <div style="font-weight:700;font-size:14px;">360° 회전형<br>실내 카메라</div>
        </div>
        <div style="background:#f8f9fa;border-radius:16px;padding:32px 20px;text-align:center;border:1.5px solid #eee;">
          <div style="font-size:40px;margin-bottom:12px;">🔭</div>
          <div style="font-weight:700;font-size:14px;">야외용<br>불릿 카메라</div>
        </div>
        <div style="background:#f8f9fa;border-radius:16px;padding:32px 20px;text-align:center;border:1.5px solid #eee;">
          <div style="font-size:40px;margin-bottom:12px;">🎯</div>
          <div style="font-weight:700;font-size:14px;">PTZ<br>고성능 카메라</div>
        </div>
        <div style="background:#f8f9fa;border-radius:16px;padding:32px 20px;text-align:center;border:1.5px solid #eee;">
          <div style="font-size:40px;margin-bottom:12px;">🌐</div>
          <div style="font-weight:700;font-size:14px;">컴팩트<br>돔 카메라</div>
        </div>
      </div>
      <div>
        <h3 style="font-size:28px;font-weight:900;margin-bottom:16px;">포스기와 완벽 연동</h3>
        <p style="color:#666;line-height:1.9;font-size:15px;margin-bottom:28px;">결제 시점을 자동으로 태깅하여 의심 거래를 즉시 확인할 수 있습니다. 실시간 원격 모니터링으로 어디서든 매장을 지킬 수 있어요.</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <span style="background:#f0f5ff;color:#1A6BFF;font-size:13px;font-weight:700;padding:8px 16px;border-radius:20px;">24시간 녹화</span>
          <span style="background:#f0f5ff;color:#1A6BFF;font-size:13px;font-weight:700;padding:8px 16px;border-radius:20px;">실시간 모니터링</span>
          <span style="background:#f0f5ff;color:#1A6BFF;font-size:13px;font-weight:700;padding:8px 16px;border-radius:20px;">POS 연동</span>
          <span style="background:#f0f5ff;color:#1A6BFF;font-size:13px;font-weight:700;padding:8px 16px;border-radius:20px;">원격 접속</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 자동판매기 -->
<section class="sec" id="vending" style="background:#f8f9fa;">
  <div class="sec-inner">
    <div class="sec-top">
      <h2>24시간 무인매장의 혁신<br>LK 광고형 홈타운 밴딩머신</h2>
      <p>광고 수익까지 창출하는 스마트 자동판매기</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="background:#fff;border-radius:14px;padding:22px 24px;border:1.5px solid #eee;display:flex;gap:18px;align-items:flex-start;">
          <div style="font-size:28px;flex-shrink:0;">📺</div>
          <div><div style="font-weight:800;margin-bottom:6px;">광고 수익 창출</div><div style="font-size:13px;color:#666;">23.4인치 터치스크린으로 효과적인 광고 송출 가능</div></div>
        </div>
        <div style="background:#fff;border-radius:14px;padding:22px 24px;border:1.5px solid #eee;display:flex;gap:18px;align-items:flex-start;">
          <div style="font-size:28px;flex-shrink:0;">⚙️</div>
          <div><div style="font-weight:800;margin-bottom:6px;">운영 편의성</div><div style="font-size:13px;color:#666;">원하는 매장 공지사항을 손쉽게 송출하여 편의성 극대화</div></div>
        </div>
        <div style="background:#fff;border-radius:14px;padding:22px 24px;border:1.5px solid #eee;display:flex;gap:18px;align-items:flex-start;">
          <div style="font-size:28px;flex-shrink:0;">📊</div>
          <div><div style="font-weight:800;margin-bottom:6px;">스마트 관리프로그램</div><div style="font-size:13px;color:#666;">실시간 재고 파악 및 알림, 매출 데이터 리포트 제공</div></div>
        </div>
        <div style="background:#fff;border-radius:14px;padding:22px 24px;border:1.5px solid #eee;display:flex;gap:18px;align-items:flex-start;">
          <div style="font-size:28px;flex-shrink:0;">🔧</div>
          <div><div style="font-weight:800;margin-bottom:6px;">원격 관리 &amp; 유지보수</div><div style="font-size:13px;color:#666;">문제 발생 시 즉시 원격 제어 가능</div></div>
        </div>
      </div>
      <div style="background:#fff;border-radius:20px;padding:36px;border:1.5px solid #eee;">
        <h3 style="font-size:20px;font-weight:800;margin-bottom:20px;">설치 가능 공간</h3>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="background:#f8f9fa;border-radius:10px;padding:14px;text-align:center;font-size:13px;font-weight:600;color:#444;border:1.5px solid #eee;">병원</div>
          <div style="background:#f8f9fa;border-radius:10px;padding:14px;text-align:center;font-size:13px;font-weight:600;color:#444;border:1.5px solid #eee;">PC방</div>
          <div style="background:#f8f9fa;border-radius:10px;padding:14px;text-align:center;font-size:13px;font-weight:600;color:#444;border:1.5px solid #eee;">카페</div>
          <div style="background:#f8f9fa;border-radius:10px;padding:14px;text-align:center;font-size:13px;font-weight:600;color:#444;border:1.5px solid #eee;">학교/학원</div>
          <div style="background:#f8f9fa;border-radius:10px;padding:14px;text-align:center;font-size:13px;font-weight:600;color:#444;border:1.5px solid #eee;">아파트</div>
          <div style="background:#f8f9fa;border-radius:10px;padding:14px;text-align:center;font-size:13px;font-weight:600;color:#444;border:1.5px solid #eee;">헬스장</div>
          <div style="background:#f8f9fa;border-radius:10px;padding:14px;text-align:center;font-size:13px;font-weight:600;color:#444;border:1.5px solid #eee;">관공서</div>
          <div style="background:#f8f9fa;border-radius:10px;padding:14px;text-align:center;font-size:13px;font-weight:600;color:#444;border:1.5px solid #eee;">오피스</div>
          <div style="background:#f8f9fa;border-radius:10px;padding:14px;text-align:center;font-size:13px;font-weight:600;color:#444;border:1.5px solid #eee;">종교시설</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 철거솔루션 -->
<section class="sec" id="demolition" style="background:#fff;">
  <div class="sec-inner">
    <div class="sec-top">
      <h2>AllPayStore 철거 솔루션</h2>
      <p>복잡한 철거부터 폐기물 처리, 원상복구까지 한 번에 해결하세요</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
      <div style="background:linear-gradient(135deg,#1a1a2e,#16213e);border-radius:20px;padding:48px 40px;display:flex;flex-direction:column;justify-content:flex-end;min-height:360px;position:relative;overflow:hidden;">
        <div style="font-size:80px;position:absolute;top:40px;right:40px;opacity:0.3;">🔨</div>
        <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.5;position:relative;z-index:2;">정확한 견적과 완벽한 시공으로<br>믿음을 드립니다.</div>
        <div style="margin-top:16px;color:rgba(255,255,255,0.6);font-size:14px;position:relative;z-index:2;">전문 엔지니어팀이 안전하고 신속하게 사장님의 다음 시작을 도와드립니다.</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:0;">
        <div class="demo-acc" style="border-bottom:1px solid #eee;padding:20px 0;">
          <div style="font-weight:800;font-size:16px;display:flex;justify-content:space-between;cursor:pointer;" onclick="toggleDemo(this)">
            <span>정밀 현장 분석</span><span>+</span>
          </div>
          <div style="display:none;font-size:14px;color:#666;line-height:1.8;margin-top:12px;">철거 전 구조물 진단 및 안전 계획 수립으로 사고를 방지합니다.</div>
        </div>
        <div class="demo-acc" style="border-bottom:1px solid #eee;padding:20px 0;">
          <div style="font-weight:800;font-size:16px;display:flex;justify-content:space-between;cursor:pointer;" onclick="toggleDemo(this)">
            <span>원스톱 원상복구</span><span>+</span>
          </div>
          <div style="display:none;font-size:14px;color:#666;line-height:1.8;margin-top:12px;">철거 후 다음 임차인을 위한 완벽한 원상복구 공사까지 통합 제공합니다.</div>
        </div>
        <div class="demo-acc" style="border-bottom:1px solid #eee;padding:20px 0;">
          <div style="font-weight:800;font-size:16px;display:flex;justify-content:space-between;cursor:pointer;" onclick="toggleDemo(this)">
            <span>폐기물 적법 처리</span><span>+</span>
          </div>
          <div style="display:none;font-size:14px;color:#666;line-height:1.8;margin-top:12px;">모든 폐기물은 관련 법규에 따라 투명하고 깔끔하게 처리 및 신고 대행합니다.</div>
        </div>
        <div class="demo-acc" style="border-bottom:1px solid #eee;padding:20px 0;">
          <div style="font-weight:800;font-size:16px;display:flex;justify-content:space-between;cursor:pointer;" onclick="toggleDemo(this)">
            <span>실시간 공정 보고</span><span>+</span>
          </div>
          <div style="display:none;font-size:14px;color:#666;line-height:1.8;margin-top:12px;">현장에 오지 않아도 카톡으로 철거 진행 상황을 사진과 영상으로 보고합니다.</div>
        </div>
        <div class="demo-acc" style="border-bottom:1px solid #eee;padding:20px 0;">
          <div style="font-weight:800;font-size:16px;display:flex;justify-content:space-between;cursor:pointer;" onclick="toggleDemo(this)">
            <span>합리적 정찰제</span><span>+</span>
          </div>
          <div style="display:none;font-size:14px;color:#666;line-height:1.8;margin-top:12px;">숨은 추가 비용 없이, 면적과 난이도에 따른 투명한 견적 시스템을 운영합니다.</div>
        </div>
        <div class="demo-acc" style="padding:20px 0;">
          <div style="font-weight:800;font-size:16px;display:flex;justify-content:space-between;cursor:pointer;" onclick="toggleDemo(this)">
            <span>100% 사후 책임</span><span>+</span>
          </div>
          <div style="display:none;font-size:14px;color:#666;line-height:1.8;margin-top:12px;">공사 중 발생할 수 있는 소음, 분쟁 해결 및 완벽한 마무리를 보장합니다.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="partners">
  <div class="partners-title">TRUSTED PARTNERS</div>
  <div class="partners-track-wrap">
    <div class="partners-track">
      <div class="partner-item">POSBANK</div><div class="partner-item">toss place</div><div class="partner-item">UNION</div><div class="partner-item">KOVAN</div><div class="partner-item">imu</div><div class="partner-item">SK텔레콤</div><div class="partner-item">coway</div><div class="partner-item">LG전자</div><div class="partner-item">SK매직</div><div class="partner-item">KT올레</div>
      <div class="partner-item">POSBANK</div><div class="partner-item">toss place</div><div class="partner-item">UNION</div><div class="partner-item">KOVAN</div><div class="partner-item">imu</div><div class="partner-item">SK텔레콤</div><div class="partner-item">coway</div><div class="partner-item">LG전자</div><div class="partner-item">SK매직</div><div class="partner-item">KT올레</div>
    </div>
  </div>
</div>

<div class="numbers">
  <div class="numbers-inner">
    <div class="numbers-grid">
      <div class="number-item"><div class="number-big">1,500<span>+</span></div><div class="number-desc">누적 설치 실적</div></div>
      <div class="number-item"><div class="number-big">87</div><div class="number-desc">월평균 설치 건수</div></div>
      <div class="number-item"><div class="number-big">0<span>%</span></div><div class="number-desc">사고 발생률</div></div>
      <div class="number-item"><div class="number-big">28</div><div class="number-desc">협력 파트너사</div></div>
    </div>
  </div>
</div>

<div class="cta-banner" id="cta">
  <div style="max-width:1100px;margin:0 auto;padding:0 48px;">
  <h2>지금 바로 전문가의 추천을 받아보세요</h2>
  <p>매장 업종에 딱 맞는 장비가 궁금하신가요? 1분 안에 무료 견적을 받아보세요.</p>
  <div class="cta-btns">
    <button class="btn-cta-yellow" onclick="location.href='tel:010-9876-8282'">📞 1분 견적 요청하기</button>
    <button class="btn-cta-white" onclick="location.href='mailto:dandylsk@naver.com'">✉️ 이메일 문의</button>
  </div>
  </div>
</div>

<footer>
  <div class="footer-inner">
    <div class="footer-logo">AllPay<span>Store</span></div>
    <div class="footer-info">포스카드단말기 전문 올페이스토어<br>📞 010-9876-8282 &nbsp;|&nbsp; ✉️ dandylsk@naver.com<br>운영시간: 평일 09:00 ~ 18:00</div>
    <div class="footer-copy">© 2025 AllPayStore. All rights reserved. | allpaystore.com</div>
  </div>
</footer>

<div class="consult-bar">
  <span class="consult-bar-text">상담이 필요하신가요?</span>
  <button class="consult-bar-phone" onclick="location.href='tel:010-9876-8282'">💬 상담 신청 010-9876-8282</button>
  <button class="consult-bar-kakao">🟡 카톡 상담</button>
</div>

<script>
function toggleDemo(el) {
  var body = el.nextElementSibling;
  var icon = el.querySelector('span:last-child');
  if (body.style.display === 'none') {
    body.style.display = 'block';
    icon.textContent = '-';
  } else {
    body.style.display = 'none';
    icon.textContent = '+';
  }
}

var heroIdx = 0;
var heroTotal = 3;
function heroMove(dir) {
  heroIdx = (heroIdx + dir + heroTotal) % heroTotal;
  heroGoTo(heroIdx);
}
function heroGoTo(idx) {
  heroIdx = idx;
  document.getElementById('heroSlides').style.transform = 'translateX(-' + (idx * 100) + '%)';
  document.querySelectorAll('.hero-dot').forEach(function(d, i) {
    d.classList.toggle('active', i === idx);
  });
}
document.querySelectorAll('.hero-dot').forEach(function(d, i) {
  d.onclick = function() { heroGoTo(i); };
});
setInterval(function() { heroMove(1); }, 5000);

var casesIdx = 0;
var casesMax = 2;
function initCasesDots() {
  var dots = document.getElementById('casesDots');
  if (!dots) return;
  dots.innerHTML = '';
  for (var i = 0; i <= casesMax; i++) {
    (function(idx) {
      var d = document.createElement('div');
      d.className = 'cases-dot' + (idx === 0 ? ' active' : '');
      d.onclick = function() { casesGoTo(idx); };
      dots.appendChild(d);
    })(i);
  }
}
function casesGoTo(idx) {
  casesIdx = Math.max(0, Math.min(idx, casesMax));
  var cardW = 300 + 20;
  document.getElementById('casesTrack').style.transform = 'translateX(-' + (casesIdx * cardW) + 'px)';
  document.querySelectorAll('.cases-dot').forEach(function(d, i) {
    d.classList.toggle('active', i === casesIdx);
  });
}
function casesMove(dir) { casesGoTo(casesIdx + dir); }
setInterval(function() { casesGoTo(casesIdx < casesMax ? casesIdx + 1 : 0); }, 4000);
initCasesDots();
</script>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(getHTML(), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    if (url.pathname === '/rss.xml') {
      return new Response(getRSS(), {
        headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
      });
    }
    if (url.pathname === '/sitemap.xml') {
      return new Response(getSitemap(), {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
      });
    }
    if (url.pathname === '/robots.txt') {
      return new Response(getRobots(), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
    return new Response('Not Found', { status: 404 });
  },
};

function getRSS() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AllPayStore | 포스기·카드단말기·키오스크 전문</title>
    <link>https://allpaystore.com</link>
    <description>포스기, 카드단말기, 키오스크, CCTV 전문 올페이스토어. 매장에 맞는 최적 솔루션을 컨설팅해드립니다.</description>
    <language>ko</language>
    <lastBuildDate>Mon, 09 Mar 2025 00:00:00 +0900</lastBuildDate>
    <item>
      <title>AllPayStore - 포스기·카드단말기·키오스크 전문</title>
      <link>https://allpaystore.com</link>
      <description>업종별 맞춤 포스기, 카드단말기, 키오스크, CCTV 설치 전문. 1,500건 이상의 설치 실적.</description>
      <pubDate>Mon, 09 Mar 2025 00:00:00 +0900</pubDate>
    </item>
  </channel>
</rss>`;
}

function getRobots() {
  return `User-agent: *
Allow: /
Sitemap: https://allpaystore.com/sitemap.xml`;
}

function getSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://allpaystore.com/</loc>
    <lastmod>2025-03-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
}

function getHTML() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AllPayStore | 포스기·카드단말기·키오스크 전문</title>
<meta name="description" content="포스기, 카드단말기, 키오스크, CCTV 전문 올페이스토어. 매장에 맞는 최적 솔루션을 컨설팅해드립니다.">
<meta name="google-site-verification" content="Fh8LXWmgn1Wirb4wpZK9z0mPVAXz-h3IH60Y0tcm6ac">
<meta name="naver-site-verification" content="b57157dc5a153e127c9d7286fb2c6dd70ac19045">
<meta name="google-site-verification" content="Fh8LXWmgn1Wirb4wpZK9z0mPVAXz-h3IH60Y0tcm6ac" />
<meta name="naver-site-verification" content="b57157dc5a153e127c9d7286fb2c6dd70ac19045" />
<meta name="google-site-verification" content="Fh8LXWmgn1Wirb4wpZK9z0mPVAXz-h3IH60Y0tcm6ac" />
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
.logo span { color:#0D2E6E; }
.nav-links { display:flex; gap:32px; list-style:none; flex:1; }
.nav-links a { font-size:15px; font-weight:500; color:#333; transition:color 0.2s; }
.nav-links a:hover { color:#0D2E6E; }
.nav-links li { position:relative; }
.dropdown {
  display:none; position:absolute; top:calc(100% + 0px); left:-20px;
  background:#0D2E6E; border-radius:14px;
  box-shadow:0 12px 40px rgba(0,0,0,0.25);
  min-width:520px; padding:20px; z-index:2000;
}
.dropdown-tabs { display:flex; gap:8px; margin-bottom:16px; }
.dropdown-tab {
  padding:8px 18px; border-radius:20px; font-size:13px; font-weight:700;
  cursor:pointer; color:rgba(255,255,255,0.7); background:transparent;
  border:none; font-family:'Noto Sans KR',sans-serif; transition:all 0.2s;
}
.dropdown-tab.active { background:#1A6BFF; color:#fff; }
.dropdown-regions { display:flex; flex-wrap:wrap; gap:8px; }
.dropdown-regions a {
  display:inline-flex; align-items:center; gap:4px;
  padding:8px 14px; border-radius:20px;
  font-size:13px; font-weight:600; color:rgba(255,255,255,0.85);
  background:rgba(255,255,255,0.08); white-space:nowrap;
  transition:all 0.2s;
}
.dropdown-regions a:hover { background:#1A6BFF; color:#fff; }
.nav-visitor {
  display:flex; flex-direction:column; align-items:center;
  background:#f4f6fb; border-radius:8px; padding:6px 14px;
  font-family:'Noto Sans KR',sans-serif; flex-shrink:0;
}
.nav-visitor-label { font-size:11px; color:#888; font-weight:500; }
.nav-visitor-count { font-size:16px; font-weight:900; color:#0D2E6E; letter-spacing:-0.5px; }
.nav-right { display:flex; align-items:center; gap:16px; margin-left:auto; }
.nav-consult {
  background:#0D2E6E; color:#fff; border:none; padding:10px 22px;
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
  background:#0D2E6E; color:#fff; border:none; padding:16px 32px;
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
.ind-bar { width:4px; height:22px; background:#0D2E6E; border-radius:2px; }
.ind-title { font-size:20px; font-weight:800; }
.ind-tags { display:flex; flex-wrap:wrap; gap:8px; }
.ind-tag { background:#f0f5ff; color:#0D2E6E; font-size:13px; font-weight:600; padding:5px 12px; border-radius:20px; }
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
.ind-tag-sm { background:#f0f5ff; color:#0D2E6E; font-size:12px; font-weight:600; padding:3px 10px; border-radius:20px; }

/* PRODUCTS */
.products { background:#fff; }
.prod-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.prod-card {
  border-radius:16px; border:1.5px solid #eee;
  overflow:hidden; cursor:pointer; transition:all 0.25s;
}
.prod-card:hover { border-color:#0D2E6E; box-shadow:0 8px 32px rgba(26,107,255,0.1); transform:translateY(-4px); }
.prod-img { width:100%; height:200px; display:flex; align-items:center; justify-content:center; font-size:56px; background:#dedede; overflow:hidden; }
.prod-img img { width:100%; height:100%; object-fit:contain; padding:16px; transition:transform 0.3s; font-size:0; }
.prod-card:hover .prod-img img { transform:scale(1.05); }
.prod-body { padding:22px; }
.prod-name { font-size:17px; font-weight:800; margin-bottom:8px; }
.prod-desc { font-size:13px; color:#666; line-height:1.7; margin-bottom:14px; }
.prod-more { color:#0D2E6E; font-size:13px; font-weight:700; }

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
.cases-btn:hover { border-color:#0D2E6E; color:#0D2E6E; }
.cases-dots { display:flex; gap:8px; }
.cases-dot { width:8px; height:8px; border-radius:50%; background:#ddd; cursor:pointer; transition:all 0.2s; }
.cases-dot.active { background:#0D2E6E; width:24px; border-radius:4px; }
.more-btn {
  display:inline-flex; align-items:center; gap:8px;
  border:1.5px solid #ddd; background:#fff; color:#333;
  padding:10px 22px; border-radius:24px; font-size:14px; font-weight:600;
  cursor:pointer; font-family:'Noto Sans KR',sans-serif; transition:all 0.2s; margin-bottom:40px;
}
.more-btn:hover { border-color:#0D2E6E; color:#0D2E6E; }

/* REVIEWS */
.reviews { background:#f8f9fa; }
.review-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.review-card { background:#fff; border-radius:14px; padding:24px; border:1px solid #eee; display:flex; flex-direction:column; min-height:180px; }
.rev-stars { color:#FBBF24; font-size:14px; margin-bottom:10px; }
.rev-id { font-size:13px; color:#0D2E6E; margin-bottom:10px; font-weight:700; }
.rev-text { font-size:14px; color:#444; line-height:1.8; }

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
.partner-item:hover { color:#0D2E6E; border-color:#0D2E6E; background:#f0f5ff; }

/* NUMBERS */
.numbers { background:#fff; padding:80px 0; border-top:1px solid #eee; }
.number-big { font-size:clamp(40px,4vw,60px); font-weight:900; color:#1A6BFF; letter-spacing:-2px; margin-bottom:10px; }
.number-big span { color:#0D2E6E; }
.number-desc { font-size:15px; color:#555; line-height:1.6; }
.number-item { text-align:center; padding:40px 20px; border-right:1px solid #eee; }
.number-item:last-child { border-right:none; }
.numbers-inner { max-width:1100px; margin:0 auto; padding:0 48px; }
.numbers-grid { display:grid; grid-template-columns:repeat(4,1fr); }
.numbers-inner { max-width:1100px; margin:0 auto; padding:0 48px; }

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
.footer-logo span { color:#0D2E6E; }
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
    <div class="logo"><img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAQ4BDgDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkCAf/EAEkQAQABAwMBBQMIBQsEAQQDAQABAgMEBQYRBxIhMUFhCFFxExQVFiIyQoEjM1JikRcYVFVygpOUsdLTJEOhwfCywsPhc6LRY//EABsBAQACAwEBAAAAAAAAAAAAAAAFBgMEBwIB/8QAOREBAAIBAQMKBQIFBQEBAQAAAAECAwQFETEGEhMUIUFRYYHRIjJxoeGx8BUjUlPBFkJDcpHxRCT/2gAMAwEAAhEDEQA/ALlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6Gva1pGg6dXqOt6niadiUfevZN2m3T8OZ8Z9PGX2ImZ3QT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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z" style="width:36px;height:36px;vertical-align:middle;margin-right:8px;object-fit:contain;"><span style="color:#111;font-weight:900;">AllPay</span><span style="color:#0D2E6E;font-weight:900;">Store</span></div>
    <ul class="nav-links" style="flex:1;justify-content:flex-end;">
      <li>
        <a href="#">지역별 광고 ▾</a>
        <div class="dropdown">
          <div class="dropdown-tabs">
            <button class="dropdown-tab active">📍 지역별 과외</button>
            <button class="dropdown-tab">🏫 시/도별</button>
            <button class="dropdown-tab">🏢 구/군별</button>
          </div>
          <div class="dropdown-regions">
            <a href="#">📍 서울특별시</a>
            <a href="#">🌆 부산광역시</a>
            <a href="#">🏙 대구광역시</a>
            <a href="#">🌇 인천광역시</a>
            <a href="#">🌃 광주광역시</a>
            <a href="#">🌉 대전광역시</a>
            <a href="#">🏛 울산광역시</a>
            <a href="#">🌁 세종특별자치시</a>
            <a href="#">🌿 경기도</a>
            <a href="#">🏔 강원도</a>
            <a href="#">⚡ 충청북도</a>
            <a href="#">⚡ 충청남도</a>
            <a href="#">🍀 전라북도</a>
            <a href="#">🍀 전라남도</a>
            <a href="#">🌊 경상북도</a>
            <a href="#">🌊 경상남도</a>
            <a href="#">🌸 제주특별자치도</a>
          </div>
        </div>
      </li>
      <li>
        <a href="#">상품별 광고 ▾</a>
        <div class="dropdown" style="min-width:280px;left:auto;right:0;">
          <div class="dropdown-regions">
            <a href="#products">💳 카드단말기</a>
            <a href="#vending">🎰 벤딩머신</a>
            <a href="#demolition">🔧 철거솔루션</a>
            <a href="#cctv">📷 CCTV</a>
          </div>
        </div>
      </li>
    </ul>
    <div class="nav-right">
      <div class="nav-visitor">
        <span class="nav-visitor-label">누적 방문자</span>
        <span class="nav-visitor-count" id="visitorCount">0명</span>
      </div>
    </div>
  </div>
</nav>

<div class="hero">
  <div class="hero-slides" id="heroSlides">
    <div class="hero-slide">
      <div class="hero-slide-bg" style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#0f3460 100%);"></div>
      <div class="hero-content">
        <div class="hero-label"><span style="color:#fff;font-weight:900;">AllPay<span style="color:#7DD3FC;">Store</span></span> 포스시스템</div>
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
        <div class="hero-label"><span style="color:#fff;font-weight:900;">AllPay<span style="color:#7DD3FC;">Store</span></span> 키오스크</div>
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
        <div class="hero-label"><span style="color:#fff;font-weight:900;">AllPay<span style="color:#7DD3FC;">Store</span></span> CCTV</div>
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
          
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/cutting.png" alt="자동커팅단말기"></div>
        <div class="prod-body">
          <div class="prod-name">자동커팅 단말기</div>
          <div class="prod-desc">빠른 영수증 출력과 자동 커팅으로 매장 회전율을 높여줍니다.</div>
          
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/card.png" alt="카드단말기"></div>
        <div class="prod-body">
          <div class="prod-name">컴팩트 카드단말기</div>
          <div class="prod-desc">좁은 카운터에서도 공간 활용이 뛰어난 소규모 매장 최적 모델.</div>
          
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/toss.png" alt="토스단말기"></div>
        <div class="prod-body">
          <div class="prod-name">토스 단말기</div>
          <div class="prod-desc">고객이 직접 결제하고 포인트를 적립하는 스마트한 경험.</div>
          
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/wireless.png" alt="무선단말기"></div>
        <div class="prod-body">
          <div class="prod-name">무선 카드단말기</div>
          <div class="prod-desc">배달·야외 행사장 어디서나. LTE 통신으로 완벽한 결제 지원.</div>
          
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/bluetooth.png" alt="블루투스단말기"></div>
        <div class="prod-body">
          <div class="prod-name">블루투스 단말기</div>
          <div class="prod-desc">스마트폰만 있으면 결제 준비 끝. 1인 창업자에게 최적.</div>
          
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/table.png" alt="테이블오더"></div>
        <div class="prod-body">
          <div class="prod-name">테이블 오더</div>
          <div class="prod-desc">고객이 자리에서 직접 주문·결제. 인건비 절감과 스마트한 운영.</div>
          
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/mini-kiosk.png" alt="알뜰키오스크"></div>
        <div class="prod-body">
          <div class="prod-name">알뜰 미니키오스크</div>
          <div class="prod-desc">카운터 위에 간편 배치. 좁은 매장에서도 인건비 절감 효과.</div>
          
        </div>
      </div>
      <div class="prod-card">
        <div class="prod-img"><img src="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/images/kiosk.png" alt="키오스크"></div>
        <div class="prod-body">
          <div class="prod-name">스마트 무인키오스크</div>
          <div class="prod-desc">직관적인 UI로 주문 대기 시간을 줄이고 운영 효율을 극대화.</div>
          
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec services" id="services">
  <div class="sec-inner">
    <div class="sec-top">
      <h2><span style="color:#111;">AllPay<span style="color:#0D2E6E;">Store</span></span>는<br>무엇을 도와드릴까요?</h2>
      <p>복잡한 매장 관리, 이제 핵심 기능만 담은 스마트 솔루션으로 시작해 보세요.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
      <div style="background:#fff;border-radius:16px;padding:36px 32px;border:1.5px solid #eee;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.boxShadow='0 8px 32px rgba(26,107,255,0.1)';this.style.borderColor="#0D2E6E";this.style.transform='translateY(-4px)'" onmouseout="this.style.boxShadow='';this.style.borderColor='#eee';this.style.transform=''">
        <div style="font-size:36px;color:#0D2E6E;margin-bottom:16px;">✏️</div>
        <div style="font-size:18px;font-weight:800;margin-bottom:12px;">맞춤형 UI 설정</div>
        <div style="font-size:14px;color:#666;line-height:1.8;">우리 매장에 딱 맞는 메뉴 배치와 결제 동선을 직접 설계하여 계산 시간을 단축하세요.</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 32px;border:1.5px solid #eee;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.boxShadow='0 8px 32px rgba(26,107,255,0.1)';this.style.borderColor="#0D2E6E";this.style.transform='translateY(-4px)'" onmouseout="this.style.boxShadow='';this.style.borderColor='#eee';this.style.transform=''">
        <div style="font-size:36px;color:#0D2E6E;margin-bottom:16px;">📊</div>
        <div style="font-size:18px;font-weight:800;margin-bottom:12px;">통합 매출 관리</div>
        <div style="font-size:14px;color:#666;line-height:1.8;">배달 앱, 오프라인 결제 데이터를 하나로 모아 실시간 매출 추이를 한눈에 파악합니다.</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 32px;border:1.5px solid #eee;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.boxShadow='0 8px 32px rgba(26,107,255,0.1)';this.style.borderColor="#0D2E6E";this.style.transform='translateY(-4px)'" onmouseout="this.style.boxShadow='';this.style.borderColor='#eee';this.style.transform=''">
        <div style="font-size:36px;color:#0D2E6E;margin-bottom:16px;">📡</div>
        <div style="font-size:18px;font-weight:800;margin-bottom:12px;">원격 지원</div>
        <div style="font-size:14px;color:#666;line-height:1.8;">기기 장애 발생 시, 기다릴 필요 없이 즉시 원격 지원을 통해 문제를 해결해 드립니다.</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 32px;border:1.5px solid #eee;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.boxShadow='0 8px 32px rgba(26,107,255,0.1)';this.style.borderColor="#0D2E6E";this.style.transform='translateY(-4px)'" onmouseout="this.style.boxShadow='';this.style.borderColor='#eee';this.style.transform=''">
        <div style="font-size:36px;color:#0D2E6E;margin-bottom:16px;">💡</div>
        <div style="font-size:18px;font-weight:800;margin-bottom:12px;">AI 매출 분석 리포트</div>
        <div style="font-size:14px;color:#666;line-height:1.8;">단순히 매출액만 보여주는 것이 아니라, 요일별·시간대별 방문 패턴을 분석하여 최적의 운영 시간을 제안합니다.</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 32px;border:1.5px solid #eee;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.boxShadow='0 8px 32px rgba(26,107,255,0.1)';this.style.borderColor="#0D2E6E";this.style.transform='translateY(-4px)'" onmouseout="this.style.boxShadow='';this.style.borderColor='#eee';this.style.transform=''">
        <div style="font-size:36px;color:#0D2E6E;margin-bottom:16px;">🍽️</div>
        <div style="font-size:18px;font-weight:800;margin-bottom:12px;">테이블 오더 연동</div>
        <div style="font-size:14px;color:#666;line-height:1.8;">인건비 고민을 덜어드립니다. 자리에 앉아 주문부터 결제까지 한 번에 끝내는 테이블 오더 시스템과 완벽하게 연동됩니다.</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 32px;border:1.5px solid #eee;transition:all 0.25s;cursor:pointer;" onmouseover="this.style.boxShadow='0 8px 32px rgba(26,107,255,0.1)';this.style.borderColor="#0D2E6E";this.style.transform='translateY(-4px)'" onmouseout="this.style.boxShadow='';this.style.borderColor='#eee';this.style.transform=''">
        <div style="font-size:36px;color:#0D2E6E;margin-bottom:16px;">⭐</div>
        <div style="font-size:18px;font-weight:800;margin-bottom:12px;">스마트 리뷰 연동</div>
        <div style="font-size:14px;color:#666;line-height:1.8;">매장 리뷰와 SNS 피드백을 실시간으로 확인하며 고객 소통을 강화할 수 있습니다.</div>
      </div>
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
    <div style="overflow:hidden;" id="reviewWrap">
      <div class="review-track" id="reviewTrack" style="display:flex;gap:16px;transition:transform 0.5s cubic-bezier(0.4,0,0.2,1);">
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">최다은 / 미용실 운영</div><div class="rev-text">"포스기 설치 후 계산이 훨씬 빨라졌어요. 직원들도 금방 익숙해져서 별도 교육이 거의 필요 없었어요"</div></div>
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">김현수 / 베이커리 운영</div><div class="rev-text">"빠른 결제 및 취소 처리가 가능해요. 24시간 운영 매장인데 한 번도 오류 없이 잘 돌아가고 있습니다"</div></div>
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">박소연 / 분식집 운영</div><div class="rev-text">"업체에 따로 연락 없이 포스에서 직접 설정할 수 있어요. 직관적이라 혼자서도 다 할 수 있습니다"</div></div>
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">이민호 / 치킨집 운영</div><div class="rev-text">"키오스크 도입 후 주문 실수가 확 줄었어요. 결제 인증 팝업도 없고 안정적으로 잘 운영되고 있어요"</div></div>
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">정우성 / 편의점 운영</div><div class="rev-text">"카드단말기 교체 후 결제 속도가 확실히 빨라졌어요. 손님들도 편하다고 하시더라고요"</div></div>
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">강지훈 / 카페 운영</div><div class="rev-text">"테이블오더 도입 후 홀 직원 없이도 운영이 가능해졌어요. 인건비가 확 줄었습니다"</div></div>
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">윤서연 / 네일샵 운영</div><div class="rev-text">"설치부터 AS까지 정말 빠르고 친절해요. 문제 생기면 바로 원격으로 해결해주셔서 너무 편해요"</div></div>
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">신동훈 / 족발집 운영</div><div class="rev-text">"무선 단말기라 배달 나갔다 와서도 바로 결제 가능해요. 배달 많은 매장에 강추합니다"</div></div>
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">한지영 / 떡볶이 가게 운영</div><div class="rev-text">"키오스크 설치 후 주문이 정확해지고 매출도 올랐어요. 업셀링 기능이 정말 효과적입니다"</div></div>
        <div class="review-card" style="min-width:calc(33.333% - 11px);max-height:180px;flex-shrink:0;"><div class="rev-stars">★★★★★</div><div class="rev-id">오태양 / 헬스장 운영</div><div class="rev-text">"포스기 하나로 재고관리까지 되니 정말 편해요. 이전 시스템으로 절대 못 돌아갈 것 같아요"</div></div>
      </div>
    </div>
    <div style="display:flex;justify-content:center;align-items:center;gap:16px;margin-top:32px;">
      <button onclick="reviewMove(-1)" style="width:44px;height:44px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#ddd';this.style.color='#000'">&#8592;</button>
      <div id="reviewDots" style="display:flex;gap:8px;"></div>
      <button onclick="reviewMove(1)" style="width:44px;height:44px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#ddd';this.style.color='#000'">&#8594;</button>
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
          <span style="background:#f0f5ff;color:#0D2E6E;font-size:13px;font-weight:700;padding:8px 16px;border-radius:20px;">24시간 녹화</span>
          <span style="background:#f0f5ff;color:#0D2E6E;font-size:13px;font-weight:700;padding:8px 16px;border-radius:20px;">실시간 모니터링</span>
          <span style="background:#f0f5ff;color:#0D2E6E;font-size:13px;font-weight:700;padding:8px 16px;border-radius:20px;">POS 연동</span>
          <span style="background:#f0f5ff;color:#0D2E6E;font-size:13px;font-weight:700;padding:8px 16px;border-radius:20px;">원격 접속</span>
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
<section class="sec" id="demolition" style="background:#fff;padding-bottom:0;">
  <div class="sec-inner">
    <div class="sec-top">
      <h2><span style="color:#111;">AllPay<span style="color:#0D2E6E;">Store</span></span> 철거 솔루션</h2>
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

<!-- 철거 실적 -->
<div class="numbers" style="margin-top:0;">
  <div class="numbers-inner">
    <div class="numbers-grid">
      <div class="number-item"><div class="number-big"><span class="countup" data-target="87">0</span></div><div class="number-desc">월평균 87곳의<br>현장 완료</div></div>
      <div class="number-item"><div class="number-big"><span class="countup" data-target="28">0</span></div><div class="number-desc">28개의 협력<br>파트너사</div></div>
      <div class="number-item"><div class="number-big"><span class="countup" data-target="0">0</span><span>%</span></div><div class="number-desc">사고 발생률</div></div>
      <div class="number-item"><div class="number-big"><span class="countup" data-target="1500">0</span><span>+</span></div><div class="number-desc">최근 1년간<br>1,500+건의 실적</div></div>
    </div>
  </div>
</div>

<!-- 파트너사 -->
<section class="sec" style="background:#fff;">
  <div class="sec-inner">
    <div class="sec-top">
      <h2><span style="color:#111;">AllPay<span style="color:#0D2E6E;">Store</span></span>의 강력한<br><span style="color:#0D2E6E;">네트워크 협력 파트너</span></h2>
      <p style="margin-top:24px;line-height:2;color:#444;">대한민국 대표 통신사 및 렌탈 브랜드와 함께 사장님의 창업 비용 부담은 낮추고 매장 퀄리티는 높여드립니다.<br>
      단순한 협력을 넘어, 사장님의 성공적인 비즈니스를 위한 <strong>통합 패키지 솔루션</strong>을 제공합니다.<br>
      매장에 꼭 필요한 정수기, 공기청정기! SK매직, LG전자, 코웨이 등 1등 브랜드 렌탈 서비스를 파트너 전용 특가로 제안합니다.<br>
      하나로 묶으면 혜택은 커지고 관리는 쉬워집니다. <span style="color:#111;">AllPay<span style="color:#0D2E6E;">Store</span></span>의 통합 파트너십 패키지를 경험해 보세요.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:20px;">
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">POSBANK</div>
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">toss place</div>
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">UNION</div>
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">KOVAN</div>
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">imu</div>
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">SK텔레콤</div>
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">coway</div>
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">LG전자</div>
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">SK매직</div>
      <div style="background:#fff;border-radius:12px;border:1.5px solid #eee;height:90px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#555;transition:all 0.2s;" onmouseover="this.style.borderColor="#0D2E6E";this.style.color="#0D2E6E"" onmouseout="this.style.borderColor='#eee';this.style.color='#555'">KT올레</div>
    </div>
  </div>
</section>

<div class="cta-banner" id="cta">
  <div style="max-width:1100px;margin:0 auto;padding:0 48px;">
  <h2>지금 바로 전문가의 추천을 받아보세요</h2>
  <p>매장 업종에 딱 맞는 장비가 궁금하신가요? 1분 안에 무료 견적을 받아보세요.</p>
  <div class="cta-btns">
    <button class="btn-cta-yellow" onclick="location.href='tel:010-9876-8282'">📞 1분 견적 요청하기</button>
  </div>
  </div>
</div>

<footer>
  <div class="footer-inner">
    <div class="footer-logo"><span style="color:#fff;font-weight:900;">AllPay</span><span style="color:#7DD3FC;font-weight:900;">Store</span></div>
    <div class="footer-info">포스카드단말기 전문 올페이스토어<br>
      📞 010-9876-8282 &nbsp;|&nbsp; dandylsk@naver.com</div>
    <div class="footer-copy">© 2025 AllPayStore. All rights reserved. | allpaystore.com</div>
  </div>
</footer>

<div class="consult-bar">
  <span class="consult-bar-text">상담이 필요하신가요?</span>
  <button class="consult-bar-phone" onclick="location.href='tel:010-9876-8282'">💬 상담 신청 010-9876-8282</button>
</div>

<script>
// 후기 슬라이더
var reviewIdx = 0;
var reviewMax = 6; // 10개 - 4개 보임 = 6
function initReviewDots() {
  var dots = document.getElementById('reviewDots');
  if (!dots) return;
  for (var i = 0; i <= reviewMax; i++) {
    (function(idx) {
      var d = document.createElement('div');
      d.style.cssText = 'width:8px;height:8px;border-radius:50%;background:' + (idx===0?'#1A6BFF':'#ddd') + ';cursor:pointer;transition:all 0.2s;';
      d.onclick = function() { reviewGoTo(idx); };
      dots.appendChild(d);
    })(i);
  }
}
function reviewGoTo(idx) {
  reviewIdx = Math.max(0, Math.min(idx, reviewMax));
  var wrap = document.getElementById('reviewWrap');
  var cardW = (wrap.offsetWidth - 48) / 3 + 16; // 3개 보임, gap 16px
  document.getElementById('reviewTrack').style.transform = 'translateX(-' + (reviewIdx * cardW) + 'px)';
  document.querySelectorAll('#reviewDots div').forEach(function(d, i) {
    d.style.background = i === reviewIdx ? '#1A6BFF' : '#ddd';
    d.style.width = i === reviewIdx ? '24px' : '8px';
    d.style.borderRadius = '4px';
  });
}
function reviewMove(dir) { reviewGoTo(reviewIdx + dir); }
setInterval(function() { reviewGoTo(reviewIdx < reviewMax ? reviewIdx + 1 : 0); }, 4000);
initReviewDots();

// 드롭다운 마우스 이탈 딜레이
document.querySelectorAll('.nav-links li').forEach(function(li) {
  var timer;
  var dropdown = li.querySelector('.dropdown');
  if (!dropdown) return;
  li.addEventListener('mouseenter', function() {
    clearTimeout(timer);
    dropdown.style.display = 'block';
  });
  li.addEventListener('mouseleave', function() {
    timer = setTimeout(function() { dropdown.style.display = 'none'; }, 150);
  });
  dropdown.addEventListener('mouseenter', function() { clearTimeout(timer); });
  dropdown.addEventListener('mouseleave', function() {
    timer = setTimeout(function() { dropdown.style.display = 'none'; }, 150);
  });
});

// 누적 방문자 카운트업
(function() {
  var target = 353112;
  var el = document.getElementById('visitorCount');
  if (!el) return;
  var duration = 2000;
  var startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    var p = Math.min((ts - startTime) / duration, 1);
    var ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ease * target).toLocaleString() + '명';
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString() + '명';
  }
  requestAnimationFrame(step);
})();

// 카운트업 애니메이션
function startCountUp() {
  document.querySelectorAll('.countup').forEach(function(el) {
    var target = parseInt(el.getAttribute('data-target'));
    if (target === 0) return;
    var duration = 2500;
    var start = 0;
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(ease * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(step);
  });
}

// 숫자 섹션이 화면에 보일 때 카운트 시작
var countStarted = false;
var numbersEl = document.querySelector('.numbers');
if (numbersEl) {
  var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting && !countStarted) {
      countStarted = true;
      startCountUp();
    }
  }, { threshold: 0.3 });
  observer.observe(numbersEl);
}

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

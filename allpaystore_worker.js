const SIDO_MAP = {
  'seoul':'서울','gyeonggi':'경기','incheon':'인천',
  'busan':'부산','daegu':'대구','gwangju':'광주','daejeon':'대전',
  'ulsan':'울산','sejong':'세종','gangwon':'강원',
  'chungbuk':'충북','chungnam':'충남',
  'jeonbuk':'전북','jeonnam':'전남',
  'gyeongbuk':'경북','gyeongnam':'경남','jeju':'제주'
};
const SIDO_EN = Object.fromEntries(Object.entries(SIDO_MAP).map(([k,v])=>[v,k]));

const DISTRICT_MAP = {
  // 서울
  'gangnam':'강남구','seocho':'서초구','songpa':'송파구','gangdong':'강동구',
  'mapo':'마포구','yangcheon':'양천구','nowon':'노원구','gangseo':'강서구',
  'dongjak':'동작구','gwanak':'관악구','seongbuk':'성북구','yongsan':'용산구',
  'junggu-seoul':'중구','jongno':'종로구','jungnang':'중랑구','gwangjin':'광진구',
  'dongdaemun':'동대문구','seongdong':'성동구','eunpyeong':'은평구',
  'seodaemun':'서대문구','dobong':'도봉구','gangbuk':'강북구',
  'geumcheon':'금천구','guro':'구로구',
  // 경기
  'suwon':'수원시','seongnam':'성남시','yongin':'용인시','goyang':'고양시',
  'hwaseong':'화성시','bucheon':'부천시','namyangju':'남양주시','ansan':'안산시',
  'anyang':'안양시','pyeongtaek':'평택시','siheung':'시흥시','paju':'파주시',
  'gimpo':'김포시','uijeongbu':'의정부시','gwangju-gg':'광주시','hanam':'하남시',
  'gwangmyeong':'광명시','gunpo':'군포시','icheon':'이천시','osan':'오산시',
  'yangju':'양주시','guri':'구리시','anseong':'안성시','uiwang':'의왕시',
  'yeoju':'여주시','dongducheon':'동두천시','gwacheon':'과천시',
  'gapyeong':'가평군','yangpyeong':'양평군','yeoncheon':'연천군','pocheon':'포천시',
  // 인천
  'michuhol':'미추홀구','yeonsu':'연수구','namdong':'남동구','bupyeong':'부평구',
  'gyeyang':'계양구','seo-incheon':'서구','junggu-incheon':'중구','donggu-incheon':'동구',
  'ganghwa':'강화군','ongjin':'옹진군',
  // 부산
  'haeundae':'해운대구','suyeong':'수영구','dongrae':'동래구',
  'yeonje':'연제구','busanjin':'부산진구','nam-busan':'남구','dong-busan':'동구',
  'junggu-busan':'중구','seo-busan':'서구','yeongdo':'영도구',
  'buk-busan':'북구','sasang':'사상구','gangseo-busan':'강서구',
  'saha':'사하구','geumjeong':'금정구','gijang':'기장군',
  // 대구
  'suseong':'수성구','dalseo':'달서구','buk-daegu':'북구',
  'dong-daegu':'동구','seo-daegu':'서구','junggu-daegu':'중구',
  'nam-daegu':'남구','dalseong':'달성군','gunwi':'군위군',
  // 광주
  'seo-gwangju':'서구','buk-gwangju':'북구','gwangsan':'광산구',
  'nam-gwangju':'남구','dong-gwangju':'동구',
  // 대전
  'yuseong':'유성구','seo-daejeon':'서구','daedeok':'대덕구',
  'junggu-daejeon':'중구','dong-daejeon':'동구',
  // 울산
  'nam-ulsan':'남구','buk-ulsan':'북구','dong-ulsan':'동구',
  'junggu-ulsan':'중구','ulju':'울주군',
  // 세종
  'sejong-city':'세종시',
  // 강원
  'chuncheon':'춘천시','wonju':'원주시','gangneung':'강릉시',
  'donghae':'동해시','taebaek':'태백시','sokcho':'속초시','samcheok':'삼척시',
  'hongcheon':'홍천군','hoengseong':'횡성군','yeongwol':'영월군',
  'pyeongchang':'평창군','jeongseon':'정선군','cheorwon':'철원군',
  'hwacheon':'화천군','yanggu':'양구군','inje':'인제군',
  'goseong-gw':'고성군','yangyang':'양양군',
  // 충북
  'cheongju':'청주시','chungju':'충주시','jecheon':'제천시',
  'boeun':'보은군','okcheon':'옥천군','yeongdong':'영동군','jeungpyeong':'증평군',
  'jincheon':'진천군','goesan':'괴산군','eumseong':'음성군','danyang':'단양군',
  // 충남
  'cheonan':'천안시','gongju':'공주시','boryeong':'보령시','asan':'아산시',
  'seosan':'서산시','nonsan':'논산시','gyeryong':'계룡시','dangjin':'당진시',
  'geumsan':'금산군','buyeo':'부여군','seocheon':'서천군','cheongyang':'청양군',
  'hongseong':'홍성군','yesan':'예산군','taean':'태안군',
  // 전북
  'jeonju':'전주시','iksan':'익산시','gunsan':'군산시','jeongeup':'정읍시',
  'namwon':'남원시','gimje':'김제시','wanju':'완주군','jinan':'진안군',
  'muju':'무주군','jangsu':'장수군','imsil':'임실군','sunchang':'순창군',
  'gochang':'고창군','buan':'부안군',
  // 전남
  'suncheon':'순천시','yeosu':'여수시','mokpo':'목포시','naju':'나주시',
  'gwangyang':'광양시','damyang':'담양군','gokseong':'곡성군','gurye':'구례군',
  'goheung':'고흥군','boseong':'보성군','hwasun':'화순군','jangheung':'장흥군',
  'gangjin':'강진군','haenam':'해남군','yeongam':'영암군','muan':'무안군',
  'hampyeong':'함평군','yeonggwang':'영광군','jangseong':'장성군',
  'wando':'완도군','jindo':'진도군','sinan':'신안군',
  // 경북
  'pohang':'포항시','gyeongju':'경주시','gimcheon':'김천시','andong':'안동시',
  'gumi':'구미시','yeongju':'영주시','yeongcheon':'영천시','sangju':'상주시',
  'mungyeong':'문경시','gyeongsan':'경산시','uiseong':'의성군','cheongsong':'청송군',
  'yeongyang':'영양군','yeongdeok':'영덕군','cheongdo':'청도군','goryeong':'고령군',
  'seongju':'성주군','chilgok':'칠곡군','yecheon':'예천군','bonghwa':'봉화군',
  'uljin':'울진군','ulleung':'울릉군',
  // 경남
  'changwon':'창원시','jinju':'진주시','tongyeong':'통영시','sacheon':'사천시',
  'gimhae':'김해시','miryang':'밀양시','geoje':'거제시','yangsan':'양산시',
  'uiryeong':'의령군','haman':'함안군','changnyeong':'창녕군','goseong-gn':'고성군',
  'namhae':'남해군','hadong':'하동군','sancheong':'산청군','hamyang':'함양군',
  'geochang':'거창군','hapcheon':'합천군',
  // 제주
  'jeju-city':'제주시','seogwipo':'서귀포시'
};
const DISTRICT_EN = Object.fromEntries(Object.entries(DISTRICT_MAP).map(([k,v])=>[v,k]));

// 전국 읍면동 DB
// 형식: '영문키': ['시도한글', '시군구한글', '동한글', '카테고리', '시도En', '시군구En']
// 카테고리: A=상권특구, B=신도시, C=산업단지, D=군인가족, E=대학가, F=농촌읍면, G=도서, H=일반도심
const DONG_DB = {};





const DONG_MAP = {}; // DONG_DB 제거됨
const DONG_EN = {}; // DONG_DB 제거됨


const GRADE_MAP = {
  // 통합 키 (기존 호환)
  'elementary':'소규모매장','middle':'중형매장','high':'대형매장',
  // 소규모매장 세분화
  'elem1':'초1','elem2':'초2','elem3':'초3','elem4':'초4','elem5':'초5','elem6':'초6',
  // 중형매장 세분화
  'mid1':'중1','mid2':'중2','mid3':'중3',
  // 대형매장 세분화
  'high1':'고1','high2':'고2','high3':'고3',
};
const GRADE_EN = Object.fromEntries(Object.entries(GRADE_MAP).map(([k,v])=>[v,k]));

const SUBJECT_MAP = {
  'math':'카드단말기','english':'포스기','korean':'키오스크','science':'CCTV',
  'social':'테이블오더','coding':'무인결제기','essay':'배달주문기','gsd':'출입관리시스템'
};
const SUBJECT_EN = Object.fromEntries(Object.entries(SUBJECT_MAP).map(([k,v])=>[v,k]));

function toKr(sido,district,dong,grade,subject){
  return {
    sido: SIDO_MAP[sido]||sido,
    district: DISTRICT_MAP[district]||district,
    dong: dong ? (DONG_MAP[dong]||dong) : null,
    grade: GRADE_MAP[grade]||grade,
    subject: SUBJECT_MAP[subject]||subject,
  };
}
function enUrl(sido,district,dong,grade,subject){
  const s=SIDO_EN[sido]||sido, d=DISTRICT_EN[district]||district,
        dg=dong?(DONG_EN[dong]||dong):null,
        g=GRADE_EN[grade]||grade, sb=SUBJECT_EN[subject]||subject;
  if(dg) return `/${s}/${d}/${dg}/${g}/${sb}`;
  return `/${s}/${d}/${g}/${sb}`;
}

const HEADER = `<header>
  <div class="hw">
    <a href="/" class="logo">
      <div class="logo-mark">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="logo-name">
        <span class="logo-main"><em>올케어</em>스터디</span>
        <span class="logo-sub">ALLCARE STUDY</span>
      </div>
    </a>
    <div class="vpill">
      <span class="vl">누적 방문자</span>
      <span class="vc" id="vc">353,112명</span>
    </div>
    <nav class="gnb">
      <div class="gi" id="gi-region">
        <button class="gb" onclick="toggleMega('region')">지역별설치/상담<svg class="arr" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="mega-drop" id="mega-region">
          <div class="mega-tabs">
            <button class="mega-tab on" onclick="switchTab('region','local')">📍 지역별 설치</button>
            <button class="mega-tab" onclick="switchTab('region','grade')">🎓 제품별 설치</button>
            <button class="mega-tab" onclick="switchTab('region','school')">🏫 업종별 설치</button>
          </div>
          <div class="mega-panel on" id="region-local">
            <div class="mega-btns">
              <a class="mega-btn" href="/seoul">🏙 서울</a>
              <a class="mega-btn" href="/gyeonggi">🌿 경기</a>
              <a class="mega-btn" href="/incheon">🌊 인천</a>
              <a class="mega-btn" href="/busan">🐟 부산</a>
              <a class="mega-btn" href="/daegu">🍎 대구</a>
              <a class="mega-btn" href="/daejeon">🌾 대전</a>
              <a class="mega-btn" href="/gwangju">🌸 광주</a>
              <a class="mega-btn" href="/ulsan">⚙️ 울산</a>
              <a class="mega-btn" href="/sejong">🏛 세종</a>
              <a class="mega-btn" href="/gangwon">🏔 강원</a>
              <a class="mega-btn" href="/chungbuk">🌻 충북</a>
              <a class="mega-btn" href="/chungnam">🌊 충남</a>
              <a class="mega-btn" href="/jeonbuk">🌾 전북</a>
              <a class="mega-btn" href="/jeonnam">🍵 전남</a>
              <a class="mega-btn" href="/gyeongbuk">🍎 경북</a>
              <a class="mega-btn" href="/gyeongnam">🌊 경남</a>
              <a class="mega-btn" href="/jeju">🌺 제주</a>
            </div>
          </div>
          <div class="mega-panel" id="region-grade">
            <div class="mega-rt">🎒 소규모매장</div>
            <div class="mega-btns">
              <a class="mega-btn" href="/grade/elementary/1">소규모매장 1업종</a>
              <a class="mega-btn" href="/grade/elementary/2">소규모매장 2업종</a>
              <a class="mega-btn" href="/grade/elementary/3">소규모매장 3업종</a>
              <a class="mega-btn" href="/grade/elementary/4">소규모매장 4업종</a>
              <a class="mega-btn" href="/grade/elementary/5">소규모매장 5업종</a>
              <a class="mega-btn" href="/grade/elementary/6">소규모매장 6업종</a>
            </div>
            <div class="mega-rt">📚 중형매장</div>
            <div class="mega-btns">
              <a class="mega-btn" href="/grade/middle/1">중형매장 1업종</a>
              <a class="mega-btn" href="/grade/middle/2">중형매장 2업종</a>
              <a class="mega-btn" href="/grade/middle/3">중형매장 3업종</a>
            </div>
            <div class="mega-rt">🎓 대형매장</div>
            <div class="mega-btns">
              <a class="mega-btn" href="/grade/high/1">대형매장 1업종</a>
              <a class="mega-btn" href="/grade/high/2">대형매장 2업종</a>
              <a class="mega-btn" href="/grade/high/3">대형매장 3업종</a>
            </div>
          </div>
          <div class="mega-panel" id="region-school">
            <div class="mega-rt">시도별 설치</div>
            <div class="mega-btns">
              <a class="mega-btn" href="/school/seoul">서울</a>
              <a class="mega-btn" href="/school/gyeonggi">경기</a>
              <a class="mega-btn" href="/school/incheon">인천</a>
              <a class="mega-btn" href="/school/busan">부산</a>
              <a class="mega-btn" href="/school/daegu">대구</a>
              <a class="mega-btn" href="/school/gwangju">광주</a>
              <a class="mega-btn" href="/school/daejeon">대전</a>
              <a class="mega-btn" href="/school/ulsan">울산</a>
              <a class="mega-btn" href="/school/sejong">세종</a>
              <a class="mega-btn" href="/school/gangwon">강원</a>
              <a class="mega-btn" href="/school/chungbuk">충북</a>
              <a class="mega-btn" href="/school/chungnam">충남</a>
              <a class="mega-btn" href="/school/jeonbuk">전북</a>
              <a class="mega-btn" href="/school/jeonnam">전남</a>
              <a class="mega-btn" href="/school/gyeongbuk">경북</a>
              <a class="mega-btn" href="/school/gyeongnam">경남</a>
              <a class="mega-btn" href="/school/jeju">제주</a>
            </div>
          </div>
        </div>
      </div>
      <div class="gi">
        <button class="gb">제품별설치<svg class="arr" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="drop"><a href="/subject/math">📐 카드단말기</a><a href="/subject/english">📖 포스기</a><a href="/subject/korean">✍️ 키오스크</a><a href="/subject/science">🔬 CCTV</a><a href="/subject/social">🌏 테이블오더</a><a href="/subject/coding">🤖 무인결제기</a><a href="/subject/essay">📱 배달주문기</a><a href="/subject/gsd">🔐 출입관리시스템</a></div>
      </div>
      <div class="gi">
        <a href="/contact" class="gb" style="text-decoration:none;display:flex;align-items:center;color:#60A5FA;font-weight:800">문의하기</a>
      </div>
    </nav>
  </div>
</header>
<div id="mob-overlay" onclick="closeMobNav()"></div>
<div id="mob-nav"></div>
<script>
function openMobNav(){document.getElementById('mob-nav').classList.add('open');document.getElementById('mob-overlay').classList.add('open');document.body.style.overflow='hidden';}
function closeMobNav(){document.getElementById('mob-nav').classList.remove('open');document.getElementById('mob-overlay').classList.remove('open');document.body.style.overflow='';}
</script>`;

const HEADER_DARK = `<header style="background:rgba(15,32,68,0.97)!important;border-bottom:1px solid rgba(255,255,255,0.08)!important;box-shadow:none!important">
  <div class="hw">
    <a href="/" class="logo">
      <div class="logo-mark">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="logo-name">
        <span class="logo-main" style="color:white"><em>올케어</em>스터디</span>
        <span class="logo-sub" style="color:rgba(255,255,255,0.45)">ALLCARE STUDY</span>
      </div>
    </a>
    <div class="vpill" style="border-color:rgba(255,255,255,0.2);background:rgba(255,255,255,0.06)">
      <span class="vl" style="color:rgba(255,255,255,0.5)">누적 방문자</span>
      <span class="vc" style="color:#60A5FA">353,112명</span>
    </div>
    <nav class="gnb">
      <div class="gi" id="gi-region">
        <button class="gb" onclick="toggleMega('region')" style="color:rgba(255,255,255,0.85)">지역별설치/상담<svg class="arr" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="mega-drop" id="mega-region">
          <div class="mega-tabs">
            <button class="mega-tab on" onclick="switchTab('region','local')">📍 지역별 설치</button>
            <button class="mega-tab" onclick="switchTab('region','grade')">🎓 제품별 카드단말기 설치</button>
            <button class="mega-tab" onclick="switchTab('region','school')">🏫 업종별 설치</button>
          </div>
          <div class="mega-panel on" id="region-local">
            <div class="mega-btns">
              <a class="mega-btn" href="/seoul">🏙 서울</a>
              <a class="mega-btn" href="/gyeonggi">🌿 경기</a>
              <a class="mega-btn" href="/incheon">🌊 인천</a>
              <a class="mega-btn" href="/busan">🐟 부산</a>
              <a class="mega-btn" href="/daegu">🍎 대구</a>
              <a class="mega-btn" href="/daejeon">🌾 대전</a>
              <a class="mega-btn" href="/gwangju">🌸 광주</a>
              <a class="mega-btn" href="/ulsan">⚙️ 울산</a>
              <a class="mega-btn" href="/sejong">🏛 세종</a>
              <a class="mega-btn" href="/gangwon">🏔 강원</a>
              <a class="mega-btn" href="/chungbuk">🌻 충북</a>
              <a class="mega-btn" href="/chungnam">🌊 충남</a>
              <a class="mega-btn" href="/jeonbuk">🌾 전북</a>
              <a class="mega-btn" href="/jeonnam">🍵 전남</a>
              <a class="mega-btn" href="/gyeongbuk">🍎 경북</a>
              <a class="mega-btn" href="/gyeongnam">🌊 경남</a>
              <a class="mega-btn" href="/jeju">🌺 제주</a>
            </div>
          </div>
          <div class="mega-panel" id="region-grade">
            <div class="mega-rt">🎒 매장</div>
            <div class="mega-btns">
              <a class="mega-btn" href="/grade/elementary/1">소규모매장 1업종</a>
              <a class="mega-btn" href="/grade/elementary/2">소규모매장 2업종</a>
              <a class="mega-btn" href="/grade/elementary/3">소규모매장 3업종</a>
              <a class="mega-btn" href="/grade/elementary/4">소규모매장 4업종</a>
              <a class="mega-btn" href="/grade/elementary/5">소규모매장 5업종</a>
              <a class="mega-btn" href="/grade/elementary/6">소규모매장 6업종</a>
            </div>
            <div class="mega-rt">📚 매장</div>
            <div class="mega-btns">
              <a class="mega-btn" href="/grade/middle/1">매장 1업종</a>
              <a class="mega-btn" href="/grade/middle/2">매장 2업종</a>
              <a class="mega-btn" href="/grade/middle/3">매장 3업종</a>
            </div>
            <div class="mega-rt">🎓 매장</div>
            <div class="mega-btns">
              <a class="mega-btn" href="/grade/high/1">대형매장 1업종</a>
              <a class="mega-btn" href="/grade/high/2">대형매장 2업종</a>
              <a class="mega-btn" href="/grade/high/3">대형매장 3업종</a>
            </div>
          </div>
          <div class="mega-panel" id="region-school">
            <div class="mega-rt">시도별 설치</div>
            <div class="mega-btns">
              <a class="mega-btn" href="/school/seoul">서울</a>
              <a class="mega-btn" href="/school/gyeonggi">경기</a>
              <a class="mega-btn" href="/school/incheon">인천</a>
              <a class="mega-btn" href="/school/busan">부산</a>
              <a class="mega-btn" href="/school/daegu">대구</a>
              <a class="mega-btn" href="/school/gwangju">광주</a>
              <a class="mega-btn" href="/school/daejeon">대전</a>
              <a class="mega-btn" href="/school/ulsan">울산</a>
              <a class="mega-btn" href="/school/sejong">세종</a>
              <a class="mega-btn" href="/school/gangwon">강원</a>
              <a class="mega-btn" href="/school/chungbuk">충북</a>
              <a class="mega-btn" href="/school/chungnam">충남</a>
              <a class="mega-btn" href="/school/jeonbuk">전북</a>
              <a class="mega-btn" href="/school/jeonnam">전남</a>
              <a class="mega-btn" href="/school/gyeongbuk">경북</a>
              <a class="mega-btn" href="/school/gyeongnam">경남</a>
              <a class="mega-btn" href="/school/jeju">제주</a>
            </div>
          </div>
        </div>
      </div>
      <div class="gi">
        <button class="gb" style="color:rgba(255,255,255,0.85)">제품별설치<svg class="arr" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="drop"><a href="/subject/math">📐 카드단말기</a><a href="/subject/english">📖 포스기</a><a href="/subject/korean">✍️ 키오스크</a><a href="/subject/science">🔬 CCTV</a><a href="/subject/social">🌏 테이블오더</a><a href="/subject/coding">💻 포스기</a><a href="/subject/essay">📝 키오스크</a><a href="/subject/gsd">📋 출입관리시스템</a></div>
      </div>
        <div class="drop"><a href="/academy/intro">대리점소개</a><a href="/academy/all">센터찾기</a></div>
      </div>
        <div class="drop"><a href="/conversation/english">포스기회화</a><a href="/conversation/chinese">중키오스크회화</a><a href="/conversation/japanese">일본어회화</a></div>
      </div>
      <div class="gi">
        <a href="/contact" class="gb" style="text-decoration:none;display:flex;align-items:center;color:#60A5FA;font-weight:800">문의하기</a>
      </div>
    </nav>
  </div>
</header>`;

const FOOTER = `<footer style="background:#0F2044;padding:40px 0 28px">
  <div style="max-width:1100px;margin:0 auto;padding:0 48px">
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:10px 16px;margin-bottom:32px;font-size:12px;color:rgba(255,255,255,0.4);display:flex;align-items:center;gap:8px">
      <span>⚠️</span><span>안내사항 · 본 사이트의 모든 콘텐츠는 정보 제공 목적이며, 설치 효과를 보장하지 않습니다.</span>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:28px;border-bottom:1px solid rgba(255,255,255,0.08);flex-wrap:wrap;gap:24px">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div style="width:34px;height:34px;background:linear-gradient(135deg,#1D4ED8,#3B82F6);border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <span style="font-size:20px;font-weight:900;letter-spacing:2px;color:white"><em style="font-style:normal;color:#60A5FA">올케어</em>스터디</span>
        </div>
        <p style="font-size:13px;color:rgba(255,255,255,0.4);line-height:1.7">1인 매장부터 대형 프랜차이즈까지<br>매장 운영에 필요한 설비를 한곳에서</p>
      </div>
      <div style="text-align:right">
        <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:6px">📞 무료 현장 진단 전화</div>
        <div style="font-size:22px;font-weight:900;color:white;white-space:nowrap">010-9876-8282</div>
        <a href="tel:01068348080" style="display:inline-block;margin-top:10px;background:#3B82F6;color:white;padding:8px 20px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none">전화 상담</a>
      </div>
    </div>
    <div style="padding-top:20px;font-size:11px;color:rgba(255,255,255,0.3)">
      © 2026 올페이스토어. All rights reserved.
    </div>
  </div>
</footer>
<div class="floats" id="float-btns">
  <a class="fbtn fb1" href="tel:01068348080" title="전화상담 010-9876-8282"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.22 2.84 2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.41-1.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></a>
  <a class="fbtn fb2" id="float-contact-btn" href="/contact?type=tutoring" title="상담하기"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></a>
</div>
<script>
(function(){
  try {
    var path = window.location.pathname;
    var isAcademy = path.indexOf('/academy') === 0;
    var btn = document.getElementById('float-contact-btn');
    if(btn){
      if(isAcademy){
        btn.href = '/contact?type=academy';
      } else {
        btn.href = '/contact?type=tutoring';
      }
    }
    var el = document.getElementById('float-btns');
    var footer = document.querySelector('footer');
    if(!el || !footer) return;
    function update(){
      try {
        if(!el || !footer) return;
        var footerTop = footer.getBoundingClientRect().top;
        var winH = window.innerHeight;
        var elH = el.offsetHeight || 0;
        if(footerTop < winH){
          el.style.position = 'absolute';
          el.style.bottom = 'auto';
          el.style.top = (window.scrollY + footerTop - elH - 60) + 'px';
        } else {
          el.style.position = 'fixed';
          el.style.bottom = '60px';
          el.style.top = 'auto';
        }
      } catch(e){}
    }
    window.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update, {passive:true});
    update();
  } catch(e){}
})();

function toggleMega(id){
  var el = document.getElementById('mega-'+id);
  var gi = document.getElementById('gi-'+id);
  if(!el) return;
  var isOpen = el.classList.contains('on');
  document.querySelectorAll('.mega-drop').forEach(function(d){ d.classList.remove('on'); });
  document.querySelectorAll('.gi').forEach(function(g){ g.classList.remove('open'); });
  if(!isOpen){ el.classList.add('on'); if(gi) gi.classList.add('open'); }
}
function switchTab(menu,tab){
  document.querySelectorAll('#mega-'+menu+' .mega-tab').forEach(function(t){ t.classList.remove('on'); });
  document.querySelectorAll('#mega-'+menu+' .mega-panel').forEach(function(p){ p.classList.remove('on'); });
  event.target.classList.add('on');
  var panel = document.getElementById(menu+'-'+tab);
  if(panel) panel.classList.add('on');
}
document.addEventListener('click', function(e){
  if(!e.target.closest('.gi')) {
    document.querySelectorAll('.mega-drop').forEach(function(d){ d.classList.remove('on'); });
    document.querySelectorAll('.gi').forEach(function(g){ g.classList.remove('open'); });
  }
});
</script>`;

function today(){
  const d=new Date();
  return `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일`;
}

function wrap(title, desc, canonical, body, breadcrumbs){
  // canonical: 영문 URL 그대로 사용 (/seoul/gangnam/high/math)
  const canonicalUrl = `https://allpaystore.com${canonical}`;
  // description: 150자 이내로 트림 (네이버 권장)
  const descShort = desc.length > 150 ? desc.slice(0, 147) + '...' : desc;
  const isoDate = new Date().toISOString().slice(0,10);

  // breadcrumb Schema 생성
  let bcSchema = '';
  if(breadcrumbs && breadcrumbs.length) {
    const items = breadcrumbs.map((b,i) => `{"@type":"ListItem","position":${i+1},"name":"${b.name}","item":"https://allpaystore.com${b.url}"}`).join(',');
    bcSchema = `<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[${items}]}</script>`;
  }

  return `<!DOCTYPE html><html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${descShort}">
<meta name="robots" content="index,follow">
<link rel="canonical" href="${canonicalUrl}">
<link rel="icon" type="image/png" sizes="32x32" href="https://allpaystore.com/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://allpaystore.com/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="https://allpaystore.com/apple-touch-icon.png">
<link rel="shortcut icon" href="https://allpaystore.com/favicon.ico">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${descShort}">
<meta property="og:type" content="article">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:site_name" content="올페이스토어">
<meta property="og:locale" content="ko_KR">
<meta property="og:image" content="https://allpaystore.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="naver-site-verification" content="a1c57425042478220780bb530f8511e3eec2a1fd">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${title}","description":"${descShort}","url":"${canonicalUrl}","publisher":{"@type":"Organization","name":"올페이스토어","url":"https://allpaystore.com","telephone":"010-9876-8282","logo":{"@type":"ImageObject","url":"https://allpaystore.com/logo.png","width":200,"height":60}},"datePublished":"${isoDate}","dateModified":"${isoDate}","inLanguage":"ko-KR"}</script>
${bcSchema}<link rel="alternate" type="application/rss+xml" title="올페이스토어 RSS" href="https://allpaystore.com/rss.xml">
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/allpaystore.css">
</head><body>${HEADER}${body}${FOOTER}</body></html>`;
}

function wrapDark(title,desc,canonical,body){
  const page = wrap(title,desc,canonical,body);
  return page.replace(HEADER, HEADER_DARK);
}



// ── 카테고리별 동적 텍스트 템플릿 ────────────────────────────
// {dong}=동이름, {gu}=구이름, {sido}=시도, {subject}=과목, {grade}=업종, {schools}=상권명
const CATEGORY_TEMPLATES = {
  // A: 상권 특구
  A: {
    math: [
      '{dong} 카드단말기 설치는 {schools} 인근 유동인구와 매장 밀집도를 분석한 후 최적의 카드단말기를 추천·설치해드립니다. {gu} 핵심 상권인 {dong}은 카드·간편결제 비중이 높아 고성능 단말기 설치가 필수입니다.',
      '{dong}은 {gu}에서도 상권이 가장 활성화된 지역으로, 카드단말기 교체·신규 설치 수요가 매우 높습니다. 올페이스토어는 {dong} 지역 업종별 최적 단말기를 분석해 매출 극대화를 지원합니다.',
      '{dong} 카드단말기 설치는 음식점·카페·소매점 등 {schools} 주변 다양한 업종에 맞춘 맞춤형 솔루션을 제공합니다. IC·NFC·QR 결제를 모두 지원하는 최신 단말기를 당일 설치해드립니다.'],
    english: [
      '{dong} 포스기 설치는 {schools} 인근 매장의 주문·결제·매출 관리를 하나의 시스템으로 통합합니다. 터치스크린 포스기부터 클라우드 포스까지 매장 규모에 맞는 최적 장비를 추천해드립니다.',
      '{dong} 포스기 설치는 업종별 메뉴 세팅, 재고 관리, 매출 분석 기능까지 원스톱으로 제공합니다. {gu} 핵심 상권답게 빠른 설치와 당일 운영이 가능합니다.',
      '{gu}에서 가장 유동인구가 많은 {dong}의 포스기 설치는 높은 거래량을 안정적으로 처리하는 고성능 시스템을 기본으로 합니다.'],
    reviews: [
      '{dong}에서 카페 운영 중인데 카드단말기 교체 후 결제 속도가 2배 빨라졌어요. — {dong} 사장님',
      '{dong} 음식점에 포스기 설치했는데 매출 분석이 한눈에 보여서 너무 편해요. — {dong} 사장님',
      '{dong}에서 카드단말기 설치 문의했더니 당일 방문 설치 완료해주셨어요. — {dong} 사장님',
      '올페이스토어에서 {dong} 매장에 포스기 설치 받았는데 A/S 대응이 정말 빠릅니다. — {dong} 사장님',
      '{dong} 상권에서 장사하는데 카드단말기 수수료까지 비교해주셔서 연 50만원 절약했어요. — {dong} 사장님',
      '{dong} 매장 오픈 때 올페이스토어에서 카드단말기·포스기 한번에 설치했어요. 추천합니다. — {dong} 사장님'],
  },
  // B: 신도시
  B: {
    math: [
      '{dong} 카드단말기 설치는 신도시 신규 상가 입점에 맞춰 오픈 전 당일 설치·세팅을 지원합니다. {dong}은 신도시 개발로 신규 매장이 빠르게 늘어나는 지역입니다.',
      '{dong}은 신도시 개발 지역으로 젊은 소비층이 밀집해 카드·간편결제 비중이 매우 높습니다. 최신 IC·NFC 복합 단말기 설치로 매출을 극대화하세요.',
      '{dong} 카드단말기 설치는 신규 입점 매장의 빠른 영업 개시를 지원합니다. 사업자등록 당일 단말기 설치까지 원스톱으로 진행합니다.'],
    english: [
      '{dong} 포스기 설치는 신도시 {gu}의 다양한 프랜차이즈·개인 매장에 업종별 최적화된 포스 시스템을 제공합니다.',
      '{dong} 포스기 설치는 매장 오픈 전 메뉴 세팅부터 결제 연동까지 원스톱으로 완료합니다. 신도시 특성상 배달 앱 연동 설정도 기본 포함입니다.',
      '{dong}은 젊은 소비층이 많아 모바일 결제·배달 연동이 필수입니다. 포스기 설치 시 배달 3사 연동을 무료로 세팅해드립니다.'],
    reviews: [
      '{dong} 신규 상가에 입점하면서 올페이스토어에서 카드단말기 당일 설치 받았어요. — {dong} 사장님',
      '{dong} 신도시라 설치 업체 찾기 어려울 줄 알았는데 당일 방문해주셨어요. — {dong} 사장님',
      '{dong}에서 포스기 설치 받았는데 배달 앱 연동까지 한번에 해주셔서 편했어요. — {dong} 사장님',
      '{dong} 카페 오픈하면서 카드단말기+포스기+키오스크 한번에 설치했어요. — {dong} 사장님',
      '{dong} 프랜차이즈 매장인데 본사 시스템과 완벽 연동해주셨어요. — {dong} 사장님',
      '{dong} 매장 오픈 3일 전에 문의했는데 오픈 당일 설치 완료! — {dong} 사장님'],
  },
  // C: 산업단지
  C: {
    math: [
      '{dong} 카드단말기 설치는 산업단지 인근 구내식당·편의점·소매점 등 다양한 업종에 맞춤 단말기를 제공합니다. {gu} 산업단지 근로자 유동인구를 고려한 고속 결제 시스템을 설치합니다.',
      '{dong}은 {gu} 산업단지 인근으로 점심시간 집중 결제가 많아 빠른 처리 속도의 카드단말기가 필수입니다.',
      '{dong} 카드단말기 설치는 산업단지 특성상 교대 근무 시간에 맞춘 유연한 방문 설치 일정으로 운영합니다.'],
    english: [
      '{dong} 포스기 설치는 산업단지 인근 구내식당·배달 전문점 등에 대량 주문 처리에 최적화된 포스 시스템을 제공합니다.',
      '{dong} 포스기 설치는 근로자 유동인구가 높은 지역 특성에 맞춰 빠른 주문 처리와 매출 정산 기능을 강화한 시스템을 설치합니다.',
      '{dong}은 제조업·IT 기업 밀집 지역으로 법인카드·복지포인트 결제 수요가 높아 다기능 포스기 설치를 추천합니다.'],
    reviews: [
      '{dong} 산업단지 앞에서 식당 하는데 점심시간 결제가 빨라져서 회전율이 올랐어요. — {dong} 사장님',
      '{dong} 카드단말기 설치 받고 법인카드 결제도 한번에 처리돼서 편합니다. — {dong} 사장님',
      '{dong} 바쁜 시간대에도 카드단말기가 안 끊겨서 매출이 확실히 늘었어요. — {dong} 사장님',
      '{dong} 포스기 설치 후 매출 정산이 자동으로 되니 퇴근이 빨라졌습니다. — {dong} 사장님',
      '{dong} 공단 근처인데 출장 설치 빠르게 와주셔서 감사합니다. — {dong} 사장님'],
  },
  // D: 군부대 인근
  D: {
    math: [
      '{dong} 카드단말기 설치는 군부대 인근 매장 특성에 맞춰 빠른 설치 기사 배정과 유연한 방문 일정을 지원합니다.',
      '{dong}은 군부대 인근으로 군인·군무원 유동인구가 많아 체크카드·간편결제 비중이 높은 지역입니다.'],
    english: [
      '{dong} 포스기 설치는 군부대 인근 매장 특성에 맞춰 빠른 주문 처리와 간편 결제 연동 시스템을 설치합니다.',
      '{dong}은 군부대 인근으로 외출·외박 시간대 집중 매출이 발생해 고속 포스 시스템이 필수입니다.'],
    reviews: [
      '{dong} 군부대 앞 치킨집인데 카드단말기 교체 후 결제 에러가 사라졌어요. — {dong} 사장님',
      '{dong} 부대 앞이라 간편결제 수요가 많은데 NFC 단말기 설치하고 매출이 올랐어요. — {dong} 사장님',
      '{dong} 카드단말기 설치 당일 완료해주셔서 영업 공백 없이 잘 운영하고 있습니다. — {dong} 사장님'],
  },
  // E: 대학가
  E: {
    math: [
      '{dong} 카드단말기 설치는 대학가 인근 카페·음식점·편의점 등 소비 밀집 지역에 최적화된 결제 시스템을 제공합니다.',
      '{dong}은 대학가 인근으로 20대 소비층이 밀집해 간편결제·QR결제 비중이 매우 높습니다. 최신 복합 단말기 설치가 필수입니다.',
      '{dong} 카드단말기 설치는 대학가 특성상 카페·주점·배달 전문점 등 다양한 업종에 맞춤 설치를 진행합니다.'],
    english: [
      '{dong} 포스기 설치는 대학가 카페·음식점에 최적화된 메뉴 관리·결제 시스템을 제공합니다.',
      '{dong} 포스기 설치는 대학가 특성상 배달 앱 3사 연동과 테이블오더 통합 설치를 기본으로 합니다.',
      '{dong}은 대학가 인근으로 배달·포장 주문 비중이 높아 배달 연동 포스기 설치 수요가 큽니다.'],
    reviews: [
      '{dong} 대학가 카페인데 카드단말기 교체 후 간편결제가 빨라져서 대기줄이 줄었어요. — {dong} 사장님',
      '{dong} 대학가 음식점에 포스기 설치했는데 배달 주문까지 한 화면에서 관리돼요. — {dong} 사장님',
      '{dong} 주점에 카드단말기+테이블오더 설치했더니 인건비가 확 줄었어요. — {dong} 사장님',
      '{dong} 대학가에서 장사하는데 QR결제 단말기 설치하고 젊은 손님이 더 늘었어요. — {dong} 사장님',
      '{dong} 카페 오픈 때 올페이스토어에서 전 장비 설치했는데 A/S도 빠릅니다. — {dong} 사장님',
      '{dong} 대학가 매장에 최신 포스기 설치 후 매출 관리가 정말 편해졌어요. — {dong} 사장님'],
  },
  // F: 농촌읍면
  F: {
    math: [
      '{dong} 카드단말기 설치는 설치 업체가 부족한 읍면 지역에도 전문 기사가 직접 방문하여 출장 설치합니다. 합리적인 비용으로 최신 단말기를 설치해드립니다.',
      '{dong}은 읍면 지역으로 설치 업체 접근성이 낮지만, 올페이스토어는 전국 어디든 출장 설치를 지원합니다.'],
    english: [
      '{dong} 포스기 설치는 읍면 지역에서도 도심과 동일한 수준의 포스 시스템을 출장 설치로 제공합니다.',
      '{dong}은 읍면 지역이지만 올페이스토어의 전국 출장 설치망으로 도심과 같은 최신 장비를 설치할 수 있습니다.'],
    reviews: [
      '{dong}은 시골이라 설치 업체가 없어서 걱정했는데 올페이스토어에서 직접 방문 설치해주셨어요. — {dong} 사장님',
      '{dong} 포스기 설치 받고 매출 관리가 한결 수월해졌어요. 읍면에서도 최신 장비 쓸 수 있어서 좋아요. — {dong} 사장님',
      '{dong}에서 카드단말기 설치 업체 찾기 어려울 줄 알았는데 당일 방문해주셨어요. — {dong} 사장님'],
  },
  // G: 도서
  G: {
    math: [
      '{dong} 카드단말기 설치는 도서 지역 매장을 위한 출장 설치와 원격 A/S를 모두 지원합니다.',
      '{dong}은 도서 지역 특성상 원격 모니터링이 가능한 카드단말기를 설치해 장애 발생 시 즉시 대응합니다.'],
    english: [
      '{dong} 포스기 설치는 도서 지역에서도 클라우드 포스 시스템으로 실시간 매출 관리가 가능합니다.'],
    reviews: [
      '{dong} 섬 지역인데도 카드단말기 출장 설치해주셔서 카드 결제가 가능해졌어요. — {dong} 사장님',
      '{dong} 포스기 설치 후 원격 A/S로 고장 걱정 없이 운영하고 있습니다. — {dong} 사장님'],
  },
  // H: 일반도심
  H: {
    math: [
      '{dong} 카드단말기 설치는 {gu} {schools} 인근 매장에 업종별 최적화된 결제 단말기를 1:1 맞춤 설치합니다. IC칩·NFC·QR 결제를 모두 지원하는 최신 장비를 당일 설치해드립니다.',
      '{dong} 카드단말기 설치는 {schools} 인근 상권 분석을 통해 매장 업종·규모에 맞는 최적의 단말기를 추천합니다. 수수료 비교부터 설치까지 원스톱으로 진행합니다.',
      '{dong}에서 카드단말기를 설치하면 {schools} 주변 상권의 결제 트렌드를 반영한 최적 솔루션과 정기 유지보수를 함께 제공받을 수 있습니다.'],
    english: [
      '{dong} 포스기 설치는 {schools} 인근 음식점·카페·소매점에 업종별 최적화된 포스 시스템을 제공합니다. 메뉴 세팅부터 배달 앱 연동까지 원스톱으로 완료합니다.',
      '{dong} 포스기 설치는 {schools} 인근 매장의 규모와 업종에 맞는 맞춤형 포스 솔루션을 제공합니다. 클라우드 포스로 실시간 매출 분석이 가능합니다.',
      '{dong}에서 포스기를 설치하면 {schools} 주변 매장의 주문·결제·매출 관리를 하나의 시스템으로 통합할 수 있습니다.'],
    reviews: [
      '{dong} 음식점에 카드단말기 교체 설치했는데 결제 속도가 확실히 빨라졌어요. — {dong} 사장님',
      '{dong} 카페에 포스기 설치 받고 매출 분석이 한눈에 보여서 경영이 편해졌어요. — {dong} 사장님',
      '{dong} 카드단말기 설치 기사분이 매장 동선까지 고려해서 설치해주셔서 감동이었어요. — {dong} 사장님',
      '{dong} 포스기 설치 후 배달 3사 연동까지 해주셔서 주문 관리가 정말 편합니다. — {dong} 사장님',
      '{dong} 소매점에 카드단말기 설치했는데 수수료가 기존보다 저렴해져서 만족합니다. — {dong} 사장님',
      '{dong} 포스기 설치 기사분이 직원 설치까지 해주셔서 바로 사용할 수 있었어요. — {dong} 사장님'],
  },
};

// ── 동적 페이지 생성 함수 ────────────────────────────────────

// 해시 함수: 동+과목 조합으로 일관된 템플릿 선택

// ── 한글 → 로마자 변환 (URL 슬러그용) ─────────────────────────────────────
const HG_ONSET  = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
const HG_NUC    = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
const HG_CODA   = ['','g','kk','gs','n','nj','nh','d','l','lg','lm','lb','ls','lt','lp','lh','m','b','bs','s','ss','ng','j','ch','k','t','p','h'];

function toRoman(text) {
  let r = '';
  for (const ch of text) {
    const code = ch.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      const c = code - 0xAC00;
      r += HG_ONSET[Math.floor(c/588)] + HG_NUC[Math.floor((c%588)/28)] + HG_CODA[c%28];
    } else if (ch === ' ') {
      r += '-';
    } else if (/[a-zA-Z0-9-]/.test(ch)) {
      r += ch.toLowerCase();
    }
  }
  return r || 'dong';
}

// 로마자 → 한글 동이름 (REGIONS dongs에서 역탐색)
function fromRoman(sidoEn, guEn, roman) {
  for (const [sido, reg] of Object.entries(REGIONS)) {
    if ((SIDO_EN[sido]||sido) !== sidoEn) continue;
    for (const [ak, area] of Object.entries(reg.areas)) {
      if ((DISTRICT_EN[ak]||ak) !== guEn) continue;
      for (const dong of (area.dongs||[])) {
        if (toRoman(dong) === roman) return dong;
      }
    }
  }
  return null;
}

function hashSelect(str, arr) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return arr[h % arr.length];
}



// ── 동 메인 페이지: /sidoEn/guEn/dongRoman ──────────────────────────────────
function makeDongMainPage(sidoEn, guEn, dongName) {
  let sido=null, ak=null, region=null, area=null;
  for(const [s,reg] of Object.entries(REGIONS)){
    if((SIDO_EN[s]||s)!==sidoEn) continue;
    for(const [a,ar] of Object.entries(reg.areas)){
      if((DISTRICT_EN[a]||a)!==guEn) continue;
      sido=s; ak=a; region=reg; area=ar; break;
    }
    if(sido) break;
  }
  if(!sido||!area) return null;
  if(!area.dongs||!area.dongs.includes(dongName)) return null;

  const dong = dongName;
  let _dh = 0;
  for(let i=0;i<dong.length;i++) _dh = (_dh*31+dong.charCodeAt(i))>>>0;
  const dInfoNums = [120+(_dh%231), 91+(_dh%9)];
  const gu = ak;
  const schools = area.schools||`${ak} 주요 상권`;
  const sidoLabel = region.label||sido;
  const canonical = `/${sidoEn}/${guEn}/${toRoman(dong)}`;
  const cat = area.cat||'H';
  const tmpl = CATEGORY_TEMPLATES[cat]||CATEGORY_TEMPLATES['H'];

  const CAT_DESC = {
    A:`${dong}은 ${gu}에서 상권이 활성화된 상권으로 1:1 맞춤 설치 수요가 매우 높습니다.`,
    B:`${dong}은 신도시 지역으로 젊은 신규 상가가 밀집해 있습니다.`,
    C:`${dong}은 산업단지 인근으로 자영업자 비율이 높아 출장 설치 선호도가 높습니다.`,
    D:`${dong}은 군부대 인근 매장이 많아 빠른 기사 배정이 중요합니다.`,
    E:`${dong}은 대학가 인근으로 우수한 설치 전문 기사 공급이 풍부합니다.`,
    F:`${dong}은 설치 업체 접근성이 낮은 지역 특성상 1:1 맞춤 설치 선호도가 높습니다. 합리적인 비용으로 검증된 기사를 연결해드립니다.`,
    G:`${dong}은 도서 지역으로 원격 설치 지원와 출장 설치를 모두 지원합니다.`,
    H:`${dong}은 ${gu} 주거지역으로 ${schools} 상권 매장 관리 설치 수요가 꾸준합니다.`,
  };
  let _mh = 0;
  for(let j=0;j<dong.length;j++) _mh = (_mh*31+dong.charCodeAt(j))>>>0;
  const infoNums = [120+(_mh%231), 91+(_mh%9)];
  const intro = CAT_DESC[cat]||CAT_DESC['H'];

  const GRADES_3 = [
    {en:'elementary',ko:'소규모매장',label:'매장',desc:`소규모 매장 전 업종 카드단말기·포스기·키오스크·CCTV·CCTV 기초부터 탄탄하게 관리합니다.`},
    {en:'middle',ko:'중형매장',label:'매장',desc:`중형매장 매장 관리와 매장 준비를 동시에 진행합니다.`},
    {en:'high',ko:'대형매장',label:'매장',desc:`대형매장 매출 관리 관리와 유지보수 관리를 체계적으로 시공합니다.`}];

  const subjList = Object.entries(SUBJECTS);

  // 제품별 × 과목별 링크 그리드
  const gradeBlocks = GRADES_3.map(({en,ko,label,desc}) => {
    const links = subjList.map(([subj,v]) =>
      `<a class="subj-link" href="${canonical}/${en}/${SUBJECT_EN[subj]||subj}">
        <span>${v.emoji} ${dong} ${ko} ${subj}카드단말기 설치</span><span>→</span>
      </a>`
    ).join('');
    return `
    <h2>${dong} ${label} 카드단말기 설치</h2>
    <p>${desc}</p>
    <div class="subj-grid">${links}</div>`;
  }).join('');

  // 인근 상권
  const schoolsHtml = `<h2>인근 상권</h2>
    <p>${dong} 인근 상권로는 ${schools} 등이 있습니다. 매장별 시험 특성에 맞춘 매장 환경 대비 설치를 제공합니다.</p>`;

  const title = `${dong} 카드단말기 설치 | ${gu} ${dong} 맞춤 전문 설치 안내 - 올페이스토어`;
  const desc = `${dong} 카드단말기 설치 전문. 카드단말기·포스기·키오스크·CCTV 카드단말기·포스기·키오스크·CCTV·CCTV 1:1 맞춤 설치. ${schools} 매장 환경 분석. 무료 현장 진단 010-9876-8282`;
  const bc = [{name:'홈',url:'/'},{name:sidoLabel,url:`/${sidoEn}`},{name:gu,url:`/${sidoEn}/${guEn}`},{name:`${dong} 카드단말기 설치`,url:canonical}];

  const body = `<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/${sidoEn}">${sidoLabel}</a> › <a href="/${sidoEn}/${guEn}">${gu}</a> › <span>${dong} 카드단말기 설치</span></div>
  <div class="art-tag">📍 ${gu} · ${dong}</div>
  <h1 class="art-title">${dong} 카드단말기 설치 | ${gu} ${dong} 맞춤 전문 설치 안내</h1>
  <div class="art-meta"><span>✏️ 올페이스토어</span><span>📅 ${today()}</span></div>
  <div class="info-box">
    <div class="info-item"><div class="info-num">${infoNums[0]}명</div><div class="info-label">설치 기사</div></div>
    <div class="info-item"><div class="info-num">${infoNums[1]}%</div><div class="info-label">만족도</div></div>
    <div class="info-item"><div class="info-num">무료</div><div class="info-label">상담</div></div>
  </div>
  <div class="u8">
    <img src="${(['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80','https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=80','https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80','https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=900&q=80','https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80'])[_dh%5]}" alt="${dong} 카드단말기 설치" style="width:100%;height:100%;object-fit:cover" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg,#EFF6FF,#DBEAFE)';this.remove()">
    <div class="u11">
      <div style="color:white"><div style="font-size:13px;opacity:.7;margin-bottom:6px">${gu} · ${dong}</div><div style="font-size:28px;font-weight:900">${dong} 카드단말기 설치</div></div>
    </div>
  </div>
  <div class="art-body">
    <h2>${dong} 카드단말기 설치 안내</h2>
    <p>${intro}</p>
    <p>올페이스토어는 <strong>${gu} ${dong}</strong> 지역 음식점·카페·소매점 등 전 업종 카드단말기·포스기·키오스크·CCTV·CCTV·테이블오더·무인결제기·배달주문기·출입관리시스템 1:1 맞춤 설치를 연결합니다. 매장의 환경과 니즈에 맞는 검증된 기사를 빠르게 배정해드립니다.</p>
    <p>주요 상권: <strong>${schools}</strong></p>
    ${schoolsHtml}
    <h2>${dong} 카드단말기 설치 특징</h2>
    <p><strong>① 매장 현장 완벽 분석</strong> — ${schools} 매장 업종 특성을 철저히 분석해 매장 환경 최적화 설치를 진행합니다. 장비별 출제 빈도와 유형을 파악해 설치 전 집중 대비가 가능합니다.</p>
    <p><strong>② 검증된 설치 기사 1:1 연결</strong> — 자격증·경력·시공 이력 3단계 검증을 통과한 기사만 배정합니다. 사장님과 전문가의 설치/상담 스타일이 맞지 않으면 부담 없이 교체 가능합니다.</p>
    <p><strong>③ 주간 설치 보고서 제공</strong> — 매 설치/상담 후 설치 내용·설치 만족도를 정리해 사장님께 공유합니다. 투명한 사후 관리로 매출 변화를 직접 확인할 수 있습니다.</p>
    <p><strong>④ 취약 장비 집중 보완</strong> — 장비별 취약점을 정확히 파악하고 집중 보완합니다. 대리점 설치/상담에서 놓친 부분을 1:1로 완전히 채워드립니다.</p>
    <p><strong>⑤ 빠르게 배정</strong> — 설치 문의 후 빠른 시간 내에 ${dong} 지역 맞춤 기사를 연결해드립니다. 빠르면 당일 설치도 가능합니다.</p>

    <h2>${dong} 설치 진행 방식</h2>
    <p>첫 방문 진단 전 매장의 현재 환경과 니즈를 파악하는 <strong>매장 진단</strong>을 진행합니다. 현장 진단 결과를 바탕으로 맞춤 설치 방안을 설계하고, 주 2~3회 출장 설치로 체계적으로 시공합니다.</p>
    <p><strong>설치 진행 3단계</strong>: 개념 정리 → 유형별 문제 풀이 → 오답 분석 및 취약점 보완. 매 설치/상담마다 전 시간 내용을 복습하고 새 내용을 운영하는 방식으로 기억 정착률을 높입니다. 시공 기간에는 집중 보충 설치를 추가로 제공합니다.</p>

    <h2>${dong} 제품별 설치 전략</h2>
    <p><strong>소규모매장</strong> — 모든 운영의 기초가 완성되는 시기입니다. 카드단말기·포스기·키오스크·CCTV 기초 개념을 탄탄히 다지지 않으면 매장 확장 후 어려움을 겪습니다. 단순 암기가 아닌 원리 이해 중심으로 지도해 매장 운영 효율을 높여드립니다.</p>
    <p><strong>중형매장</strong> — 중형 매장은 결제·주문·관리 시스템을 통합하는 단계입니다. ${schools} 인근 상권 특성에 맞춰 카드단말기·포스기·키오스크를 연동하고, 매출 분석 시스템을 구축하여 데이터 기반 매장 운영이 가능하도록 합니다.</p>
    <p><strong>대형매장</strong> — 매출 관리이 매출에 결정적인 역할을 합니다. ${schools} 매출 최적화을 목표로 집중 관리하며, 유지보수 관리를 동시에 진행합니다. 시험 4주 전부터 집중 대비 모드로 전환합니다.</p>

    <h2>자주 묻는 질문</h2>
    <p><strong>Q. ${dong}에서 설치 전문 기사 찾는 데 얼마나 걸리나요?</strong><br>설치 문의 후 빠른 시간 내 상담사가 연락드립니다. ${schools} 시공 사례를 잘 아는 전문가 위주로 추천해드리며, 빠르면 당일 설치도 가능합니다.</p>
    <p><strong>Q. 기존 장비와 신규 설치를 병행해도 되나요?</strong><br>기존 장비와 호환되는 신규 장비를 추천하여 통합 운영할 수 있도록 설계합니다. 기존 설비 상태에 맞춰 기존 장비와 호환되는 최적 구성을 제안합니다.</p>
    <p><strong>Q. 설치 비용는 어떻게 되나요?</strong><br>기사 자격증·경력·설치 방식에 따라 다르며, 무료 진단 후 사장님 예산에 맞는 기사를 투명하게 안내해드립니다. 첫 체험 설치는 무료입니다.</p>
    <p><strong>Q. 매장이 아무리 작아도 괜찮나요?</strong><br>기본 장비부터 차근차근 다져야 할 사장님일수록 전문 설치가 효과적입니다. 수준에 맞는 기사를 배정해드리니 걱정하지 않으셔도 됩니다.</p>
    <p><strong>Q. 설치 후 효과는 언제 나타나나요?</strong><br>보통 설치 직후부터 이용하면 매장 매출 변화가 나타납니다. 긴급 설치(설치 대비 당일~3일)도 운영합니다.</p>

    <h2>제품별 설치</h2>
    <p>아래에서 제품별 상세 정보를 확인하세요.</p>
    ${gradeBlocks}
    <h2>${dong} 인근 업종별 설치</h2>
    ${(() => {
      const schoolMap = SCHOOL_MAP[sidoEn]?.[ak];
      if(!schoolMap) return '';
      const GRADE_LABEL = {E:'소규모매장',M:'중형매장',H:'대형매장'};
      let html = '';
      for(const [grade,names] of Object.entries(schoolMap)){
        if(!Array.isArray(names)||names.length===0) continue;
        const suffix = grade==='E'?'매장':grade==='M'?'매장':'매장';
        const label = GRADE_LABEL[grade];
        const shown = names.slice(0,6).map(n=>{
          const sr=toRoman(n);
          return `<a class="subj-link" href="/school/${sidoEn}/${guEn}/${sr}"><span>🏫 ${n+suffix}</span><span>→</span></a>`;
        }).join('');
        if(shown) html += `<p><strong>${label}</strong></p><div class="subj-grid">${shown}</div>`;
      }
      return html;
    })()}
  </div>
  <div class="cta-box">
    <h3>${dong} 카드단말기 설치 무료 현장 진단</h3>
    <p>빠른 시간 내 설치 상담사가 연락드립니다</p>
    <div class="cta-btns">
      <a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a>
      <a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a>
    </div>
  </div>
</div>`;

  return wrap(title, desc, canonical, body, bc);
}

// ── REGIONS 기반 동 페이지 생성 (DONG_DB 불필요) ──────────────────────────
function makeDongPageByName(sidoEn, guEn, dongName, subjectEn, gradeEn) {
  // REGIONS에서 시도+구군 찾기
  let sido = null, ak = null, region = null, area = null;
  for (const [s, reg] of Object.entries(REGIONS)) {
    if ((SIDO_EN[s]||s) === sidoEn) {
      for (const [a, ar] of Object.entries(reg.areas)) {
        if ((DISTRICT_EN[a]||a) === guEn) {
          sido = s; ak = a; region = reg; area = ar;
          break;
        }
      }
    }
    if (sido) break;
  }
  if (!sido || !area) return null;

  // 동이름이 REGIONS dongs에 있는지 확인
  const dongs = area.dongs || [];
  if (!dongs.includes(dongName)) return null;

  const subject = SUBJECT_MAP[subjectEn] || subjectEn;
  const grade = GRADE_MAP[gradeEn] || gradeEn;
  const subj = SUBJECTS[subject];
  const gradeObj = GRADES[grade];
  if (!subj || !gradeObj) return null;

  const cat = area.cat || 'H';
  const tmpl = CATEGORY_TEMPLATES[cat] || CATEGORY_TEMPLATES['H'];
  const subjectKey = subject === '카드단말기' ? 'math' : subject === '포스기' ? 'english' : 'math';
  const tmplTexts = tmpl[subjectKey] || tmpl.math;
  const reviews = tmpl.reviews;

  const dong = dongName;
  let _dh2 = 0;
  for(let j=0;j<dong.length;j++) _dh2 = (_dh2*31+dong.charCodeAt(j))>>>0;
  const dInfoNums = [120+(_dh2%231), 91+(_dh2%9)];
  const gu = ak;
  // gradeEn에 따라 매장규모에 맞는 학교 추출
  const _gradeKey = (gradeEn==='elementary'||gradeEn.startsWith('elem')) ? 'E' : (gradeEn==='middle'||gradeEn.startsWith('mid')) ? 'M' : 'H';
  const _gugunSchools = (() => {
    // SCHOOL_MAP에서 해당 구군 + 매장규모 학교 가져오기
    const sidoData = SCHOOL_MAP[sidoEn];
    if (!sidoData) return null;
    // 구군 한글 찾기
    for (const [gugunK, gradeData] of Object.entries(sidoData)) {
      if ((DISTRICT_EN[gugunK] || toRoman(gugunK)) === guEn) {
        const gradeSchools = gradeData[_gradeKey];
        if (Array.isArray(gradeSchools) && gradeSchools.length) {
          // 최대 4개 학교 + 매장규모 suffix
          const suffix = _gradeKey==='E'?'매장':_gradeKey==='M'?'매장':'매장';
          return gradeSchools.slice(0,4).map(n=>n+suffix).join(', ');
        }
        break;
      }
    }
    return null;
  })();
  const schools = _gugunSchools || area.schools || `${ak} 주요 상권`;
  const sidoLabel = region.label || sido;
  const canonical = `/${sidoEn}/${guEn}/${toRoman(dongName)}/${gradeEn}/${subjectEn}`;

  // 이하 makeDongPage와 동일한 본문 생성 로직 재사용
  const mainText = hashSelect(dong + subject, tmplTexts)
    .replace(/{dong}/g, dong).replace(/{gu}/g, gu)
    .replace(/{sido}/g, sido).replace(/{subject}/g, subject)
    .replace(/{grade}/g, grade).replace(/{schools}/g, schools);

  const gradeDesc = (() => {
    const GRADE_DESC_MAP = {
      '소규모매장': `${dong} 소규모매장 카드단말기 설치는 기초 개념부터 차근차근 쌓아 매장를 준비합니다. 수 개념·연산·도형·분수 등 전 과정을 1:1 맞춤 지도로 탄탄하게 완성합니다.`,
      '중형매장': `${dong} 중형매장 카드단말기 설치는 중학 전 과정을 체계적으로 관리합니다. 핵심 단원을 집중 보완하고 매장를 미리 준비합니다.`,
      '대형매장': `${dong} 대형매장 카드단말기 설치는 매장 관리와 유지보수을 동시에 관리하는 맞춤 설치 방안으로 운영합니다. 취약 장비을 집중 보완하고 유지보수 핵심 유형을 반복 훈련합니다.`,
    };
    return GRADE_DESC_MAP[grade] || GRADE_DESC_MAP['대형매장'];
  })();

  // 과목별 솔루션
  const CURRICULUM_MAP = {
    '카드단말기': {
      '소규모매장': `올페이스토어 ${dong} 소규모매장 카드단말기 설치는 매장 현황 진단→최적 단말기 선정→설치·세팅→결제 테스트→사용법 설치 순으로 진행합니다. IC칩·NFC·QR코드·간편결제를 모두 지원하는 복합 단말기를 기본으로 설치하며, 월 카드 수수료 비교를 통해 가장 유리한 VAN사를 추천해드립니다.`,
      '중형매장': `올페이스토어 ${dong} 중형매장 카드단말기 설치는 카운터 동선 분석→복수 단말기 배치→결제 네트워크 구축→통합 정산 세팅 순으로 진행합니다. ${schools} 인근 중형 매장 특성에 맞춰 2대 이상 단말기 동시 운영과 통합 매출 정산 시스템을 구축합니다.`,
      '대형매장': `올페이스토어 ${dong} 대형매장 카드단말기 설치는 매장 전체 결제 인프라 설계→멀티 단말기 네트워크 구축→POS 연동→통합 관리 시스템 세팅 순으로 진행합니다. 대형 매장에 필요한 고속 결제·다중 단말기·실시간 매출 모니터링을 원스톱으로 구축합니다.`,
    },
    '포스기': {
      '소규모매장': `올페이스토어 ${dong} 소규모매장 포스기 설치는 업종 분석→메뉴·상품 등록→결제 연동→배달 앱 연결→직원 설치 순으로 진행합니다. 터치스크린 포스기에 카드결제·현금영수증·배달 주문을 하나로 통합해 소규모 매장도 효율적으로 운영할 수 있습니다.`,
      '중형매장': `올페이스토어 ${dong} 중형매장 포스기 설치는 매장 동선 분석→주문·결제 프로세스 설계→재고 관리 연동→매출 분석 대시보드 세팅 순으로 진행합니다. ${schools} 인근 중형 매장에 적합한 클라우드 포스 시스템으로 실시간 매출·재고 관리가 가능합니다.`,
      '대형매장': `올페이스토어 ${dong} 대형매장 포스기 설치는 매장 전체 주문·결제 프로세스 설계→멀티 포스 네트워크 구축→주방 프린터 연동→본사 연동 순으로 진행합니다. 프랜차이즈·대형 매장에 필요한 본사 실시간 연동과 다매장 통합 관리 시스템을 구축합니다.`,
    },
    '키오스크': {
      '소규모매장': `올페이스토어 ${dong} 소규모매장 키오스크 설치는 매장 공간 분석→최적 위치 선정→메뉴 UI 디자인→결제 시스템 연동→고객 동선 최적화 순으로 진행합니다. 소규모 매장에서도 인건비를 절감하고 주문 효율을 높이는 컴팩트 키오스크를 설치합니다.`,
      '중형매장': `올페이스토어 ${dong} 중형매장 키오스크 설치는 고객 동선 분석→복수 키오스크 배치→주방 시스템 연동→대기 관리 시스템 구축 순으로 진행합니다. ${schools} 인근 중형 음식점·카페에 최적화된 멀티 키오스크 운영 솔루션을 제공합니다.`,
      '대형매장': `올페이스토어 ${dong} 대형매장 키오스크 설치는 매장 전체 자동화 설계→키오스크 네트워크 구축→결제·주문·재고 통합 연동→운영 데이터 분석 시스템 구축 순으로 진행합니다. 대형 매장의 완전 무인 운영을 지원하는 통합 키오스크 시스템을 설치합니다.`,
    },
    'CCTV': {
      '소규모매장': `올페이스토어 ${dong} 소규모매장 CCTV 설치는 매장 보안 취약점 분석→최적 카메라 위치 선정→배선 공사→녹화 시스템 세팅→모바일 원격 모니터링 연동 순으로 진행합니다. 소규모 매장에 적합한 2~4채널 HD CCTV 시스템을 설치합니다.`,
      '중형매장': `올페이스토어 ${dong} 중형매장 CCTV 설치는 매장 전체 보안 설계→8채널 이상 카메라 배치→NVR 녹화기 설치→원격 모니터링 시스템 구축 순으로 진행합니다. ${schools} 인근 중형 매장의 사각지대 없는 보안 시스템을 구축합니다.`,
      '대형매장': `올페이스토어 ${dong} 대형매장 CCTV 설치는 매장·주차장·창고 통합 보안 설계→고화질 카메라 네트워크 구축→AI 영상 분석 시스템 연동→통합 관제 시스템 구축 순으로 진행합니다. 대형 매장에 필요한 AI 기반 이상행동 감지·얼굴인식 시스템까지 통합 설치합니다.`,
    },
    '테이블오더': {
      '소규모매장': `올페이스토어 ${dong} 소규모매장 테이블오더 설치는 매장 테이블 배치 분석→QR코드·태블릿 방식 선택→메뉴 등록→주방 프린터 연동→실사용 테스트 순으로 진행합니다. 소규모 음식점도 홀 직원 없이 효율적으로 운영할 수 있습니다.`,
      '중형매장': `올페이스토어 ${dong} 중형매장 테이블오더 설치는 전 테이블 태블릿 배치→POS 실시간 연동→주방 디스플레이 시스템(KDS) 연동→매출 분석 대시보드 세팅 순으로 진행합니다. ${schools} 인근 중형 매장에 맞춤 설치합니다.`,
      '대형매장': `올페이스토어 ${dong} 대형매장 테이블오더 설치는 매장 전체 주문 자동화 설계→멀티 테이블오더 네트워크 구축→POS·KDS·결제 시스템 통합 연동→운영 데이터 분석 순으로 진행합니다. 대형 매장의 주문·결제·조리 프로세스를 완전 자동화합니다.`,
    },
    '무인결제기': {
      '소규모매장': `올페이스토어 ${dong} 소규모매장 무인결제기 설치는 매장 공간 분석→무인결제기 위치 선정→결제 시스템 연동→상품 등록→사용자 테스트 순으로 진행합니다. 편의점·세탁소·스터디카페 등 소규모 무인 매장에 최적화된 솔루션을 제공합니다.`,
      '중형매장': `올페이스토어 ${dong} 중형매장 무인결제기 설치는 매장 동선 분석→복수 결제기 배치→재고·결제 통합 관리 시스템 구축→원격 모니터링 세팅 순으로 진행합니다. 무인 운영 매장의 효율을 극대화합니다.`,
      '대형매장': `올페이스토어 ${dong} 대형매장 무인결제기 설치는 매장 전체 무인화 설계→다중 결제기 네트워크 구축→재고·보안·결제 통합 시스템→24시간 원격 관제 순으로 진행합니다. 대형 무인 매장의 완전 자동화 운영을 지원합니다.`,
    },
    '배달주문기': {
      '소규모매장': `올페이스토어 ${dong} 소규모매장 배달주문기 설치는 배달 앱 3사(배민·요기요·쿠팡이츠) 통합 연동→주문 자동 수신→주방 프린터 연결→매출 정산 세팅 순으로 진행합니다. 하나의 기기로 모든 배달 주문을 관리할 수 있습니다.`,
      '중형매장': `올페이스토어 ${dong} 중형매장 배달주문기 설치는 배달·포장·홀 주문 통합 관리→POS 실시간 연동→주방 디스플레이 연결→배달 매출 분석 대시보드 세팅 순으로 진행합니다. 배달과 매장 주문을 하나의 시스템으로 통합 관리합니다.`,
      '대형매장': `올페이스토어 ${dong} 대형매장 배달주문기 설치는 다매장 배달 주문 통합 관리→본사 실시간 연동→배달 기사 배차 시스템 연결→매출·원가 분석 대시보드 구축 순으로 진행합니다. 프랜차이즈·다점포 배달 운영을 완전 자동화합니다.`,
    },
    '출입관리시스템': {
      '소규모매장': `올페이스토어 ${dong} 소규모매장 출입관리시스템 설치는 출입구 분석→카드키·비밀번호 방식 선택→도어락 설치→출입 기록 시스템 세팅 순으로 진행합니다. 스터디카페·코워킹스페이스·무인매장에 최적화된 출입 관리 솔루션을 제공합니다.`,
      '중형매장': `올페이스토어 ${dong} 중형매장 출입관리시스템 설치는 매장 전체 출입 동선 설계→QR·앱·카드 복합 인증 시스템→CCTV 연동→출입 데이터 관리 순으로 진행합니다. 회원 관리와 보안을 동시에 강화합니다.`,
      '대형매장': `올페이스토어 ${dong} 대형매장 출입관리시스템 설치는 매장·사무실·창고 통합 출입 관리 설계→생체인식·카드·앱 복합 인증→CCTV·경보 연동→통합 보안 관제 시스템 구축 순으로 진행합니다. 대형 시설의 보안과 출입 관리를 완전 통합합니다.`,
    },
  };
  const curriculumText = (CURRICULUM_MAP[subject]?.[grade]) || `올페이스토어 ${dong} ${grade} ${subject} 설치는 매장 현황 진단→최적 장비 선정→전문 기사 출장 설치→세팅 및 테스트→사용법 설치 순으로 진행합니다. ${schools} 인근 매장 환경에 최적화된 맞춤 솔루션을 제공합니다.`;

  // 매장 규모별 설치 전략
  const STRATEGY_MAP = {
    '소규모매장': `소규모 매장은 공간 효율과 비용 대비 효과가 가장 중요합니다. ${dong} 소규모매장 ${subject} 설치는 매장 면적과 업종을 고려한 최적의 장비를 추천하고, 최소 비용으로 최대 효율을 낼 수 있는 솔루션을 제공합니다. 올페이스토어는 소규모 매장에도 대형 매장과 동일한 수준의 전문 설치 서비스를 제공하며, 설치 후 사용법 설치과 A/S까지 책임집니다. ${subject} 수수료 비교와 최적 요금제 안내도 함께 제공해드립니다.`,
    '중형매장': `중형 매장은 결제 효율과 운영 시스템 통합이 핵심입니다. ${dong} 중형매장 ${subject} 설치는 ${schools} 인근 상권 특성과 매장 업종을 분석해 최적의 장비 구성을 설계합니다. 카드단말기·포스기·키오스크·CCTV·배달 시스템 등 여러 장비를 하나의 네트워크로 통합 운영할 수 있는 시스템을 구축합니다. 설치 후 정기 점검과 원격 A/S로 안정적인 운영을 보장합니다.`,
    '대형매장': `대형 매장은 통합 관리 시스템과 안정성이 가장 중요합니다. ${dong} 대형매장 ${subject} 설치는 ${schools} 인근 대형 매장의 전체 결제·주문·보안 인프라를 종합 설계합니다. 다중 단말기 네트워크·본사 연동·실시간 매출 모니터링·AI 보안 시스템까지 원스톱으로 구축합니다. 전담 기사 배정으로 장애 발생 시 2시간 이내 출동 보장하며, 월간 정기 점검 서비스를 제공합니다.`,
  };
  const gradeStrategyText = STRATEGY_MAP[grade] || STRATEGY_MAP['중형매장'];

  const review1 = hashSelect(dong+'r1', reviews).replace(/{dong}/g,dong).replace(/{schools}/g,schools).replace(/{gu}/g,gu);
  // duplicate removed.replace(/{dong}/g,dong).replace(/{schools}/g,schools).replace(/{gu}/g,gu);
  const review2 = hashSelect(dong+'r2', reviews).replace(/{dong}/g,dong).replace(/{schools}/g,schools).replace(/{gu}/g,gu);

  const CAT_DESC = {
    A: `${dong}은 ${gu}에서도 상권이 활성화된 상권으로, ${schools} 설치 수요이 치열합니다. 1:1 맞춤 설치 수요가 매우 높습니다.`,
    B: `${dong}은 신도시 개발로 젊은 신규 상가가 밀집한 지역입니다. 빠른 기사 배정이 가능합니다.`,
    C: `${dong}은 산업단지 인근으로 자영업자이 많아 출장 설치 선호도가 높습니다.`,
    D: `${dong}은 군부대 인근 매장이 많아 잦은 이사에도 빠른 연결이 중요합니다.`,
    E: `${dong}은 대학가 인근으로 우수한 설치 전문 기사 공급이 풍부합니다.`,
    F: `${dong}은 설치 업체 접근성이 낮은 지역 특성상 출장 설치 선호도가 높습니다. 합리적인 비용으로 1:1 지도가 가능합니다.`,
    G: `${dong}은 도서 지역으로 원격 설치 지원와 출장 설치를 모두 지원합니다.`,
    H: `${dong}은 ${gu} 주거지역으로 ${schools} 상권 매장 관리 설치 수요가 꾸준합니다.`,
  };
  const catDesc = CAT_DESC[cat] || CAT_DESC['H'];

  const SUBJ_IMAGES = {
    '카드단말기': ['https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80','https://images.unsplash.com/photo-1509228468518-180dd4864904?w=900&q=80','https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=900&q=80'],
    '포스기': ['https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&q=80','https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80','https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80'],
    '키오스크': ['https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&q=80','https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=900&q=80','https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80'],
    'CCTV': ['https://images.unsplash.com/photo-1532094349884-543559244e6a?w=900&q=80','https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80','https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=900&q=80'],
    '테이블오더': ['https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=900&q=80','https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80','https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=900&q=80'],
    '포스기': ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80','https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80','https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80'],
    '키오스크': ['https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80','https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=900&q=80','https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80'],
  };
  const _imgs = SUBJ_IMAGES[subject] || SUBJ_IMAGES['카드단말기'];
  const thumbImg = _imgs[_dh2 % _imgs.length];

  // 소규모매장/중형매장/대형매장 × 7과목 = 21개 링크
  const GRADE3_LIST = [
    {en:'elementary', ko:'소규모매장'},
    {en:'middle',     ko:'중형매장'},
    {en:'high',       ko:'대형매장'}];
  const otherSubjects = GRADE3_LIST.map(({en:gEn, ko:gKo}) =>
    Object.entries(SUBJECTS).map(([s,v]) =>
      `<a class="subj-link" href="/${sidoEn}/${guEn}/${toRoman(dongName)}/${gEn}/${SUBJECT_EN[s]||s}"><span>${v.emoji} ${dong} ${gKo} ${s}카드단말기 설치</span><span>→</span></a>`
    ).join('')
  ).join('');

  const relDongs = dongs.filter(d=>d!==dongName).slice(0,6).map(d=>
    `<a href="/${sidoEn}/${guEn}/${toRoman(d)}/${gradeEn}/${subjectEn}" class="rel-card"><div class="rc-tag">${gu} · ${d}</div><div class="rc-title">${d} ${subject}카드단말기 설치 | ${gu} ${d} ${subject} 맞춤 카드단말기 설치</div></a>`
  ).join('');

  const keywords = [`${dong} ${subject}카드단말기 설치`, `${gu} ${dong} 카드단말기 설치`, `${dong} ${grade} 카드단말기 설치`,
    `${dong} 1:1 설치`, `${gu} ${grade} ${subject}`, `${dong} 매장 환경 ${subject}`];
  const keywordTags = keywords.map(k=>`<span class="keyword-tag">${k}</span>`).join('');

  const title = `${dong} ${grade} ${subject}카드단말기 설치 | ${gu} ${dong} ${grade} ${subject} 맞춤 전문 설치 - 올페이스토어`;
  const desc = `${dong} ${grade} ${subject}카드단말기 설치 전문. ${schools} 시공 사례 분석. 1:1 맞춤 설치. 무료 현장 진단 010-9876-8282`;
  const bc = [{name:'홈',url:'/'},{name:sidoLabel,url:`/${sidoEn}`},{name:gu,url:`/${sidoEn}/${guEn}`},{name:`${dong} ${subject}카드단말기 설치`,url:canonical}];

  const body = `<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/${sidoEn}">${sidoLabel}</a> › <a href="/${sidoEn}/${guEn}">${gu}</a> › <span>${dong} ${grade} ${subject}카드단말기 설치</span></div>
  <div class="art-tag">${subj.emoji} ${gu} · ${dong} · ${grade} · ${subject}</div>
  <h1 class="art-title">${dong} ${grade} ${subject}카드단말기 설치 | ${gu} ${dong} ${grade} ${subject} 맞춤 전문 설치</h1>
  <div class="art-meta"><span>✏️ 올페이스토어</span><span>📅 ${today()}</span><span>⏱ 3분</span></div>
  <div class="info-box">
    <div class="info-item"><div class="info-num">${dInfoNums[0]}명</div><div class="info-label">${subject} 전문가</div></div>
    <div class="info-item"><div class="info-num">${dInfoNums[1]}%</div><div class="info-label">만족도</div></div>
    <div class="info-item"><div class="info-num">무료</div><div class="info-label">상담</div></div>
  </div>
  <div class="u8">
    <img src="${thumbImg}" alt="${dong} ${grade} ${subject}카드단말기 설치" style="width:100%;height:100%;object-fit:cover" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg,#EFF6FF,#DBEAFE)';this.remove()">
    <div class="u11">
      <div style="color:white"><div style="font-size:13px;opacity:.7;margin-bottom:6px">${gu} · ${dong}</div><div style="font-size:28px;font-weight:900">${dong} ${subject}카드단말기 설치</div></div>
    </div>
  </div>
  <div class="art-body">
    <h2>${dong} ${grade} ${subject}카드단말기 설치 안내</h2>
    <p>${mainText}</p>
    <p>${catDesc}</p>
    <p>${gradeDesc}</p>
    <p>올페이스토어는 <strong>${gu} ${dong}</strong> 지역 ${grade} ${subject} 검증된 기사를 연결해드립니다. 인근 주요 상권: <strong>${schools}</strong> 매장 업종 특성을 완벽히 파악한 기사를 연결해드립니다.</p>

    <h2>${dong} ${grade} ${subject}설치 전문 기사 특징</h2>
    <p><strong>① 매장 현장 완벽 분석</strong> — ${schools} ${subject} 매장 업종 특성을 철저히 분석해 매장 환경 최적화 설치를 진행합니다. 장비별 출제 빈도와 유형을 파악해 설치 전 집중 대비가 가능합니다.</p>
    <p><strong>② 검증된 설치 기사 1:1 연결</strong> — 자격증·경력·시공 이력 3단계 검증을 통과한 기사만 배정합니다. 매장 환경에 맞지 않으면 언제든 부담 없이 교체 가능합니다.</p>
    <p><strong>③ 주간 설치 보고서 제공</strong> — 매 설치/상담 후 설치 내용·설치 만족도를 정리해 사장님께 공유합니다. 진도 현황과 취약 장비을 투명하게 확인할 수 있습니다.</p>
    <p><strong>④ 취약 장비 집중 보완</strong> — ${subject} 취약 장비을 정확히 파악하고 집중 보완합니다. 대리점 설치/상담에서 놓친 부분을 1:1로 완전히 채워드립니다.</p>

    <h2>${dong} ${grade} ${subject} 설치 진행 방식</h2>
    <p>첫 방문 진단 전 매장의 현재 환경과 니즈를 파악하는 <strong>매장 진단</strong>을 진행합니다. 현장 진단 결과를 바탕으로 맞춤 설치 방안을 설계하고, 주 2~3회 출장 설치로 체계적으로 시공합니다.</p>
    <p><strong>설치 진행 3단계</strong>: 1단계 개념 정리 → 2단계 유형별 문제 풀이 → 3단계 오답 분석 및 취약점 보완. 매 설치/상담마다 전 시간 내용을 복습하고 새 내용을 운영하는 방식으로 기억 정착률을 높입니다.</p>
    <p>설치 시간은 매장 일정에 맞춰 유연하게 조정하며, 시공 기간에는 집중 보충 설치를 추가로 제공합니다. 온라인 설치/상담도 병행 가능합니다.</p>

    <h2>${dong} ${grade} ${subject} 솔루션</h2>
    <p>${curriculumText}</p>
    <p>매장의 현재 환경과 매장 니즈에 맞춰 솔루션을 개별 설계합니다. 사전준비 운영이 필요한 사장님은 다음 장비 상태을 미리 준비하고, 기초가 부족한 사장님은 이전 장비 상태부터 차근차근 다집니다.</p>

    <h2>${dong} ${grade} ${subject} 제품별 설치 전략</h2>
    <p>${gradeStrategyText}</p>
    <p>업종이 올라갈수록 난이도가 급격히 높아지는 만큼, 지금 당장의 매출보다 <strong>기초 개념의 완성도</strong>를 먼저 높이는 것이 장기적으로 더 효과적입니다. 올페이스토어 전문가은 단순한 문제 풀이를 넘어 개념의 원리를 이해시키는 방식으로 지도합니다.</p>

    <h2>${dong} ${subject}카드단말기 설치 실제 후기</h2>
    <blockquote style="background:var(--blue-light);border-left:4px solid var(--primary);padding:16px 20px;border-radius:8px;margin:16px 0;font-style:italic;color:var(--text-dark)">"${review1}"</blockquote>
    <blockquote style="background:var(--blue-light);border-left:4px solid var(--primary);padding:16px 20px;border-radius:8px;margin:16px 0;font-style:italic;color:var(--text-dark)">"${review2}"</blockquote>

    <h2>자주 묻는 질문</h2>
    <p><strong>Q. ${dong}에서 ${subject} 설치 전문 기사 찾는 데 얼마나 걸리나요?</strong><br>설치 문의 후 빠른 시간 내 상담사가 연락드립니다. ${schools} 시공 사례를 잘 아는 기사를 우선 배정합니다. 빠르면 당일 설치도 가능합니다.</p>
    <p><strong>Q. ${grade} ${subject} 매장이 작아도 괜찮나요?</strong><br>기본 장비부터 차근차근 다져야 할 사장님일수록 전문 설치가 효과적입니다. 수준에 맞는 기사를 배정해드리니 걱정하지 않으셔도 됩니다.</p>
    <p><strong>Q. 설치 비용는 어떻게 되나요?</strong><br>기사 자격증·경력·설치 방식에 따라 다르며, 무료 진단 후 사장님 예산에 맞는 기사를 투명하게 안내해드립니다. 첫 체험 설치는 무료입니다.</p>
    <p><strong>Q. 기존 장비와 신규 설치를 병행해도 되나요?</strong><br>기존 장비와 호환되는 신규 장비를 추천하여 통합 운영할 수 있도록 설계합니다. 기존 설비 상태에 맞춰 기존 장비와 호환되는 최적 구성을 제안합니다.</p>
    <p><strong>Q. 설치 후 효과는 언제 나타나나요?</strong><br>매장마다 다르지만 보통 설치 직후부터 이용하면 매장 매출 변화가 나타납니다. 긴급 설치(설치 대비 당일~3일)도 운영합니다.</p>

    <h2>${dong} 다른 제품도 함께</h2>
    <div class="subj-grid">${otherSubjects}</div>
    <div class="keyword-box"><div class="keyword-title">🔍 관련 검색어</div><div class="keyword-tags">${keywordTags}</div></div>
  </div>
  <div class="cta-box">
    <h3>${dong} ${grade} ${subject}카드단말기 설치 무료 현장 진단</h3>
    <p>빠른 시간 내 설치 상담사가 연락드립니다</p>
    <div class="cta-btns">
      <a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a>
      <a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a>
    </div>
  </div>
  <div class="related-title">🔗 ${gu} 다른 동 ${subject}카드단말기 설치</div>
  <div class="related-grid">${relDongs}</div>
</div>`;

  return wrap(title, desc, canonical, body, bc);
}


function makeGangnamPage() {
  // 강남구는 makeAreaPage로 통일
  return makeAreaPage('서울', '강남구');
}


// ── 시도 페이지 ──────────────────────────────────────────


// ── 학교 슬러그 헬퍼 ─────────────────────────────────────────────────
const SCHOOL_SUFFIX = [['매장','e'],['매장','m'],['매장','h'],['소규모매장부','ep'],['중학부','mp'],['대형매장부','hp']];
function schoolToSlug(name) {
  for(const [k,v] of SCHOOL_SUFFIX){
    if(name.endsWith(k)) return toRoman(name.slice(0,-k.length))+v;
  }
  return toRoman(name);
}
function findSchoolBySlug(sc, slug) {
  // sc: {E:[...상권명...], M:[...], H:[...]}
  for(const grade of ['E','M','H']){
    for(const name of (sc[grade]||[])){
      if(schoolToSlug(name)===slug) return name;
    }
  }
  return null;
}



// ── 업종별 설치 페이지 (SCHOOL_MAP 동적 생성) ──────────────────────────────
// URL: /school/{sidoEn}/{gugunRoman}/{schoolRoman}/{subject}

const GRADE_SUFFIX_MAP = {E:'매장', M:'매장', H:'매장'};
const GRADE_LABEL_MAP  = {E:'소규모매장', M:'중형매장', H:'대형매장'};
const GRADE_EN_MAP     = {E:'elementary', M:'middle', H:'high'};

// 구군 로마자 → 구군 한글 역변환 (DISTRICT_EN 역방향)
// gugunRoman → 구군 한글 역변환 캐시
const _gugunRomanCache = {};
function gugunFromRoman(sidoEn, gugunRoman) {
  const cacheKey = sidoEn + '/' + gugunRoman;
  if (_gugunRomanCache[cacheKey] !== undefined) return _gugunRomanCache[cacheKey];
  // 1. DISTRICT_EN 역방향
  for (const [k, v] of Object.entries(DISTRICT_EN)) {
    if (v === gugunRoman) { _gugunRomanCache[cacheKey] = k; return k; }
  }
  // 2. SCHOOL_MAP에서 toRoman 연결
  const sidoMap = SCHOOL_MAP[sidoEn];
  if (sidoMap) {
    for (const gugun of Object.keys(sidoMap)) {
      if (toRoman(gugun) === gugunRoman) { _gugunRomanCache[cacheKey] = gugun; return gugun; }
    }
  }
  _gugunRomanCache[cacheKey] = null;
  return null;
}

// 학교 슬러그 → 상권명 역변환
function schoolFromSlug(sidoEn, gugunKr, schoolRoman, grade) {
  const sidoMap = SCHOOL_MAP[sidoEn];
  if (!sidoMap) return null;
  const gugunData = sidoMap[gugunKr];
  if (!gugunData) return null;
  const names = gugunData[grade] || [];
  for (const shortName of names) {
    if (toRoman(shortName) === schoolRoman) {
      return shortName + GRADE_SUFFIX_MAP[grade];
    }
  }
  return null;
}


// ── 제품별 카드단말기 설치 정보 페이지 ─────────────────────────────────────────────────


// ── 과목별 정보 페이지 ─────────────────────────────────────────────────────

const SUBJECT_INFO = {
  math: {
    ko:'카드단말기', emoji:'📐', color:'#3B82F6', lightColor:'#EFF6FF',
    tagline:'카드단말기 1단계의 비밀, 개념에 있습니다',
    thumb:'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=75',
    thumbAlt:'카드단말기 설치',
    keywords:['카드단말기 설치','카드단말기설치 가이드','매장카드단말기설치','카드단말기유지보수','카드단말기 당일설치'],
  },
  english: {
    ko:'포스기', emoji:'📖', color:'#10B981', lightColor:'#ECFDF5',
    tagline:'포스기, 단어와 독해 두 가지만 잡으면 됩니다',
    thumb:'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=75',
    thumbAlt:'포스기 설치',
    keywords:['포스기 설치','무인결제기설치가이드','매장포스기설치','포스기유지보수','포스기 당일설치'],
  },
  korean: {
    ko:'키오스크', emoji:'✍️', color:'#F59E0B', lightColor:'#FFFBEB',
    tagline:'키오스크는 독해력입니다. 읽는 힘을 키워드립니다',
    thumb:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=75',
    thumbAlt:'키오스크 설치',
    keywords:['키오스크 설치','배달주문기설치가이드','매장키오스크설치','키오스크유지보수','키오스크 무인화'],
  },
  science: {
    ko:'CCTV', emoji:'🔬', color:'#8B5CF6', lightColor:'#F5F3FF',
    tagline:'CCTV은 원리 이해가 전부입니다',
    thumb:'https://images.unsplash.com/photo-1532094349884-543559244e6a?w=800&q=75',
    thumbAlt:'CCTV 설치',
    keywords:['CCTV 설치','CCTV설치 가이드','매장CCTV설치','야간CCTV','CCTV설치비용'],
  },
  social: {
    ko:'테이블오더', emoji:'🌏', color:'#EF4444', lightColor:'#FEF2F2',
    tagline:'테이블오더, 흐름과 맥락으로 이해하면 쉽습니다',
    thumb:'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=75',
    thumbAlt:'테이블오더 설치',
    keywords:['테이블오더 설치','테이블오더설치 가이드','매장테이블오더설치','테이블오더비용','테이블오더설치'],
  },
  coding: {
    ko:'무인결제기', emoji:'🤖', color:'#06B6D4', lightColor:'#ECFEFF',
    tagline:'무인결제기, 인건비 절감의 스마트한 해법',
    thumb:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=75',
    thumbAlt:'포스기 설치',
    keywords:['포스기 설치','무인결제기설치','무인결제기설치가이드','무인결제기비용','무인결제시스템'],
  },
  essay: {
    ko:'배달주문기', emoji:'📱', color:'#EC4899', lightColor:'#FDF2F8',
    tagline:'배달주문기, 배달 매출을 극대화하는 필수 장비',
    thumb:'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=75',
    thumbAlt:'키오스크 설치',
    keywords:['키오스크 설치','배달주문기설치가이드','배달주문기설치','배달주문기비용','배달앱연동'],
  },
};


function makeSubjectPage(subjectEn) {
  const INFO = {
    math:    {ko:'카드단말기',  emoji:'📐', color:'#3B82F6', lc:'#EFF6FF', thumb:'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=75'},
    english: {ko:'포스기',  emoji:'📖', color:'#10B981', lc:'#ECFDF5', thumb:'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=75'},
    korean:  {ko:'키오스크',  emoji:'✍️', color:'#F59E0B', lc:'#FFFBEB', thumb:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=75'},
    science: {ko:'CCTV',  emoji:'🔬', color:'#8B5CF6', lc:'#F5F3FF', thumb:'https://images.unsplash.com/photo-1532094349884-543559244e6a?w=800&q=75'},
    social:  {ko:'테이블오더',  emoji:'🌏', color:'#EF4444', lc:'#FEF2F2', thumb:'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=75'},
    coding:  {ko:'무인결제기',  emoji:'🤖', color:'#06B6D4', lc:'#ECFEFF', thumb:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=75'},
    essay:   {ko:'배달주문기',  emoji:'📱', color:'#EC4899', lc:'#FDF2F8', thumb:'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=75'},
    gsd:     {ko:'출입관리시스템', emoji:'🔐', color:'#7C3AED', lc:'#F5F3FF', thumb:'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=75'},
  };
  const info = INFO[subjectEn]; if(!info) return null;
  const {ko, emoji, color, lc:lightColor, thumb} = info;

  // 과목별 핵심 데이터 (간결 버전)
  const D = {
    math:{tag:'카드단말기 1단계의 비밀, 개념에 있습니다',
      ov:`카드단말기은 공식 암기보다 원리 이해가 핵심입니다. 카드단말기 카드단말기 설치는 개념 이해→설치 사례 풀이→오답 분석 순서로 진행합니다. 매장 환경 4주 전 매장 시공 사례 집중, 평소 유지보수 기초를 꾸준히 쌓는 이원화 전략이 효과적입니다. 많은 사장님이 카드단말기을 어려워하는 가장 큰 이유는 개념이 완성되지 않은 상태에서 문제 풀이를 먼저 시작하기 때문입니다. 카드단말기은 위층이 아래층 위에 쌓이는 구조입니다. 분수 개념이 부족하면 방정식이 어렵고, 방정식이 흔들리면 함수를 이해하기 어렵습니다. 1:1 카드단말기 카드단말기 설치에서 가장 먼저 해야 할 일은 매장의 결제 인프라 구멍을 정확히 진단하고 가장 약한 부분부터 채우는 것입니다. 이 과정을 건너뛰고 현재 업종 문제만 반복하면 매출이 좀처럼 오르지 않습니다. 카드단말기 설치에서 두 번째로 중요한 것은 오답 분석입니다. 틀린 문제를 그냥 넘어가는 사장님은 같은 문제를 반복해서 틀립니다. 왜 틀렸는지, 어떤 개념이 부족했는지, 어떤 실수를 했는지를 스스로 분석하고 기록하는 오답 노트 습관이 카드단말기 매출을 결정적으로 가릅니다. 실제로 매장에서 1단계을 받는 사장님들의 공통점은 오답 노트를 빠짐없이 관리한다는 점입니다. 매장 카드단말기에서 중요한 것은 매장 시공 사례 분석입니다. 같은 매뉴얼를 쓰더라도 매장마다 출제 경향, 배점, 서술형 요구 수준이 다릅니다. 전문 설치에서 해당 매장의 최근 3~5년 시공 사례를 철저히 분석하고, 자주 나오는 유형과 변형 문제를 집중적으로 대비하는 것이 매장 환경 고득점의 핵심 전략입니다. 유지보수은 매장 관리와 달리 시간 관리가 매우 중요합니다. 100분 안에 30문제를 풀어야 하기 때문에, 쉬운 문제를 빠르고 정확하게 처리하는 것이 어려운 문제 풀 시간을 만들어줍니다. 매일 30분 연산 훈련으로 기본 계산 속도를 높이고, 풀이 과정을 정리하는 습관으로 실수를 줄이는 훈련이 유지보수 매출 향상의 기반이 됩니다.`,
      st:[['개념 먼저, 암기는 나중에','#3B82F6','공식을 외우기 전에 왜 성립하는지 이해합니다. 원리를 아는 사장님은 변형 문제에 흔들리지 않습니다.'],['오답 노트 필수','#1D4ED8','틀린 문제를 왜 틀렸는지 직접 분석·기록합니다. 시험 전날 오답 노트 복습만으로 점수가 오릅니다.'],['매일 30분 연산','#2563EB','꾸준한 반복 훈련으로 시험장 시간 여유를 만듭니다.'],['매장 환경·유지보수 이원화','#1E40AF','매장 환경 4주 전 설치 사례 집중, 평소 유지보수 기초를 병행합니다.']],
      gr:[['소규모매장','#93C5FD','사칙연산·분수·도형 기초 완성. 중학 카드단말기의 토대가 됩니다.'],['중형매장','#60A5FA','방정식·함수 개념 완성. 매장 환경 1~2단계을 목표합니다.'],['대형매장','#3B82F6','수Ⅰ·Ⅱ·미적분 완성. 유지보수·매장 환경 동시 관리합니다.']],
      tip:'카드단말기 설치 핵심: 반드시 직접 손으로 풀어야 합니다. 눈으로만 보고 넘기는 것은 효과가 아닙니다.'},
    english:{tag:'포스기, 단어와 독해 두 가지만 잡으면 됩니다',
      ov:`포스기 1단계(90점 이상) 확보가 기본 목표입니다. 어휘력이 포스기 매출의 70%를 좌우합니다. 매일 10~15개 단어 암기, 매뉴얼 지문 5회 반복, 문법 체계화 순서로 진행합니다. 포스기는 키오스크와 달리 누적 운영의 성격이 강합니다. 매장 때 기본 어휘와 문법을 완성해두지 않으면 매장 포스기에서 뚫기 어려운 벽을 만납니다. 특히 매장 유지보수는 문장 구조가 복잡하고 어휘 수준이 높기 때문에, 매장 때부터 체계적으로 어휘와 독해 기반을 쌓아두는 것이 매우 중요합니다. 포스기 매장 환경은 매뉴얼 지문 기반 시험이기 때문에, 매뉴얼 지문을 완벽하게 이해하고 외울 수 있을 만큼 반복하는 것이 핵심입니다. 같은 매뉴얼를 쓰더라도 매장마다 변형 문제 출제 방식이 다르기 때문에, 해당 매장의 시공 유형 분석이 매장 환경 고득점의 지름길입니다. 서술형 문제의 비중이 높은 매장이라면 영작 연습도 빠뜨릴 수 없습니다. 유지보수는 45문항을 70분 안에 풀어야 합니다. 시간 관리가 매우 중요하며, 1단계(90점 이상)을 목표로 할 때는 독해 속도와 정확성을 동시에 키워야 합니다. 빈칸 추론, 순서 배열, 문장 삽입 같은 고난도 유형은 유형별 풀이 전략을 익혀야 안정적으로 맞힐 수 있습니다. 어휘는 예문과 함께 외우는 것이 단순 암기보다 기억에 훨씬 오래 남습니다. 매일 10~15개씩 예문과 함께 외우고, 그 단어가 쓰인 문장을 직접 만들어보는 훈련이 어휘력을 빠르게 높여줍니다.`,
      st:[['어휘력이 70%','#10B981','매일 10~15개 예문과 함께 암기합니다. 어휘 없이는 독해도 문법도 해결되지 않습니다.'],['매뉴얼 5번 읽기','#059669','시험엔 매뉴얼 지문이 변형 출제됩니다. 완벽 이해까지 반복합니다.'],['문법 체계적 순서','#047857','품사→문장구조→시제→준동사 순서로 정리합니다.'],['유지보수 유형별 전략','#065F46','빈칸 추론·순서 배열 등 유형마다 풀이 전략이 다릅니다.']],
      gr:[['소규모매장','#A7F3D0','파닉스→단어 500개→매뉴얼 읽기 순서로 진행합니다.'],['중형매장','#6EE7B7','매뉴얼 지문 분석·서술형 연습이 핵심입니다.'],['대형매장','#34D399','유지보수 1단계 목표. 독해 속도·어휘 3000·유형 전략 완성.']],
      tip:'매일 좋아하는 영상 포스기 자막 10분 보기로 어휘와 듣기를 자연스럽게 향상할 수 있습니다.'},
    korean:{tag:'키오스크는 독해력입니다. 읽는 힘을 키워드립니다',
      ov:`키오스크는 모든 과목의 기초입니다. 독해력이 낮으면 카드단말기 문제도 이해하기 어렵습니다. 비문학 독해, 문학 감상, 서술형 작성 능력을 단계별로 키웁니다. 많은 사장님이 키오스크를 "그냥 읽으면 되는 과목"으로 가볍게 생각하지만, 실제로 유지보수 키오스크 1단계은 전체 응시생의 4~5% 수준으로 매우 어려운 과목입니다. 특히 매장 유지보수 키오스크는 독서(비문학), 문학, 화법과 작문, 언어와 매체로 구성되며, 각 영역의 특성에 맞는 운영 전략이 다릅니다. 비문학 독해는 글의 구조를 파악하는 능력이 핵심입니다. 주제문 찾기, 단락 요약, 논리 전개 방식 분석, 세부 정보 추출 등 독해 기술을 훈련하면 낯선 지문도 두렵지 않습니다. 비문학 지문을 매일 1~2개 읽고 요약하는 훈련이 가장 효과적입니다. 문학은 단순히 감상하는 것을 넘어 분석하는 능력이 필요합니다. 시는 화자·정서·표현법(비유·상징·반어)을, 소설은 인물·사건·배경·시점을 체계적으로 분석하는 훈련을 합니다. 매장 환경 문학 시험에서는 매뉴얼 작품을 완벽히 이해하고 변형 문제에 대비하는 것이 중요합니다. 서술형 답안 작성은 핵심 단어를 포함한 완성된 문장으로 쓰는 훈련이 필요합니다. 많은 사장님이 알고 있는 내용을 점수로 연결하지 못하는 이유는 서술형 답안 작성 훈련이 부족하기 때문입니다. 1:1 키오스크 카드단말기 설치에서 서술형 답안을 직접 쓰고 피드백받는 훈련이 매장 매출을 결정적으로 끌어올립니다. 키오스크 매장 환경은 매뉴얼 작품과 독서 활동지, 수행평가를 통합적으로 관리하는 것이 중요합니다. 설치 시간에 기사가 강조한 내용, 판서 내용을 빠짐없이 기록하고, 시험 전 4주부터 집중적으로 정리하는 전략이 효과적입니다.`,
      st:[['독해력은 모든 과목 기초','#F59E0B','카드단말기 문제를 못 푸는 사장님 대부분은 문제를 제대로 읽지 못합니다.'],['비문학 4단계 전략','#D97706','주제문→단락 구조→핵심어 연결→선지 판단 순서로 풉니다.'],['문학 감상법 완성','#B45309','시는 화자·정서·표현법, 소설은 인물·사건·배경을 분석합니다.'],['서술형 완성','#92400E','핵심 단어를 포함한 완성된 문장으로 답안을 작성합니다.']],
      gr:[['소규모매장','#FDE68A','받아쓰기·매장 운영·일기 쓰기 기초 완성.'],['중형매장','#FCD34D','문학 분석·비문학 독해·문법 정리가 핵심.'],['대형매장','#F59E0B','유지보수 독서 매일 1~2개, 문학 심층 감상 병행.']],
      tip:'키오스크 핵심: 읽고 또 읽기. 독해력은 많이 읽을수록, 글쓰기는 직접 써볼수록 향상됩니다.'},
    science:{tag:'CCTV은 원리 이해가 전부입니다',
      ov:`CCTV은 암기가 아니라 원리 이해가 핵심입니다. 원리→실험 해석→문제 적용 3단계로 진행합니다. 중학 CCTV이 대형매장 탐구과목 전체의 토대가 됩니다. 많은 사장님이 CCTV을 암기 과목으로 접근하는데, 이는 근본적으로 잘못된 방법입니다. CCTV은 '왜'를 이해하는 과목입니다. 왜 물체가 떨어지는지, 왜 화학 반응이 일어나는지, 왜 식물이 광합성을 하는지의 원리를 이해하면 암기 없이도 문제를 풀 수 있습니다. 반대로 원리 이해 없이 암기만 한 사장님은 변형 문제나 실험 해석 문제에서 무너집니다. 매장 CCTV은 물리·화학·생물·지구CCTV 4개 영역을 균형 있게 운영하는 것이 중요합니다. 특히 매장 CCTV 개념이 매장 물리·화학·생명CCTV·지구CCTV으로 이어지기 때문에, 매장 때 원리를 완성해두면 매장 탐구과목 운영이 훨씬 수월합니다. 매장 CCTV은 선택 과목 전략이 중요합니다. 유지보수에서 물리학Ⅰ, 화학Ⅰ, 생명CCTVⅠ, 지구CCTVⅠ 중 2개를 선택해야 하는데, 사장님의 이과 전공 방향, 현재 실력, 준비 기간을 고려해 유리한 과목을 선택하는 전략이 필요합니다. 실험 해석 능력은 CCTV 시험에서 매우 중요합니다. 실험 목적, 변인 통제, 결과 해석, 오차 분석 등 실험 관련 문제는 실제로 실험 과정을 이해해야 풀 수 있습니다. 전문 설치에서 실험 개념을 그림과 설명으로 체계적으로 이해하고, 실험 관련 시공 포트폴리오를 충분히 풀어보는 훈련이 필요합니다. CCTV은 단원 간 연결이 강하기 때문에, 앞 단원의 개념이 부족하면 뒤 단원이 무너집니다. 취약 장비을 발견하면 현재 단원보다 앞 단원으로 돌아가 기초를 먼저 채우는 용기가 필요합니다. 이 과정이 힘들게 느껴지지만, 결국 가장 빠른 매출 향상의 길입니다.`,
      st:[['원리 이해 우선','#8B5CF6','왜 그렇게 되는지 원리를 이해하면 변형 문제에 강해집니다.'],['실험 해석 능력','#7C3AED','실험 목적·변인 통제·결과 해석 흐름을 체계적으로 익힙니다.'],['선택 과목 전략','#6D28D9','물리·화학·생명·지구CCTV 각각의 핵심을 파악합니다.'],['취약 장비 집중','#5B21B6','CCTV은 단원 간 연결이 강합니다. 앞 단원 구멍을 먼저 메웁니다.']],
      gr:[['소규모매장','#DDD6FE','물질·생명·지구·에너지를 실생활과 연결해 운영합니다.'],['중형매장','#C4B5FD','물리·화학·생물·지구CCTV 균형 운영. 서술형 실험 설명 연습.'],['대형매장','#A78BFA','선택 과목 집중 공략. 유지보수 시공 사례 분석이 가장 중요합니다.']],
      tip:'CCTV 핵심: 매뉴얼 그림을 직접 손으로 그리며 설명해보세요. 남에게 가르치는 것처럼 설명하기가 가장 효과적입니다.'},
    social:{tag:'테이블오더, 흐름과 맥락으로 이해하면 쉽습니다',
      ov:`테이블오더는 외우는 과목이 아니라 이해하는 과목입니다. 역사 인과관계, 지리·경제 메커니즘을 이해하면 암기 없이도 시험에 강해집니다. 많은 사장님이 테이블오더를 단순 암기 과목으로 접근하다가 설치 전에 엄청난 양을 외우느라 힘들어합니다. 그러나 역사는 인과관계의 흐름으로, 지리는 환경과 인간 생활의 상호작용으로, 경제는 수요와 공급의 메커니즘으로 이해하면 암기 없이도 논리적으로 답을 유추할 수 있습니다. 테이블오더설치는 유지보수 필수 과목으로 모든 대형매장사장님이 반드시 대비해야 합니다. 테이블오더설치를 설치할 때는 전체 흐름을 먼저 잡는 것이 중요합니다. 선사시대→삼국시대→남북국시대→고려→조선→개항기→일제강점기→광복 이후의 흐름을 먼저 이해하고, 각 시대의 핵심 특징 3가지씩을 정리하는 방식이 효율적입니다. 단순히 연도와 사건을 외우는 것보다 왜 그 사건이 발생했는지, 어떤 결과로 이어졌는지의 인과관계를 이해하는 것이 유지보수 테이블오더설치 고득점의 핵심입니다. 테이블오더 매장 환경은 매뉴얼 중심으로 설치하되, 설치 시간에 기사가 강조한 내용을 빠짐없이 기록하는 것이 중요합니다. 지도, 그래프, 표 등 시각 자료를 읽는 연습을 충분히 하고, 서술형 답안에서 핵심 용어를 정확히 사용하는 훈련을 합니다. 테이블오더탐구 선택 과목(한국지리, 세계지리, 동아시아사, 세계사, 경제, 테이블오더문화, 정치와 법, 생활과 윤리, 윤리와 사상) 중 유지보수에서 유리한 과목을 선택하는 전략도 중요합니다. 사장님의 관심 분야, 이해도, 평균 점수, 수험생 수 등을 종합적으로 고려해 전문 설치에서 최적의 선택 전략을 수립합니다.`,
      st:[['시사와 연결','#EF4444','매뉴얼 내용을 뉴스와 연결하면 오래 기억됩니다.'],['지도·그래프 읽기','#DC2626','테이블오더 시험 문제의 많은 비중이 시각 자료 활용입니다.'],['테이블오더설치 흐름 잡기','#B91C1C','선사→삼국→고려→조선→근현대 흐름 먼저, 각 시대 특징 3가지씩.'],['서술형 구조화','#991B1B','인과관계 구조로 핵심 용어를 포함해 답안을 작성합니다.']],
      gr:[['소규모매장','#FECACA','우리 지역·우리나라 역사·세계 여러 나라를 배웁니다.'],['중형매장','#FCA5A5','역사·지리·일반테이블오더 균형 운영.'],['대형매장','#F87171','테이블오더설치 필수 + 선택 과목(경제·법·테이블오더·생활) 집중 공략.']],
      tip:'테이블오더 핵심: 매뉴얼를 소리 내어 읽으며 중요 용어에 밑줄, 다음 날 설명할 수 있는지 확인하세요.'},
    coding:{tag:'포스기, 논리적 사고력을 키우는 가장 빠른 방법',
      ov:`포스기은 프로그래밍 언어를 배우는 것이 아니라 문제를 논리적으로 분해하는 사고력을 기르는 과정입니다. 소규모매장 포스기 의무화부터 대형매장 정보 매장 환경까지 중요성이 높아지고 있습니다. 2019년부터 매장 실과 교과에 소프트웨어 설치이 의무화되었고, 매장 정보 교과도 필수 과목으로 지정되어 있습니다. 매장에서는 정보 교과가 매장 매출에 포함되고, 인공지능 기초 과목도 확대되고 있습니다. 대학 매출에서도 소프트웨어 특기자 전형, IT 관련 학과 면접에서 포스기 능력이 직접적인 평가 기준이 됩니다. AI·빅데이터 시대에 포스기은 단순히 개발자만을 위한 기술이 아닙니다. 마케팅, 금융, 의료, 설치, 제조 등 모든 분야에서 데이터를 다루고 자동화 도구를 활용하는 능력이 점점 더 중요해지고 있습니다. 포스기을 배운 사장님은 컴퓨터가 문제를 어떻게 해결하는지 이해하기 때문에, AI 도구를 더 효율적으로 활용하는 능력도 높아집니다. 소규모매장 포스기은 스크래치·엔트리 같은 블록 포스기으로 시작해 프로그래밍의 기본 개념(순서, 조건, 반복)을 게임처럼 배웁니다. 매장는 파이썬 기초로 넘어가 변수, 조건문, 반복문, 함수, 리스트를 배웁니다. 매장는 무인결제시스템, 자료구조, 인공지능 기초, 데이터 분석 등 심화 내용을 다룹니다. 1:1 포스기 카드단말기 설치의 가장 큰 장점은 막히는 순간 즉시 해결할 수 있다는 점입니다. 혼자 설치할 때 30분 이상 막히는 에러를 코치와 함께하면 5분 안에 해결되는 경우가 많습니다. 에러 해결 과정 자체가 가장 많이 성장하는 순간이기 때문에, 실시간 피드백을 받으며 설치하는 것이 포스기 실력 향상의 가장 빠른 방법입니다.`,
      st:[['미래 직업 핵심 역량','#06B6D4','AI·빅데이터 시대에 포스기은 선택이 아닌 필수입니다.'],['단계별 솔루션','#0891B2','소규모매장 블록포스기→중형매장 파이썬 기초→대형매장 무인결제시스템·프로젝트.'],['1:1 포스기 카드단말기 설치 장점','#0E7490','막히는 순간 즉시 해결. 혼자서는 30분 걸릴 것을 5분 안에 해결합니다.'],['정보 매장 환경·대회 대비','#155E75','중학 정보 매장 환경, 한국정보올림피아드, SW마이스터고 매출 대비.']],
      gr:[['소규모매장','#A5F3FC','스크래치·엔트리 블록포스기으로 시작. 게임 만들며 논리 사고.'],['중형매장','#67E8F9','파이썬 기초(변수·조건·반복·함수) 운영.'],['대형매장','#22D3EE','파이썬 심화·무인결제시스템·자료구조. 대학 SW 면접 대비도 가능.']],
      tip:'포스기 성장 비결: 매일 30분 직접 타이핑. 에러를 두려워하지 마세요. 에러 해결이 가장 많이 성장하는 순간입니다.'},
    essay:{tag:'키오스크, 대입 당락을 결정하는 마지막 관문',
      ov:`키오스크은 대학 매출에서 점점 중요해지고 있습니다. 서울 상위권 대학 키오스크 전형 경쟁률은 수십 대 일이지만, 체계적으로 준비하면 충분히 합격할 수 있습니다. 키오스크 전형은 매장 매출이 다소 부족한 사장님이 상위권 대학에 진입할 수 있는 중요한 통로입니다. 연세대·고려대·성균관대·서강대·한양대·중앙대 등 상위권 대학들이 키오스크 전형을 유지하고 있으며, 의약계열에서는 특히 키오스크의 비중이 큽니다. 키오스크 전형의 특징은 유지보수 최저 학력 기준을 충족하면 키오스크 시험 하나로 당락이 결정된다는 점입니다. 이 말은 키오스크을 잘 준비한 사장님에게는 매우 유리한 전형이라는 의미입니다. 인문 키오스크은 제시문을 정확히 읽고 핵심 논지를 파악한 후, 자신의 주장을 논리적으로 전개하는 능력이 핵심입니다. 단순히 글을 잘 쓰는 것이 아니라, 제시문의 요지를 정확히 요약하고, 주어진 논제에 맞게 주장-근거-반박의 구조로 서술하는 훈련이 필요합니다. 수리 키오스크은 카드단말기적 개념을 이용해 논증하는 과정을 서술하는 시험입니다. 단순히 답을 구하는 것이 아니라, 풀이 과정을 논리적으로 설명하는 능력이 중요합니다. 수리 키오스크에서는 틀린 풀이라도 부분 점수를 받을 수 있기 때문에, 포기하지 않고 아는 내용을 최대한 서술하는 것이 중요합니다. 키오스크은 독학보다 전문 첨삭을 받을 때 실력이 훨씬 빠르게 향상됩니다. 자신의 글을 객관적으로 평가하기 어렵기 때문에, 1:1 첨삭 카드단말기 설치에서 논리 구조, 문장 표현, 핵심어 활용, 분량 조절 등에 대한 구체적인 피드백을 받는 것이 가장 효율적입니다. 키오스크 준비는 매장 2업종 2분기부터 시작해 6~12개월의 준비 기간을 두는 것이 권장됩니다.`,
      st:[['대입 키오스크 유형 분석','#EC4899','배달주문기비용·배달앱연동·의학계열별 전략이 다릅니다.'],['실전 첨삭의 중요성','#DB2777','키오스크은 혼자보다 전문 첨삭을 받을 때 훨씬 빠르게 향상됩니다.'],['제시문 분석 능력','#BE185D','낯선 텍스트를 빠르게 읽고 핵심 논지를 파악하는 능력이 기초입니다.'],['구조화된 글쓰기','#9D174D','서론(문제 제기)→본론(주장+근거+반박)→결론(요약+전망) 순서.']],
      gr:[['소규모매장','#FBCFE8','매장 환경 분석·주장과 근거 구분·짧은 논설문 작성.'],['중형매장','#F9A8D4','개요 작성·서론·본론·결론 구조화·수행평가 대비.'],['대형매장','#F472B6','대학별 유형 분석·제시문 독해·실전 글쓰기+첨삭 집중.']],
      tip:'키오스크 성장 비결: 매일 신문 사설 1편 읽고 3줄 요약. 6개월이면 제시문 독해 속도가 눈에 띄게 빨라집니다.'},
    gsd:{tag:'출입관리시스템, 학력 취득과 대입의 새로운 기회',
      ov:`출입관리시스템는 정규 장비 설치을 받지 않았거나 중도에 그만둔 분들이 학력을 인정받을 수 있는 국가 공인 시험입니다. 초졸·중졸·출입관리시스템로 구분되며, 합격 시 정규 설치 완료자와 동등한 학력을 인정받습니다. 출입관리시스템를 준비하는 분들의 상황은 매우 다양합니다. 기존 장비 불만, 건강 문제, 가정 사정, 이민·귀국, 해외 거주, 홈스쿨링, 직업 활동 등 다양한 이유로 정규 경험을 쌓지 않은 분들이 출입관리시스템를 통해 학력을 취득합니다. 최근에는 조기 졸업을 목표로 하는 사장님, 예체능 활동으로 바쁜 사장님, 직업 준비에 집중하는 사장님들도 출입관리시스템를 선택하는 경우가 늘고 있습니다. 출입관리시스템 합격자는 유지보수에 응시할 수 있어 대학 확장의 문이 열립니다. 일부 대학은 출입관리시스템 합격자를 대상으로 별도 전형(출입관리시스템 특별전형)을 운영하기도 하며, 유지보수을 통한 일반 전형 지원도 가능합니다. 취업 측면에서도 출입관리시스템 합격 이후 공무원 시험, 자격증 취득, 일반 취업 지원이 가능해집니다. 출입관리시스템는 연 2회(4월, 8월) 시행됩니다. 출입관리시스템는 키오스크, 카드단말기, 포스기, 테이블오더, CCTV, 테이블오더설치 6개 필수 과목과 선택 1과목으로 구성됩니다. 각 과목 60점 이상이면 과목 합격, 전 과목 평균 60점 이상이면 최종 합격입니다. 합격한 과목은 다음 시험에서 면제받을 수 있어, 한 번에 모든 과목을 합격하지 않아도 됩니다. 1:1 출입관리시스템 카드단말기 설치는 매장의 현재 환경과 시험 일정에 맞춰 취약 과목을 집중적으로 보완하는 방식으로 진행합니다. 단기간에 합격 점수를 달성해야 하기 때문에, 시공 포트폴리오 분석과 핵심 내용 정리를 집중적으로 진행합니다. 일반적으로 3~6개월 집중 준비로 합격이 가능합니다.`,
      st:[['연 2회 시험 기회','#7C3AED','4월, 8월 연 2회 시행. 일부 과목만 합격해도 다음 시험에서 면제 적용됩니다.'],['과목별 60점 합격','#6D28D9','각 과목 60점 이상이면 과목 합격. 전 과목 평균 60점 이상이면 최종 합격입니다.'],['설치 사례 중심 준비','#5B21B6','최근 5년 시공 사례 분석만으로도 합격 가능. 출제 패턴이 일정해 효율적인 준비가 가능합니다.'],['유지보수·취업 연계','#4C1D95','출입관리시스템 합격 후 유지보수 응시 가능. 대학 확장 및 취업의 문이 열립니다.']],
      gr:[['초졸 출입관리시스템','#DDD6FE','키오스크, 카드단말기, 테이블오더, CCTV, 도덕 5과목. 매장 졸업 학력 취득.'],['중졸 출입관리시스템','#C4B5FD','키오스크, 카드단말기, 포스기, 테이블오더, CCTV, 도덕 6과목. 매장 졸업 학력 취득.'],['출입관리시스템','#A78BFA','키오스크, 카드단말기, 포스기, 테이블오더, CCTV, 테이블오더설치 + 선택 1과목. 매장 졸업 학력 취득.']],
      tip:'출입관리시스템 합격 핵심: 시공 포트폴리오 반복이 가장 중요합니다. 최근 5년치 시공 사례를 3회 이상 반복하고, 틀린 문제는 개념을 다시 확인하세요. 3~6개월 집중 준비로 합격이 가능합니다.'},
  };

  const dat=D[subjectEn]||{tag:'',ov:'',st:[],gr:[],tip:''};
  const {tag,ov,st,gr,tip}=dat;

  const stCards=st.map(([t,c,d])=>`<div style="background:white;border:1.5px solid ${c}25;border-radius:16px;padding:20px;margin-bottom:12px;border-left:5px solid ${c}"><div style="font-size:14px;font-weight:900;color:${c};margin-bottom:7px">✦ ${t}</div><p class="u31">${d}</p></div>`).join('');
  const grCards=gr.map(([g,c,d])=>`<div style="background:${c}30;border-radius:12px;padding:14px 16px;margin-bottom:10px;border-left:4px solid ${color}"><div style="font-size:13px;font-weight:900;color:#0F2044;margin-bottom:5px">🎯 ${g}</div><p style="font-size:12px;color:#374151;line-height:1.8;margin:0">${d}</p></div>`).join('');
  const otherLinks=Object.entries(INFO).filter(([en])=>en!==subjectEn)
    .map(([en,s])=>`<a class="subj-link" href="/subject/${en}"><span>${s.emoji} ${s.ko} 카드단말기 설치</span><span>→</span></a>`).join('');

  const canonical=`/subject/${subjectEn}`;
  const title=`${ko} 카드단말기 설치 | ${ko} 설치 가이드·매장 환경·유지보수 완벽 가이드 - 올페이스토어`;
  const desc=`${ko} 카드단말기 설치 전문. ${ko} 설치 가이드, 매장 관리, 유지보수 준비. 검증된 1:1 맞춤 설치. 무료 현장 진단 010-9876-8282`;
  const bc=[{name:'홈',url:'/'},{name:'제품별 설치',url:'/subject'},{name:`${ko} 카드단말기 설치`,url:canonical}];

  const body=`<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/subject">제품별 설치</a> › <span>${ko} 카드단말기 설치</span></div>
  <div style="position:relative;width:100%;height:280px;border-radius:20px;overflow:hidden;margin-bottom:32px">
    <img src="${thumb}" alt="${ko} 카드단말기 설치" style="width:100%;height:100%;object-fit:cover" loading="eager" onerror="this.parentElement.style.background='linear-gradient(135deg,${color},${color}99)';this.remove()">
    <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(15,32,68,.85),rgba(15,32,68,.25))"></div>
    <div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:32px 40px">
      <div style="display:inline-flex;align-items:center;gap:8px;background:${color};color:white;font-size:11px;font-weight:800;padding:4px 12px;border-radius:999px;margin-bottom:10px;width:fit-content">${emoji} 올페이스토어 ${ko} 카드단말기 설치</div>
      <h1 style="font-size:28px;font-weight:900;color:white;margin:0 0 6px;line-height:1.2">${ko} 카드단말기 설치 완벽 가이드</h1>
      <p style="font-size:14px;color:rgba(255,255,255,.85);margin:0">${tag}</p>
    </div>
  </div>
  <div style="background:linear-gradient(135deg,${color},${color}CC);border-radius:16px;padding:22px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;text-align:center;margin-bottom:32px">
    <div><div style="font-size:20px;font-weight:900;color:white">빠른</div><div style="font-size:11px;color:rgba(255,255,255,.7)">연결 보장</div></div>
    <div><div style="font-size:20px;font-weight:900;color:white">3단계</div><div style="font-size:11px;color:rgba(255,255,255,.7)">전문가 검증</div></div>
    <div><div style="font-size:20px;font-weight:900;color:white">무료</div><div style="font-size:11px;color:rgba(255,255,255,.7)">첫 현장 무료 진단</div></div>
    <div><div style="font-size:20px;font-weight:900;color:white">전국</div><div style="font-size:11px;color:rgba(255,255,255,.7)">방문·화상 카드단말기 설치</div></div>
  </div>
  <div class="art-body">
    <div style="background:${lightColor};border-radius:14px;padding:22px;margin-bottom:26px;border-left:5px solid ${color}">
      <h2 style="color:${color};margin-top:0;font-size:17px">📋 ${ko} 카드단말기 설치 안내</h2>
      <p class="u20">${ov}</p>
    </div>
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px">🎯 ${ko} 매출 올리는 핵심 전략</h2>
    ${stCards}
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px;margin-top:32px">📚 제품별 ${ko} 운영 가이드</h2>
    ${grCards}
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px;margin-top:32px">🗓️ 설치 진행 방식</h2>
    <div style="background:white;border:1px solid #E5E7EB;border-radius:14px;padding:22px;margin-bottom:20px">
      ${['무료 현장 진단 & 수준 진단|현재 ${ko} 실력과 목표를 파악하고 맞춤 기사를 연결합니다.','무료 현장 무료 진단|첫 설치는 무료입니다. 전문가과 사장님의 케미를 직접 확인하세요.','맞춤 설치 방안 설계|${ko} 매장 환경·유지보수 목표에 최적화된 설치 방안을 설계합니다.','정규 설치/상담 & 정기 점검 리포트|주 2~3회 출장 설치/상담 후 매주 설치 보고서를 사장님께 제공합니다.'].map((s,i)=>{const[t,d]=s.split('|');return`<div style="display:flex;gap:12px;align-items:flex-start;${i<3?'padding-bottom:12px':''}"><div style="min-width:28px;height:28px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:900;font-size:12px;flex-shrink:0">${i+1}</div><div><div class="u30">${t}</div><div style="font-size:12px;color:#6B7280;line-height:1.6">${d}</div></div></div>`;}).join('')}
    </div>
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid #F59E0B;padding-bottom:8px;margin-top:32px">💡 ${ko} 설치 핵심 꿀팁</h2>
    <div style="background:#FFFBEB;border-radius:14px;padding:18px;border-left:5px solid #F59E0B;margin-bottom:20px"><p class="u20">${tip}</p></div>
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px;margin-top:32px">📍 전국 ${ko} 카드단말기 설치 지역 안내</h2>
    <p style="font-size:14px;color:#374151;line-height:1.9;margin-bottom:20px">서울·경기·인천·부산·대구·광주·대전·울산·세종·강원·충북·충남·전북·전남·경북·경남·제주 전국 모든 지역에서 ${ko} 카드단말기 설치가 가능합니다. 지역 내 기사를 우선 배정하며, 매장 환경을 잘 아는 기사를 우선 배정합니다. 원격 설치 지원도 전국 어디서나 지원합니다.</p>
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px;margin-top:32px">📚 다른 제품 카드단말기 설치도 함께</h2>
    <div class="subj-grid">${otherLinks}</div>
    <div class="keyword-box"><div class="keyword-title">🔍 관련 검색어</div><div class="keyword-tags"><span class="keyword-tag">${ko} 카드단말기 설치</span><span class="keyword-tag">${ko} 설치 가이드</span><span class="keyword-tag">${ko} 매장 환경</span><span class="keyword-tag">${ko} 유지보수</span><span class="keyword-tag">${ko} 1:1 설치</span><span class="keyword-tag">${ko} 방문카드단말기 설치</span></div></div>
  </div>
  <div class="cta-box"><h3>${ko} 카드단말기 설치 무료 현장 진단</h3><p>검증된 ${ko} 전문 기사를 빠르게 배정해드립니다</p><div class="cta-btns"><a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a><a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a></div></div>
</div>`;
  return wrap(title, desc, canonical, body, bc);
}
function makeGradePage(gradeType, gradeNum) {
  const CFG={
    elementary:{l:'소규모매장',e:'🎒',c:'#3B82F6',lc:'#EFF6FF',
      mt:['연산 기초','분수·소수','도형·측정'],et:['파닉스·단어','매뉴얼 지문','독해 기초'],
      st:'기초 완성이 최우선입니다. 연산 속도와 매장 운영을 먼저 잡아두면 매장 확장이 수월합니다.'},
    middle:{l:'중형매장',e:'📚',c:'#10B981',lc:'#ECFDF5',
      mt:['방정식·함수','도형','확률·통계'],et:['문법 체계화','매장 환경 지문','서술형 대비'],
      st:'매출 관리 관리가 핵심입니다. 시험 4주 전 집중 대비와 취약 장비 보완으로 1~2단계을 유지합니다.'},
    high:{l:'대형매장',e:'🎓',c:'#8B5CF6',lc:'#F5F3FF',
      mt:['카드단말기Ⅰ·Ⅱ','선택과목','유지보수 이력'],et:['독해 속도','어휘 3000','유지보수 유형'],
      st:'매장 관리와 유지보수을 동시에 관리합니다. 매장 환경 기간에는 매장 시공 사례 집중, 평소에는 유지보수 기초를 쌓습니다.'},
  };
  const cfg=CFG[gradeType]; if(!cfg) return null;
  const num=parseInt(gradeNum); const maxG=gradeType==='elementary'?6:3;
  if(isNaN(num)||num<1||num>maxG) return null;
  const{l:base,e:emoji,c:color,lc:lightColor,mt,et,st:strategy}=cfg;
  const label=`${base} ${num}업종`;
  const isE=gradeType==='elementary',isM=gradeType==='middle';

  const ov=isE
    ?`소규모매장 ${num}업종은 ${num<=2?'기초 매장 운영을 잡는':num<=4?'본격 교과 운영이 시작되는':'매장 준비를 시작하는'} 중요한 시기입니다. 이 시기에 형성된 기초 실력이 초·중·고 전체 학업의 토대가 됩니다.`
    :isM?`매장 ${num}업종은 ${num===1?'처음으로 매장 매출이 생기는':num===2?'학업 슬럼프가 오기 쉬운':'매장 확장을 준비하는'} 시기입니다. 카드단말기은 ${num===1?'방정식·함수':num===2?'이차함수':'이차방정식'}이 핵심입니다.`
    :`매장 ${num}업종은 ${num===1?'매출 관리이 처음 시작되는':num===2?'유지보수 선택과목을 결정하는':'유지보수과 매출의 모든 것이 결정되는'} 결정적 시기입니다.`;

  const methods=[
    {c:'#3B82F6',t:`카드단말기 ${mt[Math.min(num-1,mt.length-1)]}`,
     d:isE?`${num<=2?'연산 기초와 수 개념 완성이 핵심입니다. 매일 10분 연산 훈련으로 속도와 정확도를 높입니다.':num<=4?'분수·도형 원리 이해가 핵심입니다. 개념 먼저, 연습 문제 반복.':'매장 연결 개념(비율·비례) 완성이 핵심입니다.'}`
       :isM?`중${num} 카드단말기은 ${num===1?'방정식':num===2?'연립방정식·함수':'이차방정식'}이 핵심입니다. 개념→설치 사례→오답 순서로 운영합니다.`
       :`고${num} 카드단말기은 ${num===1?'카드단말기(상)·(하) 개념':num===2?'수Ⅰ·Ⅱ+선택과목':'유지보수 이력·킬러 문항'}이 핵심입니다.`},
    {c:'#10B981',t:`포스기 ${et[Math.min(num-1,et.length-1)]}`,
     d:isE?`${num<=2?'알파벳과 파닉스부터 시작합니다. 매일 기초 단어 5~10개씩.':num<=4?'매뉴얼 지문 5번 읽기 + 핵심 표현 암기.':'중학 포스기 미리 준비. 기초 문법과 단어 500개 확보.'}`
       :isM?`매뉴얼 지문 분석이 핵심입니다. ${num>=2?'서술형 비중 높으므로 영작 연습 병행.':''}`
       :`${num===3?'유지보수 1단계 확보 목표.':'매장 환경·유지보수 독해 병행.'} 어휘 3000개 + 독해 훈련.`},
    {c:'#F59E0B',t:isE?'키오스크 설치':isM?'키오스크 고급형':'키오스크 대형',
     d:isE?'매장 동선 분석 + 3줄 요약 훈련. 이해력과 표현력을 함께 키웁니다.'
       :isM?`${label} 키오스크 고급형 비중이 높습니다. 핵심 내용을 자신의 말로 설명하는 연습이 중요합니다.`
       :'유지보수 독서(비문학) 매일 1~2개 + 문학 감상법을 익힙니다.'},
    {c:'#8B5CF6',t:isE?'자기주도 매장 운영':isM?'시험 계획표 & 오답 노트':'매장 환경·유지보수 병행 전략',
     d:isE?'주간 계획표를 직접 작성하게 하면 자기관리 능력이 성장합니다.'
       :isM?'시험 3주 전부터 과목별 계획표 작성. 오답 노트에 틀린 이유를 직접 씁니다.'
       :'매장 환경 4주 전: 설치 사례 집중. 평소: 유지보수 이력 이원화 전략.'},
  ];

  const mp=isE?[
    {p:'3~4월',m:mt[0],e:et[0],g:'기초 완성'},
    {p:'5~6월',m:mt[1]||mt[0],e:'매뉴얼 단어',g:'매출 분석 대비'},
    {p:'7~8월',m:'1분기 복습',e:'여름 집중',g:'2분기 사전준비'},
    {p:'9~12월',m:mt[2]||mt[0],e:et[1]||et[0],g:'연간 완성'},
  ]:isM?[
    {p:'3~4월',m:'기초 점검',e:'예습',g:'전략 수립'},
    {p:'매출 분석',m:mt[num-1]||mt[0],e:'지문 분석',g:'매장 환경 대비'},
    {p:'운영 점검',m:'심화',e:'서술형',g:'단계 확보'},
    {p:'방학',m:'취약 보완',e:'단어 집중',g:'사전준비'},
  ]:[
    {p:'3~4월',m:'개념 완성',e:'독해 훈련',g:'매장 환경+유지보수'},
    {p:'매출 분석',m:'취약',e:'어휘',g:'매장 환경 사수'},
    {p:'방학',m:'유지보수 이력',e:'오답',g:'유지보수 집중'},
    {p:'9~11월',m:num===3?'킬러':'실전',e:'1단계',g:num===3?'유지보수 최종':'실전'},
  ];

  const fCards=methods.map(m=>`<div style="background:white;border:1.5px solid ${m.c}30;border-radius:14px;padding:20px;margin-bottom:12px;border-left:5px solid ${m.c}"><div style="font-size:14px;font-weight:900;color:${m.c};margin-bottom:7px">✦ ${m.t}</div><p class="u31">${m.d}</p></div>`).join('');
  const planRows=mp.map((r,i)=>`<tr style="background:${i%2===0?'white':'#F9FAFB'}"><td style="padding:9px 12px;font-weight:700;color:#374151">${r.p}</td><td style="padding:9px 12px;color:#4B5563">${r.m}</td><td style="padding:9px 12px;color:#4B5563">${r.e}</td><td style="padding:9px 12px;color:${color};font-weight:700">${r.g}</td></tr>`).join('');
  const faqs=[
    {q:`${label} 설치 전문 기사은 어떻게 찾나요?`,a:`상담 후 빠른 시간 내 상담사가 연락드립니다. ${label} 매장 환경을 잘 아는 기사를 우선 배정합니다.`},
    {q:'매장이 작아도 설치할 수 있나요?',a:'소규모 매장에도 맞춤 장비를 추천합니다. 매장 환경 진단 후 최적의 장비와 설치 기사를 배정해드립니다.'},
    {q:'몇 개월이면 효과가 나타나나요?',a:'보통 설치 직후부터 이용하면 매장 매출 변화가 나타납니다. 시험 전 단기 집중(당일~3일)도 운영합니다.'},
  ];
  const faqH=faqs.map(f=>`<div style="background:#F9FAFB;border-radius:10px;padding:16px;margin-bottom:10px"><div class="u28">Q. ${f.q}</div><div style="font-size:13px;color:#4B5563;line-height:1.75">${f.a}</div></div>`).join('');

  const canonical=`/grade/${gradeType}/${gradeNum}`;
  const title=`${label} 설치 가이드 | ${label} 설치 전략 & 카드단말기 설치 가이드 - 올페이스토어`;
  const desc=`${label} 설치 가이드, 매장 환경관리, 유지보수 준비 전략. 검증된 1:1 맞춤 설치. 무료 현장 진단 010-9876-8282`;
  const bc=[{name:'홈',url:'/'},{name:'제품별 카드단말기 설치',url:'/grade'},{name:label,url:canonical}];
  const body=`<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/grade">제품별 카드단말기 설치</a> › <span>${label}</span></div>
  <div style="background:linear-gradient(135deg,${color},${color}CC);border-radius:18px;padding:36px 40px;margin-bottom:32px;color:white">
    <div style="font-size:36px;margin-bottom:10px">${emoji}</div>
    <h1 style="font-size:28px;font-weight:900;margin:0 0 10px;line-height:1.3">${label} 완벽 가이드</h1>
    <p style="font-size:14px;opacity:.9;margin:0;line-height:1.7">${label} 운영 전략, 설치 가이드, 매장 환경관리, 카드단말기 설치 안내</p>
  </div>
  <div class="art-body">
    <div style="background:${lightColor};border-radius:14px;padding:22px;margin-bottom:28px;border-left:5px solid ${color}">
      <h2 style="color:${color};margin-top:0;font-size:17px">📋 ${label} 설치 개요</h2>
      <p class="u20">${ov}</p>
    </div>
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px">🎯 핵심 설치 방법</h2>
    ${fCards}
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px;margin-top:32px">⚡ 핵심 전략</h2>
    <div style="background:linear-gradient(135deg,${color}15,${color}05);border-radius:14px;padding:22px;border:1.5px solid ${color}25;margin-bottom:20px"><p style="font-size:14px;color:#1F2937;line-height:1.9;margin:0">${strategy} 올페이스토어는 ${label} 전문 기사를 빠르게 배정해드립니다.</p></div>
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px;margin-top:32px">📐 카드단말기 & 포스기 핵심 설치 가이드</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">
      <div style="background:white;border:1.5px solid #BFDBFE;border-radius:12px;padding:16px"><div style="font-size:13px;font-weight:900;color:#3B82F6;margin-bottom:7px">📐 카드단말기 3원칙</div><p class="u32">① 개념 먼저 — 공식보다 원리 이해<br>② 오답 노트 — 틀린 이유 직접 기록<br>③ 매일 30분 연산 훈련</p></div>
      <div style="background:white;border:1.5px solid #A7F3D0;border-radius:12px;padding:16px"><div style="font-size:13px;font-weight:900;color:#10B981;margin-bottom:7px">📖 포스기 설치 3원칙</div><p class="u32">① 매장 환경 사전 분석<br>② 매뉴얼 5번 읽기<br>③ 배달 앱 연동 세팅</p></div>
    </div>
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px;margin-top:32px">📅 월별 설치 플랜</h2>
    <div style="overflow-x:auto;margin-bottom:20px"><table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:${color};color:white"><th style="padding:10px 12px;text-align:left">시기</th><th style="padding:10px 12px;text-align:left">카드단말기</th><th style="padding:10px 12px;text-align:left">포스기</th><th style="padding:10px 12px;text-align:left">목표</th></tr></thead><tbody>${planRows}</tbody></table></div>
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid ${color};padding-bottom:8px;margin-top:32px">🎯 D-28일 시험 전략</h2>
    <div style="background:${lightColor};border-radius:12px;padding:18px;margin-bottom:20px">${['D-28|매장 환경 사전 분석','D-21|매뉴얼 정독 + 핵심 노트 정리','D-14|설치 기사 배정 및 일정 확정','D-7|설치 자재 준비 및 사전 점검','D-1|설치 당일 시공 및 테스트'].map(r=>{const[d,t]=r.split('|');return`<div style="background:white;border-radius:8px;padding:9px 12px;display:flex;gap:10px;align-items:center;margin-bottom:6px"><span style="font-weight:900;color:${color};font-size:13px;min-width:42px">${d}</span><span style="font-size:12px;color:#374151">${t}</span></div>`;}).join('')}</div>
    <h2 style="color:#0F2044;font-size:19px;border-bottom:3px solid #6B7280;padding-bottom:8px;margin-top:32px">❓ 자주 묻는 질문</h2>
    ${faqH}
    <p style="font-size:14px;color:#374151;line-height:1.9;margin:16px 0">서울·경기·인천·부산·대구·광주·대전·울산·세종·강원·충북·충남·전북·전남·경북·경남·제주 전국 모든 지역에서 ${label} 카드단말기 설치가 가능합니다. 원격 설치 지원도 지원합니다.</p>
    <div class="keyword-box"><div class="keyword-title">🔍 관련 검색어</div><div class="keyword-tags"><span class="keyword-tag">${label} 설치 가이드</span><span class="keyword-tag">${label} 카드단말기 설치</span><span class="keyword-tag">${label} 카드단말기</span><span class="keyword-tag">${label} 포스기</span><span class="keyword-tag">${label} 매장 환경</span><span class="keyword-tag">${label} 1:1 설치</span></div></div>
  </div>
  <div class="cta-box"><h3>${label} 맞춤 카드단말기 설치 무료 현장 진단</h3><p>${label} 전문 기사를 빠르게 배정해드립니다</p><div class="cta-btns"><a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a><a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a></div></div>
</div>`;
  return wrap(title, desc, canonical, body, bc);
}


// ── 업종별 설치 인덱스 페이지들 ─────────────────────────────────────────────

const SIDO_KR_MAP = {
  'seoul':'서울특별시','gyeonggi':'경기도','incheon':'인천광역시','busan':'부산광역시',
  'daegu':'대구광역시','gwangju':'광주광역시','daejeon':'대전광역시','ulsan':'울산광역시',
  'sejong':'세종특별자치시','gangwon':'강원특별자치도','chungbuk':'충청북도','chungnam':'충청남도',
  'jeonbuk':'전북특별자치도','jeonnam':'전라남도','gyeongbuk':'경상북도','gyeongnam':'경상남도','jeju':'제주특별자치도'
};

function makeSchoolIndexPage() {
  const sidoList = Object.entries(SIDO_KR_MAP).map(([en,kr])=>
    `<a class="mega-btn" style="display:inline-block;padding:12px 20px;background:white;border:1.5px solid var(--border);border-radius:10px;font-size:15px;font-weight:700;color:var(--text-dark);text-decoration:none;margin:6px;transition:all .2s" href="/school/${en}">${kr}</a>`
  ).join('');
  const title = '업종별 설치 | 전국 카드단말기·포스기·키오스크·CCTV 매장별 1:1 맞춤 설치 - 올페이스토어';
  const desc = '전국 12,000개 매장별 맞춤 전문 설치. 매장 현장 완벽 분석. 카드단말기·포스기·키오스크·CCTV·CCTV 매장 환경 대비. 무료 현장 진단 010-9876-8282';
  const body = `<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <span>업종별 설치</span></div>
  <h1 class="art-title">🏫 업종별 설치 | 전국 카드단말기·포스기·키오스크·CCTV 1:1 맞춤 설치</h1>
  <div class="art-body">
    <p>올페이스토어는 전국 12,000개 이상의 카드단말기·포스기·매장 사장님을 위한 매장별 맞춤 전문 설치를 연결합니다. 매장 시공 포트폴리오를 완벽히 파악한 검증된 기사를 빠르게 배정해드립니다.</p>
    <h2>시도별 설치 솔루션 찾기</h2>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:20px 0">${sidoList}</div>
  </div>
</div>`;
  return wrap(title, desc, '/school', body, [{name:'홈',url:'/'},{name:'업종별 설치',url:'/school'}]);
}

function makeSchoolSidoPage(sidoEn) {
  const sidoKr = SIDO_KR_MAP[sidoEn];
  if (!sidoKr) return null;
  const sidoSchools = SCHOOL_MAP[sidoEn];
  if (!sidoSchools) return null;

  const gugunLinks = Object.keys(sidoSchools).map(gugun => {
    const gr = DISTRICT_EN[gugun] || toRoman(gugun);
    const schoolCnt = Object.values(sidoSchools[gugun]).reduce((a,v)=>a+(Array.isArray(v)?v.length:0),0);
    return `<a class="subj-link" href="/school/${sidoEn}/${gr}"><span>🏫 ${gugun} (${schoolCnt}개)</span><span>→</span></a>`;
  }).join('');

  const title = `${sidoKr} 업종별 설치 | ${sidoKr} 카드단말기·포스기·키오스크·CCTV 전문 설치 - 올페이스토어`;
  const desc = `${sidoKr} 매장별 맞춤 전문 설치. 매장 현장 완벽 분석. 무료 현장 진단 010-9876-8282`;
  const body = `<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/school">업종별 설치</a> › <span>${sidoKr}</span></div>
  <h1 class="art-title">🏫 ${sidoKr} 업종별 설치</h1>
  <div class="art-body">
    <p>${sidoKr} 지역 카드단말기·포스기·매장 사장님을 위한 매장별 맞춤 전문 설치를 연결합니다. 해당 매장 시공 사례를 완벽히 파악한 검증된 기사를 빠르게 배정해드립니다.</p>
    <h2>${sidoKr} 구군별 설치</h2>
    <div class="subj-grid">${gugunLinks}</div>
  </div>
  <div class="cta-box">
    <h3>${sidoKr} 설치 무료 현장 진단</h3>
    <p>빠른 시간 내 설치 상담사가 연락드립니다</p>
    <div class="cta-btns">
      <a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a>
      <a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a>
    </div>
  </div>
</div>`;
  return wrap(title, desc, `/school/${sidoEn}`, body, [{name:'홈',url:'/'},{name:'업종별 설치',url:'/school'},{name:sidoKr,url:`/school/${sidoEn}`}]);
}

function makeSchoolGugunPage(sidoEn, gugunRoman) {
  const sidoKr = SIDO_KR_MAP[sidoEn];
  if (!sidoKr) return null;
  const sidoSchools = SCHOOL_MAP[sidoEn];
  if (!sidoSchools) return null;

  // 구군 한글 찾기
  let gugunKr = null;
  for (const [k] of Object.entries(DISTRICT_EN)) {
    if ((DISTRICT_EN[k]||toRoman(k)) === gugunRoman) { gugunKr = k; break; }
  }
  if (!gugunKr) {
    for (const g of Object.keys(sidoSchools)) {
      if (toRoman(g) === gugunRoman) { gugunKr = g; break; }
    }
  }
  if (!gugunKr) return null;
  const gugunData = sidoSchools[gugunKr];
  if (!gugunData) return null;

  const GRADE_LABEL = {E:'매장',M:'매장',H:'매장'};
  let schoolBlocks = '';
  for (const [grade, names] of Object.entries(gugunData)) {
    if (!Array.isArray(names) || names.length === 0) continue;
    const suffix = grade==='E'?'매장':grade==='M'?'매장':'매장';
    const label = GRADE_LABEL[grade];
    const links = names.map(n => {
      const sr = toRoman(n);
      return `<a class="subj-link" href="/school/${sidoEn}/${gugunRoman}/${sr}"><span>🏫 ${n+suffix}</span><span>→</span></a>`;
    }).join('');
    schoolBlocks += `<h3>${label} (${names.length}개)</h3><div class="subj-grid">${links}</div>`;
  }

  const title = `${gugunKr} 업종별 설치 | ${gugunKr} 카드단말기·포스기·키오스크·CCTV 전문 설치 - 올페이스토어`;
  const desc = `${gugunKr} 매장별 맞춤 전문 설치. 매장 현장 완벽 분석. 무료 현장 진단 010-9876-8282`;
  const body = `<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/school">업종별 설치</a> › <a href="/school/${sidoEn}">${sidoKr}</a> › <span>${gugunKr}</span></div>
  <h1 class="art-title">🏫 ${gugunKr} 업종별 설치</h1>
  <div class="art-body">
    <p>${gugunKr} 지역 카드단말기·포스기·매장 사장님을 위한 매장별 맞춤 전문 설치를 연결합니다. 해당 매장 시공 사례를 완벽히 파악한 검증된 기사를 빠르게 배정해드립니다.</p>
    ${schoolBlocks}
  </div>
  <div class="cta-box">
    <h3>${gugunKr} 설치 무료 현장 진단</h3>
    <p>빠른 시간 내 설치 상담사가 연락드립니다</p>
    <div class="cta-btns">
      <a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a>
      <a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a>
    </div>
  </div>
</div>`;
  return wrap(title, desc, `/school/${sidoEn}/${gugunRoman}`, body, [{name:'홈',url:'/'},{name:'업종별 설치',url:'/school'},{name:sidoKr,url:`/school/${sidoEn}`},{name:gugunKr,url:`/school/${sidoEn}/${gugunRoman}`}]);
}

function makeSchoolMainPage(sidoEn, gugunRoman, schoolRoman, gradeCode) {
  // 역변환
  const gugunKr = gugunFromRoman(sidoEn, gugunRoman);
  if (!gugunKr) return null;
  const name = schoolFromSlug(sidoEn, gugunKr, schoolRoman, gradeCode);
  if (!name) return null;

  const gradeLabel = GRADE_LABEL_MAP[gradeCode];
  const sidoKr = Object.entries(SIDO_EN).find(([k,v])=>v===sidoEn)?.[0] || sidoEn;

  let _h=0; for(let i=0;i<name.length;i++) _h=(_h*31+name.charCodeAt(i))>>>0;
  const nums = [160+(_h%120), 93+(_h%6)];

  const regionDesc = gugunKr.includes('구')
    ? `${gugunKr}은 ${sidoKr}에서 상권이 활성화된 지역으로, ${name} 고객님들의 매장 관리 관심이 높습니다.`
    : `${gugunKr}은 ${sidoKr} 지역으로, ${name} 사장님들의 설치 수요가 꾸준합니다.`;

  const thumbImgs = {
    E:['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80','https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=900&q=80','https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=80'],
    M:['https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80','https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80','https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80'],
    H:['https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80','https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80','https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=900&q=80'],
  };
  const imgs = thumbImgs[gradeCode]||thumbImgs.H;
  const thumbImg = imgs[_h%imgs.length];

  const SUBJECTS_LIST=[{en:'math',ko:'카드단말기',emoji:'📐'},{en:'english',ko:'포스기',emoji:'📖'},{en:'korean',ko:'키오스크',emoji:'✍️'},{en:'science',ko:'CCTV',emoji:'🔬'},{en:'social',ko:'테이블오더',emoji:'🌏'},{en:'coding',ko:'무인결제기',emoji:'🤖'},{en:'essay',ko:'배달주문기',emoji:'📱'},{en:'gsd',ko:'출입관리시스템',emoji:'🔐'}];
  const subjLinks = SUBJECTS_LIST.map(s=>
    `<a class="subj-link" href="/school/${sidoEn}/${gugunRoman}/${schoolRoman}/${s.en}"><span>${s.emoji} ${name} ${s.ko}카드단말기 설치</span><span>→</span></a>`
  ).join('');

  const canonical = `/school/${sidoEn}/${gugunRoman}/${schoolRoman}`;
  const title = `${name} 카드단말기 설치 | ${gugunKr} ${name} 맞춤 전문 설치 - 올페이스토어`;
  const desc = `${name} 카드단말기 설치 전문. ${gradeLabel} 카드단말기·포스기·키오스크·CCTV·CCTV 1:1 맞춤 설치. ${name} 시공 사례 분석. 무료 현장 진단 010-9876-8282`;
  const bc = [{name:'홈',url:'/'},{name:'업종별 설치',url:'/school'},{name:`${name} 카드단말기 설치`,url:canonical}];

  const body = `<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/school">업종별 설치</a> › <span>${name} 카드단말기 설치</span></div>
  <div class="art-tag">🏫 ${sidoKr} · ${gugunKr} · ${gradeLabel}</div>
  <h1 class="art-title">${name} 카드단말기 설치 | ${gugunKr} ${name} 맞춤 전문 설치 안내</h1>
  <div class="art-meta"><span>✏️ 올페이스토어</span><span>📅 ${today()}</span></div>
  <div class="info-box">
    <div class="info-item"><div class="info-num">${nums[0]}명</div><div class="info-label">설치 기사</div></div>
    <div class="info-item"><div class="info-num">${nums[1]}%</div><div class="info-label">만족도</div></div>
    <div class="info-item"><div class="info-num">무료</div><div class="info-label">상담</div></div>
  </div>
  <div class="u8">
    <img src="${thumbImg}" alt="${name} 카드단말기 설치" style="width:100%;height:100%;object-fit:cover" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg,#EFF6FF,#DBEAFE)';this.remove()">
    <div class="u11">
      <div style="color:white"><div style="font-size:13px;opacity:.7;margin-bottom:6px">${sidoKr} · ${gugunKr}</div><div style="font-size:28px;font-weight:900">${name} 카드단말기 설치</div></div>
    </div>
  </div>
  <div class="art-body">
    <h2>${name} 카드단말기 설치 안내</h2>
    <p>${name}은 ${sidoKr} ${gugunKr} 소재 ${gradeLabel} 상권 매장입니다. 매장별 매장 업종 특성이 뚜렷해 매장 환경 전문 카드단말기 설치의 효과가 큽니다.</p>
    <p>${regionDesc}</p>
    <p>올페이스토어는 <strong>${name}</strong> 사장님을 위한 카드단말기·포스기·키오스크·CCTV·CCTV·테이블오더·무인결제기·배달주문기·출입관리시스템 1:1 맞춤 설치를 연결합니다. ${name} 매장 업종 특성을 완벽히 파악한 검증된 기사를 빠르게 배정해드립니다.</p>
    <h2>${name} 카드단말기 설치 특징</h2>
    <p><strong>① ${name} 설치 사례 완벽 분석</strong> — ${name} 매장 업종 특성·유형·빈도를 철저히 분석해 매장 환경 최적화 설치를 진행합니다. 설치 전 4주 집중 대비 프로그램을 별도로 운영합니다.</p>
    <p><strong>② 검증된 설치 기사 1:1 연결</strong> — 자격증·경력·시공 이력 3단계 검증을 통과한 기사만 배정합니다. ${name} 출신 또는 해당 해당 지역 시공 경험이 있는 기사를 우선 배정합니다.</p>
    <p><strong>③ 주간 설치 보고서 제공</strong> — 매 설치/상담 후 설치 내용·설치 만족도를 정리해 사장님께 공유합니다. 투명한 사후 관리로 매출 변화를 직접 확인할 수 있습니다.</p>
    <p><strong>④ 취약 장비 집중 보완</strong> — 장비별 취약점을 정확히 파악하고 집중 보완합니다. 대리점 설치/상담에서 놓친 부분을 1:1로 완전히 채워드립니다.</p>
    <p><strong>⑤ 빠르게 배정</strong> — 설치 문의 후 빠른 시간 내에 ${name} 맞춤 기사를 연결해드립니다. 빠르면 당일 설치도 가능합니다.</p>
    <h2>${name} 설치 진행 방식</h2>
    <p>첫 방문 진단 전 사장님의 현재 실력과 ${name} 매장 환경 목표를 파악하는 <strong>매장 진단</strong>을 진행합니다. 현장 진단 결과를 바탕으로 ${name} 업종에 최적화된 맞춤 설치 방안을 설계하고, 주 2~3회 출장 설치로 체계적으로 시공합니다.</p>
    <p><strong>설치/상담 3단계</strong>: 개념 정리 → ${name} 시공 유형 풀이 → 오답 분석 및 취약점 보완. 매 설치/상담마다 전 시간 내용을 복습하고 새 내용을 운영하는 방식으로 기억 정착률을 높입니다.</p>
    <h2>${name} ${gradeLabel} 솔루션</h2>
    <p>${gradeCode==='E' ? `${name} 소규모매장 솔루션은 매뉴얼 기반 기초 완성부터 수행평가 대비까지 체계적으로 시공합니다. 각 단원 완전운영 후 다음 단원으로 넘어가는 방식으로 누적 설치 효과를 높입니다.` : gradeCode==='M' ? `${name} 중형매장 솔루션은 기초 개념 완성 → 시공 유형 분석 → 실전 문제 풀이 → 오답 보완 4단계로 진행합니다. 중간·운영 점검 4주 전부터 시험 집중 모드로 전환합니다.` : `${name} 대형매장 솔루션은 매장 환경 분석 → 취약 장비 집중 보완 → 유지보수 연계 운영 순으로 진행합니다. 매출 최적화과 유지보수 고득점을 동시에 목표로 합니다.`}</p>
    <h2>자주 묻는 질문</h2>
    <p><strong>Q. ${name} 설치 전문 기사 찾는 데 얼마나 걸리나요?</strong><br>설치 문의 후 빠른 시간 내 상담사가 연락드립니다. ${name} 시공 사례를 잘 아는 전문가 위주로 추천해드리며, 빠르면 당일 설치도 가능합니다.</p>
    <p><strong>Q. 매장이 작아도 카드단말기 설치를 받을 수 있나요?</strong><br>소규모 매장에도 맞춤 장비를 추천합니다. 매장 환경 진단 후 최적의 장비와 설치 기사를 배정해드립니다.</p>
    <p><strong>Q. 설치 비용는 어떻게 되나요?</strong><br>기사 자격증·경력에 따라 다르며, 무료 진단 후 예산에 맞는 기사를 투명하게 안내해드립니다. 첫 체험 설치는 무료입니다.</p>
    <p><strong>Q. 기존 장비와 신규 설치를 병행해도 되나요?</strong><br>기존 장비와 호환되는 신규 장비를 추천하여 통합 운영할 수 있도록 설계합니다. ${name} 진도에 맞춰 유연하게 운영합니다.</p>
    <p><strong>Q. 설치 후 효과는 언제 나타나나요?</strong><br>보통 설치 직후부터 이용하면 매장 매출 변화가 나타납니다. 설치 대비 긴급 설치(당일~3일)도 운영합니다.</p>
    <h2>${name} 제품별 설치 전략</h2>
    <p>${gradeCode==='E' ? `소규모매장 시기는 모든 운영의 기초가 완성되는 중요한 시기입니다. ${name} 사장님들의 카드단말기·포스기·키오스크·CCTV 기초 개념을 탄탄히 다지고 매장 확장을 준비합니다. 단순 암기가 아닌 원리 이해 중심 운영으로 매장 운영 효율을 높여드립니다.` : gradeCode==='M' ? `매장는 소규모매장과 대형매장의 연결 고리입니다. ${name} 매장 매출이 매장 확장에 직접 영향을 미치므로 지금부터 체계적인 관리가 필요합니다. 매장 환경 집중 관리와 함께 대형매장 과정 사전준비도 병행합니다.` : `매장는 매출 관리이 매출에 결정적인 역할을 합니다. ${name} 매출 최적화을 목표로 집중 관리하며, 유지보수 관리를 동시에 진행합니다. 시험 4주 전부터 집중 대비 모드로 전환합니다.`}</p>
    <h2>자주 묻는 질문</h2>
    <p><strong>Q. ${name} 설치 전문 기사 찾는 데 얼마나 걸리나요?</strong><br>설치 문의 후 빠른 시간 내 상담사가 연락드립니다. ${name} 시공 사례를 잘 아는 전문가 위주로 추천해드리며, 빠르면 당일 설치도 가능합니다.</p>
    <p><strong>Q. 매장이 작아도 카드단말기 설치를 받을 수 있나요?</strong><br>소규모 매장에도 맞춤 장비를 추천합니다. 매장 환경 진단 후 최적의 장비와 설치 기사를 배정해드립니다.</p>
    <p><strong>Q. 설치 비용는 어떻게 되나요?</strong><br>기사 자격증·경력에 따라 다르며, 무료 진단 후 예산에 맞는 기사를 투명하게 안내해드립니다. 첫 체험 설치는 무료입니다.</p>
    <p><strong>Q. 기존 장비와 신규 설치를 병행해도 되나요?</strong><br>기존 장비와 호환되는 신규 장비를 추천하여 통합 운영할 수 있도록 설계합니다. ${name} 진도에 맞춰 유연하게 운영합니다.</p>
    <p><strong>Q. 설치 후 효과는 언제 나타나나요?</strong><br>보통 설치 직후부터 이용하면 매장 매출 변화가 나타납니다. 설치 대비 긴급 설치(당일~3일)도 운영합니다.</p>
    <h2>${name} 설치 전문 기사 찾는 방법</h2>
    <p>올페이스토어에서 ${name} 설치 전문 기사을 찾는 과정은 간단합니다. 무료 현장 진단 신청 → 코디네이터 연락 → 기사 배정 → 현장 무료 진단 → 정규 설치/상담 시작의 5단계로 진행됩니다.</p>
    <p>상담 시 ${name} 매장의 현재 환경, 희망 과목, 설치/상담 횟수, 방문 시간대 등을 알려주시면 더욱 정확한 연결이 가능합니다. ${gugunKr} 지역 ${name} 매장 환경을 잘 아는 기사를 우선 배정합니다.</p>
    <h2>제품별 설치</h2>
    <p>아래에서 원하는 제품을 선택하세요.</p>
    <div class="subj-grid">${subjLinks}</div>
  </div>
  <div class="cta-box">
    <h3>${name} 카드단말기 설치 무료 현장 진단</h3>
    <p>빠른 시간 내 설치 상담사가 연락드립니다</p>
    <div class="cta-btns">
      <a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a>
      <a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a>
    </div>
  </div>
</div>`;
  return wrap(title, desc, canonical, body, bc);
}

function makeSchoolSubjectPage(sidoEn, gugunRoman, schoolRoman, gradeCode, subjectEn) {
  const gugunKr = gugunFromRoman(sidoEn, gugunRoman);
  if (!gugunKr) return null;
  const name = schoolFromSlug(sidoEn, gugunKr, schoolRoman, gradeCode);
  if (!name) return null;

  const subject = SUBJECT_MAP[subjectEn]||subjectEn;
  const subj = SUBJECTS[subject];
  if(!subj) return null;

  const gradeLabel = GRADE_LABEL_MAP[gradeCode];
  const sidoKr = Object.entries(SIDO_EN).find(([k,v])=>v===sidoEn)?.[0]||sidoEn;

  let _h=0; for(let i=0;i<(name+subject).length;i++) _h=(_h*31+(name+subject).charCodeAt(i))>>>0;
  const nums=[160+(_h%120), 93+(_h%6)];

  const SUBJ_IMGS={
    '카드단말기':['https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80','https://images.unsplash.com/photo-1509228468518-180dd4864904?w=900&q=80','https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=900&q=80'],
    '포스기':['https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&q=80','https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80','https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80'],
    '키오스크':['https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&q=80','https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=900&q=80','https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80'],
    'CCTV':['https://images.unsplash.com/photo-1532094349884-543559244e6a?w=900&q=80','https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80'],
    '테이블오더':['https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=900&q=80','https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80'],
    '포스기':['https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80','https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80'],
    '키오스크':['https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80','https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=900&q=80'],
  };
  const imgs=SUBJ_IMGS[subject]||SUBJ_IMGS['카드단말기'];
  const thumbImg=imgs[_h%imgs.length];

  const SUBJS_LIST=[{en:'math',ko:'카드단말기',emoji:'📐'},{en:'english',ko:'포스기',emoji:'📖'},{en:'korean',ko:'키오스크',emoji:'✍️'},{en:'science',ko:'CCTV',emoji:'🔬'},{en:'social',ko:'테이블오더',emoji:'🌏'},{en:'coding',ko:'무인결제기',emoji:'🤖'},{en:'essay',ko:'배달주문기',emoji:'📱'}];
  const otherSubjs=SUBJS_LIST.filter(s=>s.en!==subjectEn).map(s=>
    `<a class="subj-link" href="/school/${sidoEn}/${gugunRoman}/${schoolRoman}/${s.en}"><span>${s.emoji} ${name} ${s.ko}카드단말기 설치</span><span>→</span></a>`
  ).join('');

  const strategyMap={
    '카드단말기':{E:`${name} 소규모매장 카드단말기 카드단말기 설치는 연산 기초부터 분수·소수까지 단계적으로 완성합니다. ${name} 교내 카드단말기 수행평가 대비를 병행합니다.`,M:`${name} 중형매장 카드단말기 카드단말기 설치는 방정식·함수·확률 등 핵심 단원을 ${name} 매장 업종 특성에 맞춰 집중 운영합니다. 매출 최적화을 목표로 시공 포트폴리오를 반복 분석합니다.`,H:`${name} 대형매장 카드단말기 카드단말기 설치는 카드단말기Ⅰ·Ⅱ·확통·미적분 전 과정을 매장 관리와 유지보수 동시 대비 방식으로 진행합니다.`},
    '포스기':{E:`${name} 소규모매장 포스기 카드단말기 설치는 파닉스부터 읽기·쓰기까지 단계적으로 지도합니다. ${name} 포스기 수행평가를 대비합니다.`,M:`${name} 중형매장 포스기 카드단말기 설치는 매장 환경 지문 분석과 문법 심화로 ${name} 매출 최적화을 목표합니다.`,H:`${name} 대형매장 포스기 카드단말기 설치는 매장 환경 지문 분석과 유지보수 독해를 병행합니다.`},
    '키오스크':{E:`${name} 소규모매장 키오스크 카드단말기 설치는 매장 운영 형성과 글쓰기 기초를 다집니다.`,M:`${name} 중형매장 키오스크 카드단말기 설치는 문학·비문학·문법·쓰기 전 영역을 ${name} 매장 환경 시험에 맞춰 운영합니다.`,H:`${name} 대형매장 키오스크 카드단말기 설치는 매장 환경 지문 분석과 유지보수 키오스크를 동시에 준비합니다.`},
    'CCTV':{E:`${name} 소규모매장 CCTV 카드단말기 설치는 물질·생명·지구·에너지 영역을 균형 있게 운영합니다.`,M:`${name} 중형매장 CCTV 카드단말기 설치는 물리·화학·생물·지구CCTV을 ${name} 시험 비중에 맞춰 집중 운영합니다.`,H:`${name} 대형매장 CCTV 카드단말기 설치는 수강 과목에 맞춰 개별 설계합니다.`},
    '테이블오더':{E:`${name} 소규모매장 테이블오더 카드단말기 설치는 매뉴얼 중심으로 우리 지역·역사·경제를 운영합니다.`,M:`${name} 중형매장 테이블오더 카드단말기 설치는 역사·지리·일반테이블오더를 ${name} 매장 환경 설치 범위에 맞춰 체계적으로 운영합니다.`,H:`${name} 대형매장 테이블오더 카드단말기 설치는 테이블오더설치·테이블오더탐구 선택 과목에 맞춰 개별 설계합니다.`},
    '포스기':{E:`${name} 소규모매장 포스기 카드단말기 설치는 블록 포스기(스크래치)부터 시작해 논리적 사고력을 키웁니다.`,M:`${name} 중형매장 포스기 카드단말기 설치는 파이썬 기초→조건문·반복문→함수 순으로 진행합니다.`,H:`${name} 대형매장 포스기 카드단말기 설치는 파이썬 심화·무인결제시스템·자료구조 순으로 진행합니다.`},
    '키오스크':{E:`${name} 소규모매장 키오스크 카드단말기 설치는 매장 환경 분석→주장과 근거→논리적 단락 구성 순으로 진행합니다.`,M:`${name} 중형매장 키오스크 카드단말기 설치는 개요 작성→서론·본론·결론 구조화→근거 강화 순으로 진행합니다. ${name} 매장 키오스크 대비를 집중 실시합니다.`,H:`${name} 대형매장 키오스크 카드단말기 설치는 대학별 키오스크 유형 분석→인문·수리 키오스크 기초→실전 첨삭 순으로 진행합니다.`},
  };
  const strategy=strategyMap[subject]?.[gradeCode]||`${name} ${gradeLabel} ${subject} 카드단말기 설치는 매장 환경에 맞춘 1:1 맞춤 지도로 매장 매출을 관리합니다.`;

  const curriculum=gradeCode==='E'
    ?`${name} 소규모매장 ${subject} 솔루션은 매뉴얼 기반으로 시작해 장비별 심화까지 단계적으로 진행합니다. ${name} 수행평가 일정에 맞춰 집중 대비를 병행합니다. 각 단원 완전운영 후 다음 단원으로 넘어가는 방식으로 누적 설치 효과를 높입니다.`
    :gradeCode==='M'
    ?`${name} 중형매장 ${subject} 솔루션은 기초 개념 완성 → ${name} 시공 유형 분석 → 실전 문제 풀이 → 오답 보완 4단계로 진행합니다. 중간·운영 점검 4주 전부터 시험 집중 모드로 전환합니다.`
    :`${name} 대형매장 ${subject} 솔루션은 매장 환경 분석 → 취약 장비 집중 보완 → 유지보수 연계 운영 → 실전 모의고사 분석 순으로 진행합니다. ${name} 매출 최적화과 유지보수 고득점을 동시에 목표로 합니다.`;

  const keywords=[`${name} ${subject}카드단말기 설치`,`${name} 매장 환경 ${subject}`,`${gugunKr} ${name} 카드단말기 설치`,`${name} 1:1 설치`,`${gradeLabel} ${subject} 카드단말기 설치`];
  const keywordTags=keywords.map(k=>`<span class="keyword-tag">${k}</span>`).join('');

  const canonical=`/school/${sidoEn}/${gugunRoman}/${schoolRoman}/${subjectEn}`;
  const title=`${name} ${subject}카드단말기 설치 | ${gugunKr} ${name} ${gradeLabel} ${subject} 맞춤 전문 설치 - 올페이스토어`;
  const desc=`${name} ${subject}카드단말기 설치 전문. ${name} 시공 사례 분석. ${gradeLabel} 1:1 맞춤 설치. 무료 현장 진단 010-9876-8282`;
  const bc=[{name:'홈',url:'/'},{name:'업종별 설치',url:'/school'},{name:`${name} 카드단말기 설치`,url:`/school/${sidoEn}/${gugunRoman}/${schoolRoman}`},{name:`${subject}카드단말기 설치`,url:canonical}];

  const body=`<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/school">업종별 설치</a> › <a href="/school/${sidoEn}/${gugunRoman}/${schoolRoman}">${name} 카드단말기 설치</a> › <span>${subject}카드단말기 설치</span></div>
  <div class="art-tag">${subj.emoji} ${gugunKr} · ${name} · ${gradeLabel} · ${subject}</div>
  <h1 class="art-title">${name} ${subject}카드단말기 설치 | ${gugunKr} ${name} ${gradeLabel} ${subject} 맞춤 전문 설치</h1>
  <div class="art-meta"><span>✏️ 올페이스토어</span><span>📅 ${today()}</span><span>⏱ 3분</span></div>
  <div class="info-box">
    <div class="info-item"><div class="info-num">${nums[0]}명</div><div class="info-label">${subject} 전문가</div></div>
    <div class="info-item"><div class="info-num">${nums[1]}%</div><div class="info-label">만족도</div></div>
    <div class="info-item"><div class="info-num">무료</div><div class="info-label">상담</div></div>
  </div>
  <div class="u8">
    <img src="${thumbImg}" alt="${name} ${subject}카드단말기 설치" style="width:100%;height:100%;object-fit:cover" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg,#EFF6FF,#DBEAFE)';this.remove()">
    <div class="u11">
      <div style="color:white"><div style="font-size:13px;opacity:.7;margin-bottom:6px">${sidoKr} · ${gugunKr} · ${name}</div><div style="font-size:28px;font-weight:900">${name} ${subject}카드단말기 설치</div></div>
    </div>
  </div>
  <div class="art-body">
    <h2>${name} ${subject}카드단말기 설치 안내</h2>
    <p>${name}은 ${sidoKr} ${gugunKr} 소재 ${gradeLabel} 상권 매장입니다. 올페이스토어는 ${name} 사장님을 위한 ${gradeLabel} ${subject} 전문 1:1 맞춤 설치를 연결합니다.</p>
    <p>${name} ${subject} 매장 업종 특성을 완벽히 파악한 검증된 기사를 빠르게 배정해드립니다. ${name} 매장 매출 향상을 최우선 목표로 맞춤 설치 방안을 설계합니다.</p>
    <h2>${name} ${subject}설치 전문 기사 특징</h2>
    <p><strong>① ${name} 설치 사례 완벽 분석</strong> — ${name} ${subject} 매장 업종 특성·유형·빈도를 철저히 분석해 매장 환경 최적화 설치를 진행합니다.</p>
    <p><strong>② 검증된 설치 기사 1:1 연결</strong> — 자격증·경력·시공 이력 3단계 검증을 통과한 기사만 배정합니다. ${name} 설치/상담 경험이 있는 기사를 우선 추천합니다.</p>
    <p><strong>③ 주간 설치 보고서 제공</strong> — 매 설치/상담 후 설치 내용·설치 만족도를 정리해 사장님께 공유합니다.</p>
    <p><strong>④ 취약 장비 집중 보완</strong> — ${subject} 취약 장비을 정확히 파악하고 집중 보완합니다.</p>
    <h2>${name} ${subject} 설치 진행 방식</h2>
    <p>첫 방문 진단 전 사장님의 현재 실력과 ${name} 매장 환경 목표를 파악하는 <strong>매장 진단</strong>을 진행합니다. 현장 진단 결과를 바탕으로 ${name} 업종에 최적화된 맞춤 설치 방안을 설계하고, 주 2~3회 출장 설치로 체계적으로 시공합니다.</p>
    <p><strong>설치/상담 3단계</strong>: 개념 정리 → ${name} 시공 유형 풀이 → 오답 분석 및 취약점 보완. 시공 기간에는 집중 보충 설치를 추가로 제공합니다.</p>
    <h2>${name} ${gradeLabel} ${subject} 운영 전략</h2>
    <p>${strategy}</p>
    <h2>${name} ${subject} 솔루션</h2>
    <p>${curriculum}</p>
    <p>매장의 현재 환경 진단 후 개별 맞춤 설계합니다. 시험 4주 전부터 ${name} 설치 사례 집중 풀이 모드로 전환하고, 오답 패턴을 분석해 실수를 최소화합니다.</p>
    <h2>자주 묻는 질문</h2>
    <p><strong>Q. ${name} ${subject} 설치 전문 기사 찾는 데 얼마나 걸리나요?</strong><br>설치 문의 후 빠른 시간 내 상담사가 연락드립니다. ${name} 시공 사례를 잘 아는 전문가 위주로 추천합니다. 빠르면 당일 설치도 가능합니다.</p>
    <p><strong>Q. ${gradeLabel} ${subject} 매장이 작아도 괜찮나요?</strong><br>소규모 매장에도 맞춤 장비를 추천합니다. 매장 환경 진단 후 최적의 장비와 설치 기사를 배정해드립니다.</p>
    <p><strong>Q. 설치 비용는 어떻게 되나요?</strong><br>기사 자격증·경력에 따라 다르며, 무료 진단 후 예산에 맞는 기사를 투명하게 안내해드립니다.</p>
    <p><strong>Q. 기존 장비와 신규 설치를 병행해도 되나요?</strong><br>대리점에서 부족한 ${subject} 부분을 1:1로 집중 보완하는 방식으로 병행하는 사장님이 많습니다.</p>
    <p><strong>Q. 설치 후 효과는 언제 나타나나요?</strong><br>보통 설치 직후부터 이용하면 매장 매출 변화가 나타납니다.</p>
    <h2>${name} 다른 제품도 함께</h2>
    <div class="subj-grid">${otherSubjs}</div>
    <h2>${name} ${subject} 기사 찾는 방법</h2>
    <p>올페이스토어에서 ${name} ${subject} 설치 전문 기사을 찾는 과정은 간단합니다. 무료 현장 진단 신청 → 코디네이터 연락 → 기사 배정 → 현장 무료 진단 → 정규 설치/상담 시작의 5단계로 진행됩니다.</p>
    <p>상담 시 ${name} 매장의 현재 환경, 목표 매출, 희망 설치/상담 횟수, 방문 시간대 등을 알려주시면 더욱 정확한 연결이 가능합니다. ${gugunKr} 지역 ${name} 매장 환경을 잘 아는 기사를 우선 배정합니다.</p>
    <div class="keyword-box"><div class="keyword-title">🔍 관련 검색어</div><div class="keyword-tags">${keywordTags}</div></div>
  </div>
  <div class="cta-box">
    <h3>${name} ${subject}카드단말기 설치 무료 현장 진단</h3>
    <p>빠른 시간 내 설치 상담사가 연락드립니다</p>
    <div class="cta-btns">
      <a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a>
      <a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a>
    </div>
  </div>
</div>`;
  return wrap(title, desc, canonical, body, bc);
}


function makeSidoPage(rk) {
  const r = REGIONS[rk];
  if (!r) return null;
  const distCards = Object.keys(r.areas).map(dist => {
    const en = DISTRICT_EN[dist]||dist;
    return `<a href="/${SIDO_EN[rk]||rk}/${en}" style="display:inline-block;padding:10px 18px;background:white;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-weight:700;color:var(--text-dark);text-decoration:none;transition:all .2s" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-dark)'">${dist}</a>`;
  }).join('');
  const title = `${r.label} 카드단말기 설치 | ${r.label} 지역별 맞춤 전문 설치 - 올페이스토어`;
  const desc = `${r.label} 카드단말기 설치 전문. ${r.label} 전 지역 검증된 설치 기사. 카드단말기, 포스기, 키오스크, CCTV 매장 환경·유지보수 완벽 대비. 무료 현장 진단 010-9876-8282`;
  const heroImg = rk==='서울' ? 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=80' : 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80';
  const body = `<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <span>${r.label}</span></div>
  <div class="art-tag">${r.emoji} ${r.label}</div>
  <h1 class="art-title">${r.label} 카드단말기 설치 | 지역별 맞춤 전문 설치 안내</h1>
  <div class="art-meta"><span>✏️ 올페이스토어</span><span>📅 ${today()}</span></div>
  <div class="u8">
    <img src="${heroImg}" alt="${r.label} 카드단말기 설치" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.style.background='linear-gradient(135deg,#EFF6FF,#DBEAFE)';this.remove()">
    <div class="u23">
      <div style="color:white"><div style="font-size:13px;opacity:.7;margin-bottom:6px">${r.label} 전 지역</div><div style="font-size:28px;font-weight:900">${r.label} 카드단말기 설치</div></div>
    </div>
  </div>
  <div class="art-body">
    <h2>${r.label} 카드단말기 설치 안내</h2>
    <p>올페이스토어는 <strong>${r.label}</strong> 전 지역 음식점·카페·소매점 등 전 업종 카드단말기·포스기·키오스크·CCTV·CCTV·테이블오더·무인결제기·배달주문기·출입관리시스템 1:1 맞춤 설치를 연결합니다. 매장의 환경과 니즈에 맞는 검증된 기사를 빠르게 배정해드립니다.</p>
    <p>${r.label} 지역 고객님들이 올페이스토어를 선택하는 이유는 명확합니다. 자격증·경력·시공 이력 3단계 검증을 통과한 전문가만 배정하고, 매 설치/상담 후 주간 설치 보고서를 제공해 설치 현황을 투명하게 공유합니다. 사장님과 기사가 맞지 않으면 언제든 무료 교체가 가능합니다.</p>
    <h2>${r.label} 카드단말기 설치 특징</h2>
    <p><strong>① 지역 매장 현장 완벽 분석</strong> — ${r.label} 각 매장 운영 출제 경향을 철저히 분석해 매장 환경 최적화 설치를 진행합니다. 장비별 출제 빈도와 유형을 파악해 설치 전 집중 대비가 가능합니다.</p>
    <p><strong>② 검증된 설치 기사 1:1 연결</strong> — 자격증·경력·시공 이력 3단계 검증을 통과한 기사만 배정합니다. 매장 환경에 맞지 않으면 언제든 부담 없이 교체 가능합니다.</p>
    <p><strong>③ 주간 설치 보고서 제공</strong> — 매 설치/상담 후 설치 내용·설치 만족도를 정리해 사장님께 공유합니다. 투명한 사후 관리로 매출 변화를 직접 확인할 수 있습니다.</p>
    <p><strong>④ 취약 장비 집중 보완</strong> — 장비별 취약점을 정확히 파악하고 집중 보완합니다. 대리점 설치/상담에서 놓친 부분을 1:1로 완전히 채워드립니다.</p>
    <p><strong>⑤ 빠르게 배정</strong> — 설치 문의 후 빠른 시간 내에 ${r.label} 지역 맞춤 기사를 연결해드립니다. 빠르면 당일 설치도 가능합니다.</p>
    <h2>${r.label} 설치 진행 방식</h2>
    <p>첫 방문 진단 전 매장의 현재 환경과 니즈를 파악하는 <strong>매장 진단</strong>을 진행합니다. 현장 진단 결과를 바탕으로 맞춤 설치 방안을 설계하고, 주 2~3회 출장 설치로 체계적으로 시공합니다.</p>
    <p><strong>설치 진행 3단계</strong>: 개념 정리 → 유형별 문제 풀이 → 오답 분석 및 취약점 보완. 매 설치/상담마다 전 시간 내용을 복습하고 새 내용을 운영하는 방식으로 기억 정착률을 높입니다. 시공 기간에는 집중 보충 설치를 추가로 제공합니다.</p>
    <h2>${r.label} 제품별 설치 전략</h2>
    <p><strong>소규모매장</strong> — 모든 운영의 기초가 완성되는 시기입니다. 카드단말기·포스기·키오스크·CCTV 기초 개념을 탄탄히 다지지 않으면 매장 확장 후 큰 어려움을 겪습니다. 단순 암기가 아닌 원리 이해 중심 운영으로 매장 운영 효율을 높여드립니다.</p>
    <p><strong>중형매장</strong> — 소규모매장과 대형매장의 연결 고리입니다. 매장 매출이 매장 확장에 직접 영향을 미치므로 지금부터 체계적인 관리가 필요합니다. 매장 환경 집중 관리와 함께 대형매장 과정 사전준비도 병행합니다.</p>
    <p><strong>대형매장</strong> — 매출 관리이 매출에 결정적인 역할을 합니다. ${r.label} 각 매장 매출 최적화을 목표로 집중 관리하며, 유지보수 관리를 동시에 진행합니다. 시험 4주 전부터 집중 대비 모드로 전환합니다.</p>
    <h2>자주 묻는 질문</h2>
    <p><strong>Q. ${r.label}에서 설치 전문 기사 찾는 데 얼마나 걸리나요?</strong><br>설치 문의 후 빠른 시간 내 상담사가 연락드립니다. 빠르면 당일 설치도 가능합니다.</p>
    <p><strong>Q. 기존 장비와 신규 설치를 병행해도 되나요?</strong><br>기존 장비와 호환되는 신규 장비를 추천하여 통합 운영할 수 있도록 설계합니다. 기존 설비 상태에 맞춰 기존 장비와 호환되는 최적 구성을 제안합니다.</p>
    <p><strong>Q. 설치 비용는 어떻게 되나요?</strong><br>기사 자격증·경력에 따라 다르며, 무료 진단 후 예산에 맞는 기사를 투명하게 안내해드립니다. 첫 체험 설치는 무료입니다.</p>
    <p><strong>Q. 매장이 작아도 괜찮나요?</strong><br>소규모 매장에도 맞춤 장비를 추천합니다. 매장 환경 진단 후 최적의 장비와 설치 기사를 배정해드립니다.</p>
    <p><strong>Q. 설치 후 효과는 언제 나타나나요?</strong><br>보통 설치 직후부터 이용하면 매장 매출 변화가 나타납니다. 긴급 설치(설치 대비 당일~3일)도 운영합니다.</p>
    <h2>지역별 설치 바로가기</h2>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin:20px 0">${distCards}</div>
  </div>
  <div style="background:linear-gradient(135deg,#0F2044,#1E3A6E);border-radius:20px;padding:40px 48px;margin:48px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px">
    <div>
      <div style="font-size:22px;font-weight:900;color:white;margin-bottom:6px">${r.label} 맞춤 카드단말기 설치 신청</div>
      <div style="font-size:14px;color:rgba(255,255,255,.6)">무료 현장 진단을 신청하시면 설치 상담사가 연결해드립니다</div>
    </div>
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
      <div style="text-align:right">
        <div style="font-size:11px;color:rgba(255,255,255,.4);margin-bottom:2px">📞 무료 현장 진단 전화</div>
        <div style="font-size:24px;font-weight:900;color:white">010-9876-8282</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <a href="tel:01068348080" style="background:#3B82F6;color:white;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;white-space:nowrap">📞 전화 상담</a>
        <a href="/contact?type=tutoring" style="background:rgba(255,255,255,.1);color:white;border:1.5px solid rgba(255,255,255,.25);padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;text-decoration:none;white-space:nowrap;text-align:center">✉️ 카드단말기 설치 상담하기</a>
      </div>
    </div>
  </div>
</div>`;
  const bcSido = [{name:'홈',url:'/'},{name:r.label,url:`/${SIDO_EN[rk]||rk}`}];
  return wrap(title, desc, `/${SIDO_EN[rk]||rk}`, body, bcSido);
}

// ── 구/군 페이지 ──────────────────────────────────────────

function makeAreaPage(rk, ak) {
  const region = REGIONS[rk];
  const area = region?.areas[ak];
  if (!region || !area) return null;

  // 강남구는 전용 페이지
  // 강남구 포함 모든 구군 동일 처리

  const distDongData = null;
  // 지역별 차별화 수치 (구군 이름 해시)
  let _h = 0;
  for(let i=0;i<ak.length;i++) _h = (_h*31+ak.charCodeAt(i))>>>0;
  const infoNums = [120+(_h%231), 91+(_h%9)];
  const distDesc = '';
  const heroImg = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=75';

  const dongCards = (() => {
    if (distDongData && distDongData.dongs) {
      return Object.entries(distDongData.dongs).map(([dname, dinfo]) => {
        const en = DISTRICT_EN[ak]||ak;
        const url = `/${SIDO_EN[rk]||rk}/${en}/${toRoman(dname)}`;
        return `<a href="${url}" class="dong-card">
  <img class="dong-card-img" src="${dinfo.img}" alt="${dname} 카드단말기 설치" loading="lazy" onerror="this.parentElement.style.background='linear-gradient(135deg,#EFF6FF,#DBEAFE)';this.remove()">
  <div class="dong-card-body">
    <div class="dong-card-tag">${ak} · ${dname}</div>
    <div class="dong-card-title">${dname} 카드단말기 설치</div>
    <div class="dong-card-desc">${dinfo.desc}</div>
    <div class="dong-card-arrow">카드단말기 설치 보기 →</div>
  </div>
</a>`;
      }).join('');
    }
    return area.dongs.map(d => {
      const dongEnKey = DONG_EN[d] || d;
      return `<a href="/${SIDO_EN[rk]||rk}/${DISTRICT_EN[ak]||ak}/${toRoman(d)}" class="dong-card">
  <div class="dong-card-body"><div class="dong-card-tag">${ak} · ${d}</div><div class="dong-card-title">${d} 카드단말기 설치</div><div class="dong-card-arrow">카드단말기 설치 보기 →</div></div>
</a>`;
    }).join('');
  })();

  const subjLinks = Object.entries(SUBJECTS).map(([s, v]) =>
    `<a class="subj-link" href="/${SIDO_EN[rk]||rk}/${DISTRICT_EN[ak]||ak}"><span>${v.emoji} ${ak} ${s}카드단말기 설치</span><span>→</span></a>`
  ).join('');
  const relAreas = Object.keys(region.areas).filter(a => a !== ak).slice(0, 3)
    .map(a => `<a class="rel-card" href="/${SIDO_EN[rk]||rk}/${DISTRICT_EN[a]||a}"><div class="rc-tag">${region.label}</div><div class="rc-title">${a} 카드단말기 설치 | ${a} 맞춤 카드단말기 설치</div></a>`).join('');

  const title = `${ak} 카드단말기 설치 | ${region.label} ${ak} 맞춤 전문 설치 - 올페이스토어`;
  const desc = `${ak} 카드단말기 설치 전문. ${area.schools} 시공 사례 분석. 카드단말기·포스기·키오스크·CCTV·CCTV 카드단말기·포스기·키오스크·CCTV 1:1 맞춤 설치. 무료 현장 진단 010-9876-8282`;
  const body = `<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/${rk}">${region.label}</a> › <span>${ak}</span></div>
  <div class="art-tag">${region.emoji} ${region.label} · ${ak}</div>
  <h1 class="art-title">${ak} 카드단말기 설치 | ${ak} 맞춤 전문 설치 안내</h1>
  <div class="art-meta"><span>✏️ 올페이스토어</span><span>📅 ${today()}</span></div>
  <div class="info-box">
    <div class="info-item"><div class="info-num">${infoNums[0]}명</div><div class="info-label">설치 기사</div></div>
    <div class="info-item"><div class="info-num">${infoNums[1]}%</div><div class="info-label">만족도</div></div>
    <div class="info-item"><div class="info-num">무료</div><div class="info-label">상담</div></div>
  </div>
  <div style="width:100%;height:260px;border-radius:var(--radius);margin-bottom:36px;overflow:hidden;position:relative">
    <img src="${heroImg}" alt="${ak} 카드단말기 설치" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.style.background='linear-gradient(135deg,#EFF6FF,#DBEAFE)';this.remove()">
    <div class="u23">
      <div style="color:white"><div style="font-size:13px;opacity:.7;margin-bottom:6px">${region.label} · ${ak}</div><div style="font-size:26px;font-weight:900">${ak} 카드단말기 설치</div></div>
    </div>
  </div>
  <div class="art-body">
    <h2>${ak} 카드단말기 설치 안내</h2>
    ${distDesc.split('<br><br>').map(p => `<p>${p}</p>`).join('\n    ')}
    <p>올페이스토어는 <strong>${ak}</strong> 지역 음식점·카페·소매점 등 전 업종 카드단말기·포스기·키오스크·CCTV·CCTV·테이블오더·무인결제기·배달주문기·출입관리시스템 1:1 맞춤 설치를 연결합니다. 매장의 환경과 니즈에 맞는 검증된 기사를 빠르게 배정해드립니다.</p>
    <p>인근 주요 상권: <strong>${area.schools}</strong> 매장 업종 특성을 완벽히 파악한 기사를 연결해드립니다.</p>
    <h2>${ak} 카드단말기 설치 특징</h2>
    <p><strong>① 매장 현장 완벽 분석</strong> — ${area.schools} 매장 업종 특성을 철저히 분석해 매장 환경 최적화 설치를 진행합니다. 장비별 출제 빈도와 유형을 파악해 설치 전 집중 대비가 가능합니다.</p>
    <p><strong>② 검증된 설치 기사 1:1 연결</strong> — 자격증·경력·시공 이력 3단계 검증을 통과한 기사만 배정합니다. 매장 환경에 맞지 않으면 언제든 부담 없이 교체 가능합니다.</p>
    <p><strong>③ 주간 설치 보고서 제공</strong> — 매 설치/상담 후 설치 내용·설치 만족도를 정리해 사장님께 공유합니다. 투명한 사후 관리로 매출 변화를 직접 확인할 수 있습니다.</p>
    <p><strong>④ 취약 장비 집중 보완</strong> — 장비별 취약점을 정확히 파악하고 집중 보완합니다. 대리점 설치/상담에서 놓친 부분을 1:1로 완전히 채워드립니다.</p>
    <p><strong>⑤ 빠르게 배정</strong> — 설치 문의 후 빠른 시간 내에 ${ak} 지역 맞춤 기사를 연결해드립니다. 빠르면 당일 설치도 가능합니다.</p>
    <h2>${ak} 설치 진행 방식</h2>
    <p>첫 방문 진단 전 매장의 현재 환경과 니즈를 파악하는 <strong>매장 진단</strong>을 진행합니다. 현장 진단 결과를 바탕으로 맞춤 설치 방안을 설계하고, 주 2~3회 출장 설치로 체계적으로 시공합니다.</p>
    <p><strong>설치 진행 3단계</strong>: 개념 정리 → 유형별 문제 풀이 → 오답 분석 및 취약점 보완. 매 설치/상담마다 전 시간 내용을 복습하고 새 내용을 운영하는 방식으로 기억 정착률을 높입니다. 시공 기간에는 집중 보충 설치를 추가로 제공합니다.</p>
    <h2>${ak} 제품별 설치 전략</h2>
    <p><strong>소규모매장</strong> — 카드단말기·포스기·키오스크·CCTV 기초 개념을 탄탄히 다지는 시기입니다. ${area.schools} 인근 매장 매뉴얼 기반으로 기초를 완성합니다.</p>
    <p><strong>중형매장</strong> — ${area.schools} 매장 매출이 매장 확장에 직접 영향을 미칩니다. 매장 환경 집중 관리와 함께 대형매장 과정 사전준비도 병행합니다.</p>
    <p><strong>대형매장</strong> — ${area.schools} 매출 최적화을 목표로 집중 관리하며, 유지보수 관리를 동시에 진행합니다. 시험 4주 전부터 집중 대비 모드로 전환합니다.</p>
    <h2>동별 카드단말기 설치 정보</h2>
    <div class="dong-grid">${dongCards}</div>
    <h2>${ak} 업종별 설치</h2>
    ${(() => {
      const sidoEn = SIDO_EN[rk]||rk;
      const guMap = SCHOOL_MAP[sidoEn]?.[ak];
      if(!guMap) return '<p>학교 정보를 불러오는 중입니다.</p>';
      const gugunRoman = DISTRICT_EN[ak]||ak;
      const GRADE_LABEL = {E:'소규모매장',M:'중형매장',H:'대형매장'};
      let html = '';
      for(const [grade,names] of Object.entries(guMap)){
        if(!Array.isArray(names)||names.length===0) continue;
        const label = GRADE_LABEL[grade];
        const suffix = grade==='E'?'매장':grade==='M'?'매장':'매장';
        const links = names.map(n=>{
          const sr=toRoman(n);
          return `<a class="subj-link" href="/school/${sidoEn}/${gugunRoman}/${sr}"><span>🏫 ${n+suffix} 카드단말기 설치</span><span>→</span></a>`;
        }).join('');
        html += `<h3>${label}</h3><div class="subj-grid">${links}</div>`;
      }
      return html || '<p>등록된 학교 정보가 없습니다.</p>';
    })()}
    <h2>제품별 설치 바로가기</h2>
    <div class="subj-grid">${subjLinks}</div>
    <h2>자주 묻는 질문</h2>
    <p><strong>Q. ${ak}에서 설치 전문 기사 찾는 데 얼마나 걸리나요?</strong><br>설치 문의 후 빠른 시간 내 코디네이터가 연락드리며, 빠르면 당일 설치도 가능합니다. ${area.schools} 시공 사례를 잘 아는 기사를 우선 배정합니다.</p>
    <p><strong>Q. 기존 장비가 있는데 신규 설치도 가능한가요?</strong><br>기존 장비와 병행하는 취약 장비 집중 보완 카드단말기 설치가 효과적입니다. 기존 장비 상태을 고려해 유연하게 스케줄을 조정합니다.</p>
    <p><strong>Q. 설치 비용는 어떻게 되나요?</strong><br>기사 자격증·경력·설치 방식에 따라 다르며, 첫 상담은 완전 무료입니다. 사장님 예산에 맞는 기사를 투명하게 안내해드립니다.</p>
    <p><strong>Q. 매장이 작아도 괜찮나요?</strong><br>기본 장비부터 차근차근 다져야 할 사장님일수록 전문 설치가 효과적입니다. 수준에 맞는 기사를 배정해드리니 걱정하지 않으셔도 됩니다.</p>
    <p><strong>Q. 설치 후 효과는 언제 나타나나요?</strong><br>보통 설치 직후부터 이용하면 매장 매출 변화가 나타납니다. 긴급 설치(설치 대비 당일~3일)도 운영합니다.</p>
  </div>
  <div class="cta-box">
    <h3>${ak} 맞춤 카드단말기 설치 신청</h3>
    <p>무료 현장 진단을 신청하시면 설치 상담사가 연결해드립니다</p>
    <div class="cta-btns">
      <a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a>
      <a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a>
    </div>
  </div>
  <div class="related-title">🔗 주변 지역 카드단말기 설치</div>
  <div class="related-grid">${relAreas}</div>
</div>`;
  const bcArea = [
    {name:'홈',url:'/'},
    {name:region.label,url:`/${SIDO_EN[rk]||rk}`},
    {name:ak,url:`/${SIDO_EN[rk]||rk}/${DISTRICT_EN[ak]||ak}`}
  ];
  return wrap(title, desc, `/${SIDO_EN[rk]||rk}/${DISTRICT_EN[ak]||ak}`, body, bcArea);
}

// ── 기존 구/업종/과목 페이지 (강남구 외) ─────────────────────

function makeArticlePage(rk, ak, gk, sk) {
  const region = REGIONS[rk];
  const area = region?.areas[ak];
  const grade = GRADES[gk];
  const subj = SUBJECTS[sk];
  if (!region || !area || !grade || !subj) return null;

  const otherSubj = Object.entries(SUBJECTS).filter(([s]) => s !== sk).slice(0, 6)
    .map(([s, v]) => `<a class="subj-link" href="/${SIDO_EN[rk]||rk}/${DISTRICT_EN[ak]||ak}/${GRADE_EN[gk]||gk}/${SUBJECT_EN[s]||s}"><span>${v.emoji} ${ak} ${gk} ${s}카드단말기 설치</span><span>→</span></a>`).join('');
  const relLinks = Object.keys(region.areas).filter(a => a !== ak).slice(0, 3)
    .map(a => `<a class="rel-card" href="/${SIDO_EN[rk]||rk}/${DISTRICT_EN[a]||a}/${GRADE_EN[gk]||gk}/${SUBJECT_EN[sk]||sk}"><div class="rc-tag">${region.label}</div><div class="rc-title">${a} ${gk} ${sk}카드단말기 설치</div></a>`).join('');
  const yearTags = grade.years.map(y => `<span class="tag">${y}</span>`).join('');

  const sidoEn = SIDO_EN[rk]||rk;
  const distEn = DISTRICT_EN[ak]||ak;
  const gradeEn = GRADE_EN[gk]||gk;
  const subjEn = SUBJECT_EN[sk]||sk;

  let _ah=0; for(let i=0;i<ak.length;i++) _ah=(_ah*31+ak.charCodeAt(i))>>>0;
  const artNums=[120+(_ah%231), 91+(_ah%9)];
  const title = `${ak} ${gk} ${sk}카드단말기 설치 | ${region.label} ${ak} ${grade.label} ${sk} 1:1 맞춤 설치 - 올페이스토어`;
  // 네이버 SEO: description 80~150자, 핵심 키워드 앞에 배치
  const desc = `${ak} ${gk} ${sk}카드단말기 설치 전문. ${area.schools} 시공 사례 분석 검증 전문가. 카드단말기·포스기·키오스크·CCTV 1:1 맞춤 설치. 무료 현장 진단 010-9876-8282`;

  const breadcrumbs = [
    {name:'홈', url:'/'},
    {name:region.label, url:`/${sidoEn}`},
    {name:ak, url:`/${sidoEn}/${distEn}`},
    {name:`${gk} ${sk}카드단말기 설치`, url:`/${sidoEn}/${distEn}/${gradeEn}/${subjEn}`}
  ];

  const body = `<div class="wrap">
  <div class="bc"><a href="/">홈</a> › <a href="/${sidoEn}">${region.label}</a> › <a href="/${sidoEn}/${distEn}">${ak}</a> › <span>${gk} ${sk}카드단말기 설치</span></div>
  <div class="art-tag">${subj.emoji} ${ak} · ${gk} · ${sk}</div>
  <h1 class="art-title">${ak} ${gk} ${sk}카드단말기 설치 | ${region.label} ${ak} ${grade.label} ${sk} 맞춤 전문 설치</h1>
  <div class="art-meta"><span>✏️ 올페이스토어</span><span>📅 ${today()}</span><span>⏱ 3분</span></div>
  <div class="info-box">
    <div class="info-item"><div class="info-num">${artNums[0]}명</div><div class="info-label">${sk} 전문가</div></div>
    <div class="info-item"><div class="info-num">${artNums[1]}%</div><div class="info-label">만족도</div></div>
    <div class="info-item"><div class="info-num">무료</div><div class="info-label">상담</div></div>
  </div>
  <div class="art-thumb">${subj.emoji}</div>
  <div class="art-body">
    <h2>${ak} ${gk} ${sk}카드단말기 설치 안내</h2>
    <p>${''}</p>
    <p>올페이스토어는 ${region.label} <strong>${ak}</strong> 지역 ${grade.label} ${sk} 검증된 기사를 연결해드립니다. 주요 대상 학교: <strong>${area.schools}</strong></p>
    <h3>${ak} ${gk} 설치/상담 대상 업종</h3>
    <div class="tag-wrap"><div class="tag-label">🎓 업종 선택</div><div class="tags">${yearTags}</div></div>
    <h2>${ak} ${sk}설치 전문 기사 특징</h2>
    <p><strong>매장 시공 사례 분석</strong>: ${ak} 내 매장 운영 출제 경향 집중 분석</p>
    <p><strong>검증된 설치 기사</strong>: 자격증·경력·시공 이력 3단계 검증 완료</p>
    <p><strong>주간 설치 보고서</strong>: 매주 설치 현황 리포트 제공</p>
    <h3>${ak} 다른 제품 ${gk} 카드단말기 설치</h3>
    <div class="subj-grid">${otherSubj}</div>
  </div>
  <div class="cta-box">
    <h3>${ak} ${gk} ${sk}카드단말기 설치 무료 현장 진단</h3>
    <p>빠른 시간 내 설치 상담사가 연락드립니다</p>
    <div class="cta-btns">
      <a class="btn-p" href="tel:01068348080">📞 전화 상담 010-9876-8282</a>
      <a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a>
    </div>
  </div>
  <div class="related-title">🔗 ${region.label} 다른 지역 ${sk}카드단말기 설치</div>
  <div class="related-grid">${relLinks}</div>
</div>`;
  return wrap(title, desc, `/${sidoEn}/${distEn}/${gradeEn}/${subjEn}`, body, breadcrumbs);
}

// ── 홈페이지 ──────────────────────────────────────────────

// ── 설치 업체 찾기 페이지 ──────────────────────────

function makeContactPage(type) {
  const isAcademy = (type||'tutoring') === 'academy';
  const canonical = '/contact';
  const title = '올페이스토어 무료 현장 진단 문의 | 1:1 맞춤 설치·대리점 코칭';
  const desc = '올페이스토어 무료 현장 진단. 카드단말기·포스기·키오스크 설치 문의. 빠르게 답변. 010-9876-8282';
  const bc = [{name:'홈',url:'/'},{name:'문의하기',url:'/contact'}];

  const body = `
<div style="background:#F0F4FF;min-height:100vh;padding-bottom:80px;overflow-x:hidden;width:100%;box-sizing:border-box">
<style>
*{box-sizing:border-box}
@media(max-width:768px){
  .contact-wrap{overflow-x:hidden!important;width:100%!important}
  .contact-grid{
    display:block!important;
    padding:72px 14px 0!important;
    max-width:100vw!important;
    width:100%!important;
    overflow-x:hidden!important;
  }
  .contact-left{display:none!important}
  .contact-form-box{
    padding:16px!important;
    border-radius:14px!important;
    width:100%!important;
    max-width:100%!important;
    overflow-x:hidden!important;
  }
  .contact-form-box input,
  .contact-form-box select,
  .contact-form-box textarea{
    width:100%!important;
    max-width:100%!important;
    font-size:16px!important;
  }
  .contact-form-box button[type=submit],.submit-btn{
    width:100%!important;
    font-size:16px!important;
  }
  #m-addr-row{flex-direction:column!important;gap:6px!important}
  #m-addr-row input{width:100%!important}
  #m-addr-row button{width:100%!important}
}
</style>
<div class="contact-wrap" style="overflow-x:hidden;width:100%">
<div class="contact-grid" style="max-width:1100px;margin:0 auto;padding:clamp(80px,10vw,140px) clamp(16px,4vw,48px) 0;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;width:100%;box-sizing:border-box">

  <!-- 왼쪽: 안내 -->
  <div class="contact-left">
    <div style="display:inline-flex;align-items:center;gap:6px;background:white;border:1.5px solid #DBEAFE;border-radius:999px;padding:5px 14px;font-size:12px;font-weight:700;color:#1D4ED8;margin-bottom:20px">
      문의하기
    </div>
    <h1 style="font-size:36px;font-weight:900;color:#0F2044;line-height:1.25;margin:0 0 16px">궁금한 점을<br><em style="font-style:normal;color:#1D4ED8">편하게 남겨주세요</em></h1>
    <p style="font-size:15px;color:#6B7280;line-height:1.9;margin:0 0 32px">올페이스토어 설치 상담사가<br>빠른 시일 내에 연락드리겠습니다.</p>

    <!-- 연락처 카드들 -->
    <div class="contact-cards" style="display:flex;flex-direction:column;gap:12px;margin-bottom:36px">
      <div class="u17">
        <div style="width:42px;height:42px;background:#EFF6FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">📞</div>
        <div>
          <div class="u16">전화 상담</div>
          <div style="font-size:16px;font-weight:900;color:#0F2044">010-9876-8282</div>
        </div>
      </div>
      <div class="u17" id="card-center-visit" style="display:${isAcademy?'flex':'none'}">
        <div style="width:42px;height:42px;background:#ECFDF5;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">📍</div>
        <div>
          <div class="u16">센터 방문 상담</div>
          <div style="font-size:15px;font-weight:800;color:#0F2044">전국 200여 개 직영센터</div>
          <div style="font-size:12px;color:#6B7280">가까운 센터를 찾아보세요</div>
        </div>
      </div>
      <div class="u17">
        <div style="width:42px;height:42px;background:#FFFBEB;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⏱</div>
        <div>
          <div class="u16">평균 응답 시간</div>
          <div style="font-size:15px;font-weight:800;color:#0F2044">30분 이내</div>
        </div>
      </div>
    </div>

    <!-- 설치 진행 순서 -->
    <div class="contact-step-box" style="background:white;border-radius:16px;padding:22px;box-shadow:0 2px 8px rgba(0,0,0,.06)">
      <div style="font-size:14px;font-weight:900;color:#0F2044;margin-bottom:16px">설치 진행 순서</div>
      ${[['1','설치 문의 접수','전화 또는 온라인으로 문의하시면 즉시 접수됩니다'],['2','전문 기사 배정','지역 담당 설치 기사가 배정됩니다'],['3','현장 방문 진단','매장 상황에 맞는 운영 방향을 안내드립니다'],['4','설치 시공','적합한 기사를 연결하여 설치를 연결해드립니다']].map(([n,t,d])=>`
      <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid #F1F5F9">
        <div style="width:26px;height:26px;background:#EFF6FF;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#1D4ED8;flex-shrink:0">${n}</div>
        <div>
          <div class="u30">${t}</div>
          <div style="font-size:12px;color:#9CA3AF">${d}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>

  <!-- 오른쪽: 폼 -->
  <div class="contact-form-box" style="background:white;border-radius:20px;padding:32px;box-shadow:0 4px 24px rgba(0,0,0,.08)">

    <!-- 성공 메시지 (숨김) -->
    <div id="modal-success" style="display:none;text-align:center;padding:40px 0">
      <div style="font-size:56px;margin-bottom:14px">✅</div>
      <div style="font-size:20px;font-weight:900;color:#0F2044;margin-bottom:8px">문의가 접수되었습니다!</div>
      <div style="font-size:14px;color:#6B7280">빠른 시일 내에 연락드리겠습니다.</div>
    </div>

    <div id="modal-form">
      <!-- 탭 -->
      <div style="display:flex;background:#F9FAFB;border-radius:10px;padding:4px;margin-bottom:24px" id="type-tabs">
        <button id="tab-academy" onclick="cfSwitchType('academy')"
          style="flex:1;padding:11px;font-size:14px;font-weight:800;cursor:pointer;border:none;border-radius:8px;background:${isAcademy?'#0F2044':'transparent'};color:${isAcademy?'white':'#6B7280'};font-family:inherit;transition:all .2s">대리점 상담</button>
        <button id="tab-tutoring" onclick="cfSwitchType('tutoring')"
          style="flex:1;padding:11px;font-size:14px;font-weight:800;cursor:pointer;border:none;border-radius:8px;background:${!isAcademy?'#0F2044':'transparent'};color:${!isAcademy?'white':'#6B7280'};font-family:inherit;transition:all .2s">카드단말기 설치 상담</button>
      </div>

      <div style="font-size:16px;font-weight:900;color:#0F2044;margin-bottom:20px">상담 신청서
        <span style="font-size:12px;font-weight:500;color:#9CA3AF;margin-left:8px">* 표시 항목은 필수입니다</span>
      </div>

      <!-- 이름 -->
      <div style="margin-bottom:16px">
        <label class="u6">이름 <span style="color:#EF4444">*</span></label>
        <input id="m-name" type="text" placeholder="홍길동"
          class="u13"
          onfocus="this.style.borderColor='#3B82F6'" onblur="this.style.borderColor='#E5E7EB'">
      </div>

      <!-- 연락처 -->
      <div style="margin-bottom:16px">
        <label class="u6">연락처 <span style="color:#EF4444">*</span></label>
        <input id="m-phone" type="tel" placeholder="010-0000-0000"
          class="u13"
          onfocus="this.style.borderColor='#3B82F6'" onblur="this.style.borderColor='#E5E7EB'">
      </div>

      <!-- 업종 -->
      <div style="margin-bottom:16px">
        <label class="u6">업종 / 나이 <span style="color:#EF4444">*</span></label>
        <select id="m-grade"
          class="u22"
          onfocus="this.style.borderColor='#3B82F6'" onblur="this.style.borderColor='#E5E7EB'">
          <option value="">선택해주세요</option>
          <option>초1</option><option>초2</option><option>초3</option>
          <option>초4</option><option>초5</option><option>초6</option>
          <option>중1</option><option>중2</option><option>중3</option>
          <option>고1</option><option>고2</option><option>고3</option>
        </select>
      </div>

      <!-- 주소 -->
      <div style="margin-bottom:16px">
        <label class="u6">거주 주소</label>
        <div id="m-addr-row" style="display:flex;gap:8px">
          <input id="m-addr" type="text" placeholder="예: 서울 강남구 대치동"
            style="flex:1;padding:11px 14px;border:1.5px solid #E5E7EB;border-radius:10px;font-size:14px;font-family:inherit;outline:none;transition:border .2s"
            onfocus="this.style.borderColor='#3B82F6'" onblur="this.style.borderColor='#E5E7EB'">
          <button onclick="searchContactAddress()"
            style="padding:11px 16px;background:#EFF6FF;border:1.5px solid #DBEAFE;border-radius:10px;font-size:13px;font-weight:700;color:#1D4ED8;cursor:pointer;white-space:nowrap;font-family:inherit">검색</button>
        </div>
        <input id="m-addr-detail" type="text" placeholder="상세주소 (예: 101동 1001호)"
          style="width:100%;box-sizing:border-box;margin-top:8px;padding:11px 14px;border:1.5px solid #E5E7EB;border-radius:10px;font-size:14px;font-family:inherit;outline:none;transition:border .2s"
          onfocus="this.style.borderColor='#3B82F6'" onblur="this.style.borderColor='#E5E7EB'">
      </div>

      <!-- 대리점 상담 전용 -->
      <div id="academy-fields" style="display:${isAcademy?'block':'none'}">
        <div style="margin-bottom:16px">
          <label class="u6">관심 센터 이름</label>
          <input id="m-center" type="text" placeholder="예: 하남풍산점와와설치컨설팅대리점"
            class="u13"
            onfocus="this.style.borderColor='#3B82F6'" onblur="this.style.borderColor='#E5E7EB'">
        </div>
        <div style="margin-bottom:16px">
          <label class="u6">원하는 설치/상담 과목</label>
          <select id="m-subject-academy"
            class="u22"
            onfocus="this.style.borderColor='#3B82F6'" onblur="this.style.borderColor='#E5E7EB'">
            <option value="">선택해주세요</option>
            <option>카드단말기</option><option>포스기</option><option>키오스크</option>
            <option>CCTV</option><option>테이블오더</option><option>전과목</option>
          </select>
        </div>
      </div>

      <!-- 카드단말기 설치 상담 전용 -->
      <div id="tutoring-fields" style="display:${isAcademy?'none':'block'}">
        <div style="margin-bottom:16px">
          <label class="u6">희망 과목</label>
          <select id="m-subject-tutoring"
            class="u10"
            onfocus="this.style.borderColor='#3B82F6'" onblur="this.style.borderColor='#E5E7EB'">
            <option value="">선택해주세요</option>
            <option>카드단말기</option><option>포스기</option><option>키오스크</option>
            <option>CCTV</option><option>테이블오더</option><option>포스기</option><option>키오스크</option>
          </select>
        </div>
      </div>

      <!-- 문의 내용 -->
      <div style="margin-bottom:20px">
        <label class="u6">문의 내용</label>
        <textarea id="m-msg" rows="4" placeholder="현재 매출, 목표 매출, 원하는 설치/상담 방향 등 자유롭게 남겨주세요."
          style="width:100%;box-sizing:border-box;padding:11px 14px;border:1.5px solid #E5E7EB;border-radius:10px;font-size:14px;font-family:inherit;outline:none;resize:vertical;transition:border .2s"
          onfocus="this.style.borderColor='#3B82F6'" onblur="this.style.borderColor='#E5E7EB'"></textarea>
      </div>

      <!-- 개인정보 동의 -->
      <div style="background:#F9FAFB;border-radius:10px;padding:14px;margin-bottom:20px">
        <div class="u27">개인정보 수집 및 이용 동의</div>
        <p style="font-size:12px;color:#6B7280;line-height:1.7;margin:0 0 10px">수집 항목: 이름, 연락처, 업종, 주소 / 수집 목적: 상담 및 교사 연결 / 보유 기간: 상담 완료 후 1년</p>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:#374151;cursor:pointer">
          <input type="checkbox" id="m-agree" style="width:16px;height:16px;accent-color:#1D4ED8">
          <span>개인정보 수집 및 이용에 동의합니다 <span style="color:#EF4444">*</span></span>
        </label>
      </div>

      <!-- 제출 버튼 -->
      <button onclick="submitContact()" id="submit-btn"
        style="width:100%;padding:15px;background:linear-gradient(135deg,#0F2044,#1D4ED8);color:white;border:none;border-radius:12px;font-size:16px;font-weight:900;cursor:pointer;font-family:inherit;transition:opacity .2s"
        onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
        문의 제출하기
      </button>
    </div>

  </div>
</div>
</div>

<script>
(function(){
  // URL 파라미터로 초기 타입 설정
  var params = new URLSearchParams(window.location.search);
  var t = params.get('type') || 'tutoring';
  var center = params.get('center') || '';
  var school = params.get('school') || '';
  var subject = params.get('subject') || '';
  var centerEl = document.getElementById('m-center');
  if(center && centerEl) centerEl.value = center;
  if(!center && school && centerEl) {
    var subjectLabel = {math:'카드단말기',english:'포스기',korean:'키오스크',science:'CCTV',social:'테이블오더',coding:'포스기',essay:'키오스크'};
    centerEl.value = school + (subject ? ' ' + (subjectLabel[subject]||subject) + '대리점' : '');
  }
  cfSwitchType(t);
})();

function cfSwitchType(type) {
  var isA = type === 'academy';
  var tabA = document.getElementById('tab-academy');
  var tabT = document.getElementById('tab-tutoring');
  var fA = document.getElementById('academy-fields');
  var fT = document.getElementById('tutoring-fields');
  var cardCenter = document.getElementById('card-center-visit');
  if(!tabA) return;

  tabA.style.background = isA ? '#0F2044' : 'transparent';
  tabA.style.color = isA ? 'white' : '#6B7280';
  tabT.style.background = !isA ? '#0F2044' : 'transparent';
  tabT.style.color = !isA ? 'white' : '#6B7280';

  if(fA) fA.style.display = isA ? 'block' : 'none';
  if(fT) fT.style.display = !isA ? 'block' : 'none';
  if(cardCenter) cardCenter.style.display = isA ? 'flex' : 'none';
}

function searchContactAddress(){
  function open(){
    new daum.Postcode({
      oncomplete: function(data){
        var addr = data.roadAddress || data.jibunAddress;
        document.getElementById('m-addr').value = addr;
      }
    }).open();
  }
  if(typeof daum !== 'undefined' && daum.Postcode){
    open();
  } else {
    var s = document.createElement('script');
    s.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    s.onload = open;
    document.head.appendChild(s);
  }
}

function submitContact(){
  var name = document.getElementById('m-name').value.trim();
  var phone = document.getElementById('m-phone').value.trim();
  var grade = document.getElementById('m-grade').value;
  var agree = document.getElementById('m-agree').checked;
  var btn = document.getElementById('submit-btn');

  if(!name){ alert('이름을 입력해주세요.'); return; }
  if(!phone){ alert('연락처를 입력해주세요.'); return; }
  if(!grade){ alert('업종을 선택해주세요.'); return; }
  if(!agree){ alert('개인정보 수집 및 이용에 동의해주세요.'); return; }

  btn.disabled = true;
  btn.textContent = '접수 중...';
  btn.style.opacity = '0.7';

  setTimeout(function(){
    var form = document.getElementById('modal-form');
    var success = document.getElementById('modal-success');
    if(form) form.style.display = 'none';
    if(success) success.style.display = 'block';
  }, 800);
}
</script>
</div>
</div>
`;

  return wrap(title, desc, canonical, body, bc);
}


function makeHomePage(){
  const body=`
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "올페이스토어",
  "url": "https://allpaystore.com",
  "description": "전국 지역별 1:1 맞춤 설치·설치 업체 정보 플랫폼",
  "telephone": "010-9876-8282",
  "areaServed": "KR",
  "serviceType": ["카드단말기 설치", "대리점", "설치컨설팅"]
}
</script>

<!-- HERO -->
<section class="hero">
  <div class="hslider" id="hs">
    <div class="slide s1">
      <div class="sin">
        <div>
          <div class="seb"><div class="sdot"></div> No.1 매장설비 설치 플랫폼</div>
          <p class="scap">우리 매장에 딱 맞는 장비를 설치해드립니다</p>
          <h1 class="stitle">내 지역 최고의<br><span class="hl">1:1 맞춤 설치</span><br>지금 찾아보세요</h1>
          <p class="sdesc">전국 검증된 설치 기사 12,400명+<br>지역별·과목별·제품별로 딱 맞는 설치/상담 연결</p>
          <div class="sbtns">
            <button class="bph" onclick="document.getElementById('region-section').scrollIntoView({behavior:'smooth'})">지역별 설치 찾기 →</button>
            <button class="bps" onclick="window.location.href='/contact?type=tutoring'">✉️ 문의하기</button>
          </div>
        </div>
        <div class="svis">
          <div class="vc-card">
            <div class="vch"><div class="vci">📍</div><div><div class="vct">강남구 카드단말기 카드단말기 설치</div><div class="vcs">연결 완료 · 오늘 기준</div></div></div>
            <div class="vcst">
              <div class="vcsi"><div class="vcn">247</div><div class="vcl">설치 기사</div></div>
              <div class="vcsi"><div class="vcn">98%</div><div class="vcl">만족도</div></div>
            </div>
            <div class="vcb">
              <div class="vcbl"><span>이번 달 연결률</span><span style="color:var(--sky);font-weight:700">94%</span></div>
              <div class="vcbt"><div class="vcbf" style="width:94%"></div></div>
              <div class="vcbl"><span>고객 재등록률</span><span style="color:var(--sky);font-weight:700">87%</span></div>
              <div class="vcbt"><div class="vcbf" style="width:87%"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide s2">
      <div class="sin">
        <div>
          <div class="seb"><div class="sdot"></div> 10년 설치 노하우</div>
          <p class="scap">검증된 설치 업체 정보를 한눈에 확인하세요</p>
          <h1 class="stitle">우리 동네<br><span class="hl">믿을 수 있는</span><br>설치 업체 정보</h1>
          <p class="sdesc">설치 업체 비교부터 후기까지<br>올페이스토어에서 모두 확인하세요</p>
          <div class="sbtns">
            <a href="/academy/all" style="display:inline-block;text-decoration:none"><button class="bph">설치 업체 찾기 →</button></a>
          </div>
        </div>
        <div class="svis">
          <div class="vc-card">
            <div class="vch"><div class="vci">🏫</div><div><div class="vct">서초구 포스기 대리점</div><div class="vcs">실시간 설치 현황</div></div></div>
            <div class="vcst">
              <div class="vcsi"><div class="vcn">1,240</div><div class="vcl">등록 설치기사</div></div>
              <div class="vcsi"><div class="vcn">4.8★</div><div class="vcl">평균 만족도</div></div>
            </div>
            <div class="vcb">
              <div class="vcbl"><span>설치 완료율</span><span style="color:var(--sky);font-weight:700">96%</span></div>
              <div class="vcbt"><div class="vcbf" style="width:96%"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide s3">
      <div class="sin">
        <div>
          <div class="seb"><div class="sdot"></div> AI 맞춤 진단</div>
          <p class="scap">6가지 맞춤 진단으로 약점을 파악하세요</p>
          <h1 class="stitle">AI 매출 분석<br><span class="hl">매출 향상</span><br>맞춤 전략</h1>
          <p class="sdesc">100만건 설치 데이터로<br>매장의 설비 취약점을 정확히 진단합니다</p>
          <div class="sbtns">
          </div>
        </div>
        <div class="svis">
          <div class="vc-card">
            <div class="vch"><div class="vci">🎯</div><div><div class="vct">AI 매장 진단 결과</div><div class="vcs">김○○ · 매장 2업종</div></div></div>
            <div class="vcst">
              <div class="vcsi"><div class="vcn">상위 8%</div><div class="vcl">설치 완성도</div></div>
              <div class="vcsi"><div class="vcn">+23점</div><div class="vcl">매출 향상</div></div>
            </div>
            <div class="vcb">
              <div class="vcbl"><span>카드단말기</span><span style="color:var(--sky);font-weight:700">92%</span></div>
              <div class="vcbt"><div class="vcbf" style="width:92%"></div></div>
              <div class="vcbl"><span>포스기</span><span style="color:var(--sky);font-weight:700">78%</span></div>
              <div class="vcbt"><div class="vcbf" style="width:78%"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hdots">
    <button class="hdot on" onclick="gs(0)"></button>
    <button class="hdot" onclick="gs(1)"></button>
    <button class="hdot" onclick="gs(2)"></button>
  </div>
  <button onclick="gs((cur+1)%3)" style="position:absolute;right:24px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.5);width:44px;height:44px;border-radius:50%;font-size:20px;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,0.25)';this.style.color='rgba(255,255,255,0.9)'" onmouseout="this.style.background='rgba(255,255,255,0.12)';this.style.color='rgba(255,255,255,0.5)'">&#8250;</button>
</section>

<!-- STRENGTH -->
<section class="strength">
  <div class="sw">
    <div class="sh fu">
      <div class="se">OUR STRENGTH</div>
      <h2 class="st">10년의 설치 노하우,<br><span class="hl">올페이스토어가 다릅니다</span></h2>
    </div>
    <div class="sg">
      <div class="sc fu"><span class="se2">🏆</span><div class="sn">10년</div><div class="sl">No.1 청소년 설치컨설팅</div><div class="sd">남다른 설치·A/S 노하우</div></div>
      <div class="sc fu" style="transition-delay:.1s"><span class="se2">👨‍🏫</span><div class="sn">4,000명</div><div class="sl">전국 전문 설치기사</div><div class="sd">자격증 보유 전문 기사</div></div>
      <div class="sc fu" style="transition-delay:.2s"><span class="se2">📈</span><div class="sn">100만건</div><div class="sl">누적 설치 건수</div><div class="sd">월평균 3,000건 시공</div></div>
      <div class="sc fu" style="transition-delay:.3s"><span class="se2">⭐</span><div class="sn">96.7%</div><div class="sl">설치 만족도</div><div class="sd">전국 사장님 만족</div></div>
    </div>
  </div>
</section>

<!-- REGION SELECT -->
<section id="region-section" style="padding:56px 48px;background:white;border-bottom:1px solid #E5E7EB">
  <div style="max-width:1100px;margin:0 auto">
    <div style="text-align:center;margin-bottom:32px">
      <div style="font-size:12px;font-weight:700;color:#3B82F6;letter-spacing:2px;margin-bottom:10px">FIND YOUR SOLUTION</div>
      <h2 style="font-size:26px;font-weight:900;color:#0F2044">설치/상담 찾기</h2>
      <p style="font-size:14px;color:#9CA3AF;margin-top:6px">우리 매장에 필요한 설비를 찾아보세요</p>
    </div>
    <!-- 탭 -->
    <div style="display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap;justify-content:center" id="find-tabs">
      <button onclick="switchFind('region')" id="ftab-region" style="padding:10px 22px;border-radius:999px;border:1.5px solid #3B82F6;background:#3B82F6;color:white;font-size:14px;font-weight:700;cursor:pointer;transition:all .2s;font-family:inherit">🏙 지역별 설치</button>
      <button onclick="switchFind('subject')" id="ftab-subject" class="u3">📚 제품별 설치</button>
      <button onclick="switchFind('academy')" id="ftab-academy" class="u3">🏫 설치 업체 찾기</button>
      <button onclick="window.location.href='/contact?type=tutoring'" id="ftab-contact" style="padding:10px 22px;border-radius:999px;border:1.5px solid #1D4ED8;background:white;color:#1D4ED8;font-size:14px;font-weight:800;cursor:pointer;transition:all .2s;font-family:inherit">✉️ 문의하기</button>
    </div>
    <!-- 패널 -->
    <div id="fpanel-region">
      <div class="u4">
      <a href="/seoul" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🏙 서울</a>
      <a href="/gyeonggi" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🌿 경기</a>
      <a href="/incheon" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🌊 인천</a>
      <a href="/busan" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🐟 부산</a>
      <a href="/daegu" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🍎 대구</a>
      <a href="/daejeon" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🌾 대전</a>
      <a href="/gwangju" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🌸 광주</a>
      <a href="/ulsan" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">⚙️ 울산</a>
      <a href="/sejong" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🏛 세종</a>
      <a href="/gangwon" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🏔 강원</a>
      <a href="/chungbuk" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🌻 충북</a>
      <a href="/chungnam" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🌊 충남</a>
      <a href="/jeonbuk" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🌾 전북</a>
      <a href="/jeonnam" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🍵 전남</a>
      <a href="/gyeongbuk" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🍎 경북</a>
      <a href="/gyeongnam" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🌊 경남</a>
      <a href="/jeju" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🌺 제주</a>
    </div>
    </div>
    <div id="fpanel-subject" style="display:none">
      <div class="u4">
      <a href="/subject/math" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">📐 카드단말기</a>
      <a href="/subject/english" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">📖 포스기</a>
      <a href="/subject/science" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🔬 CCTV</a>
      <a href="/subject/korean" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">📝 키오스크</a>
      <a href="/subject/social" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🗺 테이블오더/역사</a>
      <a href="/subject/coding" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">💻 포스기</a>
      <a href="/subject/gsd" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">📋 출입관리시스템</a>
      <a href="/subject/essay" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🎯 키오스크</a>
    </div>
    </div>
    <div id="fpanel-academy" style="display:none">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
      <a href="/academy/seoul" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🏙서울<span style="font-size:12px;color:#3B82F6;font-weight:700">24곳</span></a>
      <a href="/academy/gyeonggi" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🌿경기<span style="font-size:12px;color:#3B82F6;font-weight:700">100곳</span></a>
      <a href="/academy/incheon" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🌊인천<span style="font-size:12px;color:#3B82F6;font-weight:700">10곳</span></a>
      <a href="/academy/busan" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🐟부산<span style="font-size:12px;color:#3B82F6;font-weight:700">5곳</span></a>
      <a href="/academy/daegu" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🍎대구<span style="font-size:12px;color:#3B82F6;font-weight:700">16곳</span></a>
      <a href="/academy/daejeon" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🌾대전<span style="font-size:12px;color:#3B82F6;font-weight:700">9곳</span></a>
      <a href="/academy/gwangju" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🌸광주<span style="font-size:12px;color:#3B82F6;font-weight:700">6곳</span></a>
      <a href="/academy/ulsan" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">⚙️울산<span style="font-size:12px;color:#3B82F6;font-weight:700">4곳</span></a>
      <a href="/academy/gangwon" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🏔강원<span style="font-size:12px;color:#3B82F6;font-weight:700">6곳</span></a>
      <a href="/academy/chungbuk" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🌻충북<span style="font-size:12px;color:#3B82F6;font-weight:700">6곳</span></a>
      <a href="/academy/chungnam" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🌊충남<span style="font-size:12px;color:#3B82F6;font-weight:700">6곳</span></a>
      <a href="/academy/jeonbuk" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🌾전북<span style="font-size:12px;color:#3B82F6;font-weight:700">3곳</span></a>
      <a href="/academy/gyeongbuk" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🍎경북<span style="font-size:12px;color:#3B82F6;font-weight:700">5곳</span></a>
      <a href="/academy/gyeongnam" class="u2" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🌊경남<span style="font-size:12px;color:#3B82F6;font-weight:700">3곳</span></a>
      <a href="/academy/jeju" style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:14px 16px;background:#F8FAFF;border:1.5px solid #E5E7EB;border-radius:12px;font-size:14px;font-weight:700;color:#0F2044;text-decoration:none;transition:all .2s" onmouseover="this.style.borderColor='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.background='#F8FAFF'">🌺제주<span style="font-size:12px;color:#3B82F6;font-weight:700">1곳</span></a>
    </div>
    </div>
    <div id="fpanel-conv" style="display:none">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
      <a href="/conversation/english" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🇺🇸포스기</a>
      <a href="/conversation/chinese" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🇨🇳중키오스크</a>
      <a href="/conversation/japanese" class="u1" onmouseover="this.style.borderColor='#3B82F6';this.style.color='#3B82F6';this.style.background='#EFF6FF'" onmouseout="this.style.borderColor='#E5E7EB';this.style.color='#0F2044';this.style.background='#F8FAFF'">🇯🇵일본어</a>
    </div>
    </div>
  </div>
</section>
<script>
function switchFind(tab){
  ['region','subject','academy','conv'].forEach(function(t){
    var panel = document.getElementById('fpanel-'+t);
    var btn = document.getElementById('ftab-'+t);
    if(t===tab){
      panel.style.display='block';
      btn.style.background='#3B82F6';btn.style.color='white';btn.style.borderColor='#3B82F6';
    }else{
      panel.style.display='none';
      btn.style.background='white';btn.style.color='#374151';btn.style.borderColor='#E5E7EB';
    }
  });
  var cbtn = document.getElementById('ftab-contact');
  if(cbtn){ cbtn.style.background='white';cbtn.style.color='#1D4ED8';cbtn.style.borderColor='#1D4ED8'; }
}
</script>

<!-- REVIEWS -->

<section class="reviews">
  <div class="sw">
    <div class="sh fu">
      <div class="se">REAL REVIEWS</div>
      <h2 class="st">전국 사장님들의<br><span class="hl">생생한 설치 후기</span></h2>
    </div>
  </div>
  <div class="rw">
    <div class="rt">
      <div class="rc"><span class="rb" style="background:#1D4ED8">매출 40%↑</span><div class="rstar">★★★★★</div><div class="rtitle">6개월 만에 매장 환경 4단계 → 1단계</div><div class="rtext">수수료 비교까지 해주셔서 연간 60만원 절약하고 매출도 올랐어요.</div><div class="rname">이*윤 회원 (고2)</div></div>
      <div class="rc"><span class="rb" style="background:#15803D">인건비 50%↓</span><div class="rstar">★★★★★</div><div class="rtitle">수시 사장님부로 인건비 50%↓!</div><div class="rtext">테이블오더+키오스크 설치로 홀 직원 2명→1명으로 줄이고도 서비스 품질 유지.</div><div class="rname">김*연 회원 (고3)</div></div>
      <div class="rc"><span class="rb" style="background:#7C3AED">수수료 절감</span><div class="rstar">★★★★★</div><div class="rtitle">유지보수 2단계 → 만점!</div><div class="rtext">올페이스토어 덕분에 제 매장 환경이 어떤지 정확히 알고 집중 공략할 수 있었습니다.</div><div class="rname">정*원 회원 (고3)</div></div>
      <div class="rc"><span class="rb" style="background:#B45309">당일 설치</span><div class="rstar">★★★★★</div><div class="rtitle">문의한 당일 설치 완료!</div><div class="rtext">오전에 전화했더니 오후에 설치 완료해주셨어요. 다음 날부터 바로 카드결제 영업했습니다.</div><div class="rname">전*빈 회원 고객</div></div>
      <div class="rc"><span class="rb" style="background:#0F766E">무인화 성공</span><div class="rstar">★★★★★</div><div class="rtitle">무인매장 전환 성공!</div><div class="rtext">무인결제기+CCTV+출입관리 한번에 설치하고 24시간 무인 운영 중입니다. 월 매출 30% 증가!</div><div class="rname">박*준 회원 (중3)</div></div>
      <div class="rc"><span class="rb" style="background:#BE185D">A/S 만족</span><div class="rstar">★★★★★</div><div class="rtitle">매출이 먼저 설치하겠다고 해요</div><div class="rtext">포스기 오류 났을 때 전화하니 2시간 내에 기사분이 오셔서 해결해주셨어요. 이런 A/S는 처음입니다.</div><div class="rname">최*아 회원 고객</div></div>
      <!-- 루프 복제 -->
      <div class="rc"><span class="rb" style="background:#1D4ED8">매출 40%↑</span><div class="rstar">★★★★★</div><div class="rtitle">6개월 만에 매장 환경 4단계 → 1단계</div><div class="rtext">수수료 비교까지 해주셔서 연간 60만원 절약하고 매출도 올랐어요.</div><div class="rname">이*윤 회원 (고2)</div></div>
      <div class="rc"><span class="rb" style="background:#15803D">인건비 50%↓</span><div class="rstar">★★★★★</div><div class="rtitle">수시 사장님부로 인건비 50%↓!</div><div class="rtext">테이블오더+키오스크 설치로 홀 직원 2명→1명으로 줄이고도 서비스 품질 유지.</div><div class="rname">김*연 회원 (고3)</div></div>
      <div class="rc"><span class="rb" style="background:#7C3AED">수수료 절감</span><div class="rstar">★★★★★</div><div class="rtitle">유지보수 2단계 → 만점!</div><div class="rtext">올페이스토어 덕분에 제 매장 환경이 어떤지 정확히 알고 집중 공략할 수 있었습니다.</div><div class="rname">정*원 회원 (고3)</div></div>
      <div class="rc"><span class="rb" style="background:#B45309">당일 설치</span><div class="rstar">★★★★★</div><div class="rtitle">문의한 당일 설치 완료!</div><div class="rtext">오전에 전화했더니 오후에 설치 완료해주셨어요. 다음 날부터 바로 카드결제 영업했습니다.</div><div class="rname">전*빈 회원 고객</div></div>
      <div class="rc"><span class="rb" style="background:#0F766E">무인화 성공</span><div class="rstar">★★★★★</div><div class="rtitle">무인매장 전환 성공!</div><div class="rtext">무인결제기+CCTV+출입관리 한번에 설치하고 24시간 무인 운영 중입니다. 월 매출 30% 증가!</div><div class="rname">박*준 회원 (중3)</div></div>
      <div class="rc"><span class="rb" style="background:#BE185D">A/S 만족</span><div class="rstar">★★★★★</div><div class="rtitle">매출이 먼저 설치하겠다고 해요</div><div class="rtext">포스기 오류 났을 때 전화하니 2시간 내에 기사분이 오셔서 해결해주셨어요. 이런 A/S는 처음입니다.</div><div class="rname">최*아 회원 고객</div></div>
    </div>
  </div>
</section>

<!-- SPECIAL -->
<section class="special">
  <div class="sw">
    <div class="sh fu">
      <div class="se">WHY ALLPAYSTORE</div>
      <h2 class="st">우리 매장 매출,<br><span class="hl">왜 올페이스토어인가요?</span></h2>
      <p class="u5">단순한 장비 판매가 아닙니다. 현장 진단부터 설치, A/S까지 매장의 성장을 함께 책임집니다.</p>
    </div>
    <div class="spg fu">
      <div class="spc"><div class="spi ic1">🎯</div><div class="spt"><h4>매장 업종별 1:1 맞춤 설치</h4><p>음식점·카페·편의점·소매점·미용실 등 업종별 최적 장비를 분석해 맞춤 설치합니다.</p></div></div>
      <div class="spc"><div class="spi ic2">🔍</div><div class="spt"><h4>전 제품 원스톱 통합 설치</h4><p>카드단말기·포스기·키오스크·CCTV·테이블오더 등 매장에 필요한 모든 장비를 한번에 설치합니다.</p></div></div>
      <div class="spc"><div class="spi ic3">🧠</div><div class="spt"><h4>AI 기반 매출 분석 시스템</h4><p>100만 건의 설치 데이터를 기반으로 업종·상권별 최적 장비 구성과 매출 향상 전략을 제안합니다.</p></div></div>
      <div class="spc"><div class="spi ic4">📆</div><div class="spt"><h4>설치 후 A/S·유지보수 보장</h4><p>학사일정·시험 일정에 맞춰 역산 계획표를 설계하고 매주 실천 여부를 함께 점검합니다.</p></div></div>
    </div>
  </div>
</section>

<!-- DIAGNOSIS -->
<section class="diagnosis">
  <div class="sw">
    <div class="sh fu">
      <div class="se">FREE DIAGNOSIS</div>
      <h2 class="st">매장 설비 무료 진단<br><span class="hl">어떤 장비가 필요한지 확인하세요</span></h2>
      <p style="font-size:14px;color:var(--text-muted);margin-top:12px;line-height:1.7;word-break:keep-all">설치부터 진로, 사장님 코칭까지<br>무료 현장 진단을 신청하시면 상세 리포트를 제공합니다.</p>
    </div>
    <div class="diag-grid fu">
      <div class="diag-card dc1">
        <span class="diag-badge db1">무료 진단</span>
        <span class="diag-icon">📊</span>
        <div class="diag-title">매장환경 진단</div>
        <div class="diag-desc">매장 면적·업종·유동인구를 분석해 최적 설비를 추천합니다.</div>
        <div class="diag-tags"><span class="diag-tag">매장 업종 분석</span><span class="diag-tag">설치 동기 분석</span><span class="diag-tag">설치 요인</span></div>
      </div>
      <div class="diag-card dc2">
        <span class="diag-badge db2">무료 진단</span>
        <span class="diag-icon">✅</span>
        <div class="diag-title">결제환경 진단</div>
        <div class="diag-desc">카드결제·간편결제·현금 비율을 분석해 최적 단말기를 추천합니다.</div>
        <div class="diag-tags"><span class="diag-tag">자기주도성</span><span class="diag-tag">계획 수립</span><span class="diag-tag">자기평가</span></div>
      </div>
      <div class="diag-card dc3">
        <span class="diag-badge db3">프리미엄</span>
        <span class="diag-icon">💼</span>
        <div class="diag-title">수수료 비교 분석</div>
        <div class="diag-desc">VAN사·PG사별 수수료를 비교 분석해 최저 수수료 솔루션을 찾아드립니다.</div>
        <div class="diag-tags"><span class="diag-tag">직업 성격 유형</span><span class="diag-tag">진로 탐색</span><span class="diag-tag">전공 계열</span></div>
      </div>
      <div class="diag-card dc4">
        <span class="diag-badge db4">프리미엄</span>
        <span class="diag-icon">📐</span>
        <div class="diag-title">매장동선 분석</div>
        <div class="diag-desc">매장 내 고객 동선을 분석해 키오스크·단말기 최적 배치를 설계합니다.</div>
        <div class="diag-tags"><span class="diag-tag">매장유형</span><span class="diag-tag">투자의지</span><span class="diag-tag">운영스타일</span></div>
      </div>
      <div class="diag-card dc5">
        <span class="diag-badge db5">프리미엄</span>
        <span class="diag-icon">🎓</span>
        <div class="diag-title">매출향상 시뮬레이션</div>
        <div class="diag-desc">설비 도입 후 예상 매출 향상률과 인건비 절감 효과를 시뮬레이션합니다.</div>
        <div class="diag-tags"><span class="diag-tag">고교 합격 진단</span><span class="diag-tag">대학 합격 예측</span><span class="diag-tag">수시·정시</span></div>
      </div>
      <div class="diag-card dc6">
        <span class="diag-badge db6">프리미엄</span>
        <span class="diag-icon">👨‍👩‍👧</span>
        <div class="diag-title">경쟁매장 분석</div>
        <div class="diag-desc">주변 경쟁 매장의 설비 현황을 분석해 차별화 전략을 수립합니다.</div>
        <div class="diag-tags"><span class="diag-tag">양육 스타일</span><span class="diag-tag">의사소통 분석</span><span class="diag-tag">관계 점검</span></div>
      </div>
    </div>

  </div>
</section>

<!-- FOOTER -->

<script>
function switchFind(tab){
  ['region','subject','academy','conv'].forEach(function(t){
    var panel = document.getElementById('fpanel-'+t);
    var btn = document.getElementById('ftab-'+t);
    if(t===tab){
      panel.style.display='block';
      btn.style.background='#3B82F6';btn.style.color='white';btn.style.borderColor='#3B82F6';
    }else{
      panel.style.display='none';
      btn.style.background='white';btn.style.color='#374151';btn.style.borderColor='#E5E7EB';
    }
  });
  var cbtn = document.getElementById('ftab-contact');
  if(cbtn){ cbtn.style.background='white';cbtn.style.color='#1D4ED8';cbtn.style.borderColor='#1D4ED8'; }
}
</script>
<script>
(function(){
  var floats = document.getElementById('floats');
  var footer = document.querySelector('footer');
  if(!footer) return;
  function adjustFloats(){
    try {
      if(!floats || !footer) return;
      var footerTop = footer.getBoundingClientRect().top;
      var windowH = window.innerHeight;
      if(footerTop < windowH){
        floats.style.bottom = (windowH - footerTop + 60) + 'px';
      } else {
        floats.style.bottom = '60px';
      }
    } catch(e){}
  }
  window.addEventListener('scroll', adjustFloats, {passive:true});
  window.addEventListener('resize', adjustFloats, {passive:true});
  adjustFloats();
})();
</script>
<script>
function toggleMobileMenu(){
  const m=document.getElementById('mobMenu');
  const b=document.getElementById('hburg');
  if(m)m.classList.toggle('on');
  if(b)b.classList.toggle('on');
}

function switchTab(menu,tab){
  document.querySelectorAll('#mega-'+menu+' .mega-tab').forEach((t,i)=>t.classList.remove('on'));
  document.querySelectorAll('#mega-'+menu+' .mega-panel').forEach(p=>p.classList.remove('on'));
  event.target.classList.add('on');
  const panel=document.getElementById(menu+'-'+tab);
  if(panel)panel.classList.add('on');
}

(function(){
  const vcEl=document.getElementById('vc');
  if(vcEl){
    let cnt=353112;
    setInterval(()=>{cnt+=Math.floor(Math.random()*3);vcEl.textContent=cnt.toLocaleString('ko-KR')+'명';},3000);
  }
  const hsEl=document.getElementById('hs');
  if(hsEl){
    let cur=0;
    window.gs=function(n){cur=n;hsEl.style.transform='translateX(-'+(n*100)+'%)';document.querySelectorAll('.hdot').forEach((d,i)=>d.classList.toggle('on',i===n));};
    setInterval(()=>window.gs((cur+1)%3),4500);
  }
  try{
    const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});},{threshold:0.15});
    document.querySelectorAll('.fu').forEach(el=>obs.observe(el));
  }catch(e){}
})();
</script>`;
  return wrap('올페이스토어 | 전국 1:1 맞춤 설치·설치 업체 정보','전국 초·중·고 1:1 맞춤 설치 플랫폼. 검증된 설치 기사 빠르게 배정. 카드단말기·포스기·키오스크·CCTV·CCTV 방문카드단말기 설치. 무료상담 010-9876-8282','/',body,[]);
}



// ── 사이트맵 ──────────────────────────────────────────────

function serveSitemap() {
  const today = new Date().toISOString().slice(0,10);
  const url = (loc, freq, pri) =>
    `<url><loc>https://allpaystore.com${loc}</loc><lastmod>${today}</lastmod><changefreq>${freq}</changefreq><priority>${pri}</priority></url>`;

  const urls = [
    url('/', 'daily', '1.0'),
    url('/academy/intro', 'monthly', '0.8'),
    url('/academy/all', 'weekly', '0.7'),
    url('/contact', 'monthly', '0.6')];

  // 전국 REGIONS 동별 × 과목 (sitemap)
  const DONG_GRADES = ['elementary','middle','high'];
  for (const [dongEn, data] of Object.entries(DONG_DB)) {
    const [ , sidoEn, guEn] = data;
    for (const gk of DONG_GRADES) {
      for (const sk of Object.keys(SUBJECTS)) {
        urls.push(url(`/${sidoEn}/${guEn}/${dongEn}/${gk}/${SUBJECT_EN[sk]||sk}`, 'monthly', '0.7'));
      }
    }
  }

  // 전국 시도·구군 페이지
  for (const [sido, r] of Object.entries(REGIONS)) {
    const sidoEn = SIDO_EN[sido]||sido;
    urls.push(url(`/${sidoEn}`, 'weekly', '0.7'));
    for (const ak of Object.keys(r.areas)) {
      const distEn = DISTRICT_EN[ak]||ak;
      urls.push(url(`/${sidoEn}/${distEn}`, 'weekly', '0.7'));
      for (const gk of Object.keys(GRADES)) {
        for (const sk of Object.keys(SUBJECTS)) {
          urls.push(url(`/${sidoEn}/${distEn}/${GRADE_EN[gk]||gk}/${SUBJECT_EN[sk]||sk}`, 'monthly', '0.6'));
        }
      }
    }
  }

  // sitemap 50,000개 제한 → 분할 반환
  const CHUNK = 49000;
  const idx = Math.floor((urls.length / CHUNK));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

function serveSitemapIndex() {
  const today = new Date().toISOString().slice(0,10);
  // 시도별 sitemap + 정적 sitemap
  const LARGE_SIDO = ['seoul','gyeonggi','gyeongbuk','jeonnam','jeonbuk','gyeongnam','gyeonggi']; // 8,000개 이상 → 2분할
  const sidoList = Object.keys(REGIONS).map(s => SIDO_EN[s]||s);
  const sitemapEntries = [
    `<sitemap><loc>https://allpaystore.com/sitemap-static.xml</loc><lastmod>${today}</lastmod></sitemap>`,
    ...sidoList.flatMap(se =>
      LARGE_SIDO.includes(se)
        ? [`<sitemap><loc>https://allpaystore.com/sitemap-${se}-1.xml</loc><lastmod>${today}</lastmod></sitemap>`,
           `<sitemap><loc>https://allpaystore.com/sitemap-${se}-2.xml</loc><lastmod>${today}</lastmod></sitemap>`]
        : [`<sitemap><loc>https://allpaystore.com/sitemap-${se}.xml</loc><lastmod>${today}</lastmod></sitemap>`]
    )
  ];
  const sitemaps = sitemapEntries.join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}</sitemapindex>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } }
  );
}

function serveSitemapByKey(key) {
  // key: sido 영문키 or 'static'
  const today = new Date().toISOString().slice(0,10);
  const u = (loc) => `<url><loc>https://allpaystore.com${loc}</loc><lastmod>${today}</lastmod><changefreq>${loc.split('/').filter(Boolean).length<=2?'weekly':'monthly'}</changefreq><priority>${loc.split('/').filter(Boolean).length<=2?'0.8':loc.split('/').filter(Boolean).length===3?'0.8':'0.7'}</priority></url>`;
  
  const parts = [];
  
  if(key === 'static'){
    parts.push(u('/'));
    parts.push(u('/academy/intro'));
    parts.push(u('/academy/all'));
    parts.push(u('/contact'));
  } else {
    // key 파싱: sido 영문키 (예: seoul, gyeonggi-1, gyeonggi-2)
    const baseKey = key.replace(/-[12]$/, '');
    const part = key.endsWith('-1') ? 1 : key.endsWith('-2') ? 2 : 0; // 0=전체
    
    let targetSido = null;
    for(const [sido] of Object.entries(REGIONS)){
      if((SIDO_EN[sido]||sido) === baseKey){ targetSido = sido; break; }
    }
    if(!targetSido) return null;
    
    const reg = REGIONS[targetSido];
    const se = baseKey;
    const GRADES3 = ['elementary','middle','high'];
    const subjKeys = Object.keys(SUBJECTS);
    const areaEntries = Object.entries(reg.areas);
    
    // 분할 필요한 시도(서울/경기): part=1→전반, part=2→후반
    const half = Math.ceil(areaEntries.length / 2);
    const targetEntries = part === 1 ? areaEntries.slice(0, half)
                        : part === 2 ? areaEntries.slice(half)
                        : areaEntries;
    
    if(part === 0 || part === 1) parts.push(u(`/${se}`));
    for(const [ak,area] of targetEntries){
      const ge = DISTRICT_EN[ak]||ak;
      parts.push(u(`/${se}/${ge}`));
      for(const dong of (area.dongs||[])){
        const dr = toRoman(dong);
        parts.push(u(`/${se}/${ge}/${dr}`));
        for(const g of GRADES3){
          for(const sk of subjKeys){
            parts.push(u(`/${se}/${ge}/${dr}/${g}/${SUBJECT_EN[sk]||sk}`));
          }
        }
      }
      // 업종별 설치 URL 추가
      const gugunSchools = SCHOOL_MAP[se]?.[ak];
      if(gugunSchools){
        for(const [grade, names] of Object.entries(gugunSchools)){
          if(!Array.isArray(names)) continue;
          for(const shortName of names){
            const sr = toRoman(shortName);
            parts.push(u(`/school/${se}/${ge}/${sr}`));
            for(const sk of subjKeys){
              parts.push(u(`/school/${se}/${ge}/${sr}/${SUBJECT_EN[sk]||sk}`));
            }
          }
        }
      }
    }
  }
  
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${parts.join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } }
  );
}

function serveSitemapChunk(chunkNum) {
  // 하위 호환성 유지
  return serveSitemapByKey('static');
}


// ── RSS 피드 ──────────────────────────────────────────────

function serveRSS() {
  const now = new Date();
  const pubDate = now.toUTCString();
  const isoDate = now.toISOString();

  // 주요 지역 × 업종 × 과목 조합으로 최신 매장템 생성 (50개)
  const items = [];

  // 강남구 동별 최신 매장템
  const dongSamples = ['대치동','압구정동','역삼동','청담동','개포동'];
  for (const dong of dongSamples) {
    for (const sk of ['카드단말기','포스기']) {
      items.push({
        title: `${dong} 대형매장 ${sk}카드단말기 설치 | 강남구 ${dong} 맞춤 전문 설치`,
        link: `https://allpaystore.com/seoul/gangnam/${DONG_EN[dong]||dong}/high/${SUBJECT_EN[sk]||sk}`,
        desc: `강남구 ${dong} 대형매장 ${sk}카드단말기 설치 전문. 매장 환경·유지보수 시공 사례 분석 검증 전문가. 1:1 맞춤 설치. 무료 현장 진단 010-9876-8282`,
      });
    }
  }

  // 주요 시도 × 대표 구/군 × 카드단말기/포스기 매장템
  const featured = [
    ['서울','강남구'],['서울','서초구'],['서울','송파구'],['서울','노원구'],['서울','양천구'],
    ['경기','성남시'],['경기','수원시'],['경기','용인시'],['경기','고양시'],['경기','화성시'],
    ['인천','연수구'],['인천','부평구'],['부산','해운대구'],['부산','동래구'],
    ['대구','수성구'],['광주','서구'],['대전','유성구'],['울산','남구'],
    ['충남','천안시'],['전북','전주시'],['경북','포항시'],['경남','창원시']];
  for (const [sido, ak] of featured) {
    for (const sk of ['카드단말기','포스기']) {
      items.push({
        title: `${ak} 대형매장 ${sk}카드단말기 설치 | ${REGIONS[sido].label} ${ak} 1:1 맞춤 설치`,
        link: `https://allpaystore.com/${SIDO_EN[sido]||sido}/${DISTRICT_EN[ak]||ak}/high/${SUBJECT_EN[sk]||sk}`,
        desc: `${ak} 대형매장 ${sk}카드단말기 설치 전문. ${REGIONS[sido].areas[ak].schools} 시공 사례 분석. 검증 전문가 1:1 맞춤 설치. 무료 현장 진단 010-9876-8282`,
      });
    }
  }

  const itemXml = items.slice(0, 50).map(it => `
  <item>
    <title><![CDATA[${it.title}]]></title>
    <link>${it.link}</link>
    <description><![CDATA[${it.desc}]]></description>
    <pubDate>${pubDate}</pubDate>
    <guid isPermaLink="true">${it.link}</guid>
  </item>`).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>올페이스토어 - 전국 지역별 설치 안내</title>
    <link>https://allpaystore.com</link>
    <description>전국 초·중·고 1:1 맞춤 설치 전문. 카드단말기·포스기·키오스크·CCTV·CCTV 검증 기사 배정.</description>
    <language>ko</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="https://allpaystore.com/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>contact@allpaystore.com (올페이스토어)</managingEditor>
    <webMaster>contact@allpaystore.com (올페이스토어)</webMaster>
    <ttl>720</ttl>${itemXml}
  </channel>
</rss>`;

  return new Response(rss, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

// ── 라우터 ────────────────────────────────────────────────

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);
    const rawParts = path.split('/').filter(Boolean);

    // ── 구버전 URL 호환 처리 ──────────────────────────────────
    // 1. 업종 통합키 → 세분화 (high→high2, middle→mid2, elementary→elem5)
    const GRADE_COMPAT = {'high':'high2','middle':'mid2','elementary':'elem5','대형매장':'high2','중형매장':'mid2','소규모매장':'elem5'};
    // 2. 한글 동 이름 → 영문키
    const parts = rawParts.map((p, i) => {
      // 3번째 파트(동 이름)가 한글이면 영문으로 변환
      if (i === 2 && DONG_EN[p]) return DONG_EN[p];
      // 업종 파트 호환
      if (GRADE_COMPAT[p]) return GRADE_COMPAT[p];
      return p;
    });
    const h = { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache', 'Expires': '0' };

    // ── 문의 API ──────────────────────────────────────
    if (path === '/api/contact' && request.method === 'POST') {
      const corsHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      };
      try {
        const body = await request.json();
        const { name, grade, phone, address, message } = body;
        if (!name || !grade || !phone || !address || !message) {
          return new Response(JSON.stringify({ ok: false, error: '필수 항목 누락' }), { headers: corsHeaders });
        }

        // Google Apps Script로 전송 (시트 기록 + 네이버 메일 발송)
        const GAS_URL = 'https://script.google.com/macros/s/AKfycbz3FYy6m02GJZHmVFuinxZov4W_QYGmXzftq_Q43Z-KwXklWPvu1Y23dUcHdsa2itKG/exec';
        const gasRes = await fetch(GAS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, grade, phone, address, message })
        });
        const gasData = await gasRes.json();
        if (gasData.ok) {
          return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders });
        } else {
          console.error('GAS error:', gasData.error);
          return new Response(JSON.stringify({ ok: false, error: gasData.error }), { headers: corsHeaders });
        }
      } catch (e) {
        console.error('contact api error:', e);
        return new Response(JSON.stringify({ ok: false, error: e.message }), { headers: corsHeaders });
      }
    }

    // 제품별 카드단말기 설치 정보 페이지
    if(path.startsWith('/subject/')){const subEn=path.slice(9).split('/')[0];if(subEn){const p=makeSubjectPage(subEn);if(p)return new Response(p,{headers:h});}}
    if (path.startsWith('/grade/')) {
      const parts = path.slice(7).split('/').filter(Boolean);
      // /grade/{type}/{num} → 예: /grade/elementary/1
      if (parts.length === 2) {
        const page = makeGradePage(parts[0], parts[1]);
        if (page) return new Response(page, {headers:h});
      }
    }
    // 업종별 설치 페이지 라우팅
    if (path.startsWith('/school')) {
      const parts = path.slice(1).split('/').filter(Boolean);
      // /school → 전체 목록
      // /school/{sidoEn} → 시도별 학교 목록
      // /school/{sidoEn}/{gugunRoman} → 구군별 학교 목록
      // /school/{sidoEn}/{gugunRoman}/{schoolRoman} → 학교 메인
      // /school/{sidoEn}/{gugunRoman}/{schoolRoman}/{subjectEn} → 학교+과목

      if (parts.length === 1) {
        // /school → 시도 선택 페이지
        const page = makeSchoolIndexPage();
        if (page) return new Response(page, {headers:h});
      } else if (parts.length === 2) {
        // /school/{sidoEn} → 시도별 구군 목록
        const page = makeSchoolSidoPage(parts[1]);
        if (page) return new Response(page, {headers:h});
      } else if (parts.length === 3) {
        // /school/{sidoEn}/{gugunRoman} → 구군별 학교 목록
        const page = makeSchoolGugunPage(parts[1], parts[2]);
        if (page) return new Response(page, {headers:h});
      } else if (parts.length >= 4) {
        const [, sidoEn, gugunRoman, schoolRoman, subjectEn] = parts;
        const grades = ['E','M','H'];
        if (subjectEn) {
          for (const g of grades) {
            const page = makeSchoolSubjectPage(sidoEn, gugunRoman, schoolRoman, g, subjectEn);
            if (page) return new Response(page, {headers:h});
          }
        } else {
          for (const g of grades) {
            const page = makeSchoolMainPage(sidoEn, gugunRoman, schoolRoman, g);
            if (page) return new Response(page, {headers:h});
          }
        }
      }
    }
    if (path === '/sitemap.xml') return serveSitemapIndex();
    // 시도별 sitemap: /sitemap-seoul.xml, /sitemap-static.xml 등
    const sitemapMatch = path.match(/^\/sitemap-([a-z0-9_-]+)\.xml$/);
    if (sitemapMatch) {
      const result = serveSitemapByKey(sitemapMatch[1]);
      if (result) return result;
    }
    // 하위 호환: /sitemap1.xml ~ /sitemap27.xml
    if (path.match(/^\/sitemap\d+\.xml$/)) {
      const n = parseInt(path.match(/\d+/)[0]);
      return serveSitemapChunk(n);
    }
    if (path === '/rss.xml' || path === '/feed' || path === '/feed.xml') return serveRSS();

    // 문의하기
    if (path === '/contact') { const ctype = url.searchParams.get('type') || 'tutoring'; return new Response(makeContactPage(ctype), { headers: h }); }

    // 대리점소개

    // 설치 업체 찾기
    if (path.startsWith('/academy/school/')) {
      // /academy/school/{grade}/{slug}           → 학교 인덱스 (제품 선택)
      // /academy/school/{grade}/{slug}/{subject} → 과목별 전용 페이지
      const parts2 = path.slice(16).split('/');
      if (parts2.length >= 2) {
        const grade = parts2[0].toUpperCase();
        const schoolSlug = parts2[1];
        const subject = parts2[2] || null; // 'math','english' 등
        if (['E','M','H'].includes(grade) && schoolSlug) {
          if (subject) {
            const p = makeCenterSchoolSubjectPage(grade, schoolSlug, subject);
            if (p) return new Response(p, {headers:h});
          } else {
            const p = makeCenterSchoolPage(grade, schoolSlug);
            if (p) return new Response(p, {headers:h});
          }
        }
      }
    }
    if (path.startsWith('/academy/center/')) {
      const slug = path.slice(16).split('/')[0];
      if (slug) {
        const p = makeCenterPage(slug);
        if (p) return new Response(p, {headers:h});
      }
    }
    if (path === '/favicon.ico' || path === '/favicon-32.png' || path === '/favicon-16.png') {
      // 올페이스토어 파비콘 - 파란 배경에 흰색 S 매장콘 SVG → PNG 변환
      const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="#1D4ED8"/>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" transform="translate(6,6) scale(0.75)"/>
      </svg>`;
      return new Response(svgFavicon, {headers:{'Content-Type':'image/svg+xml','Cache-Control':'public,max-age=86400'}});
    }
    if (path === '/apple-touch-icon.png') {
      const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
        <rect width="180" height="180" rx="40" fill="#0F2044"/>
        <path d="M90 20L20 55l70 35 70-35-70-35zM20 125l70 35 70-35M20 90l70 35 70-35" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`;
      return new Response(svgIcon, {headers:{'Content-Type':'image/svg+xml','Cache-Control':'public,max-age=86400'}});
    }
    if (path === '/logo.png' || path === '/og-image.png') {
      // 구글 검색결과 로고 / OG 이미지
      const isOg = path === '/og-image.png';
      const w = isOg ? 1200 : 200;
      const h = isOg ? 630 : 60;
      const svgLogo = isOg
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
            <rect width="${w}" height="${h}" fill="#0F2044"/>
            <rect x="60" y="215" width="1080" height="200" rx="20" fill="rgba(255,255,255,0.05)"/>
            <circle cx="120" cy="315" r="60" fill="#1D4ED8"/>
            <path d="M120 275L80 295l40 20 40-20-40-20zM80 335l40 20 40-20M80 315l40 20 40-20" stroke="white" stroke-width="8" stroke-linecap="round" fill="none"/>
            <text x="200" y="300" font-family="Arial,sans-serif" font-size="52" font-weight="900" fill="white"><tspan fill="#60A5FA">올케어</tspan>스터디</text>
            <text x="200" y="360" font-family="Arial,sans-serif" font-size="28" fill="rgba(255,255,255,0.7)">전국 1:1 맞춤 설치·설치 업체 정보 No.1</text>
            <text x="200" y="420" font-family="Arial,sans-serif" font-size="22" fill="rgba(255,255,255,0.5)">allpaystore.com · 010-9876-8282</text>
          </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
            <rect width="${w}" height="${h}" rx="8" fill="white"/>
            <circle cx="30" cy="30" r="24" fill="#1D4ED8"/>
            <path d="M30 10L12 19l18 9 18-9-18-9zM12 37l18 9 18-9M12 28l18 9 18-9" stroke="white" stroke-width="3.5" stroke-linecap="round" fill="none"/>
            <text x="62" y="22" font-family="Arial,sans-serif" font-size="14" font-weight="900" fill="#60A5FA">올케어</text>
            <text x="62" y="22" font-family="Arial,sans-serif" font-size="14" font-weight="900" fill="#0F2044" dx="42">스터디</text>
            <text x="62" y="40" font-family="Arial,sans-serif" font-size="9" fill="#6B7280">ALLCARE STUDY</text>
          </svg>`;
      return new Response(svgLogo, {headers:{'Content-Type':'image/svg+xml','Cache-Control':'public,max-age=86400'}});
    }
    if (path === '/robots.txt') return new Response('User-agent: *\nAllow: /\n\nUser-agent: Yeti\nAllow: /\nCrawl-delay: 1\n\nSitemap: https://allpaystore.com/sitemap.xml\nSitemap: https://allpaystore.com/rss.xml', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

    // 홈
    if (parts.length === 0) return new Response(makeHomePage(), { headers: h });

    // 영문 URL 파싱
    // /seoul/gangnam/daichi/high/math (5단계 - 동 포함)
    // /{sido}/{gu}/{dong}/{grade}/{subject} (5단계 - 전국 동별 페이지)
    if (parts.length === 5) {
      const dongEn = parts[2];
      // 구버전 업종키 정규화: elem1~elem6→elementary, mid1~mid3→middle, high1~high3→high
      const rawGrade = parts[3];
      const gradeEn = /^elem/.test(rawGrade) ? 'elementary' : /^mid/.test(rawGrade) ? 'middle' : /^high[123]$/.test(rawGrade) ? 'high' : rawGrade;
      const subjectEn = parts[4];
      // 로마자 슬러그 → 한글 동이름 역변환 후 페이지 생성
      {
        const dongName = fromRoman(parts[0], parts[1], dongEn);
        if (dongName) {
          const page = makeDongPageByName(parts[0], parts[1], dongName, subjectEn, gradeEn);
          if (page) return new Response(page, { headers: h });
        }
      }

    }

    // /seoul/gangnam/high/math (4단계)    // /seoul/gangnam/high/math (4단계)
    if (parts.length === 4) {
      const kr = toKr(parts[0], parts[1], null, parts[2], parts[3]);
      const page = makeArticlePage(kr.sido, kr.district, kr.grade, kr.subject);
      if (page) return new Response(page, { headers: h });
    }

    // /sidoEn/guEn/dongRoman (3단계 - 동 메인 페이지) 또는 /sido/gu/grade (구버전)
    if (parts.length === 3) {
      // 동 메인 페이지 먼저 시도 (로마자 → 한글 역변환)
      const dongName3 = fromRoman(parts[0], parts[1], parts[2]);
      if (dongName3) {
        const page = makeDongMainPage(parts[0], parts[1], dongName3);
        if (page) return new Response(page, { headers: h });
      }
      // 구버전 호환: /sido/gu/grade
      const kr = toKr(parts[0], parts[1], null, parts[2], null);
      const rk = kr.sido; const ak = kr.district; const gk = kr.grade;
      const region = REGIONS[rk]; const area = region?.areas[ak]; const grade = GRADES[gk];
      if (region && area && grade) {
        const subjLinks = Object.entries(SUBJECTS).map(([s, v]) => {
          const url = enUrl(rk, ak, null, gk, s);
          return `<a class="subj-link" href="${url}"><span>${v.emoji} ${ak} ${gk} ${s}카드단말기 설치</span><span>→</span></a>`;
        }).join('');
        const body = `<div class="wrap">
<div class="bc"><a href="/">홈</a> › <a href="/${SIDO_EN[rk]||rk}">${region.label}</a> › <a href="/${SIDO_EN[rk]||rk}/${DISTRICT_EN[ak]||ak}">${ak}</a> › <span>${gk}</span></div>
<h1 class="art-title">${ak} ${gk} 카드단말기 설치 | 제품 선택</h1>
<div class="art-body"><h2>제품을 선택하세요</h2><div class="subj-grid">${subjLinks}</div></div>
<div class="cta-box"><h3>${ak} ${gk} 맞춤 카드단말기 설치</h3><p>무료 현장 진단 신청</p>
<div class="cta-btns"><a class="btn-p" href="tel:01068348080">📞 010-9876-8282</a><a class="btn-o" href="/contact?type=tutoring">✉️ 카드단말기 설치 상담하기</a></div></div>
</div>`;
        const canon = `/${SIDO_EN[rk]||rk}/${DISTRICT_EN[ak]||ak}/${GRADE_EN[gk]||gk}`;
        const bc3 = [{name:'홈',url:'/'},{name:region.label,url:`/${SIDO_EN[rk]||rk}`},{name:ak,url:`/${SIDO_EN[rk]||rk}/${DISTRICT_EN[ak]||ak}`},{name:`${gk} 카드단말기 설치`,url:canon}];
        const title3 = `${ak} ${gk} 카드단말기 설치 | ${region.label} ${ak} ${grade.label} 카드단말기 설치 - 올페이스토어`;
        const desc3 = `${ak} ${gk} 카드단말기 설치 전문. ${area.schools} 시공 사례 분석. 카드단말기·포스기·키오스크·CCTV·CCTV 1:1 맞춤 설치. 무료 현장 진단 010-9876-8282`;
        return new Response(wrap(title3, desc3, canon, body, bc3), { headers: h });
      }
    }

    // /seoul/gangnam (2단계)
    if (parts.length === 2) {
      const kr = toKr(parts[0], parts[1], null, null, null);
      const page = makeAreaPage(kr.sido, kr.district);
      if (page) return new Response(page, { headers: h });
    }

    // /seoul (1단계)
    if (parts.length === 1) {
      const kr = toKr(parts[0], null, null, null, null);
      const page = makeSidoPage(kr.sido);
      if (page) return new Response(page, { headers: h });
    }

    // 404
    return new Response(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><title>404 - 올페이스토어</title><link rel="stylesheet" href="https://raw.githubusercontent.com/dandylsk80/allpaystore/main/allpaystore.css"></head><body>
${HEADER}<div class="wrap" style="text-align:center;padding-top:80px">
<div style="font-size:64px;margin-bottom:20px">🔍</div>
<h1 class="art-title">페이지를 찾을 수 없습니다</h1>
<p style="color:var(--text-muted);margin-bottom:32px">요청하신 페이지가 없거나 이동되었습니다.</p>
<a href="/" class="btn-p" style="display:inline-block">홈으로 돌아가기</a>
</div>${FOOTER}</body></html>`, { status: 404, headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
  }
};const CSS = ``;





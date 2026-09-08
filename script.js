
/* ===== Sticky header / hamburger menu ===== */
const siteHeader=document.getElementById('siteHeader');
const menuToggle=document.querySelector('.menu-toggle');
const mobileMenu=document.getElementById('mobileMenu');
function setMenu(open){
  if(!siteHeader||!menuToggle||!mobileMenu) return;
  siteHeader.classList.toggle('menu-open',open);
  menuToggle.setAttribute('aria-expanded',String(open));
  mobileMenu.hidden=!open;
  document.body.classList.toggle('menu-lock',open);
}
menuToggle?.addEventListener('click',()=>setMenu(mobileMenu.hidden));
mobileMenu?.addEventListener('click',(e)=>{if(e.target===mobileMenu || e.target.closest('a')) setMenu(false);});
document.addEventListener('keydown',(e)=>{if(e.key==='Escape') setMenu(false);});

const logoFiles=['IMG_4661.PNG','IMG_4662.PNG','IMG_4663.JPG','IMG_4664.PNG','IMG_4665.JPG','IMG_4666.PNG'];
const track=document.getElementById('logoTrack');
const makeLogos=arr=>arr.map(name=>`<div class="logo-item"><img src="assets/logos/${encodeURIComponent(name)}" alt="برند معتبر تهویه مطبوع" loading="lazy" decoding="async"></div>`).join('');
track.innerHTML=makeLogos(logoFiles)+makeLogos(logoFiles);

const DATA={
  builders:{
    tag:'سازندگان و مهندسان پروژه',
    num:'۰۱',
    title:'مهندسی دقیق و تضمین تأمین؛ شریک مطمئن انبوه‌سازان و پیمانکاران',
    text:'ما چالش‌های جدول زمان‌بندی، محدودیت‌های بودجه و حساسیت‌های فنی پروژه‌های بزرگ ساختمانی را می‌شناسیم. با تکیه بر موجودی مستقیم انبار و تیم مهندسی اختصاصی، راهکارهای تهویه مطبوع را مطابق با استانداردهای نظام مهندسی و مقررات ملی ساختمان ارائه می‌دهیم.',
    benefits:[
      'تحلیل و محاسبه بار برودتی/حرارتی دقیق بر اساس نقشه‌های معماری و محاسباتی.',
      'استعلام و مقایسه شفاف پیش‌فاکتورها میان برترین برندهای روز بازار بدون واسطه.',
      'هماهنگی کامل زمان‌بندی تحویل دستگاه‌ها منطبق با مراحل پیشرفت فیزیکی کارگاه.',
      'نظارت مقیم بر اجرای کانال‌کشی، لوله‌کشی مسی و تست هیدرواستاتیک پیش از بتن‌ریزی/کناف.',
      'تحویل چک‌لیست رسمی تست، راه‌اندازی و گارانتی شرکتی جامع پروژه‌ای.'
    ]
  },
  commercial:{
    tag:'فضاهای تجاری و اداری',
    num:'۰۲',
    title:'تهویه پیوسته، مصرف بهینه؛ بدون یک ساعت توقف در جریان کسب‌وکار شما',
    text:'در محیط‌های اداری و تجاری، جریان هوای مطبوع، تهویه کم‌صدا و مصرف بهینه برق نقشی مستقیم در بهره‌وری پرسنل و رضایت مراجعین دارد. سیستم‌های پیشنهادی ما با تمرکز بر اینورترهای هوشمند و حداکثر زیبایی بصری طراحی و اجرا می‌شوند.',
    benefits:[
      'طراحی بدون تداخل با معماری داخلی و حفظ هارمونی سقف‌های کاذب و دکوراتیو.',
      'بهره‌گیری از سیستم‌های فوق کم‌مصرف (Inverter) جهت کاهش محسوس هزینه‌های جاری برق.',
      'اولویت ویژه در پشتیبانی فنی و اعزام تیم سرویس و نگهداری در کمترین زمان ممکن.',
      'سیستم‌های چندمنطقه‌ای (Zone Control) برای کنترل مستقل دمای اتاق‌های مدیریت، جلسات و سالن‌ها.',
      'امکان اجرای کامل فرآیند نصب در ساعات غیرکاری جهت جلوگیری از تعطیلی مجموعه.'
    ]
  },
  residential:{
    tag:'منازل مسکونی و ویلاها',
    num:'۰۳',
    title:'آرامش پایدار، هوای پاک و دمای مطلوب؛ سرمایه‌گذاری برای آسایش خانواده',
    text:'خانه باید مامن آرامش باشد. انتخاب داکت اسپلیت مناسب برای منزل مسکونی یعنی حذف کامل صدای مزاحم، توزیع یکنواخت دما در تمام اتاق‌ها و آسودگی خاطر از بابت مصرف انرژی و طول عمر بالای قطعات.',
    benefits:[
      'مشاوره و کارشناسی حضوری رایگان جهت انتخاب دقیق ظرفیت متناسب با متراژ و اقلیم.',
      'استفاده از بلوورهای کم‌صدا (Super Silent) و عایق‌کاری استاندارد کانال‌ها جهت خواب آرام.',
      'ضمانت اصالت ۱۰۰٪ کمپرسور و قطعات اصلی به همراه گارانتی تعویض معتبر شرکتی.',
      'فیلتراسیون چندلایه ضدغبار و آنتی‌باکتریال مناسب برای کودکان و افراد حساس.',
      'خدمات پس از فروش اختصاصی، تأمین قطعات یدکی فابریک و سرویس‌های دوره‌ای منظم.'
    ]
  }
};

const cards=[...document.querySelectorAll('.persona-card')];
const panel=document.querySelector('#dynamicPanel');
const body=document.querySelector('#panelBody');
const title=document.querySelector('#panelTitle');
const text=document.querySelector('#panelText');
const num=document.querySelector('#panelNumber');
const tag=document.querySelector('#panelTag');
const cta=document.querySelector('#personaCta');

function show(key){
  const d=DATA[key];
  cards.forEach(c=>{
    const active=c.dataset.key===key;
    c.classList.toggle('active',active);
    c.classList.toggle('inactive',!active);
    c.setAttribute('aria-selected',String(active));
  });
  panel.classList.add('active');
  cta.hidden=false;
  body.classList.add('fade');
  window.setTimeout(()=>{
    tag.textContent=d.tag;
    num.textContent=d.num;
    title.textContent=d.title;
    text.textContent=d.text;
    const old=body.querySelector('.benefits');
    if(old) old.remove();
    const ul=document.createElement('ul');
    ul.className='benefits';
    d.benefits.forEach(item=>{
      const li=document.createElement('li');
      li.textContent=item;
      ul.appendChild(li);
    });
    body.appendChild(ul);
    body.classList.remove('fade');
  },180);
}

cards.forEach(card=>card.addEventListener('click',()=>show(card.dataset.key)));

// Initial state: no group is selected. The generic guidance remains visible until the user clicks a card.
cards.forEach(card=>{
  card.classList.remove('active','inactive');
  card.setAttribute('aria-selected','false');
});
panel.classList.remove('active');
cta.hidden=true;

/* ===== CAPACITY CALCULATOR ===== */
const calcTypes={
 residential:{base:420,heights:[['کم',0.94],['متوسط',1],['زیاد',1.08]]},
 office:{base:460,heights:[['کم',0.94],['متوسط',1],['زیاد',1.1]]},
 commercial:{base:520,heights:[['کم',0.93],['متوسط',1],['زیاد',1.12]]},
 industrial:{base:600,heights:[['کم',0.9],['متوسط',1],['زیاد',1.18]]}
};
const businessFactors={'کافه':1.10,'رستوران':1.25,'سوپرمارکت':1.08,'مغازه پوشاک':0.98,'آرایشگاه / سالن زیبایی':1.05,'دفتر کار / اداری':0.98,'داروخانه':1.02,'طلافروشی':1.00,'نانوایی / شیرینی‌فروشی':1.28,'باشگاه ورزشی':1.22};
const industrialFactors={'سوله تولیدی':1.12,'انبار':0.95,'کارگاه':1.08};
const heatFactors={'ندارد':1,'کم':1.12,'زیاد':1.30};
let calcType='residential';
const heightEl=document.getElementById('height'), extra=document.getElementById('extraFields'), form=document.getElementById('capacityForm'), result=document.getElementById('calcResult'), error=document.getElementById('calcError');
function faNum(n){return Number(n).toLocaleString('fa-IR',{maximumFractionDigits:1});}
function renderCalcType(){heightEl.innerHTML=calcTypes[calcType].heights.map(([n,v])=>`<option value="${v}">${n}</option>`).join('');if(calcType==='commercial'){extra.innerHTML=`<div class="extra-grid"><label>نوع کسب‌وکار<select id="business">${Object.keys(businessFactors).map(x=>`<option>${x}</option>`).join('')}</select></label><label>میانگین تعداد نفرات هم‌زمان در فضا<select id="people"><option value="0.94">کم — ۱ تا ۵ نفر</option><option value="1.04">متوسط — ۶ تا ۱۵ نفر</option><option value="1.15">زیاد — بالای ۱۵ نفر</option></select></label></div>`}else if(calcType==='industrial'){extra.innerHTML=`<div class="extra-grid"><label>نوع فضا<select id="industrySpace">${Object.keys(industrialFactors).map(x=>`<option>${x}</option>`).join('')}</select></label><label>وجود منبع حرارتی صنعتی<select id="heat"><option>ندارد</option><option>کم — مانند تجهیزات برقی معمولی</option><option>زیاد — مانند کوره و دستگاه‌های مولد حرارت</option></select></label></div>`}else extra.innerHTML='';}
renderCalcType();
document.querySelectorAll('.calc-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.calc-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');calcType=btn.dataset.type;renderCalcType();result.hidden=true;error.hidden=true;}));
function standardCapacity(t){return [1.5,2,2.5,3,3.5].find(x=>x>=t)||null;}
function reasons(v){const r=[`متراژ ${faNum(v.area)} مترمربع`];const h=v.height<1?'ارتفاع سقف کم':v.height>1.07?'ارتفاع سقف زیاد':'ارتفاع سقف متوسط';const w=v.windows>1.1?'پنجره و شیشه زیاد':v.windows<1?'پنجره و شیشه کم':'پنجره و شیشه متوسط';const ins=v.insulation>1.08?'عایق‌کاری ضعیف':v.insulation<.95?'عایق‌کاری خوب':'عایق‌کاری متوسط';const sun=v.sun>1.08?'آفتاب‌گیری زیاد':v.sun<.96?'آفتاب‌گیری کم':'آفتاب‌گیری معمولی';const walls=v.walls>1.1?'تعداد دیوارهای بیرونی بیشتر':v.walls<1?'قرارگیری میانی':'قرارگیری گوشه/مستقل';return r.concat([h,w,ins,sun,walls]);}
form.addEventListener('submit',e=>{
 e.preventDefault(); error.hidden=true;
 const area=Number(document.getElementById('area').value);
 if(!area||area<=0){error.textContent='لطفاً متراژ فضا را به‌صورت عددی بزرگ‌تر از صفر وارد کنید.';error.hidden=false;return;}
 const v={area,height:Number(heightEl.value),windows:Number(document.getElementById('windows').value),insulation:Number(document.getElementById('insulation').value),sun:Number(document.getElementById('sun').value),walls:Number(document.getElementById('walls').value)};
 let usage=1,extraLabel='',projectLabel='پروژه مسکونی',solutionTitle='داکت اسپلیت متناسب با بار سرمایشی',solutionText='انتخاب مدل و ظرفیت نهایی پس از بررسی شرایط واقعی ساختمان انجام شود.';
 if(calcType==='office'){projectLabel='پروژه اداری';solutionTitle='راهکار داکت اسپلیت با تمرکز بر آسایش و کنترل مصرف';solutionText='برای فضاهای اداری، ظرفیت صحیح و طراحی مناسب توزیع هوا در کنار کنترل مصرف اهمیت دارد.';}
 if(calcType==='commercial'){const b=document.getElementById('business').value;v.business=b;v.people=Number(document.getElementById('people').value);usage=businessFactors[b]*v.people;extraLabel=`نوع کسب‌وکار: ${b}`;projectLabel='پروژه تجاری';solutionTitle='راهکار تهویه متناسب با کاربری تجاری';solutionText='در فضاهای تجاری، بار ناشی از افراد و نوع فعالیت هم‌زمان با مشخصات پوسته ساختمان در انتخاب ظرفیت اثر دارد.';}
 if(calcType==='industrial'){const s=document.getElementById('industrySpace').value;const rawHeat=document.getElementById('heat').value;v.industry=s;v.heat=rawHeat;usage=industrialFactors[s]*(rawHeat.startsWith('زیاد')?1.30:rawHeat.startsWith('کم')?1.12:1);extraLabel=`نوع فضا: ${s}`;projectLabel='پروژه صنعتی';solutionTitle='راهکار ظرفیت‌گذاری برای فضای صنعتی';solutionText='در فضاهای صنعتی، نوع کاربری و منابع حرارتی باید پیش از انتخاب نهایی دستگاه با شرایط واقعی پروژه تطبیق داده شوند.';}
 const finalBTU=v.area*calcTypes[calcType].base*v.height*v.windows*v.insulation*v.sun*v.walls*usage;
 const tons=finalBTU/12000;
 const cap=standardCapacity(tons);
 let html=`<div class="result-hero"><div><span class="result-overline">ENGINEERING OUTPUT</span><strong>گزارش اولیه پروژه</strong><small>${projectLabel}</small></div><span class="result-check">✓</span></div>`;
 html+=`<div class="result-main"><div class="result-stat primary"><span>بار سرمایشی برآوردی</span><strong>${faNum(Math.round(finalBTU))}</strong><em>BTU/h</em></div><div class="result-stat"><span>تناژ خام محاسبه</span><strong>${faNum(tons)}</strong><em>TR</em></div></div>`;
 if(cap){html+=`<div class="recommendation"><div class="rec-icon">⌁</div><div><span>CAPACITY RECOMMENDATION</span><strong>ظرفیت پیشنهادی: ${faNum(cap)} تن</strong><p>نزدیک‌ترین ظرفیت استاندارد بالاتر از مقدار محاسبه‌شده برای این برآورد اولیه.</p></div></div>`;}
 else {const half=tons/2;const c1=standardCapacity(half)||Math.ceil(half*2)/2;const larger=Math.ceil(tons*2)/2;html+=`<div class="recommendation multi"><div class="rec-icon">＋</div><div><span>CAPACITY STRATEGY</span><strong>نیاز به راهکار چنددستگاهی</strong><p>بار محاسبه‌شده از محدوده ۳٫۵ تن عبور کرده است؛ تقسیم بار می‌تواند گزینه‌ای برای بررسی باشد.</p></div></div><div class="split-options"><div class="split-option"><b>۰۱ · دو دستگاه</b><strong>${faNum(c1)} تن + ${faNum(c1)} تن</strong><span>تقسیم بار برای پوشش بهتر فضا</span></div><div class="split-option"><b>۰۲ · یک دستگاه بزرگ‌تر</b><strong>حدود ${faNum(larger)} تن</strong><span>منوط به بررسی مدل و زیرساخت پروژه</span></div></div><div class="three-phase">دستگاه‌های بالای ۳٫۵ تن نیاز به برق سه‌فاز دارند.</div>`;}
 html+=`<div class="solution-card"><div class="solution-head"><span>PROJECT SOLUTION</span><b>راهکار مناسب پروژه</b></div><h3>${solutionTitle}</h3><p>${solutionText}</p><div class="solution-points"><span>ظرفیت‌گذاری بر اساس بار</span><span>تطبیق با کاربری فضا</span><span>بررسی اجرایی پیش از خرید</span></div></div>`;
 const rs=reasons(v);let why=`برآورد بر اساس ${rs.join('، ')} انجام شده است.`;if(extraLabel)why+=` ${extraLabel} نیز در محاسبه اثر داده شده است.`;html+=`<details class="calculation-details"><summary>جزئیات مبنای محاسبه</summary><p>${why}</p></details><div class="result-warning">⚠️ این محاسبه یک برآورد دقیق‌تر بر اساس اطلاعات شماست، ولی جایگزین بازدید کارشناسی نیست. برای تعیین نهایی ظرفیت، همین حالا با ما تماس بگیرید.</div><a class="result-call" href="tel:09152033909"><span>برای تعیین نهایی ظرفیت با ما تماس بگیرید</span><b>۰۹۱۵ ۲۰ ۳۳ ۹۰۹</b></a>`;
 result.innerHTML=html;result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'nearest'});
});

/* Mobile interaction hardening */
window.addEventListener('resize',()=>{
  if(window.innerWidth>820 && mobileMenu && !mobileMenu.hidden) setMenu(false);
});


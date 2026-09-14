
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
const logoAlts={'IMG_4661.PNG':'ایران رادیاتور','IMG_4662.PNG':'جی‌پلاس','IMG_4663.JPG':'ال‌جی','IMG_4664.PNG':'سامسونگ','IMG_4665.JPG':'AUX','IMG_4666.PNG':'گرین'}; const makeLogos=arr=>arr.map(name=>`<div class="logo-item"><img src="assets/logos/${encodeURIComponent(name)}" alt="${logoAlts[name]||'برند تهویه مطبوع'}" loading="lazy" decoding="async"></div>`).join('');
if(track) track.innerHTML=makeLogos(logoFiles)+makeLogos(logoFiles);

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
 residential:{base:420,heights:[['کم (تا ۲٫۶ متر)',0.94],['متوسط (۲٫۶ تا ۳ متر)',1],['زیاد (بالای ۳ متر)',1.08]]},
 office:{base:460,heights:[['کم (تا ۲٫۶ متر)',0.94],['متوسط (۲٫۶ تا ۳ متر)',1],['زیاد (بالای ۳ متر)',1.1]]},
 commercial:{base:520,heights:[['کم (تا ۲٫۶ متر)',0.93],['متوسط (۲٫۶ تا ۳ متر)',1],['زیاد (بالای ۳ متر)',1.12]]},
 industrial:{base:600,heights:[['کم (تا ۳ متر)',0.9],['متوسط (۳ تا ۴٫۵ متر)',1],['زیاد (بالای ۴٫۵ متر)',1.18]]}
};
const businessFactors={'کافه':1.10,'رستوران':1.25,'سوپرمارکت':1.08,'مغازه پوشاک':0.98,'آرایشگاه / سالن زیبایی':1.05,'دفتر کار / اداری':0.98,'داروخانه':1.02,'طلافروشی':1.00,'نانوایی / شیرینی‌فروشی':1.28,'باشگاه ورزشی':1.22};
const industrialFactors={'سوله تولیدی':1.12,'انبار':0.95,'کارگاه':1.08};
const heatFactors={'ندارد':1,'کم':1.12,'زیاد':1.30};
let calcType='residential';
const heightEl=document.getElementById('height'), heightManualEl=document.getElementById('heightManual'),
      windowsEl=document.getElementById('windows'), insulationEl=document.getElementById('insulation'),
      sunEl=document.getElementById('sun'), wallsEl=document.getElementById('walls'),
      extra=document.getElementById('extraFields'), form=document.getElementById('capacityForm'),
      result=document.getElementById('calcResult'), error=document.getElementById('calcError');
function faNum(n){return Number(n).toLocaleString('fa-IR',{maximumFractionDigits:1});}

/* ----- shared option builders: used for the global fields AND for each per-unit form in building mode ----- */
function heightOptionsHTML(type){
  return calcTypes[type].heights.map(([label,factor])=>`<option value="${factor}">${label}</option>`).join('')
    + `<option value="manual">بیشتر / نامتعارف — وارد کردن دستی ارتفاع</option>`;
}
const WINDOWS_OPTIONS_HTML=`<option value="0.95">کم (کمتر از ۱۵٪ سطح دیوار بیرونی)</option><option value="1.05">متوسط (حدود ۱۵ تا ۲۵٪ سطح دیوار)</option><option value="1.18">زیاد (بیش از ۲۵٪ — پنجره‌های بزرگ)</option>`;
const INSULATION_OPTIONS_HTML=`<option value="1.15">ضعیف (بدون عایق یا عایق قدیمی و کم)</option><option value="1">متوسط (عایق استاندارد معمول)</option><option value="0.9">خوب (عایق کامل، دوجداره و به‌روز)</option>`;
const SUN_OPTIONS_HTML=`<option value="0.92">کم‌آفتاب — شمالی (سایه بیشتر ساعات روز)</option><option value="1">معمولی — شرقی یا غربی (آفتاب بخشی از روز)</option><option value="1.12">پُرآفتاب — جنوبی (آفتاب مستقیم بیشتر ساعات روز)</option>`;
const WALLS_OPTIONS_HTML=`<option value="0.96">واحد میانی — ۱ دیوار (بین دو واحد دیگر)</option><option value="1.05">واحد گوشه — ۲ دیوار (نبش یا کنار ساختمان)</option><option value="1.14">مستقل — ۳ تا ۴ دیوار (ویلایی یا نبش کامل)</option>`;
if(windowsEl) windowsEl.innerHTML=WINDOWS_OPTIONS_HTML;
if(insulationEl) insulationEl.innerHTML=INSULATION_OPTIONS_HTML;
if(sunEl) sunEl.innerHTML=SUN_OPTIONS_HTML;
if(wallsEl) wallsEl.innerHTML=WALLS_OPTIONS_HTML;

function attachHeightManualToggle(selectEl,manualEl){
  if(!selectEl||!manualEl) return;
  selectEl.addEventListener('change',()=>{
    manualEl.hidden = selectEl.value!=='manual';
    if(!manualEl.hidden) manualEl.focus();
  });
}
attachHeightManualToggle(heightEl,heightManualEl);

function heightFactorFromManual(meters){ return Math.max(0.8,Math.min(1.5,Number(meters)/2.8)); }
function resolveHeightFactor(selectEl,manualEl){
  if(!selectEl) return 1;
  if(selectEl.value==='manual'){
    const m=Number(manualEl&&manualEl.value);
    if(!manualEl || !manualEl.value || isNaN(m) || m<=0) return null;
    return heightFactorFromManual(m);
  }
  return Number(selectEl.value);
}

/* ----- rooms breakdown: shared helpers for both the single-unit form and each per-unit row ----- */
function renderRoomsList(countEl,listEl){
  const n=Math.max(0,Math.min(12,Number(countEl.value)||0));
  const prevVals=[...listEl.querySelectorAll('.room-area')].map(i=>i.value);
  listEl.innerHTML='';
  for(let i=0;i<n;i++){
    const row=document.createElement('div');
    row.className='room-row';
    row.innerHTML=`<span class="room-row-label">اتاق‌خواب ${faNum(i+1)}</span><input class="room-area" type="number" min="1" inputmode="decimal" placeholder="متراژ (متر مربع)" value="${prevVals[i]||''}">`;
    listEl.appendChild(row);
  }
  return n;
}
function sumRoomAreas(listEl){
  return [...listEl.querySelectorAll('.room-area')].reduce((s,i)=>{const v=Number(i.value);return s+(v>0?v:0);},0);
}

/* ===== SCOPE TOGGLE: single unit vs whole building ===== */
let calcScope='unit';
const scopeUnitBtn=document.getElementById('scopeUnit'), scopeBuildingBtn=document.getElementById('scopeBuilding');
const unitAreaField=document.getElementById('unitAreaField'), buildingUnitsField=document.getElementById('buildingUnitsField');
const roomsBlock=document.getElementById('roomsBlock');
const buildingUnitsList=document.getElementById('buildingUnitsList'), addUnitBtn=document.getElementById('addUnitBtn');
const calcBtnLabel=document.getElementById('calcBtnLabel');
let unitRowCount=0;
function addUnitRow(){
  unitRowCount++;
  const row=document.createElement('div');
  row.className='unit-row';
  row.innerHTML=`
    <div class="unit-row-head">
      <input class="unit-label" type="text" placeholder="مثلاً واحد ${unitRowCount}" value="واحد ${unitRowCount}">
      <input class="unit-area" type="number" min="1" inputmode="decimal" placeholder="متراژ کل واحد (متر مربع)">
      <button type="button" class="unit-expand-btn" aria-expanded="false"><span>تنظیمات و اتاق‌ها</span><i>▾</i></button>
      <button type="button" class="remove-unit-btn" aria-label="حذف واحد">✕</button>
    </div>
    <div class="unit-row-body" hidden>
      <div class="calc-section-title small"><span>اتاق‌خواب‌های این واحد</span><small>یک دستگاه با کانال مشترک برای همه اتاق‌خواب‌های این واحد در نظر گرفته می‌شود؛ برای محاسبه یک‌جای کل واحد، عدد را صفر بگذارید</small></div>
      <label class="rooms-count-field"><span class="field-top">تعداد اتاق‌خواب این واحد</span><input class="unit-roomCount" type="number" min="0" max="12" inputmode="numeric" value="0"></label>
      <div class="rooms-list unit-rooms-list"></div>
      <div class="rooms-auto-readout unit-living-readout" hidden><span>متراژ خودکار حال/پذیرایی/آشپزخانه این واحد</span><strong class="unit-living-auto">—</strong></div>
      <div class="calc-section-title small"><span>مشخصات پوسته این واحد</span><small>در صورتی که این واحد با سایر واحدها فرق دارد، مقادیر را برای همین واحد تغییر دهید</small></div>
      <div class="extra-grid unit-envelope-grid">
        <label>ارتفاع سقف<select class="unit-height"></select><input class="unit-height-manual" type="number" min="2" max="6" step="0.05" inputmode="decimal" placeholder="ارتفاع دقیق (متر)" hidden></label>
        <label>درصد پنجره / شیشه<select class="unit-windows"></select></label>
        <label>کیفیت عایق‌کاری<select class="unit-insulation"></select></label>
        <label>آفتاب‌گیری غالب<select class="unit-sun"></select></label>
        <label>دیوارهای بیرونی<select class="unit-walls"></select></label>
      </div>
    </div>`;

  const uHeight=row.querySelector('.unit-height'), uHeightManual=row.querySelector('.unit-height-manual');
  uHeight.innerHTML=heightOptionsHTML(calcType);
  row.querySelector('.unit-windows').innerHTML=WINDOWS_OPTIONS_HTML;
  row.querySelector('.unit-insulation').innerHTML=INSULATION_OPTIONS_HTML;
  row.querySelector('.unit-sun').innerHTML=SUN_OPTIONS_HTML;
  row.querySelector('.unit-walls').innerHTML=WALLS_OPTIONS_HTML;
  attachHeightManualToggle(uHeight,uHeightManual);

  const uRoomCount=row.querySelector('.unit-roomCount'), uRoomsList=row.querySelector('.unit-rooms-list'),
        uLivingReadout=row.querySelector('.unit-living-readout'), uLivingAuto=row.querySelector('.unit-living-auto'),
        uArea=row.querySelector('.unit-area');
  function updateUnitLiving(){
    const n=Number(uRoomCount.value)||0;
    if(n<=0){ uLivingReadout.hidden=true; return; }
    const totalArea=Number(uArea.value)||0;
    const sumRooms=sumRoomAreas(uRoomsList);
    const living=totalArea-sumRooms;
    uLivingReadout.hidden=false;
    uLivingAuto.textContent = totalArea>0 ? (living>0? faNum(living)+' متر مربع' : 'متراژ اتاق‌ها از کل واحد بیشتر است') : '—';
    uLivingAuto.classList.toggle('is-negative', totalArea>0 && living<=0);
  }
  uRoomCount.addEventListener('input',()=>{renderRoomsList(uRoomCount,uRoomsList);updateUnitLiving();});
  uRoomsList.addEventListener('input',updateUnitLiving);
  uArea.addEventListener('input',updateUnitLiving);

  const expandBtn=row.querySelector('.unit-expand-btn'), body=row.querySelector('.unit-row-body');
  expandBtn.addEventListener('click',()=>{
    const open=body.hidden;
    body.hidden=!open;
    expandBtn.setAttribute('aria-expanded',String(open));
    expandBtn.classList.toggle('open',open);
  });
  row.querySelector('.remove-unit-btn').addEventListener('click',()=>{row.remove();});
  buildingUnitsList.appendChild(row);
}
if(addUnitBtn){addUnitBtn.addEventListener('click',addUnitRow);}
function renderScope(){
  if(calcScope==='building'){
    unitAreaField.hidden=true; if(roomsBlock) roomsBlock.hidden=true; buildingUnitsField.hidden=false;
    scopeBuildingBtn.classList.add('active'); scopeUnitBtn.classList.remove('active');
    calcBtnLabel.textContent='محاسبه تناژ کل ساختمان';
    if(!buildingUnitsList.children.length){addUnitRow();addUnitRow();}
  }else{
    unitAreaField.hidden=false; if(roomsBlock) roomsBlock.hidden=false; buildingUnitsField.hidden=true;
    scopeUnitBtn.classList.add('active'); scopeBuildingBtn.classList.remove('active');
    calcBtnLabel.textContent='اجرای تحلیل مهندسی';
  }
  result.hidden=true; error.hidden=true;
}
if(scopeUnitBtn && scopeBuildingBtn){
  scopeUnitBtn.addEventListener('click',()=>{calcScope='unit';renderScope();});
  scopeBuildingBtn.addEventListener('click',()=>{calcScope='building';renderScope();});
}

/* ----- rooms breakdown wiring: single-unit mode ----- */
const roomCountEl=document.getElementById('roomCount'), roomsListEl=document.getElementById('roomsList'),
      roomsAutoReadout=document.getElementById('roomsAutoReadout'), livingAreaAutoEl=document.getElementById('livingAreaAuto'),
      areaEl=document.getElementById('area');
function updateLivingAutoReadout(){
  if(!roomCountEl||!roomsAutoReadout) return;
  const n=Number(roomCountEl.value)||0;
  if(n<=0){ roomsAutoReadout.hidden=true; return; }
  const totalArea=Number(areaEl.value)||0;
  const sumRooms=sumRoomAreas(roomsListEl);
  const living=totalArea-sumRooms;
  roomsAutoReadout.hidden=false;
  livingAreaAutoEl.textContent = totalArea>0 ? (living>0? faNum(living)+' متر مربع' : 'متراژ اتاق‌ها از کل واحد بیشتر است') : '—';
  livingAreaAutoEl.classList.toggle('is-negative', totalArea>0 && living<=0);
}
if(roomCountEl){
  roomCountEl.addEventListener('input',()=>{renderRoomsList(roomCountEl,roomsListEl);updateLivingAutoReadout();});
  roomsListEl.addEventListener('input',updateLivingAutoReadout);
  areaEl.addEventListener('input',updateLivingAutoReadout);
}
function renderCalcType(){
  heightEl.innerHTML=heightOptionsHTML(calcType);
  if(heightManualEl) heightManualEl.hidden=true;
  if(calcType==='commercial'){extra.innerHTML=`<div class="extra-grid"><label>نوع کسب‌وکار<select id="business">${Object.keys(businessFactors).map(x=>`<option>${x}</option>`).join('')}</select></label><label>میانگین تعداد نفرات هم‌زمان در فضا<select id="people"><option value="0.94">کم — ۱ تا ۵ نفر</option><option value="1.04">متوسط — ۶ تا ۱۵ نفر</option><option value="1.15">زیاد — بالای ۱۵ نفر</option></select></label></div>`}
  else if(calcType==='industrial'){extra.innerHTML=`<div class="extra-grid"><label>نوع فضا<select id="industrySpace">${Object.keys(industrialFactors).map(x=>`<option>${x}</option>`).join('')}</select></label><label>وجود منبع حرارتی صنعتی<select id="heat"><option>ندارد</option><option>کم — مانند تجهیزات برقی معمولی</option><option>زیاد — مانند کوره و دستگاه‌های مولد حرارت</option></select></label></div>`}
  else extra.innerHTML='';
}
renderCalcType();
document.querySelectorAll('.calc-tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.calc-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');calcType=btn.dataset.type;renderCalcType();
  document.querySelectorAll('.unit-height').forEach(sel=>{const cur=sel.value;sel.innerHTML=heightOptionsHTML(calcType);if([...sel.options].some(o=>o.value===cur))sel.value=cur;});
  result.hidden=true;error.hidden=true;
}));
function standardCapacity(t){return [1.5,2,2.5,3,3.5].find(x=>x>=t)||null;}
function reasons(v){const r=[`متراژ ${faNum(v.area)} مترمربع`];const h=v.height<1?'ارتفاع سقف کم':v.height>1.07?'ارتفاع سقف زیاد':'ارتفاع سقف متوسط';const w=v.windows>1.1?'پنجره و شیشه زیاد':v.windows<1?'پنجره و شیشه کم':'پنجره و شیشه متوسط';const ins=v.insulation>1.08?'عایق‌کاری ضعیف':v.insulation<.95?'عایق‌کاری خوب':'عایق‌کاری متوسط';const sun=v.sun>1.08?'آفتاب‌گیری زیاد':v.sun<.96?'آفتاب‌گیری کم':'آفتاب‌گیری معمولی';const walls=v.walls>1.1?'تعداد دیوارهای بیرونی بیشتر':v.walls<1?'قرارگیری میانی':'قرارگیری گوشه/مستقل';return r.concat([h,w,ins,sun,walls]);}
function sharedUsageFactors(){
  let usage=1, extraLabel='';
  if(calcType==='commercial'){const b=document.getElementById('business').value;usage=businessFactors[b]*Number(document.getElementById('people').value);extraLabel=`نوع کسب‌وکار: ${b}`;}
  if(calcType==='industrial'){const s=document.getElementById('industrySpace').value;const rawHeat=document.getElementById('heat').value;usage=industrialFactors[s]*(rawHeat.startsWith('زیاد')?1.30:rawHeat.startsWith('کم')?1.12:1);extraLabel=`نوع فضا: ${s}`;}
  return {usage,extraLabel};
}
function zoneBTU(area,type,h,w,ins,sun,walls,usage){ return area*calcTypes[type].base*h*w*ins*sun*walls*usage; }
function capacityRecommendationHTML(tons){
  const cap=standardCapacity(tons);
  if(cap) return `<div class="recommendation"><div class="rec-icon">⌁</div><div><span>CAPACITY RECOMMENDATION</span><strong>ظرفیت پیشنهادی: ${faNum(cap)} تن</strong><p>نزدیک‌ترین ظرفیت استاندارد بالاتر از مقدار محاسبه‌شده برای این برآورد اولیه.</p></div></div>`;
  const half=tons/2;const c1=standardCapacity(half)||Math.ceil(half*2)/2;const larger=Math.ceil(tons*2)/2;
  return `<div class="recommendation multi"><div class="rec-icon">＋</div><div><span>CAPACITY STRATEGY</span><strong>نیاز به راهکار چنددستگاهی</strong><p>بار محاسبه‌شده از محدوده ۳٫۵ تن عبور کرده است؛ تقسیم بار می‌تواند گزینه‌ای برای بررسی باشد.</p></div></div><div class="split-options"><div class="split-option"><b>۰۱ · دو دستگاه</b><strong>${faNum(c1)} تن + ${faNum(c1)} تن</strong><span>تقسیم بار برای پوشش بهتر فضا</span></div><div class="split-option"><b>۰۲ · یک دستگاه بزرگ‌تر</b><strong>حدود ${faNum(larger)} تن</strong><span>منوط به بررسی مدل و زیرساخت پروژه</span></div></div><div class="three-phase">دستگاه‌های بالای ۳٫۵ تن نیاز به برق سه‌فاز دارند.</div>`;
}
function buildingSubmit(){
  const rows=[...buildingUnitsList.querySelectorAll('.unit-row')];
  if(!rows.length){error.textContent='حداقل یک واحد/طبقه اضافه کنید.';error.hidden=false;return;}
  const {usage}=sharedUsageFactors();
  let totalBTU=0, totalArea=0, rowsHtml='', invalidMsg='';
  rows.forEach((row,i)=>{
    if(invalidMsg) return;
    const label=row.querySelector('.unit-label').value.trim()||`واحد ${i+1}`;
    const area=Number(row.querySelector('.unit-area').value);
    if(!area||area<=0){invalidMsg=`متراژ «${label}» را به‌صورت عددی بزرگ‌تر از صفر وارد کنید.`;return;}

    const uHeight=row.querySelector('.unit-height'), uHeightManual=row.querySelector('.unit-height-manual');
    const heightFactor=resolveHeightFactor(uHeight,uHeightManual);
    if(heightFactor===null){invalidMsg=`لطفاً ارتفاع دقیق سقف «${label}» را به متر وارد کنید.`;return;}
    const windowsFactor=Number(row.querySelector('.unit-windows').value);
    const insulationFactor=Number(row.querySelector('.unit-insulation').value);
    const sunFactor=Number(row.querySelector('.unit-sun').value);
    const wallsFactor=Number(row.querySelector('.unit-walls').value);

    const uRoomCount=row.querySelector('.unit-roomCount');
    const roomN=Number(uRoomCount.value)||0;
    let sumRooms=0, livingArea=area, splitMode=false;
    if(roomN>0){
      const roomInputs=[...row.querySelectorAll('.unit-rooms-list .room-area')];
      const bad=roomInputs.length<roomN || roomInputs.some(inp=>!inp.value||Number(inp.value)<=0);
      if(bad){invalidMsg=`متراژ همه اتاق‌خواب‌های «${label}» را عددی و بزرگ‌تر از صفر وارد کنید.`;return;}
      sumRooms=roomInputs.reduce((s,inp)=>s+Number(inp.value),0);
      livingArea=area-sumRooms;
      if(livingArea<=0){invalidMsg=`مجموع متراژ اتاق‌خواب‌های «${label}» باید کمتر از متراژ کل واحد باشد.`;return;}
      splitMode=true;
    }

    totalArea+=area;
    if(splitMode){
      const bedroomsBTU=zoneBTU(sumRooms,calcType,heightFactor,windowsFactor,insulationFactor,sunFactor,wallsFactor,usage);
      const livingBTU=zoneBTU(livingArea,calcType,heightFactor,windowsFactor,insulationFactor,sunFactor,wallsFactor,usage);
      totalBTU+=bedroomsBTU+livingBTU;
      const bedroomsCap=standardCapacity(bedroomsBTU/12000)||Math.ceil((bedroomsBTU/12000)*2)/2;
      const livingCap=standardCapacity(livingBTU/12000)||Math.ceil((livingBTU/12000)*2)/2;
      rowsHtml+=`<div class="unit-result-row split"><b>${label}</b><span>${faNum(area)} متر کل</span><div class="unit-result-split"><div><small>دستگاه اتاق‌خواب‌ها — ${faNum(roomN)} اتاق · ${faNum(sumRooms)} متر (کانال مشترک)</small><strong>${faNum(bedroomsCap)} تن</strong></div><div><small>دستگاه حال/پذیرایی/آشپزخانه — ${faNum(livingArea)} متر</small><strong>${faNum(livingCap)} تن</strong></div></div></div>`;
    }else{
      const finalBTU=zoneBTU(area,calcType,heightFactor,windowsFactor,insulationFactor,sunFactor,wallsFactor,usage);
      totalBTU+=finalBTU;
      const tons=finalBTU/12000; const cap=standardCapacity(tons)||Math.ceil(tons*2)/2;
      rowsHtml+=`<div class="unit-result-row"><b>${label}</b><span>${faNum(area)} متر</span><span>${faNum(tons)} تن خام</span><strong>${faNum(cap)} تن پیشنهادی</strong></div>`;
    }
  });
  if(invalidMsg){error.textContent=invalidMsg;error.hidden=false;return;}
  const totalTons=totalBTU/12000;
  let html=`<div class="result-hero"><div><span class="result-overline">ENGINEERING OUTPUT</span><strong>گزارش تناژبندی کل ساختمان</strong><small>${rows.length} واحد · ${faNum(totalArea)} متر مربع</small></div><span class="result-check">✓</span></div>`;
  html+=`<div class="result-main"><div class="result-stat primary"><span>تناژ کل ساختمان</span><strong>${faNum(totalTons)}</strong><em>TR</em></div><div class="result-stat"><span>بار سرمایشی کل</span><strong>${faNum(Math.round(totalBTU))}</strong><em>BTU/h</em></div></div>`;
  html+=`<div class="unit-results">${rowsHtml}</div>`;
  html+=`<div class="result-warning">⚠️ این برآورد اولیه بر اساس اطلاعات کلی هر واحد است. برای جانمایی دقیق، طراحی سه‌بعدی و تناژبندی نهایی رایگان بر اساس نقشه واقعی، مشخصات و نقشه پلان ساختمان را ارسال کنید.</div>`;
  html+=`<a class="result-call" href="#plan-submit"><span>ارسال نقشه پلان برای جانمایی و طراحی رایگان</span><b>←</b></a>`;
  result.innerHTML=html; result.hidden=false; result.scrollIntoView({behavior:'smooth',block:'nearest'});
}
form.addEventListener('submit',e=>{
 e.preventDefault(); error.hidden=true;
 if(calcScope==='building'){ buildingSubmit(); return; }
 const area=Number(document.getElementById('area').value);
 if(!area||area<=0){error.textContent='لطفاً متراژ فضا را به‌صورت عددی بزرگ‌تر از صفر وارد کنید.';error.hidden=false;return;}
 const heightFactor=resolveHeightFactor(heightEl,heightManualEl);
 if(heightFactor===null){error.textContent='لطفاً ارتفاع دقیق سقف را به متر وارد کنید.';error.hidden=false;return;}
 const v={area,height:heightFactor,windows:Number(windowsEl.value),insulation:Number(insulationEl.value),sun:Number(sunEl.value),walls:Number(wallsEl.value)};
 let usage=1,extraLabel='',projectLabel='پروژه مسکونی',solutionTitle='داکت اسپلیت متناسب با بار سرمایشی',solutionText='انتخاب مدل و ظرفیت نهایی پس از بررسی شرایط واقعی ساختمان انجام شود.';
 if(calcType==='office'){projectLabel='پروژه اداری';solutionTitle='راهکار داکت اسپلیت با تمرکز بر آسایش و کنترل مصرف';solutionText='برای فضاهای اداری، ظرفیت صحیح و طراحی مناسب توزیع هوا در کنار کنترل مصرف اهمیت دارد.';}
 if(calcType==='commercial'){const b=document.getElementById('business').value;v.business=b;v.people=Number(document.getElementById('people').value);usage=businessFactors[b]*v.people;extraLabel=`نوع کسب‌وکار: ${b}`;projectLabel='پروژه تجاری';solutionTitle='راهکار تهویه متناسب با کاربری تجاری';solutionText='در فضاهای تجاری، بار ناشی از افراد و نوع فعالیت هم‌زمان با مشخصات پوسته ساختمان در انتخاب ظرفیت اثر دارد.';}
 if(calcType==='industrial'){const s=document.getElementById('industrySpace').value;const rawHeat=document.getElementById('heat').value;v.industry=s;v.heat=rawHeat;usage=industrialFactors[s]*(rawHeat.startsWith('زیاد')?1.30:rawHeat.startsWith('کم')?1.12:1);extraLabel=`نوع فضا: ${s}`;projectLabel='پروژه صنعتی';solutionTitle='راهکار ظرفیت‌گذاری برای فضای صنعتی';solutionText='در فضاهای صنعتی، نوع کاربری و منابع حرارتی باید پیش از انتخاب نهایی دستگاه با شرایط واقعی پروژه تطبیق داده شوند.';}

 /* rooms split: bedrooms (shared duct unit) vs. living/reception/kitchen (rest of the unit) */
 const roomN = roomCountEl ? (Number(roomCountEl.value)||0) : 0;
 let sumRooms=0, livingArea=area, splitMode=false;
 if(roomN>0){
   const roomInputs=[...roomsListEl.querySelectorAll('.room-area')];
   const invalidRoom = roomInputs.length<roomN || roomInputs.some(inp=>!inp.value||Number(inp.value)<=0);
   if(invalidRoom){error.textContent='لطفاً متراژ همه اتاق‌خواب‌ها را عددی و بزرگ‌تر از صفر وارد کنید.';error.hidden=false;return;}
   sumRooms=roomInputs.reduce((s,inp)=>s+Number(inp.value),0);
   livingArea=area-sumRooms;
   if(livingArea<=0){error.textContent='مجموع متراژ اتاق‌خواب‌ها باید کمتر از متراژ کل واحد باشد.';error.hidden=false;return;}
   splitMode=true;
 }

 let html=`<div class="result-hero"><div><span class="result-overline">ENGINEERING OUTPUT</span><strong>گزارش اولیه پروژه</strong><small>${projectLabel}</small></div><span class="result-check">✓</span></div>`;

 if(splitMode){
   const bedroomsBTU=zoneBTU(sumRooms,calcType,v.height,v.windows,v.insulation,v.sun,v.walls,usage);
   const livingBTU=zoneBTU(livingArea,calcType,v.height,v.windows,v.insulation,v.sun,v.walls,usage);
   const totalBTU=bedroomsBTU+livingBTU;
   const totalTons=totalBTU/12000, bedroomsTons=bedroomsBTU/12000, livingTons=livingBTU/12000;
   html+=`<div class="result-main"><div class="result-stat primary"><span>بار سرمایشی کل واحد</span><strong>${faNum(Math.round(totalBTU))}</strong><em>BTU/h</em></div><div class="result-stat"><span>تناژ خام کل</span><strong>${faNum(totalTons)}</strong><em>TR</em></div></div>`;
   html+=`<div class="zone-split-head"><span>Σ</span><div><b>تقسیم به دو دستگاه</b><small>یک دستگاه با کانال مشترک برای همه اتاق‌خواب‌ها، و یک دستگاه جدا برای حال / پذیرایی / آشپزخانه</small></div></div>`;
   html+=`<div class="zone-card"><div class="zone-card-head"><b>دستگاه اتاق‌خواب‌ها (کانال مشترک)</b><span>${faNum(roomN)} اتاق · ${faNum(sumRooms)} متر</span></div>${capacityRecommendationHTML(bedroomsTons)}</div>`;
   html+=`<div class="zone-card"><div class="zone-card-head"><b>دستگاه حال / پذیرایی / آشپزخانه</b><span>${faNum(livingArea)} متر</span></div>${capacityRecommendationHTML(livingTons)}</div>`;
 }else{
   const finalBTU=zoneBTU(area,calcType,v.height,v.windows,v.insulation,v.sun,v.walls,usage);
   const tons=finalBTU/12000;
   html+=`<div class="result-main"><div class="result-stat primary"><span>بار سرمایشی برآوردی</span><strong>${faNum(Math.round(finalBTU))}</strong><em>BTU/h</em></div><div class="result-stat"><span>تناژ خام محاسبه</span><strong>${faNum(tons)}</strong><em>TR</em></div></div>`;
   html+=capacityRecommendationHTML(tons);
 }

 html+=`<div class="solution-card"><div class="solution-head"><span>PROJECT SOLUTION</span><b>راهکار مناسب پروژه</b></div><h3>${solutionTitle}</h3><p>${solutionText}</p><div class="solution-points"><span>ظرفیت‌گذاری بر اساس بار</span><span>تطبیق با کاربری فضا</span><span>بررسی اجرایی پیش از خرید</span></div></div>`;
 const rs=reasons(v);let why=`برآورد بر اساس ${rs.join('، ')} انجام شده است.`;if(splitMode)why+=` متراژ به ${faNum(sumRooms)} متر اتاق‌خواب (دستگاه با کانال مشترک) و ${faNum(livingArea)} متر حال/پذیرایی/آشپزخانه (دستگاه جدا) تقسیم شده است.`;if(extraLabel)why+=` ${extraLabel} نیز در محاسبه اثر داده شده است.`;html+=`<details class="calculation-details"><summary>جزئیات مبنای محاسبه</summary><p>${why}</p></details><div class="result-warning">⚠️ این محاسبه یک برآورد دقیق‌تر بر اساس اطلاعات شماست، ولی جایگزین بازدید کارشناسی نیست. برای تعیین نهایی ظرفیت، همین حالا با ما تماس بگیرید.</div><a class="result-call" href="tel:09152033909"><span>برای تعیین نهایی ظرفیت با ما تماس بگیرید</span><b>۰۹۱۵ ۲۰ ۳۳ ۹۰۹</b></a>`;
 result.innerHTML=html;result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'nearest'});
});

/* Mobile interaction hardening */
window.addEventListener('resize',()=>{
  if(window.innerWidth>820 && mobileMenu && !mobileMenu.hidden) setMenu(false);
});

/* ===== PLAN SUBMIT: send specs + floor plan file via WhatsApp / Bale (09152033909) ===== */
(function(){
  const pForm=document.getElementById('planForm');
  if(!pForm) return;
  const pError=document.getElementById('planError');
  const submitBtn=document.getElementById('planSubmitBtn');
  const submitLabel=document.getElementById('planSubmitLabel');
  const overlay=document.getElementById('planModalOverlay');
  const modal=overlay ? overlay.querySelector('.plan-modal') : null;
  const modalClose=document.getElementById('planModalClose');
  const modalNote=document.getElementById('planModalNote');
  let pendingSummary='', pendingHasFile=false, lastFocused=null;

  const PLATFORM_LINKS={
    whatsapp:(text)=>'https://wa.me/989152033909'+(text?('?text='+encodeURIComponent(text)):''),
    bale:()=>'https://ble.ir/09152033909'
  };
  // Bale's link doesn't support a prefilled-text query param, so its summary is copied instead.
  const NO_TEXT_PREFILL=new Set(['bale']);

  function openPlanModal(){
    if(!overlay) return;
    lastFocused=document.activeElement;
    modalNote.hidden=true;
    overlay.hidden=false;
    document.addEventListener('keydown', onModalKeydown);
    const firstBtn=overlay.querySelector('.plan-modal-btn');
    if(firstBtn) firstBtn.focus();
  }
  function closePlanModal(){
    if(!overlay) return;
    overlay.hidden=true;
    document.removeEventListener('keydown', onModalKeydown);
    if(lastFocused && lastFocused.focus) lastFocused.focus();
  }
  function onModalKeydown(e){
    if(e.key==='Escape') closePlanModal();
  }
  if(overlay){
    overlay.addEventListener('click',(e)=>{ if(e.target===overlay) closePlanModal(); });
  }
  if(modalClose) modalClose.addEventListener('click', closePlanModal);

  async function sendVia(platform){
    if(NO_TEXT_PREFILL.has(platform) && pendingSummary){
      try{
        await navigator.clipboard.writeText(pendingSummary);
        modalNote.textContent='متن مشخصات در کلیپ‌بورد کپی شد؛ در چتی که باز می‌شود آن را Paste (جای‌گذاری) و ارسال کنید'+(pendingHasFile? '، و فایل نقشه پلان را نیز به‌صورت دستی ضمیمه کنید.':'.');
        modalNote.hidden=false;
      }catch(err){ /* clipboard permission blocked — user can still type the summary manually */ }
    }
    const url = platform==='whatsapp' ? PLATFORM_LINKS.whatsapp(pendingSummary) : PLATFORM_LINKS[platform]();
    window.open(url,'_blank');
    if(!NO_TEXT_PREFILL.has(platform)) closePlanModal();
  }
  if(overlay){
    overlay.querySelectorAll('.plan-modal-btn').forEach(btn=>{
      btn.addEventListener('click',()=>sendVia(btn.dataset.platform));
    });
  }

  pForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    if(submitBtn.disabled) return; // guard against double-submit
    pError.hidden=true;
    const name=document.getElementById('planName').value.trim();
    const phone=document.getElementById('planPhone').value.trim();
    const city=document.getElementById('planCity').value.trim();
    const type=document.getElementById('planType').value;
    const floors=document.getElementById('planFloors').value;
    const totalArea=document.getElementById('planTotalArea').value;
    const notes=document.getElementById('planNotes').value.trim();
    const fileInput=document.getElementById('planFile');
    const file=fileInput.files && fileInput.files[0];

    if(!name || !phone){
      pError.textContent='لطفاً نام و شماره تماس را وارد کنید.';
      pError.hidden=false;
      return;
    }

    const summary=
`درخواست جانمایی و تناژبندی رایگان — داکت اسپلیت مشهد
نام: ${name}
تماس: ${phone}
شهر/منطقه: ${city||'—'}
نوع ساختمان: ${type}
تعداد طبقات/واحد: ${floors||'—'}
متراژ کل ساختمان: ${totalArea||'—'} متر مربع
توضیحات: ${notes||'—'}`;

    pendingSummary=summary; pendingHasFile=!!file;

    submitBtn.disabled=true;
    if(submitLabel) submitLabel.textContent='در حال آماده‌سازی...';
    try{
      // Best path: native share sheet with the file attached (works on most mobile browsers)
      if(file && navigator.canShare && navigator.canShare({files:[file]})){
        try{
          await navigator.share({title:'نقشه پلان داکت اسپلیت مشهد', text:summary, files:[file]});
          return;
        }catch(err){ /* user cancelled the share sheet or it failed — fall through to the modal */ }
      }
      // Fallback: let the user pick WhatsApp or Bale — both reach 09152033909
      openPlanModal();
    } finally {
      submitBtn.disabled=false;
      if(submitLabel) submitLabel.textContent='ارسال مشخصات و نقشه پلان';
    }
  });
})();

/* ===== CALCULATOR GUIDED TOUR: 4-step spotlight walkthrough, no external deps, RTL ===== */
(function(){
  const startBtn=document.getElementById('calcTourBtn');
  if(!startBtn) return;

  const calculatorTourSteps=[
    { targets:['.calc-shell .calc-scope-toggle'], title:'انتخاب نوع محاسبه',
      description:'ابتدا مشخص کنید که می‌خواهید ظرفیت موردنیاز یک واحد را محاسبه کنید یا چند واحد / کل ساختمان را بررسی کنید.' },
    { targets:['.calc-shell .calc-tabs'], title:'نوع کاربری',
      description:'نوع کاربری پروژه را انتخاب کنید. این انتخاب یکی از عوامل مؤثر در محاسبه ظرفیت موردنیاز است.' },
    { targets:['#capacityForm .calc-grid','#roomsBlock','#buildingUnitsField','#extraFields'], title:'معیارهای محاسبه',
      description:'اطلاعات موردنیاز را با دقت وارد کنید. هرچه اطلاعات ساختمان کامل‌تر و دقیق‌تر وارد شوند، نتیجه محاسبه نیز دقیق‌تر خواهد بود.' },
    { targets:['#capacityForm .calculate-btn'], title:'محاسبه نتیجه',
      description:'بعد از تکمیل اطلاعات، روی این دکمه بزنید تا سیستم بر اساس اطلاعات واردشده، ظرفیت پیشنهادی را محاسبه و نتیجه را نمایش دهد.' }
  ];

  const PERSIAN_DIGITS=['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  const toFa=(n)=>String(n).replace(/[0-9]/g,(d)=>PERSIAN_DIGITS[+d]);

  let segTop,segBottom,segLeft,segRight,ring,tooltip,currentStep=-1,lastFocused=null,rafId=null;

  function buildDom(){
    segTop=document.createElement('div'); segTop.className='calc-tour-seg';
    segBottom=document.createElement('div'); segBottom.className='calc-tour-seg';
    segLeft=document.createElement('div'); segLeft.className='calc-tour-seg';
    segRight=document.createElement('div'); segRight.className='calc-tour-seg';
    ring=document.createElement('div'); ring.className='calc-tour-ring';
    tooltip=document.createElement('div');
    tooltip.className='calc-tour-tooltip';
    tooltip.setAttribute('role','dialog');
    tooltip.setAttribute('aria-modal','true');
    tooltip.setAttribute('tabindex','-1');
    tooltip.innerHTML=
      '<button type="button" class="calc-tour-close" aria-label="بستن راهنما">×</button>'+
      '<span class="calc-tour-step-count"></span>'+
      '<h4 class="calc-tour-title"></h4>'+
      '<p class="calc-tour-text"></p>'+
      '<div class="calc-tour-nav">'+
        '<button type="button" class="calc-tour-prev">← قبلی</button>'+
        '<button type="button" class="calc-tour-next">بعدی →</button>'+
      '</div>';
    document.body.append(segTop,segBottom,segLeft,segRight,ring,tooltip);
    tooltip.querySelector('.calc-tour-close').addEventListener('click', closeCalculatorTour);
    tooltip.querySelector('.calc-tour-prev').addEventListener('click', previousTourStep);
    tooltip.querySelector('.calc-tour-next').addEventListener('click', nextTourStep);
  }

  function visibleTargets(selectors){
    const els=[];
    selectors.forEach((sel)=>{
      const el=document.querySelector(sel);
      if(el && el.offsetParent!==null) els.push(el);
    });
    return els;
  }

  function unionRect(els){
    const rects=els.map((el)=>el.getBoundingClientRect());
    const top=Math.min(...rects.map((r)=>r.top));
    const left=Math.min(...rects.map((r)=>r.left));
    const right=Math.max(...rects.map((r)=>r.right));
    const bottom=Math.max(...rects.map((r)=>r.bottom));
    return {top,left,right,bottom,width:right-left,height:bottom-top};
  }

  const PAD=8;

  function updateTourPosition(){
    if(currentStep<0) return;
    const els=visibleTargets(calculatorTourSteps[currentStep].targets);
    if(!els.length) return;
    const r=unionRect(els);
    const vw=window.innerWidth, vh=window.innerHeight;
    const rt=Math.max(0,r.top-PAD), rl=Math.max(0,r.left-PAD);
    const rr=Math.min(vw,r.right+PAD), rb=Math.min(vh,r.bottom+PAD);

    // Four segments dim everything outside the target rect (kept fully clickable/visible).
    segTop.style.cssText=`top:0;left:0;width:${vw}px;height:${rt}px`;
    segBottom.style.cssText=`top:${rb}px;left:0;width:${vw}px;height:${Math.max(0,vh-rb)}px`;
    segLeft.style.cssText=`top:${rt}px;left:0;width:${rl}px;height:${rb-rt}px`;
    segRight.style.cssText=`top:${rt}px;left:${rr}px;width:${Math.max(0,vw-rr)}px;height:${rb-rt}px`;

    ring.style.top=rt+'px'; ring.style.left=rl+'px';
    ring.style.width=(rr-rl)+'px'; ring.style.height=(rb-rt)+'px';

    // Floating tooltip: prefer below the target, else above; clamp horizontally to the viewport.
    const tw=tooltip.offsetWidth||300, th=tooltip.offsetHeight||160, gap=14;
    const spaceBelow=vh-rb, spaceAbove=rt;
    let top;
    if(spaceBelow>=th+gap || spaceBelow>=spaceAbove){
      top=Math.min(rb+gap, vh-th-10);
    }else{
      top=Math.max(10, rt-th-gap);
    }
    let left=rl+(rr-rl)/2-tw/2;
    left=Math.max(10, Math.min(left, vw-tw-10));
    tooltip.style.top=top+'px';
    tooltip.style.left=left+'px';
  }

  function scheduleUpdate(){
    if(rafId) cancelAnimationFrame(rafId);
    rafId=requestAnimationFrame(updateTourPosition);
  }

  // The site's smooth-scroll (Lenis) eases gradually rather than snapping, so instead of
  // guessing a fixed delay we track the target's position every frame for a short window
  // after each step change — this also naturally produces the "glide" between steps.
  let settleRafId=null, settleUntil=0;
  function trackWhileSettling(){
    updateTourPosition();
    if(performance.now()<settleUntil){
      settleRafId=requestAnimationFrame(trackWhileSettling);
    }
  }
  function startSettleTracking(durationMs){
    if(settleRafId) cancelAnimationFrame(settleRafId);
    settleUntil=performance.now()+durationMs;
    trackWhileSettling();
  }
  function stopSettleTracking(){
    if(settleRafId) cancelAnimationFrame(settleRafId);
    settleRafId=null;
  }

  function showTourStep(index){
    const step=calculatorTourSteps[index];
    const els=visibleTargets(step.targets);
    if(!els.length){
      // Target not present/visible right now (e.g. hidden building-mode fields) — skip it gracefully.
      if(index<calculatorTourSteps.length-1) showTourStep(index+1); else closeCalculatorTour();
      return;
    }
    currentStep=index;
    tooltip.querySelector('.calc-tour-step-count').textContent=toFa(index+1)+' از '+toFa(calculatorTourSteps.length);
    tooltip.querySelector('.calc-tour-title').textContent=step.title;
    tooltip.querySelector('.calc-tour-text').textContent=step.description;
    const prevBtn=tooltip.querySelector('.calc-tour-prev');
    const nextBtn=tooltip.querySelector('.calc-tour-next');
    prevBtn.hidden=(index===0);
    const isLast=(index===calculatorTourSteps.length-1);
    nextBtn.textContent=isLast?'پایان':'بعدی →';
    nextBtn.setAttribute('aria-label', isLast?'پایان راهنما':'مرحله بعدی راهنما');

    els[0].scrollIntoView({behavior:'smooth',block:'center'});
    updateTourPosition();
    startSettleTracking(1600); // covers the site's eased smooth-scroll settle time
    tooltip.focus();
  }

  function nextTourStep(){
    if(currentStep>=calculatorTourSteps.length-1){ finishCalculatorTour(); return; }
    showTourStep(currentStep+1);
  }
  function previousTourStep(){
    if(currentStep<=0) return;
    showTourStep(currentStep-1);
  }
  function finishCalculatorTour(){ closeCalculatorTour(); }

  function onKeydown(e){ if(e.key==='Escape') closeCalculatorTour(); }
  function onViewportChange(){ scheduleUpdate(); }

  function startCalculatorTour(){
    if(!segTop) buildDom();
    lastFocused=document.activeElement;
    document.body.classList.add('calc-tour-active');
    document.addEventListener('keydown', onKeydown);
    window.addEventListener('resize', onViewportChange);
    window.addEventListener('scroll', onViewportChange, true);
    // Guards against a late-finishing asset (e.g. an image) reflowing the page after the tour opens.
    window.addEventListener('load', onViewportChange);
    showTourStep(0);
  }

  function closeCalculatorTour(){
    document.body.classList.remove('calc-tour-active');
    document.removeEventListener('keydown', onKeydown);
    window.removeEventListener('resize', onViewportChange);
    window.removeEventListener('scroll', onViewportChange, true);
    window.removeEventListener('load', onViewportChange);
    stopSettleTracking();
    currentStep=-1;
    if(lastFocused && lastFocused.focus) lastFocused.focus();
  }

  startBtn.addEventListener('click', startCalculatorTour);
})();

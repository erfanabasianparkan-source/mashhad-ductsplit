# SEO-AUDIT

## CURRENT PROBLEM

بازبینی ZIP اولیه نشان داد معماری سایت تقریباً تک‌صفحه‌ای است: تنها `index.html` در ریشه وجود داشت و sitemap فقط URL اصلی را معرفی می‌کرد. بخش‌های `#store`، `#repair`، `#calculator` و `#faq` fragment بودند و Search Intentهای خرید، قیمت، نصب، تعمیر و سرویس URL مستقل نداشتند.

مشکلات واقعی نسخه اولیه:
- canonical وجود نداشت.
- sitemap فقط یک URL داشت.
- Schema اصلی FAQPage بود و graph منسجم Business/Website/Page/Service/Product/Guide وجود نداشت.
- Meta keywords غیرضروری وجود داشت.
- لینک‌سازی داخلی عمدتاً به anchorهای همان صفحه محدود بود.
- topical authority به یک صفحه وابسته بود.
- محتوای تجاری و خدماتی در یک صفحه تجمیع شده بود.
- برخی رفتارهای تعاملی به JavaScript وابسته بودند؛ محتوای مهم SEO اکنون در HTML صفحات مستقل وجود دارد.
- تصاویر اصلی JPG بودند و برای کاهش حجم به WebP تبدیل شدند.
- ALT لوگوها عمومی بود و با نام برندها اصلاح شد.

## ROOT CAUSE

ریشه اصلی ضعف SEO، نبود معماری چندصفحه‌ای برای intentهای متفاوت و محدود بودن مسیر crawl و سیگنال‌دهی موضوعی به یک URL بود؛ anchor به‌تنهایی صفحه مستقل برای Search ایجاد نمی‌کند.

## NEW ARCHITECTURE

- `/` — داکت اسپلیت مشهد
- `/kharid-daktsplit-mashhad/` — خرید
- `/gheymat-daktsplit-mashhad/` — قیمت
- `/nasb-daktsplit-mashhad/` — نصب
- `/tamir-daktsplit-mashhad/` — تعمیر
- `/service-daktsplit-mashhad/` — سرویس
- `/forosh-daktsplit-mashhad/` — فروش و تأمین
- `/brand-daktsplit/` — برندها
- `/capacity-daktsplit/` — ظرفیت
- `/calculator-daktsplit/` — ماشین‌حساب
- `/guide/` — هاب محتوا
- شش مقاله مستقل زیر `/guide/`

## INDEXING STRATEGY

تمام ۱۷ URL در sitemap واقعی، indexable و self-canonical هستند. محتوای مهم فارسی به HTML منتقل شده و صفحات مستقل از لینک‌های داخلی قابل دسترسی‌اند. هیچ anchor، redirect یا duplicate URL در sitemap قرار نگرفته است.

## INTERNAL LINKING

Homepage به صفحات اصلی خرید، قیمت، نصب، تعمیر، سرویس، فروش، برند، ظرفیت و راهنما لینک می‌دهد. صفحات خدمات به صفحات مرتبط، ظرفیت، ماشین‌حساب و راهنما وصل شده‌اند. راهنماها نیز به خدمات محلی لینک می‌دهند.

## LOCAL SEO

`Organization` و `LocalBusiness` با `areaServed` شامل مشهد و خراسان رضوی تعریف شده‌اند. شماره تلفن موجود در فایل اولیه استفاده شده است. آدرس فیزیکی ساخته نشده، چون آدرس معتبر در فایل اولیه وجود نداشت.

هیچ review، rating، address، dealership یا پروژه جعلی ساخته نشده است.

## ENTITY GRAPH

شناسه‌های اصلی:
- `https://mashhad-ductsplit.ir/#business`
- `https://mashhad-ductsplit.ir/#organization`
- `https://mashhad-ductsplit.ir/#website`
- `https://mashhad-ductsplit.ir/#homepage`

Homepage دارای Service node برای خدمات اصلی، Product node فقط برای نمونه‌های محصول درج‌شده در سایت اولیه و CollectionPage راهنماست. صفحات مستقل نیز `@id` مستقل و BreadcrumbList دارند.

## PERSIAN SEARCH INTENT

پوشش طبیعی شامل «داکت اسپلیت مشهد»، «مشهد داکت اسپلیت»، «داکت اسپلیت در مشهد»، خرید، فروش، قیمت، نصب، تعمیر و سرویس، «اسپلیت کانالی»، «سیستم تهویه کانالی»، داکت اسپلیت اینورتر و ظرفیت‌های ۲۴۰۰۰، ۳۶۰۰۰ و ۴۸۰۰۰ است. Variation املایی «اسپلیت/اسپیلت» عمداً محدود نگه داشته شده است.

## AI SEARCH STRATEGY

صفحات مهم با یک پاسخ مستقیم و مستقل شروع می‌شوند و سپس توضیح، جدول، مراحل، عوامل و استثناها ارائه می‌کنند. این ساختار برای استخراج پاسخ توسط سیستم‌های جستجو خواناتر است. هیچ رتبه یا نمایش در AI Overviews تضمین نشده است.

## SCHEMA STRATEGY

Organization، LocalBusiness، WebSite، WebPage، Service، Product برای محصولات واقعی، BreadcrumbList و Article برای راهنماها استفاده شده‌اند. FAQPage به‌عنوان schema اصلی استفاده نشده و FAQ قابل مشاهده نقش مکمل دارد.

## IMAGE SEO

Hero و product image به WebP تبدیل شدند؛ ALTهای فارسی توصیفی هستند و ALT keyword-stuffed استفاده نشده است. ALT لوگوها به نام واقعی برندها اصلاح شد.

## PERFORMANCE

حجم hero از حدود ۴۲۸KB به حدود ۱۲۷KB و product image از حدود ۱۴KB به حدود ۷KB کاهش یافت. Hero با preload/fetchpriority بالا باقی مانده و تصاویر غیرhero lazy هستند. `script.js` با `defer` بارگذاری می‌شود.

LCP/CLS/INP واقعی از ZIP قابل اندازه‌گیری نیست و برای عدد قطعی باید URL عمومی با Lighthouse/PageSpeed تست شود.

## MOBILE

برای صفحات جدید breakpoint ریسپانسیو اضافه شده و overflow افقی در CSS کنترل شده است. ساختار برای عرض‌های ۳۶۰، ۳۹۰، ۴۳۰، ۷۶۸، ۱۰۲۴ و ۱۴۴۰ طراحی شده است.

## SITEMAP

sitemap اکنون ۱۷ URL واقعی indexable دارد و URLهای fragment/duplicate/redirect در آن نیستند.

## ROBOTS

`robots.txt` crawl عمومی را مجاز می‌کند و `https://mashhad-ductsplit.ir/sitemap.xml` را معرفی می‌کند. CSS، JS و تصاویر مسدود نشده‌اند.

## BUSINESS CLAIMS

هیچ ادعای تجاری جدیدی ساخته نشده است. ادعاهای موجود در فایل اولیه مانند سابقه، پروژه‌ها، بیمه و برندها بدون افزودن ادعای تازه حفظ شده‌اند؛ این موارد در این بازسازی به‌صورت مستقل راستی‌آزمایی نشده‌اند.

## FINAL CHECKLIST

- [x] معماری چندصفحه‌ای واقعی
- [x] Title/H1/Meta مستقل
- [x] Canonical مستقل
- [x] Sitemap کامل
- [x] Robots
- [x] Breadcrumb
- [x] Service schema
- [x] LocalBusiness/Organization
- [x] Entity graph
- [x] Internal linking
- [x] Persian HTML content
- [x] Commercial intent coverage
- [x] Guide hub
- [x] Direct answer blocks
- [x] WebP optimization
- [x] SEO-MAP.md
- [x] SEO-AUDIT.md

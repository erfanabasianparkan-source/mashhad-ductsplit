# Performance Optimization

این نسخه بدون تغییر محتوای SEO یا URLها، روی Performance بهینه شده است.

- حذف فایل کمکی hero_insert.html از deploy
- Minify سبک HTML (فقط whitespace بین تگ‌ها؛ script/style دست‌نخورده)
- lazy loading و decoding=async برای تصاویر غیر بحرانی
- defer برای script.js صفحه اصلی حفظ/تأیید شد
- افزودن Cache-Control/Expires یک‌ساله برای assetهای versioned/static
- فعال‌سازی Brotli/Gzip در صورت پشتیبانی سرور

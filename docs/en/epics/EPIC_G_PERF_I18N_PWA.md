# Epic G — Performance, i18n (internationalization) & PWA (Progressive Web App)

## US-PERF-801 — Economy Mode toggle
**FR.** Reduce image sizes/animations; persist preference.  
**TR.** Profile flag + local storage; responsive images.  
**QR.** ≥ 40% page weight reduction; LCP (Largest Contentful Paint) p75 ≤ 2.5s.  
**DR.** user.economy_mode.

## US-I18N-901 — FR/EN language & country formats
**FR.** Switch FR/EN; currency/date formats per country; SEO hreflang.  
**TR.** Next.js i18n routing; Intl formatting.  
**QR.** No layout shift; full coverage.  
**DR.** user.lang, user.country.

## US-PWA-1101 — Offline cart & resume
**FR.** Cart works offline; reconciles on reconnect with clear info.  
**TR.** Service worker + IndexedDB; diff sync.  
**QR.** Offline tests scripted; no corruption.  
**DR.** cart, cart_item (server-side).

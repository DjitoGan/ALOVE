# Epic B — Catalog & Fitment (YMM — Year/Make/Model, OEM — Original Equipment Manufacturer) + Import

## US-CAT-301 — Create/Edit part with mandatory YMM & OEM
**FR.** Title, condition, price, stock, images; OEM refs; ≥1 engine fitment; publish when valid.  
**TR.** POST/PUT /parts; image compression; outbox → Meilisearch index.  
**QR.** p95 < 500ms (excluding upload); safe HTML; Economy Mode thumbnails.  
**DR.** part(..., oem_refs TEXT[], status), part_fitment(part_id, engine_id), part_image(...).

## US-CAT-302 — Search with YMM filters and typo tolerance
**FR.** Filter by Make/Model/Year/Engine; typo tolerant keywords.  
**TR.** GET /catalog/search; Meilisearch index (normalized fields).  
**QR.** Search p95 < 800ms; pagination; zero-result telemetry.  
**DR.** Meilisearch index + search_outbox.

## US-CAT-303 — CSV bulk import with row-level error report
**FR.** Upload CSV 200–1000 rows; job status; downloadable error report.  
**TR.** POST /catalog/import; background parsing; idempotent updates.  
**QR.** 1K rows ≤ 3 min; useful error texts.  
**DR.** import_job, import_row_error.

## US-CAT-304 — Favorites / Wishlist
**FR.** Heart items; see later; show stock status.  
**TR.** POST/GET /favorites; idempotent toggles.  
**QR.** Toggle ≤ 100ms; pagination.  
**DR.** favorite(user_id, part_id).

## US-CAT-305 — Contact Seller (WhatsApp / Call)
**FR.** Deep links to WhatsApp/call from product page.  
**TR.** Compose wa.me links; vendor prefs.  
**QR.** Visible only if enabled; CTR tracked.  
**DR.** vendor.contact_phone, vendor.contact_whatsapp_enabled.

## US-CAT-306 — Zero-results Guidance & Telemetry
**FR.** Tips on empty results; suggest OEM search.  
**TR.** Event search.zero_results with anonymized filters.  
**QR.** Dashboard for zero-results rate.  
**DR.** Analytics stream.

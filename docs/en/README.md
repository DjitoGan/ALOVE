# ALOVE — Blueprint v2.0 (Full)
**Last updated:** 2025-10-23 20:28 UTC  
© 2025 ALOVE Project — Amouzou Amedegnato

**ALOVE** is a multi-vendor marketplace for used automotive parts optimized for West Africa (Phase 1: Togo, Benin, Niger).  
Docs use **Docsify** with **dark theme**, bilingual (**English/French**), and **Mermaid** diagrams.

**Acronyms expanded at first use:** API (Application Programming Interface), PWA (Progressive Web App), YMM (Year/Make/Model), OEM (Original Equipment Manufacturer), RBAC (Role Based Access Control), OTP (One-Time Password), CDN (Content Delivery Network), ERD (Entity Relationship Diagram), DoD (Definition of Done), UAT (User Acceptance Testing), KPI (Key Performance Indicator).

## Vision
- Trusted compatibility via **YMM/OEM** fitment.
- Strong local payments via **Mobile Money**, card fallback, cash-on-pickup.
- Resilient UX (User Experience) with **PWA**, **Offline Cart**, **Economy Mode** for low bandwidth.
- Multi-country (FR/EN), per-country configurations and campaigns.

## Architecture (high level)
- **Frontend:** Next.js PWA (Server-Side Rendering, i18n routing).
- **Backend:** NestJS modular monolith (Auth, Catalog, Order, Payment, Notification, Admin).
- **Database:** PostgreSQL 16; Redis (Remote Dictionary Server) for OTP/cache; S3/R2 for media + CDN.
- **Search:** Meilisearch (fast, typo-tolerant).
- **Observability:** Sentry (errors, Web Vitals), Grafana Cloud (metrics, alerts).

See diagrams: [Architecture](../diagrams/architecture.mmd) · [ERD](../diagrams/db_relations.mmd) · [YMM/OEM](../diagrams/ymm_oem_model.mmd) · [RBAC](../diagrams/rbac_roles.mmd).

# ALOVE — Plan Directeur v2.0 (Complet)
**Dernière mise à jour :** 2025-10-23 20:28 UTC  
© 2025 Projet ALOVE — Amouzou Amedegnato

**ALOVE** est une marketplace multi-vendeurs de pièces auto d’occasion, optimisée pour l’Afrique de l’Ouest (Phase 1 : Togo, Bénin, Niger).  
Les docs utilisent **Docsify** (thème sombre), **bilingue (FR/EN)**, avec des diagrammes **Mermaid**.

**Acronymes explicités à la première occurrence :** API (Application Programming Interface — Interface de Programmation Applicative), PWA (Progressive Web App — Application Web Progressive), YMM (Year/Make/Model — Année/Marque/Modèle), OEM (Original Equipment Manufacturer — Fabricant d’Équipement d’Origine), RBAC (Role Based Access Control — Contrôle d’Accès Fondé sur les Rôles), OTP (One-Time Password — Mot de passe à usage unique), CDN (Content Delivery Network — Réseau de Distribution de Contenu), ERD (Entity Relationship Diagram — Diagramme Entité-Relation), DoD (Definition of Done — Critères de Terminaison), UAT (User Acceptance Testing — Recette Utilisateur), KPI (Key Performance Indicator — Indicateur Clé de Performance).

## Vision
- Compatibilité fiable via **YMM/OEM**.
- Paiements locaux **Mobile Money**, carte en secours, paiement sur retrait.
- UX robuste avec **PWA**, **Panier hors-ligne**, **Mode Économie**.
- Multi-pays (FR/EN), configurations et campagnes par pays.

## Architecture (vue d’ensemble)
- **Frontend :** Next.js PWA (rendu côté serveur, i18n).
- **Backend :** Monolithe NestJS modulaire (Auth, Catalog, Order, Payment, Notification, Admin).
- **Base de Données :** PostgreSQL 16 ; Redis pour OTP/cache ; S3/R2 + CDN pour médias.
- **Recherche :** Meilisearch (rapide, tolérance aux fautes).
- **Observabilité :** Sentry, Grafana Cloud.

Voir les diagrammes : [Architecture](../diagrams/architecture.mmd) · [ERD](../diagrams/db_relations.mmd) · [YMM/OEM](../diagrams/ymm_oem_model.mmd) · [RBAC](../diagrams/rbac_roles.mmd).

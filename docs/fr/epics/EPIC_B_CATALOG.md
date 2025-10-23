# Épic B — Catalogue & Compatibilité (YMM — Year/Make/Model, OEM — Original Equipment Manufacturer) + Import

## US-CAT-301 — Créer/éditer une pièce avec YMM & OEM obligatoires
**FR.** Titre, état, prix, stock, images ; refs OEM ; ≥1 motorisation compatible ; publication si valide.  
**TR.** POST/PUT /parts ; compression images ; outbox → Meilisearch.  
**QR.** p95 < 500ms (hors upload) ; HTML sûr ; miniatures Mode Économie.  
**DR.** part(..., oem_refs TEXT[], status), part_fitment(part_id, engine_id), part_image(...).

## US-CAT-302 — Recherche avec filtres YMM et tolérance aux fautes
**FR.** Filtrer Marque/Modèle/Année/Moteur ; fautes de frappe tolérées.  
**TR.** GET /catalog/search ; index Meilisearch.  
**QR.** p95 < 800ms ; pagination ; télémétrie “zero-results”.  
**DR.** Index Meilisearch + search_outbox.

## US-CAT-303 — Import CSV avec rapport d’erreurs par ligne
**FR.** Importer 200–1000 lignes ; job avec statut ; rapport téléchargeable.  
**TR.** POST /catalog/import ; parsing en tâche de fond ; MAJ idempotentes.  
**QR.** 1K lignes ≤ 3 min ; messages d’erreur utiles.  
**DR.** import_job, import_row_error.

## US-CAT-304 — Favoris / Liste de souhaits
**FR.** Mettre en favori ; revoir plus tard ; afficher statut de stock.  
**TR.** POST/GET /favorites ; toggle idempotent.  
**QR.** Toggle ≤ 100ms ; pagination.  
**DR.** favorite(user_id, part_id).

## US-CAT-305 — Contacter le vendeur (WhatsApp / Appel)
**FR.** Lien direct WhatsApp/appel depuis la fiche produit.  
**TR.** wa.me ; préférences vendeur.  
**QR.** Visible si activé ; suivi du clic.  
**DR.** vendor.contact_phone, vendor.contact_whatsapp_enabled.

## US-CAT-306 — Conseils en cas de zéro résultat + télémétrie
**FR.** Conseils (élargir filtres, OEM, support).  
**TR.** Événement search.zero_results.  
**QR.** Dashboard dédié.  
**DR.** Flux analytics.

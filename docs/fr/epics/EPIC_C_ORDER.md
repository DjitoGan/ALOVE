# Épic C — Commandes (Panier, Checkout, Livraison, RMA — Return Merchandise Authorization)

## US-ORD-401 — Panier + persistance hors-ligne
**FR.** Ajouter/MAJ/supprimer ; persistance offline ; resynchro.  
**TR.** IndexedDB + service worker ; API /cart.  
**QR.** Feedback < 100ms ; conflits clairs.  
**DR.** cart, cart_item.

## US-ORD-402 — Checkout multi-vendeur avec livraison par vendeur
**FR.** Choisir mode par vendeur ; totaux groupés.  
**TR.** POST /orders ; métadonnées d’expédition par vendeur.  
**QR.** Totaux exacts ; p95 < 800ms (hors paiement).  
**DR.** order, order_item.

## US-ORD-404 — Expédition & Suivi par vendeur
**FR.** Transporteur/suivi ; statuts ; PIN retrait.  
**TR.** POST /orders/:id/shipments ; PATCH /shipments/:id.  
**QR.** Idempotent ; notifications expédié/livré.  
**DR.** shipment(order_id, vendor_id, status, tracking).

## US-ORD-403 — Retours (RMA) cycle complet
**FR.** Demande → approbation → renvoi → inspection → remboursement/refus ; motifs ; preuves.  
**TR.** POST /returns ; PATCH /returns/:id ; politique par pays/vendeur.  
**QR.** SLA ; audit ; notifications.  
**DR.** return_request(..., status, timestamps).

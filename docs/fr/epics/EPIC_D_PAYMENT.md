# Épic D — Paiements & Finance (Mobile Money/Carte/Especes), Split & Ledger, Remboursements, Versements

## US-PAY-501 — Paiement Mobile Money (webhooks, idempotence)
**FR.** Passage à “paid” uniquement sur webhook vérifié.  
**TR.** POST /payment/init ; /payment/webhook/momo avec HMAC (Hash-based Message Authentication Code).  
**QR.** p95 < 30s typique ; doublons ignorés.  
**DR.** payment(provider, tx_ref UNIQUE, status).

## US-PAY-502 — Commission & ledger vendeur
**FR.** 10% par défaut ; override par campagne ; écritures ledger.  
**TR.** Déclenché par payment.succeeded ; moteur de règles.  
**QR.** Centime exact ; export CSV.  
**DR.** vendor_balance_tx(gross, commission, net).

## US-PAY-503 — Carte en secours & Paiement comptant
**FR.** Carte si MoMo indispo ; marquage “payé hors-ligne” avec preuve & RBAC.  
**TR.** Stripe ; endpoint de marquage ; audit.  
**QR.** PCI réduit ; tests anti-abus.  
**DR.** payment.method, audit_log.

## US-PAY-504 — Remboursements (partiels/total)
**FR.** Remboursement par Admin/Finance avec motif.  
**TR.** POST /payments/:id/refund ; idempotent.  
**QR.** Visible acheteur ; reversal correct.  
**DR.** refund(payment_id, amount, status).

## US-PAY-505 — Versements vendeurs (visibilité & export)
**FR.** Solde/versements ; export Finance.  
**TR.** Batch manuel MVP.  
**QR.** Concorde avec ledger.  
**DR.** vendor_payout(...).

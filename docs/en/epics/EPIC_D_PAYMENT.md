# Epic D — Payments & Finance (Mobile Money/Card/Cash, Split & Ledger, Refunds, Payouts)

## US-PAY-501 — Pay with Mobile Money (webhooks, idempotent)
**FR.** Mark order paid on verified webhook only.  
**TR.** POST /payment/init; /payment/webhook/momo with HMAC (Hash-based Message Authentication Code); idempotency keys.  
**QR.** p95 confirmation < 30s typical; duplicate safe.  
**DR.** payment(provider, tx_ref UNIQUE, status).

## US-PAY-502 — Commission split & vendor ledger
**FR.** Compute default 10% commission; override by campaign; ledger entries.  
**TR.** Trigger on payment.succeeded; rules engine.  
**QR.** Exact to cent; export CSV.  
**DR.** vendor_balance_tx(gross, commission, net).

## US-PAY-503 — Card fallback & Cash-on-Pickup
**FR.** Card when MoMo unavailable; cash marking with proof & RBAC.  
**TR.** Stripe adapter; offline mark endpoint with audit.  
**QR.** PCI scope minimized; misuse tested.  
**DR.** payment.method, audit_log.

## US-PAY-504 — Refunds (partial/full)
**FR.** Admin/Finance refund with reason; status tracked.  
**TR.** POST /payments/:id/refund; provider adapter; idempotent.  
**QR.** Visible to buyer; ledger reversal correct.  
**DR.** refund(payment_id, amount, status).

## US-PAY-505 — Seller payouts (visibility & export)
**FR.** Vendors see balances & payouts; Finance exports CSV.  
**TR.** Periodic batch (manual in MVP).  
**QR.** Reconciled with ledger.  
**DR.** vendor_payout(vendor_id, period, amount, status).

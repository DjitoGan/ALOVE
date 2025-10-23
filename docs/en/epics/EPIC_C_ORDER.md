# Epic C — Orders (Cart, Checkout, Delivery, RMA — Return Merchandise Authorization)

## US-ORD-401 — Add to cart & persist offline
**FR.** Add/update/remove lines; offline persistence; resync.  
**TR.** IndexedDB + service worker; /cart sync API.  
**QR.** Add feedback < 100ms; clear conflicts.  
**DR.** cart, cart_item.

## US-ORD-402 — Multi-vendor checkout with per-vendor delivery
**FR.** Choose delivery per vendor; grouped totals.  
**TR.** POST /orders; shipping metadata per vendor; soft stock reservation optional.  
**QR.** Totals exact; p95 < 800ms (excl. payment).  
**DR.** order, order_item.

## US-ORD-404 — Shipment & Tracking per Vendor
**FR.** Set carrier/tracking per vendor; statuses; pickup PIN.  
**TR.** POST /orders/:id/shipments; PATCH /shipments/:id.  
**QR.** Idempotent status; notifications on shipped/delivered.  
**DR.** shipment(order_id, vendor_id, status, tracking).

## US-ORD-403 — Returns (RMA) lifecycle
**FR.** Request → approve → ship back → inspect → refund/deny; reasons; evidence.  
**TR.** POST /returns; PATCH /returns/:id; policy per country/vendor.  
**QR.** SLA timers; audit trail; notifications.  
**DR.** return_request(..., status, timestamps).

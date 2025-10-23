# Epic E — Notifications (SMS — Short Message Service / Email / WhatsApp)

## US-NOTIF-601 — OTP via WhatsApp with SMS/Voice fallback
**FR.** WhatsApp first if opted-in; fallback SMS/voice; resend with cooldown.  
**TR.** Provider routing with cost caps; delivery receipts.  
**QR.** Deliverability ≥ 97%; rate-limit 3/15 min.  
**DR.** notification_log(..., cost, status).

## US-NOTIF-602 — Order status updates (buyer & seller)
**FR.** Transactional updates on created/paid/shipped/delivered.  
**TR.** Event-driven; templates FR/EN; dedupe keys.  
**QR.** Max 1 per status per user; success dashboard.  
**DR.** user_notification_pref(...).

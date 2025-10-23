# Épic E — Notifications (SMS — Short Message Service / Email / WhatsApp)

## US-NOTIF-601 — OTP WhatsApp avec fallback SMS/Voix
**FR.** WhatsApp si opt-in ; sinon SMS/Voix ; renvoi avec cooldown.  
**TR.** Routage par coût ; reçus de livraison.  
**QR.** ≥ 97% ; rate-limit 3/15 min.  
**DR.** notification_log(...).

## US-NOTIF-602 — Mises à jour de commande (acheteur & vendeur)
**FR.** Créée/payée/expédiée/livrée.  
**TR.** Événements ; templates FR/EN ; dédoublonnage.  
**QR.** Max 1 par statut et par user.  
**DR.** user_notification_pref(...).

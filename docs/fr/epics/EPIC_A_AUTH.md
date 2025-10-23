# Épic A — Authentification & Comptes
Périmètre : Email/mot de passe, OTP (One-Time Password — Mot de passe à usage unique) SMS/WhatsApp, profil, création vendeur, équipe.

## US-AUTH-101 — Inscription par email
**FR (Exigences Fonctionnelles).** Inscription email/mot de passe ; vérification email obligatoire ; réinitialisation.  
**TR (Exigences Techniques).** POST /auth/register-email, /auth/login, /auth/request-reset, /auth/confirm-email ; Argon2/bcrypt ; SES (Simple Email Service)/SendGrid ; tokens 24h ; rate-limit.  
**QR (Qualité).** Email p95 < 60s ; login p95 < 500ms ; a11y ; pas de PII (données perso) dans les logs.  
**DR (Base de Données).** user(email UNIQUE, email_verified_at, password_hash, lang, country) ; email_verification(token_hash, expires_at).

## US-AUTH-102 — Connexion téléphone avec OTP (SMS/WhatsApp/Voix)
**FR.** OTP WhatsApp (si opt-in) sinon SMS ; expiration 5 min ; 3 tentatives ; cooldown.  
**TR.** POST /auth/request-otp, /auth/verify-otp ; Redis (Remote Dictionary Server) TTL ; Twilio/Africa's Talking ; JWT rotation.  
**QR.** Taux de délivrance ≥ 97% ; erreurs robustes.  
**DR.** user.phone UNIQUE, user.opt_in_whatsapp BOOL ; OTP dans Redis + résumé BD.

## US-AUTH-103 — Profil & préférences langue/pays
**FR.** MAJ nom, langue (FR/EN), pays ; formats adaptés.  
**TR.** PUT /me/profile ; i18n ; feature flags par pays.  
**QR.** p95 < 200ms ; pas de CLS.  
**DR.** user(name, lang, country).

## US-ACC-201 — Créer une boutique vendeur (KYC — Know Your Customer)
**FR.** Soumettre données + KYC ; statut pending→active après admin.  
**TR.** POST /vendors ; uploads S3/R2 ; RBAC ; notifications.  
**QR.** Images ≤ 2MB ; audit log.  
**DR.** vendor, vendor_document.

## US-ACC-202 — Inviter des membres d’équipe
**FR.** Propriétaire invite manager/staff ; lien d’acceptation ; révocation.  
**TR.** POST /vendors/:id/invitations ; POST /invitations/:token/accept ; DELETE /vendor-members/:id.  
**QR.** Token 7 jours ; audit ; RBAC.  
**DR.** vendor_member, invitation.

# Epic A — Authentication & Accounts
Scope: Email/password, phone OTP (One-Time Password) via SMS (Short Message Service)/WhatsApp, profile, vendor onboarding, team roles.

## US-AUTH-101 — Email account registration
**FR (Functional Requirements).** Register by email/password; verify email before login; password reset.  
**TR (Technical Requirements).** Endpoints: POST /auth/register-email, /auth/login, /auth/request-reset, /auth/confirm-email. Argon2/bcrypt; SES (Simple Email Service)/SendGrid; 24h tokens; rate-limits.  
**QR (Quality Requirements).** Email p95 < 60s; login p95 < 500ms; a11y (accessibility) labels; no PII (Personally Identifiable Information) logs.  
**DR (Database Requirements).** user(email UNIQUE, email_verified_at, password_hash, lang, country); email_verification(token_hash, expires_at).

## US-AUTH-102 — Phone login with OTP (SMS/WhatsApp/Voice)
**FR.** OTP via WhatsApp (if opted-in) else SMS; 5 min expiry; 3 attempts; cooldown.  
**TR.** POST /auth/request-otp, /auth/verify-otp; Redis (Remote Dictionary Server) TTL; Twilio/Africa's Talking; JWT rotation.  
**QR.** Deliverability ≥ 97%; robust errors for wrong/expired/reused.  
**DR.** user.phone UNIQUE, user.opt_in_whatsapp BOOL; OTP in Redis + summary in DB.

## US-AUTH-103 — Profile & language/country preferences
**FR.** Update name, language (FR/EN), country; app formats adapt.  
**TR.** PUT /me/profile; i18n (internationalization) routing; feature flags by country.  
**QR.** p95 < 200ms; no CLS (Cumulative Layout Shift).  
**DR.** user(name, lang, country).

## US-ACC-201 — Create a vendor shop (KYC — Know Your Customer)
**FR.** Submit vendor data + minimal KYC; pending→active via admin.  
**TR.** POST /vendors; uploads to S3/R2; RBAC (Role Based Access Control); notifications.  
**QR.** Image ≤ 2MB; audit logs.  
**DR.** vendor, vendor_document.

## US-ACC-202 — Invite team members to vendor
**FR.** Owner invites manager/staff; accept via link; revoke.  
**TR.** POST /vendors/:id/invitations; POST /invitations/:token/accept; DELETE /vendor-members/:id.  
**QR.** Token 7 days; audit logs; RBAC enforced.  
**DR.** vendor_member, invitation.

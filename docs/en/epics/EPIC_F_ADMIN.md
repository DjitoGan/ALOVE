# Epic F — Admin & Governance (RBAC — Role Based Access Control), Country Config, Campaigns, Moderation

## US-ADM-701 — Approve/Suspend vendors (KYC — Know Your Customer)
**FR.** Review docs; approve/suspend with reasons.  
**TR.** Admin RBAC; country-scoped views; audit log.  
**QR.** Bulk propagation to parts safe; notifications.  
**DR.** vendor.kyc_status, audit_log.

## US-ADM-702 — Listing moderation (flag/hide/remove)
**FR.** Flag/hide violated listings; vendor notified; reversible.  
**TR.** part.status transitions; search reindex.  
**QR.** Logged actions; clear vendor UI.  
**DR.** part(status, moderation_reason).

## US-ADM-703 — Country configuration & campaigns
**FR.** Commission defaults, delivery modes, return days; time-bounded campaigns.  
**TR.** Precedence: campaign > vendor tier > country default.  
**QR.** Immediate effect on new orders; tests for precedence.  
**DR.** country_config(...), promotion_campaigns(rules).

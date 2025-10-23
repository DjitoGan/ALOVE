# Épic F — Admin & Gouvernance (RBAC — Role Based Access Control), Config Pays, Campagnes, Modération

## US-ADM-701 — Approbation/Suspension vendeurs (KYC)
**FR.** Revue des docs ; approuver/suspendre avec motif.  
**TR.** RBAC admin ; vue limitée au pays ; audit.  
**QR.** Propagation sûre au catalogue ; notifications.  
**DR.** vendor.kyc_status, audit_log.

## US-ADM-702 — Modération des annonces (signaler/masquer/supprimer)
**FR.** Action réversible ; vendeur informé.  
**TR.** part.status ; réindexation.  
**QR.** Historique clair.  
**DR.** part(status, moderation_reason).

## US-ADM-703 — Config pays & campagnes
**FR.** Commissions, modes de livraison, retour ; campagnes temporelles.  
**TR.** Priorité : campagne > niveau vendeur > défaut pays.  
**QR.** Effet immédiat sur nouvelles commandes.  
**DR.** country_config(...), promotion_campaigns(rules).

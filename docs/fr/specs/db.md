# Schéma Base de Données (PostgreSQL 16)
Coeur : user, vendor, vendor_member, vehicle_make/model/year/engine_spec, part, part_fitment, part_image, order, order_item, payment, country_config, promotion_campaigns, audit_log, search_outbox.  
Étendu : address, shipment, return_request, refund, vendor_balance_tx, vendor_payout, favorite, support_ticket, support_message.  
Index : GIN sur part.oem_refs ; BTREE sur FKs et jointures YMM. Voir l’ERD.

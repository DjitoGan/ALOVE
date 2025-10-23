# Database Schema (PostgreSQL 16)
Core: user, vendor, vendor_member, vehicle_make/model/year/engine_spec, part, part_fitment, part_image, order, order_item, payment, country_config, promotion_campaigns, audit_log, search_outbox.  
Extended: address, shipment, return_request, refund, vendor_balance_tx, vendor_payout, favorite, support_ticket, support_message.  
Indexes: GIN on part.oem_refs; BTREE on FKs and YMM joins. See ERD.

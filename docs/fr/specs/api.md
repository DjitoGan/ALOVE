# Conventions API (Application Programming Interface)
Auth : JWT (JSON Web Token) ; rotation du refresh.  
Erreurs : { "errorCode": "...", "message": "...", "hint": "...", "traceId": "..." }  
Idempotence : requise sur paiement/remboursement.  
Webhooks : HMAC avec timestamp/nonce.  
Versionning : /v1, rétro-compatibles.

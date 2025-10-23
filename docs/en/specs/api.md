# API (Application Programming Interface) Conventions
Auth: JWT (JSON Web Token) bearer; refresh rotation.  
Errors: { "errorCode": "PAYMENT_FAILED", "message": "...", "hint": "...", "traceId": "..." }  
Idempotency: required on payment/refund.  
Webhooks: HMAC with timestamp/nonce.  
Versioning: /v1, backward-compatible.

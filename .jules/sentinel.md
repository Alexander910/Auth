# Sentinel Security Journal

## 2025-05-22 - Mass Assignment and Sensitive Data Exposure Prevention
**Vulnerability:**
1. Mass Assignment: User registration endpoint accepted any request body keys (including `role`), which could allow an attacker to self-register as an administrator ('admin').
2. Sensitive Data Exposure: The user service and auth controller returned full MongoDB User documents (including the hashed `password` field) in JSON responses.

**Learning:**
1. Mongoose schema defaults (like `default: "user"`) do not protect against explicit mass assignment if `req.body` is directly passed to the creation function. Destructuring or explicitly mapping allowed properties is necessary.
2. Returning raw database models via JSON serialization exposes internal states (such as passwords, secret keys, or timestamps) unless they are explicitly filtered out.

**Prevention:**
1. Always explicitly destructure only safe/required fields (`name`, `email`, `password`) from `req.body` at the controller layer and strictly specify arguments passed to creation services.
2. Configure Mongoose schema-level options (`toJSON` and `toObject` transforms) to automatically omit sensitive fields (such as `password`) from being serialized into API response payloads.

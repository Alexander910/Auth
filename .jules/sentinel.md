# Sentinel's Security Journal

## 2025-05-22 - Mass Assignment Privilege Escalation & Sensitive Data Exposure
**Vulnerability:**
1. Mass Assignment vulnerability in user registration where the `role` field was accepted from `req.body` and passed to user creation, allowing unauthorized privilege escalation to 'admin'.
2. Sensitive Data Exposure of the hashed user password in database serialization/API responses.

**Learning:**
1. Request bodies must be explicitly destructured to pick only safe/allowed parameters, or the user object creation logic must explicitly restrict/hardcode non-modifiable sensitive fields (like default user roles).
2. Query/Model responses should automatically clean sensitive fields before transmitting them. Centralized schema-level transforms (`toJSON`, `toObject`) prevent accidental leaks.

**Prevention:**
1. Destructure only safe parameters (`name`, `email`, `password`) in registration controllers and hardcode registration roles to `"user"`.
2. Configure schema-level transforms to strip out `password` on all output serializations.

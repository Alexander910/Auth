## 2025-05-15 - [Mass Assignment & Sensitive Data Exposure]
**Vulnerability:** Registration endpoints allowing users to specify their own `role` (Mass Assignment) and API responses including raw password hashes (Sensitive Data Exposure).
**Learning:** Destructuring `req.body` without strict filtering allows attackers to bypass intended application logic. Mongoose models should have global transformations to strip sensitive fields rather than relying on manual exclusion in controllers.
**Prevention:** Always explicitly destructure only allowed fields from request bodies. Use Mongoose `toJSON` and `toObject` transforms to automatically remove passwords and other sensitive data from all responses.

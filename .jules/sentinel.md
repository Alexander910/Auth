## 2025-05-15 - [Mass Assignment & Sensitive Data Exposure]
**Vulnerability:** Registration endpoint allowed users to specify their role (Mass Assignment), and user objects returned from the API included the hashed password (Sensitive Data Exposure).
**Learning:** Even with a default role in the database, if the application code passes user-supplied data directly to the creation service, it can override defaults. Additionally, Mongoose objects need explicit transformations to exclude sensitive fields by default.
**Prevention:** Always destructure and whitelist allowed fields in controllers. Use Mongoose `toJSON` and `toObject` transforms with object destructuring (to avoid TS2790) for consistent data protection.

# Sentinel Journal - Security Learnings

## 2026-05-02 - Mass Assignment and Sensitive Data Exposure Prevention in Registration
**Vulnerability:** The application was vulnerable to Mass Assignment (privilege escalation) during user registration because the `role` field was accepted from `req.body` and passed directly to the creation service. Furthermore, user responses in the registration, login, and user profile endpoints exposed bcrypt password hashes, leading to Sensitive Data Exposure.
**Learning:** Relying on raw client input for document fields with administrative access can lead to privilege escalation. Similarly, serializing full Mongoose documents to the client without schema-level transforms results in accidental exposure of password hashes or other sensitive metadata.
**Prevention:**
1. Explicitly destructure only non-sensitive, allowed fields (e.g., `name`, `email`, `password`) at the controller level before passing them to the creation/update service.
2. Hardcode default/safe roles (e.g., `"user"`) inside creation methods when invoked by public endpoints.
3. Configure Mongoose schema `toJSON` and `toObject` options with a custom transform function that automatically omits the `password` field from serialized objects using safe object destructuring, ensuring defense-in-depth across all endpoints.

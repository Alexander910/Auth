# Sentinel Journal - Critical Security Learnings

## 2026-07-30 - Mass Assignment Vulnerability in User Registration
**Vulnerability:** Mass Assignment (Privilege Escalation) allowed requesting clients to pass arbitrary parameters such as `role` during registration, allowing self-promotion to the "admin" role.
**Learning:** Destructuring request bodies completely or without restricting fields, and passing optional properties (like `role?: string`) to database services without strict validation or default-override, creates a direct pathway for privilege escalation.
**Prevention:** Always explicitly destructure and whitelist only the exact required, safe input fields from request payloads in both controllers and services. Never pass unchecked request bodies directly to Mongoose models or custom creators.

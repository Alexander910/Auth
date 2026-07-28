# Sentinel Security Journal

## 2025-05-22 - Mass Assignment & Sensitive Data Leakage Prevention
**Vulnerability:** User registration endpoint allowed clients to pass arbitrary parameters such as `role`, enabling privilege escalation (e.g., self-assigning `admin` privilege). Simultaneously, Mongoose models default-serialized password hashes, exposing them in API responses (e.g., during registration, login, and profile fetching).
**Learning:** Destructuring request bodies without explicit filtering or passing unchecked objects to Mongoose model instantiation allows mass assignment vulnerabilities. Returning plain document serialization results without defining custom `toJSON`/`toObject` transform handlers leads to sensitive data exposure. Moreover, using the `delete` operator in TypeScript on Mongoose transforms causes type errors unless properties are optional, so secure object destructuring must be preferred.
**Prevention:**
1. Avoid passing the user-supplied object or uncontrolled parameters to model creation/updates. Filter parameters explicitly in the controllers.
2. Configure schemas with global `toJSON` and `toObject` transforms to strip out sensitive data (like `password`) via object destructuring before data reaches serialization.

## 2025-05-22 - Fix Mass Assignment vulnerability in registration
**Vulnerability:** New users could register with any role (e.g., 'admin') by passing a 'role' field in the registration request body.
**Learning:** The application was destructuring the 'role' field from 'req.body' and passing it directly to the registration service, which then passed it to the database model without validation or restriction.
**Prevention:** Explicitly destructure only allowed fields from request bodies and hardcode or validate sensitive fields like 'role' in the business logic layer.

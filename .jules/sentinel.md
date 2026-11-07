## 2026-05-01 - Prevent Mass Assignment in User Registration

**Vulnerability:** The registration controller destructured `role` directly from `req.body` and passed it down to `AuthService.register`, which passed it to `UserService.createUser`. This allowed an attacker to assign themselves the `admin` role upon registration, gaining unauthorized access to administrative endpoints protected by `adminMiddleware`.

**Learning:** Mass assignment vulnerabilities occur when user input is mapped directly to domain models or sensitive entity attributes without strict allowlisting at controller boundaries.

**Prevention:** Never accept authorization-sensitive fields (like `role`, `isAdmin`, permissions) from public registration or update endpoints. Explicitly allowlist and destructure only safe fields (`name`, `email`, `password`) in controllers and enforce default roles at the service layer.

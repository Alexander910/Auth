## 2026-07-04 - Fix Mass Assignment in User Registration
**Vulnerability:** Mass Assignment (Over-permissioning) in the `/register` endpoint.
**Learning:** The application was directly passing the request body or parts of it that included the `role` field to the user creation logic, allowing users to register with any role, including 'admin'.
**Prevention:** Always destructure only the required and safe fields from `req.body` in controllers and explicitly set sensitive fields like `role` in the service layer or database models.

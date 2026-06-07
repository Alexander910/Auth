# Sentinel Journal

This journal contains critical security learnings for this repository.

## 2025-05-15 - Mass Assignment in Registration
**Vulnerability:** The registration endpoint allowed users to specify their own `role` in the request body, which could lead to unauthorized privilege escalation (e.g., a user registering themselves as an 'admin').
**Learning:** Directly passing the entire request body or extracting unvalidated sensitive fields into service methods creates a mass assignment risk.
**Prevention:** Explicitly destructure only the required and safe fields from `req.body` in the controller before passing them to the service layer.

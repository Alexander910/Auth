# Sentinel Security Journal

## 2026-09-24 - Mass Assignment in Registration Controller & Service
**Vulnerability:** The registration endpoint in `src/auth/auth.controller.ts` and `src/auth/auth.service.ts` accepted the `role` parameter directly from `req.body` during user creation, allowing unauthenticated attackers to self-assign the `admin` role upon registration.
**Learning:** Even when Mongoose schema defines a default role (`default: "user"`), accepting and passing `role` from user input in controller and service layers overrides defaults and bypasses intended role-based access control.
**Prevention:** Whitelist user-provided fields in controllers by explicitly destructuring only allowed properties (`name`, `email`, `password`), and enforce safe business defaults in service methods rather than trusting input values.

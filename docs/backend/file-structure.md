# Backend File Structure

The backend follows MVC (Model-View-Controller) architecture for scalable and maintainable code organization.

```
educado-api/
├── models/
│   ├── user.model.ts
├── routes/
│   └── user/
│       ├── user-auth.ts
│       └── user.ts (Router initialization)
├── types/
│   └── type-group/
│       └── user.ts
├── utils/
│   └── authenticate-token.ts
├── constants/
├── .env
└── index.ts (Entry point)
```

## Directory Breakdown

### `models/` - Database Schemas
Define database schemas and models for data structure:

```typescript
// models/user.ts
export const UserSchema = {
  id: String,
  name: String,
  email: String
}

// models/order.ts  
export const OrderSchema = {
  id: String,
  userId: String,
  totalAmount: Number
}
```

### `routes/` - Controllers & Handlers
Organized by feature with entry points and individual handlers:

**Structure Explained:**
- Each subroute gets its own folder
- Main endpoint files (e.g., `user.ts`) contain route initialization
- Specific handlers separated into individual files

```typescript
// routes/user/user.ts → Main user endpoints
// GET /user, POST /user

// routes/user/user-update.ts → Update-specific handlers  
// Handlers for updating user information
```

### `constants/` - Backend Constants
Shared constants across the project:

```typescript
// constants/countries.ts
export const COUNTRIES = ['Denmark', 'Brazil', 'India'];

// constants/roles.ts  
export const USER_ROLES = ['admin', 'user', 'guest'];
```

### `types/` - TypeScript Definitions
Type definitions organized by feature:

```typescript
// types/User.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// Subfolders for related types:
// types/orders/Order.ts → Order-related types
```

### `utils/` - Helper Functions
Utility functions for common operations:

```typescript
// utils/format-date.ts
export const formatDate = (date: Date) => {
  // Format timestamps for API responses
}

// utils/hash-password.ts
export const hashPassword = (password: string) => {
  // Securely hash passwords
}

// utils/authenticate-token.ts
export const authenticateToken = (token: string) => {
  // JWT token validation
}
```

## MVC Pattern Implementation

### Model
- Database schemas in `models/`
- Data validation and business logic
- MongoDB/Mongoose integration

### View  
- JSON API responses
- Data formatting for client consumption
- Error response structures

### Controller
- Route handlers in `routes/`
- Request/response processing
- Business logic coordination
- Authentication and authorization

## Best Practices

1. **Separate concerns** - Keep models, routes, and utilities distinct
2. **Group related functionality** - Use folders for feature-based organization
3. **Use TypeScript** - Define interfaces for all data structures
4. **Follow naming conventions** - Use established patterns consistently
5. **Document complex logic** - Add comments for business rules and algorithms
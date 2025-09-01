# Coding Conventions

This section defines the naming conventions and coding standards used across the Educado project.

## Naming Conventions

### camelCase
Use for:
- Functions
- Variables

```javascript
const userName = 'john';
function getUserData() { ... }
```

### skewer-case  
Use for:
- File names

```
user-profile.ts
course-card.tsx
navigation-header.js
```

### PascalCase
Use for:
- Components
- Providers  
- Types

```typescript
interface UserProfile { ... }
const CourseCard = () => { ... }
class AuthProvider { ... }
```

### SCREAMING_SNAKE_CASE
Use for:
- Constants (limits, amounts, etc.)

```typescript
const MAX_FILE_SIZE = 50; // MB
const API_TIMEOUT = 5000;
const DEFAULT_RETRY_COUNT = 3;
```

### snake_case
Use for:
- Enums

```typescript
enum user_role {
  admin = 'admin',
  student = 'student', 
  instructor = 'instructor'
}
```

## General Guidelines

- Follow existing code patterns in the repository
- Use TypeScript for type safety
- Keep functions small and focused
- Use descriptive variable names
- Comment complex logic when necessary
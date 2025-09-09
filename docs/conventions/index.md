# Coding Conventions

This section defines naming conventions and coding standards for the Educado project.

## Naming Conventions

### camelCase
**Use for:** Functions and variables

```typescript
const userName = 'john';
function getUserData() { ... }
```

### skewer-case (kebab-case)  
Use for:
- File names

```
user-profile.ts
course-page.tsx
navigation-header.ts
```

### PascalCase
Use for:
- Components
- Component files
- Providers  
- Types

```typescript
interface UserProfile { ... }
const CourseCard = () => { ... }
class AuthProvider { ... }
enum ProductType { ... }
```

### SCREAMING_SNAKE_CASE
Use for:
- Constants (limits, amounts, etc.)
- Configuration values

```typescript
const MAX_FILE_SIZE = 50; // MB
const API_TIMEOUT = 5000;
const DEFAULT_RETRY_COUNT = 3;
```

### snake_case
Use for:
- Enums values

```typescript
enum UserRole {
  admin_role = 'admin_role',
  student_role = 'student_role', 
  instructor_role = 'instructor_role'
}
```

## General Guidelines

- Follow existing repository patterns
- Use TypeScript for type safety
- Keep functions small and focused
- Use descriptive variable names
- Document complex logic with comments
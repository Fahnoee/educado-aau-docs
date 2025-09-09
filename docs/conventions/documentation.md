# Documentation Standards

This section defines documentation conventions for the codebase.

## Inline Comments

Use inline comments when:
- Code logic requires explanation for other developers
- Implementation deviates from standard patterns and needs justification

## JSDoc

Use JSDoc comments for all exported functions that are used across multiple files.

Example:
```typescript
/**
 * Represents a book entity
 * @param title - The book's title
 * @param author - The book's author
 */
function Book(title: string, author: string) {
  // implementation
}
```

## Feature Documentation

Complex features with multiple touchpoints require dedicated documentation in the respective `frontend/` or `backend/` feature folders. This prevents confusion when developers work with features implemented by other teams.
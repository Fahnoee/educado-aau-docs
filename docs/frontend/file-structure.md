# Frontend File Structure

The frontend follows Expo's standard file structure template with organized directories for different types of code.

```
educado-app/
├── app/
│   ├── (group)/
│   ├── _layout.tsx
│   └── page.tsx
├── assets/
├── hooks/
├── components/
│   └── NameOfComponentGroup/
│       ├── Component1.tsx
│       ├── Component2.tsx
│       └── Component3.tsx
├── constants/
│   └── theme/
│       ├── AppColors.ts
│       └── AppStyles.ts
├── types/
│   └── type-group/
├── utils/
└── .env.local
```

## Directory Breakdown

### `app/` - Screens & Routing
Contains screens (pages) and layout files. Uses **Expo Router** for file-based routing.

**Important**: Read [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

**Examples:**
- `app/index.tsx` → Home screen
- `app/profile/[id].tsx` → Profile screen with dynamic ID parameter

### `assets/` - Static Files
Store static files that aren't compiled into code:
- **Images**: `logo.png`, `banner.jpg`
- **Fonts**: `OpenSans.ttf`
- **SVGs**: Vector graphics

### `hooks/` - Custom Hooks
Reusable logic snippets not tied to specific screens:

- `useNetworkStatus()` → Detect online/offline status, show connectivity banners
- `useAsyncStorage()` → Save data locally without writing storage code repeatedly

### `components/` - Reusable Components
Group related components together by feature or screen:

**Structure:**
```
components/home/CourseList.tsx
components/home/CourseCard.tsx
components/profile/UserStats.tsx
components/profile/AchievementBadge.tsx
```

### `constants/` - App Constants
Central location for unchanging values used throughout the app:

```typescript
// constants/theme/AppColors.ts
export const THEME = { 
  primary: '#2ecc71', 
  secondary: '#27ae60' 
}

// constants/AppData.ts
export const COUNTRIES = ['Denmark', 'India', 'USA']
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

// types/orders/Order.ts (subfolder organization)
export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
}
```

### `utils/` - Helper Functions
Small, general-purpose utility functions:

```typescript
// utils/formatDate.ts
export const formatDate = (date: Date) => { ... }

// utils/generateUUID.ts  
export const generateUUID = () => { ... }
```

## Best Practices

1. **Group related files** in appropriate directories
2. **Use descriptive names** following naming conventions
3. **Keep components focused** on single responsibilities
4. **Organize by feature** when components grow large
5. **Document complex utilities** with clear examples
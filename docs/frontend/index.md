# Frontend Development

## Overview

The frontend is built with React Native and optimized for Android devices with limited hardware capabilities.

⚠️ **Critical Constraint**: Design and styling **MUST ALWAYS** follow the Figma created by the design team from Brazil!

## Tech Stack

- **React Native** - TypeScript library for native iOS and Android applications
- **Expo** - Handles routing, build process, and includes useful packages
- **Expo Router** - File-based routing system ([Documentation](https://docs.expo.dev/router/introduction/))
- **TypeScript** - For scalability, popularity, and ease of learning
- **React Query** - Backend requests, caching, loading states, and mutations
- **Stylesheets (CSS)** - For styling components
- **ESLint** - Development tool for formatting and code alignment

## Hardware Optimization

**Target Device Specifications:**
- **Operating System**: Android
- **Processor**: 1.2 GHz Quad Core (Cortex-A53 Qualcomm Snapdragon 410 MSM8916)
- **RAM**: 1.5 GB
- **App Size Limit**: 50 MB maximum

⚠️ **Critical**: The wastepickers have low-end smartphones. **OPTIMIZE FOR HARDWARE** and **DO NOT INSTALL UNNECESSARY PACKAGES/COMPONENTS**.

## Getting Started

Review the file structure and routing documentation to understand how the application is organized and how navigation works between screens.
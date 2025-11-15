# 🏢 Housing Management System - Frontend

A modern, full-featured housing management platform designed to simplify property management and eliminate middlemen in the Nigerian housing market. Built with Next.js 16, TypeScript, and TailwindCSS.

## 🎯 Project Vision

This system addresses the housing challenges in Nigeria by creating a direct connection between property owners (admins) and tenants (users), eliminating costly intermediaries and reducing housing expenses.

### Key Principles
- **No Middlemen**: Direct admin-to-tenant relationship
- **Transparency**: Clear pricing, payments, and maintenance tracking
- **Efficiency**: Automated processes for leases, renewals, and payments
- **Nigerian Context**: Naira (NGN) currency, Paystack integration, local requirements

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **State Management**: [TanStack Query (React Query) v5](https://tanstack.com/query)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Authentication**: JWT with access (10min) and refresh (1 day) tokens
- **Payment**: Paystack integration
- **File Storage**: Cloudinary/S3 (configurable)
- **Package Manager**: [Bun](https://bun.sh/)

## 👥 User Roles

### 1. ADMIN (Property Owner/Landlord)
- Manage properties, buildings, and units
- Handle tenant onboarding and leases
- Generate and track invoices
- Process payments and view revenue
- Respond to maintenance requests
- View analytics and reports
- Configure system settings

### 2. USER (Tenant)
- View current unit and lease details
- Pay rent and other invoices (Paystack)
- Submit and track maintenance requests
- Request lease renewals
- View payment history and documents
- Update profile and settings

## 📂 Project Structure

```
hm-client/
├── public/                      # Static assets
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (auth)/              # Auth pages (login, register)
│   │   ├── admin/               # Admin dashboard & pages
│   │   └── tenant/              # Tenant dashboard & pages
│   ├── components/
│   │   ├── layout/              # Sidebar, Topbar, Navigation
│   │   ├── providers/           # Auth, Query, Theme providers
│   │   ├── ui/                  # ShadCN components
│   │   └── [features]/          # Feature-specific components
│   ├── lib/
│   │   ├── api/                 # API client & endpoints
│   │   ├── queries/             # React Query hooks
│   │   ├── validations/         # Zod schemas
│   │   ├── hooks/               # Custom React hooks
│   │   ├── utils/               # Utilities (permissions, formatters)
│   │   └── constants/           # Routes, roles, statuses
│   ├── types/                   # TypeScript type definitions
│   └── middleware.ts            # Route protection
├── .env.local                   # Environment variables
├── .env.example                 # Environment template
├── package.json
└── README.md
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1

# Authentication
NEXT_PUBLIC_AUTH_COOKIE_NAME=hms_auth_token

# App Configuration
NEXT_PUBLIC_APP_NAME=Housing Management System
NEXT_PUBLIC_APP_URL=http://localhost:3000

# File Upload (Cloudinary or S3)
NEXT_PUBLIC_MAX_FILE_SIZE=5242880
NEXT_PUBLIC_ALLOWED_FILE_TYPES=image/jpeg,image/png,image/webp,application/pdf

# Feature Flags
NEXT_PUBLIC_ENABLE_NOTIFICATIONS=true
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

## 🛠️ Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Backend API running (see backend repository)

### Installation

```bash
# Clone the repository
git clone <[repository-url](https://github.com/realtemmy/hm-client.git)>
cd hm-client

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
bun run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint
bun run format       # Format code with Prettier
bun run format:check # Check code formatting
```

## 🗺️ Feature Roadmap

### ✅ Phase 1: Foundation & Authentication (Completed)
- [x] Project setup (Next.js, TypeScript, TailwindCSS)
- [x] ShadCN UI integration
- [x] React Query configuration
- [x] Authentication system (login, register, logout)
- [x] JWT token management (10min access, 1 day refresh)
- [x] Role-based routing and layouts (ADMIN, USER)
- [x] Protected routes middleware
- [x] Type definitions aligned with backend schema

### 🔄 Phase 2: Core Entities (Weeks 2-4)
- [ ] Property management (CRUD)
  - [ ] Property types: Apartment, House, Hostel
  - [ ] Building management within properties
  - [ ] Address with location data
  - [ ] Property verification system
- [ ] Unit management (CRUD)
  - [ ] Unit status tracking (Available, Occupied, Maintenance, Reserved)
  - [ ] Photo gallery for units
  - [ ] Unit specifications (bedrooms, bathrooms, sqft)
- [ ] Tenant management (CRUD)
  - [ ] User profile with optional tenant metadata
  - [ ] Emergency contacts
  - [ ] Lease history

### 📋 Phase 3: Leasing & Payment System (Weeks 5-7)
- [ ] Lease management
  - [ ] Create and assign leases
  - [ ] Automatic unit status updates
  - [ ] Lease status tracking (Active, Pending, Terminated, Expired)
- [ ] Lease renewal system
  - [ ] Auto-renewal (default)
  - [ ] Request-based renewal with admin approval
  - [ ] Configurable renewal settings
- [ ] Invoice system
  - [ ] Link invoices to leases
  - [ ] Due date tracking
  - [ ] Status management
- [ ] Payment processing
  - [ ] Paystack integration (NGN currency)
  - [ ] Payment history
  - [ ] Receipt generation (PDF)
  - [ ] Transaction tracking

### 🔧 Phase 4: Maintenance System (Weeks 8-9)
- [ ] Maintenance request submission
  - [ ] Priority levels (1=Urgent → 5=Low)
  - [ ] Image/file attachments (Cloudinary/S3)
  - [ ] Status tracking (Open, In Progress, Resolved, Cancelled)
- [ ] Admin maintenance management
  - [ ] Request assignment
  - [ ] Status updates
  - [ ] Notes and comments thread
- [ ] Request timeline and history

### 🎨 Phase 5: User Experience & Features (Weeks 10-12)
- [ ] Dashboard enhancements
  - [ ] Admin analytics (revenue, occupancy, KPIs)
  - [ ] Tenant dashboard (unit info, payments, requests)
  - [ ] Interactive charts and visualizations
- [ ] Notification system
  - [ ] In-app notifications
  - [ ] Real-time updates (polling/WebSocket)
  - [ ] Notification preferences
- [ ] Search and filters
  - [ ] Global search
  - [ ] Advanced filtering for all list views
  - [ ] Sort and pagination
- [ ] Document management
  - [ ] Lease documents
  - [ ] Payment receipts
  - [ ] PDF viewer

### 🧪 Phase 6: Testing, Polish & Deployment (Weeks 13-15)
- [ ] Unit and integration tests
  - [ ] Component tests (React Testing Library)
  - [ ] API hook tests
  - [ ] Validation schema tests
  - [ ] Target: 80%+ coverage
- [ ] E2E tests (Playwright)
  - [ ] Admin workflows
  - [ ] Tenant workflows
  - [ ] Payment flows
- [ ] Performance optimization
  - [ ] Code splitting
  - [ ] Image optimization
  - [ ] Bundle size analysis
  - [ ] Core Web Vitals
- [ ] Accessibility (WCAG 2.1 AA)
- [ ] Production deployment
  - [ ] Vercel deployment
  - [ ] Error monitoring (Sentry)
  - [ ] Analytics setup

## 📊 Timeline Summary

| Phase | Duration | Status |
|-------|----------|--------|
| Phase 1: Foundation & Auth | Week 1 | ✅ Complete |
| Phase 2: Core Entities | Weeks 2-4 | 🔄 Next |
| Phase 3: Leasing & Payments | Weeks 5-7 | ⏳ Pending |
| Phase 4: Maintenance | Weeks 8-9 | ⏳ Pending |
| Phase 5: User Experience | Weeks 10-12 | ⏳ Pending |
| Phase 6: Testing & Deploy | Weeks 13-15 | ⏳ Pending |

**Total Estimated Timeline**: ~15 weeks (3.5 months)

## 🏗️ Architecture Highlights

### Authentication Flow
1. User logs in → Backend validates credentials
2. Backend returns access token (10min) + refresh token (1 day)
3. Frontend stores tokens (localStorage)
4. API client auto-attaches access token to requests
5. On 401 error, auto-refresh using refresh token
6. On refresh failure, redirect to login

### State Management
- **Server State**: React Query (automatic caching, refetching, invalidation)
- **UI State**: React hooks (useState, useReducer)
- **Global State**: React Context (auth, theme)

### Role-Based Access
- Middleware checks auth token on protected routes
- Client-side role checks using permission utilities
- Role-specific layouts and navigation
- API-level authorization (backend responsibility)

## 🤝 Contributing

### Code Style
- Use TypeScript for all new files
- Follow ESLint rules
- Format with Prettier before committing
- Write meaningful commit messages

### Development Workflow
1. Create feature branch from `main`
2. Implement feature with tests
3. Run `bun run lint` and `bun run format`
4. Create pull request with description
5. Await code review

## 📝 License

[Add your license here]

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Contact: [temiloluwaOgunti8@gmail.com]

---

**Built with ❤️ for the Nigerian housing market**

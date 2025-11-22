# Divine Connect - Astrology Web App

A modern, beautiful astrology consultation platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Landing Page
- Beautiful hero section with gradient design
- Feature highlights (24/7 availability, AI-powered insights, verified experts)
- Comprehensive services showcase (Love, Career, Finance, Health, etc.)
- How it works section
- Mobile responsive design

### Dashboard
- Personalized user dashboard
- Today's horoscope with detailed insights
- Live astrologer availability
- Search and filter astrologers by expertise and language
- Quick actions for Kundli matching, career reports, financial forecasts
- Consultation history and statistics

### Login Page
- Email and phone number authentication options
- Social login (Google, Facebook)
- Beautiful split-screen design
- Password visibility toggle
- Remember me functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tryAstrology/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles and Tailwind
│   ├── dashboard/
│   │   └── page.tsx        # User dashboard
│   └── login/
│       └── page.tsx        # Login/authentication page
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## Key Features Implemented

### UI/UX
- Modern gradient-based design system
- Responsive layout for all screen sizes
- Smooth transitions and hover effects
- Custom color palette (primary orange/purple theme)
- Card-based layouts with shadows

### Components
- Navigation with mobile menu
- Service cards with icons
- Astrologer profiles with ratings and availability
- Quick action cards
- Statistics dashboard
- Horoscope display

### Pages
1. **Landing Page** (`/`)
   - Hero section
   - Features overview
   - Services grid
   - How it works
   - CTA sections
   - Footer

2. **Dashboard** (`/dashboard`)
   - User profile header
   - Statistics cards
   - Today's horoscope
   - Available astrologers with search
   - Quick action cards
   - Sidebar navigation

3. **Login** (`/login`)
   - Email/phone login toggle
   - Social authentication
   - Password management
   - Split-screen design

## Design Highlights

### Color Scheme
- **Primary**: Orange (#f15a20) - Represents spirituality and energy
- **Accent**: Purple (#764ba2) - Represents wisdom and mysticism
- **Background**: Gradient from slate to orange

### Typography
- Bold headings with gradient text effects
- Clear hierarchy
- Readable body text

### Interactive Elements
- Hover effects on cards and buttons
- Smooth transitions
- Loading states (can be implemented)
- Toast notifications (can be implemented)

## Future Enhancements (Backend Integration)

- User authentication with JWT
- Real-time chat with astrologers
- Video/voice call integration
- Payment gateway integration
- Birth chart generation API
- Horoscope API integration
- User profile management
- Booking and scheduling system
- Review and rating system
- Multi-language support
- Push notifications

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Content
- Update text in page components
- Modify astrologer data (currently hardcoded)
- Customize services and features

## License

MIT

## Support

For questions or issues, please contact support@divineconnect.com

---

Built with ❤️ for the astrology community


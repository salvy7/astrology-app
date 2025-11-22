# Setup Guide - Divine Connect Astrology App

This guide will help you set up and run the Divine Connect astrology web application.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js (or use yarn/pnpm)
- **Git**: For version control ([Download](https://git-scm.com/))

## Installation Steps

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)

### 2. Verify Installation

After installation, you should see:
- `node_modules/` directory created
- `package-lock.json` file created

### 3. Run Development Server

Start the development server:

```bash
npm run dev
```

The application will start at `http://localhost:3000`

### 4. View the Application

Open your browser and navigate to:
- **Landing Page**: http://localhost:3000
- **Login Page**: http://localhost:3000/login
- **Dashboard**: http://localhost:3000/dashboard

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot reload at http://localhost:3000

### Production Build
```bash
npm run build
```
Creates an optimized production build

### Start Production Server
```bash
npm run build
npm start
```
Runs the production build locally

### Linting
```bash
npm run lint
```
Checks for code quality issues

## Project Structure

```
tryAstrology/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page (/)
│   ├── globals.css          # Global styles
│   ├── dashboard/
│   │   └── page.tsx         # Dashboard page (/dashboard)
│   └── login/
│       └── page.tsx         # Login page (/login)
├── public/                   # Static files
├── node_modules/            # Dependencies (auto-generated)
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind CSS config
├── next.config.js           # Next.js config
├── postcss.config.js        # PostCSS config
└── README.md                # Project documentation
```

## Features Overview

### 1. Landing Page (/)
- Hero section with call-to-action
- Features showcase
- Services grid (Love, Career, Finance, Health, etc.)
- How it works section
- Footer with links

### 2. Login Page (/login)
- Email/Phone authentication UI
- Social login buttons (Google, Facebook)
- Password visibility toggle
- Beautiful split-screen design
- Mobile responsive

### 3. Dashboard (/dashboard)
- User profile header
- Statistics cards
- Today's horoscope
- Available astrologers list
- Search and filter functionality
- Quick action cards
- Sidebar navigation

## Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Change these hex values
    600: '#f15a20',  // Main brand color
    // ...
  }
}
```

### Update Content

1. **Landing Page**: Edit `app/page.tsx`
2. **Dashboard**: Edit `app/dashboard/page.tsx`
3. **Login**: Edit `app/login/page.tsx`

### Add New Pages

Create a new folder in `app/`:

```bash
app/
  new-page/
    page.tsx
```

Access at: http://localhost:3000/new-page

## Troubleshooting

### Port Already in Use

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

### Module Not Found Errors

Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Check Node.js version:

```bash
node --version  # Should be 18.x or higher
```

### Styling Not Working

Restart the development server:

```bash
# Stop with Ctrl+C
npm run dev
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Fonts**: Optimize web fonts loading
3. **Code Splitting**: Next.js handles this automatically
4. **Caching**: Implement API response caching

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Configure build settings in Netlify

### Deploy to Other Platforms

Build static export:

```bash
# Add to next.config.js:
# output: 'export'

npm run build
```

## Next Steps (Backend Integration)

To make this a fully functional app, you'll need:

1. **Authentication API**
   - User registration/login
   - JWT tokens
   - OAuth integration

2. **Astrologer Management**
   - Profile management
   - Availability scheduling
   - Rating system

3. **Consultation System**
   - Real-time chat (WebSocket)
   - Video call integration
   - Payment processing

4. **Birth Chart Generation**
   - Planetary calculation API
   - Kundli generation
   - Horoscope predictions

5. **Database**
   - User profiles
   - Consultation history
   - Astrologer data

## Support

For issues or questions:
- Check documentation: [Next.js Docs](https://nextjs.org/docs)
- Review code comments
- Create an issue in the repository

## License

MIT License - Feel free to use and modify

---

Happy Coding! 🚀✨


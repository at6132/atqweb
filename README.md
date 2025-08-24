# ATQ Website

A minimal, performance-focused website for ATQ - automated trading systems with engineered risk.

## Features

- **Performance**: <50KB CSS/JS, static export
- **Security**: Strict CSP, HSTS, no tracking
- **Design**: Dark theme, ATQ brand colors, clean typography
- **Accessibility**: WCAG AA compliant contrast ratios
- **Contact Form**: MongoDB database integration

## Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your MongoDB connection string

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

## Environment Variables

Create a `.env.local` file with:

```bash
# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/atq_website

# For MongoDB Atlas (cloud):
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/atq_website
```

## Structure

- `/` - Homepage with main headline
- `/contact` - Contact form with MongoDB integration
- `/security` - Security practices
- `/careers` - Career opportunities
- `/careers/[role]` - Individual role pages

## Database

The contact form submissions are stored in MongoDB with the following schema:

```javascript
{
  name: String,
  email: String,
  company: String (optional),
  message: String,
  submittedAt: Date,
  ip: String,
  userAgent: String
}
```

## Design System

### Colors
- **ATQ Black** (#000000) - Text and borders
- **ATQ White** (#FFFFFF) - Page background
- **ATQ Gray** (#666666) - Secondary text

### Typography
- **Primary**: Inter with custom grotesk styling
- **ATQ Grotesk**: Wide, uppercase, architectural styling
- **Body**: 15px/24px
- **Custom classes**: `.atq-grotesk`, `.atq-grotesk-display`, `.atq-grotesk-wide`

## Compliance

- No solicitation of capital
- Informational purposes only
- No tracking or third-party analytics
- Privacy-focused design
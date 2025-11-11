# CSE Freshers Party 2025 - Invite Website 🎉

An interactive and modern invite website for the Computer Science Engineering Freshers Party 2025, built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Core Features
- ✅ Responsive navigation bar with smooth scrolling
- ✅ Animated hero section with countdown timer
- ✅ Interactive particle background
- ✅ Event details and information
- ✅ Interactive timeline for event schedule
- ✅ Highlights showcase with icons
- ✅ Image gallery with lightbox
- ✅ RSVP/Registration form with validation
- ✅ FAQ section with accordion
- ✅ Contact information
- ✅ Social media integration
- ✅ Mobile-first responsive design

### Technical Features
- ⚡ Built with Next.js 14+ App Router
- 🎨 Styled with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 🔥 Modern glassmorphism UI
- 🌈 Gradient effects and animations
- ♿ Accessibility considerations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone or navigate to the project directory:**
```bash
cd "c:\Users\ASUS\Desktop\Fresher"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory by copying `.env.example`:
```bash
copy .env.example .env.local
```

Update the environment variables with your actual values:
```env
# Firebase Configuration (Optional - for RSVP/Registration)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here

# Event Details
NEXT_PUBLIC_EVENT_DATE=2025-12-31T18:00:00
NEXT_PUBLIC_EVENT_VENUE=Computer Science Department, Main Building
NEXT_PUBLIC_EVENT_ADDRESS=Your College Address Here

# Contact Email
NEXT_PUBLIC_CONTACT_EMAIL=cse.committee@college.edu
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open your browser and visit:**
```
http://localhost:3000
```

## 📁 Project Structure

```
Fresher/
├── .github/
│   └── copilot-instructions.md
├── public/
│   └── gallery/              # Place event images here
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Main page
│   └── components/
│       ├── Navbar.tsx        # Navigation bar
│       ├── Hero.tsx          # Hero section with countdown
│       ├── ParticleBackground.tsx  # Animated particle background
│       ├── About.tsx         # About event section
│       ├── EventDetails.tsx  # Event details and information
│       ├── Timeline.tsx      # Event schedule timeline
│       ├── Highlights.tsx    # Event highlights
│       ├── Gallery.tsx       # Photo gallery
│       ├── RSVP.tsx          # Registration form
│       ├── FAQ.tsx           # Frequently asked questions
│       ├── Contact.tsx       # Contact information
│       └── Footer.tsx        # Footer section
├── .env.example              # Environment variables template
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore file
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🎨 Customization

### Update Event Information

1. **Update environment variables** in `.env.local`:
   - Event date and time
   - Venue details
   - Contact information

2. **Update content** in component files:
   - Modify welcome messages in `About.tsx`
   - Update timeline in `Timeline.tsx`
   - Change highlights in `Highlights.tsx`
   - Update FAQ items in `FAQ.tsx`
   - Modify organizer details in `Contact.tsx`

### Add Images

1. Create a `public/gallery` directory
2. Add your event images (img1.jpg, img2.jpg, etc.)
3. Update the `images` array in `Gallery.tsx` with actual image paths

### Customize Colors

Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#3B82F6',    // Blue
  secondary: '#8B5CF6',   // Purple
  accent: '#F59E0B',      // Orange/Gold
}
```

### Firebase Integration (Optional)

To enable RSVP form submissions:

1. Create a Firebase project at https://firebase.google.com
2. Enable Firestore database
3. Update environment variables with Firebase credentials
4. Implement Firebase submission logic in `RSVP.tsx`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

### Core
- **Next.js** - React framework
- **React** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library

### Features
- **react-countdown** - Countdown timer
- **react-scroll** - Smooth scrolling
- **react-icons** - Icon library
- **react-hook-form** - Form handling
- **firebase** (optional) - Backend services
- **leaflet** (optional) - Maps integration
- **qrcode.react** (optional) - QR code generation

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Import your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables
6. Deploy!

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images (when added)

## 🎯 Performance

Target metrics:
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3s

Optimizations:
- Image lazy loading
- Code splitting
- Component optimization
- Tailwind CSS purging

## 📄 License

This project is created for educational purposes for the CSE Freshers Party 2025.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📞 Support

For questions or support, contact:
- Email: cse.committee@college.edu
- Phone: +91 12345 67890

## 🎉 Acknowledgments

- CSE Department Student Committee
- All the amazing freshers of 2025!
- Built with ❤️ by CSE Students

---

**Made with ❤️ for CSE Freshers 2025**

# Amigos Overseas Education Website

A modern, responsive website for Amigos Overseas Education - your trusted study abroad and visa consultancy partner.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Multiple Services**: Study visa, tourist visa, and professional courses
- **Contact Integration**: WhatsApp integration and email contact forms
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Email Service**: EmailJS

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Email Configuration

The website uses EmailJS for sending contact form emails. To set up email functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's full name
   - `{{from_email}}` - Sender's email address
   - `{{phone}}` - Sender's phone number
   - `{{service}}` - Service they're interested in
   - `{{message}}` - Their message
   - `{{to_email}}` - Recipient email (farhan45778@gmail.com)

4. Update the configuration in `src/utils/email.ts`:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

## Project Structure

```
src/
├── components/          # React components
├── data/               # JSON data files
├── utils/              # Utility functions
├── assets/             # Static assets
└── styles/             # CSS files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contact Integration

The website includes two main contact methods:

1. **WhatsApp Integration**: Direct links to WhatsApp chat with pre-filled messages
2. **Email Forms**: Contact forms that send emails directly using EmailJS

## Deployment

The project is optimized for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build the project with `npm run build` and deploy the `dist` folder.

## License

This project is proprietary and belongs to Amigos Overseas Education.
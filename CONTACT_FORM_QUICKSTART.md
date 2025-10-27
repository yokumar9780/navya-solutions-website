# Quick Start: Contact Form Setup

## TL;DR

1. **Sign up at EmailJS**: https://www.emailjs.com/
2. **Connect your email** (Gmail, Outlook, etc.)
3. **Create a template** (see EMAILJS_SETUP.md for template structure)
4. **Add credentials to `.env.local`**:
   ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id_here
    VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
    VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
5. **Restart dev server**: `npm run dev`
6. **Test the form** at http://localhost:5173/#contact

## Files Modified

- ✅ `components/Contact.tsx` - Updated to use EmailJS and environment variables
- ✅ `.env.local` - Created with placeholder credentials
- ✅ `.env.example` - Updated with EmailJS variables
- ✅ `EMAILJS_SETUP.md` - Detailed setup instructions

## How It Works

1. User fills out contact form
2. Form submits to EmailJS service via their API
3. EmailJS sends email to `info@navyaSolutions.se`
4. User receives success/error message
5. Form resets on success

## Features

- ✅ Loading state with spinner
- ✅ Success/error alerts
- ✅ Form validation
- ✅ Disabled inputs during submission
- ✅ Environment variable configuration
- ✅ Secure (credentials not in code)
- ✅ Free tier: 100 emails/month

## Next Steps

See `EMAILJS_SETUP.md` for detailed configuration instructions.

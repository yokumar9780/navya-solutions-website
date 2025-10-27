# EmailJS Setup Guide for Contact Form

The contact form now uses **EmailJS** to send emails directly from the client-side without needing a backend server. Follow these steps to configure it:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a **free account** (100 emails/month free)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from the Navya Solutions contact form.
```

4. In the template settings:
   - **To Email**: Set to `info@navyaSolutions.se` or use `{{to_email}}`
   - **From Name**: `Navya Solutions Website`
   - **Reply To**: `{{from_email}}` (so you can reply directly to the sender)

5. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `AbC123XyZ`)
3. Copy this key

## Step 5: Configure Environment Variables

The EmailJS credentials are stored in environment variables for security. Add your credentials to `.env.local`:

1. Open the `.env.local` file in the project root
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234       # Your Service ID
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678     # Your Template ID
VITE_EMAILJS_PUBLIC_KEY=AbC123XyZ456          # Your Public Key
```

3. Save the file

**Note:** The `.env.local` file is already in `.gitignore` and won't be committed to Git, keeping your credentials secure.

**Note:** The `.env.local` file is already in `.gitignore` and won't be committed to Git, keeping your credentials secure.

## Step 6: Test the Form

1. Save the file and run `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email inbox (the one configured in EmailJS)
5. You should receive the contact form submission

## Important Notes

- **Restart dev server**: After updating `.env.local`, restart your dev server (`npm run dev`) for changes to take effect
- **Environment variables**: Vite requires the `VITE_` prefix for client-side environment variables
- **Security**: Never commit `.env.local` to Git - it's already in `.gitignore`

## EmailJS Free Tier Limits

- **100 emails per month** (free)
- Upgrade to paid plans for higher limits
- Monitor usage in EmailJS dashboard

## Troubleshooting

### Form shows "Email service not configured yet"
- Make sure you've added your credentials to `.env.local`
- Verify the environment variable names start with `VITE_`
- Restart the dev server after updating `.env.local`

### Emails not arriving
- Check EmailJS dashboard logs for errors
- Verify email service is connected properly
- Check spam/junk folder
- Ensure template variables match the ones sent from the form

### CORS errors
- EmailJS handles CORS automatically, no configuration needed
- Make sure you're using the correct Public Key (not Private Key)

## Alternative Email Services

If you need more features or higher limits, consider:

- **Formspree** (https://formspree.io/) - 50 submissions/month free
- **SendGrid** (requires backend) - 100 emails/day free
- **Mailgun** (requires backend) - 5,000 emails/month free
- **Resend** (requires backend) - 3,000 emails/month free

## Support

For EmailJS documentation and support:
- Documentation: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/support/

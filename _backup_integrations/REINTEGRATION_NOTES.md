# Reintegration Notes

After importing the new design, restore/reapply these integrations:

## Files to Restore (copy from this folder)

1. **`api/send-inquiry.ts`** → Copy entire `api/` folder to project root
2. **`.env`** → Copy to project root (contains RESEND_API_KEY)
3. **`.env.example`** → Copy to project root
4. **`.gitignore`** → Copy or merge with new .gitignore
5. **`vercel.json`** → Copy to project root
6. **`tsconfig.json`** → Copy to project root
7. **`tsconfig.node.json`** → Copy to project root
8. **`vite-env.d.ts`** → Copy to `src/vite-env.d.ts`
9. **`index.html`** → Merge meta tags into new index.html
10. **`public/`** → Copy folder (favicon + opengraph images)

## Dependencies to Install

```bash
npm install resend
npm install --save-dev @vercel/node @types/node typescript
```

## Key Integration Details

### Resend Email (Booking Form)
- API Key: stored in `.env` as `RESEND_API_KEY`
- Sends to: `tridententertainment3@gmail.com`
- From: `inquiries@trident-entertainment.com`

### Social Media Links
- Instagram: `https://www.instagram.com/trident.entertainment_/`
- Facebook: `https://www.facebook.com/profile.php?id=61568242777390`
- Email: `mailto:tridententertainment3@gmail.com`
- Phone: `tel:+18086340013`

### Eventbrite Ticket Link
- URL: `https://www.eventbrite.com/e/paint-sip-live-muse-tickets-1981391422081`

### Meta Tags (from index.html)
- Title: "Trident Entertainment | Premium Male Entertainment in Oahu"
- Domain: `trident-entertainment.com`
- Favicon: `/trident-favicon.webp`
- OG Image: `/trident-opengraph.webp`

## Booking Form Integration

The `Booking.tsx` component needs:
```tsx
import React, { useState } from 'react';
import { useForm } from "react-hook-form"

// Add state for submission
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

// Update onSubmit to call API
const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  setSubmitStatus('idle');
  try {
    const response = await fetch('/api/send-inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed');
    setSubmitStatus('success');
    reset();
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

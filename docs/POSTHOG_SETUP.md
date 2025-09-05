# GDPR-Compliant PostHog Integration Guide

This project has PostHog analytics integrated with full GDPR compliance, including cookie consent management.

## 🍪 Cookie Consent System

The integration includes a comprehensive cookie consent system that:
- ✅ Shows a consent banner to new users
- ✅ Allows granular consent preferences (necessary, analytics, marketing, preferences)
- ✅ Only initializes PostHog when user gives analytics consent
- ✅ Persists consent choices in localStorage
- ✅ Provides easy consent management UI
- ✅ Respects "Do Not Track" browser settings

## Setup

1. **Get your PostHog API Key**:
   - Sign up at [PostHog](https://posthog.com/)
   - Create a new project
   - Copy your Project API Key from the project settings

2. **Configure Environment Variables**:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your PostHog configuration:
   ```env
   VITE_POSTHOG_KEY=phc_3ZHygDHfK54khlmzcE3VNasRRcGD62KRxBIr151hGJ1
   VITE_POSTHOG_HOST=https://eu.i.posthog.com
   ```

## 🏗️ Architecture

### Components:
- **`ConsentManager`** (`src/stores/consentStore.ts`): Plain JS singleton for consent state management
- **`useConsent`** (`src/hooks/useConsent.ts`): React hook for consent state
- **`CookieConsentBanner`** (`src/components/consent/CookieConsentBanner.tsx`): GDPR-compliant consent UI
- **`usePostHog`** (`src/hooks/usePostHog.ts`): Consent-aware PostHog hook

### Flow:
1. User visits site → Consent banner appears
2. User makes choice → Consent stored in localStorage
3. If analytics consent given → PostHog initializes
4. If consent withdrawn → PostHog resets and stops tracking

## 📊 Features

- **Automatic Page View Tracking**: Only when consent given
- **Custom Event Tracking**: Respects consent status
- **User Identification**: Only with consent
- **Session Recordings**: Enabled in production with consent
- **Development Mode**: Automatically detected (localhost = development)
- **Consent Persistence**: Choices saved across sessions
- **Granular Control**: Separate consent for analytics, marketing, preferences

## 🚀 Usage Examples

### Basic Event Tracking (Consent-Aware)
```tsx
import { usePostHog } from './hooks/usePostHog'

function MyComponent() {
  const { capture, isEnabled } = usePostHog()
  
  const handleButtonClick = () => {
    // This only tracks if user has given analytics consent
    capture('button_clicked', {
      button_name: 'cta_button',
      page: 'homepage'
    })
  }
  
  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
      {isEnabled() && <p>Analytics enabled</p>}
    </div>
  )
}
```

### Consent Management
```tsx
import { useConsent } from './hooks/useConsent'

function ConsentDemo() {
  const { consent, hasConsent, acceptAll, rejectAll, updateConsent } = useConsent()
  
  return (
    <div>
      <p>Analytics consent: {hasConsent('analytics') ? 'Given' : 'Not given'}</p>
      <button onClick={acceptAll}>Accept All</button>
      <button onClick={rejectAll}>Reject All</button>
      <button onClick={() => updateConsent({ analytics: true })}>
        Enable Analytics Only
      </button>
    </div>
  )
}
```

### Analytics Components (Consent-Aware)
```tsx
import { AnalyticsButton, AnalyticsLink } from './components/analytics/AnalyticsComponents'

function MyComponent() {
  return (
    <div>
      {/* These components automatically respect consent */}
      <AnalyticsButton 
        eventName="cta_clicked" 
        eventProperties={{ source: 'hero_section' }}
      >
        Get Started
      </AnalyticsButton>
      
      <AnalyticsLink 
        href="https://github.com/yourrepo" 
        eventName="external_link_clicked"
        eventProperties={{ destination: 'github' }}
      >
        View on GitHub
      </AnalyticsLink>
    </div>
  )
}
```

## 🔒 Privacy & Compliance

### GDPR Compliance:
- ✅ **Explicit Consent**: Users must actively choose to accept analytics
- ✅ **Granular Control**: Separate consent for different cookie types
- ✅ **Easy Withdrawal**: Users can change preferences anytime
- ✅ **Data Minimization**: Only collects data when consent given
- ✅ **Transparency**: Clear description of what each cookie type does

### Privacy Features:
- PostHog respects "Do Not Track" browser settings
- Session recordings only with explicit consent
- No tracking until user accepts analytics cookies
- Consent choices persist across sessions
- Easy consent withdrawal mechanism

### Cookie Types:
- **Necessary**: Always active (basic functionality)
- **Analytics**: PostHog tracking (requires consent)
- **Marketing**: Advertising cookies (requires consent)
- **Preferences**: User settings (requires consent)

## 🛠️ Development

### Development Mode:
- PostHog automatically detects localhost (development) vs production
- On localhost: Tracking disabled, debug mode enabled
- On production domains: Full tracking with user consent
- Console logging shows current mode and tracking status

### Testing Consent Flow:
1. Clear localStorage: `localStorage.clear()`
2. Refresh page
3. Test different consent scenarios
4. Check console for PostHog initialization messages

### Debugging:
- Check Network tab for PostHog requests (only after consent)
- Console logs show consent status and PostHog initialization
- Use browser dev tools to inspect localStorage for consent data

## 🎯 Best Practices

1. **Always check consent** before tracking custom events
2. **Use the provided hooks** instead of direct PostHog calls
3. **Test consent flow** regularly in development
4. **Monitor console** for consent-related messages
5. **Respect user choices** - don't re-ask too frequently

## 📁 File Structure

```
src/
├── stores/
│   └── consentStore.ts          # Consent state management
├── hooks/
│   ├── useConsent.ts           # React hook for consent
│   └── usePostHog.ts           # Consent-aware PostHog hook
├── components/
│   ├── consent/
│   │   └── CookieConsentBanner.tsx # GDPR consent UI
│   └── analytics/
│       └── AnalyticsComponents.tsx # Pre-built tracking components
└── lib/
    └── posthog.ts              # PostHog initialization with consent
```

This implementation ensures full GDPR compliance while providing a smooth user experience and comprehensive analytics when consent is given.

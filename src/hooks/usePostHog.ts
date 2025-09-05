import { useEffect } from 'react'
import { posthog } from '../lib/posthog'
import { useConsent } from './useConsent'

export const usePostHog = () => {
  const { hasConsent } = useConsent()

  return {
    // Track custom events (only if consent given)
    capture: (eventName: string, properties?: Record<string, any>) => {
      if (hasConsent('analytics')) {
        posthog.capture(eventName, properties)
      }
    },
    
    // Identify users (only if consent given)
    identify: (userId: string, properties?: Record<string, any>) => {
      if (hasConsent('analytics')) {
        posthog.identify(userId, properties)
      }
    },
    
    // Set user properties (only if consent given)
    setPersonProperties: (properties: Record<string, any>) => {
      if (hasConsent('analytics')) {
        posthog.setPersonProperties(properties)
      }
    },
    
    // Reset user (for logout)
    reset: () => {
      if (hasConsent('analytics')) {
        posthog.reset()
      }
    },
    
    // Track page views manually (only if consent given)
    capturePageView: (properties?: Record<string, any>) => {
      if (hasConsent('analytics')) {
        posthog.capture('$pageview', properties)
      }
    },

    // Check if analytics is enabled
    isEnabled: () => hasConsent('analytics')
  }
}

// Hook for tracking page views with route changes (respects consent)
export const usePageTracking = () => {
  const { hasConsent } = useConsent()

  useEffect(() => {
    if (!hasConsent('analytics')) return

    const trackPageView = () => {
      posthog.capture('$pageview', {
        $current_url: window.location.href,
        path: window.location.pathname,
        hash: window.location.hash
      })
    }

    // Track initial page view
    trackPageView()

    // Track hash changes (since you're using hash routing)
    const handleHashChange = () => {
      trackPageView()
    }

    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [hasConsent])
}

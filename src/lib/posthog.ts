import posthog from 'posthog-js'
import { consentManager } from '../stores/consentStore'

let isInitialized = false

// Helper function to detect if we're in development
const isLocalhost = () => {
  if (typeof window === 'undefined') return false
  const hostname = window.location.hostname
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0'
}

export const initPostHog = () => {
  // Only initialize PostHog when analytics consent is given
  if (typeof window !== 'undefined' && !isInitialized) {
    const apiKey = import.meta.env.VITE_POSTHOG_KEY
    const host = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com'
    const isDev = isLocalhost()
    
    if (apiKey && consentManager.hasConsent('analytics')) {
      posthog.init(apiKey, {
        api_host: host,
        // PostHog recommended setting for person profiles
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        // Capture pageviews automatically
        capture_pageview: true,
        // Capture pageleaves automatically  
        capture_pageleave: true,
        // Enable session recordings
        session_recording: {
          recordCrossOriginIframes: true,
        },
        // Privacy settings
        respect_dnt: true,
        // Advanced features
        autocapture: true,
        // Debug mode in development
        loaded: (posthog) => {
          if (isDev) {
            console.log('PostHog loaded successfully with user consent (development mode)')
            // Enable debug mode in development
            posthog.debug()
          }
        }
      })
      
      isInitialized = true
      
      // Disable tracking in development (localhost)
      if (isDev) {
        posthog.opt_out_capturing()
        console.log('PostHog tracking disabled on localhost')
      }
    } else if (isDev && !consentManager.hasConsent('analytics')) {
      console.log('PostHog not initialized - user has not consented to analytics cookies')
    }
  }
}

export const resetPostHog = () => {
  if (isInitialized && typeof window !== 'undefined') {
    posthog.reset()
    isInitialized = false
    const isDev = isLocalhost()
    if (isDev) {
      console.log('PostHog reset - user withdrew consent')
    }
  }
}

// Initialize PostHog when consent changes
export const setupConsentWatcher = () => {
  if (typeof window !== 'undefined') {
    consentManager.subscribe((consent) => {
      if (consent.analytics && !isInitialized) {
        // User gave consent - initialize PostHog
        initPostHog()
      } else if (!consent.analytics && isInitialized) {
        // User withdrew consent - reset PostHog
        resetPostHog()
      }
    })
  }
}

export { posthog }

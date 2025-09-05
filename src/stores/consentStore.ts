// Cookie consent management with localStorage persistence
export interface CookieConsent {
  necessary: boolean      // Always true, required for basic functionality
  analytics: boolean      // PostHog, Google Analytics, etc.
  marketing: boolean      // Marketing/advertising cookies
  preferences: boolean    // User preference cookies
  consentGiven: boolean   // Whether user has made a choice
  consentDate: string | null
}

const STORAGE_KEY = 'cookie-consent'

const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
  consentGiven: false,
  consentDate: null,
}

class ConsentManager {
  private consent: CookieConsent = defaultConsent
  private listeners: ((consent: CookieConsent) => void)[] = []

  constructor() {
    this.loadFromStorage()
  }

  private loadFromStorage(): void {
    if (typeof window === 'undefined') return
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        this.consent = { ...defaultConsent, ...JSON.parse(stored) }
      }
    } catch (error) {
      console.warn('Failed to load cookie consent from storage:', error)
    }
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.consent))
    } catch (error) {
      console.warn('Failed to save cookie consent to storage:', error)
    }
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.consent))
  }

  getConsent(): CookieConsent {
    return { ...this.consent }
  }

  hasConsent(type: keyof Omit<CookieConsent, 'consentGiven' | 'consentDate'>): boolean {
    return this.consent[type]
  }

  hasGivenConsent(): boolean {
    return this.consent.consentGiven
  }

  acceptAll(): void {
    this.consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      consentGiven: true,
      consentDate: new Date().toISOString(),
    }
    this.saveToStorage()
    this.notifyListeners()
  }

  rejectAll(): void {
    this.consent = {
      necessary: true, // Can't reject necessary cookies
      analytics: false,
      marketing: false,
      preferences: false,
      consentGiven: true,
      consentDate: new Date().toISOString(),
    }
    this.saveToStorage()
    this.notifyListeners()
  }

  updateConsent(consents: Partial<Pick<CookieConsent, 'analytics' | 'marketing' | 'preferences'>>): void {
    this.consent = {
      ...this.consent,
      ...consents,
      necessary: true, // Always keep necessary cookies enabled
      consentGiven: true,
      consentDate: new Date().toISOString(),
    }
    this.saveToStorage()
    this.notifyListeners()
  }

  resetConsent(): void {
    this.consent = { ...defaultConsent }
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY)
    }
    this.notifyListeners()
  }

  subscribe(listener: (consent: CookieConsent) => void): () => void {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }
}

// Create singleton instance
export const consentManager = new ConsentManager()

import { useState, useEffect } from 'react'
import { consentManager, CookieConsent } from '../stores/consentStore'

export const useConsent = () => {
  const [consent, setConsent] = useState<CookieConsent>(consentManager.getConsent())

  useEffect(() => {
    const unsubscribe = consentManager.subscribe(setConsent)
    return unsubscribe
  }, [])

  return {
    consent,
    hasConsent: (type: keyof Omit<CookieConsent, 'consentGiven' | 'consentDate'>) => 
      consentManager.hasConsent(type),
    hasGivenConsent: () => consentManager.hasGivenConsent(),
    acceptAll: () => consentManager.acceptAll(),
    rejectAll: () => consentManager.rejectAll(),
    updateConsent: (consents: Partial<Pick<CookieConsent, 'analytics' | 'marketing' | 'preferences'>>) => 
      consentManager.updateConsent(consents),
    resetConsent: () => consentManager.resetConsent(),
  }
}

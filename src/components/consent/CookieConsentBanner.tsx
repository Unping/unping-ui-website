import React, { useState } from 'react'
import { useConsent } from '../../hooks/useConsent'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Badge } from '../ui/badge'
import { X, Cookie, Shield, BarChart3, Target, Settings } from 'lucide-react'

export const CookieConsentBanner: React.FC = () => {
  const { consent, hasGivenConsent, acceptAll, rejectAll, updateConsent } = useConsent()
  const [showDetails, setShowDetails] = useState(false)
  const [tempConsent, setTempConsent] = useState({
    analytics: consent.analytics,
    marketing: consent.marketing,
    preferences: consent.preferences,
  })

  // Don't show banner if user has already given consent
  if (hasGivenConsent()) {
    return null
  }

  const handleSavePreferences = () => {
    updateConsent(tempConsent)
  }

  const handleTempConsentChange = (type: keyof typeof tempConsent, value: boolean) => {
    setTempConsent(prev => ({ ...prev, [type]: value }))
  }

  if (showDetails) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-orange-500" />
                <CardTitle className="text-white">Cookie Preferences</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDetails(false)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardDescription className="text-neutral-300">
              Manage your cookie preferences. You can change these settings at any time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="necessary" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-neutral-800">
                <TabsTrigger value="necessary" className="text-xs">Necessary</TabsTrigger>
                <TabsTrigger value="analytics" className="text-xs">Analytics</TabsTrigger>
                <TabsTrigger value="marketing" className="text-xs">Marketing</TabsTrigger>
                <TabsTrigger value="preferences" className="text-xs">Preferences</TabsTrigger>
              </TabsList>
              
              <TabsContent value="necessary" className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-white font-medium">Necessary Cookies</span>
                    <Badge variant="secondary" className="bg-green-900 text-green-100">Always Active</Badge>
                  </div>
                </div>
                <p className="text-sm text-neutral-300">
                  These cookies are essential for the website to function properly. They enable basic features like navigation and access to secure areas.
                </p>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-blue-500" />
                    <span className="text-white font-medium">Analytics Cookies</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tempConsent.analytics}
                      onChange={(e) => handleTempConsentChange('analytics', e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full transition-colors ${tempConsent.analytics ? 'bg-blue-500' : 'bg-neutral-600'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${tempConsent.analytics ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`} />
                    </div>
                  </label>
                </div>
                <p className="text-sm text-neutral-300">
                  Help us understand how visitors interact with our website by collecting anonymous usage data via PostHog.
                </p>
              </TabsContent>
              
              <TabsContent value="marketing" className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-500" />
                    <span className="text-white font-medium">Marketing Cookies</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tempConsent.marketing}
                      onChange={(e) => handleTempConsentChange('marketing', e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full transition-colors ${tempConsent.marketing ? 'bg-purple-500' : 'bg-neutral-600'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${tempConsent.marketing ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`} />
                    </div>
                  </label>
                </div>
                <p className="text-sm text-neutral-300">
                  Used to deliver relevant advertisements and track advertising campaign performance.
                </p>
              </TabsContent>
              
              <TabsContent value="preferences" className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-amber-500" />
                    <span className="text-white font-medium">Preference Cookies</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tempConsent.preferences}
                      onChange={(e) => handleTempConsentChange('preferences', e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full transition-colors ${tempConsent.preferences ? 'bg-amber-500' : 'bg-neutral-600'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${tempConsent.preferences ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`} />
                    </div>
                  </label>
                </div>
                <p className="text-sm text-neutral-300">
                  Remember your settings and preferences to provide a personalized experience.
                </p>
              </TabsContent>
            </Tabs>
            
            <div className="flex gap-3 mt-6 pt-4 border-t border-neutral-700">
              <Button onClick={handleSavePreferences} className="flex-1">
                Save Preferences
              </Button>
              <Button onClick={acceptAll} variant="outline" className="flex-1">
                Accept All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-neutral-900/95 backdrop-blur-sm border-neutral-700 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-orange-500 mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <h3 className="font-semibold text-white">We use cookies</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze our traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button
                onClick={() => setShowDetails(true)}
                variant="outline"
                size="sm"
                className="text-neutral-300 border-neutral-600 hover:bg-neutral-800 hover:text-white"
              >
                Customize
              </Button>
              <Button
                onClick={rejectAll}
                variant="outline"
                size="sm"
                className="text-neutral-300 border-neutral-600 hover:bg-neutral-800 hover:text-white"
              >
                Reject All
              </Button>
              <Button
                onClick={acceptAll}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Accept All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

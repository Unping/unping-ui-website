import { Button } from './components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Terminal } from 'lucide-react'
import { Toaster } from './components/ui/sonner'
import { DotBackground } from './components/ui/dot-background'
import { ContainerTextFlip } from './components/ui/container-text-flip'
import { GlowingEffect } from './components/ui/glowing-effect'
import React from 'react'
import Imprint from './pages/Imprint'
import { usePageTracking } from './hooks/usePostHog'
import { CookieConsentBanner } from './components/consent/CookieConsentBanner'

function App() {
  const [route, setRoute] = React.useState<string>(() => window.location.hash || '#/')
  
  // Track page views automatically (only when consent is given)
  usePageTracking()

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isImprint = route.startsWith('#/imprint')

  return (
    <div className="relative min-h-screen bg-neutral-950 overflow-hidden">
      <DotBackground />
      <div className="relative z-10">
      <Toaster richColors position="top-right" />
      {/* Header */}
      <header className="border-b border-neutral-800/50 backdrop-blur-sm bg-neutral-950/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 blur-md scale-150 group-hover:scale-175 transition-transform duration-300"></div>
                <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-pulse"></div>
                <img src="/favicon.svg" alt="Unping UI logo" width="18" height="18" className="relative z-10" />
              </div>
              <span className="text-heading-md font-semibold text-white">unping-ui</span>
              <span className="px-2 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full">v0.1.6</span>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="https://widgetbook.unping-ui.com" target="_blank" rel="noreferrer" className="text-body-md text-neutral-300 hover:text-white transition-colors">Widgetbook</a>
              <a href="https://www.figma.com/community/file/1545817431010952080" target="_blank" rel="noreferrer" className="text-body-md text-neutral-300 hover:text-white transition-colors">Figma</a>
              <a href="https://github.com/unping/unping-ui" target="_blank" rel="noreferrer" className="text-body-md text-neutral-300 hover:text-white transition-colors">GitHub</a>
            </nav>
          </div>
        </div>
      </header>
      {!isImprint && (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-purple-950/20 to-neutral-950 opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-display-xl lg:text-display-2xl font-bold text-white leading-tight">
                    <ContainerTextFlip words={["Web", "Desktop"]} /> first Flutter UI library.
                  </h1>
                  <p className="text-body-xl text-neutral-300 max-w-xl leading-relaxed">
                    Use Unping-UI directly or use it as a foundation to build your own highly configurable component library.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Button asChild variant="secondary" size="lg" className="px-6">
                    <a href="https://widgetbook.unping-ui.com" target="_blank" rel="noreferrer">Widgetbook</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://github.com/unping/unping-ui" target="_blank" rel="noreferrer">GitHub</a>
                  </Button>
                </div>
              </div>
              <div id="install" className="relative hidden lg:block">
                <Card className="relative bg-neutral-900/80 border-neutral-700/50 backdrop-blur-sm shadow-2xl">
                  <GlowingEffect disabled={false} glow blur={14} borderWidth={2} spread={60} proximity={320} movementDuration={0.6} inactiveZone={0.2} />
                  <CardHeader className="p-8">
                    <CardTitle className="text-white">Install unping-ui</CardTitle>
                    <CardDescription className="text-neutral-400">Choose your preferred method to get started.</CardDescription>
                    <div className="mt-6">
                      <Alert className="bg-neutral-800 border-neutral-700">
                        <AlertTitle className="text-white">1-Click install or shadcn style</AlertTitle>
                        <AlertDescription className="text-neutral-300">
                          We keep the setup simple. Follow one of the tabs below and youll be up and running fast.
                        </AlertDescription>
                      </Alert>
                    </div>
                    <div className="mt-6">
                      <Tabs defaultValue="cli" className="w-full">
                        <TabsList className="grid grid-cols-3 bg-neutral-800">
                          <TabsTrigger value="cli">CLI</TabsTrigger>
                          <TabsTrigger value="pubspec">pubspec.yaml</TabsTrigger>
                          <TabsTrigger value="fpx">FPX</TabsTrigger>
                        </TabsList>
                        <TabsContent value="cli" className="mt-4">
                          <div className="rounded-md bg-neutral-900 border border-neutral-800 p-4">
                            <div className="flex items-center gap-2 text-neutral-300">
                              <Terminal className="w-4 h-4" />
                              <code className="text-sm font-mono">flutter pub add unping_ui</code>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="pubspec" className="mt-4">
                          <div className="rounded-md bg-neutral-900 border border-neutral-800 p-4">
                            <pre className="text-sm text-neutral-200 overflow-x-auto"><code>{`dependencies:\n  unping_ui: ^0.1.5`}</code></pre>
                          </div>
                        </TabsContent>
                        <TabsContent value="fpx" className="mt-4">
                          <div className="rounded-md bg-neutral-900 border border-neutral-800 p-4">
                            <div className="flex items-center gap-2 text-neutral-300">
                              <Terminal className="w-4 h-4" />
                              <code className="text-sm font-mono">flutter pub global activate fpx && fpx repository add --url https://github.com/unping/unping-ui --name unping-ui</code>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild className="bg-primary-600 hover:bg-primary-700">
                        <a href="https://widgetbook.unping-ui.com" target="_blank" rel="noreferrer">Open Widgetbook</a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href="https://github.com/unping/unping-ui" target="_blank" rel="noreferrer">View on GitHub</a>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {isImprint && (
        <main>
          <Imprint />
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 backdrop-blur-sm bg-neutral-950/80 py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <p className="text-body-sm text-neutral-500">
              &copy; 2025 Unping. Built with Flutter — made with love in Dortmund ❤️
            </p>
            <a href="#/imprint" className="text-body-sm text-neutral-400 hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </footer>
      </div>
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
    </div>
  )
}

export default App

import React from 'react'
import { usePostHog } from '../../hooks/usePostHog'

interface AnalyticsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  eventName: string
  eventProperties?: Record<string, any>
  children: React.ReactNode
}

export const AnalyticsButton: React.FC<AnalyticsButtonProps> = ({
  eventName,
  eventProperties,
  children,
  onClick,
  ...props
}) => {
  const { capture } = usePostHog()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the event
    capture(eventName, {
      ...eventProperties,
      timestamp: new Date().toISOString(),
      url: window.location.href
    })
    
    // Call original onClick if provided
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

interface AnalyticsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string
  eventProperties?: Record<string, any>
  children: React.ReactNode
}

export const AnalyticsLink: React.FC<AnalyticsLinkProps> = ({
  eventName,
  eventProperties,
  children,
  onClick,
  href,
  ...props
}) => {
  const { capture } = usePostHog()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the event
    capture(eventName, {
      ...eventProperties,
      href,
      timestamp: new Date().toISOString(),
      url: window.location.href
    })
    
    // Call original onClick if provided
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

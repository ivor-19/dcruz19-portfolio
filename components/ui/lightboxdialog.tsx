"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { XIcon } from "lucide-react"

interface LightboxDialogRootProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

function LightboxDialog({ open, onOpenChange, children }: LightboxDialogRootProps) {
  return (
    <LightboxDialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </LightboxDialogContext.Provider>
  )
}

const LightboxDialogContext = React.createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
} | null>(null)

function useLightboxDialog() {
  const context = React.useContext(LightboxDialogContext)
  if (!context) {
    throw new Error("LightboxDialog components must be used within LightboxDialog")
  }
  return context
}

function LightboxDialogPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(children, document.body)
}

function LightboxDialogOverlay({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { open, onOpenChange } = useLightboxDialog()

  if (!open) return null

  return (
    <div
      data-slot="lightbox-dialog-overlay"
      className={`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 bg-black/95 ${className}`}
      data-state={open ? "open" : "closed"}
      style={{ zIndex: 9998 }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onOpenChange(false)
      }}
      {...props}
    />
  )
}

function LightboxDialogContent({
  className = "",
  children,
  showCloseButton = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  showCloseButton?: boolean
}) {
  const { open, onOpenChange } = useLightboxDialog()

  React.useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault()
          e.stopPropagation()
          onOpenChange(false)
        }
      }

      document.addEventListener("keydown", handleKeyDown, true)

      return () => {
        document.body.style.overflow = originalOverflow
        document.removeEventListener("keydown", handleKeyDown, true)
      }
    }
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <LightboxDialogPortal>
      <LightboxDialogOverlay />
      <div
        data-slot="lightbox-dialog-content"
        className={`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed inset-0 flex items-center justify-center duration-200 ${className}`}
        data-state={open ? "open" : "closed"}
        style={{ 
          zIndex: 9999,
          width: '100vw',
          height: '100vh',
        }}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        {...props}
      >
        {children}
        {showCloseButton && (
          <button
            data-slot="lightbox-dialog-close"
            className="absolute top-4 right-4 p-3 text-white hover:bg-white/20 rounded-lg transition-opacity hover:opacity-100 focus:ring-2 focus:ring-white/50 focus:outline-none disabled:pointer-events-none"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onOpenChange(false)
            }}
            type="button"
          >
            <XIcon className="w-6 h-6" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    </LightboxDialogPortal>
  )
}

function LightboxDialogClose({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = useLightboxDialog()

  return (
    <button
      data-slot="lightbox-dialog-close"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onOpenChange(false)
      }}
      className={className}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

export {
  LightboxDialog,
  LightboxDialogContent,
  LightboxDialogClose,
  LightboxDialogOverlay,
  LightboxDialogPortal,
}
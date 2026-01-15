"use client"

import FloatingHearts from "@/components/floating-hearts"
import GallerySection from "@/components/gallery-section"
import HeroSection from "@/components/hero-section"
import LoadingScreen from "@/components/loading-screen"
import MessageSection from "@/components/message-section"
import { useEffect, useState } from "react"
import PasswordScreen from "@/components/password-screen"
import confetti from "canvas-confetti"
import Navbar from "@/components/navbar"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPasswordVerified, setIsPasswordVerified] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    localStorage.getItem("login") === "2" && handleLoadingComplete()
    setIsLoaded(true)
  }, [])
  
  const handlePasswordCorrect = () => {
    setIsPasswordVerified(true)
  }

  const handleLoadingComplete = () => {
    setShowContent(true)
    handleConfetti()
  }

  const handleConfetti = () => {
    const end = Date.now() + 5 * 1000 // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]
    const frame = () => {
      if (Date.now() > end) return
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })
      requestAnimationFrame(frame)
    }
    frame()
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-rose-100 via-white to-rose-100 overflow-hidden">
      {isLoaded && !isPasswordVerified && <PasswordScreen onPasswordCorrect={handlePasswordCorrect} />}
      {isPasswordVerified && !showContent && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <FloatingHearts />
      {showContent && (
        <>
          <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
            <Navbar />
          </div>
          <HeroSection />
          <GallerySection />
          <MessageSection />
        </>
      )}
    </main>
  )
}

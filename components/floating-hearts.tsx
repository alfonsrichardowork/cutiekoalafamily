"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    // Generate initial hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 3 + Math.random() * 2,
      size: 20 + Math.random() * 15,
    }))

    setHearts(initialHearts)

    // Add new hearts periodically
    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: 0,
        duration: 3 + Math.random() * 2,
        size: 20 + Math.random() * 15,
      }

      setHearts((prev) => {
        const updated = [...prev, newHeart]
        // Remove heart after animation completes
        setTimeout(
          () => {
            setHearts((current) => current.filter((h) => h.id !== newHeart.id))
          },
          (newHeart.duration + newHeart.delay) * 1000,
        )
        return updated
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {/* {hearts.map((heart) => (
            <div
            key={heart.id}
            className="absolute animate-float"
            style={{
                left: `${heart.left}%`,
                bottom: "-10vh",
                fontSize: `${heart.size}px`,
                animation: `float ${heart.duration}s ease-in infinite`,
                animationDelay: `${heart.delay}s`,
                opacity: 0.4,
            }}
            >
            🤍
            </div>
        ))} */}
        {hearts.map((heart, index) =>
            index % 2 === 0 ?
            <div
            key={heart.id}
            className="absolute animate-float"
            style={{
                left: `${heart.left}%`,
                bottom: "-10vh",
                fontSize: `${heart.size}px`,
                animation: `float ${heart.duration}s ease-in infinite`,
                animationDelay: `${heart.delay}s`,
                opacity: 0.4,
            }}
            >
            🤍
            </div>
            : index % 3 === 0 ?
            <div
            key={heart.id}
            className="absolute animate-float"
            style={{
                left: `${heart.left}%`,
                bottom: "-10vh",
                fontSize: `${heart.size}px`,
                animation: `float ${heart.duration}s ease-in infinite`,
                animationDelay: `${heart.delay}s`,
                opacity: 0.4,
            }}
            >
            🖤
            </div>
            :
            <div
            key={heart.id}
            className="absolute animate-float"
            style={{
                left: `${heart.left}%`,
                bottom: "-10vh",
                fontSize: `${heart.size}px`,
                animation: `float ${heart.duration}s ease-in infinite`,
                animationDelay: `${heart.delay}s`,
                opacity: 0.4,
            }}
            >
            💗
            </div>
        )}
    </div>
  )
}

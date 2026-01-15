"use client"

import type React from "react"

import { useState, useEffect } from "react"

// NumberTicker component for animated number display
function NumberTicker({ value, className }: { value: number; className?: string }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    let current = 0
    let frame = 0

    const interval = setInterval(() => {
      frame++
      current = Math.floor(increment * frame)
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(interval)
      } else {
        setDisplayValue(current)
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [value])

  return <span className={className}>{displayValue.toLocaleString()}</span>
}

// AuroraText component simulation
function AuroraText({
  children,
  colors,
}: {
  children: React.ReactNode
  colors: string[]
}) {
  const [gradientPos, setGradientPos] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPos((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: `linear-gradient(${gradientPos}deg, ${colors.join(", ")})`,
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </div>
  )
}

export default function MomentsSection() {
  const [timeTogether, setTimeTogether] = useState({ years: 0, months: 0, days: 0 })

  useEffect(() => {
    const startDate = new Date(2023, 1, 15) // February 15, 2023
    const today = new Date()

    let years = today.getFullYear() - startDate.getFullYear()
    let months = today.getMonth() - startDate.getMonth()
    let days = today.getDate() - startDate.getDate()

    // Adjust if days is negative
    if (days < 0) {
      months--
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
      days += prevMonth.getDate()
    }

    // Adjust if months is negative
    if (months < 0) {
      years--
      months += 12
    }

    setTimeTogether({ years, months, days })
  }, [])

  return (
    <section className=" flex items-center justify-center">
      <div className="max-w-3xl text-center">

       {/* Days counter with enhanced styling */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-pink-100 mb-8">
          <p className="text-gray-500 text-sm md:text-base mb-4 uppercase tracking-widest">Our Time Together for</p>
          <div className="grid grid-cols-5 gap-2 md:gap-6 mb-6">
            {/* Years */}
            <div className="flex flex-col items-center">
              <NumberTicker
                value={timeTogether.years}
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500"
              />
              <span className="text-sm md:text-base text-gray-500 mt-2">Year{timeTogether.years !== 1 ? "s" : ""}</span>
            </div>

            {/* Divider */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl text-gray-300">•</span>
            </div>

            {/* Months */}
            <div className="flex flex-col items-center">
              <NumberTicker
                value={timeTogether.months}
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500"
              />
              <span className="text-sm md:text-base text-gray-500 mt-2">
                Month{timeTogether.months !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Divider */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl text-gray-300">•</span>
            </div>

            {/* Days */}
            <div className="flex flex-col items-center">
              <NumberTicker
                value={timeTogether.days}
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500"
              />
              <span className="text-sm md:text-base text-gray-500 mt-2">Day{timeTogether.days !== 1 ? "s" : ""}</span>
            </div>
          </div>
            <div>
                <p className="text-sm text-gray-400">And counting till forever!</p>
            </div>
        </div>

        {/* Main heading with Aurora text */}
        <h2 className="md:text-6xl text-5xl md:font-semibold font-bold mb-8 leading-tight">
          <AuroraText colors={["#ff1b9d", "#ff457f", "#ff69b4", "#ffb6d9"]}>Our Special Moments</AuroraText>
          <div className="mt-4 text-4xl md:text-5xl">🤍</div>
        </h2>


        {/* Decorative message */}
        {/* <div className="space-y-4 text-gray-700">
          <p className="text-base md:text-lg italic">
            "Every moment with you is a blessing, every day is a memory we'll cherish."
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <span>💕</span>
            <span>✨</span>
            <span>💕</span>
          </div>
        </div> */}

 
      </div>
    </section>
  )
}

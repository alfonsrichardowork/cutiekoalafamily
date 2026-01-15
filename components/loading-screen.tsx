"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)
  const [isSliding, setIsSliding] = useState(false)
  const [firstText, setFirstText] = useState<string>('UuUuUuUUuuuuu jawaban yang menayikkk!!')
  const [secondText, setSecondText] = useState<string>('tpi bener ndaa yaaa??👀👀👀')

useEffect(() => {
  const t1 = setTimeout(() => {
    setFirstText('AAAAAA BENER YAYYYYY!!!!')
    setSecondText('PREPAREEE YOURSELF CAYANGGGG')

    const t2 = setTimeout(() => {
      setIsSliding(true)

      const t3 = setTimeout(() => {
        setIsVisible(false)
        localStorage.setItem("login", "2");
        onLoadingComplete()
      }, 500)

      return () => clearTimeout(t3)
    }, 3000)

    return () => clearTimeout(t2)
  }, 3000)

  return () => clearTimeout(t1)

}, [onLoadingComplete])


  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-linear-to-br from-rose-50 via-white to-rose-50 z-50 transition-all duration-500 ${
        isSliding ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-24 h-24">
          {/* <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
            <svg className="w-full h-full text-rose-400" viewBox="0 0 100 100" fill="currentColor">
              <rect x="20" y="20" width="60" height="60" rx="8" fill="currentColor" />
              <rect x="40" y="10" width="20" height="20" rx="4" fill="currentColor" />
            </svg>
          </div> */}

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl animate-pulse">🖤</span>
            <span className="text-4xl animate-pulse">🤍</span>
            <span className="text-4xl animate-pulse">💗</span>
          </div>
        </div>

        <div className="text-center animate-bounce flex">
            <div>
              <div className="text-2xl font-semibold text-rose-600 mb-2">{firstText}</div><div>{secondText}</div>
              <div className="flex gap-1 justify-center items-center pl-2">
            </div>
            <span className="text-sm text-rose-500 animate-bounce" style={{ animationDelay: "0s" }}>
              .
            </span>
            <span className="text-sm text-rose-500 animate-bounce" style={{ animationDelay: "0.2s" }}>
              .
            </span>
            <span className="text-sm text-rose-500 animate-bounce" style={{ animationDelay: "0.4s" }}>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

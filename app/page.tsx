  // "use client"

  // import FloatingHearts from "@/components/floating-hearts"
  // import GallerySection from "@/components/gallery-section"
  // import HeroSection from "@/components/hero-section"
  // import LoadingScreen from "@/components/loading-screen"
  // import MessageSection from "@/components/message-section"
  // import { useEffect, useState } from "react"
  // import PasswordScreen from "@/components/password-screen"
  // import confetti from "canvas-confetti"
  // import Navbar from "@/components/navbar"

  // export default function Home() {
  //   const [isLoaded, setIsLoaded] = useState(false)
  //   const [isPasswordVerified, setIsPasswordVerified] = useState(false)
  //   const [showContent, setShowContent] = useState(false)

  //   useEffect(() => {
  //     localStorage.getItem("login") === "2" && handleLoadingComplete()
  //     setIsLoaded(true)
  //   }, [])
    
  //   const handlePasswordCorrect = () => {
  //     setIsPasswordVerified(true)
  //   }

  //   const handleLoadingComplete = () => {
  //     setShowContent(true)
  //     handleConfetti()
  //   }

  //   const handleConfetti = () => {
  //     const end = Date.now() + 5 * 1000 // 3 seconds
  //     const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]
  //     const frame = () => {
  //       if (Date.now() > end) return
  //       confetti({
  //         particleCount: 2,
  //         angle: 60,
  //         spread: 55,
  //         startVelocity: 60,
  //         origin: { x: 0, y: 0.5 },
  //         colors: colors,
  //       })
  //       confetti({
  //         particleCount: 2,
  //         angle: 120,
  //         spread: 55,
  //         startVelocity: 60,
  //         origin: { x: 1, y: 0.5 },
  //         colors: colors,
  //       })
  //       requestAnimationFrame(frame)
  //     }
  //     frame()
  //   }

  //   return (
  //     <main className="min-h-screen bg-linear-to-br from-rose-100 via-white to-rose-100 overflow-hidden">
  //       {isLoaded && !isPasswordVerified && <PasswordScreen onPasswordCorrect={handlePasswordCorrect} />}
  //       {isPasswordVerified && !showContent && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
  //       <FloatingHearts />
  //       {showContent && (
  //         <>
  //           <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
  //             <Navbar />
  //           </div>
  //           <HeroSection />
  //           <GallerySection />
  //           <MessageSection />
  //         </>
  //       )}
  //     </main>
  //   )
  // }



'use client'

import { Music } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const moments = [
  { year: 'The beginning', title: 'Balai RW', copy: 'A simple place that became the beginning of the most beautiful chapter of my life.' },
  { year: 'The becoming', title: '3.5 Years of Pure Love', copy: 'There were inside jokes, night rides, snack runs, game nights, movie dates, romantic days, difficult days, and countless little moments in between. We learned, grew, laughed, struggled, and loved. And of course, there were more “I love yous” than I could ever count.' },
  { year: 'The now', title: 'A New Chapter', copy: 'Not every ending takes away the beauty of what came before. Some endings simply give those memories a place to rest, so two people can continue growing, blooming, and finding their own way.' },
]

function AmbientMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const startMusic = () => {
    if (playing) return

    const audio = audioRef.current ?? new Audio('/image/song.mp3')

    audioRef.current = audio
    audio.loop = true
    audio.volume = 0.35

    audio.play()
      .then(() => {
        setPlaying(true)
      })
      .catch((error) => {
        console.error('Unable to play music:', error)
      })
  }

  const stopMusic = () => {
    if (!audioRef.current) return

    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setPlaying(false)
  }

  useEffect(() => {
    const beginAfterFirstGesture = () => {
      startMusic()

      window.removeEventListener('pointerdown', beginAfterFirstGesture)
      window.removeEventListener('keydown', beginAfterFirstGesture)
    }

    window.addEventListener('pointerdown', beginAfterFirstGesture)
    window.addEventListener('keydown', beginAfterFirstGesture)

    return () => {
      window.removeEventListener('pointerdown', beginAfterFirstGesture)
      window.removeEventListener('keydown', beginAfterFirstGesture)

      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [])

  return (
    <button
      type="button"
      onClick={playing ? stopMusic : startMusic}
      className="fixed right-5 top-5 z-10 border border-fuchsia-400/60 bg-black px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-fuchsia-500"
      aria-label="Toggle music"
    >
      {playing ? <Music className='text-white'/> : <Music className='text-fuchsia-500 hover:text-white'/>}
    </button>
  )
}

export default function Page() {
  const [released, setReleased] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <AmbientMusic />
      <section className="relative flex min-h-[92vh] flex-col justify-between px-6 pb-12 pt-8 sm:px-10 lg:px-20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <span>Chapter 3.5</span><span className='md:block hidden'>Made with gratitude</span>
        </div>
        <div className="relative mx-auto w-full max-w-6xl py-20">
          <div className="absolute left-0 top-4 h-px w-20 bg-accent sm:w-32" />
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.28em] text-accent">A letter to what was</p>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.045em] text-balance sm:text-8xl lg:text-[9.5rem]">Thank you for<br /><span className="text-accent">everything.</span></h1>
          <p className="mt-10 max-w-md text-base leading-7 text-muted-foreground">Three and a half years of love, laughter, growth, and memories I will always carry with me. You brought out the best parts of me, and together we created more beautiful moments than I could ever put into words. This is simply a quiet place to honor what we had, before we let each other go.</p>
        </div>
        <div className="mx-auto flex w-full max-w-6xl items-end justify-between border-t border-border pt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground"><span>15 Feb 2023 — 9 Aug 2026</span><span className="sm:hidden">↓</span></div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">What remains</p><h2 className="mt-5 max-w-sm font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">A beautiful thing can be over and still be beautiful.</h2></div><div className="grid gap-0 border-t border-border">{moments.map((moment) => <article key={moment.year} className="grid gap-4 border-b border-border py-8 sm:grid-cols-[0.35fr_0.65fr] sm:gap-8"><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{moment.year}</p><div><h3 className="font-serif text-2xl">{moment.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{moment.copy}</p></div></article>)}</div></div>
      </section>

      <section className="px-6 py-28 sm:px-10 lg:px-20"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-16 lg:flex-row lg:items-end"><div className="max-w-xl"><p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">The last page</p><h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">Cutie Koala Family ends.</h2><p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground">I hope you find a new family and a new chapter that brings you all the happiness you deserve. I am deeply grateful for everything we shared, for every memory we created, and for the person I became because of our time together. I pray that wherever life takes you next, it brings you peace, joy, love, and everything your heart is looking for. I will always wish the very best for you — Thankyou</p></div>

<div className="w-full max-w-sm">
  <button
    type="button"
    onClick={() => setReleased(true)}
    className="group flex w-full items-center justify-between border-b border-foreground pb-4 text-left transition-colors hover:border-accent hover:text-accent"
    aria-pressed={released}
  >
    <span className="font-mono text-xs uppercase tracking-[0.22em]">
      {released ? 'I let it go.' : 'Let it go'}
    </span>

    <span
      className="text-2xl transition-transform group-hover:translate-x-2"
      aria-hidden="true"
    >
      →
    </span>
  </button>

  <p className="mt-4 text-xs leading-5 text-muted-foreground">
    {released
      ? 'I will keep the memories, carry the lessons, and leave the rest behind.'
      : 'Not forgetting what we had — just giving us both permission to move forward.'}
  </p>
</div>

      </div>
      </section>
      <footer className="flex flex-col justify-between gap-4 border-t border-border px-6 py-8 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:px-10 lg:px-20"><span>Endings can be beginnings too.</span><span className='md:block hidden'>With gratitude, always.</span></footer>
    </main>
  )
}
"use client"

import { AnimatePresence, motion } from "framer-motion"
import { TextAnimate } from "./ui/text-animate"
import { WordRotate } from "./ui/word-rotate"
import { useEffect, useState } from "react"
import { LineShadowText } from "./ui/line-shadow-text"

export default function HeroSection() {
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 1000) // disappear after 2s
    return () => clearTimeout(timer)
  }, [])
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
        <source src="/movie/LandingPageMovie.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.4 }} />


        <AnimatePresence>
          {showText && (
            <motion.div
              key="surprise-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className=" absolute left-1/2 top-1/2 bottom-1/2 right-1/2"
            >
              <TextAnimate
                animation="scaleUp"
                by="text"
                className="md:text-8xl text-5xl text-rose-400 flex justify-center font-bold"
              >
                Surpriseee!!!
              </TextAnimate>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl text-center relative z-10 opacity-0"
            >

        <div className="text-5xl md:text-7xl font-bold text-rose-400 leading-tight line-clamp-2 text-shadow-pink text-shadow-xl">
      {/* <LineShadowText className="bold" shadowColor={"pink"}>
            Happy
      </LineShadowText>
      {' '}
      <LineShadowText className="bold" shadowColor={"pink"}>
            Birthday
      </LineShadowText> */}
      Happy Birthday
        </div>
        
        <WordRotate
          className="text-2xl md:text-3xl font-bold text-white mt-2 mb-8"
          words={["My lovely Dori!!", "My Cutie Koala!!", "My Umumumu!!", "My Everything!!", "My Happily Ever After!!"]}
          duration={3000}
        />

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-linear-to-r from-rose-400 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
          >
            View Moments
          </button>
          <button
            onClick={() => document.getElementById("message")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-white border-2 border-rose-300 text-rose-600 rounded-full font-medium hover:bg-rose-50 transition-colors duration-300"
          >
            Read Message
          </button>
        </div>
        </motion.div>
    </section>
  )
}

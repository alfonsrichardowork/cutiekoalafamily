"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ShineBorder } from "./ui/shine-border"
import { Button } from "./ui/button"
import { AnimatePresence, motion } from "framer-motion"

export default function PasswordScreen({ onPasswordCorrect }: { onPasswordCorrect: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const correctPassword = "3712" // Change this to your desired password

    useEffect(() => {
        localStorage.getItem("login") === '2' && onPasswordCorrect()
    }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate verification delay
    setTimeout(() => {
      if (password === correctPassword) {
        setError("")
        localStorage.setItem("login", "1");
        onPasswordCorrect()
      } else {
        setError("Huhuhuuu calahhh😢😢😢 cobakk lagii cayanggg")
        setPassword("")
      }
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-linear-to-br from-rose-200 via-white to-rose-50 z-50">
      {/* <div className="w-full md:max-w-md max-w-sm mx-8">

      </div> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="relative w-full max-w-[350px] overflow-hidden">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        {/* <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader> */}
        <CardContent>
                <div className="text-center mb-8">
            {/* <div></div> */}
            <div className="flex w-full justify-center"><Image src={'/image/koala_pass.webp'} alt="Koala Hugging" width={200} height={200} className="w-28 h-full"/></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Birthday Surprise!!</h2>
            <p className="text-gray-600">Tapi masukkin passwordnyaa duyuuu hehehe😘😘😘</p>
              <Dialog>
                  <DialogTrigger className="hover:text-primary underline">Click here for clue!</DialogTrigger>
                  <DialogContent>
                      <DialogHeader>
                      <DialogTitle className="flex justify-center">Angka cpeciall kitahhh!!</DialogTitle>
                      <DialogDescription className="text-sm text-muted-foreground flex justify-center mt-2">
                          
                          <Accordion type="single" collapsible>
                              <AccordionItem value="item-1">
                                  <AccordionTrigger className="border p-2">Additional clue??</AccordionTrigger>
                                  <AccordionContent className="mt-2">
                                      Panjangnya 4 karakterr!
                                  </AccordionContent>
                              </AccordionItem>
                          </Accordion>
                      </DialogDescription>
                      </DialogHeader>
                  </DialogContent>
              </Dialog>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Apa hayooo??"
                className="w-full px-4 py-3 rounded-lg border-2 border-rose-200 focus:border-rose-400 focus:outline-none transition-colors text-center text-lg"
                disabled={isSubmitting}
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting || !password}
              className="w-full px-4 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white font-semibold rounded-lg hover:from-rose-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isSubmitting ? "Verifying..." : "Unlock"}
            </button>
          </form>
        </CardContent>
        {/* <CardFooter>
          <Button className="w-full">Sign In</Button>
        </CardFooter> */}
        </Card>
      </motion.div>
    </div>
  )
}

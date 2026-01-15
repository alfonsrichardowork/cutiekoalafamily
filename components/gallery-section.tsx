"use client"

import { useEffect, useRef, useState } from "react"
import MomentsSection from "./tickerforgallery"
import Image from "next/image"
import Link from "next/link"

import { motion, useInView } from "framer-motion"
import { data } from "@/lib/data"

// interface GalleryItem {
//   id: number
//   title: string
//   delay: number
// }

// const galleryItems: GalleryItem[] = [
//   { id: 1, title: "Memory 1", delay: 0 },
//   { id: 2, title: "Memory 2", delay: 0.1 },
//   { id: 3, title: "Memory 3", delay: 0.2 },
//   { id: 4, title: "Memory 4", delay: 0.3 },
//   { id: 5, title: "Memory 5", delay: 0.4 },
//   { id: 6, title: "Memory 6", delay: 0.5 },
// ]

export default function GallerySection() {
  // const [visibleItems, setVisibleItems] = useState<number[]>([])
  // const containerRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const itemIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
  //           setVisibleItems((prev) => {
  //             if (!prev.includes(itemIndex)) {
  //               return [...prev, itemIndex]
  //             }
  //             return prev
  //           })
  //         }
  //       })
  //     },
  //     { threshold: 0.2 },
  //   )

  //   containerRef.current?.querySelectorAll("[data-index]").forEach((el) => {
  //     observer.observe(el)
  //   })

  //   return () => observer.disconnect()
  // }, [])


  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  return (
    <section id="gallery" className="">
      <div className="h-28 bg-linear-to-b from-transparent to-white"></div>
      <div className="w-screen mx-auto px-6 bg-white relative">
        <MomentsSection />

    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {data.map((artwork: any) => (
        <motion.div key={artwork.id} variants={item}>
          <Link href={`/gallery/${artwork.id}`} className="group block overflow-hidden rounded-lg">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{artwork.title}</h3>
              <p className="text-sm text-muted-foreground">{artwork.year}</p>
              {/* <p className="mt-2 text-sm font-medium">{artwork.price}</p> */}
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>

        {/* <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              data-index={index}
              className={`relative group cursor-pointer transform transition-all duration-500 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${item.delay}s`,
              }}
            >
              <div className="relative h-64 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-light text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>

                <div className="absolute inset-0 group-hover:animate-pulse opacity-0 group-hover:opacity-10 bg-white"></div>
              </div>

              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

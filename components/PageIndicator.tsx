"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Props {
  sections: string[]
}

export default function PageIndicator({ sections }: Props) {
  const [active, setActive] = useState<number>(0)

  useEffect(() => {
    const elems = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!elems.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry that is intersecting (or the one with highest intersection)
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = elems.findIndex((e) => e === entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { threshold: 0.5 }
    )

    elems.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sections])

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-2 z-50">
      {sections.map((id, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              aria-label={id}
              className={
                "w-1 h-8 rounded-full transition-all " + (index === active ? "bg-primary" : "bg-muted-foreground/40")
              }
            />
        </motion.div>
      ))}
    </div>
  )
}

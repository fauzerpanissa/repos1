"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Instagram } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contato" className="py-24 bg-card relative overflow-hidden">
      {/* Plant decoration */}
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path d="M20 200 Q30 160, 50 140 Q70 120, 100 120 Q130 120, 150 100 Q170 80, 180 40" fill="none" stroke="currentColor" strokeWidth="3" />
          <ellipse cx="100" cy="120" rx="30" ry="18" fill="currentColor" transform="rotate(-15 100 120)" />
          <ellipse cx="150" cy="100" rx="25" ry="15" fill="currentColor" transform="rotate(-30 150 100)" />
          <ellipse cx="60" cy="135" rx="20" ry="12" fill="currentColor" transform="rotate(15 60 135)" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="font-mono text-primary tracking-[0.3em] uppercase text-base">
            Vamos Conversar
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          
          <p className="font-mono text-muted-foreground text-lg mb-12">
            Tem um projeto em mente? Adoraria ouvir sua história e descobrir como posso ajudar a contá-la.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <motion.a
              href="mailto:florencemanoelescritora@gmail.com"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-4 p-6 bg-background border border-border hover:border-primary group transition-colors"
            >
              <Mail className="w-6 h-6 text-primary" />
              <span className="font-mono text-foreground group-hover:text-primary transition-colors">
                florencemanoelescritora@gmail.com
              </span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/florencemanoel/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-4 p-6 bg-background border border-border hover:border-primary group transition-colors"
            >
              <Instagram className="w-6 h-6 text-primary" />
              <span className="font-mono text-foreground group-hover:text-primary transition-colors">
                @florencemanoel
              </span>
            </motion.a>
          </div>

          {/* Typewriter animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <div className="font-mono text-base text-muted-foreground tracking-wider">
              <TypewriterText text="Pronta para transformar suas ideias em palavras..." />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function TypewriterText({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-2 h-4 bg-primary ml-1"
      />
    </motion.span>
  )
}

"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M50 10 C60 20, 70 30, 70 50 C70 70, 60 80, 50 90 C40 80, 30 70, 30 50 C30 30, 40 20, 50 10" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 50 Q50 30, 70 50 Q50 70, 30 50" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-22%20at%2006.02.56-qnaUHbEUZKhiHCqAIJpe6CVs6n8kj2.jpeg"
                alt="Florence Manoel"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-xl"
          >
            <p className="font-mono text-primary tracking-[0.3em] uppercase text-base mb-4">
              Escritora &bull; Redatora &bull; Criadora de Conteúdo
            </p>
            
            <h1 className="text-5xl md:text-7xl font-serif font-semibold text-foreground mb-6 leading-tight">
              Florence<br />
              <span className="text-primary">Manoel</span>
            </h1>
            
            <div className="font-mono text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-md">
              <span className="text-primary">&ldquo;</span>
              Transformando ideias em palavras que conectam, emocionam e inspiram.
              <span className="text-primary">&rdquo;</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contato" 
                className="px-8 pt-[19px] pb-3 bg-primary text-primary-foreground font-mono text-base tracking-wider hover:bg-primary/90 transition-colors"
              >
                Entre em Contato
              </a>
              <a 
                href="#sobre" 
                className="px-8 pt-[17px] pb-3 border-2 border-foreground/20 text-foreground font-mono text-base tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                Conheça meu Trabalho
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Coffee stain decoration */}
      <div className="absolute bottom-10 left-1/4 w-16 h-16 rounded-full bg-amber-900/10 blur-sm" />
      <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-amber-900/5 blur-sm" />
    </section>
  )
}

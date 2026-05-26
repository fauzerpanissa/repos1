"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 bg-card relative overflow-hidden">
      {/* Plant decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path d="M100 180 Q90 140, 100 100 Q110 60, 100 20" fill="none" stroke="currentColor" strokeWidth="3" />
          <ellipse cx="80" cy="90" rx="25" ry="15" fill="currentColor" transform="rotate(-30 80 90)" />
          <ellipse cx="120" cy="70" rx="25" ry="15" fill="currentColor" transform="rotate(30 120 70)" />
          <ellipse cx="75" cy="50" rx="20" ry="12" fill="currentColor" transform="rotate(-45 75 50)" />
          <ellipse cx="125" cy="40" rx="20" ry="12" fill="currentColor" transform="rotate(45 125 40)" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="font-mono text-primary tracking-[0.3em] uppercase text-base">
              Sobre Mim
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4">
              A Arte de <span className="text-primary">Contar Histórias</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Typewriter illustration */}
            <div className="relative">
              <div className="bg-secondary/50 p-8 border border-border">
                <div className="font-mono text-base text-muted-foreground leading-relaxed space-y-4">
                  <p className="border-l-2 border-primary pl-4">
                    Com mais de uma década dedicada às palavras, descobri que escrever é muito mais do que juntar letras — é criar pontes entre ideias e pessoas.
                  </p>
                  <p className="border-l-2 border-primary/50 pl-4">
                    Cada texto que produzo carrega a missão de conectar marcas aos seus públicos de forma autêntica e memorável.
                  </p>
                  <p className="border-l-2 border-primary/30 pl-4">
                    Do storytelling corporativo às narrativas criativas, meu trabalho transforma conceitos em experiências que ressoam.
                  </p>
                </div>
                
                {/* Typewriter keys decoration */}
                <div className="flex gap-2 mt-8 justify-center">
                  {['F', 'L', 'O', 'R', 'E', 'N', 'C', 'E'].map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 0 }}
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 0.3, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                      className="w-8 h-8 bg-foreground/10 rounded flex items-center justify-center font-mono text-sm text-foreground"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Services/Skills */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-foreground mb-6">Especialidades</h3>
              
              {[
                { title: "Redação Publicitária", desc: "Textos que vendem e encantam" },
                { title: "Criação de Conteúdo", desc: "Estratégias para redes sociais" },
                { title: "Copywriting", desc: "Palavras que convertem" },
                { title: "Storytelling", desc: "Narrativas que conectam" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <span className="w-8 h-8 bg-primary/10 text-primary flex items-center justify-center font-mono text-base flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-foreground">{item.title}</h4>
                    <p className="font-mono text-base text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

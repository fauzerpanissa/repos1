"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="premiacoes" className="py-24 bg-background relative">
      {/* Coffee stain decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-amber-900/5 blur-md" />
      <div className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-amber-900/8 blur-lg" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="font-mono text-primary tracking-[0.3em] uppercase text-base">
              Reconhecimento
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4">
              Premiações & <span className="text-primary">Conquistas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Award Image 1 - Event screen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden bg-card border border-border"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PREMIO-tela2-7dIUR9nMR7mM3LimFal1HbdnvkHnxY.png"
                  alt="Florence Manoel - Melhor Profissional de Conteúdo no Prêmio ABC 2023"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-primary text-base tracking-wider">2023</span>
                <h3 className="font-serif text-xl text-foreground mt-2">
                  Melhor Profissional de Conteúdo
                </h3>
                <p className="font-mono text-base text-muted-foreground mt-2">
                  Prêmio ABC de Comunicação
                </p>
              </div>
            </motion.div>

            {/* Award Image 2 - Trophy photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative overflow-hidden bg-card border border-border"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PREMIO-ABC-nxkvJ5NA6rsIeu7rFWk7cXaGYt40T7.png"
                  alt="Florence Manoel recebendo troféu no Prêmio ABC 2023"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-primary text-base tracking-wider">DESTAQUE</span>
                <h3 className="font-serif text-xl text-foreground mt-2">
                  Reconhecimento Regional
                </h3>
                <p className="font-mono text-base text-muted-foreground mt-2">
                  Excelência em criação de conteúdo no Grande ABC
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto mt-16 text-center"
          >
            <div className="font-mono text-lg text-muted-foreground italic">
              <span className="text-primary text-4xl leading-none">&ldquo;</span>
              <p className="mt-2">
                Cada prêmio representa não apenas meu trabalho individual, mas a confiança dos clientes que acreditaram em minhas palavras para contar suas histórias.
              </p>
              <span className="text-primary text-4xl leading-none">&rdquo;</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

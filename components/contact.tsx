"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Instagram, MessageCircle, Send, Loader2 } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem")
      }

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Erro ao enviar mensagem")
    }
  }

  const whatsappNumber = "5517991118200"
  const whatsappMessage = encodeURIComponent("Olá Florence! Vi seu portfólio e gostaria de conversar sobre um projeto.")

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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="font-mono text-primary tracking-[0.3em] uppercase text-base">
              Vamos Conversar
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            
            <p className="font-mono text-muted-foreground text-lg max-w-2xl mx-auto">
              Tem um projeto em mente? Adoraria ouvir sua história e descobrir como posso ajudar a contá-la.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-foreground mb-6">Canais de Contato</h3>
              
              {/* Email */}
              <motion.a
                href="mailto:florencemanoelescritora@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary group transition-colors"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-mono text-sm sm:text-base text-foreground group-hover:text-primary transition-colors break-all">
                  florencemanoelescritora@gmail.com
                </span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary group transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-mono text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                  (17) 99111-8200
                </span>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/florencemanoel/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary group transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-mono text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                  @florencemanoel
                </span>
              </motion.a>

              {/* Typewriter animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 pt-8 border-t border-border"
              >
                <div className="font-mono text-sm text-muted-foreground tracking-wider">
                  <TypewriterText text="Pronta para transformar suas ideias em palavras..." />
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background border border-border p-6 sm:p-8"
            >
              <h3 className="font-serif text-2xl text-foreground mb-6">Fale Conosco</h3>
              
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-mono text-lg text-foreground mb-2">Mensagem enviada!</p>
                  <p className="font-mono text-sm text-muted-foreground">
                    Obrigada pelo contato. Responderei em breve.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-mono text-sm text-primary hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-sm text-foreground mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-card border border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-sm text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-card border border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-sm text-foreground mb-2">
                      Mensagem
                      <span className="text-muted-foreground ml-2">
                        ({formData.message.length}/200)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => {
                        if (e.target.value.length <= 200) {
                          setFormData({ ...formData, message: e.target.value })
                        }
                      }}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-card border border-border font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Conte um pouco sobre seu projeto..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="font-mono text-sm text-red-600">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-mono text-base tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
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

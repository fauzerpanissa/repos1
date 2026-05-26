export function Footer() {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-xl">
            Florence <span className="text-primary">Manoel</span>
          </div>
          
          <p className="font-mono text-base text-background/60 text-center">
            &copy; {new Date().getFullYear()} Florence Manoel. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="mailto:florencemanoelescritora@gmail.com" 
              className="font-mono text-base text-background/60 hover:text-primary transition-colors"
            >
              Email
            </a>
            <a 
              href="https://www.instagram.com/florencemanoel/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-base text-background/60 hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

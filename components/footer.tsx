export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          Saad Azhar &middot; Helsinki, Finland
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/saadazhar7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-[#4ade80] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sadsasuke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-[#4ade80] transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:saadazhar7@gmail.com"
            className="text-xs text-muted-foreground hover:text-[#4ade80] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

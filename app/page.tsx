import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 max-w-4xl mx-auto">
      <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]">
          Rodrigo Guimarães Ourique
        </h1>
        <p className="text-xl md:text-2xl text-[var(--secondary)] font-medium max-w-2xl mx-auto">
          Software Developer. Computing enthusiast.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Link href="/resume" className="px-8 py-3.5 bg-[var(--accent)] text-white rounded-full font-semibold hover:bg-[var(--accent-hover)] transition-all duration-300 shadow-md hover:shadow-xl active:scale-95">
            Resume
          </Link>
          <a
            href="mailto:rodrigo.guima.ourique@gmail.com"
            className="px-8 py-3.5 bg-white dark:bg-gray-800 text-[var(--foreground)] border border-[var(--border)] rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm active:scale-95"
            aria-label="Send me an email"
            title="Opens your default email client"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-12 border-t border-[var(--border)] mt-12 opacity-80">
          <a href="https://github.com/Rosbifbr" className="text-[var(--secondary)] hover:text-[var(--foreground)] font-medium transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rodrigo-ourique-7aa30721b/" className="text-[var(--secondary)] hover:text-[var(--foreground)] font-medium transition-colors">
            LinkedIn
          </a>
          <a href="https://stackoverflow.com/users/17733945/rodrigo-ourique" className="text-[var(--secondary)] hover:text-[var(--foreground)] font-medium transition-colors">
            Stack Overflow
          </a>
        </div>
      </div>
    </main>
  );
}

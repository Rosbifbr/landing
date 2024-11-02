import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Rodrigo Guimarães Ourique</h1>
      <p className="text-xl mb-8">Software Developer. Computing enthusiast.</p>
      <div className="flex flex-row gap-4">
        <Link href="/resume" className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-100 transition-colors">
          Resume
        </Link>
        <a
          href="mailto:rodrigo.guima.ourique@gmail.com"
          className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-100 transition-colors"
          aria-label="Send me an email"
          title="Opens your default email client"
        >
          Contact
        </a>
        <a href="https://github.com/Rosbifbr" className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-100 transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rodrigo-ourique-7aa30721b/" className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-100 transition-colors">
          LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/17733945/rodrigo-ourique" className="px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-100 transition-colors">
          Stack Overflow
        </a>
      </div>
    </main>
  );
}

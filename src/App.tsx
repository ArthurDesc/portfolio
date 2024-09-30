import { ThemeProvider } from 'next-themes'
import { Navbar } from "@/components/Navbar"

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        {/* Le reste de votre application */}
      </div>
    </ThemeProvider>
  )
}

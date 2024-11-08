/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			// ... autres couleurs ...
  			border: 'hsl(var(--border))', // Ajoutez cette ligne
  			'dark-dropdown': 'hsl(var(--dropdown-bg))', // Modifié en fonction de la variable CSS
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}


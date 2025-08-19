import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'savvy': {
					'navy-dark': 'hsl(var(--savvy-navy-dark))',
					'navy': 'hsl(var(--savvy-navy))',
					'electric-cyan': 'hsl(var(--savvy-electric-cyan))',
					'deep-teal': 'hsl(var(--savvy-deep-teal))',
					'pure-black': 'hsl(var(--savvy-pure-black))',
					'off-white': 'hsl(var(--savvy-off-white))',
					'gray-400': 'hsl(var(--savvy-gray-400))',
					'gray-700': 'hsl(var(--savvy-gray-700))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'cursor-blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'underline-grow': {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' }
				},
				'wave-motion': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(30, 203, 225, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(30, 203, 225, 0.6)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'text-gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'spotlight-sweep': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'book-glow': {
					'0%, 100%': { opacity: '0.15' },
					'50%': { opacity: '0.25' }
				},
				'orbit-1': {
					'0%': { transform: 'translate(-80px, -64px) rotate(0deg)' },
					'100%': { transform: 'translate(-80px, -64px) rotate(360deg)' }
				},
				'orbit-2': {
					'0%': { transform: 'translate(64px, -80px) rotate(0deg)' },
					'100%': { transform: 'translate(64px, -80px) rotate(360deg)' }
				},
				'orbit-3': {
					'0%': { transform: 'translate(80px, 64px) rotate(0deg)' },
					'100%': { transform: 'translate(80px, 64px) rotate(360deg)' }
				},
				'orbit-4': {
					'0%': { transform: 'translate(80px, 64px) rotate(0deg)' },
					'100%': { transform: 'translate(80px, 64px) rotate(360deg)' }
				},
				'orbit-5': {
					'0%': { transform: 'translate(-80px, 64px) rotate(0deg)' },
					'100%': { transform: 'translate(-80px, 64px) rotate(360deg)' }
				},
				'orbit-6': {
					'0%': { transform: 'translate(-80px, 64px) rotate(0deg)' },
					'100%': { transform: 'translate(-80px, 64px) rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'cursor-blink': 'cursor-blink 1.2s infinite',
				'underline-grow': 'underline-grow 0.8s ease-out forwards',
				'wave-motion': 'wave-motion 8s ease-in-out infinite',
				'fade-up': 'fade-up 0.8s ease-out forwards',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 10s linear infinite',
				'text-gradient-shift': 'text-gradient-shift 8s ease-in-out infinite',
				'spotlight-sweep': 'spotlight-sweep 6s ease-in-out infinite',
				'book-glow': 'book-glow 4s ease-in-out infinite',
				'orbit-1': 'orbit-1 20s linear infinite',
				'orbit-2': 'orbit-2 25s linear infinite',
				'orbit-3': 'orbit-3 22s linear infinite',
				'orbit-4': 'orbit-4 28s linear infinite',
				'orbit-5': 'orbit-5 24s linear infinite',
				'orbit-6': 'orbit-6 26s linear infinite'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-cta': 'var(--gradient-cta)'
			},
			boxShadow: {
				'premium': 'var(--shadow-premium)',
				'card': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)',
				'cyan-glow': 'var(--shadow-cyan-glow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

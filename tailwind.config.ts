
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				braille: {
					DEFAULT: 'hsl(var(--braille))',
					foreground: 'hsl(var(--braille-foreground))',
					paper: 'hsl(var(--braille-paper))',
					aluminum: 'hsl(var(--braille-aluminum))',
					plastic: 'hsl(var(--braille-plastic))'
				},
				tactile: {
					DEFAULT: 'hsl(var(--tactile))',
					raised: 'hsl(var(--tactile-raised))',
					shadow: 'hsl(var(--tactile-shadow))'
				},
				warm: {
					50: '#fefaf8',
					100: '#fdf4f0',
					200: '#fae6de',
					300: '#f6d5c7',
					400: '#f0bfa0',
					500: '#e8a373',
					600: '#db8a50',
					700: '#c87540',
					800: '#a86039',
					900: '#8a4f32'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'serif': ['Crimson Text', 'Georgia', 'serif'],
				'sans': ['Source Sans Pro', 'system-ui', 'sans-serif'],
				'braille': ['Monaco', 'Courier New', 'monospace'],
			},
			spacing: {
				'braille': '0.6rem',
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'braille-appear': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(4px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'tactile-press': {
					'0%': {
						transform: 'translateY(0) scale(1)',
						boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
					},
					'50%': {
						transform: 'translateY(1px) scale(0.98)',
						boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
					},
					'100%': {
						transform: 'translateY(0) scale(1)',
						boxShadow: '0 6px 12px rgba(0,0,0,0.08)'
					}
				},
				'emboss': {
					'0%': {
						boxShadow: 'inset 0 0 0 rgba(255,255,255,0), 0 1px 2px rgba(0,0,0,0.1)'
					},
					'100%': {
						boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4), 0 2px 8px rgba(0,0,0,0.15)'
					}
				},
				'story-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px) rotateX(10deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'braille-appear': 'braille-appear 0.4s ease-out',
				'tactile-press': 'tactile-press 0.3s ease-out',
				'emboss': 'emboss 0.2s ease-out',
				'story-reveal': 'story-reveal 0.6s ease-out'
			},
			backgroundImage: {
				'paper-texture': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
				'aluminum-texture': 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)',
				'plastic-texture': 'radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, transparent 70%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

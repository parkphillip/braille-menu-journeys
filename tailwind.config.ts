
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
				warm: {
					cream: 'rgb(var(--warm-cream))',
					paper: 'rgb(var(--warm-paper))',
					stone: 'rgb(var(--warm-stone))',
					earth: 'rgb(var(--warm-earth))',
					clay: 'rgb(var(--warm-clay))',
					coffee: 'rgb(var(--warm-coffee))',
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
				'gentle-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg)'
					},
					'50%': {
						transform: 'translateY(-8px) rotateX(1deg)'
					}
				},
				'organic-pulse': {
					'0%, 100%': {
						opacity: '0.8',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
				'story-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) rotateX(5deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)'
					}
				}
			},
			animation: {
				'gentle-float': 'gentle-float 6s ease-in-out infinite',
				'organic-pulse': 'organic-pulse 3s ease-in-out infinite',
				'story-reveal': 'story-reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
			},
			backgroundImage: {
				'organic-gradient': 'linear-gradient(135deg, rgb(var(--warm-cream)) 0%, rgb(var(--warm-paper)) 50%, rgb(var(--warm-stone)) 100%)',
				'paper-texture': 'radial-gradient(circle at 2px 2px, rgba(var(--warm-clay), 0.15) 1px, transparent 0)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

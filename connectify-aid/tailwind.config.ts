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
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
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
				theuyir: {
					yellow: '#FFBE0B',
					pink: '#BA4C78',
					darkgrey: '#1E293B',
					lightgrey: '#F8F9FA',
					orange: '#FB5607',
					purple: '#8338EC',
					teal: '#3A86FF',
					mint: '#2EC4B6',
					coral: '#FF6B6B'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
				'4xl': '2rem',
				'5xl': '2.5rem',
				'6xl': '3rem',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'scale-up': {
					'0%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' }
				},
				'reveal-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'reveal-right': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'scale-up': 'scale-up 0.3s ease-out',
				'shimmer': 'shimmer 3s infinite linear',
				'reveal-up': 'reveal-up 0.5s ease-out forwards',
				'reveal-right': 'reveal-right 0.5s ease-out forwards'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif']
			},
			boxShadow: {
				'soft-xl': '0 10px 25px -3px rgba(0, 0, 0, 0.05)',
				'soft-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
				'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
				'colored': '0 4px 14px 0 rgba(186, 76, 120, 0.3)',
				'colored-hover': '0 6px 20px 0 rgba(186, 76, 120, 0.35)',
				'neumorph': '5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff',
				'neumorph-inset': 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff'
			},
			backgroundImage: {
				'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
				'glass-dark': 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))',
				'gradient-primary': 'linear-gradient(135deg, #BA4C78, #FB5607)',
				'gradient-secondary': 'linear-gradient(135deg, #3A86FF, #8338EC)',
				'gradient-accent': 'linear-gradient(135deg, #2EC4B6, #FFBE0B)',
				'gradient-subtle': 'linear-gradient(135deg, #F8F9FA, #EDF2F7)',
				'gradient-shine': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
				'mesh-1': 'radial-gradient(at 0% 0%, rgba(186, 76, 120, 0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255, 190, 11, 0.2) 0px, transparent 50%)',
				'mesh-2': 'radial-gradient(at 100% 0%, rgba(58, 134, 255, 0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(131, 56, 236, 0.2) 0px, transparent 50%)'
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(10px)'
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
				'width': 'width',
				'border': 'border-radius, border-width',
				'colors': 'background-color, border-color, color, fill, stroke'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			const newUtilities = {
				'.backdrop-blur-xs': {
					'backdropFilter': 'blur(2px)'
				},
				'.backdrop-blur-sm': {
					'backdropFilter': 'blur(4px)'
				},
				'.backdrop-blur': {
					'backdropFilter': 'blur(8px)'
				},
				'.backdrop-blur-md': {
					'backdropFilter': 'blur(12px)'
				},
				'.backdrop-blur-lg': {
					'backdropFilter': 'blur(16px)'
				},
				'.backdrop-blur-xl': {
					'backdropFilter': 'blur(24px)'
				},
				'.backdrop-blur-2xl': {
					'backdropFilter': 'blur(40px)'
				},
				'.backdrop-blur-3xl': {
					'backdropFilter': 'blur(64px)'
				},
				'.backdrop-saturate-50': {
					'backdropFilter': 'saturate(0.5)'
				},
				'.backdrop-saturate-100': {
					'backdropFilter': 'saturate(1)'
				},
				'.backdrop-saturate-150': {
					'backdropFilter': 'saturate(1.5)'
				},
				'.backdrop-saturate-200': {
					'backdropFilter': 'saturate(2)'
				},
				'.glass': {
					'background': 'rgba(255, 255, 255, 0.05)',
					'backdropFilter': 'blur(10px)',
					'borderRadius': '10px',
					'border': '1px solid rgba(255, 255, 255, 0.1)'
				},
				'.glass-dark': {
					'background': 'rgba(0, 0, 0, 0.05)',
					'backdropFilter': 'blur(10px)',
					'borderRadius': '10px',
					'border': '1px solid rgba(255, 255, 255, 0.05)'
				}
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
		}
	],
} satisfies Config;

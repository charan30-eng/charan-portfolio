# 🚀 Charan's Next-Gen Portfolio

A world-class, animated developer portfolio built with React + Vite.

## ✨ Features

- 🎨 Dark glassmorphism UI with aurora gradients
- ✨ Framer Motion animations everywhere
- 🌌 Three.js 3D floating object in hero
- 🔵 tsParticles interactive background
- 💻 Custom animated cursor
- 📱 Fully responsive
- ⚡ Smooth scroll with Lenis
- 📊 Animated skill bars & stat counters
- 🗂️ Project filtering + search + modal
- 📬 EmailJS contact form
- 🔄 Page loader animation
- 🎯 Active nav section indicator

## 🛠️ Tech Stack

React · Vite · Framer Motion · Three.js · React Three Fiber · tsParticles · Tailwind CSS · Lenis · EmailJS

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## ⚙️ Configuration

**Edit `src/data/portfolioData.js`** — this single file controls:
- Your name, bio, social links
- Projects, skills, education, experience
- Articles, certificates
- EmailJS credentials
- Resume path (`/public/resume.pdf`)

## 📬 EmailJS Setup

1. Go to [emailjs.com](https://emailjs.com) → create account
2. Add an email service (Gmail works great)
3. Create a template with variables: `from_name`, `from_email`, `subject`, `message`
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Paste them in `portfolioData.emailjs` inside `portfolioData.js`

## 📄 Resume

Place your resume PDF at `public/resume.pdf`

## 🌐 Deploy

```bash
npm run build
# Deploy the /dist folder to Vercel, Netlify, or GitHub Pages
```

# ABTalks — 60-Day Coding Challenge

> A mobile-first redesign of ABTalks built for the ABTalks Vibe Code Hackathon.

ABTalks is a 60-day coding challenge designed for Indian college students. The platform encourages students to build something every day, maintain a public learning streak, and become more visible to recruiters through consistent GitHub and LinkedIn activity.

This redesign focuses on making that experience simple, motivating, and usable on a phone — especially during short late-night coding sessions after college.

---

## 🚀 Live Demo

**Live Demo:**  
_Add your Vercel deployment URL here after deployment._

**Repository:**  
https://github.com/naveen-986/abtalks-redesign

---

# 🎯 Problem

Many college students start learning to code but struggle with consistency.

They may:

- Start multiple courses without finishing them
- Build projects but never publish them
- Have an inactive GitHub profile
- Avoid sharing their learning publicly
- Lose motivation after a few days

ABTalks solves this through a simple daily loop:

**Build → Commit → Share → Repeat**

The redesign makes that loop visible throughout the product.

---

# 💡 Design Goal

The goal was not to make another generic coding dashboard.

The interface was designed around three principles:

### 1. Make progress visible

Students should immediately understand:

- How many days they have completed
- Their current streak
- Their overall progress
- Their position among other students

### 2. Reduce friction

The most important actions should be easy to find:

- Start today's task
- Submit GitHub proof
- Submit LinkedIn proof
- Continue the streak

### 3. Create motivation without overwhelming the user

The interface uses:

- Short sections
- Clear cards
- Progress indicators
- Achievements
- Community activity
- Encouraging feedback

---

# 📱 Mobile-First Approach

The product is primarily designed for students using their phones.

The hackathon specifically evaluates submissions at:

**390px mobile width**

Therefore, the interface was designed mobile-first rather than designing desktop first and shrinking it later.

The three required routes were tested at a 390px viewport:

```text
/
/dashboard
/day/12
```

The responsive design focuses on:

- Comfortable spacing
- Touch-friendly buttons
- Full-width inputs
- Readable typography
- Vertical card layouts
- No horizontal overflow

Desktop is treated as a secondary layout.

---

# ✨ Features

## 🏠 Landing Page

Route:

```text
/
```

The landing page introduces ABTalks to a student who has never heard of the platform.

### Includes

- 60-Day Coding Challenge introduction
- Clear primary CTA
- Future outcome / recruiter-ready card
- Community activity
- Challenge workflow
- Student benefits
- Student stories
- Footer

### Core message

```text
Build Every Day.
Get Hired Faster.
```

The landing page explains what students do every day and what they can expect after consistently completing the challenge.

---

# 📊 Student Dashboard

Route:

```text
/dashboard
```

The dashboard is the student's home screen after entering the challenge.

### Includes

### 🔥 Current Streak

Shows how many consecutive challenge days the student has completed.

Example:

```text
12 Days
```

### 📈 Challenge Progress

Shows progress through the 60-day challenge.

Example:

```text
12 / 60 Days
20% Challenge Completed
```

### 🎯 Today's Task

The most important action on the dashboard.

Example:

```text
Build a Weather Dashboard
```

The student can directly start the day's challenge.

### 🏆 Achievements

Examples:

```text
7-Day Streak
First Commit
Portfolio Builder
Top Learner
```

### 📅 Weekly Activity

A compact view of the student's activity during the current week.

### 🥇 Leaderboard

Shows the student's relative standing in the challenge.

Example:

```text
#18
Top 5%
```

### 🤖 AI Coach

A lightweight coaching concept that provides contextual encouragement and a suggested next action.

Example:

```text
You're ahead of 72% of students.

Complete today's challenge before 8 PM
to keep your streak alive.
```

This is one of the thoughtful UX additions introduced in the redesign.

---

# 🧑‍💻 Challenge Day

Route:

```text
/day/12
```

This is the complete experience for a single challenge day.

### Includes

- Day number
- Task title
- Task description
- Technology tags
- Completion checklist
- Helpful resources
- GitHub submission
- LinkedIn submission
- Reflection
- Streak continuation feedback

---

# 🔄 Daily Student Workflow

The core experience is designed around a simple loop:

```text
        START DAY
            ↓
      Read Today's Task
            ↓
        Build Project
            ↓
      Push to GitHub
            ↓
     Share on LinkedIn
            ↓
      Write Reflection
            ↓
       Submit Proof
            ↓
       Streak Continues
            ↓
       Next Day Unlocks
```

This makes the platform feel like a daily habit rather than another course dashboard.

---

# 💡 Thoughtful UX Feature

## AI Coach

The hackathon asks for at least one thoughtful idea that improves the student experience.

The redesign introduces an **AI Coach** on the dashboard.

Instead of only displaying numbers, the dashboard can provide contextual guidance.

For example:

```text
You're ahead of 72% of students.

Today's suggestion:

Push your GitHub commit before writing
your LinkedIn post to maintain a clean workflow.
```

The intention is to turn the dashboard into a lightweight accountability layer.

---

# 🎨 Visual Design

The visual direction uses a dark, focused interface designed for late-night coding sessions.

### Design characteristics

- Dark background
- Violet accent color
- High contrast text
- Rounded cards
- Clear section hierarchy
- Compact mobile layouts
- Strong primary CTA
- Minimal visual noise

The design intentionally avoids overcrowding the student's home screen.

---

# 🛠️ Tech Stack

### Framework

- Next.js 16
- React
- TypeScript

### Styling

- Tailwind CSS

### Icons

- Lucide React

### Development

- Git
- GitHub
- VS Code

### Deployment

- Vercel

---

# 📂 Project Structure

```text
abtalks-redesign/
│
├── app/
│   ├── page.tsx
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   └── day/
│       └── 12/
│           └── page.tsx
│
├── components/
│   └── landing/
│       ├── Hero.tsx
│       ├── FutureCard.tsx
│       ├── CommunityCard.tsx
│       ├── HowItWorks.tsx
│       ├── Benefits.tsx
│       ├── Testimonials.tsx
│       └── Footer.tsx
│
├── public/
│
├── README.md
├── PROMPTS.md
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

---

# 🗺️ Route Map

The required route map is:

```text
/
/dashboard
/day/12
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/naveen-986/abtalks-redesign.git
```

## 2. Enter the project

```bash
cd abtalks-redesign
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start development server

```bash
npm run dev
```

## 5. Open the application

```text
http://localhost:3000
```

---

# 🧪 Production Build

Before deployment, the application can be verified using:

```bash
npm run build
```

The production build has been successfully tested with the required routes:

```text
/
/dashboard
/day/12
```

---

# 📱 Responsive Testing

The primary testing viewport is:

```text
390px
```

The following routes were tested:

```text
/
/dashboard
/day/12
```

The following were checked:

- No horizontal scrolling
- Cards remain within viewport
- Text wraps correctly
- Buttons remain accessible
- Form inputs fit the viewport
- Sections stack correctly
- Navigation remains usable

---

# 🔐 Scope

The hackathon explicitly keeps the following outside the scope of this build:

- Authentication
- Real user accounts
- Production database
- Recruiter dashboard
- Admin panel
- Matching the existing ABTalks technology stack

Therefore, the project uses realistic mocked content instead of a production backend.

---

# 📦 Mocked Experience

The current prototype uses static/mock data for:

- Student streak
- Challenge progress
- Achievements
- Weekly activity
- Leaderboard position
- Today's challenge
- Community statistics

This keeps the prototype focused on UX and interaction design.

---

# 🤖 AI-Assisted Development

This project was built using an AI-assisted development workflow.

AI assistance was used for:

- Product interpretation
- UI structure
- Component planning
- React/Next.js implementation
- Tailwind styling
- Debugging
- Responsive improvements
- UX iteration
- Documentation

The AI usage log is documented separately in:

```text
PROMPTS.md
```

The prompts document the development process and the reasoning behind major implementation steps.

---

# 🧠 Product Decisions

Several product decisions were made specifically for the target audience.

### Why streaks?

A streak creates a visible commitment and makes daily progress tangible.

### Why GitHub + LinkedIn?

The challenge is not only about learning.

Students also need public evidence of their work.

GitHub demonstrates technical activity while LinkedIn helps students build professional visibility.

### Why a community card?

Seeing that other students are actively coding creates social proof and makes the challenge feel alive.

### Why an AI Coach?

Progress numbers tell students where they are.

The AI Coach suggests what they should do next.

---

# 🏆 Hackathon Requirements Checklist

| Requirement | Status |
|---|---|
| Landing Page `/` | ✅ |
| Student Dashboard `/dashboard` | ✅ |
| Challenge Day `/day/12` | ✅ |
| Mobile-first design | ✅ |
| 390px testing | ✅ |
| Mocked data | ✅ |
| GitHub proof submission UI | ✅ |
| LinkedIn proof submission UI | ✅ |
| Student achievements | ✅ |
| Student standing | ✅ |
| Thoughtful UX feature | ✅ |
| Public repository | ✅ |
| Production build | ✅ |
| AI Usage Log | `PROMPTS.md` |

---

# 📄 AI Usage Log

The detailed AI development history is available in:

```text
PROMPTS.md
```

This includes the prompts and development workflow used while creating the project.

---

# 🔮 Future Improvements

If this prototype were taken into production, the next improvements would include:

- Real authentication
- Real student profiles
- Database-backed challenge progress
- GitHub API integration
- LinkedIn sharing workflow
- Real-time leaderboard
- Challenge notifications
- Personalized AI coaching
- Streak recovery for missed days
- Real community activity
- Accessibility improvements
- Analytics

---

# 👨‍💻 Submission

**Repository**

https://github.com/naveen-986/abtalks-redesign

**Live Demo**


https://abtalks-redesign-delta.vercel.app/

**Route Map**

```text
/
/dashboard
/day/12
```

---

## Built for the ABTalks Vibe Code Hackathon

**Build every day.  
Commit your work.  
Share your progress.  
Become recruiter ready.**
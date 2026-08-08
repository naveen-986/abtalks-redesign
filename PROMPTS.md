# ABTalks Vibe Code Hackathon
## AI Usage Log

This file documents the prompts used during the development of the ABTalks redesign.

---

## 1. Project Setup

### Prompt

> Build a mobile-first redesign of ABTalks for the 60-day coding challenge.
> Create three screens:
> - Landing Page
> - Student Dashboard
> - Challenge Day
>
> Use mocked data and focus on a 390px mobile viewport.

### Used For

Initial project planning and architecture.

---

## 2. Landing Page — Hero

### Prompt

> Hero section kaise banega step by step btao

### Used For

Creating the initial landing page hero section.

---

## 3. Future Card

### Prompt

> project ko complete to karo

### Used For

Planning the remaining landing-page sections and creating the Future After 60 Days card.

---

## 4. How It Works

### Prompt

> how it works main aur kya karna hai

### Used For

Improving the How It Works section beyond a basic four-card layout.

---

## 5. How It Works — Flow

### Prompt

> {index !== steps.length - 1 && (
>   <div className="mt-5 flex justify-center text-violet-400 text-2xl">
>     ↓
>   </div>
> )}

### Used For

Adding visual arrows between the daily workflow steps.

---

## 6. Benefits Section

### Prompt

> Why Join ABTalks?

### Used For

Creating the benefits section explaining consistency, GitHub visibility,
LinkedIn presence and career growth.

---

## 7. Testimonials

### Prompt

> Testimonials section banana hai

### Used For

Adding student stories and social proof to the landing page.

---

## 8. Community Card

### Prompt

> community card nhi hua abhi

### Used For

Adding a community activity section showing students currently coding,
daily submissions and average streak.

---

## 9. Footer

### Prompt

> footer bacha hai

### Used For

Creating the final landing-page footer.

---

## 10. Dashboard

### Prompt

> pehle dashboard complete karte hain

### Used For

Planning and implementing the student dashboard.

The dashboard was designed around:

- Current streak
- Challenge progress
- Today's task
- Achievements
- Weekly activity
- Leaderboard
- AI Coach

---

## 11. Dashboard — Achievements

### Prompt

> Dashboard me achievements add karo

### Used For

Adding achievement cards such as:

- 7-Day Streak
- First Commit
- Portfolio Builder
- Top Learner

---

## 12. Dashboard — Weekly Activity

### Prompt

> Weekly Activity dashboard me add karo

### Used For

Creating a weekly activity visualization for the student's coding consistency.

---

## 13. Dashboard — Leaderboard

### Prompt

> Leaderboard card dashboard me add karo

### Used For

Showing the student's standing in the challenge.

Example:

#18 — Top 5%

---

## 14. Dashboard — AI Coach

### Prompt

> thoughtful feature add karo jo student experience improve kare

### Used For

Creating the AI Coach concept.

The feature provides contextual guidance such as:

"You're ahead of 72% of students."

---

## 15. Challenge Day

### Prompt

> /day/12 nhi hua

### Used For

Creating the required Challenge Day route.

---

## 16. Challenge Task

### Prompt

> Day 12 challenge page banao jahan student today's task read kar sake

### Used For

Creating:

- Task title
- Task description
- Technology tags
- Challenge requirements

---

## 17. Proof of Work

### Prompt

> Student should be able to submit GitHub repository/commit and LinkedIn post

### Used For

Creating the GitHub and LinkedIn submission fields.

---

## 18. Challenge Checklist

### Prompt

> Challenge day me checklist add karo

### Used For

Adding:

- Build project
- Push GitHub commit
- Share LinkedIn post
- Write reflection

---

## 19. Reflection

### Prompt

> Student ke liye reflection box add karo

### Used For

Adding a reflection textarea where students can write what they learned.

---

## 20. Mobile Responsiveness

### Prompt

> 390px mobile viewport par project check karo aur responsive banao

### Used For

Reviewing the three required routes for the hackathon's 390px screenshot
viewport.

Routes tested:

/
/dashboard
/day/12

---

## 21. Debugging

### Prompt

> lucide-react icon error aa raha hai

### Used For

Debugging icon import issues and replacing unsupported icons where required.

---

## 22. Route Verification

### Prompt

> all three routes working hain

### Used For

Verifying:

/
/dashboard
/day/12

---

## 23. Production Build

### Prompt

> ek baar code ko chla kar dekhe

### Used For

Running the production build and verifying that the application compiles
successfully.

Command used:

npm run build

---

## 24. Documentation

### Prompt

> README.md ko detailed aur professional banao

### Used For

Creating detailed project documentation including:

- Project overview
- Features
- Design decisions
- Tech stack
- Route map
- Setup instructions
- Mobile testing
- AI workflow

---

## 25. Final Development Workflow

The overall AI-assisted workflow was:

Prompt
↓
AI-generated implementation
↓
Local testing
↓
Error/debugging
↓
UI review
↓
Iteration
↓
Git commit
MOTIVE:Fitness Tracker — Full-Stack Web Application

A modern, data-driven fitness tracking web app built with React + TypeScript, Firebase, Three.js, and Tailwind CSS — designed to visualize workouts, track streaks, and motivate consistent training through 3D heatmaps, insights, and gamified rewards.

Overview

Fitness Tracker is a full-featured web application that helps users log workouts, visualize muscle activation, and analyze their progress over time.
Built for both casual and dedicated gym users, it combines sleek UI design with real-time data insights powered by Firebase.

Key Highlights

3D Muscle Heatmap: Interactive Three.js visualization showing which muscles were trained.

Workout Logger: Add sets, reps, and weights — even offline, synced later via Firestore persistence.

Weekly Insights: Automated analytics powered by Firebase Cloud Functions.

Streaks & Rewards: Gamified consistency tracking with badges and confetti animations.

Custom Templates: Create and reuse your own workout templates.

Responsive UI: Built with Tailwind CSS and optimized for both web and mobile browsers.

PWA Ready: Installable with offline logging and caching support.

Tech Stack
Layer	Technology
Frontend	React (TypeScript), Vite, Tailwind CSS, Three.js
Backend / Database	Firebase (Auth, Firestore, Cloud Functions, Storage, Hosting)
Design Tools	Figma (UX/UI), Blender (3D Assets)
Analytics	Firebase Analytics + BigQuery (for advanced insights)
Core Features

Authentication: Email/password (Firebase Auth) + Google Sign-In

Onboarding: Personal info, goals, and training split setup

Dashboard: Quick log, streak tracker, weekly summary, and templates

Logging System: Real-time updates and local caching via Firestore

Heatmaps: 3D visualization of muscle engagement per session or week

Profile Analytics: Track strength gain, weight change, and muscle balance

Project Structure
fitness-tracker/
│
├── src/
│   ├── components/        # UI components
│   ├── pages/             # Page-level components (Home, Log, Profile, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── context/           # Firebase / Auth context
│   ├── utils/             # Helper functions
│   └── assets/            # Images, icons, 3D models (GLB)
│
├── public/                # Static assets
├── firebase.json          # Firebase config
├── tailwind.config.js     # Tailwind setup
├── package.json
└── README.md

Roadmap

 Authentication & Onboarding Flow

 Workout Logging Page

 3D Muscle Heatmap Integration

 Streak & Reward System

 Weekly Insights & Charts

 Profile & Analytics Dashboard

 PWA + Notifications

Vision

This project aims to redefine digital fitness tracking — by merging data analytics, gamification, and 3D visualization into one cohesive experience.
Future versions will include nutrition tracking, social sharing, and AI-driven workout recommendations.

Credits

Design & UX: Figma

3D Assets: Created in Blender

Development: React + Firebase by Ahanya, Anirudh and Nayana

License: MIT

Contributing

Pull requests are welcome!
If you’d like to collaborate or suggest features, feel free to fork the repo and submit a PR.

Contact

For questions or collaborations:
ahanyam3@gmail.com
ncmia2@gmail.com
anirudh8904@gmail.com

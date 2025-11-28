# Vivek's Portfolio Website 🚀

A professional, responsive, and interactive portfolio website built with HTML, CSS, and JavaScript. This portfolio features a modern dark theme with neon accents, smooth animations, and a multi-page layout.

## 📂 Project Structure

```
portfolio/
├── index.html          # Home Page (Hero & Intro)
├── about.html          # About Me, Journey & Skills
├── projects.html       # Project Cards with Filtering & Modals
├── certifications.html # Certifications Grid
├── contact.html        # Contact Form & Socials
├── assets/
│   ├── css/
│   │   └── style.css   # Main Stylesheet (Dark/Neon Theme)
│   ├── js/
│   │   └── script.js   # JavaScript (Animations, Modals, Logic)
│   └── images/         # Project & Profile Images
└── README.md           # Documentation
```

## 🎨 Features

-   **Dark & Neon Theme**: Professional black background with electric blue and purple accents.
-   **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.
-   **Interactive UI**:
    -   **Scroll Reveal Animations**: Elements fade in as you scroll.
    -   **Project Filtering**: Filter projects by category (AI/ML, Web Dev).
    -   **Modals**: Click "View Details" to see more info about a project without leaving the page.
    -   **Skill Bars**: Animated progress bars for technical skills.
-   **Clean Code**: Modular HTML files and organized assets.

## 🚀 How to Run Locally

1.  **Clone or Download** this repository.
2.  Open the folder in VS Code.
3.  Open `index.html` in your browser (or use Live Server).

## 🛠️ Customization Guide

### 1. Personal Details
-   Edit `index.html` to change your Name and Tagline.
-   Edit `about.html` to update your Bio and Timeline.

### 2. Adding Projects
-   Open `projects.html`.
-   Duplicate the `<article class="project-card">` block.
-   Update `data-category`, `data-title`, `data-desc`, etc.
-   Ensure you add images to `assets/images/`.

### 3. Certifications
-   Open `certifications.html`.
-   Add new `.cert-card` divs.

### 4. Images
-   Place your profile picture as `assets/images/profile.jpg`.
-   Update the `src` in `index.html` and `about.html`.

## 🌐 Deployment

You can deploy this site for free on **GitHub Pages**, **Netlify**, or **Vercel**.

### GitHub Pages
1.  Push code to a GitHub repository.
2.  Go to Settings > Pages.
3.  Select `main` branch and save.

---
Built with ❤️ by Vivek

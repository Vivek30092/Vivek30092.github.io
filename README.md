# Vivek's Portfolio Website 🚀

A professional, responsive, and interactive portfolio website built with HTML, CSS, and JavaScript. This portfolio features a modern dark theme with neon accents, smooth animations, multilingual support (English/Spanish), and a multi-page layout.

## 📂 Project Structure

```
portfolio/
├── index.html          # Home Page (Hero, Intro, Tech Stack Marquee)
├── about.html          # About Me, Journey, Skills & Timeline
├── projects.html       # Project Cards (Dynamically Loaded)
├── certifications.html # Certifications Grid & Auto-scrolling Logic
├── events.html         # Attended Events, Hackathons & Workshops
├── contact.html        # Contact Form & Social Links
├── assets/
│   ├── css/
│   │   └── style.css   # Main Stylesheet (Dark/Neon Theme, Animations)
│   ├── js/
│   │   └── script.js   # Main JavaScript (Animations, Modals, Translations, Theme)
│   └── images/         # Project, Profile, and Icon Images
└── README.md           # Documentation
```

## 🎨 Features

-   **Deep Learning & AI Focused**: Highlights expertise in AI, Machine Learning, and Cloud Computing.
-   **Dark & Neon Theme**: Premium dark interface with neon blue and purple accents.
-   **Multilingual Support 🌐**: Seamlessly switch between **English** and **Spanish** using `data-i18n`.
-   **Theme Toggle 🌓**: Switch between Dark and Light modes.
-   **Dynamic Project Loading**: Projects are defined in a JS array within `projects.html` for easy management.
-   **Interactive UI**:
    -   **Scroll Reveal Animations**: Elements fade in gracefully as you scroll.
    -   **Project Filtering**: Filter projects by category (AI/ML, Web Dev).
    -   **Modals**: Click "View Details" to see deep-dives into projects without navigating away.
    -   **Tech Stack Marquee**: Continuous scrolling animation of skills on the home page.
    -   **Certifications Carousel**: Auto-scrolling view of achievements.

## 🌟 Featured Projects

1.  **Smart Budget Buddy**
    -   *Description*: AI-powered budgeting assistant analyzing expenses with real-time insights.
    -   *Tech*: Python, Streamlit, OpenAI, Matplotlib, AWS Bedrock.
    
2.  **Intelligent Document Querying System**
    -   *Description*: RAG pipeline for querying domain-specific documents with foundation models.
    -   *Tech*: AWS Bedrock, Postgres + pgvector, S3, RAG.

3.  **Portfolio Website**
    -   *Description*: This responsive, modern portfolio.
    -   *Tech*: HTML, CSS, JavaScript.

## 🚀 How to Run Locally

1.  **Clone or Download** this repository.
2.  Open the folder in **VS Code**.
3.  Open `index.html` in your browser (or use **Live Server** extension for real-time updates).

## 🛠️ Customization Guide

### 1. Personal Details
-   Edit `index.html` to change your Name, Tagline, and Social Links.
-   Edit `about.html` for your Bio and detailed Timeline.

### 2. Managing Projects
Projects are now managed dynamically in `projects.html`.
-   Open `projects.html`.
-   Scroll to the `<script>` tag at the bottom.
-   Edit the `projectsData` array to Add, Remove, or Modify projects.
```javascript
{
    id: "new-project",
    category: "ai",
    img: "assets/images/project/new.png",
    title: "New Project",
    // ...
}
```

### 3. Certifications & Events
-   **Certifications**: Edit `certifications.html` to add new certificate cards.
-   **Events**: Edit `events.html` to add new event entries.

### 4. Translations
-   Open `assets/js/script.js`.
-   Update the `translations` object to add new keys or languages.

## 🌐 Deployment

You can deploy this site for free on **GitHub Pages**, **Netlify**, or **Vercel**.

### GitHub Pages
1.  Push code to a GitHub repository.
2.  Go to **Settings > Pages**.
3.  Select `main` branch and `/ (root)` folder, then save.

---
Built with ❤️ by Vivek

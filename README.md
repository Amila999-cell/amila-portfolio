# 🚀 Amila Vajira | Portfolio Website

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive portfolio website built for a Data Engineering student showcasing skills, projects, and certifications.

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://Amila999-cell.github.io/my-portfolio)**

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Sections](#-sections)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Contact Form Setup](#-contact-form-setup)
- [Deployment](#-deployment)
- [License](#-license)

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌓 Dark/Light Theme | Toggle between dark and light modes seamlessly |
| 📱 Fully Responsive | Works perfectly on all devices |
| ⚡ SPA Architecture | Built with React for smooth navigation |
| 🎨 Modern UI Design | Glass-morphism effects and animations |
| 📊 Project Showcase | Display data engineering projects |
| 📬 Contact Form | Integrated with Telegram API |
| 🔄 Scroll Progress | Visual progress bar while scrolling |

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React 18, Tailwind CSS, Font Awesome 6 |
| API | Telegram Bot API |
| Hosting | GitHub Pages |

## 📂 Sections Overview

| Section | Description |
|---------|-------------|
| Hero | Introduction with animated gradient text |
| About | Personal background and career goals |
| Education | Academic journey and qualifications |
| Skills | Current skills and planned learning path |
| Projects | Data engineering project portfolio |
| Certifications | Planned professional certifications |
| Achievements | Extracurricular activities |
| Contact | Interactive contact form |

## 🚀 Getting Started

### Prerequisites
- Any modern web browser
- (Optional) Local server for development

### Installation

```bash
git clone https://github.com/Amila999-cell/my-portfolio.git
cd my-portfolio
open index.html
📁 Project Structure
text
my-portfolio/
├── index.html          # Main HTML file (all React code)
├── README.md           # Documentation
└── LICENSE             # MIT License
Note: This is a single-file React application. All code is embedded in index.html.

🎨 Customization Guide
1. Personal Information
Field	Update To
Name	Amila Vajira
Title	Aspiring Data Engineer
Email	amilawajira24@gmail.com
Location	Nuwaraeliya, Sri Lanka
University	Sabaragamuwa University
2. Update Projects
javascript
const allProjects = [
  {
    title: 'Your Project Name',
    desc: 'Project description...',
    tech: ['Python', 'SQL', 'ETL'],
    icon: 'fa-arrow-right-arrow-left',
    link: 'https://github.com/your-repo',
    category: 'Data Engineering'
  }
];
3. Social Links
GitHub: https://github.com/Amila999-cell

LinkedIn: https://linkedin.com/in/amila-vajira

📬 Contact Form Setup
Step 1: Create Telegram Bot
Open Telegram and search for @BotFather

Send /newbot command

Give your bot a name

Copy the bot token

Step 2: Get Your Chat ID
Send a message to your bot

Visit in browser:
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates

Find chat -> id in response

Copy the chat ID

Step 3: Update Code
In index.html, find and replace:

javascript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
🌐 Deployment
Deploy to GitHub Pages
bash
git add .
git commit -m "Initial commit"
git push -u origin master
Then:

Go to Settings -> Pages

Branch: master, Folder: / (root)

Click Save

Live URL:

text
https://Amila999-cell.github.io/my-portfolio
📱 Browser Support
Browser	Version	Support
Chrome	90+	✅
Firefox	88+	✅
Safari	14+	✅
Edge	90+	✅
📄 License
MIT License - see LICENSE file for details.

📧 Contact
Email: amilawajira24@gmail.com

LinkedIn: https://linkedin.com/in/amila-vajira

GitHub: https://github.com/Amila999-cell

⭐ If you like this portfolio, please give it a star! ⭐

Made with ❤️ by Amila Vajira
# 🚀 Amila Vajira | Portfolio Website

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.5.0-339AF0?logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive portfolio website built for a Data Engineering student showcasing skills, projects, and certifications.

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://Amila999-cell.github.io/portfolio)**

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
| 🌓 **Dark/Light Theme** | Toggle between dark and light modes seamlessly |
| 📱 **Fully Responsive** | Works perfectly on all devices (mobile, tablet, desktop) |
| ⚡ **SPA Architecture** | Built with React for smooth and fast navigation |
| 🎨 **Modern UI Design** | Glass-morphism effects, gradients, and smooth animations |
| 📊 **Project Showcase** | Display data engineering projects with tech stacks |
| 📬 **Contact Form** | Integrated with Telegram API for instant message delivery |
| 🔄 **Scroll Progress** | Visual progress bar while scrolling the page |
| 🎯 **Smooth Scrolling** | Navigation with smooth anchor scrolling to sections |

## 🛠️ Tech Stack

### Frontend
┌─────────────────────────────────────────────┐
│ 🖥️ React 18 - UI Library │
│ 🎨 Tailwind CSS - Styling Framework │
│ 🔷 Font Awesome 6 - Icon Library │
│ 📦 Babel - JSX Transpiler │
└─────────────────────────────────────────────┘

text

### APIs & Integrations
┌─────────────────────────────────────────────┐
│ 📨 Telegram Bot API - Contact Form │
└─────────────────────────────────────────────┘

text

### Hosting
┌─────────────────────────────────────────────┐
│ 🌐 GitHub Pages - Free Hosting │
└─────────────────────────────────────────────┘

text

## 📂 Sections Overview

| Section | Description |
|---------|-------------|
| **Hero** | Introduction with animated gradient text and CTA buttons |
| **About** | Personal background and career goals in Data Engineering |
| **Education** | Academic journey and qualifications |
| **Skills** | Current skills (Python, SQL, ETL) & planned learning path |
| **Projects** | Data engineering project portfolio with tech stacks |
| **Certifications** | Planned professional certifications (AWS, IBM, Databricks) |
| **Achievements** | Extracurricular activities and accomplishments |
| **Contact** | Interactive contact form with Telegram integration |

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) Local server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amila999-cell/portfolio.git
   cd portfolio
Open the project

bash
# Method 1: Direct open
open index.html

# Method 2: Using VS Code Live Server
# Install Live Server extension
# Right-click on index.html > Open with Live Server

# Method 3: Using Python
python -m http.server 8000
# Then open http://localhost:8000
📁 Project Structure
text
portfolio/
│
├── index.html              # Main HTML file (contains all React code)
├── README.md               # Project documentation (this file)
├── LICENSE                 # MIT License
│
└── assets/                 # (Optional) Images and assets
    └── images/
        └── profile.jpg     # Profile picture
Note: This is a single-file React application. All code is embedded in index.html.

🎨 Customization Guide
1. Change Personal Information
Edit the data in these sections of index.html:

javascript
// Hero Section
<h1>Hi, I'm Amila Vajira</h1>
<p>Aspiring Data Engineer</p>

// About Section
<p>I'm an Information Systems undergraduate...</p>

// Education
{ year: '2026 - Present', 
  title: 'BSc (Hons) in Information Systems',
  institution: 'Sabaragamuwa University' }
2. Update Projects
Find the allProjects array in the script:

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
Available Icons: Font Awesome Icons

3. Update Skills
javascript
// Currently Learning
{ title: 'Python for Data', 
  icon: 'fa-python', 
  skills: ['Python', 'Pandas', 'NumPy'] }

// Plan to Learn  
{ title: 'Big Data Technologies',
  icon: 'fa-hadoop',
  skills: ['Apache Spark', 'Hadoop', 'Kafka'] }
📬 Contact Form Setup
Step 1: Create Telegram Bot
Open Telegram and search for @BotFather

Send /newbot command

Give your bot a name (e.g., AmilaPortfolioBot)

Give a username (e.g., amilaportfolio_bot)

Copy the bot token

Step 2: Get Your Chat ID
Send a message to your bot

Visit in browser:

text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
Find the chat → id in the JSON response

Copy the chat ID

Step 3: Update the Code
In index.html, find and replace:

javascript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
🌐 Deployment
Deploy to GitHub Pages (Recommended)
Push code to GitHub

bash
git add .
git commit -m "Initial commit"
git push origin main
Enable GitHub Pages

Go to repository → Settings → Pages

Branch: main

Folder: / (root)

Click Save

Your site is live at:

text
https://Amila999-cell.github.io/portfolio
Deploy to Netlify
Drag and drop the project folder to Netlify

Or connect your GitHub repository

Deploy to Vercel
bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
🎯 Performance Optimization Tips
Image Optimization: Use WebP format for images

Lazy Loading: Add loading="lazy" to images

CDN Usage: Use CDN links for libraries (already implemented)

Minify Code: Minify HTML and CSS before production

📱 Browser Support
Browser	Version	Support
Chrome	90+	✅ Full
Firefox	88+	✅ Full
Safari	14+	✅ Full
Edge	90+	✅ Full
Opera	76+	✅ Full
Mobile Safari	iOS 14+	✅ Full
Chrome Android	90+	✅ Full
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License

Copyright (c) 2026 Amila Vajira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
🙏 Acknowledgments
Tailwind CSS - Utility-first CSS framework

Font Awesome - Icon library

React - UI library

Telegram Bot API - Contact form integration

GitHub Pages - Free hosting service

📧 Contact & Social
<div align="center">
Platform	Link
📧 Email	amilawajira24@gmail.com
🔗 LinkedIn	Amila Vajira
🐙 GitHub	Amila999-cell
🐦 Twitter	@amila_vajira
</div>
<div align="center">
⭐ If you like this portfolio, please give it a star! ⭐
Made with ❤️ by Amila Vajira

Last Updated: July 2026# 🚀 Amila Vajira | Portfolio Website

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.5.0-339AF0?logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive portfolio website built for a Data Engineering student showcasing skills, projects, and certifications.

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://Amila999-cell.github.io/portfolio)**

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
| 🌓 **Dark/Light Theme** | Toggle between dark and light modes seamlessly |
| 📱 **Fully Responsive** | Works perfectly on all devices (mobile, tablet, desktop) |
| ⚡ **SPA Architecture** | Built with React for smooth and fast navigation |
| 🎨 **Modern UI Design** | Glass-morphism effects, gradients, and smooth animations |
| 📊 **Project Showcase** | Display data engineering projects with tech stacks |
| 📬 **Contact Form** | Integrated with Telegram API for instant message delivery |
| 🔄 **Scroll Progress** | Visual progress bar while scrolling the page |
| 🎯 **Smooth Scrolling** | Navigation with smooth anchor scrolling to sections |

## 🛠️ Tech Stack

### Frontend
┌─────────────────────────────────────────────┐
│ 🖥️ React 18 - UI Library │
│ 🎨 Tailwind CSS - Styling Framework │
│ 🔷 Font Awesome 6 - Icon Library │
│ 📦 Babel - JSX Transpiler │
└─────────────────────────────────────────────┘

text

### APIs & Integrations
┌─────────────────────────────────────────────┐
│ 📨 Telegram Bot API - Contact Form │
└─────────────────────────────────────────────┘

text

### Hosting
┌─────────────────────────────────────────────┐
│ 🌐 GitHub Pages - Free Hosting │
└─────────────────────────────────────────────┘

text

## 📂 Sections Overview

| Section | Description |
|---------|-------------|
| **Hero** | Introduction with animated gradient text and CTA buttons |
| **About** | Personal background and career goals in Data Engineering |
| **Education** | Academic journey and qualifications |
| **Skills** | Current skills (Python, SQL, ETL) & planned learning path |
| **Projects** | Data engineering project portfolio with tech stacks |
| **Certifications** | Planned professional certifications (AWS, IBM, Databricks) |
| **Achievements** | Extracurricular activities and accomplishments |
| **Contact** | Interactive contact form with Telegram integration |

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) Local server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amila999-cell/portfolio.git
   cd portfolio
Open the project

bash
# Method 1: Direct open
open index.html

# Method 2: Using VS Code Live Server
# Install Live Server extension
# Right-click on index.html > Open with Live Server

# Method 3: Using Python
python -m http.server 8000
# Then open http://localhost:8000
📁 Project Structure
text
portfolio/
│
├── index.html              # Main HTML file (contains all React code)
├── README.md               # Project documentation (this file)
├── LICENSE                 # MIT License
│
└── assets/                 # (Optional) Images and assets
    └── images/
        └── profile.jpg     # Profile picture
Note: This is a single-file React application. All code is embedded in index.html.

🎨 Customization Guide
1. Change Personal Information
Edit the data in these sections of index.html:

javascript
// Hero Section
<h1>Hi, I'm Amila Vajira</h1>
<p>Aspiring Data Engineer</p>

// About Section
<p>I'm an Information Systems undergraduate...</p>

// Education
{ year: '2026 - Present', 
  title: 'BSc (Hons) in Information Systems',
  institution: 'Sabaragamuwa University' }
2. Update Projects
Find the allProjects array in the script:

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
Available Icons: Font Awesome Icons

3. Update Skills
javascript
// Currently Learning
{ title: 'Python for Data', 
  icon: 'fa-python', 
  skills: ['Python', 'Pandas', 'NumPy'] }

// Plan to Learn  
{ title: 'Big Data Technologies',
  icon: 'fa-hadoop',
  skills: ['Apache Spark', 'Hadoop', 'Kafka'] }
📬 Contact Form Setup
Step 1: Create Telegram Bot
Open Telegram and search for @BotFather

Send /newbot command

Give your bot a name (e.g., AmilaPortfolioBot)

Give a username (e.g., amilaportfolio_bot)

Copy the bot token

Step 2: Get Your Chat ID
Send a message to your bot

Visit in browser:

text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
Find the chat → id in the JSON response

Copy the chat ID

Step 3: Update the Code
In index.html, find and replace:

javascript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
🌐 Deployment
Deploy to GitHub Pages (Recommended)
Push code to GitHub

bash
git add .
git commit -m "Initial commit"
git push origin main
Enable GitHub Pages

Go to repository → Settings → Pages

Branch: main

Folder: / (root)

Click Save

Your site is live at:

text
https://Amila999-cell.github.io/portfolio
Deploy to Netlify
Drag and drop the project folder to Netlify

Or connect your GitHub repository

Deploy to Vercel
bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
🎯 Performance Optimization Tips
Image Optimization: Use WebP format for images

Lazy Loading: Add loading="lazy" to images

CDN Usage: Use CDN links for libraries (already implemented)

Minify Code: Minify HTML and CSS before production

📱 Browser Support
Browser	Version	Support
Chrome	90+	✅ Full
Firefox	88+	✅ Full
Safari	14+	✅ Full
Edge	90+	✅ Full
Opera	76+	✅ Full
Mobile Safari	iOS 14+	✅ Full
Chrome Android	90+	✅ Full
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License

Copyright (c) 2026 Amila Vajira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
🙏 Acknowledgments
Tailwind CSS - Utility-first CSS framework

Font Awesome - Icon library

React - UI library

Telegram Bot API - Contact form integration

GitHub Pages - Free hosting service

📧 Contact & Social
<div align="center">
Platform	Link
📧 Email	amilawajira24@gmail.com
🔗 LinkedIn	Amila Vajira
🐙 GitHub	Amila999-cell
🐦 Twitter	@amila_vajira
</div>
<div align="center">
⭐ If you like this portfolio, please give it a star! ⭐
Made with ❤️ by Amila Vajira

Last Updated: July 2026# 🚀 Amila Vajira | Portfolio Website

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.5.0-339AF0?logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive portfolio website built for a Data Engineering student showcasing skills, projects, and certifications.

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://Amila999-cell.github.io/portfolio)**

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
| 🌓 **Dark/Light Theme** | Toggle between dark and light modes seamlessly |
| 📱 **Fully Responsive** | Works perfectly on all devices (mobile, tablet, desktop) |
| ⚡ **SPA Architecture** | Built with React for smooth and fast navigation |
| 🎨 **Modern UI Design** | Glass-morphism effects, gradients, and smooth animations |
| 📊 **Project Showcase** | Display data engineering projects with tech stacks |
| 📬 **Contact Form** | Integrated with Telegram API for instant message delivery |
| 🔄 **Scroll Progress** | Visual progress bar while scrolling the page |
| 🎯 **Smooth Scrolling** | Navigation with smooth anchor scrolling to sections |

## 🛠️ Tech Stack

### Frontend
┌─────────────────────────────────────────────┐
│ 🖥️ React 18 - UI Library │
│ 🎨 Tailwind CSS - Styling Framework │
│ 🔷 Font Awesome 6 - Icon Library │
│ 📦 Babel - JSX Transpiler │
└─────────────────────────────────────────────┘

text

### APIs & Integrations
┌─────────────────────────────────────────────┐
│ 📨 Telegram Bot API - Contact Form │
└─────────────────────────────────────────────┘

text

### Hosting
┌─────────────────────────────────────────────┐
│ 🌐 GitHub Pages - Free Hosting │
└─────────────────────────────────────────────┘

text

## 📂 Sections Overview

| Section | Description |
|---------|-------------|
| **Hero** | Introduction with animated gradient text and CTA buttons |
| **About** | Personal background and career goals in Data Engineering |
| **Education** | Academic journey and qualifications |
| **Skills** | Current skills (Python, SQL, ETL) & planned learning path |
| **Projects** | Data engineering project portfolio with tech stacks |
| **Certifications** | Planned professional certifications (AWS, IBM, Databricks) |
| **Achievements** | Extracurricular activities and accomplishments |
| **Contact** | Interactive contact form with Telegram integration |

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) Local server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amila999-cell/portfolio.git
   cd portfolio
Open the project

bash
# Method 1: Direct open
open index.html

# Method 2: Using VS Code Live Server
# Install Live Server extension
# Right-click on index.html > Open with Live Server

# Method 3: Using Python
python -m http.server 8000
# Then open http://localhost:8000
📁 Project Structure
text
portfolio/
│
├── index.html              # Main HTML file (contains all React code)
├── README.md               # Project documentation (this file)
├── LICENSE                 # MIT License
│
└── assets/                 # (Optional) Images and assets
    └── images/
        └── profile.jpg     # Profile picture
Note: This is a single-file React application. All code is embedded in index.html.

🎨 Customization Guide
1. Change Personal Information
Edit the data in these sections of index.html:

javascript
// Hero Section
<h1>Hi, I'm Amila Vajira</h1>
<p>Aspiring Data Engineer</p>

// About Section
<p>I'm an Information Systems undergraduate...</p>

// Education
{ year: '2026 - Present', 
  title: 'BSc (Hons) in Information Systems',
  institution: 'Sabaragamuwa University' }
2. Update Projects
Find the allProjects array in the script:

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
Available Icons: Font Awesome Icons

3. Update Skills
javascript
// Currently Learning
{ title: 'Python for Data', 
  icon: 'fa-python', 
  skills: ['Python', 'Pandas', 'NumPy'] }

// Plan to Learn  
{ title: 'Big Data Technologies',
  icon: 'fa-hadoop',
  skills: ['Apache Spark', 'Hadoop', 'Kafka'] }
📬 Contact Form Setup
Step 1: Create Telegram Bot
Open Telegram and search for @BotFather

Send /newbot command

Give your bot a name (e.g., AmilaPortfolioBot)

Give a username (e.g., amilaportfolio_bot)

Copy the bot token

Step 2: Get Your Chat ID
Send a message to your bot

Visit in browser:

text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
Find the chat → id in the JSON response

Copy the chat ID

Step 3: Update the Code
In index.html, find and replace:

javascript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
🌐 Deployment
Deploy to GitHub Pages (Recommended)
Push code to GitHub

bash
git add .
git commit -m "Initial commit"
git push origin main
Enable GitHub Pages

Go to repository → Settings → Pages

Branch: main

Folder: / (root)

Click Save

Your site is live at:

text
https://Amila999-cell.github.io/portfolio
Deploy to Netlify
Drag and drop the project folder to Netlify

Or connect your GitHub repository

Deploy to Vercel
bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
🎯 Performance Optimization Tips
Image Optimization: Use WebP format for images

Lazy Loading: Add loading="lazy" to images

CDN Usage: Use CDN links for libraries (already implemented)

Minify Code: Minify HTML and CSS before production

📱 Browser Support
Browser	Version	Support
Chrome	90+	✅ Full
Firefox	88+	✅ Full
Safari	14+	✅ Full
Edge	90+	✅ Full
Opera	76+	✅ Full
Mobile Safari	iOS 14+	✅ Full
Chrome Android	90+	✅ Full
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License

Copyright (c) 2026 Amila Vajira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
🙏 Acknowledgments
Tailwind CSS - Utility-first CSS framework

Font Awesome - Icon library

React - UI library

Telegram Bot API - Contact form integration

GitHub Pages - Free hosting service

📧 Contact & Social
<div align="center">
Platform	Link
📧 Email	amilawajira24@gmail.com
🔗 LinkedIn	Amila Vajira
🐙 GitHub	Amila999-cell
🐦 Twitter	@amila_vajira
</div>
<div align="center">
⭐ If you like this portfolio, please give it a star! ⭐
Made with ❤️ by Amila Vajira

Last Updated: July 2026# 🚀 Amila Vajira | Portfolio Website

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.5.0-339AF0?logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive portfolio website built for a Data Engineering student showcasing skills, projects, and certifications.

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://Amila999-cell.github.io/portfolio)**

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
| 🌓 **Dark/Light Theme** | Toggle between dark and light modes seamlessly |
| 📱 **Fully Responsive** | Works perfectly on all devices (mobile, tablet, desktop) |
| ⚡ **SPA Architecture** | Built with React for smooth and fast navigation |
| 🎨 **Modern UI Design** | Glass-morphism effects, gradients, and smooth animations |
| 📊 **Project Showcase** | Display data engineering projects with tech stacks |
| 📬 **Contact Form** | Integrated with Telegram API for instant message delivery |
| 🔄 **Scroll Progress** | Visual progress bar while scrolling the page |
| 🎯 **Smooth Scrolling** | Navigation with smooth anchor scrolling to sections |

## 🛠️ Tech Stack

### Frontend
┌─────────────────────────────────────────────┐
│ 🖥️ React 18 - UI Library │
│ 🎨 Tailwind CSS - Styling Framework │
│ 🔷 Font Awesome 6 - Icon Library │
│ 📦 Babel - JSX Transpiler │
└─────────────────────────────────────────────┘

text

### APIs & Integrations
┌─────────────────────────────────────────────┐
│ 📨 Telegram Bot API - Contact Form │
└─────────────────────────────────────────────┘

text

### Hosting
┌─────────────────────────────────────────────┐
│ 🌐 GitHub Pages - Free Hosting │
└─────────────────────────────────────────────┘

text

## 📂 Sections Overview

| Section | Description |
|---------|-------------|
| **Hero** | Introduction with animated gradient text and CTA buttons |
| **About** | Personal background and career goals in Data Engineering |
| **Education** | Academic journey and qualifications |
| **Skills** | Current skills (Python, SQL, ETL) & planned learning path |
| **Projects** | Data engineering project portfolio with tech stacks |
| **Certifications** | Planned professional certifications (AWS, IBM, Databricks) |
| **Achievements** | Extracurricular activities and accomplishments |
| **Contact** | Interactive contact form with Telegram integration |

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) Local server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amila999-cell/portfolio.git
   cd portfolio
Open the project

bash
# Method 1: Direct open
open index.html

# Method 2: Using VS Code Live Server
# Install Live Server extension
# Right-click on index.html > Open with Live Server

# Method 3: Using Python
python -m http.server 8000
# Then open http://localhost:8000
📁 Project Structure
text
portfolio/
│
├── index.html              # Main HTML file (contains all React code)
├── README.md               # Project documentation (this file)
├── LICENSE                 # MIT License
│
└── assets/                 # (Optional) Images and assets
    └── images/
        └── profile.jpg     # Profile picture
Note: This is a single-file React application. All code is embedded in index.html.

🎨 Customization Guide
1. Change Personal Information
Edit the data in these sections of index.html:

javascript
// Hero Section
<h1>Hi, I'm Amila Vajira</h1>
<p>Aspiring Data Engineer</p>

// About Section
<p>I'm an Information Systems undergraduate...</p>

// Education
{ year: '2026 - Present', 
  title: 'BSc (Hons) in Information Systems',
  institution: 'Sabaragamuwa University' }
2. Update Projects
Find the allProjects array in the script:

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
Available Icons: Font Awesome Icons

3. Update Skills
javascript
// Currently Learning
{ title: 'Python for Data', 
  icon: 'fa-python', 
  skills: ['Python', 'Pandas', 'NumPy'] }

// Plan to Learn  
{ title: 'Big Data Technologies',
  icon: 'fa-hadoop',
  skills: ['Apache Spark', 'Hadoop', 'Kafka'] }
📬 Contact Form Setup
Step 1: Create Telegram Bot
Open Telegram and search for @BotFather

Send /newbot command

Give your bot a name (e.g., AmilaPortfolioBot)

Give a username (e.g., amilaportfolio_bot)

Copy the bot token

Step 2: Get Your Chat ID
Send a message to your bot

Visit in browser:

text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
Find the chat → id in the JSON response

Copy the chat ID

Step 3: Update the Code
In index.html, find and replace:

javascript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
🌐 Deployment
Deploy to GitHub Pages (Recommended)
Push code to GitHub

bash
git add .
git commit -m "Initial commit"
git push origin main
Enable GitHub Pages

Go to repository → Settings → Pages

Branch: main

Folder: / (root)

Click Save

Your site is live at:

text
https://Amila999-cell.github.io/portfolio
Deploy to Netlify
Drag and drop the project folder to Netlify

Or connect your GitHub repository

Deploy to Vercel
bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
🎯 Performance Optimization Tips
Image Optimization: Use WebP format for images

Lazy Loading: Add loading="lazy" to images

CDN Usage: Use CDN links for libraries (already implemented)

Minify Code: Minify HTML and CSS before production

📱 Browser Support
Browser	Version	Support
Chrome	90+	✅ Full
Firefox	88+	✅ Full
Safari	14+	✅ Full
Edge	90+	✅ Full
Opera	76+	✅ Full
Mobile Safari	iOS 14+	✅ Full
Chrome Android	90+	✅ Full
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License

Copyright (c) 2026 Amila Vajira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
🙏 Acknowledgments
Tailwind CSS - Utility-first CSS framework

Font Awesome - Icon library

React - UI library

Telegram Bot API - Contact form integration

GitHub Pages - Free hosting service

📧 Contact & Social
<div align="center">
Platform	Link
📧 Email	amilawajira24@gmail.com
🔗 LinkedIn	Amila Vajira
🐙 GitHub	Amila999-cell
🐦 Twitter	@amila_vajira
</div>
<div align="center">
⭐ If you like this portfolio, please give it a star! ⭐
Made with ❤️ by Amila Vajira

Last Updated: July 2026
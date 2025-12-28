# Prescott & Co. - E-Commerce Website

![Prescott & Co. Logo](https://via.placeholder.com/400x100?text=Prescott+%26+Co.)

## Project Overview

**Prescott & Co.** is a sophisticated e-commerce website for a luxury men's clothing brand. The website embodies the "Old Money" and "Quiet Luxury" aesthetic, featuring a minimalist design with a refined color palette of creams, navys, and forest greens.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [How to Run the Website](#how-to-run-the-website)
- [Features](#features)
- [Team Members](#team-members)
- [License](#license)

---

## Project Structure

```
prescott/
├── index.html          # Homepage with hero section
├── auth.html           # Login and Signup forms
├── categories.html     # Product categories grid
├── product.html        # Individual product detail page
├── css/
│   └── style.css       # Main stylesheet (Flexbox, Box Model)
├── js/
│   └── main.js         # JavaScript for form validation
└── README.md           # This file
```

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and page structure |
| **CSS3** | Styling with Flexbox layout and Box Model |
| **JavaScript (ES6)** | Form validation and interactivity |
| **Google Fonts** | Playfair Display & Lato typography |

### CSS Concepts Demonstrated:
- **Flexbox** for responsive layouts
- **CSS Variables** for consistent theming
- **Box Model** (padding, margin, border)
- **Media Queries** for responsive design
- **CSS Transitions** for smooth hover effects

---

## How to Run the Website

### Option 1: Direct File Opening
1. Download or clone this repository
2. Navigate to the `prescott/` folder
3. Double-click on `index.html` to open in your browser

### Option 2: Using a Local Server (Recommended)
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Using Python HTTP Server
```bash
# Navigate to the prescott folder
cd prescott

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

---

## Features

### 🏠 Homepage (index.html)
- Hero section with brand introduction
- "Shop Now" call-to-action button
- Preview of featured categories

### 🔐 Authentication (auth.html)
- Side-by-side Login and Signup forms
- JavaScript form validation
- Real-time error messages

### 📦 Categories (categories.html)
- Responsive grid layout using Flexbox
- 6 product categories with descriptions
- Hover animations on cards

### 👔 Product Detail (product.html)
- Large product image display
- Price and detailed description
- Size selector with interactive buttons
- "Add to Cart" functionality

### 📱 Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Flexbox-based responsive grid

---

## Team Members

| Name | Role | GitHub |
|------|------|--------|
| [Your Name] | Lead Developer | @username |
| Sara Mishal | Collaborator | @sara-mishal |
| [Team Member 3] | Designer | @username |

---

## Browser Compatibility

- ✅ Google Chrome (Latest)
- ✅ Mozilla Firefox (Latest)
- ✅ Microsoft Edge (Latest)
- ✅ Safari (Latest)

---

## License

This project is created for educational purposes as part of a university assignment.

© 2024 Prescott & Co. - All Rights Reserved.

---

## Acknowledgments

- Typography: [Google Fonts](https://fonts.google.com/)
- Design Inspiration: Ralph Lauren, Brunello Cucinelli
- CSS Reset methodology

---

*"Where tradition meets distinction."*

# Personal CV Website

A professional portfolio/CV website built with Express.js and EJS templating.

## Overview

This application serves as an online curriculum vitae showcasing professional experience, education, skills, and contact information. The site features a responsive design using Bootstrap, organized navigation, and modular components.

## Features

- Clean, responsive layout using Bootstrap 3
- Multiple content sections:
  - Home page with overview
  - About section with professional summary
  - Work experience timeline
  - Education background
  - Technical and professional skills
  - Contact information
- Modular template structure with reusable components
- Mobile-friendly design

## Technology Stack

- **Backend**: Node.js with Express.js framework
- **View Engine**: EJS (Embedded JavaScript)
- **Styling**: Bootstrap 3 with custom CSS
- **Deployment**: Ready for Heroku or similar platforms

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
or if using pnpm:
```bash
pnpm install
```
3. Start the application: 
```bash
DEBUG=myapp:* npm start
```
or if using pnpm:
```bash
DEBUG=myapp:* pnpm start
```
5. Visit `http://localhost:3000` in your browser

## Project Structure

```bash
. 
├── app.js          # Express application setup
├── bin/www         # Server startup script
├── public/         # Static assets
│ └── stylesheets/  # CSS files
├── routes/         # Express route handlers
│ └── index.js      # Main route definitions
├── views/          # EJS templates
│ ├── partials/     # Reusable template components
│ │ ├── footer.ejs
│ │ └── navbar.ejs
│ ├── about.ejs
│ ├── contact.ejs
│ ├── education.ejs
│ ├── error.ejs
│ ├── experience.ejs
│ ├── index.ejs
│ └── skills.ejs
├── package.json
└── README.md
```

## Development

To modify the content of the site, edit the EJS files in the `views` directory. The `partials` folder contains reusable components like the navigation bar and footer.

## Author

Vinicius Picossi Teruel

## License

All rights reserved
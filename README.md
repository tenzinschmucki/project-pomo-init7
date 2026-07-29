# Init7 Promotion

A simple, multilingual landing page built with Next.js for the Init7 referral program. The project focuses on performance, accessibility and technical SEO while providing users with clear information about the current referral offer.

## Features

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* Internationalisation (DE, EN, FR, IT)
* SEO-optimised metadata
* XML sitemap
* Robots.txt
* Responsive design
* Vercel deployment

## Getting Started

### Prerequisites

* Node.js 20+
* npm (or pnpm/yarn)

### Installation

Clone the repository:

```bash
git clone https://github.com/tenzinschmucki/project-pomo-init7.git
cd project-pomo-init7
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

The application reloads automatically whenever files are modified.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Run production server
npm run lint     # Run linting
```

## Project Structure

```text
src/
├── app/            # App Router pages
├── components/     # Reusable UI components
├── config/         # Project configuration
├── i18n/           # Internationalisation
├── lib/            # Shared utilities
└── middleware.ts   # Locale routing
```

## Deployment

The project is configured for deployment on Vercel.

Every push to the `main` branch automatically triggers a new production deployment.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Vercel

## Contributing

Issues and pull requests are welcome. Please open an issue first if you plan to make significant changes.

## License

This project is provided for educational and demonstration purposes.

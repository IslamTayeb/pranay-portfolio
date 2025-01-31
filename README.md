# Pranay Vure Portfolio
A portfolio website showcasing Pranay Vure's work as a Biomedical Engineer, Researcher, Innovator, and Programmer.  This website utilizes Next.js for a fast and dynamic user experience.

## Features
* **Responsive Design:** Adapts seamlessly to different screen sizes.
* **Interactive Elements:**  Includes engaging elements like a typewriter effect in the hero section and interactive accordions for publications.
* **Customizable Styling:** Uses Tailwind CSS for efficient and customizable styling.
* **Contact Form:** Allows users to easily reach out via email.
* **Clean UI:** Designed with user experience in mind for a smooth browsing experience.
* **Optimized for Performance:** Leveraging Next.js features and optimized font loading.

## Usage
The website is designed to be accessed via a web browser. Navigate through different sections to view Pranay's projects, experiences, publications, and skills.  You can also use the contact form to get in touch.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/[username]/pranay-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pranay-portfolio/code
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used
* **Next.js:** A React framework for building web applications. Used for the entire website structure, routing, and server-side rendering.
* **React:** A JavaScript library for building user interfaces.  Used to build the components and manage the website's front-end logic.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development. Used to style all components and elements of the website.
* **TypeScript:** A superset of JavaScript that adds static typing.  Increases code maintainability and reduces runtime errors.
* **Framer Motion:** A production-ready motion library for React. Used to create smooth animations and transitions.
* **React Hook Form:** A library for managing forms in React. Used for handling user input in the contact form.
* **Zod:** A TypeScript schema validation library. Used to validate user input on the contact form.
* **Resend:**  An email API for sending transactional emails. Used for handling email submissions through the contact form.
* **Lucide React:** A set of React components for Lucide icons. Used to enhance the UI with relevant icons.
* **Iconify:** A library providing a wide range of icons.  Used for various icons throughout the website.
* **Next Font:** Optimizes font loading for better performance.
* **@iconify/react:** Library to use Iconify icons within React components.
* **usehooks-ts:** Collection of useful React hooks.

## Configuration
The project uses a `tailwind.config.ts` file for Tailwind CSS configuration and a `components.json` file for component configuration with Shadcn UI.  Environment variables are used for the Resend API key (`RESEND_API_KEY`).  Local fonts are loaded using `next/font`.

## Dependencies
The project's dependencies are listed in `package.json`.

## To Do
* [ ] Transfer ownership of Vercel + GitHub deployment
* [ ] Set up Resend + Zod properly for the contact page
* [ ] Put all pictures in the public folder and connect them with descriptions
* [ ] Fix UI bugs here and there with the width (namely in publications, contact form)
* [ ] Get a better experience section

*README.md was made with [Etchr](https://etchr.dev)*
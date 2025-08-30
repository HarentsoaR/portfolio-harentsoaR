# AI Rules for this Application

This document outlines the core technologies and libraries used in this project, along with guidelines for their appropriate usage.

## Tech Stack Overview

1.  **Next.js (v15.x):** The primary React framework for building the application, leveraging its App Router for routing and server components where applicable.
2.  **TypeScript:** All application code is written in TypeScript for enhanced type safety and developer experience.
3.  **Tailwind CSS:** Used exclusively for styling, providing a utility-first approach for responsive and consistent UI design.
4.  **Framer Motion:** The go-to library for all animations and transitions, ensuring a smooth and engaging user experience.
5.  **Next-Intl:** Handles all internationalization (i18n) aspects, including locale detection, message loading, and routing.
6.  **React Icons:** Provides a wide range of customizable SVG icons from popular icon libraries.
7.  **React Type Animation:** Used for dynamic, animated text typing effects.
8.  **@vis.gl/react-google-maps:** Integrated for displaying interactive Google Maps.
9.  **EmailJS-com:** Facilitates sending emails directly from the client-side, typically for contact forms.
10. **ldrs / @uiball/loaders:** Libraries for displaying various loading animations and spinners.

## Library Usage Guidelines

To maintain consistency and efficiency, please adhere to the following rules when developing:

*   **Framework:** Always use **Next.js** for building new pages, components, and API routes.
*   **Language:** All new code must be written in **TypeScript**.
*   **Styling:** Utilize **Tailwind CSS** classes for all styling. Avoid writing custom CSS unless absolutely necessary for global styles in `src/app/[locale]/globals.css`.
*   **Animations:** Implement all animations and transitions using **Framer Motion**.
*   **Internationalization:** Use **Next-Intl** for all text that needs to be translated. Ensure messages are added to the `messages/en.json` and `messages/fr.json` files.
*   **Icons:** When an icon is needed, prefer **React Icons**.
*   **Typing Effects:** For animated text typing, use **React Type Animation**.
*   **Maps:** For any map-related features, use **@vis.gl/react-google-maps**. Remember to configure API keys in environment variables.
*   **Contact Forms:** For client-side email sending, use **EmailJS-com**. Ensure service, template, and user IDs are configured.
*   **Loaders:** For any loading indicators, use components from **ldrs** or **@uiball/loaders**.
*   **Routing:** Leverage Next.js's built-in routing capabilities, specifically the App Router, and integrate with `next-intl/navigation` for locale-aware links and redirects.
*   **Component Structure:**
    *   New reusable UI components should reside in `src/components/`.
    *   Page-level components should be placed in `src/app/[locale]/`.
    *   Custom React hooks should be in `src/hooks/`.
    *   Static data should be organized in `src/data/`.
    *   General utility functions should be in `src/utils/`.
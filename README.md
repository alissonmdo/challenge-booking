Certainly! Below is the complete README for your Hostfully Frontend Challenge project, incorporating the details you've provided and written in a clear, fluent style that's suitable for a non-native English speaker.

---

# Challenge: Booking System

## Overview

This project was developed for the technical assessment of a frontend position at Hostfully. It demonstrates the application of modern web development technologies and practices to create a user-friendly web interface.

### Deployment

The project is currently live and can be viewed at [https://challenge-booking.pages.dev/](https://challenge-booking.pages.dev/).

### Source Code

The complete source code is available on GitHub: [https://github.com/alissonmdo/challenge-booking](https://github.com/alissonmdo/challenge-booking).

## Project Structure

- **`src/`**: The main directory for all source code.
  - **`api/`**: Contains a mock API for listings and stays.
  - **`components/`**: Houses React components used throughout the application.
  - **`hooks/`**: Includes custom React hooks, mainly for state management with React Query.
  - **`pages/`**: Comprises different pages of the application.
  - **`services/`**: Service files for listings and stays are located here.
- **`public/`**: This directory has public assets and files.
- **`package.json`**: Lists project dependencies and scripts.

## Key Technologies and Frameworks

- **React**: Used for its robust ecosystem and component-based architecture.
- **React Router Dom**: Provides declarative routing in React.
- **TypeScript**: Adds static types to JavaScript, enhancing code quality and maintainability.
- **Vite**: Selected for its fast build times and efficient development experience.
- **Day.js**: A minimalist JavaScript library for date handling.
- **Tabler Icons**: Over 1250 free high-quality SVG icons.
- **Tailwind CSS**: A utility-first CSS framework for custom designs.
- **DaisyUI**: Adds beautiful UI components to Tailwind CSS.
- **React Query**: Manages asynchronous data and state without frontend replication.

## Design and Development Choices

- **React**: The framework was chosen as per the requirements of this challenge.
- **TypeScript**: A strong belief in the necessity of a type system for most applications led to the choice of TypeScript.
- **Tailwind CSS & DaisyUI**: These were chosen for their ease of use and customization capabilities, allowing for rapid styling.
- **Vite**: Preferred for its speedy setup and build process, enhancing the development workflow.
- **React Query**: Crucial for managing the application state efficiently, keeping the backend as the source of truth.

## Challenges and Solutions

- **Calendar Component**: Integrating the calendar was challenging, especially optimizing it for mobile. The experience highlighted the importance of tool selection in web development.
- **Design Approach**: The focus was primarily on functionality, aiming for a clean and practical interface inspired by market standards.

## Future Enhancements

- **Pagination**: Adding pagination to the listings and stays pages for better performance.
- **Block User Mistakes**: Right now, it's possible to book two stays on the same date if the user is quick enough. This can be prevented by blocking all the booking buttons until the API call is complete.
- **Query Delay**: Implementing a delay in search queries for performance optimization.
- **Filtering**: Adding selection-based filtering for improved search precision.
- **End-to-End Tests**: Introducing comprehensive tests to ensure application reliability.
- **Improve the UI Flow**: Enhancing the user experience by adding loading states and error handling.
- **Toast Notifications**: Planning to add toast notifications for enhanced user interaction and feedback.

## Setup and Installation

1. Clone the repository: `git clone https://github.com/alissonmdo/challenge-booking.git`
2. Navigate to the project directory: `cd challenge-booking`
3. Install dependencies: `pnpm install`
4. Start the development server: `pnpm run dev`
5. (If you don't have `pnpm` installed, you can use `npm` or `yarn` instead.)

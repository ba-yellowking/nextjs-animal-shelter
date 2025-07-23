# Animal Shelter Platform

## Overview

This is a web-based application built with **Next.js** (using both client and server components) and **React**, designed to simplify the process of adopting animals from shelters and to support them through donations.

## Tech Stack

- **Framework:** Next.js (React)
- **Database:** better-sqlite3
- **Styling:** CSS Modules
- **Routing:** File-based routing (/app/page.js)
- **Deployment:** TBD

## Key Features

- **Animal Cards** – each animal is shown as a card on the listing page, displaying name, photo, and key info.
- **Routing** – clean and dynamic routing for each animal using slugs (`/animals/max`, etc.).
- **Database** – built using **better-sqlite3** for fast and simple data storage.
- **API Routes** – dynamic and RESTful API endpoints to fetch animal data.
- **Styling** – using **CSS Modules** for scoped and modular styles.
- **Error Handling** – custom `404` and `Error` pages.

## Planned Improvements

- **Adoption Request Submission** - Submitted data about users willing to adopt a pet, stored on the server.
- **Donation Option** - API to be determined.
- **Admin Panel** - Admin login & authorization to add, edit, delete animal cards
- **Server-side Internationalization** - Implement locale-based routing using server components (next-intl)
- **Responsive Improvements** - Further UI/UX polish across devices
- **Adaptive Layout** - Improve responsiveness for various screen sizes

## Screenshots

<div align="center">
  <p><strong>Home Page</strong></p>
  <img src="/Screenshot1.png" width="600" alt="Home Page" />
</div>

<br/>

<div align="center">
  <p><strong>Animal Detail Page</strong></p>
  <img src="/Screenshot2.png" width="600" alt="Animal Detail Page" />
</div>

# GreySwitch Signup/Login Component
An implementation of of the login/signup page of _Greyswitch’s_ app. 

## Features

- Slider with sleek animation.
- Enter login/signup details component .
- Credit/debit card number validation.
- Detection of card network type via the card number.
- Responsive User interface for different screen resolution & sizes.

**Login Page**
<img src="https://i.imgur.com/YNewHF0.png" alt="Login Page">

**Signup Page**
<img src="https://i.imgur.com/CRfJYt8.png" alt="Signup Page">

### Known Issues and Limitations

- This component might not render properly on `Internet Explorer 8`
- There is no backend connectivity implemented, hence the authentication and registration services are inactive.
- There is no support for devices with widths `< 320px`.
- Accessibility support is very poor. E.g. there is no VoiceOver support on the login/signup and there is no support for people with disabilities

## Requirements

 - Tailwind CSS 3.1.1
 - Nextjs 12.1.6
 - React Hook Forms 7.32.0
 - Reactjs 18.1.0

### Not mandatory but good to have
 - ESlint: 8.17.0
 - 


## Getting Started

  

First, run the development server:

  

```bash

npm run dev

# or

yarn dev



```

  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Folder Structure

- `components` – Consists of a collection of UI components like Slider Buttons, modals, inputs, loader, etc., that are used across various files in the project. Global components are in the root  `/components`  folder and feature specific components are in subfolders (e.g.  `/components/Login`,  `/components/Signup`).

- `config` – This folder consists of a configuration file contain multi-environment variables  and configurations in  *next.config.js*.
- `pages` – Pages and API route handlers for the Next.js login app. The `/pages` folder contains all routed pages with the route to each page defined by its file name. The `/pages/api` folder contains all API route handlers which are also routed based on each file name. For more info on Next.js Page Routing and file name patterns see [https://nextjs.org/docs/routing/introduction](https://nextjs.org/docs/routing/introduction), for API Routing see [https://nextjs.org/docs/api-routes/introduction](https://nextjs.org/docs/api-routes/introduction).

- `public` – original files for assests like `icon`, `fonts` and `button` glyphs.



# Original Asignment Description

## Developer Brief

The goal is to build up a login and signup page which can be deployed together or independently and customized per client as needed with minimal effort. 

### Basic Needs
- Figma Mockup for branding details
- Hosting Platform - `Netlify`, `Heroku`, `Vercel` etc
- File Repositiory / Version Control System - `Github`

### Developer Challenge

- Functional / Flexible / Responsive
-  Integration 3rd Party Authentication systems / Apps e.g `0Auth` `iron-session`etc.

## Login/Signup Pane

A container that can hold and collect and manage user credentials in a clean and simple format, and authenticate accordingly.


### API or Stubs

- Authenticate User Credentials - _Login_
- Register User Credentials - _Signup_
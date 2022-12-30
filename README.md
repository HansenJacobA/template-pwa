## About

This is a Typescript, NextJS, and Chakra UI template to easily and quickly create a PWA. Follow the guidelines and consider the notes below for use.

## Set Up

1. Fork and clone this repository or copy the files into your application.

2. Keep or create your own package.json and follow the promps with the command below

```
npm init
```

3. Install all the dependencies from the original package.json or copy and paste the dependencies and scripts into your new file and install dependencies with

```
npm i
```

#### Notes

- As of this writing, there is a bug with the most current version of Chakra UI, therefore the '^' have been removed from the chakra-ui related dependencies within the package.json.

## Development

1. Begin development by running

```
npm run dev
```

2. Open the Chakra UI [website](https://chakra-ui.com/docs/components), view the list of components, plug and play, or create your own components and quickly build your application visually.

3. Use local storage to store and retrieve user data using the functions within the Utilities folder. (Suggest starting with the SeedUp function to ensure application foundation data is available, such as user profile template data).

4. Modify the template navigation link names and urls array within utilities/navBar and create the page routes within the Pages folder.

## Service Worker

1. Replace the name, short_name, and description within public/app.webmanifest. For more personalization, replace the theme_color and background_color.

2. Create your own icon image then upload and download the maskable version and sizes using this PWA [website](https://maskable.app/)

3. Replace the template icons within public/icons with your icon images and use the same names.

4. Replace the public/favicon.ico template icon with your own icon image and use the same file name.

#### Notes

- During development, the service worker invocation script is commented out on line 10 within src/pages/\_app.tsx. Be sure to uncomment this line for Deployments.

## Deployment

1. Go to the Vercel [website](https://vercel.com) and create an account or login.

2. Allow Vercel access to your Github repository projects.

3. Upload your application repository to Vercel and deploy your application.

4. If you have an Apple mobile device, open the deployment link with Safari, add the application to your homepage and enjoy the PWA available for online and offline use. All other devices can download the application using Google Chrome and enjoy the PWA online and offline as well.

#### Notes

- Sometimes after downloading the application to your devices, the application may 'bug' out. Simply click the navigation buttons or refresh the page and the application service worker should render the pages normally.

#### Acknowledgements

- The service worker logic of this PWA was inspired by [Frontend Masters](https://frontendmasters.com/), the [course](https://frontendmasters.com/courses/pwas/) 'Build Progressive Web Apps (PWAs) from Scratch' by Maximiliano Firtman.

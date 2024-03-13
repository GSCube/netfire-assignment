# What's next for the project?
- For the sake of this test project I have used px for the dimensions of the components and the font-sizes,
as it was the quickest way to get the project done. I would consider to use different for better accessibility 
and responsiveness.
- This project looks like landing page that needs to be exposed to the public, so I would consider to use
Next.js to make it SEO friendly or go with static generation with usage of:
https://create-react-app.dev/docs/pre-rendering-into-static-html-files/
- Same goes for other SEO improvements like meta tags, accessibility improvements, etc.
- I would consider reducing video size for better performance and faster loading time.
- Inline texts are not also a good idea as it's hard to maintain and it's not scalable, I would consider to use
some kind of translation library like i18next or react-intl.
- I would talk to the designer about some simplifications (eg. there is third font used in hero section -
Space Grotesk and not sure if it's really needed)
- It would be good to have some styling systems for sizes as gaps seams a bit random and not consistent.
- I would consider to self host fonts (instead of importing it form google)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

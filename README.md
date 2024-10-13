# Alpha-Beta Pruning Visualization (React)

This project is an interactive web app built with **React** to visualize the Alpha-Beta Pruning algorithm used in decision-making for two-player games. It provides an intuitive, dynamic interface for users to understand the pruning process, alternating decision layers, and optimal decision-making for the maximizing player.


## Features

- **Dynamic Game Tree Visualization**: Users can enter leaf node values and set tree depth to see the Alpha-Beta Pruning algorithm in action.
- **Real-Time Updates**: The tree and nodes dynamically update, reflecting how alpha (α) and beta (β) values change and where pruning occurs.
- **Optimal Decision Display**: The optimal move for the maximizing player is calculated and displayed once pruning is complete.
- **Interactive UI**: Clear, easy-to-use interface built using React components.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- The page automatically reloads when you make any changes to the code.
- You may see linting errors in the console if there are issues in your code.

### `npm test`

Launches the test runner in interactive watch mode to run automated tests.

- For more details, see the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) in the official documentation.

### `npm run build`

Builds the app for production into the `build` folder. The production build is optimized for the best performance:

- The output files are minified.
- Filenames include hashes for better caching.

Once built, the app is ready to be deployed!

For more information about deployment, refer to the [Create React App deployment guide](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`

**Warning: This is a one-way operation. Once you `eject`, you can’t go back.**

Running this command gives you full control over the configuration of the project by copying all dependencies and configuration files directly into the project folder.

- This is useful for advanced customizations, but be aware that it comes with added complexity.

You don’t need to use `eject` unless you need to customize the build process beyond what is supported by Create React App.

## Project Structure

- **`/src`**: Contains all the source files for the React application.
  - **`components/`**: Contains individual reusable components, such as the Tree visualization, Alpha-Beta controls, etc.
  - **`App.js`**: The main component where other components are integrated.
  - **`index.js`**: Entry point for rendering the React app.

## Learn More

To learn more about Create React App, check out its [documentation](https://facebook.github.io/create-react-app/docs/getting-started).

For more information on React, visit the [official React documentation](https://reactjs.org/).

### Code Splitting

If your app grows, you can optimize the load times by implementing code splitting. Learn more in this section: [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting).

### Analyzing the Bundle Size

Want to check the performance of your app? This section helps in understanding the size of the bundles: [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).

### Making a Progressive Web App

To learn more about creating a Progressive Web App (PWA), refer to the section here: [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).

### Advanced Configuration

For advanced configurations, visit the [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration) page in the documentation.

### Deployment

When you're ready to deploy the app, check out the [Deployment](https://facebook.github.io/create-react-app/docs/deployment) guide for detailed instructions.

### `npm run build` Fails to Minify

If the build fails to minify, check this section for potential solutions: [Troubleshooting Build Minification](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/alpha-beta-pruning-visualization/issues) to find open issues or submit your own.

### Steps for Contributing:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

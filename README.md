# burner
- Onboarding screen for music streaming platforms using React Native
    - Welcome to the documentation for burner. This guide will walk you through the steps to run the application locally.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (follow the "React Native CLI Quickstart" guide)

## Getting Started

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/IamNaeto/burner.git
    ```

2. Navigate to the project directory:

    ```bash
    cd burner
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Running the Application

### iOS

1. Navigate to the `ios` directory:

    ```bash
    cd ios
    ```

2. Install CocoaPods dependencies:

    ```bash
    pod install
    ```

3. Return to the project root:

    ```bash
    cd ..
    ```

4. Run the iOS application:

    ```bash
    npx react-native run-ios
    ```

### Android

1. Run the Android application:

    ```bash
    npx react-native run-android
    ```

## Additional Commands

- To start the Metro Bundler (required for running the app on physical devices):

    ```bash
    npx react-native start
    ```

- To lint the code:

    ```bash
    npm run lint
    ```

## Contributing

If you would like to contribute to the project, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).


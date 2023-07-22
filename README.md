# Getting Started

- [React Native environment setup](https://reactnative.dev/docs/environment-setup). Consider creating a default react native project to make sure your environment is setup correctly
- [Getting started](https://reactnative.dev/docs/getting-started)
- [Troubleshooting](https://reactnative.dev/docs/troubleshooting)

## Step 1: Setup the repo

1. Clone the repo
2. Run `npm install` to install javascript dependencies
3. Run `npx pod-install ios` to install ios dependencies

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

Run the following command from the _root_ project route:

```bash
npm start
```

## Step 3: Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

```bash
npm run android
npm run ios
```

## Step 4: Modifying the App

1. The repo is organized so that application specific code is in the `/src` directory
   - `components` - Reusable components
   - `navigation` - Main Navigation code
   - `screens` - Different pages or unique screens in an app
   - `utils` - Reusable utilities
2. General changes should usually be reflected live, but in some cases you'll need to reload.
   Type `r` in the metro process to reload

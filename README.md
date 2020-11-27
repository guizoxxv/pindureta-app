# Pindureta API

SPA of an small vending spot for trustfull users. Users can choose to pay any amount during the purchase or pay later.

> Back-end in [https://github.com/guizoxxv/pindureta-back](https://github.com/guizoxxv/pindureta-back)

## Technology

* React v16.14.0
* Typescript v3.2.1
* Material UI v4.11.0

## Installation

1. Install the dependencies
```
npm install
```

### Configuration

2. Provide the back-end base URL by setting the `apiBaseURL` constant in the `src/config/index.ts` file

## Usage

1. To run the application locally:
```
npm start
```
> The application will start at port 8080 by default. To change edit the `PORT` entry in the start script in `package.json`

2. To run the application in production:

    2.1. Build the application
    ```
    npm run build
    ```

    2.2. Deploy the generate `builds` folder.

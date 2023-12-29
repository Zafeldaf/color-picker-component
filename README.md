# Color Picker Component

A simple color picker component based on the Polaris color picker and changed as the Polaris one doesn't provide all the functionality needed.

## Run

### Requirements

If you clone this repo and run this locally on your machine you need to run `npm i` or `yarn`

If you copy the `ColorPickerComponent.jsx` file in your existing project, you need to make sure the following packages is downloaded.

```js
@shopify/javascript-utilities
@shopify/polaris
```

At the time of creating this project I am on the following versions.

```js
"@shopify/javascript-utilities": "^2.4.1",
"@shopify/polaris": "^12.6.0"
```

You can download them like this:

```js
npm i @shopify/javascript-utilities @shopify/polaris
```

OR

```js
yarn add @shopify/javascript-utilities @shopify/polaris
```

### Dev

Since this was created using the bootstrap `create-react-app` it will run on [http://localhost:3000](http://localhost:3000) when `npm start` is ran.

Like normal any changes made will be available after a reload in the browser.

### Build

I believe the file `ColoPickerComponent.jsx` should be placed in your project, therefore there is no need for a build script. For testing purposes, the dev script was made.

## Usage

Simply call the `<ColorPickerComponent />` wherever needed and it will appear, but be sure to have the `ColoPickerComponent.jsx` file in the directory and the file has been imported.

Currently, the color picker is made for my purpose and usage, many people will have different requirements so the file `ColoPickerComponent.jsx` can be changed at any time to make it to your liking.

## Future

In the future, I might make a `npm` and `yarn` package out of this, but that is still too far away. This is just a side project and something I needed for my main project. The chances for this to be turned into a package are too low.

If I ever plan to publish as a package, I would need to of course add more features and make this into a proper package.

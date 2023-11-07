# JavaScript Widget Script for CoinGecko Token

This is a simple JavaScript widget script that allows you to fetch and display CoinGecko token details for a specified token on a web page. The widget is designed to be embedded in a web page using a script tag and can dynamically fetch and display token details based on the selected token name.

## Features

- Dynamic selection of the token name.
- Data fetched from the CoinGecko API.
- Displayed token details include:
  - Token name
  - Market cap
  - Current price
  - 24-hour trading volume
  - Token image

## Usage

To use the CoinGecko Token Widget on your website, follow these steps:

1. **Include the JavaScript file:**
   - Add the JavaScript file to your web page:
     ```html
     <script type="text/javascript" src="coinGeckoWidget.js"></script>
     ```

2. **Create an HTML container:**
   - Create an HTML container where you want the widget to appear on your web page:
     ```html
     <div id="coinGeckoWidget"></div>
     ```

3. **Initialize the widget:**
   - Initialize the widget with the desired token name using JavaScript. Replace `'ethereum'` with the name of the token you want to display. You can call this function in your JavaScript code:
     ```javascript
     // Example: Display Ethereum token details
     loadTokenDetails("ethereum");
     ```

4. **Updating the widget:**
   - To update the widget with the details of a different token, simply call the `loadTokenDetails` function with the new token name.

## Example

You can see a live example of the CoinGecko Token Widget in action at [this demo page](https://jolly-snickerdoodle-9761b2.netlify.app/).
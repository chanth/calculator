Profit Margin Calculator

This is a small static site (HTML/CSS/JS) that calculates how much to charge a customer based on:

- Labor cost
- Parts / Materialss cost
- Delivery cost
- Desired profit margin (%)

How it works

1. Open `index.html` in a browser.
2. Enter the three costs (dollars) and the desired profit margin percentage.
3. The page will show the total cost, the profit amount, and the final price to charge the customer.

Notes and details

- Inputs accept decimal values. All inputs must be non-negative.
- The calculator computes:
  - Total cost = labor + ingredient + delivery
  - Profit amount = Total cost \* (margin% / 100)
  - Charge price = Total cost + Profit amount
- The UI performs live calculations as you type and also supports a manual "Calculate" button and a "Reset" button.

Files in this folder

- `index.html` — main page and form
- `styles.css` — styles and responsive layout
- `script.js` — calculation logic and input handling
- `README.md` — this file

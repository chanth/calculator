# Profit Margin Calculator

This is a small static site (HTML/CSS/JS) that calculates how much to charge a customer based on:

- Labor cost
- Parts / Materials cost
- Delivery cost
- Desired profit margin (%)

## How it works

1. Open `index.html` in a browser.
2. Enter the three costs (dollars) and the desired profit margin percentage.
3. The page will show the production cost, the profit amount, and the final selling price to charge the customer.

## Features

- Multi-language support: English, Traditional Chinese (Hong Kong), Spanish, Bahasa Indonesia, Japanese
- Locale-specific currency formatting (USD, HKD, EUR, IDR, JPY)
- Responsive design for mobile and desktop
- Live calculation as you type
- Input validation and error handling

## Notes and details

- Inputs accept decimal values. All inputs must be non-negative.
- The calculator computes:
  - Production cost = labor + parts + delivery
  - Profit amount = Production cost × (margin% / 100)
  - Selling price = Production cost + Profit amount
- The UI performs live calculations as you type and also supports a manual "Calculate" button and a "Reset" button.

## Files in this folder

- `index.html` — main page and form
- `styles.css` — styles and responsive layout
- `script.js` — calculation logic and input handling
- `README.md` — this file

## Credits

This calculator was generated using AI assistance from:

- **Claude Sonnet 4** (Anthropic) - Primary code generation and feature implementation
- **GPT** (OpenAI) - Additional code refinements and suggestions

## GitHub Pages Deployment

To deploy this to GitHub Pages:

1. Create a new repository on GitHub
2. Upload these files to the repository
3. Go to Settings → Pages
4. Set Source to "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Your calculator will be available at `https://yourusername.github.io/repository-name`

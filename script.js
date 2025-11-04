document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calculator');
  const laborEl = document.getElementById('labor');
  const ingredientEl = document.getElementById('ingredient');
  const deliveryEl = document.getElementById('delivery');
  const marginEl = document.getElementById('margin');

  const totalCostEl = document.getElementById('totalCost');
  const profitAmountEl = document.getElementById('profitAmount');
  const chargePriceEl = document.getElementById('chargePrice');

  function fmt(n) { return n.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2}); }

  function calculate(e) {
    if (e) e.preventDefault();

    const labor = parseFloat(laborEl.value) || 0;
    const ingredient = parseFloat(ingredientEl.value) || 0;
    const delivery = parseFloat(deliveryEl.value) || 0;
    const marginPct = parseFloat(marginEl.value) || 0;

    // Basic validation
    if (labor < 0 || ingredient < 0 || delivery < 0 || marginPct < 0) {
      alert('Please enter non-negative values.');
      return;
    }

    const totalCost = labor + ingredient + delivery;
    const profitAmount = totalCost * (marginPct / 100);
    const chargePrice = totalCost + profitAmount;

    totalCostEl.textContent = `$${fmt(totalCost)}`;
    profitAmountEl.textContent = `$${fmt(profitAmount)}`;
    chargePriceEl.textContent = `$${fmt(chargePrice)}`;
  }

  form.addEventListener('submit', calculate);

  document.getElementById('reset').addEventListener('click', () => {
    form.reset();
    totalCostEl.textContent = '$0.00';
    profitAmountEl.textContent = '$0.00';
    chargePriceEl.textContent = '$0.00';
  });

  // Optional: live calculation as user types
  [laborEl, ingredientEl, deliveryEl, marginEl].forEach(el => {
    el.addEventListener('input', () => calculate());
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("calculator");
  const laborEl = document.getElementById("labor");
  const partsEl = document.getElementById("parts");
  const deliveryEl = document.getElementById("delivery");
  const marginEl = document.getElementById("margin");

  const productionCostEl = document.getElementById("productionCost");
  const profitAmountEl = document.getElementById("profitAmount");
  const chargePriceEl = document.getElementById("chargePrice");

  function fmt(n) {
    return n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function calculate(e) {
    if (e) e.preventDefault();

    const labor = parseFloat(laborEl.value) || 0;
    const parts = parseFloat(partsEl.value) || 0;
    const delivery = parseFloat(deliveryEl.value) || 0;
    const marginPct = parseFloat(marginEl.value) || 0;

    // Basic validation
    if (labor < 0 || parts < 0 || delivery < 0 || marginPct < 0) {
      alert("Please enter non-negative values.");
      return;
    }

    const productionCost = labor + parts + delivery;
    const profitAmount = productionCost * (marginPct / 100);
    const chargePrice = productionCost + profitAmount;

    productionCostEl.textContent = `$${fmt(productionCost)}`;
    profitAmountEl.textContent = `$${fmt(profitAmount)}`;
    chargePriceEl.textContent = `$${fmt(chargePrice)}`;
  }

  form.addEventListener("submit", calculate);

  document.getElementById("reset").addEventListener("click", () => {
    form.reset();
    productionCostEl.textContent = "$0.00";
    profitAmountEl.textContent = "$0.00";
    chargePriceEl.textContent = "$0.00";
  });

  // Optional: live calculation as user types
  [laborEl, partsEl, deliveryEl, marginEl].forEach((el) => {
    el.addEventListener("input", () => calculate());
  });
});

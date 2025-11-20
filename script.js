document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("calculator");
  const laborEl = document.getElementById("labor");
  const partsEl = document.getElementById("parts");
  const deliveryEl = document.getElementById("delivery");
  const marginEl = document.getElementById("margin");

  const productionCostEl = document.getElementById("productionCost");
  const profitAmountEl = document.getElementById("profitAmount");
  const sellingPriceEl = document.getElementById("sellingPrice");

  const langSelect = document.getElementById("langSelect");

  const translations = {
    en: {
      title: "Profit Margin Calculator",
      laborCostLabel: "Labor cost ($)",
      laborCostPh: "e.g. 12.50",
      partsCostLabel: "Parts / Materials cost ($)",
      partsCostPh: "e.g. 3.75",
      deliveryCostLabel: "Delivery cost ($)",
      deliveryCostPh: "e.g. 2.00",
      marginLabel: "Desired profit margin (%)",
      marginPh: "e.g. 30",
      calcBtn: "Calculate Price",
      resetBtn: "Reset",
      productionCostLabel: "Production cost:",
      profitAmountLabel: "Profit amount:",
      sellingPriceLabel: "Selling price:",
      footerText:
        "Simple static calculator — enter costs and a margin to get the selling price.",
    },
    "zh-Hant": {
      title: "利潤率計算器",
      laborCostLabel: "人工成本 ($)",
      laborCostPh: "例如 12.50",
      partsCostLabel: "零件 / 材料成本 ($)",
      partsCostPh: "例如 3.75",
      deliveryCostLabel: "運送成本 ($)",
      deliveryCostPh: "例如 2.00",
      marginLabel: "期望利潤率 (%)",
      marginPh: "例如 30",
      calcBtn: "計算價格",
      resetBtn: "重設",
      productionCostLabel: "生產成本:",
      profitAmountLabel: "利潤金額:",
      sellingPriceLabel: "銷售價格:",
      footerText: "簡易計算器 — 輸入成本與利潤率即可獲得銷售價格。",
    },
    es: {
      title: "Calculadora de Margen de Ganancia",
      laborCostLabel: "Costo de mano de obra ($)",
      laborCostPh: "ej. 12.50",
      partsCostLabel: "Costo de partes / materiales ($)",
      partsCostPh: "ej. 3.75",
      deliveryCostLabel: "Costo de envío ($)",
      deliveryCostPh: "ej. 2.00",
      marginLabel: "Margen de ganancia deseado (%)",
      marginPh: "ej. 30",
      calcBtn: "Calcular Precio",
      resetBtn: "Reiniciar",
      productionCostLabel: "Costo de producción:",
      profitAmountLabel: "Monto de ganancia:",
      sellingPriceLabel: "Precio de venta:",
      footerText:
        "Calculadora simple — ingrese costos y margen para obtener el precio de venta.",
    },
    id: {
      title: "Kalkulator Margin Laba",
      laborCostLabel: "Biaya tenaga kerja ($)",
      laborCostPh: "mis. 12.50",
      partsCostLabel: "Biaya bagian / material ($)",
      partsCostPh: "mis. 3.75",
      deliveryCostLabel: "Biaya pengiriman ($)",
      deliveryCostPh: "mis. 2.00",
      marginLabel: "Persentase margin laba yang diinginkan (%)",
      marginPh: "mis. 30",
      calcBtn: "Hitung Harga",
      resetBtn: "Reset",
      productionCostLabel: "Biaya produksi:",
      profitAmountLabel: "Jumlah laba:",
      sellingPriceLabel: "Harga jual:",
      footerText:
        "Kalkulator sederhana — masukkan biaya dan margin untuk mendapatkan harga jual.",
    },
    ja: {
      title: "利益率計算ツール",
      laborCostLabel: "人件費 ($)",
      laborCostPh: "例 12.50",
      partsCostLabel: "部品 / 材料費 ($)",
      partsCostPh: "例 3.75",
      deliveryCostLabel: "配送費 ($)",
      deliveryCostPh: "例 2.00",
      marginLabel: "希望利益率 (%)",
      marginPh: "例 30",
      calcBtn: "価格を計算",
      resetBtn: "リセット",
      productionCostLabel: "生産コスト:",
      profitAmountLabel: "利益額:",
      sellingPriceLabel: "販売価格:",
      footerText:
        "シンプルな計算ツール。コストと利益率を入力すると販売価格が表示されます。",
    },
  };

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
    const sellingPrice = productionCost + profitAmount;

    productionCostEl.textContent = `$${fmt(productionCost)}`;
    profitAmountEl.textContent = `$${fmt(profitAmount)}`;
    sellingPriceEl.textContent = `$${fmt(sellingPrice)}`;
  }

  form.addEventListener("submit", calculate);

  document.getElementById("reset").addEventListener("click", () => {
    form.reset();
    productionCostEl.textContent = "$0.00";
    profitAmountEl.textContent = "$0.00";
    sellingPriceEl.textContent = "$0.00";
  });

  // Optional: live calculation as user types
  [laborEl, partsEl, deliveryEl, marginEl].forEach((el) => {
    el.addEventListener("input", () => calculate());
  });

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
    document.title = dict.title;
  }

  langSelect.addEventListener("change", () => {
    applyLanguage(langSelect.value);
  });

  applyLanguage(langSelect.value);
});

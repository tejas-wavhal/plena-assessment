function loadTokenDetails(tokenName) {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${tokenName}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract token details
      const tokenDetails = {
        name: data.name,
        marketCap: data.market_data.market_cap.usd,
        currentPrice: data.market_data.current_price.usd,
        tradingVolume: data.market_data.total_volume.usd,
        logoUrl: data.image.small,
      };

      // Render the token details
      renderTokenDetails(tokenDetails);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// function to render 
function renderTokenDetails(tokenDetails) {
  const widgetContainer = document.getElementById("coinGeckoWidget");

  // HTML
  widgetContainer.innerHTML = `
    <div class="header">
      <img src="${tokenDetails.logoUrl}" alt="${tokenDetails.name}">
      <div class="section-2">
        <h2>${tokenDetails.name}</h2>
        <p>Current Price: $${tokenDetails.currentPrice}</p>
      </div>
    </div>
    <div class="section-last">
      <p>Market Cap: $${tokenDetails.marketCap.toLocaleString()}</p>
      <p>24-Hour Trading Volume: $${tokenDetails.tradingVolume.toLocaleString()}</p>
    </div>
`;
}

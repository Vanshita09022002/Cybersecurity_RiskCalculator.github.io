document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-btn");
    calculateButton.addEventListener("click", calculateRisk);
  
    function calculateRisk() {
      const assetValue = parseFloat(document.getElementById("asset-value").value);
      const threatAgent = parseFloat(document.getElementById("threat-agent").value);
      const vulnerability = parseFloat(document.getElementById("vulnerability").value);
      const technicalFactors = parseFloat(document.getElementById("technical-factors").value);
      const businessAspect = parseFloat(document.getElementById("business-aspect").value);
  
      if (
        isNaN(assetValue) ||
        isNaN(threatAgent) ||
        isNaN(vulnerability) ||
        isNaN(technicalFactors) ||
        isNaN(businessAspect)
      ) {
        alert("Please enter valid numeric values for all inputs.");
        return;
      }
  
      const riskScore = (assetValue + threatAgent + vulnerability + technicalFactors + businessAspect) / 5;
  
      const resultElement = document.getElementById("result");
      resultElement.textContent = `Risk Score: ${riskScore.toFixed(2)}`;
    }
  });
  
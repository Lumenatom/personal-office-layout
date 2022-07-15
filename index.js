const chartTrades = document.querySelector('.chart_trades').getContext('2d');
chartTrades.canvas.parentNode.style.height = "300px";
const data = {
  labels: ["20.05.22", "20.06.22", "20.07.22", "20.08.22", "20.09.22", "20.10.22",],
  datasets: [{
    label: "Trades",
    data: ["-25", "50", "10", "130", "70", "160"],
    backgroundColor: ["F8F8F8"],
    borderColor: [
      "black",
    ],
    borderWidth: 2,
  }]
};

const myChart = new Chart(chartTrades, {
  type: 'line',
  data: data,
  options: {
    maintainAspectRatio: false,
  }
})
console.log(chartTrades);
const alert = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');


// Create the HTML for the alert banner
// Todo: compare insertAdjacentHTML() option
alert.innerHTML = `
  <div class='alert'>
    <p><strong>Alert: </strong>You have <strong>6</strong> overdue tasks to complete </p>
    <p class="alert-close">x</p>
  </div>
`;

alert.addEventListener('click', (e) => {
  const element = e.target;

  if (element.classList.contains('alert-close')) {
    alert.style.display = "none";
  }
});

let trafficData = {
  labels: [
    "16-22", "23-29", "30-5", "6-12", "13-19", "20-26",
    "27-3", "4-10", "11-17", "18-24", "25-31",
  ],
  datasets: [
    {
      data: [
        750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500,
      ],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    },
  ],
};


// TODO: - add more options to personalized it
let trafficOptions = {
  backgroundColor: 'rgba(112, 104, 201, .5)',
  fill: true,
  aspectRatio: 2.5,
  animation: {duration: 0},
  scales: {
    y: {beginAtZero: true},
  },
  plugins: {
    legend: {display: false},
  },
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions,
});


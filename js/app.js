const alert = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('doughnut-chart');
const user = document.getElementById('user-field')
const message = document.getElementById('message-field')
const sendMessage = document.getElementById('send')


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


// Create traffic chart
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
      borderWidth: 2,
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


// Data for daily traffic bar chart
const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [
    {
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1,
    },
  ],
};

const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions,
});

// Mobile users chart
const mobileData = {
  labels: ['Desktop', 'Tablet', 'Phones'],
  datasets: [
    {
      label: '# of users',
      data: [2000, 550, 500],
      borderWith: 0,
      backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8',
      ],
    },
  ],
};

const mobileOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWith: 20,
        fontStyle: 'bold',
      },
    },
  },
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions,
});

// sendMessage.addEventListener('click', () => {
//   // Ensure user and message fields are filled out
//   if (user.value === '' && message.value === '' ){
//     alert('Please fill out user and message fields before sending');
//   }
//   else if (user.value === )
// })




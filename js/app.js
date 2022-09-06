// =========
// Variables
// =========

//  Alert banner
//  ------------
const alertBanner = document.getElementById('alert');

//  Charts
//  ------
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('doughnut-chart');

//  New Members
//  -----------
const membersContainer = document.getElementById('members-container');

// Message User
// ------------
const userField = document.getElementById('user-field');
const message = document.getElementById('message-field');
const sendMessage = document.getElementById('send');


//  ===============
//  Alert
//  ===============
//  TOdo:
//   -Notification bell button display dropdown
//   -Compare insertAdjacentHTML() option for alertBanner.innerHTLM

//  Create the HTML for the alert banner
alertBanner.innerHTML = `
    <p class="alert-message"><strong>Alert: </strong>You have <strong>6</strong> overdue tasks to complete </p>
    <button class='alert-close'>X</button>`;

//  Remove alert banner
alertBanner.addEventListener('click', (e) => {
  const element = e.target;

  if (element.classList.contains('alert-close')) {
    alertBanner.style.display = "none";
    console.log('works');
  }
});


// ======
// Charts
// ======
// TODO: - add more options to personalize charts

//  Traffic
//  -------
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

let trafficOptions = {
  layout: {
    padding: 10,
  },
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

//  Create traffic chart
let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions,
});


//  Daily traffic bar chart
//  -----------------------
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
  layout: {
    padding: 10,
  },
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


// ===========================
// Mobile Users Doughnut Chart
// ===========================
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
  layout: {
    padding: 10,
  },
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


//  ===========
//  New Members
//  ===========
// Todo:
//  -add users dynamically
//  -autocomplete user search field

const createNewMembers = (array) => {
  let html = '';

  for (let i = 0; i < array.length; i++) {
    html +=
      `<img class="members-profile-img" 
          src="images/members/member-${i}.jpg" 
          alt="student profile image">
        <div class="members-text-wrapper">
          <p>${array[i].name}</p>
          <p>
            <a href="mailto:diego_ggv@pm.me"><strong>Email: </strong>diego_ggv@pm.me</a></p>
        </div>
        <p>00/00/00</p>`;
  }
};

createNewMembers(membersInfo);

membersContainer.insertAdjacentHTML('afterbegin',
                                       createNewMembers(membersInfo));

console.log(createNewMembers.length);

//  ============
//  Message User
//  ============

sendMessage.addEventListener('click', () => {
  // Ensure user and message fields are filled out
  if (userField.value === '' && message.value === '') {
    alert('Please fill out user and message fields before sending');
  }
  else if (userField.value === '') {
    alert("Please fill out user field before sending");
  }
  else if (message.value === '') {
    alert("Please fill out message field before sending");
  }
  else {
    alert(`Message successfully sent to: ${userField.value}`);
  }
});


//  ========
//  Settings
//  ========






const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "SelfCare",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
 ];

let currentMode = "daily";

window.addEventListener('DOMContentLoaded', () => {
   displayData(currentMode);
});

function displayData(mode) {
  const dashItems = data.map(function(item) {
    return `<div class="dashboard-item ${item.title.toLowerCase()}">
              <div class="activity-type">
                <p class="activity-name">${item.title}</p>
                <button class="ellipsis">
                  <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
                </button>
              </div>
              <div class="activity-time">
                <p class="activity-hours">${item.timeframes[mode].current}hrs</p>
                <p class="activity-prev-hours">Last Week - ${item.timeframes[mode].previous}hrs</p>
              </div>
            </div>`;
  }).join("");

  const container = document.querySelector('.container');
  container.innerHTML += dashItems;
}

const modeBtns = document.querySelectorAll('.time-btn');
modeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentMode = e.currentTarget.innerText.toLowerCase();
    displayData(currentMode);
  });
});
const completedButtons = document.getElementsByClassName(
  "assigned-tasks__completed-button"
);

const headerCard = document.getElementsByClassName(
  "assignment-tasks__header-card"
);

const headerCardTitle = document.getElementsByClassName(
  "assignment-tasks__header-card-title"
);

const headerCardDescription = document.getElementsByClassName(
  "assignment-tasks__header-card-description"
);

const completedTasksCount = document.getElementsByClassName(
  "task-completed__count"
);

const activityLog = document.querySelectorAll(".activity-log > div:last-child");

const clearHistory = document.getElementsByClassName(
  "activity-log__clear-history"
);

const themeSwitcher = document.getElementsByClassName("theme-switcher__icon");

const date2 = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const day = days[date2.getDay()];
const month = months[date2.getMonth()];

headerCardTitle[2].innerText = day + ",";
headerCardDescription[1].innerText = `${month} ${
  date2.getDate() < 10 ? "0" + date2.getDate() : date2.getDate()
} ${date2.getFullYear()}`;

for (const completedButton of completedButtons) {
  completedButton.addEventListener("click", (event) => {
    const date = new Date();
    let hours = date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    if (hours < 1) {
      hours = 12;
    } else if (hours > 12) {
      hours = hours - 12;
    }
    hours = hours < 10 ? "0" + hours : hours;

    alert("Click OK to update your board.");

    let tasksLeft = parseInt(headerCardDescription[0].innerText);
    if (tasksLeft > 0) {
      tasksLeft--;
      headerCardDescription[0].innerText =
        tasksLeft < 10 ? "0" + tasksLeft : tasksLeft;
      if (tasksLeft === 0) {
        alert(
          "Congratulations!!! You have completed all the tasks successfully."
        );
      }
    }

    let tasksCompleted = parseInt(completedTasksCount[0].innerText);
    tasksCompleted++;
    completedTasksCount[0].innerText = tasksCompleted;

    const activity = document.createElement("p");
    activity.classList.add("activity-log__timestamp-card");
    activity.innerHTML = `
      You have completed the task
      <strong>${event.target.parentNode.parentNode.childNodes[3].innerText}</strong>
      at ${hours}:${minutes}:${seconds} ${ampm}.
    `;
    activityLog[0].appendChild(activity);

    event.target.disabled = true;
    event.target.classList.remove("cursor-pointer");
  });
}

clearHistory[0].addEventListener("click", () => {
  const activities = [...activityLog[0].childNodes];
  for (const activity of activities) {
    activityLog[0].removeChild(activity);
  }
});

themeSwitcher[0].addEventListener("click", () => {
  const hexDigits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += hexDigits[Math.floor(Math.random() * 16)];
  }

  document.body.style.backgroundColor = colorCode;
});

headerCard[1].addEventListener("click", () => {
  window.location.href = "./blogs.html";
});

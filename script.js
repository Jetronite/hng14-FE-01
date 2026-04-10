const checkbox = document.getElementById("complete");
const card = document.querySelector("[data-testid='test-todo-card']");
const todoStatus = document.querySelector("[data-testid='test-todo-status']");
const timeEl = document.getElementById("time-remaining");

const dueDate = new Date("2026-04-16T18:00:00");

function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  if (diff <= 0) {
    const hours = Math.abs(Math.floor(diff / (1000 * 60 * 60)));
    timeEl.textContent = `Overdue by ${hours} hours`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) {
    timeEl.textContent = "Due today";
  } else if (days === 1) {
    timeEl.textContent = "Due tomorrow";
  } else {
    timeEl.textContent = `Due in ${days} days`;
  }
}

updateTime();

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    card.classList.add("completed");
    todoStatus.textContent = "Done";
  } else {
    card.classList.remove("completed");
    todoStatus.textContent = "In Progress";
  }
});

// Dummy actions
document.querySelector("[data-testid='test-todo-edit-button']")
  .addEventListener("click", () => {
    console.log("edit clicked");
  });

document.querySelector("[data-testid='test-todo-delete-button']")
  .addEventListener("click", () => {
    alert("Delete clicked");
  });
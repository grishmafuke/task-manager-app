const API_URL = "http://localhost:5050/api/tasks";

const pendingDiv = document.getElementById("tasks");
const completedDiv = document.getElementById("completedTasks");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);


async function loadTasks() {
  try {
    const res = await fetch(API_URL);
    const tasks = await res.json();

  
    pendingDiv.innerHTML = "";
    completedDiv.innerHTML = "";

    tasks.forEach((task) => {
      const div = document.createElement("div");
      div.className = "task";

      div.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description || ""}</p>
        <p class="status">${task.status}</p>

        <div class="actions">
          ${
            task.status !== "completed"
              ? `<button onclick="markDone('${task._id}')">Done</button>`
              : ""
          }
          <button class="danger" onclick="deleteTask('${task._id}')">Delete</button>
        </div>
      `;

      if (task.status === "completed") {
        completedDiv.appendChild(div);
      } else {
        pendingDiv.appendChild(div);
      }
    });
  } catch (err) {
    console.error("Fetch error:", err);
  }
}


async function addTask() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!title) return alert("Title required");

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  loadTasks();
}

async function markDone(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "completed" }),
  });

  loadTasks(); // 🔥 refresh board
}

loadTasks();

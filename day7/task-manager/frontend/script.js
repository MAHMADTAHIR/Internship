const apiUrl = "http://localhost:5000/tasks";
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Load all tasks
async function loadTasks() {
  const res = await fetch(apiUrl);
  const tasks = await res.json();
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.title;
    li.appendChild(span);



    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
      const inputBox = document.createElement("input");
      inputBox.value = task.title;

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.onclick = async () => {
        await fetch(`${apiUrl}/${task._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: inputBox.value }),
        });
        loadTasks();
      };

      li.innerHTML = "";
      li.appendChild(inputBox);
    };
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = async () => {
      await fetch(`${apiUrl}/${task._id}`, { method: "DELETE" });
      loadTasks();
    };

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Add new task
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = input.value.trim();
  if (!title) return;

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  input.value = "";
  loadTasks();
});

loadTasks();
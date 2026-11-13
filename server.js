
const express = require("express");

const app = express();

app.use(express.json());

// Temporary tasks array
let tasks = [
    { id: 1, title: "Learn Node.js", completed: false },
    { id: 2, title: "Practice Express.js", completed: false }
];

// GET - All tasks
app.get("/api/v1/tasks", (req, res) => {
    res.status(200).json({
        success: true,
        tasks: tasks
    });
});

// GET - Single task by ID
app.get("/api/v1/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json({
        task: task
    });
});

// POST - Create new task
app.post("/api/v1/tasks", (req, res) => {
    const { title } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({
            message: "Task title is required"
        });
    }

    const newTask = {
        id: tasks.length > 0
            ? Math.max(...tasks.map(t => t.id)) + 1
            : 1,
        title: title.trim(),
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task created successfully",
        task: newTask
    });
});

// PUT - Update task
app.put("/api/v1/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, completed } = req.body;

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    if (typeof title !== "string" ||
        !title.trim() ||
        typeof completed !== "boolean") {
        return res.status(400).json({
            message: "Valid title and completed status are required"
        });
    }

    task.title = title.trim();
    task.completed = completed;

    res.status(200).json({
        message: "Task updated successfully",
        task: task
    });
});

// DELETE - Delete task
app.delete("/api/v1/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(index, 1);

    res.status(200).json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});

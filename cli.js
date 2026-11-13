
const task = process.argv.slice(2).join(" ");

if (!task) {
    console.log("Please enter a task title.");
} else {
    console.log("Your Task:", task);
}

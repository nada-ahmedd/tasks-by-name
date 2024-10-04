const tasks = ["study html", "study css", "study js", "go to study framework", "do projects","study ui,ux"];

document.getElementById('taskCount').textContent = `You have ${tasks.length} tasks.`;
    function searchTask() {
    const taskNumber = document.getElementById('taskNumber').value;
        if (taskNumber > 0 && taskNumber <= tasks.length) {
        document.getElementById('taskResult').textContent = `Task ${taskNumber}: ${tasks[taskNumber - 1]}`;
        } else {
        document.getElementById('taskResult').textContent = "Invalid task number!";
            }
        }
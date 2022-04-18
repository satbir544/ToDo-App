
function About() {
    return (
        <div className="card">
            <div>
                <h3>About</h3>
                    <p1>
                        Welcome to the ToDo App. This app will help you to make your day organized and more progressive. There are four major sections in the app: 1. Home 2. Complete 3. Incomplete 4. History. Each section is described briefly below.
                    </p1>
                </div>

            <div>
                <h3>Home</h3>
                <p1>
                   In the Home page, you can create a new task by clicking the "+" button located in the buttom right corner. After adding the task, you can edit, delete, and complete it. You can edit and delete the task title by clicking edit and delete button on each task card. 
                   To complete a task, you can click on task card, making the task title get crossed automaically.
                </p1>
            </div>

            <div>
                <h3>Complete</h3>
                <p1>
                    This section contains all the tasks that are completed. When you create the task and then complete it by clicking on it, it will be displayed in this section of application. If there is no such task, it will tell you so.
                </p1>
            </div>

            <div>
                <h3>Incomplete</h3>
                <p1>
                    All Incompleted tasks are shown in this section. When you create a task, it will be incomplete by default and will be shown on Home page as well as the in Incomplete page.
                </p1>
            </div>

            <div>
                <h3>History</h3>
                <p1>
                    This section will show you the actions performed in the app (Create Task, Update Task, Delete Task, etc.) along with the time that the action was performed.
                </p1>
            </div>
        </div>
    );
}

export default About;
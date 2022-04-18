
function About() {
    return (
        <div className="card">
            <div>
                <h3>About</h3>
                    <p1>
                        This our ToDo App which help user to make thier day progressive and tension free. Basically there are four major section in the app. 1. Home 2. Complete 3. Incomplete 4. History. Below it is describe each section breifly.
                    </p1>
                </div>

            <div>
                <h3>Home</h3>
                <p1>
                   In Home page user get acces to create task by clicking on "+" button located right buttom corner. After adding task user can edit, delete, complete or incomplete the task. User Can eidt and delete the task title by clicking edit and delete button on each task card. 
                   When task is complete user will click on task card and the task title get crossed automaically.
                </p1>
            </div>

            <div>
                <h3>Complete</h3>
                <p1>
                    This section contains all the task that are completed by user. When user create the task and complete the task by clicking on it, automaically the task comes to this section of application. If there is no task it show empty with a text message. 
                </p1>
            </div>

            <div>
                <h3>Incomplete</h3>
                <p1>
                    All Incompleted task is shown in this section. When user create the task it is already incompleted. Also, when user create the task is shown on Home page as well as in incomplete section. And when the tak is complete it automatically moves to complete section.
                </p1>
            </div>

            <div>
                <h3>History</h3>
                <p1>
                    This Section contain all tasks either it is complete or incomplete. 
                </p1>
            </div>
        </div>
       
    );
}

export default About;
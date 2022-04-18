
function About() {
    return (
        <div className="card">
            <div>
                <h3>About</h3>
                    <p1>
                        This our ToDo App which help user to make thier day progressive and tension free. Basically there are four major section in the app.
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
                    This section contains all the task that are completed by user.
                </p1>
            </div>

            <div>
                <h3>Incomplete</h3>
                <p1>
                    All Incompleted task is shown in this section.
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
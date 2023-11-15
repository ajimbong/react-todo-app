import ListElement from "./uiElements/ListElement";

function Main({ tasks, deleteTask, toggleDoneState }) {
  const noItemsElement = (message) => {
    return (
      <li className="no-item">
        <p>{message}</p>
      </li>
    );
  };
  return (
    <main>
      <ul className="list" id="list">
        {tasks.length == 0
          ? noItemsElement("No tasks")
          : tasks.map((item, index) => {
              const props = {
                task: item.task,
                done: item.done,
                key: index,
                index,
                deleteTask,
                toggleDoneState
              };
              return <ListElement {...props} />;
            })}
      </ul>
    </main>
  );
}

export default Main;

import './list.css';

const List = () => (
  <li>
    <div>
      <input checked type="checkbox" className="checkbox" id="check" />
      <input type="text" className="strikethrough" id="task" />
    </div>
    <span id="removeTask" className="material-symbols-outlined">delete</span>
  </li>
);

export default List;

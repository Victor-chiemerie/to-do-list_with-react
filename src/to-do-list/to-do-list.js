import './to-do-list.css';
import Headder from './headderComponent/headder';
import Logic from './logicComponent/logic';

const ToDoList = () => (
  <section className="to-do-list">
    <div className="todos">
      <Headder />
      <Logic />
    </div>
  </section>
);

export default ToDoList;

import './to-do-list.css';
import Headder from './headderComponent/headder';
import Logic from './logicComponent/logic';

const ToDoList = () => (
  <section className="to-do-list">
    <Headder />
    <Logic />
  </section>
);

export default ToDoList;

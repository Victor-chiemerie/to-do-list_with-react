import './input.css';

const Input = ({ domId }) => (
  <label htmlFor={domId} className="addtask">
    <input id={domId} type="text" placeholder="Add to your list" />
  </label>
);

export default Input;

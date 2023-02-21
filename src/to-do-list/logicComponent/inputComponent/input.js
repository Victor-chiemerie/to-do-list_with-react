import './input.css';

const Input = ({ domId }) => (
  <label htmlFor={domId}>
    <input id={domId} type="text" placeholder="Add to your list" />
  </label>
);

export default Input;

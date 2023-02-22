import './item.css';

const Item = ({ itemProp, handleChange, delTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    {itemProp.title}
    <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
  </li>
);

export default Item;

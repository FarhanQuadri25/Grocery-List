import { FaTrashAlt } from "react-icons/fa";

const Newcontent = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      <h1>Grocery Lists</h1>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Newcontent;

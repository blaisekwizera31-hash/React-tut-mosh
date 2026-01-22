import React from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
let selectedIndex = -1;
  const handleClick = (event: React.MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0? <p>No item found</p> : null} */}
      <ul className="listgroup">
        {items.map((item) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

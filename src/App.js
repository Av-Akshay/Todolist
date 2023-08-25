import React, { useEffect, useState } from "react";
import List from "./List";

function App() {
  const [item, setitem] = useState("");
  const [additem, setadditem] = useState([]);

  const inputchange = (event) => {
    setitem(event.target.value);
  };
  useEffect(() => {
    let listData = JSON.parse(localStorage.getItem("list"));
    setadditem(listData);
  }, []);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(additem));
  }, [additem]);

  const Addlist = () => {
    setadditem((olditem) => {
      if (item === "") {
        return [...olditem];
      } else if (item.length <= 2) {
        alert("Minumum three letters required");
        return [...olditem];
      } else {
        return [...olditem, item];
      }
    });
    setitem("");
  };

  const deletitem = (id) => {
    setadditem((olditem) => {
      return olditem.filter((array, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="box">
      <div className="center-div">
        <br></br>
        <h1>To Do List</h1>
        <br></br>
        <input
          type="text"
          placeholder="Add items"
          value={item}
          onChange={inputchange}
        />
        <button className="add-item" onClick={Addlist}>
          +
        </button>
        <ul>
          {additem?.map((elements, index) => {
            return (
              <List
                item={elements}
                key={index}
                id={index}
                ondelete={deletitem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

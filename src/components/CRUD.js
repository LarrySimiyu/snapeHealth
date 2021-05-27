import React, { useState, useEffect } from "react";

export default function Crud() {
  const [filterInput, setFilterInput] = useState("");
  const [namesList, setNamesList] = useState([
    "names, here",
    "something, there",
  ]);

  const [selectedName, setSelectedName] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const filteredNames = namesList.filter((name) => {
    const foundName = name.toLowerCase().includes(filterInput.toLowerCase());
    return foundName;
  });

  const handleFilterInput = (event) => {
    setFilterInput(event.target.value);
  };

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleSurnameInput = (event) => {
    setSurname(event.target.value);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    let newName = `${surname}, ${name}`;
    console.log(newName);
    setNamesList([...namesList, newName]);
    setName("");
    setSurname("");
  };

  const handleDelete = (event) => {
    let newNamesList = [...namesList];
    newNamesList.splice(selectedName, 1);
    setNamesList(newNamesList);
  };

  console.log(selectedName);

  const handleUpdate = (event) => {
    event.preventDefault();
    let newNamesList = [...namesList];
    let newName = `${surname}, ${name}`;
    newNamesList[selectedName] = newName;
    setNamesList(newNamesList);
  };
  return (
    <div>
      <input value={filterInput} onChange={handleFilterInput} />
      {filteredNames.map((name, idx) => {
        return (
          <p key={idx} onClick={() => setSelectedName(idx)}>
            {name}
          </p>
        );
      })}
      <form onSubmit={handleCreate}>
        Name
        <input value={name} onChange={handleNameInput} name="name" />
        Surname
        <input value={surname} onChange={handleSurnameInput} name="surname" />
        <button type="submit" value="create">
          Create
        </button>
      </form>

      <button onClick={() => handleDelete()}>Delete</button>
      <button onClikc={() => handleUpdate()}>Update</button>
    </div>
  );
}

import { useState } from "react";

const AddContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <div className="AddContacts">
      <h2>Add a new Contact</h2>
      <form>
        <label>Contact Name: </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Contact Number: </label>
        <input
          type="text"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button>Add Contact</button>
      </form>
    </div>
  );
}
 
export default AddContacts;
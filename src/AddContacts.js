import { useState } from "react";

const AddContacts = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    // Prevent page refresh
    e.preventDefault()
    const contact = { name, phone };

    setIsLoading(true);
    
    fetch('http://localhost:8000/contacts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    }).then(() => {
      setIsLoading(false);
    })
  }

  return (
    <div className="AddContacts">
      <h2>Add a new Contact</h2>
      <form onSubmit={handleSubmit}>
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {!isLoading && <button>Add Contact</button>}
        {isLoading && <button disabled>Adding Contact...</button>}
      </form>
    </div>
  );
}
 
export default AddContacts;
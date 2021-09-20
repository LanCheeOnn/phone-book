import { useHistory, useParams } from "react-router-dom";

const ContactList = ({ contacts, title }) => {
  const history = useHistory();
  
  const handleDelete = (id) => {
    fetch('http://localhost:8000/contacts/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.go(0);
    })
  }

  return (
    <div className="contact-list">
      <h2> {title} </h2>
      {contacts.map((contact) => (
        <div className="contact-preview" key={contact.id}>
          <h3> {contact.name} </h3>
          <p>Contact Number: {contact.phone} </p>
          <div className="deleteBtn">
            <button onClick={() => handleDelete(contact.id)}>Delete Contact</button>
          </div>
        </div>
      ))}
    </div>
  )
}
 
export default ContactList;
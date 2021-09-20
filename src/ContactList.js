const ContactList = ({contacts, title, handleDelete}) => {
  return (
    <div className="contact-list">
      <h2> {title} </h2>
      {contacts.map((contact) => (
        <div className="contact-preview" key={contact.id}>
          <h3> {contact.name} </h3>
          <p> {contact.phone} </p>
          {/* <div className="deleteBtn">
            <button onClick={() => handleDelete(contact.id)}>Delete Contact</button>
          </div> */}
        </div>
      ))}
    </div>
  )
}
 
export default ContactList;
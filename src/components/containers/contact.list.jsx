import React from "react";
import ContactComponent from "../pure/contact";
import Contact from "../../models/contact.class";

class ContactList extends React.Component {
    defaultContact = new Contact('Federico','Stagnaro','federico.stagnaro.ar@gmail.com',false)

    render() {
        return (
            <div>
                <h1> Contact List </h1>
                <ul>
                    <ContactComponent contact={this.defaultContact}></ContactComponent>
                </ul>
            </div>
        )
    }
}

export default ContactList
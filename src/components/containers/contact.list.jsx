import React from "react";
import ContactComponent from "../pure/contact";
import Contact from "../../models/contact.class";
import { ContactForm } from "./contact.form";

class ContactList extends React.Component {
    defaultContact1 = new Contact('Federico', 'Stagnaro', 'federico.stagnaro.ar@gmail.com', false)
    defaultContact2 = new Contact('Federico2', 'Stagnaro2', 'federico.ar@gmail.com2', true)
    defaultContact3 = new Contact('Daniela', 'Stagnaro', 'dani.ar@gmail.com2', true)

    constructor(props) {
        super(props);
        this.state = { 
            contacts : [this.defaultContact1,this.defaultContact2, this.defaultContact3]
        }
        this.printAllContact = this.printAllContact.bind(this)
        this.deleteContact = this.deleteContact.bind(this)
        this.addContact = this.addContact.bind(this)
    }

    addContact (contact) {
        const tempContacts = [...this.state.contacts].concat(contact)
        this.setState({contacts: tempContacts})
    }

    deleteContact (contact) {
        const tempContact = [...this.state.contacts].filter(c => c !== contact )
        this.setState({contacts : tempContact})
    }

    printAllContact() {
        return this.state.contacts.map((c) => <ContactComponent key={Math.random() * 100} contact={c} deleteContact={this.deleteContact}></ContactComponent>) 
    }

    render() {
        return (
            <div >
                <div className="card my-3">
                    <div className="card-header my-3"> 
                        <h1 className="card-title"> Contact List </h1>

                    </div>
                    <div className="card-body list-group list-group-flush ">
                        <div className="row align-items-center text-start mx-5 border-bottom card-header">
                            <h4 className="col-3" >Name </h4>
                            <h4 className="col-2"> Surname</h4>
                            <h4 className="col-5"> Email</h4>
                            <h4 className="col-2  text-center"> Actions </h4>
                        </div>
                        {this.printAllContact()}
                    </div>
                </div>
                <ContactForm addContact={this.addContact}></ContactForm>
            </div>
            
        )
    }
}

export default ContactList
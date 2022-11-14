import React from "react";
import PropTypes from 'prop-types';
import ContactModel from "../../models/contact.class";

class ContactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.contact = this.props.contact
    }

    render() {
        return (
            <div>
                <h2> {this.contact.name} {this.contact.surname} </h2>
                <h4> {this.contact.email} </h4>
                <h4> Contacto  {this.contact.online ? 'En linea' : 'No disponible'} </h4>
            </div>
        )
    }
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(ContactModel)
}

export default ContactComponent
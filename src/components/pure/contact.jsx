import React from "react";
import PropTypes from 'prop-types';
import ContactModel from "../../models/contact.class";

class ContactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contact: this.props.contact }
    }

    render() {
        return (
            <div className="d-grid list-group-item  text-start mx-5">
                <div className="row ">
                    <h4 className="col-3" >{this.state.contact.name} </h4>
                    <h4 className="col-2">{this.state.contact.surname} </h4>
                    <h4 className="col-5">{this.state.contact.email} </h4>
                    <h4 className="col-2"> Contacto {this.state.contact.online ? 'En linea' : 'No disponible'} </h4>
                </div>
            </div>
        )
    }
}
ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(ContactModel)
}

export default ContactComponent

// render() {
//     return (
//         <div className="d-grid list-group-item ">
//             <div className="row">
//                 <h4 className="col"> {this.state.contact.name} </h4>
//                 <h4 className="col">  {this.state.contact.surname} </h4>
//                 <h4 className="col"> {this.state.contact.email} </h4>
//                 <h4 className="col"> Contacto  {this.state.contact.online ? 'En linea' : 'No disponible'} </h4>
//             </div>
            
            
//         </div>
//     )
// }
import React from "react";
import PropTypes from 'prop-types';
import ContactModel from "../../models/contact.class";
import '../../styles/contact.scss'

class ContactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contact: this.props.contact }
        this.printConnected = this.printConnected.bind(this)
        this.deleteContact = this.props.deleteContact
    }

    changeOnline () {
        this.setState( {contact: {...this.state.contact , online: !this.state.contact.online }} )
    }

    printConnected () {
        return this.state.contact.online 
            ? (
                <svg className="contact-action" onClick={()=> this.changeOnline()}  style={{color: 'green'}} height='2.3em' xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
                    <path   d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                )
            : (
                <svg className="contact-action" onClick={()=> this.changeOnline()} style={{color: 'red'}} height='2.3em'  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
            )
    }   

    printDeleteButton () {
        return (
            <span className="contact-action " onClick={()=> this.deleteContact(this.state.contact)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
            </span>    
        )
    }

    render() {
        return (
            <div className="d-grid list-group-item  text-start mx-5">
                <div className="row align-items-center">
                    <h4 className="col-3" >{this.state.contact.name} </h4>
                    <h4 className="col-2">{this.state.contact.surname} </h4>
                    <h4 className="col-5">{this.state.contact.email} </h4>
                    <div className="col-1 text-center"> {this.printConnected()} </div>
                    <div className="col-1 text-center">{this.printDeleteButton()}</div>
                </div>
            </div>
        )
    }
}
ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(ContactModel),
    deleteContact: PropTypes.func.isRequired
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
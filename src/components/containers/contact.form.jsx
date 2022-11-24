import React from "react";
import PropTypes from 'prop-types';
import ContactModel from "../../models/contact.class";


export class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.submitConctact = this.submitConctact.bind(this)
        this.addContact = this.props.addContact
        this.refName = React.createRef()
        this.refSurname = React.createRef()
        this.refEmail = React.createRef()
    }


    submitConctact (e) {
        e.preventDefault()
        const newContact = new ContactModel(
            this.refName.current.value,
            this.refSurname.current.value,
            this.refEmail.current.value,
            false
        )
        console.log('FORM: creating contact...', newContact)
        this.addContact(newContact)
    }

    render () {
        return (
            <form onSubmit={(e)=> this.submitConctact(e)} className='card' >
                <legend className="card-header">Create contact</legend>
                <div className="card-body">
                    <div className="mb-3 text-start">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input ref={this.refName} type="text" className="form-control" id="name" placeholder="Contact name"/>
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="surname" className="form-label">Surname</label>
                        <input ref={this.refSurname} type="text" className="form-control" id="surname" placeholder="Contact surname"/>
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input ref={this.refEmail} type="email" className="form-control" id="email" placeholder="Contact Email"/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

ContactForm.propTypes = {
    state: PropTypes.shape({
            contact: PropTypes.instanceOf(ContactModel)
        }),
    addContact: PropTypes.func.isRequired
}
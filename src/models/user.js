import ROLE from "./roles.enum";

export class User {
    username = '';
    email = '';
    password = '';
    role = ROLE.USER

    constructor(username, email, password, role) {
        this.username = username
        this.password = password
        this.email = email
        this.role = role
    }

    
}
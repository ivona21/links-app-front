export class User {
    public Id: number;
    public Username: string;
    public Email: string;
    public Password: string;
    public Firstname: string;
    public Lastname: string;

    constructor(id: number, username: string, email: string, password: string, firstname: string, lastname: string) { 
        this.Id = id;
        this.Username = username;
        this.Email = email;
        this.Password = password;
        this.Firstname = firstname;
        this.Lastname = lastname;
    }
}
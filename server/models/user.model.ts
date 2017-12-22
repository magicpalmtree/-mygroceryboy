import { PersonalInfo } from "./personal-info.model";

export type USER_TYPE = "SHOPKEEPER" | "CUSTOMER";

export class User {
    public id: string;
    public name: string;
    public username: string;
    public userType: USER_TYPE;
    public email: string;
    public password: string;
    public personalInfo: PersonalInfo;

    constructor() {
        this.id = "";
        this.username = "";
        this.userType = "SHOPKEEPER";
        this.name = "";
        this.email = "";
        this.password = "";
        this.personalInfo = new PersonalInfo();
    }
}
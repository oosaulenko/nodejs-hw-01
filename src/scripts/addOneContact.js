import {createFakeContact} from "../utils/createFakeContact.js";
import {getAllContacts} from "./getAllContacts.js";
import {writeContacts} from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const allContacts = await getAllContacts();
    const newContact = createFakeContact();
    allContacts.push(newContact);

    await writeContacts(allContacts);
};

addOneContact();

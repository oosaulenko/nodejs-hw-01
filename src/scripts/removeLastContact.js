import {getAllContacts} from "./getAllContacts.js";
import {writeContacts} from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const allContacts = await getAllContacts();
    allContacts.pop();

    await writeContacts(allContacts);
};

removeLastContact();

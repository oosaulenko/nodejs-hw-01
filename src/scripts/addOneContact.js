import {createFakeContact} from "../utils/createFakeContact.js";
import {writeContacts} from "../utils/writeContacts.js";
import {readContacts} from "../utils/readContacts.js";

export const addOneContact = async () => {
    const allContacts = await readContacts();
    const newContact = createFakeContact();
    allContacts.push(newContact);

    await writeContacts(allContacts);
};

addOneContact();

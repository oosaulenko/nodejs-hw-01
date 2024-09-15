import {writeContacts} from "../utils/writeContacts.js";
import {readContacts} from "../utils/readContacts.js";

export const removeLastContact = async () => {
    const allContacts = await readContacts();
    allContacts.pop();

    await writeContacts(allContacts);
};

removeLastContact();

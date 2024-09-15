import {createFakeContact} from "../utils/createFakeContact.js";
import {writeContacts} from "../utils/writeContacts.js";
import {readContacts} from "../utils/readContacts.js";


const generateContacts = async (number) => {
    const allContacts = await readContacts();
    const generatedContacts = Array.from({length: number}, createFakeContact);
    allContacts.push(...generatedContacts);

    await writeContacts(allContacts);
};

generateContacts(5);

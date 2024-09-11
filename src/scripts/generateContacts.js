import {getAllContacts} from "./getAllContacts.js";
import {createFakeContact} from "../utils/createFakeContact.js";
import {writeContacts} from "../utils/writeContacts.js";


const generateContacts = async (number) => {
    const allContacts = await getAllContacts();
    const generatedContacts = Array.from({length: number}, createFakeContact);
    allContacts.push(...generatedContacts);

    await writeContacts(allContacts);
};

generateContacts(5);

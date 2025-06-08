import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const newContact = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  const seeContact = await readContacts();
  await writeContacts([...seeContact, ...newContact]);
};

generateContacts(5);

import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  const seeContact = await readContacts();
  await writeContacts([...seeContact, newContact]);
};
addOneContact(1);

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('Contact=0');
    return;
  }

  contacts.pop();
  await writeContacts(contacts);

  console.log('Останній контакт успішно видалено!');
};

removeLastContact();

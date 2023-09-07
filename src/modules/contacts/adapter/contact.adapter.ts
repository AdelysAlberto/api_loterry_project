import { IContact } from '../interfaces/contact.interface';

const loginAdapter = (contact: IContact) => {
  return {
    name: contact.name,
    birthDate: contact.birthDate,
    email: contact.email,
  };
};

export { loginAdapter };

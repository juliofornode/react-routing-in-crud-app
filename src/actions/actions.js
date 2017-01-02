export const addContact = (newContact) => {
  return {
    type: 'ADD_CONTACT',
    payload: newContact
  };
};

const INITIAL_CONTACTS = [
  {
    id: 1,
    name: 'Mariau',
    children: [
      { id: 1, name: 'Javier' },
      { id: 2, name: 'Jacobo' },
      { id: 3, name: 'Belen' }
    ]
  },
  {
    id: 2,
    name: 'Julio',
    children: []
  },
  {
    id: 3,
    name: 'Belen',
    children: [
      { id: 1, name: 'Jaime' },
      { id: 2, name: 'Quique' }
    ]
  },
];

export const loadContacts = () => {
  return {
    type: 'LOAD_CONTACTS',
    payload: INITIAL_CONTACTS
  };
};

export const removeContact = (contactToRemove) => {
  return {
    type: 'REMOVE_CONTACT',
    payload: contactToRemove
  };
};

export const editName = (oldName, newName) => {
  return {
    type: 'UPDATE_NAME',
    oldName: oldName,
    newName: newName
  };
};

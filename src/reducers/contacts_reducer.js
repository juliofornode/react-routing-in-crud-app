export default (state=[], action) => {
  switch(action.type) {
  case 'LOAD_CONTACTS':
    return action.payload;
  case 'ADD_CONTACT':
    return [
      ...state,
      action.payload
    ];
  case 'REMOVE_CONTACT':
    return state.filter((item) => {
      return (item.name !== action.payload);
    });
  case 'UPDATE_NAME':
    return state.map((item) => {
      return (item.name === action.oldName) ?
        {...item, name: action.newName} :
        item;
    });
  default:
    return state;
  }
};

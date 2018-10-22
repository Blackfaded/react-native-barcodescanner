import { ADD_TEMPLATE_STRING, DELETE_TEMPLATE_STRING } from './actionTypes';

const initialState = {
  templateStrings: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEMPLATE_STRING:
      return {
        templateStrings: state.templateStrings.concat({
          key: `${Math.random()}`,
          name: action.name,
          template: action.templateString
        })
      };
    case DELETE_TEMPLATE_STRING:
      console.log('reducer');
      return {
        templateStrings: state.templateStrings.filter(template => template.key !== action.templateKey) //eslint-disable-line
      };

    default:
      return state;
  }
};

export default reducer;

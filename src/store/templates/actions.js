import { ADD_TEMPLATE_STRING, DELETE_TEMPLATE_STRING } from './actionTypes';

export const addTemplateString = (templateString, name) => ({
  type: ADD_TEMPLATE_STRING,
  templateString,
  name
});


export const deleteTemplateString = key => ({
  type: DELETE_TEMPLATE_STRING,
  templateKey: key
});

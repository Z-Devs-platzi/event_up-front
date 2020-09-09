import { BaseGendpoint } from '../api';

// need Token
export const CreateEventRequest = BaseGendpoint('event', 'post', {
  header: { 'Content-Type': 'multipart/form-data' },
});

// need Token and id on path if not will get a list
export const GetEventRequest = BaseGendpoint('event', 'get');

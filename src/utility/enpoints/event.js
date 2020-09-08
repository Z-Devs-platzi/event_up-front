import { BaseGendpoint } from '../api';

// need Token
export const CreateEventRequest = BaseGendpoint('event', 'post', {
  header: { 'Content-Type': 'multipart/form-data' },
});
// need Token and id on path
export const GetEventRequest = BaseGendpoint('event', 'get');

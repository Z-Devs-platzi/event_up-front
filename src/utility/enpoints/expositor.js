import { BaseGendpoint } from '../api';

// need Token
export const CreateExpositorRequest = BaseGendpoint('expositor', 'post', {
  header: { 'Content-Type': 'multipart/form-data' },
});
// need Token and id on path
export const GetExpositorRequest = BaseGendpoint('expositor', 'get');

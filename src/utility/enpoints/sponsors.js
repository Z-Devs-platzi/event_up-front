import { BaseGendpoint } from '../api';

export const CrateSponsorRequest = BaseGendpoint('sponsor', 'post', {
  'Content-Type': 'multipart/form-data',
});
export const UpdateSponsorRequest = BaseGendpoint('sponsor', 'put', {
  'Content-Type': 'multipart/form-data',
});

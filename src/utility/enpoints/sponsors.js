import { BaseGendpoint } from '../api';

export const CrateSponsorRequest = BaseGendpoint('sponsor', 'post', {
  header: { 'Content-Type': 'multipart/form-data' },
});
export const UpdateSponsorRequest = BaseGendpoint('sponsor', 'put', {
  header: { 'Content-Type': 'multipart/form-data' },
});

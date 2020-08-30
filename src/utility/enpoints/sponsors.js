import { BaseGendpoint } from '../api';

export const CrateSponsorRequest = BaseGendpoint(
  'sponsor',
  'post',
  'multipart/form-data'
);
export const UpdateSponsorRequest = BaseGendpoint(
  'sponsor',
  'put',
  'multipart/form-data'
);

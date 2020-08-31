import { CrateSponsorRequest, UpdateSponsorRequest } from './sponsors';

describe('Enpoints | sponsors', () => {
  it('UpdateSponsorRequest Defined', () => {
    expect(UpdateSponsorRequest).toBeDefined();
  });
  it('CrateSponsorRequest Defined', () => {
    expect(CrateSponsorRequest).toBeDefined();
  });
});

import { LogingRequest, UserRequest, RegisterRequest } from './auth';

describe('Enpoints | auth', () => {
  it('LogingRequest Defined', () => {
    expect(LogingRequest).toBeDefined();
  });
  it('UserRequest Defined', () => {
    expect(UserRequest).toBeDefined();
  });
  it('RegisterRequest Defined', () => {
    expect(RegisterRequest).toBeDefined();
  });
});

import * as auth from './auth-provider';

describe('Auth Provider', () => {
  it('auth utilities Defined', () => {
    expect(auth).toBeDefined();
    expect(auth).toHaveProperty('getToken');
    expect(auth).toHaveProperty('login');
    expect(auth).toHaveProperty('register');
    expect(auth).toHaveProperty('logout');
    expect(auth).toHaveProperty('userByToken');
    expect(auth).toHaveProperty('localStorageKey');
  });
  it('auth getToken function Defined', () => {
    expect(auth.getToken).toBeDefined();
    expect(typeof auth.getToken).toBe('function');
  });
  it('auth login function Defined', () => {
    expect(auth.login).toBeDefined();
    expect(typeof auth.login).toBe('function');
    expect(typeof auth.login({ username: 'lala', password: 'lala' })).toBe(
      'object'
    );
  });
  it('auth register function Defined', () => {
    expect(auth.register).toBeDefined();
    expect(typeof auth.register).toBe('function');
    expect(typeof auth.register({ username: 'lala', password: 'lala' })).toBe(
      'object'
    );
  });
  it('auth logout function Defined', () => {
    expect(auth.logout).toBeDefined();
    expect(typeof auth.logout).toBe('function');
    // no return
    expect(typeof auth.logout()).toBe('undefined');
  });
  it('auth userByToken function Defined', () => {
    expect(auth.userByToken).toBeDefined();
    expect(typeof auth.userByToken).toBe('function');
    expect(typeof auth.userByToken()).toBe('object');
  });
  it('auth local key name', () => {
    expect(auth.localStorageKey).toBeDefined();
    expect(auth.localStorageKey).toBe('__event_up_auth_provider_token__');
  });
});

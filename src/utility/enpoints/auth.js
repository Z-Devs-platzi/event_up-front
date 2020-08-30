import { BaseGendpoint } from '../api';

export const LogingRequest = BaseGendpoint('users/login', 'post');

export const UserRequest = BaseGendpoint('user', 'get');

export const RegisterRequest = BaseGendpoint('users/signup', 'post');

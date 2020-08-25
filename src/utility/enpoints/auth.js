import { BaseGenpoint } from '../api';

export const LogingRequest = BaseGenpoint('login', 'post');

export const UserRequest = BaseGenpoint('user', 'get');

export const RegisterRequest = BaseGenpoint('register', 'post');

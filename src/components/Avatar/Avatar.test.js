import React from 'react';
import { mount } from 'enzyme';
import Avatar from '.';
import { AvatarImage } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// Component
describe('<Avatar />', () => {
  test('Avatar / Default', () => {
    const defaultAvatar = mount(<Avatar />);
    expect(defaultAvatar.length).toEqual(1);
  });
});

// Styles
describe('Avatar / Styles', () => {
  it('Avatar Styles / Default', () => {
    const avatarDefault = renderer.create(<Avatar />).toJSON();
    expect(avatarDefault).toMatchSnapshot();
    expect(avatarDefault).toHaveStyleRule('width', 'var(--size)');
  });
});

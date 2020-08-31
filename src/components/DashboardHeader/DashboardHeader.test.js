import React from 'react';
import { mount } from 'enzyme';
import DashboardHeader from '.';
import { HeaderWrapper, HeaderTitle } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// Component:
describe('<DashboardHeader />', () => {
  test('DashboardHeader / Default', () => {
    const defaultAvatar = mount(<DashboardHeader />);
    expect(defaultAvatar.length).toEqual(1);
  });
});

// Styles:
describe('DashboardHeader / Styles', () => {
  it('DashboardHeader Styles / HeaderWrapper', () => {
    const wrapper = renderer.create(<HeaderWrapper />).toJSON();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('background-color', 'var(--light-green)');
  });
  it('DashboardHeader Styles / HeaderTitle', () => {
    const title = renderer.create(<HeaderTitle />).toJSON();
    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule('font-size', '1.25rem');
  });
});

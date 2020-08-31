import React from 'react';
import {
  EventInfo,
  DateWraper,
  BannerTitle,
  EditionTools,
  InfoContainer,
  OverlayLayer,
  ImageContainer,
  BannerWrapper,
} from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('templates / Banner', () => {
  it('templateCoundown EventInfo', () => {
    const timerStyles = renderer.create(<EventInfo />).toJSON();
    expect(timerStyles).toMatchSnapshot();
  });
  it('templateCoundown DateWraper', () => {
    const timerStyles = renderer.create(<DateWraper />).toJSON();
    expect(timerStyles).toMatchSnapshot();
  });
  it('templateCoundown BannerTitle', () => {
    const timerStyles = renderer.create(<BannerTitle />).toJSON();
    expect(timerStyles).toMatchSnapshot();
  });
  it('templateCoundown EditionTools', () => {
    const timerStyles = renderer.create(<EditionTools />).toJSON();
    expect(timerStyles).toMatchSnapshot();
  });
  it('templateCoundown InfoContainer', () => {
    const timerStyles = renderer.create(<InfoContainer />).toJSON();
    expect(timerStyles).toMatchSnapshot();
  });
  it('templateCoundown OverlayLayer', () => {
    const timerStyles = renderer.create(<OverlayLayer />).toJSON();
    expect(timerStyles).toMatchSnapshot();
  });
  it('templateCoundown ImageContainer', () => {
    const timerStyles = renderer.create(<ImageContainer />).toJSON();
    expect(timerStyles).toMatchSnapshot();
  });
  it('templateCoundown BannerWrapper', () => {
    const timerStyles = renderer.create(<BannerWrapper />).toJSON();
    expect(timerStyles).toMatchSnapshot();
  });
});

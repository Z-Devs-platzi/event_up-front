import { GetEventRequest, CreateEventRequest } from './event';

describe('Enpoints | event', () => {
  it('GetEventRequest Defined', () => {
    expect(GetEventRequest).toBeDefined();
  });
  it('CreateEventRequest Defined', () => {
    expect(CreateEventRequest).toBeDefined();
  });
});

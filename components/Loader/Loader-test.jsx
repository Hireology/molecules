import { shallow } from 'enzyme';
import Loader from './Loader';

jest.disableAutomock();

describe('loader', () => {
  it('renders', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('[data-test="loader"]').length).toBe(1);
  });
  it('renders a message', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('[data-test="message"]').length).toBe(1);
  });
  it('uses the passed in message if defined', () => {
    const wrapper = shallow(<Loader message="test message" />);
    expect(wrapper.find('[data-test="message"]').text()).toBe('test message');
  });
});

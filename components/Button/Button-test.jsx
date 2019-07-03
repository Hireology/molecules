import { shallow } from 'enzyme';
import Button from '../Button';

const getProps = (overrides) => ({
  additionalClasses: '',
  disabled: false,
  id: '',
  onClick: () => null,
  onMouseOut: () => null,
  onMouseOver: () => null,
  onMouseDown: () => null,
  size: '',
  type: '',
  ...overrides,
});

jest.disableAutomock();

describe('button', () => {
  it('renders', () => {
    const wrapper = shallow(<Button {...getProps()}>Button</Button>);
    expect(wrapper.find('[data-test="button"]').length).toBe(1);
  });

  it('passes through any additional classes', () => {
    const props = getProps({ additionalClasses: 'test' });
    const wrapper = shallow(<Button {...props}>Button</Button>);
    expect(wrapper.find('[data-test="button"]').hasClass('test')).toBe(true);
  });

  it('adds the type class if the button is not disabled', () => {
    const props = getProps({ type: 'danger' });
    const wrapper = shallow(<Button {...props}>Button</Button>);
    expect(
      wrapper.find('[data-test="button"]').hasClass('hireology-button--danger'),
    ).toBe(true);
  });

  it('does not add the type class if the button is disabled', () => {
    const props = getProps({ type: 'danger', disabled: true });
    const wrapper = shallow(<Button {...props}>Button</Button>);
    expect(
      wrapper.find('[data-test="button"]').hasClass('hireology-button--danger'),
    ).toBe(false);
  });

  it('adds the size class', () => {
    const props = getProps({ size: 'small', disabled: true });
    const wrapper = shallow(<Button {...props}>Button</Button>);
    expect(
      wrapper.find('[data-test="button"]').hasClass('hireology-button--small'),
    ).toBe(true);
  });

  it('passes through an onClick handler', () => {
    const onClickSpy = jest.fn();
    const props = getProps({ onClick: onClickSpy });
    const wrapper = shallow(<Button {...props}>Button</Button>);
    wrapper.simulate('click');
    expect(onClickSpy.mock.calls.length).toBe(1);
  });

  it('passes through an onMouseOver handler', () => {
    const onMouseOverSpy = jest.fn();
    const props = getProps({ onMouseOver: onMouseOverSpy });
    const wrapper = shallow(<Button {...props}>Button</Button>);
    wrapper.simulate('mouseOver');
    expect(onMouseOverSpy.mock.calls.length).toBe(1);
  });

  it('passes through an onMouseOut handler', () => {
    const onMouseOutSpy = jest.fn();
    const props = getProps({ onMouseOut: onMouseOutSpy });
    const wrapper = shallow(<Button {...props}>Button</Button>);
    wrapper.simulate('mouseOut');
    expect(onMouseOutSpy.mock.calls.length).toBe(1);
  });

  it('passes through an onMouseDown handler', () => {
    const onMouseDownSpy = jest.fn();
    const props = getProps({ onMouseDown: onMouseDownSpy });
    const wrapper = shallow(<Button {...props}>Button</Button>);
    wrapper.simulate('mouseDown');
    expect(onMouseDownSpy.mock.calls.length).toBe(1);
  });
});

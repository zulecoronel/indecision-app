import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import MyCounter from '../../src/components/MyCounter.vue'


describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount (MyCounter, {
        props: {
            value:value,
        },
    });
    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);


   // console.log(wrapper.html())
  });

  test('increments the counter when +1 button is clicked', async () => {
    const value = 5;
    const wrapper = mount (MyCounter, {
        props: {
            value:value,
        },
    });

    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click');

    expect(counterLabel.text()).toContain(`Counter: ${value + 1 }`);
    expect(squareLabel.text()).toContain(`Square: ${(value + 1)*(value + 1) }`);

    });
});

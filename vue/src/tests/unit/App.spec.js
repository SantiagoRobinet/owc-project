import { mount } from '@vue/test-utils'
import App from '../../App.vue'

describe('Given App', () => {
    describe('Home snapshot', () => {
        const props = {
            label: 'click me'
        }
        const wrapper = mount(App)
        it('should match', () => {
            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
})

/*
describe('When owc-button is rendered', ()=> {
        it('Then', ()=> {
            const buttonData = {
                shape: 'pill',
                label: 'Hola',
                color: 'red',
                face: 'outline',
                disabled: false,
                textcolor: 'blue'
              }

            const wrapper = shallowMount(App)
            wrapper.setData(buttonData)
            expect(wrapper.find('owc-button').exists()).toBe(true)
        })
    })
*/
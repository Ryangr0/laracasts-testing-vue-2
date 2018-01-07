import {mount} from 'vue-test-utils';
import expect from 'expect';
import ExampleComponent from '../../resources/assets/js/components/ExampleComponent.vue';

describe('ExampleComponent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(ExampleComponent);
    });

    it('Says that it is an example component', () => {
        expect(wrapper.find('.panel-heading').text()).toBe('Example Component');
    });
});


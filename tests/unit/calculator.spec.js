import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
  it('can subtract four from seven to change the running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
  it('can multiply three by five to change the running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
  it('can divide 21 by seven to change the running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
  it('can concatenate multiple numbers button click', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('1');
    wrapper.vm.numberClick('2');
    wrapper.vm.numberClick('3');
    expect(wrapper.vm.runningTotal).to.equal(123)
  })
  it('can chain multiple number and operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('1');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('3');
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(6)
  })
  it('can clear the running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal=5
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0)
  })
})

import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'

describe('Indecision.vue', () => {
  let wrapper
  let clgSpy

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      answer: 'yes',
      forced: false,
      image: 'https://yesno.wtf/assets/yes/2.gif'
    })
  }))

  beforeEach(() => {
    wrapper = shallowMount(Indecision)

    clgSpy = jest.spyOn(console, 'log')
  })

  test('Snpashot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('escribir en el input no debe disparar nada (console.log)', async() => {
    const input = wrapper.find('input')
    await input.setValue('hola mundo')

    expect(clgSpy).toHaveBeenCalled()
  })

  test('escribir simbolo de "?" debe de disparar el getAnswer', async() => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    const input = wrapper.find('input')
    await input.setValue('Voy a ser rico?')

    expect(getAnswerSpy).toHaveBeenCalled()
  })

  test('pruebas getAnswer', async() => {
    await wrapper.vm.getAnswer()
    const img = wrapper.find('img')

    expect(img.exists()).toBeTruthy()
    expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
    expect(wrapper.vm.answer).toBe('si')
  })

  test('pruebas getAnswer - Fallo en el API', async() => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'))
    await wrapper.vm.getAnswer()

    expect(wrapper.vm.img).toBe(null)
    expect(wrapper.vm.answer).toBe('No se pudo cargar el API')
  })
})
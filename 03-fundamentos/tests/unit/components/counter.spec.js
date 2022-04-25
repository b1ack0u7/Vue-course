import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  // test('Debe de hacer match con snapshot', () => { 

  //   expect(wrapper.html()).toMatchSnapshot()
  // })
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Counter)
  })

  test('h2 debe de tener su valor por defecto', () => { 
    expect(wrapper.find('h2').exists()).toBeTruthy()

    const h2Value = wrapper.find('h2').text()
    expect(h2Value).toBe('Counter')
  })

  test('El valor por defecto debe de ser 100 en el p tag', () => {
    // const p2Value = wrapper.findAll('p')[1].text()
    const p2Value = wrapper.find('[data-testid="counter"]').text()
    expect(p2Value).toBe("50")
  })

  test('Debe de incrementar en 1 el valor del contador', async() => {
    const [decrease, increase] = wrapper.findAll('button')

    await decrease.trigger('click')
    await decrease.trigger('click')
    await decrease.trigger('click')
    await increase.trigger('click')
    await increase.trigger('click')

    const value = wrapper.find('[data-testid="counter"]').text()
    expect(value).toBe('49')
  })

  test('Debe de establecer el valor por defecto', () => {
    const { start } = wrapper.props()

    const value = wrapper.find('[data-testid="counter"]').text()
    expect(Number(value)).toBe(start)
  })

  test('Debe de mostrar prop title', () => {
    const wrapper = shallowMount(Counter, {
      props: {
        title: 'Hola que tal'
      }
    })

    expect(wrapper.find('h2').text()).toBe('Hola que tal')
  })
})
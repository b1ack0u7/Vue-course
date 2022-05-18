const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

const getDayMonthYear = ( dataString) => {
  const date = new Date( dataString )

  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    yearDate: `${date.getFullYear()}, ${days[date.getDay()]}`
  }
}

export default getDayMonthYear
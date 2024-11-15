import './App.css'
import { useNotification } from './hook/useNotification'

function App() {
  const {successNotification, errorNotification, alertNotification , notification} = useNotification()
  const onClick = ()=> {
    successNotification('Que pena bro')
  }
  const onError = ()=> {
    errorNotification('Error de orden')
  }
  const onAlert = ()=> {
    alertNotification('Alerta de orden')
  }

  return (
    <>
    <div>
      <button onClick={onClick} className='activator'>Activar notificacion success</button>
      <button onClick={onError} className='activator'>Activar notificacion error</button>
      <button onClick={onAlert} className='activator'>Activar notificacion alert</button>
    </div>
    <div className='container'>
    {notification.length ? notification.map(noti => (
      <div key={Math.random()} className={`notification-container ${noti.type}`}>
      <div className='notification-content'>
        <img className={`notification-icon ${noti.type}`} src={`/${noti.type}.svg`} alt="Icono" />
        <h2>{noti.message}</h2>
      </div>
    </div>
    )) : null}
    </div>
    </>
  )
}

export default App

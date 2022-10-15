import './App.css'
import openModal from './components/openModal'

function App() {

  function handleOpen(){
    openModal('ModalSettings','modal de configuración')
  }
  function handleOpen2(){
    openModal('ModalAcount','modal de tu cuenta')
  }
  return (
      <div className='btn-container'>
        <button onClick={handleOpen}>Abrir modal</button>
        <button onClick={handleOpen2}>Abrir modal 2</button>
    </div>
  )
}

export default App

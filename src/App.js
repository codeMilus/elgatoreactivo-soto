import './styles/Global.css'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const app = () => {
  return(
    <>
      <NavBar />
      <ItemListContainer greeting="Pronto habrá productos aquí :3"/>
    </>
  )
}

export default app

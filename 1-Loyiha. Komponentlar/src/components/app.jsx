import Filter from './filter'
import Information from './information'
import ShoppingAddForm from './shopping-add-form'
import ShoppingList from './shopping-list'

function App() {
  return (
    <div className='app'>
      <div className='wrapper'>
        <div className="card">
          <Information />

          <ShoppingAddForm />

          <ShoppingList />

          <Filter />
        </div>
        <img src='/earth.svg' />
      </div>
    </div>
  )
}

export default App

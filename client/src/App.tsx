import { BaseSyntheticEvent, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  interface Values {
    name :string
    price :string
    category :string
  }

  const [values, setValues] = useState<Values>({
    name: '',
    price: '',
    category: ''
  });

  function handleInputValues(value :BaseSyntheticEvent) :void {
    setValues({
      ...values,
      [value.target.name]: value.target.value
    })
    console.log(values);
    
  }

  function handleClickButton() :void {
    console.log(values);    
  }

  return (
    <main>
      <h1>Scrim Shop</h1>

      <form className="register" action="http://localhost:8080/teste" method="post">
        <label>
          <p>Nome</p>
          <input 
            onInput={handleInputValues}
            type="text"
            name="name"
            placeholder="Nome"
          />
        </label>

        <label>
          <p>Preço</p>
          <input 
            onInput={handleInputValues}
            type="text"
            name="price"
            placeholder="Preço"
          />
        </label>

        <label>
          <p>Categoria</p>
          <input 
            onInput={handleInputValues}
            type="text"
            name="category"
            placeholder="Categoria"
          />
        </label>

        <button
          type="submit"
          onClick={handleClickButton}>
            Registrar
        </button>
      </form>
    </main>
  )
}

export default App
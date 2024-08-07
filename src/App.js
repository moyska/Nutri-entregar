import React, {useEffect , useState} from 'react';
import './index.css';

function App(){
  const [nutri, setNutri] = useState([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((r)=> r.json())
    .then((json) => setNutri(json))
  },[]);

  return(
    <div class='header'>
      <header>
        <strong><h3>React Nutri</h3></strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article class='article' key={item.id}>
            <strong>{item.titulo}</strong>
            <img class='img' src={item.capa} alt={item.titulo}/>
            <p>{item.subtitulo}</p>
            <button class='button'>Acessar</button>
          </article>

        );

      })}
    </div>
  );
}
export default App
;
import { useEffect, useState } from 'react'
import './Task.css'

function Task() {

  // Criando variavel de estado
  const [completada, setCompletada] = useState (false);
  const [tarefa, setTarefa] = useState (" ");
  
  useEffect( () => {

    if(completada){

      setTarefa("Parabéns ! Você completou sua Tarefa!");

    }

     

  }, [ completada ]); //  recebe parametro, array function e array.



  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: { tarefa }</h3>
        <button onClick={ () => { setCompletada(true)}}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task
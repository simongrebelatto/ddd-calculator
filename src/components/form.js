import { receiveData } from "./receiveData";

function AppForm () {

  return (
    <div className="main_form">
      <form className="form_container">
        <select className="origin_ddd" name="ddd_inf" id="ddd_inf">
          <option value="default">Selecione um DDD de Origem</option>
          <option value="11">011</option>
          <option value="16">016</option>
          <option value="17">017</option>
          <option value="18">018</option>
        </select>
        <input className="minutes_call" type="number" placeholder="Informe o tempo de Ligação (min)"/>
        <input className="none" type="number" placeholder="Informe o tempo de Ligação (min)"/>
        <input type="button" className="buttom_form" onClick={receiveData} value="Calcular"/>
      </form>
    </div>
  )

}

export { AppForm };
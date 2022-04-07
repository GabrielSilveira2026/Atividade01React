import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
  const estiloDIV1 = {
    margin: 'auto',
    padding: 10,
    width: 'auto', 
    backgroundColor: 'rgba(239,239,239,255)',
    border: '1px solid',
    borderRadius: 3,
    borderColor: 'rgba(150,150,150,255)',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
  }

  return (
    <div style={estiloDIV1}>
      <label>Profissionais da saúde</label> 
      <div style={{marginTop:'5px', padding:'1px', border:'1px solid', borderRadius:'3px'}}>
        <div id="cartoes">aa</div>
        <div id="cartoes">aa</div>
        <div id="cartoes">aa</div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
import React, { useState, useEffect } from 'react';
import axios from "axios";

const App = () => {

  const[cnpj, setCnpj] = useState('');
  const[empresa, setEmpresa] = useState();

  function handleInputChange(event){
    setCnpj(event.target.value);
    fetchCnpj(cnpj);
  }

  function fetchCnpj(doc) {
    if (doc.length === 14) {
      const cnpjURL = `ec2-54-157-179-215.compute-1.amazonaws.com:3000/api/cnpj/${doc}`;

      axios.get(cnpjURL).then(response => {
        setEmpresa({
          razao_social: response.data.data.razao_social,
          nome_fantasia: response.data.data.nome_fantasia,
          logradouro: response.data.data.logradouro,
          numero: response.data.data.numero,
          bairro: response.data.data.bairro,
          cep: response.data.data.cep,
          municipio: response.data.data.municipio,
          uf: response.data.data.uf
        });      
        console.log(empresa);
     });
  }
  }   

  return (
  <>
  <div className="container">
    <div className="box">
      <label>CNPJ<input onChange={handleInputChange} value={cnpj} /></label>  
      <br />
      <br />
      <br />
      
      <h2>Razão Social: {empresa && empresa.razao_social} Fantasia: {empresa && empresa.nome_fantasia}</h2>
      <h3>Endereço: {empresa && empresa.logradouro} Numero: {empresa && empresa.numero} Bairro: {empresa && empresa.bairro}</h3>
      <h3>CEP: {empresa && empresa.cep} Cidade: {empresa && empresa.municipio} UF: {empresa && empresa.uf}</h3>
    </div>
  </div>
    <style jsx>{`
       .container {
           width: 100vw;
           height: 100vh;
           background: #6C7A89;
           display: flex;
           flex-direction: row;
           justify-content: center;
           align-items: center
       }
       .box {
           width: 450px;
           height: 450px;
           background: #fff;
       }
       body {
          margin: 0px;
      }
    `}</style>  
 </>
  );
}

export default App;

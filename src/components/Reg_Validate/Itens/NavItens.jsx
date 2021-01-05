import React, { Component } from 'react';
import InputValidate from './Input'; 
import InputCode from '../Configuracao/InputCode'; 
import { Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, UncontrolledCollapse} from 'reactstrap'; 



class NavItens extends Component {

  render() {
    return (
      <div>
        <Card>
          <CardHeader><h3>Validação de campos de texto.</h3></CardHeader>
          <CardBody>
            <InputValidate />
          </CardBody>
          <CardFooter>
          <ButtonGroup>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}> Visualizar o Código </Button>
            <Button color="info" id="info" style={{ marginBottom: '1rem'}}>Descrição dos métodos.</Button>    
          </ButtonGroup>

          <UncontrolledCollapse toggler="#toggler">
            <div style={{backgroundColor:"lightslategray"}}>
              <InputCode /> 
            </div>
          </UncontrolledCollapse>
          <UncontrolledCollapse toggler="#info">
            <p><b>Métodos utilizados: </b></p>
            <p><b>_updateValue  : </b> Como parametro ele deve receber dois valores o nome do campo e o valor do campo informado pelo usuário. </p>
            <p><b>_formValidate : </b> Este método será utilizado para definir o form do component de validação, </p> 
            <p> como padrão ele deve receber um elemento do tipo boolean, </p>
            <p> caso o elemento seja verdadeiro, então significa que todos os registros obrigatórios estão preenchidos corretamente. </p>
            <hr/>
            <p><b>Métodos utilizados no component 'Input'</b></p>
            <table border="1">
              <tr>
                <td>Nome</td>
                <td>Função</td>
                <td>Tipo</td>              
              </tr>  
              <tr>
                <td>disabled</td>              
                <td>Ativa e desativa o campo Input. </td>              
                <td>Boolean</td>              
              </tr>   
              <tr>
                <td>name</td>              
                <td>Define o ID e o nome do campo. </td>              
                <td>String</td>              
              </tr>
              <tr>
                <td>req</td>              
                <td>Define sé o campo é obrigatório ou não, por padrão o req é false. </td>              
                <td>Boolean</td>              
              </tr>
              <tr>
                <td>value</td>
                <td>Captura os valores inseridos no Input de acordo com o name declarado juntamente com o state.</td>
                <td>Var/State</td>
              </tr>
              <tr>
                <td>type</td>
                <td>Define o tipo do campo em "text" e "textarea".</td>
                <td>String</td>
              </tr>
            </table>


            {/*<Input disabled={this.state.enabledNutrientes} name="nome" req={ true } type="text" value={ this.state.fertilizante.nome } updateValue={this._updateValue} />*/}


          </UncontrolledCollapse>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default NavItens;
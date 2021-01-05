import React, { Component } from 'react';
import InputValidate from './Input'; 
import InputCode from '../Configuracao/InputCode'; 
import { Button, Card, CardHeader, CardBody, CardFooter, UncontrolledCollapse} from 'reactstrap'; 



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
          <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}> Visualizar o Código </Button>
          <UncontrolledCollapse toggler="#toggler">
            <div style={{backgroundColor:"lightslategray"}}>
              <InputCode /> 
            </div>
          </UncontrolledCollapse>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default NavItens;
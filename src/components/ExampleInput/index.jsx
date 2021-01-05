import React, { Component } from 'react';
import { Col, Card,   CardBody, CardFooter, Row, Label,  ButtonGroup,  Button, UncontrolledCollapse} from 'reactstrap'; 
import { Btn, InpuT} from 'validatereg'; 
import CodeInpuT from './exampleInput'; 

class componentName extends Component {
    constructor(props){
      super(props); 
      this.state={
        cadastro:{
          nome: "", 
          sobrenome: "",
        },
      }
      this.input_req = this.input_req.bind(this); 
      this.validate_input = this.validate_input.bind(this); 
      this.formValidate = this.formValidate.bind(this); 

    } 

    input_req = (name, value) => {
        this.setState({cadastro: {...this.state.cadastro, [name]: value}})
    }

        //Requisitos do validateReg
      //Utilizado para validar os campos obrigatórios.. 
      validate_input = () => {
        this.setState({formValidate: true})
    }

    //Requisito do validateReg 
    //Utilizado para função do <form> do HTML. Tendo as opções de Registrar e atualizar. 
    formValidate = () => {
        // if (this.state.objID) {
        //     Update(this.state.propriedade, this.props);
        // } else {
        //     Register(this.state.propriedade, this.props);
        // }
    }

    render() {
        return (
            <div>
              <Row >
                <Col xl="12">
                  <Card>
                    <CardBody>
                      <h3 className="color_example">Example ("InpuT")</h3>     
                      <h4>Teste com um campo obrigatório e outro não obrigatório.</h4>
                      <Card>
                        <CardBody>
                          <Col lg="12">
                              <Label>Nome</Label>
                              <InpuT name="nome" req={ true } value={ this.state.cadastro.nome } updateValue={this.input_req}/>
                              <Label>Sobrenome</Label>
                              <InpuT name="sobrenome" req={ false } value={ this.state.cadastro.sobrenome } updateValue={this.input_req}/>
                          </Col>

                          <ButtonGroup className="float-right form-actions">
                            <Btn validate={this.validate_input} form={() => {this.formValidate()}} value="Salvar"/>
                          </ButtonGroup>
                        </CardBody>
                      </Card>
                      </CardBody>
                      <CardFooter>
                        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}> Visualizar o Código </Button>
                        <UncontrolledCollapse toggler="#toggler">
                          <CodeInpuT />
                        </UncontrolledCollapse>
                      </CardFooter>
                    </Card>
                </Col>
              </Row>
            </div>
        );
    }
}

export default componentName;
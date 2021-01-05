import React, { Component } from 'react';
import { Col, Card,   CardBody, CardFooter, Row, Label,  ButtonGroup,  Button, UncontrolledCollapse} from 'reactstrap'; 
import { Btn, InputRegistro} from 'validatereg'; 
import CodeExample from './exampleInputRegistro'; 
import "../home.scss"; 

class componentName extends Component {
    constructor(props){
        super(props); 
        this.state={
          cadastro:{
            cnpj: "", 
            cpf: "",
            cpfReq: "", 
            cnpjReq: ""
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
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            <h3 className="color_example">Example ("InputRegistro")</h3>     
                            <h4>Testando Validação de CPF e CNPJ com campos não obrigatório.</h4>
                                <CardBody>
                                    <Card>
                                        <CardBody>
                                            <Label>CPF</Label>
                                                <InputRegistro name="cpf" registro={"CPF"} req={ false } value={this.state.cadastro.cpf} updateValue={this.input_req}/>

                                            <Label>CNPJ</Label>
                                                <InputRegistro name="cnpj" registro={"CNPJ"} req={ false } value={this.state.cadastro.cnpj} updateValue={this.input_req}/>

                                            <Label>CPF * </Label>
                                                <InputRegistro name="cpfReq" registro={"CPF"} req={ true } value={this.state.cadastro.cpfReq} updateValue={this.input_req}/>

                                            <Label>CNPJ * </Label>
                                                <InputRegistro name="cnpjReq" registro={"CNPJ"} req={ true } value={this.state.cadastro.cnpjReq} updateValue={this.input_req}/>

                                            <ButtonGroup className="float-right form-actions">
                                                <Btn validate={this.validate_input} form={() => {this.formValidate()}} value="Salvar"/>
                                            </ButtonGroup>
                                        </CardBody>
                                    </Card>
                                </CardBody>
                            </CardBody>
                            <CardFooter>
                                <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}> Visualizar o Código </Button>
                                <UncontrolledCollapse toggler="#toggler">
                                    <CodeExample /> 
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
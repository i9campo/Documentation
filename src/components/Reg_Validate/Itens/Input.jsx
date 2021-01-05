import React, { Component } from 'react';
import {Button, Input} from 'reg_validate'; 
import { Col, Label, Row } from 'reactstrap'; 

class InputValidate extends Component {
  constructor(props){
    super(props); 
    this.state={
      objeto: {
        nome      : '', 
        sobrenome : '',
        obs       : ''
      } 
    }

    this._formValidate = this._formValidate.bind(this); 
    this._updateValue  = this._updateValue.bind(this); 

  }

  _formValidate = (e) => { 
    this.setState({validacao: true})
    if (e === true){
      alert("Todos os campo foram valido!")
      // condição para registrar ou atualizar o cadastro. 
    }
  }

  _updateValue  = (nameCamp, value) => { 
    this.setState({objeto: {...this.state.objeto, [nameCamp]: value.toUpperCase()}})
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg="4">
            <Label>Nome : </Label>
            <Input name="nome" req={ true } type="text" value={ this.state.objeto.nome } updateValue={this._updateValue} />
          </Col>
          <Col lg="4">
            <Label>Sobrenome: </Label>
            <Input name="sobrenome" req={ true } type="text" value={ this.state.objeto.sobrenome } updateValue={this._updateValue} />
          </Col>
          <Col lg="4">
            <Label>Obs: </Label>
            <Input name="obs" req={ false } type="text" value={ this.state.objeto.obs } updateValue={this._updateValue} />
          </Col>
        </Row>
        <hr/>
          <div className="float-right">
            <Row>
              <Col>
                <Button color="primary" form={this._formValidate}  value="Validar"/>
              </Col>
            </Row>
          </div>
      </div>
    );
  }
}

export default InputValidate;
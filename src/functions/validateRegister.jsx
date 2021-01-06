import React, { Component } from "react" 
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import { Button, Input  } from 'reactstrap';

export var enableButton =  false ; 

function EnabledButton (Tipo) {
    enableButton = Tipo 
}

export class InputValidation extends Component {
    constructor(props){
        super(props); 
        this.state={
            message_erro: ''  
        }
        this.validateCamp =  this.validateCamp.bind(this);
        this.clearErro = this.clearErro.bind(this); 
    }

    validateCamp = (value) =>{
        if (value.target.value.length == 0 ){
            this.setState({message_erro: this.props.msg_req})
            EnabledButton("disabled")
        }
        else{
            this.setState({message_erro: ""})
            EnabledButton(false)
        }
    }

    clearErro = () =>{
        this.setState({message_erro: ""})
    }

    render(){
        return (
            <div>
                <Input type="text" className="form-control" name={this.props.name} autoComplete={this.props.autoComplete} onBlur={this.validateCamp} onClick={this.clearErrro}/>
                <p className="invalid-feedback-show" >{this.state.message_erro}</p>
            </div>
        )
    }
}

export class InputContato extends Component {
    constructor(props){
        super(props); 
        this.state={
            message_erro:'', 
        }
        this.checked_tel = this.checked_tel.bind(this); 
        this.checked_cel = this.checked_cel.bind(this);
    }

    checked_tel = (Cel) =>{
        var length_cel = Cel.target.value.replace(/[^0-9]/g, '').toString().split("")
        if (length_cel.length > 0 && length_cel.length < 11){
            toast.error("Este número  : " + Cel.target.value + " é inválido. " , { position: toast.POSITION.TOP_RIGHT }); 
            this.setState({message_erro: " ( * Verifique este campo! ) "})
            EnabledButton(true); 
            return

        }
        EnabledButton(false)
        this.setState({message_erro: ""})

        
    }

    checked_cel = (Tel) =>{
        var length_tel = Tel.target.value.replace(/[^0-9]/g, '').toString().split("");
        if (length_tel.length > 0 && length_tel.length < 10){
            toast.error("Este número : " + Tel.target.value + " é inválido. " , { position: toast.POSITION.TOP_RIGHT });
            this.setState({message_erro: " ( * Verifique este campo! ) "})
            EnabledButton(true); 
            return
        }
        EnabledButton(false)
        this.setState({message_erro: ""})
    }

    render() {
        return (
            <div>
                <InputMask
                    className="form-control"
                    type="text"
                    name={this.props.tpContato}
                    id={this.props.tpContato}
                    mask={this.props.tpContato === "fax"? '(99)9 9999-9999' :  '(99) 9999-9999'}
                    placeholder={this.props.tpContato === "fax"? '(61) 9 9500-4515':  '(61) 3620-1515'}
                    onBlur={this.props.tpContato === "fax"? this.checked_cel : this.checked_tel}
                    onClick={this.clearErro}
                />
                <p className="invalid-feedback-show" >{this.state.message_erro}</p>
            </div>
        )
    }
}

export class InputRegistro extends Component {
    constructor(props){
        super(props); 
        this.state={
            message_erro:'', 
        }
        this.checked_cpf = this.checked_cpf.bind(this); 
        this.checked_cnpj = this.checked_cnpj.bind(this);
    }

    checked_cpf = (cpf) =>{
        var cpf_notCaracter = cpf.target.value.replace(/[^0-9]/g, '').toString().split("");
    
        // GET: Resultado de validação do CPF
        if (cpf_notCaracter.length == 11) {
             var v = [];
    
            // v[0] recebe o resultado da soma e multiplicação, gerando o primeiro digito do CPF.
            v[0] = 1 * cpf_notCaracter[0] + 2 * cpf_notCaracter[1] + 3 * cpf_notCaracter[2];
            v[0] += 4 * cpf_notCaracter[3] + 5 * cpf_notCaracter[4] + 6 * cpf_notCaracter[5];
            v[0] += 7 * cpf_notCaracter[6] + 8 * cpf_notCaracter[7] + 9 * cpf_notCaracter[8];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;
    
            // v[1] recebe o resultado da soma e multiplicação, gerando o segundo digito do CPF
            v[1] = 1 * cpf_notCaracter[1] + 2 * cpf_notCaracter[2] + 3 * cpf_notCaracter[3];
            v[1] += 4 * cpf_notCaracter[4] + 5 * cpf_notCaracter[5] + 6 * cpf_notCaracter[6];
            v[1] += 7 * cpf_notCaracter[7] + 8 * cpf_notCaracter[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;
        
            // GET: Validação de repetição de digitos. 
            if ((v[0] != cpf_notCaracter[9]) || (v[1] != cpf_notCaracter[10]) ||
            cpf.target.value == "000.000.000-00" || cpf.target.value == "111.111.111-11" || cpf.target.value == "222.222.222-22" ||
            cpf.target.value == "333.333.333-33" || cpf.target.value == "444.444.444-44" || cpf.target.value == "555.555.555-55" ||
            cpf.target.value == "666.666.666-66" || cpf.target.value == "777.777.777-77" || cpf.target.value == "888.888.888-88" ||
            cpf.target.value == "999.999.999-99") {
                toast.error("Este número de CPF : "+cpf.target.value+" é inválido! ", { position: toast.POSITION.TOP_RIGHT });
                this.setState({message_erro: " ( * Verifique este campo! ) "})
                return
            }
        }
    
        // GET: Validação de quantidades de digitos em um campo. 
        if (cpf_notCaracter.length > 0 && cpf_notCaracter.length < 11){
            toast.error("Este número de CPF : " + cpf.target.value + " está incompleto. " , { position: toast.POSITION.TOP_RIGHT });
            this.setState({message_erro: " ( * Verifique este campo! ) "})
            return
        }
        this.setState({message_erro: ""}); 
    }

    checked_cnpj = (CNPJ) =>{
        // GET: Verificação dos digitos repetidos no CNPJ. 
        if (CNPJ.target.value == "00.000.000/0000-00" || CNPJ.target.value == "11.111.111/1111-11" || CNPJ.target.value == "22.222.222/2222-22" ||
        CNPJ.target.value == "33.333.333/3333-33" || CNPJ.target.value == "44.444.444/4444-44" || CNPJ.target.value == "55.555.555/5555-55" ||
        CNPJ.target.value == "66.666.666/6666-66" || CNPJ.target.value == "77.777.777/7777-77" || CNPJ.target.value == "88.888.888/8888-88" ||
        CNPJ.target.value == "99.999.999/9999-99") {
            toast.error("Número de CNPJ Informado  /n" + CNPJ.target.value + " Nãe é um tipo de registro válido. Tente Novamente." , { position: toast.POSITION.TOP_RIGHT });
            this.setState({message_erro: " ( * Verifique este campo! ) "})
            return
        }

        //GET: Cálcuo CNPJ Validation. 
        var cnpj = CNPJ.target.value.replace(/[^0-9]/g, '').toString().split("");
        if (cnpj.length == 14) {
            var cn = [];
            // Verificação do primeiro digito. 
            cn[0] = 5 * cnpj[0] + 4 * cnpj[1] + 3 * cnpj[2];
            cn[0] += 2 * cnpj[3] + 9 * cnpj[4] + 8 * cnpj[5];
            cn[0] += 7 * cnpj[6] + 6 * cnpj[7] + 5 * cnpj[8];
            cn[0] += 4 * cnpj[9] + 3 * cnpj[10] + 2 * cnpj[11];
            cn[0] = cn[0] % 11;

            if (cn[0] < 2) {
                cn[0] = 0;
            } else {
                cn[0] = 11 - cn[0];
            }

            // Verificação do segundo digito. 
            cn[1] = 6 * cnpj[0] + 5 * cnpj[1] + 4 * cnpj[2];
            cn[1] += 3 * cnpj[3] + 2 * cnpj[4] + 9 * cnpj[5];
            cn[1] += 8 * cnpj[6] + 7 * cnpj[7] + 6 * cnpj[8];
            cn[1] += 5 * cnpj[9] + 4 * cnpj[10] + 3 * cnpj[11] + 2 * cn[0];
            cn[1] = cn[1] % 11;

            if (cn[1] < 2) {
                cn[1] = 0;
            } else {
                cn[1] = 11 - cn[1];
            }
            if ((cn[0] != cnpj[12]) || (cn[1] != cnpj[13])) {
                toast.error("Número de CNPJ Informado  " + CNPJ.target.value + " Não é um tipo de registro válido. Tente Novamente." , { position: toast.POSITION.TOP_RIGHT });
                this.setState({message_erro: " ( * Verifique este campo! ) "})
                return
            }
        }


        if (cnpj.length > 0 && cnpj.length < 14){
            toast.error("Este número de CNPJ : " + CNPJ.target.value + " está incompleto. " , { position: toast.POSITION.TOP_RIGHT });
            this.setState({message_erro: " ( * Verifique este campo! ) "})
            return
        }
        this.setState({message_erro: ""}); 

    }

    render() {
        return (
          <div >
                <InputMask 
                    mask={this.props.registro === "CPF" ? '999.999.999-99' : '99.999.999/9999-99'} 
                    className="form-control" 
                    type="text" 
                    name={this.props.name }  
                    id={this.props.name } 
                    placeholder={this.props.registro === "CPF" ? '123.321.456-45' : '12.456.987/7777-12'} 
                    onBlur={this.props.registro === "CPF" ? this.checked_cpf : this.checked_cnpj}
                />
                <p className="invalid-feedback-show" >{this.state.message_erro}</p>
          </div>
        )
    }
}

export class Btn extends Component{
    render(){
        return (
            <div>
                <Button type="submit" color="primary" disabled={enableButton}> Salvar </Button>
            </div>
        )
    }
}
       
       
        * props.req: utilizado para identificar sé o campo é obrigatório ou não. 
        * props.value: utilizado para receber o valor do campo preenchido. 
        * props.registro: utilizado para identificar o tipo de registro do campo. "CPF" ou "CNPJ". 
        * props.name: Nome do campo. 


        ||| Código a partir da linha "296" ("Begin Code")
        if (props.req === true && cheCked === true && props.registro === "CPF"  && value.length > 0 && value.length < 11 ){  enterCheckedButton = true; this.setEnableCampObrigatorio(this.props.name, true, "( Campo incompleto! )")}
        if (props.req === true && cheCked === true && props.registro === "CNPJ" && value.length > 0 && value.length < 14 ){ console.log("CNPJ");  enterCheckedButton = true; this.setEnableCampObrigatorio(this.props.name, true, "( Campo incompleto! )")}
        if (props.req === true && cheCked === true && value.length === 0 && nameInputRegistro === ""){ enterCheckedButton = true; this.setEnableCampObrigatorio(this.props.name, true,"( Campo Obrigatório! )")}

        if (props.req === true && value.length > 0 && nameInputRegistro === ""){ this.setDisableCampoObrigatorio(this.props.name, true)}
        if (props.req === false && props.registro === "CPF"  && value.length > 0 && value.length < 11 && props.name === nameInputRegistro){ console.log("CPF Reque"); enterCheckedButton = true;  this.setEnableCampObrigatorio(this.props.name, true, "( Campo incompleto! )")}
        if (props.req === false && props.registro === "CNPJ" && value.length > 0 && value.length < 14 && props.name === nameInputRegistro){ console.log("CNPJ Reque"); enterCheckedButton = true; this.setEnableCampObrigatorio(this.props.name, true, "( Campo incompleto! )")}
        if (props.req === false && nameInputRegistro === "" && value.length === 0 || props.req === false && nameInputRegistro === "" && value.length > 0 ){  this.setDisableCampoObrigatorio(this.props.name, true)}

        if (props.req === false && props.name === nameInputRegistro){
            if (onBlurInputRegistro ){
                if (value.length === 11 && props.registro === "CPF" ){ this.setDisableCampoObrigatorio(this.props.name, true) }
                if (value.length === 14 && props.registro === "CNPJ"){ this.setDisableCampoObrigatorio(this.props.name, true) }
                                              if (value.length === 0){ this.setDisableCampoObrigatorio(this.props.name, true) }
            }
        }
        ||| Código a partir da linha "315" ("End Code")
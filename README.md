# CONFIG CONNECTION SIGMA.WEBAPI2 C#.
#### Link de conexão com **API LOCAL** ( https://sigma.sigma.local ).
&nbsp;
- Caso a conexão do front-end **"React JS"** não funcione com a **API**, basta acessar o link da **API LOCAL** e ative o certificado SSL.
- Para executar o front-end **"React JS"** pelo visual code, basta clicar na aba **"SCRIPTS"** logo em seguida em **"start-local"**.
- Sé preferir pode executar através de linha de comando **"CMD"** com o seguinte código. (**"npm run start-local"**).
&nbsp;
#### Link de conexão com **API REMOTA** ( https://sigma.siccerrado.com.br ).
- Caso a conexão do front-end **"React JS"** não funcione com a **API**, basta acessar o link da **API REMOTA** e ative o certificado SSL.
- Para executar o front-end **"React JS"** pelo visual code, basta clicar na aba **"SCRIPTS"** logo em seguida em **"start-ext"**.
- Sé preferir pode executar através de linha de comando **"CMD"** com o seguinte código. (**"npm run start-ext"**).
&nbsp;
#### Para debugar a API
- Necessário executar o projeto WEBAPI pelo visual studio. 
- Para executar o front-end **"React JS"** pelo visual code, basta clicar na aba **"SCRIPTS"** logo em seguida em **"start-api"**.
- Sé preferir pode executar através de linha de comando **"CMD"** com o seguinte código. (**"npm run start-api"**).
&nbsp;
# CONFIG PUBLISH PROJECT.  

### Publicando projeto front-end **"React JS"** no IIS.
- Primeiro você tem que executar o comando **"npm run build-ext"** ou clicar na aba **"SCRIPTS"** logo em seguida em **"build-ext"**. 
- Após o primeiro processo ser concluído, o projeto automaticamente vai criar uma pasta chamada **BUILD**.
- Abra a pasta **BUILD** e copie todos os arquivos para dentro do servidor na pasta (F - IIS / SigmaDev). Prontinho processo feito com sucesso.
&nbsp;
### Publicando o projeto WEBAPI no IIS.
- Abra o visual studio, clique em 1 - servicos/ Sigma.WebApi2 com o botão direito, depois em publish ou publicar. 
- Após esse processo, basta clicar em publicar, caso a pasta não esteja respondendo basta editar e colocar o caminho para  (F - IIS/ Sigma).  

# CONFIG CHAMADAS ASSINCRONAS ATRAVÉS DE REQUISIÇÃO ("GET").  

### GET ADUBO
> #### Retorna todos os registros de adubo. 
```sh
let objeto = await api.get('/adubo');
```
> #### Retorna somente um objeto de adubo.
```sh
let objeto = await api.get('/adubo', {params: {objID: variável declarada }});
```  
>**OBS:** Necessário passar um objID como parametro para obter o objeto adubo. 

### GET AMOSTRA FOLIAR. 
> #### Retorna todos os registros da amostra foliar. 
```sh
let objeto = await api.get('/amostrafoliar');
```
> #### Retorna um objeto amostra foliar. 
```sh
let objeto = await api.get('/amostrafoliar', {params: {objID: variável declarada }});
```  
>**OBS:** Necessário passar um **objID** como parâmetro para obter o objeto amaostra foliar. 

### GET ANÁLISE SOLO. 
> #### Retorna todos os registros. 
```sh
let objeto = await api.get('/analisesolo');
```
> #### Retorna um objeto análise solo. 
```sh
let objeto = await api.get('/analisesolo', {params: {objID: variável declarada }});
```
>**OBS:** Necessário passar um **objID** como parâmetro para obter o objeto análise solo.  

> #### Retorna uma lista de análise solo a partir do objID do **GRID**.
```sh
let objeto = await api.get('/analisesolo/getbygrid', {params: {IDGrid: variável declarada }});
```
>**OBS:** Necessário passar um **IDGrid** como parametro para obter a lista de análise solo. 

> #### Retorna uma lista de análise solo a partir do objID da **PROPRIEDADE**.
```sh
let objeto = await api.get('/analisesolo/getanalisebypropriedade', {params: {IDPropriedade: variável declarada }});
```
>**OBS:** Necessário passar um **IDPropriedade** como parâmetro para obter a lista de analise solo. 

> #### Retorna uma lista de análise solo contendo informações dos pontos de coleta. 

>**Importante : " Descrição dos parametros TIPO ".** 
>- "PONTOS": Retorna somente um objeto análise solo contendo informações do ponto e subponto. 
>- "PONTO" : Retorna somente um objeto Análise solo contendo informações somente do ponto. 
>- "PONTOSLS": Retorna uma lista de Análise solo contendo informações do ponto e subponto.
>- "PONTOLS" : Retorna uma lista de Análise solo contendo informações somente do ponto. 

```sh
let objeto = await api.get('/analisesolo/getanalisepontobyarea', {params: {IDArea: variável declarada, Tipo: "PONTOS"}});
```
>**OBS:** Para definir como será o retorno da busca, vai ser necessário a declaração do parâmetro ***"TIPO"*** junto com o objID da área ***("IDArea")***. 

> #### Retorna a média da análise solo a partir do objID do **GRID** e a **Profundidade**.

```sh
let objeto = await api.get('/analisesolo/getmediabygrid', {params: {IDPropriedade: variável declarada, Profundidade: "00 - 20" }});
```  

>**OBS:** O Parâmetro profundidade é do tipo string então temos dois tipos ***"00 - 20"*** ou ***"00 - 40"***.

### GET AREA. 
> #### Retorna todos os registros da tabela área. 
```sh
let objeto = await api.get('/area');
```
> #### Retorna um objeto área. 
```sh
let objeto = await api.get('/area/getarea', {params: {objID: variável declarada }});
```
>**OBS:** Necessário passar um objID como parâmetro para obter o objeto área. 

> #### Retorna todos os registros da área a partir do objID da Propriedade, ***("IDPropriedade")***
```sh
let objeto = await api.get('/area/getbypropriedade', {params: {IDPropriedade: variável declarada }});
```
> #### Retorna todas as áreas da propriedade que possui algum serviço na safra
```sh
let objeto = await api.get('/area/getbypropriedadesafra', {params: {IDPropriedade: variável declarada, IDSafra: variável declarada }});
```  

### GET ÁREA SERVIÇO. 
> #### Retorna todos os registros da tabela área serviço. 
```sh
let objeto = await api.get('/areaservico');
```
> #### Retorna um objeto área serviço. 
```sh
let objeto = await api.get('/areaservico', {params: {objID: variável declarada }});
```
>**OBS:** Necessário passar um objID como parâmetro para obter o objeto da área serviço. 

> #### Retorna um objeto mais detalhado da área serviço. 
```sh
let objeto = await api.get('/areaservico/getfulldesc', {params: {objID: variável declarada }});
```
>**OBS:** Necessário passar um objID como parâmetro para obter o objeto da área serviço. 

> #### Retorna uma lista da área serviço a partir da objID da área e o objID da safra. 
```sh
let objeto = await api.get('/areaservico/getbyareaservico', {params: {IDArea: variável declarada, IDSafra: Variável declarada }});
```
> #### Retorna uma lista da área serviço a partir do objID da propriedade e o objID da safra. 
```sh
let objeto = await api.get('/areaservico/getbypropriedadesafra', {params: {IDPropriedade: variável declarada, IDSafra: variável declarada }});
```

### GET CICLO DE PRODUÇÃO. 
> #### Retorna todos os registros da tabela ciclo de produção. 
```sh
let objeto = await api.get('/cicloproducao');
```
> #### Retorna um objeto ciclo producao. 
```sh
let objeto = await api.get('/cicloproducao', {params: {objID: variável declarada }});
```
>**OBS:** Necessário passar um objID como parâmetro para obter o objeto da área serviço. 

> #### Retorna um objeto mais detalhado da área serviço. 
```sh
let objeto = await api.get('/areaservico/getfulldesc', {params: {objID: variável declarada }});
```
>**OBS:** Necessário passar um objID como parametro para obter o objeto da área serviço. 
Contendo informações dos campos: 
- "IDPropriedade","IDProprietario", "Nome do proprietário","Nome da propriedade","Nome da área","Serviço","GeoJson".

> #### Retorna uma lista de ciclo de produção a partir do objID da área servico é o tipo. 
> **IMPORTANTE:**
- TIPO = "CI" ('CICLO INTERMEDIARIO'). 
- TIPO = "CP" ('CICLO DE PRODUÇÃO'). 
```sh
let objeto = await api.get('/cicloproducao/getallbyareaservico', {params: {IDAreaServico: variável declarada, Type: "CP"}});
```
> **OBS:** O Tipo vai definir qual Ciclo será retornado, "Ciclo intermediario" ou "Ciclo de produção". 

> ####  Retorna uma objeto ciclo de produção a partir do objID e o tipo. 
> **IMPORTANTE:**
- TIPO = "CI" ('CICLO INTERMEDIARIO'). 
- TIPO = "CP" ('CICLO DE PRODUÇÃO'). 
```sh
let objeto = await api.get('/cicloproducao/getallbyareaservico', {params: {objID: variável declarada, Type: "CP"}});
```  
> **OBS:** O Tipo vai definir qual Ciclo será retornado, "Ciclo intermediario" ou "Ciclo de produção". 

### GET CORRETIVO. 

> #### Retorna todos os registros da tabela corretivo. 
```sh
let objeto = await api.get('/corretivo');
```
> #### Retorna um objeto corretivo. 
```sh
let objeto = await api.get('/corretivo', {params: {objID: variável declarada }});
```
>**OBS:** Necessário passar um objID como parâmetro para obter o objeto corretivo. 

> #### Retorna uma lista de corretivos a partir da área serviço, ***("IDAreaServico")***.
```sh
let objeto = await api.get('/corretivo/getbyareaservico', {params: {IDAreaServico: variável declarada }});
```
> #### Retorna uma lista de corretivos a partir de um Grid, ***("IDGrid")***.
```sh
let objeto = await api.get('/corretivo/getbygrid',{ params: { IDGrid: variável declarada }});
```
> #### Retorna uma lista de corretivos a partir da área serviço e a opção selecionada, ***("opcao", "IDAreaServico")***.
```sh
let objeto = await api.get('/corretivo/getbyopcaoareaservico', {params: {ocpao: variável declarada, IDAreaServico: variável declarada }});
```
> #### Retorna uma lista de corretivos a partir de um Grid e uma opção selecionada, ***("opcao", "IDGrid")***.
```sh
let objeto = await api.get('/corretivo/getbyopcaogrid', {params: {ocpao: variável declarada, IDGrid: variável declarada }});
```
> #### Retorna a quantidade de corretivos cadastrados por opções de um Grid, Busca realizada através de um Grid ***("IDGrid")***.
```sh
let objeto = await api.get('/corretivo/getcountcorretivo', {params: {IDGrid: variável declarada }});
```
> #### Retorna a quantidade de corretivos cadastrados pela área toda, essa busca será realizada através de uma Área Serviço ***("IDAreaServico")***.
```sh
let objeto = await api.get('/corretivo/getcountcorretivobyas', {params: {IDAreaServico: variável declarada }});
```

> #### Retorna a quantidade de corretivos cadastrados pela área toda referente ao perfil, busca realizada através de uma Área Serviço ***("IDAreaServico")***.
```sh
let objeto = await api.get('/corretivo/getcountcorretivobyas', {params: {IDAreaServico: variável declarada }});
```

> #### Retorna a média do corretivo através  ***("objID", "opcao", "type")***.
```sh
let objeto = await api.get('/corretivo/getmediacorretivo', {params: {objID: variável declarada, opcao: variável declarada, type: "PERFIL" }});
```
**OBS:** O Type ele deve ser definido em dois tipos **"PERFIL"** ou **"GRID"**.

### PUT CORRETIVO.

> #### Marca a opção válida para Grid.
```sh
api.put("/corretivo/putopcaogridmarcar", objeto completo)
.then(response => {
  // Condição... 
})
```
**OBS:** Necessário passar um objeto completo como parâmetro.

> #### Marca a opção válida para Perfil.
```sh
api.put("/corretivo/putopcarsmarcar", objeto completo)
.then(response => { 
  // Condição... 
})
```
**OBS:** Necessário passar um objeto completo como parâmetro.

> #### Desmarcar a opção válida para Grid.
```sh
api.put("/corretivo/putopcaogriddesmarcar", objeto completo)
.then(response => { 
  // Condição... 
})
```
**OBS:** Necessário passar um objeto completo como parâmetro.

> #### Desmarcar a opção válida para Perfil.
```sh
api.put("/corretivo/putopcaoareaservicomarcar", objeto completo)
.then(response => { 
  // Condição... 
})
```
**OBS:** Necessário passar um objeto completo como parâmetro.


### GET PERMISSION SINC. 
> #### Retorna um valor boolean, caso o usuário não tenha permissão o valor retorna verdadeiro. 
```sh
    api.get("/roles/checkpermission", {params: {role: "View_cult_bt"}})
    .then(res => { 
      if (res.data.length > 0 && res.data[0].Checked === true){
        // Condição. 
      }else{
        // Condição.
      }
    })
```
**OBS:** Essa requisição ela não é assincrona por tanto não será necessário o uso do await, mas sim do **then**.

### GET PERMISSION PARAMS TABLE.   

> Essa lista ela só é atualizada no banco de dados na tabela AspNetRoles caso exista uma nova permissão. 
Então segue a lista com os registros de permissões existente no banco de dados.   

#### PERMISSION CULTURA.

|   Params    | Elemento a ser validado          |
|  ---------  | -------------------------------  |
|  Del_cult   | Botão delete cultura             |  
|  Edit_cult  | Botão Editar cultura             |
|  Novo_cult  | Botão Nova cultura               |
|  View_cult  | Visualização da pagina cultura   |


#### PERMISSION ESTÁGIO FERNOLÔGICO.

| Params    | Elemento a ser validado                     |
| --------  | ------------------------------------------- |
| Del_ef    | Botão delete estágio fernolôgico            |
| Edit_ef   | Botão Editar estágio fernolôgico            | 
| Novo_ef   | Botão Nova estágio fernolôgico              |
| View_ef   | Visualização da página estágio fernolôgico  |

#### PERMISSION EXPORTAÇÃO DE NUTRIENTES.

| Params    | Elemento a ser validado                          |
| --------- | ------------------------------------------------ |
| Del_exn   | Botão delete exportação de nutrientes            |
| Edit_exn  | Botão Editar exportação de nutrientes            |
| Novo_exn  | Botão Nova exportação de nutrientes              |
| View_exn  | Visualização da página exportação de nutrientes  |

#### PERMISSION FAIXA DE TEORES DO SOLO.

| Params   | Elemento a ser validado                        |
| -------- | ---------------------------------------------- |
| Del_fts  | Botão delete faixa de teores do solo           |
| Edit_fts | Botão Editar faixa de teores do solo           |
| Novo_fts | Botão Nova faixa de teores do solo             |
| View_fts | Visualização da página faixa de teores do solo |

#### PERMISSION FAIXA DE TEORES FOLIAR.

| Params   | Elemento a ser validado                       |
| -------- | --------------------------------------------- |
| Del_ftf  | Botão delete faixa de teores foliar           |
| Edit_ftf | Botão Editar faixa de teores foliar           |
| Novo_ftf | Botão Nova faixa de teores foliar             |
| View_ftf | Visualização da página faixa de teores foliar |

#### PERMISSION PADRÃO DE FOLIARES.

| Params | Elemento a ser validado                     |
| -------- | ----------------------------------------- |
| Del_pdf  | Botão delete padrão de foliares           |
| Edit_pdf | Botão Editar padrão de foliares           |
| Novo_pdf | Botão Nova padrão de foliares             |
| View_pdf | Visualização da página padrão de foliares |

#### PERMISSION PADRÃO DA PLANTA.

| Params | Elemento a ser validado                  |
| ------- | --------------------------------------- |
| Del_pp  | Botão delete padrão da planta           |
| Edit_pp | Botão Editar padrão da planta           |
| Novo_pp | Botão Nova padrão da planta             |
| View_pp | Visualização da página padrão da planta |

#### PERMISSION RESTEVA.

| Params | Elemento a ser validado |
| ------ | ------ |
| Del_rst  | Botão delete resteva |
| Edit_rst | Botão Editar resteva  |
| Novo_rst | Botão Nova resteva  |
| View_rst | Visualização da página resteva |

#### PERMISSION VARIEDADE DE CULTURA.

| Params | Elemento a ser validado |
| ------- | ------------------------------------------- |
| Del_vc  | Botão delete variedade de cultura           |
| Edit_vc | Botão Editar variedade de cultura           |
| Novo_vc | Botão Nova variedade de cultura             |
| View_vc | Visualização da página variedade de cultura |

#### PERMISSION ADUBO.

| Params | Elemento a ser validado |
| ------ | ------ |
| Del_ad  | Botão delete adubo |
| Edit_ad | Botão Editar adubo  |
| Novo_ad | Botão Novo adubo  |
| View_ad | Visualização da página adubo |

##### PERMISSION CLIENTE.

| Params | Elemento a ser validado |
| ------ | ------ |
| Del_cl  | Botão delete cliente |
| Edit_ad | Botão Editar cliente  |
| Novo_ad | Botão Novo cliente  |
| View_ad | Visualização da página cliente |

##### PERMISSION FORNECEDOR.

| Params | Elemento a ser validado |
| ------ | ------ |
| Del_forn  | Botão delete fornecedor |
| Edit_forn | Botão Editar fornecedor  |
| Novo_forn | Botão Novo fornecedor  |
| View_forn | Visualização da página fornecedor |

##### PERMISSION LABORATÓRIO.

| Params | Elemento a ser validado |
| ------ | ------ |
| Del_lb  | Botão delete Laboratório |
| Edit_lb | Botão Editar Laboratório  |
| Novo_lb | Botão Novo Laboratório  |
| View_lb | Visualização da página Laboratório |

##### PERMISSION PRODUTO.

|   Params  | Elemento a ser validado        |
| --------- | ------------------------------ |
| Del_prod  | Botão delete produto           |
| Edit_prod | Botão Editar produto           |
| Novo_prod | Botão Novo produto             |
| View_prod | Visualização da página produto |

##### PERMISSION PROPRIEDADE.

|   Params  |   Elemento a ser validado          |
| --------- | ---------------------------------- |
| Del_prop  | Botão delete propriedade           |
| Edit_prop | Botão Editar propriedade           |
| Novo_prop | Botão Novo propriedade             |
| View_prop | Visualização da página propriedade |

##### PERMISSION SAFRA.

|  Params | Elemento a ser validado      |
| ------- | ---------------------------- |
| Del_sf  | Botão delete safra           |
| Edit_sf | Botão Editar safra           |
| Novo_sf | Botão Novo safra             |
| View_sf | Visualização da página safra |

##### PERMISSION TIPO ÁREA DE PLANTIO.

| Params   | Elemento a ser validado                     |
| -------- | ------------------------------------------- |
| Del_tap  | Botão delete tipo área de plantio           |
| Edit_tap | Botão Editar tipo área de plantio           |
| Novo_tap | Botão Novo tipo área de plantio             |
| View_tap | Visualização da página tipo área de plantio |

##### PERMISSION TIPO AMOSTRA.

| Params    | Elemento a ser validado                     |
| --------  | ------------------------------------------- |
| Del_ta    | Botão delete tipo amostra                   |
| Edit_ta   | Botão Editar tipo amostra                   |
| Novo_ta   | Botão Novo tipo amostra                     |
| View_ta   | Visualização da página tipo amostra         |

##### PERMISSION TIPO DE SOLO.

| Params  | Elemento a ser validado              |
| ------- | ------------------------------------ |
| Del_ts  | Botão delete tipo de solo            |
| Edit_ts | Botão Editar tipo de solo            |
| Novo_ts | Botão Novo  tipo de solo             |
| View_ts | Visualização da página  tipo de solo |

##### PERMISSION UNIDADE DE LABORATÓRIO.

| Params   | Elemento a ser validado                       |
| -------  | --------------------------------------------- |
| Del_unl  | Botão delete unidade de laboratório           |
| Edit_unl | Botão Editar unidade de laboratório           |
| Novo_unl | Botão Novo unidade de laboratório             |
| View_unl | Visualização da página unidade de laboratório |

##### PERMISSION UNIDADE DE MEDIDA.

| Params   | Elemento a ser validado                       |
| -------  | --------------------------------------------- |
| Del_unm  | Botão delete unidade de medida                |
| Edit_unm | Botão Editar unidade de medida                |
| Novo_unm | Botão Novo unidade de medida                  |
| View_unm | Visualização da página unidade de medida      |

##### PERMISSION USUÁRIO.

| Params         | Elemento a ser validado  |
| -------------- | -----------------------  |
| Administrador  | Permissão para adm       |
| Usuário        | Permissão para usuário   |
| View_cult_bt   | Botão geral de cultura   |
|View_cad_bt     | Botão geral de cadastro  |

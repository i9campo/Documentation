# CONFIG CONNECTION SIGMA.WEBAPI2 C#.
##### Link de conexão com **API LOCAL** ( https://sigma.sigma.local ).
- Caso a conexão do front-end **"React JS"** não funcione com a **API**, basta acessar o link da **API LOCAL** e ative o certificado SSL.
- Para executar o front-end **"React JS"** pelo visual code, basta clicar na aba **"SCRIPTS"** logo em seguida em **"start-local"**.
- Sé preferir pode executar através de linha de comando **"CMD"** com o seguinte código. (**"npm run start-local"**).
##### Link de conexão com **API REMOTA** ( https://sigma.siccerrado.com.br ).
- Caso a conexão do front-end **"React JS"** não funcione com a **API**, basta acessar o link da **API REMOTA** e ative o certificado SSL.
- Para executar o front-end **"React JS"** pelo visual code, basta clicar na aba **"SCRIPTS"** logo em seguida em **"start-ext"**.
- Sé preferir pode executar através de linha de comando **"CMD"** com o seguinte código. (**"npm run start-ext"**).
##### Para debugar a API
- Necessário executar o projeto WEBAPI pelo visual studio. 
- Para executar o front-end **"React JS"** pelo visual code, basta clicar na aba **"SCRIPTS"** logo em seguida em **"start-api"**.
- Sé preferir pode executar através de linha de comando **"CMD"** com o seguinte código. (**"npm run start-api"**).
# CONFIG PUBLISH PROJECT.
##### Publicando projeto front-end **"React JS"** no IIS.
- Primeiro você tem que executar o comando **"npm run build-ext"** ou clicar na aba **"SCRIPTS"** logo em seguida em **"build-ext"**. 
- Após o primeiro processo ser concluído, o projeto automaticamente vai criar uma pasta chamada **BUILD**.
- Abra a pasta **BUILD** e copie todos os arquivos para dentro do servidor na pasta (F - IIS / SigmaDev). Prontinho processo feito com sucesso.
##### Publicando o projeto WEBAPI no IIS.
- Abra o visual studio, clique em 1 - servicos/ Sigma.WebApi2 com o botão direito, depois em publish ou publicar. 
- Após esse processo só publicar, caso a pasta não esteja respondendo basta editar e colocar o caminho para  (F - IIS/ Sigma).  

# CONFIG CHAMADAS ASSINCRONAS ATRAVÉS DA API ("GET").  

#### GET ADUBO
>Retorna todos os registros de adubo. 
```sh
let objeto = await api.get('/adubo/');
```
>Retorna somente um objeto de adubo. 
>**OBS:** Necessário passar um objID como parametro para obter o objeto adubo. 
```sh
let objeto = await api.get('/adubo', {params: {objID: variável declarada }});
```  

#### GET AMOSTRA FOLIAR. 
>Retorna todos os registros da amostra foliar. 
```sh
let objeto = await api.get('/amostrafoliar/');
```
>Retorna um objeto amostra foliar. 
>**OBS:** Necessário passar um objID como parametro para obter o objeto amaostra foliar. 
```sh
let objeto = await api.get('/amostrafoliar', {params: {objID: variável declarada }});
```  

#### GET ANALISE SOLO. 
>Retorna todos os registros. 
```sh
let objeto = await api.get('/analisesolo/');
```
>Retorna um objeto análise solo. 
>**OBS:** Necessário passar um objID como parametro para obter o objeto análise solo. 
```sh
let objeto = await api.get('/analisesolo', {params: {objID: variável declarada }});
```
>Retorna uma lista de análise solo a partir do objID do **GRID**.
```sh
let objeto = await api.get('/analisesolo/getbygrid', {params: {IDGrid: variável declarada }});
```
>Retorna uma lista de análise solo a partir do objID da **PROPRIEDADE**.
```sh
let objeto = await api.get('/analisesolo/getanalisebypropriedade', {params: {IDPropriedade: variável declarada }});
```
>Retorna uma lista de analise solo contendo informações dos pontos de coleta. 
>**OBS:** Para definir como será o retorno da busca, vai ser necessário a declaração do parametro *"TIPO"* junto com o objID da área. 
>**Importante:** 
>- Tipo : "PONTOS". Retorna somente um objeto análise solo contendo informações do ponto e subponto. 
>- Tipo: "PONTO". Retorna somente um objeto Análise solo contendo informações somente do ponto. 
>- Tipo: "PONTOSLS". Retorna uma lista de Análise solo contendo informações do ponto e subponto.
>- Tipo: "PONTOLS" , Retorna uma lista de Análise solo contendo informações somente do ponto. 

```sh
let objeto = await api.get('/analisesolo/getanalisepontobyarea', {params: {IDArea: variável declarada, Tipo: "PONTOS"}});
```
>Retorna a média da análise solo a partir do objID do **GRID** e **Profundidade**.
```sh
let objeto = await api.get('/analisesolo/getmediabygrid', {params: {IDPropriedade: variável declarada }});
```  

#### GET AREA. 
>Retorna todos os registros da tabela área. 
```sh
let objeto = await api.get('/area/');
```
>Retorna um objeto área. 
>**OBS:** Necessário passar um objID como parametro para obter o objeto área. 
```sh
let objeto = await api.get('/area/getarea', {params: {objID: variável declarada }});
```
>Retorna todos os registros da área a partir do objID da **Propriedade.**
```sh
let objeto = await api.get('/area/getbypropriedade', {params: {IDPropriedade: variável declarada }});
```
>Retorna todas as áreas da propriedade que possui algum serviço na safra
```sh
let objeto = await api.get('/area/getbypropriedadesafra', {params: {IDPropriedade: variável declarada, IDSafra: variável declarada }});
```  

#### GET AREA SERVICO. 
>Retorna todos os registros da tabela área serviço. 
```sh
let objeto = await api.get('/areaservico/');
```
>Retorna um objeto área serviço. 
>**OBS:** Necessário passar um objID como parametro para obter o objeto da área serviço. 
```sh
let objeto = await api.get('/areaservico', {params: {objID: variável declarada }});
```
>Retorna um objeto mais detalhado da área serviço. 
>**OBS:** Necessário passar um objID como parametro para obter o objeto da área serviço. 
```sh
let objeto = await api.get('/areaservico/getfulldesc', {params: {objID: variável declarada }});
```
>Retorna uma lista da área serviço a partir da objID da área e o objID da safra. 
```sh
let objeto = await api.get('/areaservico/getbyareaservico', {params: {IDArea: variável declarada, IDSafra: Variável declarada }});
```
>Retorna uma lista da área serviço a partir do objID da propriedade e o objID da safra. 
```sh
let objeto = await api.get('/areaservico/getbypropriedadesafra', {params: {IDPropriedade: variável declarada, IDSafra: variável declarada }});
```

#### GET CICLO DE PRODUÇÃO. 
>Retorna todos os registros da tabela ciclo de produção. 
```sh
let objeto = await api.get('/cicloproducao/');
```
>Retorna um objeto ciclo producao. 
>**OBS:** Necessário passar um objID como parametro para obter o objeto da área serviço. 
```sh
let objeto = await api.get('/cicloproducao', {params: {objID: variável declarada }});
```
>Retorna um objeto mais detalhado da área serviço. 
>**OBS:** Necessário passar um objID como parametro para obter o objeto da área serviço. 
```sh
let objeto = await api.get('/areaservico/getfulldesc', {params: {objID: variável declarada }});
```
>Retorna uma lista de ciclo de produção a partir do objID da área servico é o tipo. 
> **OBS:** O Tipo vai definir qual Ciclo será retornado, "Ciclo intermediario" ou "Ciclo de produção". 
> **IMPORTANTE:**
- TIPO = "CI" ('CICLO INTERMEDIARIO'). 
- TIPO = "CP" ('CICLO DE PRODUÇÃO'). 
```sh
let objeto = await api.get('/cicloproducao/getallbyareaservico', {params: {IDAreaServico: variável declarada, Type: "CP"}});
```
>Retorna uma objeto ciclo de produção a partir do objID e o tipo. 
> **OBS:** O Tipo vai definir qual Ciclo será retornado, "Ciclo intermediario" ou "Ciclo de produção". 
> **IMPORTANTE:**
- TIPO = "CI" ('CICLO INTERMEDIARIO'). 
- TIPO = "CP" ('CICLO DE PRODUÇÃO'). 
```sh
let objeto = await api.get('/cicloproducao/getallbyareaservico', {params: {objID: variável declarada, Type: "CP"}});
```  

#### GET PERMISSION SINC. 
>Retorna um valor boolean, caso o usuário não tenha permissão o valor retorna verdadeiro. 
**OBS:** Essa requisição ela não é assincrona por tanto não será necessário o uso do await, mas sim do **then**.
```sh
    api.get("/roles/checkpermission", {params: {role: variável}})
    .then(res => { 
      if (res.data.length > 0 && res.data[0].Checked === true){
        // Condição. 
      }else{
        // Condição.
      }
    })
```



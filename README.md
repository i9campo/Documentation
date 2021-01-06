# SIGMA WEBAPI CONFIG CONECTION. 
Link para conexão com API LOCAL(https://sigma.sigma.local).
- Comando utilizado no visual code na aba **SCRIPTS**("start-local").
- Comando de linha via CMD ("npm run start-local").

Link para conexão com API Remotamente ("https://sigma.siccerrado.com.br"). 
- Comando utilizado no visual code na aba **SCRIPTS**(**"start-ext"**).
- Comando de linha via CMD("npm run start-ext").

Link para conexão com API Executada pelo Visual studio ("https://localhost:40080").
- Comando utilizado no visual code na aba **SCRIPTS**(**"start-api"**).
- Comando de linha via CMD("npm run start-api").

# WEBAPI CONFIG REACT JS GET'S (ASYNC).
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
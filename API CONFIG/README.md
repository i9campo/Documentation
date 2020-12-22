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
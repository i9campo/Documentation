// function Register(values, actions,props){
//     api
//     .post("/cicloproducao", values)
//     .then(response => {
//         props.updateGrd();       
//         if (response.data.Errors.length > 0) {
//             this.setState({ errors: response.data.Errors });
//         } else {
//                 toast.success("Ciclo intermediário cadastrado com sucesso!", {
//                 position: toast.POSITION.BOTTOM_RIGHT,
//             });        
//             actions.setStatus({msg: "OK"})
//         }
//     })
//     .catch(error => {
//     toast.error("Não foi possível estabelecer uma conexão com o servidor", {
//         position: toast.POSITION.TOP_RIGHT, 
//     });
//     });
// }

// function Update(values, actions, props){
//     api
//     .put("/cicloproducao/" + values.objID, values)
//     .then(response => {
//         props.updateGrd(); 
//         if (response.data.Errors.length > 0) {
//             this.setState({ errors: response.data.Errors });
//         } else {
//             toast.success("Cadastro atualizado com sucesso!", {
//             position: toast.POSITION.BOTTOM_RIGHT,});
//             actions.setStatus({msg: "OK"})
//         }
//     })
//     .catch(error => {
//         toast.error("Não foi possível estabelecer uma conexão com o servidor", {
//             position: toast.POSITION.TOP_RIGHT, 
//         });
//     });
// }
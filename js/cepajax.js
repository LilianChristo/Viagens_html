const cep = document.querySelector("#cep");
const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}
cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "") // remove o - do cep
    const options = {
        method: 'GET', //verbo protocolo HTTP
        mode: 'cors', //  solicitar acesso vindo de servidor diferente
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json`, options)
        .then(response => {
            response.json()
            .then(data => showData(data))
        })
        .catch(e=> console.log('Deu erro'+e.message))
})


//Crie um array usuarios com 4 objetos, cada um com:

//nome
//email
//idade
//Mostre apenas os nomes dos usuários maiores de 18 anos.

const Usuarios = [
    {
        nome:"Juan Lopes",
        email:"juanlopes@fict.com",
        idade: 22
    },
     {
        nome:"Nathalia Vit",
        email:"nathalia@fict.com",
        idade: 16
    },
     {
        nome:"Arthur Ronald",
        email:"artronald@fict.com",
        idade: 17
    },
     {
        nome:"Marcela Yoshida",
        email:"celayoshi@fict.com",
        idade: 21
    }

]
for (let i = 0; i < Usuarios.length; i++) {
    const maioresId = Usuarios[i];
    if (maioresId.idade>=18) {
        
        console.log(maioresId.nome);

    }
    

}


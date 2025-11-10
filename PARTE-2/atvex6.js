//Crie um array pedidos com 3 objetos:

//produto
//quantidade
//valorUnitario
//Calcule e mostre o valor total de cada pedido (quantidade × valorUnitario).

const pedidos = [
    {
        produto:"Coxinha",
        quantidade: 2 ,
        valorUnitario: 3
    },
     {
        produto:"Coca Cola",
        quantidade: 1 ,
        valorUnitario: 6
    },
     {
        produto:"Trident",
        quantidade: 1 ,
        valorUnitario: 3
    },
]
for (let i = 0; i < pedidos.length; i++) {
    
    const valorTotal = pedidos[i].quantidade * pedidos[i].valorUnitario;
    console.log("---------------",pedidos[i].produto,"---------------");
    console.log(valorTotal);
    

    
}
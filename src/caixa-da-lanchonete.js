import { menu, extras } from "./menu";

class CaixaDaLanchonete {   
    
    calcularValorDaCompra(metodoDePagamento, itens) {

        
        if(!['dinheiro', 'debito', 'credito'].includes(metodoDePagamento)){
            return "Forma de pagamento inválida!"
        }

        if(!itens.length){
            return "Não há itens no carrinho de compra!"
        }

        let valorTotal = 0
        const itensPrincipais = []
        const itensExtras = []

        for(const itemPedido of itens){
            const [item, quantidade] = itemPedido.split(",")
            const quantidadeNumero = Number(quantidade)

            if(quantidadeNumero === 0){
                return "Quantidade inválida!"
            }

            const itemPrincipal = menu[item]
            const itemExtra = extras[item]

            if (itemPrincipal) {
                itensPrincipais.push(itemPrincipal);
                valorTotal += itemPrincipal.valor * quantidadeNumero;
              } else if (itemExtra) {
                const itemPrincipalExiste = itensPrincipais.some(
                  (itemMenu) => itemMenu === itemExtra.itemPrincipal
                );
                if (!itemPrincipalExiste) {
                  return "Item extra não pode ser pedido sem o principal";
                }
                itensExtras.push(itemExtra);
                valorTotal += itemExtra.valor * quantidadeNumero;
              } else {
                return "Item inválido!";
              }
            }

        if(metodoDePagamento === "dinheiro"){
            valorTotal *= 0.95
        } else if (metodoDePagamento === "credito"){
            valorTotal *= 1.03
        }

        return `R$ ${valorTotal.toFixed(2).replace(".", ",")}`

    }
}

export { CaixaDaLanchonete };




/* A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
{
  tech: 'nomeTecnologia',
  name: name,
}
Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código.*/

const techListArray = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']

const techListName = 'Lucas'

function techList(array, name) {
  if(array.length === 0) return "Vazio!"
  let techListArray = []
  array
    .sort()
    .forEach(element => {
    techListArray.push({
      tech: element,
      name,
    })
  });
  return techListArray;
}

console.log(techList(techListArray, techListName));

module.exports = techList;

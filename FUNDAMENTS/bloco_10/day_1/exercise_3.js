/*  A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. */

const hydrate = (string) => {
  let count = 0
  string
    .match(/\d/g)
    .forEach(element => {
    count += Number(element);
  });
  const waterCounting = (count === 1) ? `${count} copo de água` : `${count} copos de água`
  return waterCounting
};

module.exports = hydrate

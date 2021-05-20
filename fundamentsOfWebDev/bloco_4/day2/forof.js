let nomes = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of nomes){
  console.log(name);
}

for (let name of nomes) {
  for (let index of name) {
    console.log(index);
  }
}
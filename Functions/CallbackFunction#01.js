function funcaoDeOrdemMaior(cb) {
  cb();
  console.log("Função de ordem maior invocada");
}

function meuCallback() {
  console.log("Callback invocado");
}

funcaoDeOrdemMaior(meuCallback);

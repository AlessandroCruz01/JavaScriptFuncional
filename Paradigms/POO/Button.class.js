class Botao {
  acao() {
    return "Botão pressionado";
  }
}

class BotaoSalvar extends Botao {
  acao() {
    return "Salvando dados...";
  }
}

class BotaoCancelar extends Botao {
  acao() {
    return "Cancelando operação...";
  }
}

const botoes = [new BotaoSalvar(), new BotaoCancelar()];
botoes.forEach((btn) => console.log(btn.acao()));

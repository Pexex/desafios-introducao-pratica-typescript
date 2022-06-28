"use strict";
var Profissao;
(function (Profissao) {
    Profissao["Atriz"] = "Atriz";
    Profissao["Padeiro"] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;
let pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;
let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoas = [pessoa1, pessoa2, pessoa3, pessoa4];
for (let i = 0; i < pessoas.length; i++) {
    console.log("- ", pessoas[i].nome, ", ", pessoas[i].idade, ", ", pessoas[i].profissao);
}

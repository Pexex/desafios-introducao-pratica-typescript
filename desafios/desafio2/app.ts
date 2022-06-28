type idade = string | number;

enum Profissao {
    Atriz = "Atriz",
    Padeiro = "Padeiro"
}

interface Pessoa {
    nome: string;
    idade: idade ;
    profissao: Profissao;
}

let pessoa1 = {} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz

let pessoa2 = {} as Pessoa
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;

let pessoa3: Pessoa = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoas: Pessoa[] = [pessoa1, pessoa2, pessoa3, pessoa4];

for(let i = 0; i < pessoas.length; i++){
    console.log("- ", pessoas[i].nome, ", ", pessoas[i].idade, ", ", pessoas[i].profissao);
}




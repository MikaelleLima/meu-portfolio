// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando como ${this.cargo}.`);
    }
}

// Classe Gerente, herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

// Classe Desenvolvedor, herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Criando instâncias de Gerente e Desenvolvedor
const gerente = new Gerente('Ana', 45, 'Gerente', 'Vendas');
const desenvolvedor = new Desenvolvedor('Carlos', 30, 'Desenvolvedor', 'JavaScript');

// Chamando os métodos das instâncias
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();

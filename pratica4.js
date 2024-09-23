// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

// Classe Gerente, herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor, herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para exibir erros na página
function exibirErro(mensagem) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = mensagem;
    errorDiv.style.color = 'red';
}

// Função para manipular o envio do formulário
document.getElementById('formFuncionario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    try {
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const cargo = document.getElementById('cargo').value;
        
        if (!nome || isNaN(idade)) {
            throw new Error('Todos os campos devem ser preenchidos corretamente.');
        }

        let funcionario;
        if (cargo === 'Gerente') {
            const departamento = document.getElementById('departamento').value;
            if (!departamento) {
                throw new Error('O departamento deve ser preenchido para o cargo de Gerente.');
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
            exibirResultado(funcionario.seApresentar(), funcionario.gerenciar());
        } else if (cargo === 'Desenvolvedor') {
            const linguagem = document.getElementById('linguagem').value;
            if (!linguagem) {
                throw new Error('A linguagem de programação deve ser preenchida para o cargo de Desenvolvedor.');
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
            exibirResultado(funcionario.seApresentar(), funcionario.programar());
        }
    } catch (error) {
        exibirErro(error.message);
    }
});

// Função para exibir o resultado na página
function exibirResultado(apresentacao, tarefa) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${apresentacao}</p><p>${tarefa}</p>`;
    document.getElementById('error').textContent = ''; // Limpa o erro anterior
}

// Função para mostrar ou esconder campos do formulário
document.getElementById('cargo').addEventListener('change', function() {
    const cargo = this.value;
    const departamentoField = document.getElementById('departamentoField');
    const linguagemField = document.getElementById('linguagemField');
    
    if (cargo === 'Gerente') {
        departamentoField.style.display = 'block';
        linguagemField.style.display = 'none';
    } else if (cargo === 'Desenvolvedor') {
        departamentoField.style.display = 'none';
        linguagemField.style.display = 'block';
    }
});


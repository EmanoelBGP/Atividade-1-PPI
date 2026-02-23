import express from 'express';

const app= express(); //Dando um servidor http expresso
const porta = 3000;
const host = '0.0.0.0';
app.listen (porta, ()=>{
    console.log (`Servidor ligado em http://localhost:${porta}`);

});
let salario_novo;
 let sexo_exib;
app.get('/', (req, res)=>{

    const sexo=req.query.sexo;
    const anodecontratacao=Number(req.query.anodecontratacao);
    let salario=Number(req.query.salario);
    const matricula=Number(req.query.matricula);
    const idade=Number(req.query.idade);
    //primeira faixa etaria
    if(idade>17 && idade<40 && sexo.toLowerCase()=="m" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025<11){
        salario_novo = (salario - 10) * 1.10;
        sexo_exib="Masculino";
    }
    else if(idade>17 && idade<40 && sexo.toLowerCase()=="m" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025>10){
        salario_novo = (salario + 17) * 1.08;
        sexo_exib="Masculino";
    }
    else if(idade>17 && idade<40 && sexo.toLowerCase()=="f" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025<11){
        salario_novo = (salario - 11) * 1.10;
        sexo_exib="Feminino";
    }
    else if(idade>17 && idade<40 && sexo.toLowerCase()=="f" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025>10){
        salario_novo = (salario + 16) * 1.08;
        sexo_exib="Feminino";
    }

    //segunda faixa etaria
    else if(idade>39 && idade<70 && sexo.toLowerCase()=="m" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025<11){
        salario_novo = (salario - 5) * 1.08;
        sexo_exib="Masculino";
    }
    else if(idade>39 && idade<70 && sexo.toLowerCase()=="m" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025>10){
        salario_novo = (salario + 15) * 1.08;
        sexo_exib="Masculino";
    }
    else if(idade>39 && idade<70 && sexo.toLowerCase()=="f" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025<11){
        salario_novo = (salario - 7) * 1.10;
        sexo_exib="Feminino";
    }
    else if(idade>39 && idade<70 && sexo.toLowerCase()=="f" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025>10){
        salario_novo = (salario + 14) * 1.10;
        sexo_exib="Feminino";
    }

    //terceira faixa etaria
    else if(idade>69 && sexo.toLowerCase()=="m" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025<11){
        salario_novo = (salario - 15) * 1.15;
        sexo_exib="Masculino";
    }
    else if(idade>69 && sexo.toLowerCase()=="m" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025>10){
        salario_novo = (salario + 13) * 1.15;
        sexo_exib="Masculino";
    }
    else if(idade>69 && sexo.toLowerCase()=="f" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025<11){
        salario_novo = (salario - 17) * 1.17;
        sexo_exib="Feminino";
    }
    else if(idade>69 && sexo.toLowerCase()=="f" && salario>0 && anodecontratacao>1960 && anodecontratacao-2025>10){
        salario_novo = (salario + 12) * 1.17;
        sexo_exib="Feminino";
    }

    res.send(`
    
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <title>Título da página</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h5> Coloque suas informacoes na URL<br>Exemplo: http://localhost:3000/?sexo=M&anodecontratacao=2020&salario=1800.50&matricula=3022&idade=19<br>(No sexo: M = masculino. F = Feminino)</h5>
                <hr><h2>Informacoes do funcionario:</h2>Sexo:${sexo_exib}<br>Ano de contratacao: ${anodecontratacao}<br> Salario: ${salario}<br> Matricula: ${matricula}
                <br>Idade: ${idade}<hr><h2> Salario reajustado: R$${salario_novo.toFixed(2)}</h2>
            </body>
        </html>
    `);


});

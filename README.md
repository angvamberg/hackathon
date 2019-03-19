# Hackathon 2019
Projetos desenvolvidos ao longo do treinamento Hackathon 2019.

## Tecnologias Projeto Final (/projeto-backend e /projeto-frontend)
O projeto final utiliza Spring no backend e angularJs no frontend.
 
## Versão (Git Flow)
O projeto final utiliza Git Flow para manter as versões.  
Foram criadas features, releases e tags  para o versionamento.
 
## Banco de dados (MySql)
O projeto utiliza banco de dados MySql. Configurações utilizadas:  
- Login e senha: root  
- Database necessária: hackathon
 
## Backend (Spring)
O projeto utiliza spring.  
- Na resposta dos métodos @Post é devolvido o objeto criado dentro do body e a URI para acesso desse objeto no cabeçalho para busca individual.  
- Caso haja alguma quebra de regra de negócio é retornada uma mensagem de erro seja pelo bean validation ou pela exceção lançada, com status code diferente de sucesso.
- Utilização de própria Exception 
- Há a utilização de arquivo ValidationMessages para beanValidation
 
## Frontend (AngularJs)
O projeto utiliza angularJs.  
- Há a exibição de mensagem de erro/sucesso na tela de acordo com as requisições feitas.  
- Há 3 páginas na aplicação: Home, Lista/Busca, Cadastro
- O cadastro de Carteira e Moeda pode ser realizado tanto pela página de busca quanto na página separada de cadastro
- Há 2 services: CarteiraService e MoedaService

## Validações
Por se tratarem de regras de negócio (podendo haver mais de um cliente), as validações foram feitas no backend através da camada de serviço juntamente com bean validations, porém, há também validações no frontend para que não sejam feitas requisições desnecessárias.

## Experiência com o Hackathon/Treinamento e dificuldades
### Treinamento
Wesley trouxe dicas e ensinamentos muito importantes para o principal cenário: o profissional. Foram expostos problemas e situações corriqueiras na vida dos desenvolvedores, e tecnologias/nomenclaturas necessárias para o trabalho. Além disso, mostrou-se bastante prestativo e paciente com os participantes durante o treinamento.
### Projeto Final
Desenvolver o projeto final foi de grande valor e experiência, pois é na hora do desenvolvimento que surgem VÁRIOS erros e problemas que não nos deparamos com apenas estudo.  
Aprender a utilização do GitFlow foi uma ótima forma de versionar/manter o projeto e com certeza fará parte dos meus próximos repositórios.  
Construir a API no BackEnd foi a parte mais interessante do projeto. Tentei construí-la por inteiro antes de passar para o frontend e foi realmente divertido (quando funciona kk), mesmo de início testando apenas pelo Postman. A princípio, sem grandes dificuldades.  
Quanto ao frontend, o que me serviu de grande aprendizado é a parte de debuggar no navegador que pra mim era algo desconhecido.  
  Em suma, uma ótima experiência!

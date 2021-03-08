Aplicação para cálculo de chamadas com ddd's e planos

**ORGANIZAÇÃO DOS DOCUMENTOS**

node_modules

public -> index.html

src ->
  _images -> imagens para uso no app
  class -> classes com métodos para calcular valores dos planos
  components -> componentes criados para a aplicação (header / form / receiveData)
  functions -> funções chamadas através da receive data que instanciam a class específica, e retornam uma <table></table> com os dados
  index.css -> todos os estilos do app
  index.js -> arquivo principal, com estrutura do app e renderização no DOM

.gitignore
package.json
README.md
yarn-error.log
yarn.lock

**INFORMAÇÔES**

- Valores -

org - dest  - Sem Plano($/min) - Plano 30  - Plano 60  - Plano 120

11  -  16   -      1.90        -   
11  -  17   -      1.70        -   
11  -  18   -      0.90        -   
16  -  11   -      2.90        -   
17  -  11   -      2.70        -   
18  -  11   -      1.90        -   


Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até
um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos
excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são
FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).


**Issues**

--Layout--
  [X] - Logo/header
  [X] - Form para captação de dados
  [X] - Table para exibição de dados ao enviar form

--Captação de dados--
Function dataReceive() -> Recebe os dados e instacia a classe Calculate() -> retornando os valores em html (table, tr, th, td)
  [X] - Recebimento de dados
  [X] - Chamada para função especifica da opção


--Geração de Tabela para Informação de dados--
Classe com os métodoS
  [X] - Criação de propriedades da classe
  [X] - Criação de método para calcular valor e gerar tableHTML (innerHTML em div.calculate_table)

Funções Chamadas pelo dataReceive()
  [X] - Criação de instância Calculate
  [X] - Passagem de parâmetros para método calculateValue()
  [X] - Criação html com resultados do método e retorno do mesmo

--Table HTML--

  `<table>
    <tr>
      <th>Org DDD</th>
      <th>Dest DDD</th>
      <th>Minutos </th>
      <th>Sem Plano</th>
      <th>Plano 30</th>
      <th>Plano 60</th>
      <th>Plano 120</th>
    </tr>
    <tr>
      <td>${org_ddd}</td>
      <td>${dest_ddd[i]}</td>
      <td>${minutes}</td>
      <td>${sem_plano}</td>
      <td>${plano_30}</td>
      <td>${plano_60}</td>
      <td>${plano_120}</td>
    </tr>
  </table>`
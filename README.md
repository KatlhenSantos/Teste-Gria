Foi realizado um teste automatizado no site da GRIA, na página https://www.gria.io/oportunidades. O teste realiza possue dois cenários, onde realiza uma busca por vagas em dois estados/cidade para o cargo "Operador de Caixa", no estado Amazonas não há vaga para esse cargo e com isso volta a pesquisar novamente. A nova busca é realizada no estado do Rio de Janeiro onde é encontado uma vaga. Com isso, o sistema inicia o processo de cadatro de novo usuário caso não tenha cadastro no site. Se o usuário tiver cadastro ele é direcionado ao preenchimento do perfil com dados pessoais. 

Ferramenta utilizadas nesse teste:

Cypress
Javascrip, Node.Js

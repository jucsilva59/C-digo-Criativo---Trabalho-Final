# Fluxo - Código  Criativo

FLUXO explora a relação entre movimento, transformação e continuidade, partindo do rato como elemento de interação. A proposta consiste numa composição visual abstrata, constituída por linhas orgânicas que se deformam e movimentam em resposta aos gestos do utilizador. A ideia central é transformar um movimento físico, aparentemente simples, numa experiência visual dinâmica. Tal como acontece num fluxo de água, as formas nunca permanecem exatamente iguais: adaptam-se, ondulam e deixam rastos da sua passagem.

Ingredientes: 
Input — Movimento do rato
O principal elemento de interação é o movimento do rato. São consideradas duas variáveis: a sua posição horizontal e vertical e a velocidade com que se desloca. Desta forma, o utilizador não controla diretamente as linhas, mas influencia o seu comportamento.

Transformação — Deformação e movimento orgânico
A posição do rato altera a disposição das linhas, enquanto a velocidade influencia a intensidade da sua ondulação. Através das funções `sin()` e `cos()`, são criados movimentos contínuos e oscilatórios. A função `lerp()` permite suavizar a resposta ao movimento do rato, evitando alterações demasiado bruscas. A composição é constituída por duas camadas: sete linhas principais, mais marcadas, e cinco linhas secundárias, mais finas e transparentes. Esta sobreposição procura criar profundidade e uma maior sensação de fluidez.

Output — Composição visual animada
O resultado é uma composição digital abstrata, apresentada num fundo azul-escuro e construída através de uma paleta de turquesa, azul, lilás e coral. A utilização de transparência no fundo permite conservar temporariamente os movimentos anteriores, criando rastos visuais que reforçam a ideia de continuidade.

Linguagem
A linguagem visual procura aproximar-se de fenómenos naturais, nomeadamente o movimento da água e das correntes. As linhas curvas, as oscilações e a sobreposição de cores contribuem para uma estética orgânica, em oposição a uma composição rígida e geométrica. A escolha cromática procura transmitir tranquilidade, movimento e profundidade, enquanto o contraste com o fundo escuro permite destacar as diferentes camadas.

FLUXO pretende que cada utilizador produza uma experiência visual ligeiramente diferente através dos seus próprios movimentos. Um gesto lento origina uma deformação mais subtil, enquanto um movimento rápido intensifica a ondulação das linhas. Desta forma, a interação deixa de ser apenas uma resposta a um comando e passa a fazer parte da própria construção visual. O movimento do utilizador transforma-se na matéria-prima da composição.


Utilização de Inteligência Artificial

Durante o desenvolvimento do projeto, foi utilizada a ferramenta ChatGPT como apoio à estruturação da proposta e ao desenvolvimento do código em p5.js. A ferramenta foi utilizada para esclarecer o funcionamento de determinadas funções, explorar possibilidades de interação e resolver dificuldades técnicas que surgiram ao longo do processo. O código foi sendo testado, analisado e ajustado de forma progressiva, permitindo compreender a relação entre os diferentes elementos e as suas consequências visuais. A utilização desta ferramenta funcionou como um apoio ao processo de aprendizagem e experimentação, mantendo-se a exploração, as decisões visuais e a validação do resultado integradas no desenvolvimento do projeto.

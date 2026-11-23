---
title: 10 · O que pode dar errado
date: 2026-11-23
description: "Onde este estudo pode estar errado"
tags: [entender]
---

Esta página existe porque um estudo que só mostra o que deu certo não é um estudo. Aqui está o que sabemos que está otimista, e o que não sabemos.

## 1. O método se olhou no espelho
É a limitação mais séria e não tem conserto com os dados que temos.

A regra foi escolhida comparando várias alternativas **no período de teste**. Até aí, correto: é para isso que o teste serve. Mas a partir do momento em que olhamos aquele resultado para decidir qual regra usar, **aquele período deixou de ser cego** — ele participou da escolha.

Então a vantagem medida é um **teto**, não uma expectativa. Quanto dela sobra para frente, só um terceiro pedaço de tempo responde, e ele ainda não aconteceu.

## 2. O modelo supõe que o stop é executado no preço do stop
Toda perda deste estudo é uma perda no stop. O simulador recebe o resultado de cada operação já com o stop respeitado, e nunca pergunta se havia alguém do outro lado naquele preço.

Em mercado normal isso é razoável. Em pânico, não. Quando o preço anda sozinho, a ordem de stop vira ordem a mercado e é executada onde der. **A conta é uma regra de três, e ela não perdoa:** se o movimento contra a posição for *N* vezes o tamanho do stop planejado, a perda é *N* vezes o risco planejado.

Com o risco de 2,23% por operação da carteira recomendada, um movimento de 10 vezes o stop custa cerca de 22% do patrimônio **numa única operação**. De 20 vezes, 45%.

Isso não é hipótese de laboratório. Em **26 de outubro de 2026** a B3 acionou o circuit breaker e suspendeu o mercado à vista por 30 minutos; o Ibovespa chegou a passar de 15% de queda no mesmo pregão. Nos futuros, a B3 ampliou o limite de oscilação diária do índice de 10% para 15% e depois para 20%, incluindo os minicontratos — ou seja, foi permitido ao contrato andar 20% num dia. Antes disso houve 18 de maio de 2017 e cinco acionamentos em março de 2020.

**Nada disso está no modelo.** O histórico usado aqui contém os dias em que esses eventos aconteceram, com os resultados que eles produziram — mas o simulador não tem como representar um stop que não executa, e um período de cinco anos contém poucos episódios desses para estimar qualquer coisa. O risco por operação que você escolher multiplica esse dia na mesma proporção em que multiplica todos os outros.

## 3. O teto de contratos distorce o que você vê
O modelo limita cada ordem a 2.000 contratos, porque é o que o livro de ofertas absorve. Essa trava é realista, mas ela **muda o que os números significam** — e isso precisa estar dito.

Hoje, 7 das 21 carteiras passam mais de um terço das operações com o lote travado no teto. Quando o lote trava, a posição para de crescer com o capital: o ano rende menos em % e cai menos em % não porque a carteira melhorou, mas porque a aposta encolheu em relação ao patrimônio.

**Duas consequências práticas.** A primeira: os primeiros anos de cada carteira, na [etapa 8](ano-a-ano), são muito maiores que os últimos — é o período em que o capital ainda é pequeno e nada freia a composição. A segunda, mais séria: o capital final de cada carteira pressupõe que você atravesse toda essa escalada, de R\$ 100.000 até milhões, com o mesmo teto. É um caminho, não uma previsão.

Houve aqui um defeito pior, já corrigido, que fica registrado porque a correção mudou todos os números: o risco de cada carteira era calibrado medindo a queda **na conta composta com teto**. Como o teto amortece a queda da fase final, o calibrador liberava mais risco justamente para as carteiras que saturam o teto mais cedo — a correlação medida entre "% de operações no teto" e "risco liberado" era de **+0,87**. A promessa de cair 40% valia para quem já tinha milhões e não para quem começa com R\$ 100.000. Hoje a calibração é feita numa série de posição proporcional pura, sem teto e sem lote inteiro, que é invariante de escala; o teto entra só no capital reportado, onde ele é sempre conservador.

## 4. A derrapagem de contas grandes não está no modelo
O cálculo supõe que uma ordem de 2.000 contratos é executada no preço do sinal. Na prática, ordem grande move o preço contra quem a envia — e isso se chama derrapagem.

Há 15 pontos de custo por operação já descontados de todo resultado deste site, o que cobre corretagem, emolumentos e uma derrapagem pequena. **Não cobre a derrapagem de uma ordem de centenas de contratos.** Toda a parte do resultado que vem de conta grande está otimista por um valor que não medimos.

## 5. O risco calibrado no passado entrega mais queda que o prometido
Isto está medido, e o número é feio:

|  |  |
|---|---|
| Risco calibrado no treino | 1,55% |
| Queda que ele prometia | -40% |
| Queda que ele entregou | **-48%** |
| Erro | **1,19×** |
| Carteiras que furaram 50% | 7 de 20 |

A correção é direta: **calibre para 34% se quer viver 40%.** Mas note que esse fator de 1,19× também foi medido no mesmo período que tudo o mais — ele próprio pode estar otimista.

## 6. Os números grandes não são expectativa
A primeira carteira do ranking mostra R\$ 100.000 virando R\$ 33.191.083 em 5,1 anos. **Esse número não é uma previsão.** É o que este período específico produziu sob estas regras, com as três ressalvas acima todas valendo ao mesmo tempo.

O número que viaja bem do passado para o futuro, neste estudo, é **a queda** — e ela viaja com 1,19× de piora. O lucro não tem nada parecido com isso: a etapa [5 · O que o passado consegue prever](o-que-o-passado-preve) mostra que o retorno quase não se mantém de um período para o outro.

## 7. Cinco anos é pouco
Todo este estudo cabe em 5,1 anos e 1.260 dias de bolsa. Nesse intervalo o mini índice não passou por tudo que ele pode passar. Um regime de mercado que não apareceu aqui pode quebrar setups que neste período pareceram sólidos — e nenhuma conta feita sobre estes dados consegue avisar sobre isso.

## 8. A cauda é uma estimativa, não um histórico
A **pior queda** é o que aconteceu de fato. A **cauda** é diferente: embaralhamos as mesmas operações em 300 ordens diferentes e olhamos o pior ano entre vinte. Serve para enxergar o azar que não aconteceu.

Mas embaralhar **desfaz o agrupamento das perdas** — e perdas agrupadas são justamente o que produz as quedas mais fundas. Por isso a cauda pode sair mais otimista que a realidade em carteiras cujos erros vêm em sequência. Ela também é calculada com posição proporcional, não com contratos inteiros como o resto do site.

## E o que não é limitação

> [!success] O que sustenta este estudo
> **As regras dos setups não foram ajustadas aos nossos dados.** Vêm prontas de um vídeo ou livro, e são convertidas sem liberdade de escolha.
>
> **Todo resultado desconta 15 pontos de custo por operação.** Nenhum número deste site é bruto.
>
> **Os contratos são inteiros.** Não há meio contrato em lugar nenhum, e uma conta que zera, zera — o cálculo não sobrevive com uma fração.
>
> **Página e planilha saem do mesmo cálculo.** Não existe aqui um número que a planilha não reproduza.
>
> **As tentativas que falharam estão na etapa [6](o-metodo).**

---

← **anterior:** [9 · Operação a operação](extrato)  

[a trilha toda](./) · [glossário](glossario)

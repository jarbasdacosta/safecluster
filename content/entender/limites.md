---
title: 9 · O que pode dar errado
date: 2026-11-14
description: "Onde este estudo pode estar errado"
tags: [entender]
---

Esta página existe porque um estudo que só mostra o que deu certo não é um estudo. Aqui está o que sabemos que está otimista, e o que não sabemos.

## 1. O método se olhou no espelho
É a limitação mais séria e não tem conserto com os dados que temos.

A regra foi escolhida comparando várias alternativas **no período de teste**. Até aí, correto: é para isso que o teste serve. Mas a partir do momento em que olhamos aquele resultado para decidir qual regra usar, **aquele período deixou de ser cego** — ele participou da escolha.

Então a vantagem medida é um **teto**, não uma expectativa. Quanto dela sobra para frente, só um terceiro pedaço de tempo responde, e ele ainda não aconteceu.

## 2. A derrapagem de contas grandes não está no modelo
O cálculo supõe que uma ordem de 1.000 contratos é executada no preço do sinal. Na prática, ordem grande move o preço contra quem a envia — e isso se chama derrapagem.

Há 15 pontos de custo por operação já descontados de todo resultado deste site, o que cobre corretagem, emolumentos e uma derrapagem pequena. **Não cobre a derrapagem de uma ordem de centenas de contratos.** Toda a parte do resultado que vem de conta grande está otimista por um valor que não medimos.

## 3. O risco calibrado no passado entrega mais queda que o prometido
Isto está medido, e o número é feio:

|  |  |
|---|---|
| Risco calibrado no treino | 2,13% |
| Queda que ele prometia | -30% |
| Queda que ele entregou | **-33%** |
| Erro | **1,10×** |
| Carteiras que furaram 40% | 1 de 20 |

A correção é direta: **calibre para 27% se quer viver 30%.** Mas note que esse fator de 1,10× também foi medido no mesmo período que tudo o mais — ele próprio pode estar otimista.

## 4. Os números grandes não são expectativa
A primeira carteira do ranking mostra R\$ 100.000 virando R\$ 16.582.630 em 5,0 anos. **Esse número não é uma previsão.** É o que este período específico produziu sob estas regras, com as três ressalvas acima todas valendo ao mesmo tempo.

O número que viaja bem do passado para o futuro, neste estudo, é **a queda** — e ela viaja com 1,10× de piora. O lucro não tem nada parecido com isso: a etapa [5 · O que o passado consegue prever](o-que-o-passado-preve) mostra que o retorno quase não se mantém de um período para o outro.

## 5. Cinco anos é pouco
Todo este estudo cabe em 5,0 anos e 1.255 dias de bolsa. Nesse intervalo o mini índice não passou por tudo que ele pode passar. Um regime de mercado que não apareceu aqui pode quebrar setups que neste período pareceram sólidos — e nenhuma conta feita sobre estes dados consegue avisar sobre isso.

## 6. A cauda é uma estimativa, não um histórico
A **pior queda** é o que aconteceu de fato. A **cauda** é diferente: embaralhamos as mesmas operações em 2.000 ordens diferentes e olhamos o pior ano entre vinte. Serve para enxergar o azar que não aconteceu.

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

← **anterior:** [8 · Ano a ano, mês a mês](ano-a-ano)  

[a trilha toda](./) · [glossário](glossario)

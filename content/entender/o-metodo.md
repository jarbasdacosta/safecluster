---
title: 6 · O método de escolha
date: 2026-11-18
description: "A regra adotada, as outras testadas, e o que não funcionou"
tags: [entender]
---


> [!success] A regra
> **Entre os 10% de combinações que mais renderam no período de treino, escolhe-se a que menos balançou.**
>
> Nem a que mais rendeu, nem a que menos balançou no geral: a mais lisa entre as boas. São 78 combinações no grupo de cima, de 783 que cabem no limite de perda — que por sua vez saíram de 4.928 combinações possíveis.

O resto desta página é a prova de que essa regra é melhor que as alternativas — e a medida de quanto dessa afirmação é sólida e quanto não é.

## Como as regras foram comparadas
Cada regra escolheu 20 combinações usando **só o primeiro período**. Depois, as escolhas foram medidas no segundo, sem retoque.

E — isto é o essencial, pela etapa [4 · Por que a carteira mais lisa rende mais](suavidade) — o risco por operação de cada carteira foi **ajustado até ela cair 40%** antes de comparar. Sem isso, a regra que escolhe carteiras instáveis ganha por estar mais alavancada, e nós concluiríamos que ela é mais competente.

Entre as regras está o **sorteio**: escolher 20 ao acaso. É a régua. Uma regra que não bate o sorteio não é uma regra, é um enfeite.

## O resultado das 11 regras
| Regra | Quantas vezes o sorteio | Faixa de incerteza | Risco/op | Erro da promessa | Furaram 50% |
|---|---|---|---|---|---|
| peneira 10 setups + grupo de cima + menor queda | 1,95× | 1,66 a 2,44 | 1,35% | 1,22× | 8 de 20 |
| **topo por retorno** | 1,94× | 1,54 a 2,24 | 1,17% | 1,19× | 7 de 20 |
| no limite + maior retorno | 1,94× | 1,54 a 2,24 | 1,17% | 1,19× | 7 de 20 |
| grupo de cima + mais rende no limite | 1,45× | 0,97 a 1,69 | 1,18% | 1,28× | 11 de 20 |
| grupo de cima + menor cauda | 1,36× | 1,18 a 1,52 | 1,20% | 1,22× | 6 de 20 |
| peneira 9 setups + grupo de cima + menor queda | 1,33× | 1,16 a 1,51 | 1,22% | 1,29× | 11 de 20 |
| peneira 12 setups + grupo de cima + menor queda | 1,25× | 1,00 a 1,59 | 1,30% | 1,26× | 11 de 20 |
| grupo de cima + menor queda | 1,13× | 1,00 a 1,51 | 1,31% | 1,27× | 12 de 20 |
| *sorteio (a régua)* | 1,00× | 0,83 a 1,22 | 1,34% | 1,29× | 11 de 20 |
| menor queda | 0,27× | 0,12 a 0,44 | 3,36% | 1,35× | 12 de 20 |
| menor cauda | 0,17× | 0,11 a 0,84 | 3,58% | 1,18× | 9 de 20 |

## Escolher por um critério só — e por que isso falha

### Escolher as que mais renderam: 1,94× o sorteio
**Foi a melhor desta rodada** — veja a ressalva abaixo. E a coluna do risco mostra o mecanismo: as carteiras que essa regra escolhe suportam 1,17% por operação antes de cair 40%, contra 1,17% das escolhidas pela regra adotada.

Nesta rodada essa regra escolheu carteiras que suportam **mais** risco que as da regra adotada — o contrário do que costuma acontecer. Vale olhar a faixa de incerteza antes de tirar conclusão.

### Escolher as que menos balançaram: 0,27× e 0,17× o sorteio
**As duas perdem do sorteio.** Elas precisam de 3,36% e 3,58% por operação para chegar aos mesmos 40% — 3,1 vezes o risco da regra adotada.

O motivo é desconfortável: **carteira que quase não cai é carteira que quase não faz nada.** A queda rasa delas não vem de qualidade, vem de inércia — por isso é preciso arriscar tanto mais para chegar na mesma dor, e mesmo assim o resultado não acompanha.

> [!tip] A conclusão que vale levar
> Dos critérios isolados, 2 de 3 ficam abaixo do sorteio nesta rodada. **O que funciona é o meio**: delimitar as boas pelo retorno e, dentro delas, preferir a mais lisa.

## Quanto dessa conclusão é sólido
A regra adotada deu **1,94× o sorteio**. Mas a faixa de incerteza desse número vai de **1,54 a 2,24** — e isso precisa ser dito com a mesma ênfase que o resultado.

Com 20 escolhas de resultados muito dispersos, não é possível afirmar com firmeza que *esta* regra rende exatamente *tantas* vezes o sorteio.

> [!abstract] Então o que é sólido? Nesta rodada, menos do que o usual
> **O padrão entre as regras é a evidência — e nesta rodada ele está fraco.**
>
> As regras que combinam retorno com risco ficaram entre 1,45× e 1,94× o sorteio, e 2 das 3 regras de critério único ficaram abaixo do sorteio.
>
> Quando as regras combinadas se espalham muito, ou quando os critérios isolados não ficam claramente atrás, o que se mede deixa de separar método de acaso. **Trate o ranking desta rodada com mais reserva que o habitual** e compare com as rodadas anteriores antes de mudar de carteira.

Entre as 3 regras que empatam em retorno, o desempate foi por **menor erro de calibração entre as indistinguíveis** — porque o limite de perda é um limite emocional, não uma preferência de rentabilidade. Entre duas regras que rendem igual, vale mais a que mente menos sobre o risco.

## O que tentamos e não funcionou

A tabela da etapa [2 · Os setups](os-setups#quais-setups-entregam-o-que-prometem) mostra quais setups fazem a promessa de risco falhar. O passo natural seria **tirá-los do universo antes de escolher**. Testamos, com 3 cortes diferentes.

Não funcionou: os cortes discordam entre si — a vencedora seria o corte sorteado. O espalhamento entre os cortes foi de 1,56× no retorno e 1,06× no cumprimento da promessa. Cortes vizinhos dando resultados tão diferentes significa que a 'vencedora' seria o corte sorteado, não a ideia.

> [!example] Por que isso está no site
> Porque uma tentativa que falhou é informação, e esconder tentativas falhadas é o jeito mais fácil de fazer um método parecer melhor do que é.
>
> Se você só visse as regras que funcionaram, não teria como saber quantas foram tentadas — e quanto mais regras se tenta, mais fácil uma delas parecer boa por acaso.

## O preço do método
Nesta rodada a regra adotada **cumpriu a promessa de risco melhor que o sorteio**: erro de 1,19× contra 1,29×. Calibradas as duas para 40%, a regra entregou 48% e o sorteio 52%.

Não conte com isso. O efeito que costuma aparecer é o inverso — o que se escolhe por ser extremo tende a voltar para o meio, e o sorteio não escolhe extremo nenhum. Quando a regra fica à frente também no cumprimento, ela está levando as duas coisas, e levar as duas é o tipo de resultado que não se repete.

Seja qual for o caso, o número que você leva para a prática é o mesmo: **40% prometido não é 40% vivido.** A etapa [10 · O que pode dar errado](limites) tem a correção.

> [!abstract] Confira a conta você mesmo
> <a href="regras.xlsx" target="_blank" download type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">⬇ Baixar regras.xlsx</a> — as regras comparadas na mesma queda, com faixa de incerteza, risco por operação e erro da promessa; mais a comparação a risco fixo (para ver como ela engana) e as regras descartadas por inconsistência
>
> A planilha sai do mesmo cálculo que esta página, não de um cálculo paralelo: contratos inteiros, mesmo custo, mesmas regras. Se os números divergirem, é defeito nosso e queremos saber.

---

← **anterior:** [5 · O que o passado consegue prever](o-que-o-passado-preve)  
→ **próxima:** [7 · O ranking](o-ranking)  

[a trilha toda](./) · [glossário](glossario)

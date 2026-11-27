---
title: 6 · O método de escolha
date: 2026-11-27
description: "A regra adotada, as outras testadas, e o que não funcionou"
tags: [entender]
---


> [!success] A regra
> **Entre os 10% de combinações que mais renderam no período de treino, escolhe-se a que menos balançou.**
>
> Nem a que mais rendeu, nem a que menos balançou no geral: a mais lisa entre as boas. São 84 combinações no grupo de cima, de 839 que cabem no limite de perda — que por sua vez saíram de 4.928 combinações possíveis.

O resto desta página é a prova de que essa regra é melhor que as alternativas — e a medida de quanto dessa afirmação é sólida e quanto não é.

## Como as regras foram comparadas
Cada regra escolheu 20 combinações usando **só o primeiro período**. Depois, as escolhas foram medidas no segundo, sem retoque.

E — isto é o essencial, pela etapa [4 · Por que a carteira mais lisa rende mais](suavidade) — o risco por operação de cada carteira foi **ajustado até ela cair 40%** antes de comparar. Sem isso, a regra que escolhe carteiras instáveis ganha por estar mais alavancada, e nós concluiríamos que ela é mais competente.

Entre as regras está o **sorteio**: escolher 20 ao acaso. É a régua. Uma regra que não bate o sorteio não é uma regra, é um enfeite.

## O resultado das 11 regras
| Regra | Quantas vezes o sorteio | Faixa de incerteza | Risco/op | Erro da promessa | Furaram 50% |
|---|---|---|---|---|---|
| peneira 10 setups + grupo de cima + menor queda | 2,96× | 2,50 a 3,76 | 1,35% | 1,22× | 8 de 20 |
| topo por retorno | 2,66× | 1,74 a 3,38 | 1,09% | 1,23× | 9 de 20 |
| no limite + maior retorno | 2,66× | 1,78 a 3,41 | 1,09% | 1,23× | 9 de 20 |
| grupo de cima + mais rende no limite | 2,25× | 1,45 a 2,67 | 1,18% | 1,28× | 11 de 20 |
| **grupo de cima + menor cauda** | 2,12× | 1,78 a 2,33 | 1,20% | 1,22× | 6 de 20 |
| peneira 9 setups + grupo de cima + menor queda | 2,07× | 1,78 a 2,33 | 1,21% | 1,31× | 11 de 20 |
| peneira 12 setups + grupo de cima + menor queda | 2,04× | 1,62 a 2,57 | 1,30% | 1,27× | 12 de 20 |
| grupo de cima + menor queda | 1,87× | 1,50 a 2,48 | 1,30% | 1,26× | 11 de 20 |
| *sorteio (a régua)* | 1,00× | 0,70 a 1,57 | 1,38% | 1,23× | 8 de 20 |
| menor queda | 0,36× | 0,17 a 0,57 | 3,24% | 1,37× | 13 de 20 |
| menor cauda | 0,24× | 0,15 a 1,25 | 3,56% | 1,19× | 9 de 20 |

## Escolher por um critério só — e por que isso falha

### Escolher as que mais renderam: 2,66× o sorteio
**Foi a melhor desta rodada** — veja a ressalva abaixo. E a coluna do risco mostra o mecanismo: as carteiras que essa regra escolhe suportam 1,09% por operação antes de cair 40%, contra 1,20% das escolhidas pela regra adotada.

As carteiras dela são menos lisas — suportam menos risco pela mesma dor — e ainda assim o resultado se sustentou nesta rodada. Antes de concluir qualquer coisa, olhe a faixa de incerteza na tabela acima: ela é larga o bastante para esta ordem trocar.

### Escolher as que menos balançaram: 0,36× e 0,24× o sorteio
**As duas perdem do sorteio.** Elas precisam de 3,24% e 3,56% por operação para chegar aos mesmos 40% — 3,0 vezes o risco da regra adotada.

O motivo é desconfortável: **carteira que quase não cai é carteira que quase não faz nada.** A queda rasa delas não vem de qualidade, vem de inércia — por isso é preciso arriscar tanto mais para chegar na mesma dor, e mesmo assim o resultado não acompanha.

> [!tip] A conclusão que vale levar
> Dos critérios isolados, 2 de 3 ficam abaixo do sorteio nesta rodada. **O que funciona é o meio**: delimitar as boas pelo retorno e, dentro delas, preferir a mais lisa.

## Quanto dessa conclusão é sólido
A regra adotada deu **2,12× o sorteio**. Mas a faixa de incerteza desse número vai de **1,78 a 2,33** — e isso precisa ser dito com a mesma ênfase que o resultado.

Com 20 escolhas de resultados muito dispersos, não é possível afirmar com firmeza que *esta* regra rende exatamente *tantas* vezes o sorteio.

> [!abstract] Então o que é sólido?
> **O padrão entre as regras, não o número de nenhuma delas.**
>
> 4 regras diferentes que combinam retorno com uma medida de risco caem todas entre 1,87× e 2,66× o sorteio. E 2 das 3 regras que usam um critério só ficam **abaixo** do sorteio.
>
> Vários caminhos independentes chegando no mesmo lugar, e os extremos caindo longe, vale mais que a precisão de uma medida isolada. **O jeito de escolher importa; o tamanho exato da vantagem, não sabemos.**

Entre as 5 regras que empatam em retorno, o desempate foi por **menor erro de calibração entre as indistinguíveis** — porque o limite de perda é um limite emocional, não uma preferência de rentabilidade. Entre duas regras que rendem igual, vale mais a que mente menos sobre o risco.

## O que tentamos e não funcionou

A tabela da etapa [2 · Os setups](os-setups#quais-setups-entregam-o-que-prometem) mostra quais setups fazem a promessa de risco falhar. O passo natural seria **tirá-los do universo antes de escolher**. Testamos, com 3 cortes diferentes.

Não funcionou: os cortes discordam entre si — a vencedora seria o corte sorteado. O espalhamento entre os cortes foi de 1,45× no retorno e 1,08× no cumprimento da promessa. Cortes vizinhos dando resultados tão diferentes significa que a 'vencedora' seria o corte sorteado, não a ideia.

> [!example] Por que isso está no site
> Porque uma tentativa que falhou é informação, e esconder tentativas falhadas é o jeito mais fácil de fazer um método parecer melhor do que é.
>
> Se você só visse as regras que funcionaram, não teria como saber quantas foram tentadas — e quanto mais regras se tenta, mais fácil uma delas parecer boa por acaso.

## O preço do método
A regra adotada e o sorteio cumprem a promessa de risco praticamente igual nesta rodada (1,22× contra 1,23×), com a regra pagando 2,12× o retorno do sorteio. Quando o cumprimento empata, a escolha do método sai de graça — e é o único caso em que sai.

Seja qual for o caso, o número que você leva para a prática é o mesmo: **40% prometido não é 40% vivido.** A etapa [10 · O que pode dar errado](limites) tem a correção.

> [!abstract] Confira a conta você mesmo
> <a href="regras.xlsx" target="_blank" download type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">⬇ Baixar regras.xlsx</a> — as regras comparadas na mesma queda, com faixa de incerteza, risco por operação e erro da promessa; mais a comparação a risco fixo (para ver como ela engana) e as regras descartadas por inconsistência
>
> A planilha sai do mesmo cálculo que esta página, não de um cálculo paralelo: contratos inteiros, mesmo custo, mesmas regras. Se os números divergirem, é defeito nosso e queremos saber.

---

← **anterior:** [5 · O que o passado consegue prever](o-que-o-passado-preve)  
→ **próxima:** [7 · O ranking](o-ranking)  

[a trilha toda](./) · [glossário](glossario)

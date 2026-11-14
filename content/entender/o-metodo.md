---
title: 6 · O método de escolha
date: 2026-11-13
description: "A regra adotada, as outras testadas, e o que não funcionou"
tags: [entender]
---


> [!success] A regra
> **Entre os 10% de combinações que mais renderam no período de treino, escolhe-se a que menos balançou.**
>
> Nem a que mais rendeu, nem a que menos balançou no geral: a mais lisa entre as boas. São 493 combinações no grupo de cima, de 4.928 possíveis.

O resto desta página é a prova de que essa regra é melhor que as alternativas — e a medida de quanto dessa afirmação é sólida e quanto não é.

## Como as regras foram comparadas
Cada regra escolheu 20 combinações usando **só o primeiro período**. Depois, as escolhas foram medidas no segundo, sem retoque.

E — isto é o essencial, pela etapa [4 · Por que a carteira mais lisa rende mais](suavidade) — o risco por operação de cada carteira foi **ajustado até ela cair 40%** antes de comparar. Sem isso, a regra que escolhe carteiras instáveis ganha por estar mais alavancada, e nós concluiríamos que ela é mais competente.

Entre as regras está o **sorteio**: escolher 20 ao acaso. É a régua. Uma regra que não bate o sorteio não é uma regra, é um enfeite.

## O resultado das 11 regras
| Regra | Quantas vezes o sorteio | Faixa de incerteza | Risco/op | Erro da promessa | Furaram 50% |
|---|---|---|---|---|---|
| peneira 10 setups + grupo de cima + menor queda | 2,32× | 1,86 a 3,74 | 1,42% | 1,19× | 6 de 20 |
| grupo de cima + menor queda | 2,31× | 1,01 a 2,86 | 1,03% | 1,25× | 10 de 20 |
| grupo de cima + mais rende no limite | 2,21× | 1,26 a 2,81 | 0,99% | 1,35× | 13 de 20 |
| **grupo de cima + menor cauda** | 2,14× | 1,44 a 2,75 | 1,07% | 1,23× | 8 de 20 |
| peneira 9 setups + grupo de cima + menor queda | 1,47× | 1,34 a 1,83 | 1,15% | 1,23× | 7 de 20 |
| peneira 12 setups + grupo de cima + menor queda | 1,35× | 1,04 a 1,82 | 0,93% | 1,42× | 17 de 20 |
| no limite + maior retorno | 1,35× | 1,07 a 2,12 | 0,94% | 1,38× | 13 de 20 |
| *sorteio (a régua)* | 1,00× | 0,69 a 1,20 | 0,89% | 1,14× | 4 de 20 |
| topo por retorno | 0,87× | 0,77 a 1,11 | 0,66% | 1,39× | 16 de 20 |
| menor queda | 0,32× | 0,14 a 0,57 | 3,46% | 1,23× | 10 de 20 |
| menor cauda | 0,19× | 0,13 a 2,41 | 4,71% | 0,97× | 8 de 20 |

## Os dois jeitos óbvios de escolher são os dois piores

### Escolher as que mais renderam: 0,87× o sorteio
**Pior que sortear.** E a coluna do risco mostra o mecanismo: as carteiras que essa regra escolhe suportam 0,66% por operação antes de cair 40%, contra 1,07% das escolhidas pela regra adotada.

Ou seja: o retorno alto delas vinha de serem instáveis, e instabilidade obriga a apostar baixo. Igualado o desconforto, a vantagem evapora.

### Escolher as que menos balançaram: 0,32× e 0,19× o sorteio
**As duas perdem do sorteio.** Elas precisam de 3,46% e 4,71% por operação para chegar aos mesmos 40% — 4,4 vezes o risco da regra adotada.

O motivo é desconfortável: **carteira que quase não cai é carteira que quase não faz nada.** A queda rasa delas não vem de qualidade, vem de inércia — por isso é preciso arriscar tanto mais para chegar na mesma dor, e mesmo assim o resultado não acompanha.

> [!tip] A conclusão que vale levar
> Segurança pura e ganância pura perdem as duas, e perdem feio. **O que funciona é o meio**: delimitar as boas pelo retorno e, dentro delas, preferir a mais lisa.

## Quanto dessa conclusão é sólido
A regra adotada deu **2,14× o sorteio**. Mas a faixa de incerteza desse número vai de **1,44 a 2,75** — e isso precisa ser dito com a mesma ênfase que o resultado.

Com 20 escolhas de resultados muito dispersos, não é possível afirmar com firmeza que *esta* regra rende exatamente *tantas* vezes o sorteio.

> [!abstract] Então o que é sólido?
> **O padrão entre as regras, não o número de nenhuma delas.**
>
> 3 regras diferentes que combinam retorno com uma medida de risco caem todas entre 2,14× e 2,31× o sorteio. E 3 das 3 regras que usam um critério só ficam **abaixo** do sorteio.
>
> Vários caminhos independentes chegando no mesmo lugar, e os extremos caindo longe, vale mais que a precisão de uma medida isolada. **O jeito de escolher importa; o tamanho exato da vantagem, não sabemos.**

Entre as 3 regras que empatam em retorno, o desempate foi por **menor erro de calibração entre as indistinguíveis** — porque o limite de perda é um limite emocional, não uma preferência de rentabilidade. Entre duas regras que rendem igual, vale mais a que mente menos sobre o risco.

## O que tentamos e não funcionou

A tabela da etapa [2 · Os setups](os-setups#quais-setups-entregam-o-que-prometem) mostra quais setups fazem a promessa de risco falhar. O passo natural seria **tirá-los do universo antes de escolher**. Testamos, com 3 cortes diferentes.

Não funcionou: os cortes discordam entre si — a vencedora seria o corte sorteado. O espalhamento entre os cortes foi de 1,72× no retorno e 1,19× no cumprimento da promessa. Cortes vizinhos dando resultados tão diferentes significa que a 'vencedora' seria o corte sorteado, não a ideia.

> [!example] Por que isso está no site
> Porque uma tentativa que falhou é informação, e esconder tentativas falhadas é o jeito mais fácil de fazer um método parecer melhor do que é.
>
> Se você só visse as regras que funcionaram, não teria como saber quantas foram tentadas — e quanto mais regras se tenta, mais fácil uma delas parecer boa por acaso.

## O preço do método
Uma coisa desconfortável que o teste mostrou: **o sorteio cumpre a promessa de risco melhor que a regra adotada.** Erro de 1,14× contra 1,23×.

Tem explicação, e ela vale para qualquer método de seleção. A regra escolhe as carteiras mais lisas do primeiro período — e o que é escolhido por ser extremo tende a voltar para o meio depois. O sorteio não escolhe extremo nenhum, então não tem de onde voltar.

Em números: as duas calibradas para 40%, o sorteio entregou 46% e a regra 49%. **A regra cobra 3 pontos de estouro a mais e paga 2,14× o retorno do sorteio.** É troca defensável, mas é troca — e quem não aceita esses pontos a mais deve sortear.

Seja qual for o caso, o número que você leva para a prática é o mesmo: **40% prometido não é 40% vivido.** A etapa [8 · O que pode dar errado](limites) tem a correção.

> [!abstract] Confira a conta você mesmo
> <a href="regras.xlsx" target="_blank" download type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">⬇ Baixar regras.xlsx</a> — as regras comparadas na mesma queda, com faixa de incerteza, risco por operação e erro da promessa; mais a comparação a risco fixo (para ver como ela engana) e as regras descartadas por inconsistência
>
> A planilha sai do mesmo cálculo que esta página, não de um cálculo paralelo: contratos inteiros, mesmo custo, mesmas regras. Se os números divergirem, é defeito nosso e queremos saber.

---

← **anterior:** [5 · O que o passado consegue prever](o-que-o-passado-preve)  
→ **próxima:** [7 · O ranking](o-ranking)  

[a trilha toda](./) · [glossário](glossario)

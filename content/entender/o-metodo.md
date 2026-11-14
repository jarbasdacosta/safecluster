---
title: 6 · O método de escolha
date: 2026-11-14
description: "A regra adotada, as outras testadas, e o que não funcionou"
tags: [entender]
---


> [!success] A regra
> **Entre os 10% de combinações que mais renderam no período de treino, escolhe-se a que menos balançou.**
>
> Nem a que mais rendeu, nem a que menos balançou no geral: a mais lisa entre as boas. São 40 combinações no grupo de cima, de 154 possíveis.

O resto desta página é a prova de que essa regra é melhor que as alternativas — e a medida de quanto dessa afirmação é sólida e quanto não é.

## Como as regras foram comparadas
Cada regra escolheu 20 combinações usando **só o primeiro período**. Depois, as escolhas foram medidas no segundo, sem retoque.

E — isto é o essencial, pela etapa [4 · Por que a carteira mais lisa rende mais](suavidade) — o risco por operação de cada carteira foi **ajustado até ela cair 30%** antes de comparar. Sem isso, a regra que escolhe carteiras instáveis ganha por estar mais alavancada, e nós concluiríamos que ela é mais competente.

Entre as regras está o **sorteio**: escolher 20 ao acaso. É a régua. Uma regra que não bate o sorteio não é uma regra, é um enfeite.

## O resultado das 11 regras
| Regra | Quantas vezes o sorteio | Faixa de incerteza | Risco/op | Erro da promessa | Furaram 40% |
|---|---|---|---|---|---|
| topo por retorno | 1,76× | 1,52 a 2,05 | 1,29% | 1,21× | 3 de 20 |
| no limite + maior retorno | 1,76× | 1,52 a 2,06 | 1,29% | 1,21× | 3 de 20 |
| **peneira 9 setups + grupo de cima + menor queda** | 1,68× | 1,48 a 1,80 | 1,53% | 1,13× | 1 de 20 |
| grupo de cima + menor queda | 1,67× | 1,38 a 1,76 | 1,44% | 1,19× | 4 de 20 |
| grupo de cima + menor cauda | 1,67× | 1,32 a 1,76 | 1,41% | 1,16× | 3 de 20 |
| peneira 10 setups + grupo de cima + menor queda | 1,67× | 1,40 a 1,76 | 1,44% | 1,19× | 4 de 20 |
| peneira 12 setups + grupo de cima + menor queda | 1,67× | 1,40 a 1,76 | 1,44% | 1,19× | 4 de 20 |
| grupo de cima + mais rende no limite | 1,67× | 1,42 a 1,90 | 1,42% | 1,16× | 3 de 20 |
| *sorteio (a régua)* | 1,00× | 0,64 a 1,37 | 1,42% | 1,16× | 6 de 20 |
| menor queda | 0,40× | 0,20 a 0,56 | 2,40% | 1,39× | 11 de 20 |
| menor cauda | 0,31× | 0,19 a 1,00 | 2,65% | 1,08× | 8 de 20 |

## Escolher por um critério só — e por que isso falha

### Escolher as que mais renderam: 1,76× o sorteio
**Foi a melhor desta rodada** — veja a ressalva abaixo. E a coluna do risco mostra o mecanismo: as carteiras que essa regra escolhe suportam 1,29% por operação antes de cair 30%, contra 1,53% das escolhidas pela regra adotada.

As carteiras dela são menos lisas — suportam menos risco pela mesma dor — e ainda assim o resultado se sustentou nesta rodada. Antes de concluir qualquer coisa, olhe a faixa de incerteza na tabela acima: ela é larga o bastante para esta ordem trocar.

### Escolher as que menos balançaram: 0,40× e 0,31× o sorteio
**As duas perdem do sorteio.** Elas precisam de 2,40% e 2,65% por operação para chegar aos mesmos 30% — 1,7 vezes o risco da regra adotada.

O motivo é desconfortável: **carteira que quase não cai é carteira que quase não faz nada.** A queda rasa delas não vem de qualidade, vem de inércia — por isso é preciso arriscar tanto mais para chegar na mesma dor, e mesmo assim o resultado não acompanha.

> [!tip] A conclusão que vale levar
> Dos critérios isolados, 2 de 3 ficam abaixo do sorteio nesta rodada. **O que funciona é o meio**: delimitar as boas pelo retorno e, dentro delas, preferir a mais lisa.

## Quanto dessa conclusão é sólido
A regra adotada deu **1,68× o sorteio**. Mas a faixa de incerteza desse número vai de **1,48 a 1,80** — e isso precisa ser dito com a mesma ênfase que o resultado.

Com 20 escolhas de resultados muito dispersos, não é possível afirmar com firmeza que *esta* regra rende exatamente *tantas* vezes o sorteio.

> [!abstract] Então o que é sólido?
> **O padrão entre as regras, não o número de nenhuma delas.**
>
> 7 regras diferentes que combinam retorno com uma medida de risco caem todas entre 1,67× e 1,76× o sorteio. E 2 das 3 regras que usam um critério só ficam **abaixo** do sorteio.
>
> Vários caminhos independentes chegando no mesmo lugar, e os extremos caindo longe, vale mais que a precisão de uma medida isolada. **O jeito de escolher importa; o tamanho exato da vantagem, não sabemos.**

Entre as 8 regras que empatam em retorno, o desempate foi por **menor erro de calibração entre as indistinguíveis** — porque o limite de perda é um limite emocional, não uma preferência de rentabilidade. Entre duas regras que rendem igual, vale mais a que mente menos sobre o risco.

## O preço do método
Nesta rodada a regra adotada **cumpriu a promessa de risco melhor que o sorteio**: erro de 1,13× contra 1,16×. Calibradas as duas para 30%, a regra entregou 34% e o sorteio 35%.

Não conte com isso. O efeito que costuma aparecer é o inverso — o que se escolhe por ser extremo tende a voltar para o meio, e o sorteio não escolhe extremo nenhum. Quando a regra fica à frente também no cumprimento, ela está levando as duas coisas, e levar as duas é o tipo de resultado que não se repete.

Seja qual for o caso, o número que você leva para a prática é o mesmo: **30% prometido não é 30% vivido.** A etapa [8 · O que pode dar errado](limites) tem a correção.

> [!abstract] Confira a conta você mesmo
> <a href="regras.xlsx" target="_blank" download type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">⬇ Baixar regras.xlsx</a> — as regras comparadas na mesma queda, com faixa de incerteza, risco por operação e erro da promessa; mais a comparação a risco fixo (para ver como ela engana) e as regras descartadas por inconsistência
>
> A planilha sai do mesmo cálculo que esta página, não de um cálculo paralelo: contratos inteiros, mesmo custo, mesmas regras. Se os números divergirem, é defeito nosso e queremos saber.

---

← **anterior:** [5 · O que o passado consegue prever](o-que-o-passado-preve)  
→ **próxima:** [7 · O ranking](o-ranking)  

[a trilha toda](./) · [glossário](glossario)

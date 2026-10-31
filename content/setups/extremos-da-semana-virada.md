---
title: Extremos da Semana (virada de mão)
date: 2026-10-31
tags: [setup, win]
---

**Abre dentro da faixa da semana anterior, põe ordem nos dois extremos e, se o rompimento falhar e bater o stop, vira a mão na hora apostando na reversão.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · ordens válidas até as 15h

🎬 **Vídeo de origem:** [Arthur 777 – "STOP?! Virada de mão! payoff alto no mini índice"](https://youtu.be/p20GbzQCJlc) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 31.401** na versão ATR 0,21 / 1,54 com o capital no CDI (+26% ao ano · pior queda −23%)
> - **R\$ 21.472** na versão como no vídeo (alvo 2.000, stop 400) com o capital no CDI (+17% ao ano · pior queda −20%)
> - **R\$ 17.504** na versão alvo 1.000 com o capital no CDI (+12% ao ano · pior queda −16%)
> - **R\$ 24.130** na versão alvo 3.000 com o capital no CDI (+19% ao ano · pior queda −20%)
> - **R\$ 29.086** na versão alvo 4.000, stop 600 com o capital no CDI (+24% ao ano · pior queda −22%)
> - **R\$ 22.633** na versão sem virada de mão (só o rompimento) com o capital no CDI (+18% ao ano · pior queda −11%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 38.348** na versão ATR 0,21 / 1,54 **arriscando 1% do capital por operação** (+31% ao ano · pior queda −18%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> Ainda sem operações. O resultado aparece aqui conforme os dias passam.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/extremos-da-semana-virada_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Faixa** | a **abertura do dia** tem de ficar **entre** a máxima e a mínima da semana anterior | igual |
| **2. Ordens** | compra parada na **máxima da semana anterior** | venda parada na **mínima da semana anterior** |
| **3. Validade** | as ordens valem até as **15h**; depois são canceladas | igual |
| **Alvo · stop** | 2.000 · 400 pts no vídeo → em ATR aqui | igual |
| **Virada de mão** | stop atingido → entra **na venda** no preço do stop, mesmo alvo e stop | stop atingido → entra **na compra** |
| **Limite** | **uma** virada por dia; se o stop da virada bater, para | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,54** — stop 0,206 ATR · alvo 1,544 ATR (7,5× o stop); hoje ≈ 892 pts de stop e 6.691 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 1,54** (principal) | stop 0,206 ATR · alvo 1,544 ATR (7,5× o stop) | 36% · 2,14 | +28,5 → +71,9 | +26,0% | −23,3% |
| **como no vídeo (alvo 2.000, stop 400)** | stop 400 · alvo 2.000 pts | 33% · 2,20 | +2,4 → +31,6 | +16,7% | −19,8% |
| **alvo 1.000** | stop 400 · alvo 1.000 pts | 35% · 1,84 | −8,8 → +7,7 | +12,0% | −16,0% |
| **alvo 3.000** | stop 400 · alvo 3.000 pts | 33% · 2,28 | +20,9 → +35,8 | +19,5% | −19,8% |
| **alvo 4.000, stop 600** | stop 600 · alvo 4.000 pts | 43% · 1,55 | +29,0 → +66,2 | +24,1% | −21,9% |
| **sem virada de mão (só o rompimento)** | stop 400 · alvo 2.000 pts | 34% · 2,17 | +8,9 → +54,4 | +17,9% | −11,3% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,54

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 250 | 335 | 585 |
| Operações por mês | 9,3 | 9,9 | 9,6 |
| Taxa de acerto | 34,8% | 36,4% | 35,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 40% / 20% | 1% / 36% / 26% | 1% / 38% / 23% |
| Stop típico | 396 pts | 398 pts | 398 pts |
| Ganho médio · perda média | +876 · −424 pts | +985 · −451 pts | +940 · −439 pts |
| Payoff (ganho médio ÷ perda média) | 2,07 | 2,18 | 2,14 |
| Fator de lucro (total ganho ÷ total perdido) | 1,10 | 1,25 | 1,19 |
| Resultado médio por operação | +28,5 pts (+43,5 sem custo) | +71,9 pts (+86,9 sem custo) | +53,4 pts (+68,4 sem custo) |
| **Lucro líquido** | **+7.134 pts · R\$ 1.427** | **+24.099 pts · R\$ 4.820** | **+31.233 pts · R\$ 6.247** |
| Pior queda (drawdown) | −11.389 pts · −R\$ 2.278 | −14.107 pts · −R\$ 2.821 | −14.107 pts · −R\$ 2.821 |
| Maior sequência de perdas | 13 seguidas | 16 seguidas | 16 seguidas |
| Compras: acerto · lucro | 38% · +9.263 pts | 34% · +3.855 pts | 35% · +13.119 pts |
| Vendas: acerto · lucro | 32% · −2.130 pts | 39% · +20.244 pts | 36% · +18.114 pts |

### Versão como no vídeo (alvo 2.000, stop 400)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 257 | 345 | 602 |
| Operações por mês | 9,5 | 10,1 | 9,9 |
| Taxa de acerto | 32,7% | 32,8% | 32,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 40% / 18% | 4% / 38% / 19% | 4% / 39% / 18% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +849 · −409 pts | +930 · −406 pts | +896 · −407 pts |
| Payoff (ganho médio ÷ perda média) | 2,08 | 2,29 | 2,20 |
| Fator de lucro (total ganho ÷ total perdido) | 1,01 | 1,12 | 1,07 |
| Resultado médio por operação | +2,4 pts (+17,4 sem custo) | +31,6 pts (+46,6 sem custo) | +19,1 pts (+34,1 sem custo) |
| **Lucro líquido** | **+615 pts · R\$ 123** | **+10.886 pts · R\$ 2.177** | **+11.502 pts · R\$ 2.300** |
| Pior queda (drawdown) | −10.114 pts · −R\$ 2.023 | −12.015 pts · −R\$ 2.403 | −12.015 pts · −R\$ 2.403 |
| Maior sequência de perdas | 13 seguidas | 20 seguidas | 20 seguidas |
| Compras: acerto · lucro | 36% · +5.342 pts | 33% · +5.010 pts | 34% · +10.352 pts |
| Vendas: acerto · lucro | 30% · −4.726 pts | 33% · +5.876 pts | 31% · +1.149 pts |

### Versão alvo 1.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 253 | 337 | 590 |
| Operações por mês | 9,4 | 9,9 | 9,7 |
| Taxa de acerto | 34,4% | 35,9% | 35,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 13% / 39% / 9% | 16% / 37% / 10% | 15% / 38% / 10% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +758 · −411 pts | +755 · −411 pts | +756 · −411 pts |
| Payoff (ganho médio ÷ perda média) | 1,85 | 1,84 | 1,84 |
| Fator de lucro (total ganho ÷ total perdido) | 0,97 | 1,03 | 1,00 |
| Resultado médio por operação | −8,8 pts (+6,2 sem custo) | +7,7 pts (+22,7 sem custo) | +0,6 pts (+15,6 sem custo) |
| **Lucro líquido** | **−2.237 pts · −R\$ 447** | **+2.605 pts · R\$ 521** | **+369 pts · R\$ 74** |
| Pior queda (drawdown) | −10.179 pts · −R\$ 2.036 | −12.635 pts · −R\$ 2.527 | −12.635 pts · −R\$ 2.527 |
| Maior sequência de perdas | 9 seguidas | 17 seguidas | 17 seguidas |
| Compras: acerto · lucro | 37% · +1.507 pts | 37% · +940 pts | 37% · +2.447 pts |
| Vendas: acerto · lucro | 31% · −3.744 pts | 35% · +1.665 pts | 34% · −2.078 pts |

### Versão alvo 3.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 257 | 346 | 603 |
| Operações por mês | 9,5 | 10,2 | 9,9 |
| Taxa de acerto | 32,7% | 32,7% | 32,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 40% / 19% | 1% / 38% / 22% | 1% / 39% / 21% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +906 · −409 pts | +947 · −406 pts | +929 · −407 pts |
| Payoff (ganho médio ÷ perda média) | 2,22 | 2,33 | 2,28 |
| Fator de lucro (total ganho ÷ total perdido) | 1,08 | 1,13 | 1,11 |
| Resultado médio por operação | +20,9 pts (+35,9 sem custo) | +35,8 pts (+50,8 sem custo) | +29,4 pts (+44,4 sem custo) |
| **Lucro líquido** | **+5.370 pts · R\$ 1.074** | **+12.371 pts · R\$ 2.474** | **+17.741 pts · R\$ 3.548** |
| Pior queda (drawdown) | −9.240 pts · −R\$ 1.848 | −12.015 pts · −R\$ 2.403 | −12.015 pts · −R\$ 2.403 |
| Maior sequência de perdas | 13 seguidas | 20 seguidas | 20 seguidas |
| Compras: acerto · lucro | 36% · +8.887 pts | 32% · +4.075 pts | 34% · +12.961 pts |
| Vendas: acerto · lucro | 30% · −3.516 pts | 33% · +8.296 pts | 32% · +4.780 pts |

### Versão alvo 4.000, stop 600

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 234 | 315 | 549 |
| Operações por mês | 8,7 | 9,3 | 9,0 |
| Taxa de acerto | 43,2% | 42,5% | 42,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 0% / 34% / 32% | 1% / 32% / 34% | 1% / 33% / 34% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +788 · −547 pts | +897 · −549 pts | +850 · −548 pts |
| Payoff (ganho médio ÷ perda média) | 1,44 | 1,63 | 1,55 |
| Fator de lucro (total ganho ÷ total perdido) | 1,09 | 1,21 | 1,16 |
| Resultado médio por operação | +29,0 pts (+44,0 sem custo) | +66,2 pts (+81,2 sem custo) | +50,3 pts (+65,3 sem custo) |
| **Lucro líquido** | **+6.783 pts · R\$ 1.357** | **+20.843 pts · R\$ 4.169** | **+27.626 pts · R\$ 5.525** |
| Pior queda (drawdown) | −13.166 pts · −R\$ 2.633 | −13.264 pts · −R\$ 2.653 | −13.264 pts · −R\$ 2.653 |
| Maior sequência de perdas | 8 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 44% · +9.476 pts | 39% · +2.440 pts | 42% · +11.916 pts |
| Vendas: acerto · lucro | 42% · −2.693 pts | 46% · +18.403 pts | 44% · +15.709 pts |

### Versão sem virada de mão (só o rompimento)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 155 | 213 | 368 |
| Operações por mês | 5,7 | 6,3 | 6,0 |
| Taxa de acerto | 32,9% | 35,2% | 34,2% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 66% / 29% | 7% / 62% / 31% | 6% / 64% / 30% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +875 · −416 pts | +919 · −415 pts | +901 · −416 pts |
| Payoff (ganho médio ÷ perda média) | 2,10 | 2,21 | 2,17 |
| Fator de lucro (total ganho ÷ total perdido) | 1,03 | 1,20 | 1,13 |
| Resultado médio por operação | +8,9 pts (+23,9 sem custo) | +54,4 pts (+69,4 sem custo) | +35,2 pts (+50,2 sem custo) |
| **Lucro líquido** | **+1.375 pts · R\$ 275** | **+11.589 pts · R\$ 2.318** | **+12.964 pts · R\$ 2.593** |
| Pior queda (drawdown) | −7.878 pts · −R\$ 1.576 | −7.020 pts · −R\$ 1.404 | −7.878 pts · −R\$ 1.576 |
| Maior sequência de perdas | 9 seguidas | 16 seguidas | 16 seguidas |
| Compras: acerto · lucro | 41% · +7.815 pts | 38% · +12.696 pts | 39% · +20.511 pts |
| Vendas: acerto · lucro | 26% · −6.440 pts | 32% · −1.107 pts | 29% · −7.547 pts |

![Pontos acumulados com 1 contrato](setups/img/extremos-da-semana-virada_pontos.png)

> [!info]- O que significa cada número (clique para abrir)
> - **Taxa de acerto:** de cada 100 operações, quantas deram lucro.
> - **Payoff:** o ganho médio de uma operação boa dividido pela perda média de uma ruim. Payoff 2 = ganha o dobro do que perde.
> - **Fator de lucro:** tudo o que foi ganho dividido por tudo o que foi perdido. Acima de 1 = deu lucro.
> - **Risco/retorno:** o tamanho do alvo comparado com o do stop.
> - **Drawdown (pior queda):** a maior distância entre o ponto mais alto do lucro acumulado e o fundo que veio depois — o pior momento que alguém teria passado seguindo o setup.
> - **Sharpe:** quanto o investimento rendeu acima do CDI para cada unidade de oscilação. Acima de 1 é muito bom.
> - **Treino e teste:** os parâmetros vêm do vídeo; 2024 em diante funciona como prova — se o setup só funcionasse no passado, o teste ia mostrar.

## Comparação com o CDI e com o Ibovespa comprado

A conta usa **R\$ 10.000 de capital para cada contrato** (o número de contratos cresce junto com o capital). Na versão **+ CDI** o capital fica aplicado no CDI / Tesouro Selic (aceito como garantia) e o resultado do setup soma por cima — é a comparação justa. Na **pura**, o capital fica parado. Na linha **risco 1%**, cada operação usa o número de contratos que faz o stop (mais o custo) custar 1% do capital — em geral 3 a 4 vezes mais contratos que 1 por R\$ 10 mil. O Ibovespa já inclui dividendos. Sem imposto.

*Linhas: cada versão com 1 contrato por R\$ 10 mil e o capital no CDI · **risco 1%** = a versão principal arriscando 1% por operação · **pura** = a principal sem o CDI.*

| | R\$ 10.000 viraram · ao ano | Pior queda | Oscilação · Sharpe | Meses acima: CDI · Ibov | Pior · melhor mês |
|---|---|---|---|---|---|
| **ATR 0,21 / 1,54** | **R\$ 31.401** · +26,0% | −23,3% | 17,7% · 0,71 | 63% · 55% | −10,8% · +18,2% |
| **como no vídeo (alvo 2.000, stop 400)** | **R\$ 21.472** · +16,7% | −19,8% | 15,9% · 0,29 | 58% · 58% | −8,9% · +15,4% |
| **alvo 1.000** | **R\$ 17.504** · +12,0% | −16,0% | 13,3% · 0,01 | 53% · 52% | −6,9% · +10,4% |
| **alvo 3.000** | **R\$ 24.130** · +19,5% | −19,8% | 17,0% · 0,42 | 55% · 60% | −8,9% · +16,9% |
| **alvo 4.000, stop 600** | **R\$ 29.086** · +24,1% | −21,9% | 18,2% · 0,61 | 52% · 52% | −10,0% · +12,7% |
| **sem virada de mão (só o rompimento)** | **R\$ 22.633** · +17,9% | −11,3% | 12,6% · 0,42 | 50% · 50% | −5,7% · +10,6% |
| **risco 1%** | **R\$ 38.348** · +31,2% | −18,1% | 19,9% · 0,86 | 63% · 58% | −10,2% · +22,6% |
| **pura** | **R\$ 17.299** · +11,7% | −25,0% | 17,7% · 0,03 | 55% · 47% | −11,8% · +17,1% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/extremos-da-semana-virada_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 1,54** | +6,1% | +28,5% | +5,7% | +29,5% | +26,8% | +32,8% | **+214,0%** (+26,0% · R\$ 31.401) |
| **como no vídeo (alvo 2.000, stop 400)** | −0,7% | +24,4% | +2,8% | +24,0% | +34,9% | +1,1% | **+114,7%** (+16,7% · R\$ 21.472) |
| **alvo 1.000** | +0,2% | +15,3% | +4,6% | +15,6% | +35,3% | −7,3% | **+75,0%** (+12,0% · R\$ 17.504) |
| **alvo 3.000** | −0,7% | +33,0% | +5,3% | +26,1% | +37,3% | +0,2% | **+141,3%** (+19,5% · R\$ 24.130) |
| **alvo 4.000, stop 600** | +4,0% | +36,2% | +0,9% | +39,7% | +20,3% | +21,0% | **+190,9%** (+24,1% · R\$ 29.086) |
| **sem virada de mão (só o rompimento)** | −3,0% | +27,9% | +4,9% | +28,6% | +31,0% | +3,2% | **+126,3%** (+17,9% · R\$ 22.633) |
| **risco 1%** | +5,5% | +42,6% | +0,9% | +39,3% | +35,4% | +33,9% | **+283,5%** (+31,2% · R\$ 38.348) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *ATR 0,21 / 1,54* | *risco 1%* | *Ibovespa* | *alvo 4.000, stop 600* | *alvo 3.000* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/extremos-da-semana-virada_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 1,54 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +3,3% | +3,1% | +0,6% | −3,4% |
> | dez/2021 | +2,7% | +2,4% | +0,7% | +2,9% |
> | jan/2022 | +2,5% | +3,2% | +0,7% | +7,0% |
> | fev/2022 | +0,4% | +0,9% | +0,8% | +0,9% |
> | mar/2022 | +13,1% | +16,0% | +0,9% | +6,1% |
> | abr/2022 | −1,2% | −2,1% | +0,8% | −10,1% |
> | mai/2022 | +4,4% | +5,4% | +1,0% | +3,2% |
> | jun/2022 | +2,4% | +2,5% | +1,0% | −11,5% |
> | jul/2022 | +2,0% | +2,8% | +1,0% | +4,7% |
> | ago/2022 | +9,5% | +13,0% | +1,2% | +6,2% |
> | set/2022 | −2,8% | −2,9% | +1,1% | +0,5% |
> | out/2022 | +5,7% | +5,5% | +1,0% | +5,5% |
> | nov/2022 | −5,9% | −3,8% | +1,0% | −3,1% |
> | dez/2022 | −3,1% | −2,5% | +1,1% | −2,4% |
> | jan/2023 | +2,5% | +2,4% | +1,1% | +3,4% |
> | fev/2023 | −5,4% | −6,3% | +0,9% | −7,5% |
> | mar/2023 | −0,6% | −1,1% | +1,2% | −2,9% |
> | abr/2023 | +5,2% | +5,9% | +0,9% | +2,5% |
> | mai/2023 | +4,8% | +5,2% | +1,1% | +3,7% |
> | jun/2023 | +2,0% | +2,3% | +1,1% | +9,0% |
> | jul/2023 | −1,2% | −1,8% | +1,1% | +3,3% |
> | ago/2023 | −0,0% | −0,2% | +1,1% | −5,1% |
> | set/2023 | −0,5% | −1,2% | +1,0% | +0,7% |
> | out/2023 | −4,6% | −6,9% | +1,0% | −2,9% |
> | nov/2023 | +6,2% | +7,4% | +0,9% | +12,5% |
> | dez/2023 | −2,1% | −3,5% | +0,9% | +5,4% |
> | jan/2024 | +2,8% | +3,5% | +1,0% | −4,8% |
> | fev/2024 | +6,4% | +8,4% | +0,8% | +1,0% |
> | mar/2024 | −0,3% | −1,1% | +0,8% | −0,7% |
> | abr/2024 | +2,5% | +3,9% | +0,9% | −1,7% |
> | mai/2024 | +5,5% | +8,6% | +0,8% | −3,0% |
> | jun/2024 | +1,2% | +0,7% | +0,8% | +1,5% |
> | jul/2024 | −0,3% | +0,1% | +0,9% | +3,0% |
> | ago/2024 | +8,5% | +12,6% | +0,9% | +6,5% |
> | set/2024 | +1,9% | +2,2% | +0,8% | −3,1% |
> | out/2024 | +0,2% | −0,4% | +0,9% | −1,6% |
> | nov/2024 | −4,1% | −5,8% | +0,8% | −3,1% |
> | dez/2024 | +2,4% | +2,2% | +0,8% | −4,3% |
> | jan/2025 | −7,9% | −10,2% | +1,0% | +4,9% |
> | fev/2025 | +7,8% | +9,9% | +1,0% | −2,6% |
> | mar/2025 | +18,2% | +22,6% | +1,0% | +6,1% |
> | abr/2025 | −9,0% | −8,0% | +1,1% | +3,7% |
> | mai/2025 | +2,7% | +3,6% | +1,1% | +1,5% |
> | jun/2025 | +2,1% | +2,8% | +1,1% | +1,3% |
> | jul/2025 | −4,9% | −6,1% | +1,3% | −4,2% |
> | ago/2025 | +9,9% | +11,3% | +1,2% | +6,3% |
> | set/2025 | −5,1% | −6,8% | +1,2% | +3,4% |
> | out/2025 | +3,3% | +3,8% | +1,3% | +2,3% |
> | nov/2025 | +5,2% | +6,8% | +1,1% | +6,4% |
> | dez/2025 | +5,0% | +5,8% | +1,1% | +1,3% |
> | jan/2026 | +11,4% | +11,4% | +1,2% | +12,6% |
> | fev/2026 | +2,9% | +2,1% | +1,0% | +4,1% |
> | mar/2026 | +6,0% | +4,0% | +1,2% | −0,7% |
> | abr/2026 | +12,4% | +10,0% | +1,1% | −0,1% |
> | mai/2026 | +5,9% | +5,1% | +1,1% | −7,2% |
> | jun/2026 | +7,6% | +6,7% | +1,1% | −1,0% |
> | jul/2026 | +1,7% | +1,4% | +1,2% | +3,5% |
> | ago/2026 | +4,9% | +4,3% | +1,1% | −0,3% |
> | set/2026 | −10,8% | −7,2% | +1,1% | +5,0% |
> | out/2026 | −10,4% | −6,4% | +1,0% | −9,9% |
> | **Acumulado** | **+214,0%** | **+283,5%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 1,54** | +37% ao ano · queda −43% | +26% ao ano · queda −23% | +20% ao ano · queda −11% | +16% ao ano · queda −5% |
| **como no vídeo (alvo 2.000, stop 400)** | +18% ao ano · queda −37% | +17% ao ano · queda −20% | +15% ao ano · queda −9% | +14% ao ano · queda −4% |
| **alvo 1.000** | +9% ao ano · queda −36% | +12% ao ano · queda −16% | +13% ao ano · queda −7% | +13% ao ano · queda −2% |
| **alvo 3.000** | +23% ao ano · queda −37% | +19% ao ano · queda −20% | +16% ao ano · queda −9% | +15% ao ano · queda −4% |
| **alvo 4.000, stop 600** | +32% ao ano · queda −41% | +24% ao ano · queda −22% | +19% ao ano · queda −11% | +16% ao ano · queda −4% |
| **sem virada de mão (só o rompimento)** | +21% ao ano · queda −23% | +18% ao ano · queda −11% | +16% ao ano · queda −5% | +14% ao ano · queda −1% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 602 operações, 33% de acerto e fator de lucro 1,13. O vídeo mostra: 896 operações · 33% de acerto · payoff 2,67 (desde 2015, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,09R por operação no treino (p 0,242) e +0,20R no teste (p 0,038). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,00 a +0,20R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,09 → +0,20R · sem virada de mão: +0,11 → +0,26R · sem exigir abertura dentro da faixa: +0,03 → +0,12R · ordens válidas até 12h: +0,14 → +0,20R · ordens válidas o dia todo: +0,10 → +0,21R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,09 → +0,20R · 25 pts: +0,06 → +0,17R · 30 pts: +0,05 → +0,16R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,54 foi de −R\$ 2.821 por contrato (começou em ago/2026, ainda não recuperada); 16 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,54 + CDI ficou abaixo do CDI em 37% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2023.
- **Acerto de ~36%:** a maioria das operações dá stop; sequências de stops são normais.
- ['A virada de mão SUBTRAI valor nos nossos dados', 'O vídeo apresenta a virada de mão como o ajuste que fez a estratégia funcionar. Nos nossos dados ela faz o contrário: a peça **sem virada de mão** rende **+0,109R no treino e +0,261R no teste** contra **+0,085R e +0,199R** da versão completa, com 364 operações em vez de 585 — as ~221 entradas de virada são negativas no agregado. A vantagem do setup está no **rompimento** dos extremos da semana, não na reversão.']
- ['Por que então o setup continua com a virada', 'Porque tirá-la agora seria escolher pelo resultado do teste, que é exatamente o que este site não faz. A versão publicada é a do vídeo, e a peça acima fica registrada como indício. Se os dados AO VIVO confirmarem, a troca se faz com dados que ninguém viu — aí ela vale. (Detalhe técnico: a versão principal é escolhida pelo treino com os valores em PONTOS do vídeo e só depois o stop e o alvo viram ATR; sob a saída em ATR que acabou sendo usada, o treino também prefere a versão sem virada. A comparação estrutural e a saída usada não coincidem — é limitação da bateria, não do setup.)']
- ['É rompimento, não reversão', 'Foi testado procurando um setup de REVERSÃO para descorrelacionar a carteira, e acabou sendo rompimento. Ele serve de aposta nova porque ficou em família própria (os extremos da SEMANA, decididos na abertura, são mecanismo diferente dos rompimentos intradiários), mas não é o diversificador contra-tendência que faltava.']
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

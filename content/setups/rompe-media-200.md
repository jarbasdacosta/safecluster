---
title: Rompimento da Média de 200
date: 2026-11-18
tags: [setup, win]
---

**O dia abre de um lado da média de 200 e, quando o preço atravessa a média a favor da de 300, entra no rompimento atrás de um alvo longo.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · das 9h às 16h

🎬 **Vídeo de origem:** [Arthur 777 – "95% de acerto, vários testes (500 trades)"](https://youtu.be/GGi3PKhC0Jo) · testado de forma independente nos nossos dados em 14/11/2026 · página gerada em 18/11/2026 19:47 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 134.329** arriscando **1% do capital** por operação (+6% ao ano · pior queda −11% · cauda −15%)
> - **R\$ 174.367** arriscando **2% do capital** por operação (+12% ao ano · pior queda −22% · cauda −28%)
>
> - **R\$ 182.387** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **1 operações** · acerto 0% · **−1,02R por operação** (no teste 2024 →: +0,14R) · líquido −650 pts (−R\$ 130 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/rompe-media-200_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Abertura do dia** | **abaixo** da média aritmética de 200 | **acima** da média de 200 |
| **2. Rompimento** | a vela cruza a média de 200 **de baixo para cima** e fecha acima dela | cruza **de cima para baixo** e fecha abaixo |
| **3. Filtro** | a vela fecha **acima** da média aritmética de 300 | fecha **abaixo** da média de 300 |
| **Entrada** | ordem de compra na **máxima** da vela (válida na vela seguinte) | ordem de venda na **mínima** |
| **Alvo · stop** | 2.000 · 400 pts no vídeo → em ATR aqui | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 624 pts de stop e 3.121 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 3.032 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** (principal) | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | 39% · 1,84 | +91,8 → +15,4 | +16,6% | −10,7% |
| **como no vídeo (alvo 2.000)** | stop 400 · alvo 2.000 pts | 39% · 2,16 | +134,9 → +60,1 | +20,9% | −6,9% |
| **alvo 1.000** | stop 400 · alvo 1.000 pts | 41% · 1,72 | +69,5 → +30,0 | +16,8% | −6,9% |
| **alvo 2.000, stop 200 (payoff alto do vídeo)** | stop 200 · alvo 2.000 pts | 22% · 3,68 | +61,7 → −21,8 | +13,6% | −6,4% |
| **entrada a mercado** | stop 400 · alvo 2.000 pts | 36% · 2,24 | +124,9 → +25,1 | +19,7% | −11,5% |
| **com break even a 400 pts** | stop 400 · alvo 2.000 pts | 34% · 2,68 | +123,7 → +55,8 | +20,5% | −7,0% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 79 | 127 | 206 |
| Operações por mês | 2,9 | 3,6 | 3,3 |
| Taxa de acerto | 43,0% | 36,2% | 38,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 57% / 38% | 5% / 54% / 41% | 5% / 55% / 40% |
| Stop típico | 390 pts | 390 pts | 390 pts |
| Ganho médio · perda média | +762 · −414 pts | +817 · −440 pts | +793 · −431 pts |
| Payoff (ganho médio ÷ perda média) | 1,84 | 1,86 | 1,84 |
| Fator de lucro (total ganho ÷ total perdido) | 1,39 | 1,05 | 1,17 |
| Resultado médio por operação | +91,8 pts (+106,8 sem custo) | +15,4 pts (+30,4 sem custo) | +44,7 pts (+59,7 sem custo) |
| **Lucro líquido** | **+7.253 pts · R\$ 1.451** | **+1.956 pts · R\$ 391** | **+9.208 pts · R\$ 1.842** |
| Pior queda (drawdown) | −3.613 pts · −R\$ 723 | −8.823 pts · −R\$ 1.765 | −8.823 pts · −R\$ 1.765 |
| Maior sequência de perdas | 7 seguidas | 14 seguidas | 14 seguidas |
| Compras: acerto · lucro | 39% · +1.868 pts | 33% · +1.903 pts | 36% · +3.771 pts |
| Vendas: acerto · lucro | 46% · +5.385 pts | 39% · +53 pts | 42% · +5.438 pts |

### Versão como no vídeo (alvo 2.000)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 80 | 126 | 206 |
| Operações por mês | 3,0 | 3,6 | 3,3 |
| Taxa de acerto | 45,0% | 34,9% | 38,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 6% / 51% / 42% | 5% / 57% / 38% | 5% / 55% / 40% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +796 · −406 pts | +881 · −381 pts | +843 · −389 pts |
| Payoff (ganho médio ÷ perda média) | 1,96 | 2,32 | 2,16 |
| Fator de lucro (total ganho ÷ total perdido) | 1,60 | 1,24 | 1,37 |
| Resultado médio por operação | +134,9 pts (+149,9 sem custo) | +60,1 pts (+75,1 sem custo) | +89,2 pts (+104,2 sem custo) |
| **Lucro líquido** | **+10.795 pts · R\$ 2.159** | **+7.570 pts · R\$ 1.514** | **+18.365 pts · R\$ 3.673** |
| Pior queda (drawdown) | −3.735 pts · −R\$ 747 | −5.180 pts · −R\$ 1.036 | −5.180 pts · −R\$ 1.036 |
| Maior sequência de perdas | 9 seguidas | 13 seguidas | 13 seguidas |
| Compras: acerto · lucro | 38% · +2.675 pts | 34% · +5.515 pts | 35% · +8.190 pts |
| Vendas: acerto · lucro | 52% · +8.120 pts | 36% · +2.055 pts | 42% · +10.175 pts |

### Versão alvo 1.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 81 | 126 | 207 |
| Operações por mês | 3,0 | 3,6 | 3,3 |
| Taxa de acerto | 45,7% | 38,1% | 41,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 21% / 51% / 28% | 20% / 55% / 25% | 20% / 53% / 27% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +635 · −406 pts | +703 · −384 pts | +673 · −392 pts |
| Payoff (ganho médio ÷ perda média) | 1,56 | 1,83 | 1,72 |
| Fator de lucro (total ganho ÷ total perdido) | 1,32 | 1,13 | 1,20 |
| Resultado médio por operação | +69,5 pts (+84,5 sem custo) | +30,0 pts (+45,0 sem custo) | +45,5 pts (+60,5 sem custo) |
| **Lucro líquido** | **+5.630 pts · R\$ 1.126** | **+3.785 pts · R\$ 757** | **+9.415 pts · R\$ 1.883** |
| Pior queda (drawdown) | −3.735 pts · −R\$ 747 | −4.780 pts · −R\$ 956 | −4.780 pts · −R\$ 956 |
| Maior sequência de perdas | 9 seguidas | 13 seguidas | 13 seguidas |
| Compras: acerto · lucro | 38% · −1.310 pts | 35% · +1.365 pts | 36% · +55 pts |
| Vendas: acerto · lucro | 54% · +6.940 pts | 41% · +2.420 pts | 46% · +9.360 pts |

### Versão alvo 2.000, stop 200 (payoff alto do vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 87 | 141 | 228 |
| Operações por mês | 3,2 | 4,0 | 3,7 |
| Taxa de acerto | 27,6% | 19,1% | 22,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 72% / 25% | 2% / 80% / 18% | 2% / 77% / 21% |
| Stop típico | 200 pts | 200 pts | 200 pts |
| Ganho médio · perda média | +798 · −219 pts | +794 · −215 pts | +796 · −216 pts |
| Payoff (ganho médio ÷ perda média) | 3,65 | 3,69 | 3,68 |
| Fator de lucro (total ganho ÷ total perdido) | 1,39 | 0,87 | 1,06 |
| Resultado médio por operação | +61,7 pts (+76,7 sem custo) | −21,8 pts (−6,8 sem custo) | +10,1 pts (+25,1 sem custo) |
| **Lucro líquido** | **+5.365 pts · R\$ 1.073** | **−3.070 pts · −R\$ 614** | **+2.295 pts · R\$ 459** |
| Pior queda (drawdown) | −2.670 pts · −R\$ 534 | −6.420 pts · −R\$ 1.284 | −6.420 pts · −R\$ 1.284 |
| Maior sequência de perdas | 12 seguidas | 21 seguidas | 21 seguidas |
| Compras: acerto · lucro | 23% · +1.245 pts | 19% · +1.145 pts | 21% · +2.390 pts |
| Vendas: acerto · lucro | 32% · +4.120 pts | 19% · −4.215 pts | 24% · −95 pts |

### Versão entrada a mercado

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 98 | 156 | 254 |
| Operações por mês | 3,6 | 4,5 | 4,1 |
| Taxa de acerto | 40,8% | 32,7% | 35,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 56% / 39% | 5% / 60% / 35% | 5% / 59% / 36% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +887 · −401 pts | +878 · −389 pts | +882 · −393 pts |
| Payoff (ganho médio ÷ perda média) | 2,21 | 2,26 | 2,24 |
| Fator de lucro (total ganho ÷ total perdido) | 1,53 | 1,10 | 1,25 |
| Resultado médio por operação | +124,9 pts (+139,9 sem custo) | +25,1 pts (+40,1 sem custo) | +63,6 pts (+78,6 sem custo) |
| **Lucro líquido** | **+12.240 pts · R\$ 2.448** | **+3.915 pts · R\$ 783** | **+16.155 pts · R\$ 3.231** |
| Pior queda (drawdown) | −4.565 pts · −R\$ 913 | −9.270 pts · −R\$ 1.854 | −9.270 pts · −R\$ 1.854 |
| Maior sequência de perdas | 11 seguidas | 20 seguidas | 20 seguidas |
| Compras: acerto · lucro | 35% · +2.730 pts | 29% · +2.400 pts | 31% · +5.130 pts |
| Vendas: acerto · lucro | 46% · +9.510 pts | 37% · +1.515 pts | 40% · +11.025 pts |

### Versão com break even a 400 pts

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 82 | 132 | 214 |
| Operações por mês | 3,0 | 3,8 | 3,5 |
| Taxa de acerto | 40,2% | 30,3% | 34,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 6% / 46% / 37% | 4% / 49% / 33% | 5% / 48% / 34% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +812 · −340 pts | +894 · −309 pts | +857 · −320 pts |
| Payoff (ganho médio ÷ perda média) | 2,39 | 2,90 | 2,68 |
| Fator de lucro (total ganho ÷ total perdido) | 1,61 | 1,26 | 1,39 |
| Resultado médio por operação | +123,7 pts (+138,7 sem custo) | +55,8 pts (+70,8 sem custo) | +81,8 pts (+96,8 sem custo) |
| **Lucro líquido** | **+10.140 pts · R\$ 2.028** | **+7.365 pts · R\$ 1.473** | **+17.505 pts · R\$ 3.501** |
| Pior queda (drawdown) | −3.350 pts · −R\$ 670 | −5.100 pts · −R\$ 1.020 | −5.100 pts · −R\$ 1.020 |
| Maior sequência de perdas | 10 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 32% · +1.785 pts | 28% · +4.600 pts | 30% · +6.385 pts |
| Vendas: acerto · lucro | 48% · +8.355 pts | 33% · +2.765 pts | 39% · +11.120 pts |

![Pontos acumulados com 1 contrato](setups/img/rompe-media-200_pontos.png)

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
| **ATR 0,21 / 1,03** | **R\$ 21.510** · +16,6% | −10,7% | 9,1% · 0,40 | 44% · 41% | −4,3% · +9,1% |
| **como no vídeo (alvo 2.000)** | **R\$ 25.833** · +20,9% | −6,9% | 9,1% · 0,81 | 46% · 43% | −4,4% · +8,5% |
| **alvo 1.000** | **R\$ 21.756** · +16,8% | −6,9% | 7,3% · 0,51 | 52% · 39% | −4,4% · +6,4% |
| **alvo 2.000, stop 200 (payoff alto do vídeo)** | **R\$ 18.907** · +13,6% | −6,4% | 6,8% · 0,13 | 31% · 46% | −2,9% · +7,3% |
| **entrada a mercado** | **R\$ 24.594** · +19,7% | −11,5% | 10,2% · 0,64 | 46% · 44% | −4,7% · +8,8% |
| **com break even a 400 pts** | **R\$ 25.433** · +20,5% | −7,0% | 8,8% · 0,80 | 46% · 44% | −4,1% · +8,4% |
| **risco 1%** | **R\$ 24.843** · +20,0% | −10,4% | 10,6% · 0,63 | 44% · 49% | −6,9% · +10,6% |
| **pura** | **R\$ 11.776** · +3,3% | −16,6% | 9,1% · −0,92 | 28% · 36% | −5,2% · +7,9% |
| **CDI** | **R\$ 18.267** · +12,8% | 0,0% | 0,1% · — | — · 46% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.873** · +9,7% | −20,9% | 18,6% · −0,06 | 54% · — | −11,5% · +12,6% |

![Quedas](setups/img/rompe-media-200_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** | −4,6% | +22,0% | +26,7% | +10,6% | +34,6% | −2,0% | **+115,1%** (+16,6% · R\$ 21.510) |
| **como no vídeo (alvo 2.000)** | −4,8% | +29,2% | +28,5% | +12,5% | +31,4% | +10,5% | **+158,3%** (+20,9% · R\$ 25.833) |
| **alvo 1.000** | −3,1% | +19,1% | +24,0% | +10,1% | +27,2% | +8,5% | **+117,6%** (+16,8% · R\$ 21.756) |
| **alvo 2.000, stop 200 (payoff alto do vídeo)** | −3,4% | +18,7% | +24,2% | +4,7% | +19,6% | +6,0% | **+89,1%** (+13,6% · R\$ 18.907) |
| **entrada a mercado** | −6,2% | +38,2% | +25,3% | +6,8% | +33,5% | +6,2% | **+145,9%** (+19,7% · R\$ 24.594) |
| **com break even a 400 pts** | −4,2% | +29,8% | +25,6% | +11,5% | +28,8% | +13,4% | **+154,3%** (+20,5% · R\$ 25.433) |
| **risco 1%** | −4,1% | +23,6% | +27,6% | +11,5% | +40,2% | +5,1% | **+148,4%** (+20,0% · R\$ 24.843) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,3% | **+82,7%** (+12,8% · R\$ 18.267) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,0% | **+58,7%** (+9,7% · R\$ 15.873) |
| *Quem ganhou* | *CDI* | *entrada a mercado* | *como no vídeo (alvo 2.000)* | *como no vídeo (alvo 2.000)* | *risco 1%* | *com break even a 400 pts* | *como no vídeo (alvo 2.000)* |

\* ano parcial: os dados vão de 01/11/2021 a 18/11/2026.

![Retorno por ano](setups/img/rompe-media-200_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 1,03 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | −3,5% | −3,4% | +0,6% | −3,4% |
> | dez/2021 | −1,1% | −0,7% | +0,7% | +2,9% |
> | jan/2022 | +5,0% | +6,3% | +0,7% | +7,0% |
> | fev/2022 | −1,6% | −2,2% | +0,8% | +0,9% |
> | mar/2022 | +4,7% | +6,0% | +0,9% | +6,1% |
> | abr/2022 | +0,8% | +0,8% | +0,8% | −10,1% |
> | mai/2022 | +1,0% | +1,0% | +1,0% | +3,2% |
> | jun/2022 | +0,7% | +0,4% | +1,0% | −11,5% |
> | jul/2022 | +1,5% | +1,3% | +1,0% | +4,7% |
> | ago/2022 | +4,8% | +5,7% | +1,2% | +6,2% |
> | set/2022 | −0,7% | −0,9% | +1,1% | +0,5% |
> | out/2022 | −1,2% | −1,0% | +1,0% | +5,5% |
> | nov/2022 | +4,1% | +3,4% | +1,0% | −3,1% |
> | dez/2022 | +1,1% | +1,1% | +1,1% | −2,4% |
> | jan/2023 | +3,2% | +2,9% | +1,1% | +3,4% |
> | fev/2023 | +5,5% | +6,0% | +0,9% | −7,5% |
> | mar/2023 | −0,1% | −0,3% | +1,2% | −2,9% |
> | abr/2023 | +1,2% | +1,2% | +0,9% | +2,5% |
> | mai/2023 | +3,0% | +3,4% | +1,1% | +3,7% |
> | jun/2023 | +1,1% | +1,1% | +1,1% | +9,0% |
> | jul/2023 | +4,9% | +5,8% | +1,1% | +3,3% |
> | ago/2023 | +2,3% | +2,6% | +1,1% | −5,1% |
> | set/2023 | −1,2% | −2,0% | +1,0% | +0,7% |
> | out/2023 | +1,9% | +2,4% | +1,0% | −2,9% |
> | nov/2023 | +4,7% | +6,2% | +0,9% | +12,5% |
> | dez/2023 | −2,1% | −4,1% | +0,9% | +5,4% |
> | jan/2024 | +1,0% | +1,1% | +1,0% | −4,8% |
> | fev/2024 | −1,3% | −2,2% | +0,8% | +1,0% |
> | mar/2024 | +6,5% | +10,6% | +0,8% | −0,7% |
> | abr/2024 | +1,0% | +1,5% | +0,9% | −1,7% |
> | mai/2024 | −0,0% | −0,3% | +0,8% | −3,0% |
> | jun/2024 | +0,2% | −0,2% | +0,8% | +1,5% |
> | jul/2024 | +0,9% | +1,0% | +0,9% | +3,0% |
> | ago/2024 | +0,5% | +0,2% | +0,9% | +6,5% |
> | set/2024 | +4,0% | +5,5% | +0,8% | −3,1% |
> | out/2024 | −4,3% | −6,9% | +0,9% | −1,6% |
> | nov/2024 | +0,5% | +0,1% | +0,8% | −3,1% |
> | dez/2024 | +1,4% | +1,5% | +0,8% | −4,3% |
> | jan/2025 | +4,2% | +5,4% | +1,0% | +4,9% |
> | fev/2025 | +7,2% | +8,9% | +1,0% | −2,6% |
> | mar/2025 | −2,2% | −2,6% | +1,0% | +6,1% |
> | abr/2025 | +1,1% | +1,1% | +1,1% | +3,7% |
> | mai/2025 | +1,6% | +1,6% | +1,1% | +1,5% |
> | jun/2025 | +0,7% | +0,6% | +1,1% | +1,3% |
> | jul/2025 | +1,3% | +1,3% | +1,3% | −4,2% |
> | ago/2025 | +1,0% | +1,1% | +1,2% | +6,3% |
> | set/2025 | +3,5% | +4,5% | +1,2% | +3,4% |
> | out/2025 | +2,1% | +2,3% | +1,3% | +2,3% |
> | nov/2025 | +1,1% | +1,1% | +1,1% | +6,4% |
> | dez/2025 | +9,1% | +10,0% | +1,1% | +1,3% |
> | jan/2026 | +5,8% | +6,7% | +1,2% | +12,6% |
> | fev/2026 | −1,7% | −0,6% | +1,0% | +4,1% |
> | mar/2026 | −4,0% | −1,9% | +1,2% | −0,7% |
> | abr/2026 | −0,2% | +0,1% | +1,1% | −0,1% |
> | mai/2026 | −2,9% | −2,2% | +1,1% | −7,2% |
> | jun/2026 | −1,3% | −0,9% | +1,1% | −1,0% |
> | jul/2026 | +4,5% | +4,1% | +1,2% | +3,5% |
> | ago/2026 | +1,1% | +1,1% | +1,1% | −0,3% |
> | set/2026 | −2,1% | −1,0% | +1,1% | +5,0% |
> | out/2026 | 0,0% | +0,4% | +1,1% | −9,9% |
> | nov/2026 | −0,7% | −0,4% | +0,6% | −0,2% |
> | **Acumulado** | **+115,1%** | **+148,4%** | **+82,7%** | **+58,7%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 1,03** | +19% ao ano · queda −25% | +17% ao ano · queda −11% | +15% ao ano · queda −3% | +14% ao ano · queda −2% |
| **como no vídeo (alvo 2.000)** | +29% ao ano · queda −15% | +21% ao ano · queda −7% | +17% ao ano · queda −3% | +15% ao ano · queda −1% |
| **alvo 1.000** | +20% ao ano · queda −15% | +17% ao ano · queda −7% | +15% ao ano · queda −3% | +14% ao ano · queda −1% |
| **alvo 2.000, stop 200 (payoff alto do vídeo)** | +14% ao ano · queda −17% | +14% ao ano · queda −6% | +13% ao ano · queda −2% | +13% ao ano · queda −1% |
| **entrada a mercado** | +26% ao ano · queda −26% | +20% ao ano · queda −12% | +16% ao ano · queda −4% | +15% ao ano · queda −2% |
| **com break even a 400 pts** | +28% ao ano · queda −15% | +21% ao ano · queda −7% | +17% ao ano · queda −3% | +15% ao ano · queda −1% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 14/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 204 operações, 40% de acerto e fator de lucro 1,48. O vídeo mostra: 533 operações · 37% de acerto · payoff 2,57 (2015–2026, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,23R por operação no treino (p 0,044) e +0,14R no teste (p 0,068). |
| **É sorte de parâmetro?** | 8 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,10 a +0,27R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,23 → +0,14R · sem o filtro da abertura do dia: +0,16 → −0,01R · sem o filtro da média de 300: +0,34 → +0,07R · entrada a mercado: +0,24 → +0,09R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,23 → +0,14R · 25 pts: +0,20 → +0,12R · 30 pts: +0,19 → +0,11R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 1.765 por contrato (começou em jan/2026, ainda não recuperada); 14 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 56% dos meses. O resultado aparece no ano.
- **Opera pouco** (~3,3 operações por mês): os números têm mais incerteza.
- **Anos negativos:** 2021, 2026.
- **Acerto de ~39%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 18/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

<!-- FICHA-COMPLETA-INICIO -->

## Todas as medidas

Os três modos de risco lado a lado. **dividido** é 1% repartido entre os setups da carteira; **1%** e **2%** são por operação, independentemente de quantos setups você opera.


<details>
<summary><b>Ficha completa de Rompimento da Média de 200</b></summary>

| Medida | Risco dividido | Risco 1% | Risco 2% |
|---|---|---|---|
| Operações | 206 | 206 | 206 |
| Operações por ano | 41 | 41 | 41 |
| Taxa de acerto | 38,8% | 38,8% | 38,8% |
| Payoff (ganho médio ÷ perda média) | 2,02 | 2,02 | 2,02 |
| Expectativa por operação (em R) | 0,163 | 0,163 | 0,163 |
| Fator de lucro | 1,28 | 1,28 | 1,28 |
| Pontos no período | 9.208 | 9.208 | 9.208 |
| Lucro com 1 contrato fixo | R\$ 1.842 | R\$ 1.842 | R\$ 1.842 |
| Capital final | R\$ 134.329 | R\$ 134.329 | R\$ 174.367 |
| Múltiplo do capital | 1,34× | 1,34× | 1,74× |
| Rentabilidade ao ano | +6,0% | +6,0% | +11,6% |
| Pior queda do período | -11,4% | -11,4% | -21,8% |
| Pior queda dentro de um ano | -11,4% | -11,4% | -21,8% |
| Cauda — pior em 1 de 20 anos | -14,9% | -14,9% | -28,2% |
| Maior tempo sem novo topo (dias) | 292 | 292 | 292 |
| Meses positivos | 44% | 44% | 44% |
| Sharpe | 0,63 | 0,63 | 0,64 |
| Sortino | 0,79 | 0,79 | 0,80 |
| Pregões para dobrar o capital | — | — | 1.047 |
| Contratos na 1ª operação | 9 | 9 | 18 |
| Maior lote | 23 | 23 | 56 |
| Operações no teto de contratos | 0% | 0% | 0% |

</details>

<!-- FICHA-COMPLETA-FIM -->

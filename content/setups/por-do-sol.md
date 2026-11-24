---
title: Pôr do Sol (17h45)
date: 2026-11-24
tags: [setup, win]
---

**Se às 17h50 o dia inteiro andou forte para um lado, entra a favor desse movimento e sai em poucos minutos, no máximo às 18h10.**

🟡 promissor · Mini índice (WIN) · gráfico de 5 minutos · só a vela das 17h45

🎬 **Vídeo de origem:** [Arthur 777 – "padrão repetitivo, 90% de acerto no candle de 17:45"](https://youtu.be/HswLyQd9rm8) · testado de forma independente nos nossos dados em 21/11/2026 · página gerada em 24/11/2026 19:46 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 135.889** arriscando **1% do capital** por operação (+6% ao ano · pior queda −10% · cauda −5%)
> - **R\$ 185.011** arriscando **2% do capital** por operação (+13% ao ano · pior queda −19% · cauda −10%)
>
> - **R\$ 182.665** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **6 operações** · acerto 83% · **+0,29R por operação** (no teste 2024 →: +0,09R) · líquido +1.000 pts (R\$ 200 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/por-do-sol_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Vela das 17h45** | fecha **pelo menos 1.000 pts acima** da abertura do dia (em ATR aqui) | fecha **pelo menos 1.000 pts abaixo** da abertura do dia |
| **Entrada** | **a mercado** na abertura das 17h50 | igual |
| **Alvo · stop** | 50 · 300 pts no vídeo → em ATR aqui | igual |
| **Saída no tempo** | zera às **18h10** se não bateu alvo nem stop | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,15 / 0,15** — stop 0,154 ATR · alvo 0,154 ATR (1,0× o stop); hoje ≈ 422 pts de stop e 422 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 2.735 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,15 / 0,15** (principal) | stop 0,154 ATR · alvo 0,154 ATR (1,0× o stop) | 53% · 1,21 | +11,7 → +23,0 | +16,9% | −2,7% |
| **como no vídeo (alvo 50)** | stop 300 · alvo 50 pts | 78% · 0,29 | −13,9 → +12,7 | +13,1% | −1,9% |
| **alvo 220 (vídeo, versão WIN)** | stop 300 · alvo 220 pts | 55% · 1,20 | +5,4 → +33,1 | +17,7% | −3,1% |
| **alvo 300 (1 para 1)** | stop 300 · alvo 300 pts | 54% · 1,24 | +12,0 → +26,9 | +17,5% | −2,9% |
| **alvo 180** | stop 300 · alvo 180 pts | 56% · 1,08 | −0,7 → +31,2 | +16,8% | −3,2% |
| **distância de 500 pts** | stop 300 · alvo 50 pts | 75% · 0,29 | −15,3 → +4,7 | +11,3% | −4,1% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,15 / 0,15

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 288 | 503 |
| Operações por mês | 8,0 | 8,2 | 8,1 |
| Taxa de acerto | 52,1% | 54,5% | 53,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 8% / 2% / 90% | 8% / 3% / 88% | 8% / 3% / 89% |
| Stop típico | 295 pts | 289 pts | 293 pts |
| Ganho médio · perda média | +120 · −106 pts | +123 · −97 pts | +122 · −101 pts |
| Payoff (ganho médio ÷ perda média) | 1,13 | 1,27 | 1,21 |
| Fator de lucro (total ganho ÷ total perdido) | 1,23 | 1,52 | 1,39 |
| Resultado médio por operação | +11,7 pts (+26,7 sem custo) | +23,0 pts (+38,0 sem custo) | +18,2 pts (+33,2 sem custo) |
| **Lucro líquido** | **+2.511 pts · R\$ 502** | **+6.623 pts · R\$ 1.325** | **+9.134 pts · R\$ 1.827** |
| Pior queda (drawdown) | −2.829 pts · −R\$ 566 | −1.815 pts · −R\$ 363 | −3.099 pts · −R\$ 620 |
| Maior sequência de perdas | 8 seguidas | 6 seguidas | 8 seguidas |
| Compras: acerto · lucro | 47% · −725 pts | 55% · +2.699 pts | 52% · +1.974 pts |
| Vendas: acerto · lucro | 57% · +3.236 pts | 54% · +3.925 pts | 55% · +7.160 pts |

### Versão como no vídeo (alvo 50)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 288 | 503 |
| Operações por mês | 8,0 | 8,2 | 8,1 |
| Taxa de acerto | 70,7% | 84,0% | 78,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 64% / 3% / 33% | 83% / 2% / 15% | 75% / 2% / 23% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +33 · −128 pts | +35 · −103 pts | +34 · −117 pts |
| Payoff (ganho médio ÷ perda média) | 0,26 | 0,34 | 0,29 |
| Fator de lucro (total ganho ÷ total perdido) | 0,63 | 1,77 | 1,05 |
| Resultado médio por operação | −13,9 pts (+1,1 sem custo) | +12,7 pts (+27,7 sem custo) | +1,3 pts (+16,3 sem custo) |
| **Lucro líquido** | **−2.995 pts · −R\$ 599** | **+3.665 pts · R\$ 733** | **+670 pts · R\$ 134** |
| Pior queda (drawdown) | −3.685 pts · −R\$ 737 | −470 pts · −R\$ 94 | −4.115 pts · −R\$ 823 |
| Maior sequência de perdas | 4 seguidas | 3 seguidas | 4 seguidas |
| Compras: acerto · lucro | 67% · −2.475 pts | 86% · +2.030 pts | 77% · −445 pts |
| Vendas: acerto · lucro | 75% · −520 pts | 83% · +1.635 pts | 79% · +1.115 pts |

### Versão alvo 220 (vídeo, versão WIN)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 288 | 503 |
| Operações por mês | 8,0 | 8,2 | 8,1 |
| Taxa de acerto | 52,1% | 57,6% | 55,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 16% / 3% / 80% | 24% / 4% / 72% | 21% / 4% / 75% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +111 · −109 pts | +124 · −90 pts | +118 · −99 pts |
| Payoff (ganho médio ÷ perda média) | 1,01 | 1,37 | 1,20 |
| Fator de lucro (total ganho ÷ total perdido) | 1,10 | 1,86 | 1,48 |
| Resultado médio por operação | +5,4 pts (+20,4 sem custo) | +33,1 pts (+48,1 sem custo) | +21,2 pts (+36,2 sem custo) |
| **Lucro líquido** | **+1.155 pts · R\$ 231** | **+9.530 pts · R\$ 1.906** | **+10.685 pts · R\$ 2.137** |
| Pior queda (drawdown) | −2.825 pts · −R\$ 565 | −920 pts · −R\$ 184 | −3.175 pts · −R\$ 635 |
| Maior sequência de perdas | 8 seguidas | 6 seguidas | 8 seguidas |
| Compras: acerto · lucro | 47% · −1.650 pts | 60% · +5.110 pts | 54% · +3.460 pts |
| Vendas: acerto · lucro | 57% · +2.805 pts | 55% · +4.420 pts | 56% · +7.225 pts |

### Versão alvo 300 (1 para 1)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 288 | 503 |
| Operações por mês | 8,0 | 8,2 | 8,1 |
| Taxa de acerto | 52,1% | 54,9% | 53,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 10% / 3% / 87% | 12% / 5% / 83% | 11% / 4% / 85% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +123 · −109 pts | +126 · −94 pts | +125 · −101 pts |
| Payoff (ganho médio ÷ perda média) | 1,13 | 1,34 | 1,24 |
| Fator de lucro (total ganho ÷ total perdido) | 1,23 | 1,63 | 1,44 |
| Resultado médio por operação | +12,0 pts (+27,0 sem custo) | +26,9 pts (+41,9 sem custo) | +20,5 pts (+35,5 sem custo) |
| **Lucro líquido** | **+2.585 pts · R\$ 517** | **+7.740 pts · R\$ 1.548** | **+10.325 pts · R\$ 2.065** |
| Pior queda (drawdown) | −2.825 pts · −R\$ 565 | −945 pts · −R\$ 189 | −3.095 pts · −R\$ 619 |
| Maior sequência de perdas | 8 seguidas | 6 seguidas | 8 seguidas |
| Compras: acerto · lucro | 47% · −1.035 pts | 56% · +3.415 pts | 52% · +2.380 pts |
| Vendas: acerto · lucro | 57% · +3.620 pts | 54% · +4.325 pts | 55% · +7.945 pts |

### Versão alvo 180

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 288 | 503 |
| Operações por mês | 8,0 | 8,2 | 8,1 |
| Taxa de acerto | 52,1% | 59,7% | 56,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 19% / 3% / 78% | 31% / 4% / 65% | 26% / 4% / 70% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +99 · −109 pts | +114 · −91 pts | +108 · −100 pts |
| Payoff (ganho médio ÷ perda média) | 0,91 | 1,25 | 1,08 |
| Fator de lucro (total ganho ÷ total perdido) | 0,99 | 1,85 | 1,41 |
| Resultado médio por operação | −0,7 pts (+14,3 sem custo) | +31,2 pts (+46,2 sem custo) | +17,6 pts (+32,6 sem custo) |
| **Lucro líquido** | **−150 pts · −R\$ 30** | **+8.980 pts · R\$ 1.796** | **+8.830 pts · R\$ 1.766** |
| Pior queda (drawdown) | −3.110 pts · −R\$ 622 | −915 pts · −R\$ 183 | −3.465 pts · −R\$ 693 |
| Maior sequência de perdas | 8 seguidas | 6 seguidas | 8 seguidas |
| Compras: acerto · lucro | 47% · −2.145 pts | 62% · +4.775 pts | 56% · +2.630 pts |
| Vendas: acerto · lucro | 57% · +1.995 pts | 57% · +4.205 pts | 57% · +6.200 pts |

### Versão distância de 500 pts

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 372 | 484 | 856 |
| Operações por mês | 13,8 | 13,8 | 13,8 |
| Taxa de acerto | 71,2% | 77,5% | 74,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 65% / 3% / 32% | 76% / 2% / 22% | 71% / 2% / 26% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +33 · −136 pts | +35 · −98 pts | +34 · −117 pts |
| Payoff (ganho médio ÷ perda média) | 0,25 | 0,35 | 0,29 |
| Fator de lucro (total ganho ÷ total perdido) | 0,61 | 1,21 | 0,87 |
| Resultado médio por operação | −15,3 pts (−0,3 sem custo) | +4,7 pts (+19,7 sem custo) | −4,0 pts (+11,0 sem custo) |
| **Lucro líquido** | **−5.695 pts · −R\$ 1.139** | **+2.295 pts · R\$ 459** | **−3.400 pts · −R\$ 680** |
| Pior queda (drawdown) | −6.455 pts · −R\$ 1.291 | −1.545 pts · −R\$ 309 | −6.925 pts · −R\$ 1.385 |
| Maior sequência de perdas | 5 seguidas | 4 seguidas | 5 seguidas |
| Compras: acerto · lucro | 66% · −4.980 pts | 79% · +1.860 pts | 73% · −3.120 pts |
| Vendas: acerto · lucro | 76% · −715 pts | 76% · +435 pts | 76% · −280 pts |

![Pontos acumulados com 1 contrato](setups/img/por-do-sol_pontos.png)

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
| **ATR 0,15 / 0,15** | **R\$ 21.909** · +16,9% | −2,7% | 3,0% · 1,20 | 66% · 52% | −0,9% · +3,5% |
| **como no vídeo (alvo 50)** | **R\$ 18.531** · +13,1% | −1,9% | 1,5% · 0,18 | 56% · 51% | −0,6% · +1,8% |
| **alvo 220 (vídeo, versão WIN)** | **R\$ 22.608** · +17,7% | −3,1% | 2,7% · 1,55 | 69% · 54% | −1,3% · +4,8% |
| **alvo 300 (1 para 1)** | **R\$ 22.439** · +17,5% | −2,9% | 3,0% · 1,39 | 66% · 52% | −1,2% · +3,7% |
| **alvo 180** | **R\$ 21.790** · +16,8% | −3,2% | 2,6% · 1,37 | 70% · 52% | −1,4% · +4,0% |
| **distância de 500 pts** | **R\$ 17.074** · +11,3% | −4,1% | 2,1% · −0,65 | 52% · 49% | −1,5% · +2,2% |
| **risco 1%** | **R\$ 25.074** · +20,1% | −3,0% | 4,4% · 1,45 | 66% · 56% | −1,4% · +6,0% |
| **pura** | **R\$ 11.977** · +3,7% | −6,0% | 3,0% · −2,77 | 23% · 49% | −2,0% · +2,8% |
| **CDI** | **R\$ 18.295** · +12,8% | 0,0% | 0,1% · — | — · 46% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.652** · +9,4% | −21,2% | 18,6% · −0,07 | 54% · — | −11,5% · +12,6% |

![Quedas](setups/img/por-do-sol_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,15 / 0,15** | +3,9% | +16,5% | +11,6% | +21,5% | +17,1% | +14,0% | **+119,1%** (+16,9% · R\$ 21.909) |
| **como no vídeo (alvo 50)** | +1,8% | +10,3% | +7,8% | +13,6% | +15,3% | +16,9% | **+85,3%** (+13,1% · R\$ 18.531) |
| **alvo 220 (vídeo, versão WIN)** | +3,0% | +14,9% | +11,1% | +20,6% | +17,9% | +20,9% | **+126,1%** (+17,7% · R\$ 22.608) |
| **alvo 300 (1 para 1)** | +3,4% | +16,6% | +12,2% | +21,5% | +17,0% | +16,7% | **+124,4%** (+17,5% · R\$ 22.439) |
| **alvo 180** | +2,7% | +13,5% | +9,9% | +20,6% | +17,7% | +19,8% | **+117,9%** (+16,8% · R\$ 21.790) |
| **distância de 500 pts** | +1,9% | +5,6% | +6,5% | +14,4% | +11,9% | +16,3% | **+70,7%** (+11,3% · R\$ 17.074) |
| **risco 1%** | +4,7% | +21,1% | +10,0% | +33,5% | +18,5% | +13,7% | **+150,7%** (+20,1% · R\$ 25.074) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,5% | **+82,9%** (+12,8% · R\$ 18.295) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +2,5% | **+56,5%** (+9,4% · R\$ 15.652) |
| *Quem ganhou* | *risco 1%* | *risco 1%* | *Ibovespa* | *risco 1%* | *Ibovespa* | *alvo 220 (vídeo, versão WIN)* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 24/11/2026.

![Retorno por ano](setups/img/por-do-sol_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,15 / 0,15 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +1,6% | +1,9% | +0,6% | −3,4% |
> | dez/2021 | +2,3% | +2,8% | +0,7% | +2,9% |
> | jan/2022 | +1,4% | +2,0% | +0,7% | +7,0% |
> | fev/2022 | +3,5% | +6,0% | +0,8% | +0,9% |
> | mar/2022 | +1,1% | +1,3% | +0,9% | +6,1% |
> | abr/2022 | +1,2% | +1,5% | +0,8% | −10,1% |
> | mai/2022 | +1,5% | +1,7% | +1,0% | +3,2% |
> | jun/2022 | +2,0% | +2,4% | +1,0% | −11,5% |
> | jul/2022 | +1,4% | +1,6% | +1,0% | +4,7% |
> | ago/2022 | +0,5% | +0,1% | +1,2% | +6,2% |
> | set/2022 | +1,8% | +2,1% | +1,1% | +0,5% |
> | out/2022 | −0,5% | −1,0% | +1,0% | +5,5% |
> | nov/2022 | −0,6% | −0,5% | +1,0% | −3,1% |
> | dez/2022 | +2,1% | +2,3% | +1,1% | −2,4% |
> | jan/2023 | +1,8% | +2,0% | +1,1% | +3,4% |
> | fev/2023 | +3,2% | +4,3% | +0,9% | −7,5% |
> | mar/2023 | +2,1% | +2,7% | +1,2% | −2,9% |
> | abr/2023 | −0,5% | −1,4% | +0,9% | +2,5% |
> | mai/2023 | +0,2% | −0,4% | +1,1% | +3,7% |
> | jun/2023 | +1,1% | +1,3% | +1,1% | +9,0% |
> | jul/2023 | +0,3% | −0,2% | +1,1% | +3,3% |
> | ago/2023 | +0,5% | −0,0% | +1,1% | −5,1% |
> | set/2023 | +0,7% | +0,4% | +1,0% | +0,7% |
> | out/2023 | +0,7% | +0,6% | +1,0% | −2,9% |
> | nov/2023 | +0,3% | −0,2% | +0,9% | +12,5% |
> | dez/2023 | +0,7% | +0,5% | +0,9% | +5,4% |
> | jan/2024 | +2,2% | +3,3% | +1,0% | −4,8% |
> | fev/2024 | +2,1% | +3,3% | +0,8% | +1,0% |
> | mar/2024 | +1,3% | +2,0% | +0,8% | −0,7% |
> | abr/2024 | +1,4% | +1,8% | +0,9% | −1,7% |
> | mai/2024 | +1,9% | +3,0% | +0,8% | −3,0% |
> | jun/2024 | +1,7% | +2,7% | +0,8% | +1,5% |
> | jul/2024 | +2,0% | +3,7% | +0,9% | +3,0% |
> | ago/2024 | +1,8% | +2,8% | +0,9% | +6,5% |
> | set/2024 | +0,7% | +0,4% | +0,8% | −3,1% |
> | out/2024 | +1,6% | +2,4% | +0,9% | −1,6% |
> | nov/2024 | +1,2% | +1,7% | +0,8% | −3,1% |
> | dez/2024 | +1,6% | +2,2% | +0,8% | −4,3% |
> | jan/2025 | +2,3% | +3,3% | +1,0% | +4,9% |
> | fev/2025 | +1,5% | +1,9% | +1,0% | −2,6% |
> | mar/2025 | −0,2% | −1,0% | +1,0% | +6,1% |
> | abr/2025 | +1,4% | +1,5% | +1,1% | +3,7% |
> | mai/2025 | +2,7% | +3,4% | +1,1% | +1,5% |
> | jun/2025 | +0,6% | +0,4% | +1,1% | +1,3% |
> | jul/2025 | +1,2% | +1,1% | +1,3% | −4,2% |
> | ago/2025 | +1,2% | +1,2% | +1,2% | +6,3% |
> | set/2025 | +0,9% | +0,7% | +1,2% | +3,4% |
> | out/2025 | +2,0% | +2,4% | +1,3% | +2,3% |
> | nov/2025 | +0,2% | −0,5% | +1,1% | +6,4% |
> | dez/2025 | +2,1% | +2,8% | +1,1% | +1,3% |
> | jan/2026 | −0,9% | −1,0% | +1,2% | +12,6% |
> | fev/2026 | +1,1% | +1,2% | +1,0% | +4,1% |
> | mar/2026 | +1,1% | +1,1% | +1,2% | −0,7% |
> | abr/2026 | +2,2% | +2,2% | +1,1% | −0,1% |
> | mai/2026 | +0,1% | 0,0% | +1,1% | −7,2% |
> | jun/2026 | +1,7% | +1,7% | +1,1% | −1,0% |
> | jul/2026 | +1,5% | +1,6% | +1,2% | +3,5% |
> | ago/2026 | +1,4% | +1,4% | +1,1% | −0,3% |
> | set/2026 | −0,3% | −0,2% | +1,1% | +5,0% |
> | out/2026 | +3,0% | +2,8% | +1,1% | −9,9% |
> | nov/2026 | +2,5% | +2,3% | +0,7% | −1,6% |
> | **Acumulado** | **+119,1%** | **+150,7%** | **+82,9%** | **+56,5%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,15 / 0,15** | +21% ao ano · queda −6% | +17% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **como no vídeo (alvo 50)** | +13% ao ano · queda −4% | +13% ao ano · queda −2% | +13% ao ano · queda −1% | +13% ao ano · queda −0% |
| **alvo 220 (vídeo, versão WIN)** | +23% ao ano · queda −7% | +18% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **alvo 300 (1 para 1)** | +22% ao ano · queda −7% | +17% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **alvo 180** | +21% ao ano · queda −7% | +17% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **distância de 500 pts** | +10% ao ano · queda −9% | +11% ao ano · queda −4% | +12% ao ano · queda −2% | +12% ao ano · queda −0% |

*Referência: CDI +13% ao ano · Ibovespa +9% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 21/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 503 operações, 80% de acerto e fator de lucro 1,73. O vídeo mostra: 258 operações · 86% de acerto · fator de lucro 3,17 (desde jan/2024, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,04R por operação no treino (p 0,001) e +0,09R no teste (p 0,000). |
| **É sorte de parâmetro?** | 6 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,12 a +0,18R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,04 → +0,09R · sem exigir distância da abertura: −0,02 → +0,01R · distância de 2.000: +0,03 → +0,19R · zera às 18h20 (como os outros setups): +0,07 → +0,08R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,04 → +0,09R · 25 pts: +0,01 → +0,05R · 30 pts: −0,01 → +0,04R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,15 / 0,15 foi de −R\$ 620 por contrato (começou em mar/2023, recuperada em jul/2024); 8 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,15 / 0,15 + CDI ficou abaixo do CDI em 34% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2023.
- **As vendas carregam o setup:** compras +0,04R × vendas +0,09R por operação.
- **Alvo curto com custo:** o alvo do vídeo (50 pts) é pouco mais de 3 vezes o custo de 15 pts, e o stop é 6 vezes o alvo. Basta uma sequência ruim para apagar dezenas de acertos. As versões com alvo maior existem justamente para ver se o setup se sustenta sem depender da taxa de acerto.
- **Pouco tempo de mercado:** 20 minutos no fim do pregão, justo quando o livro afina e o giro cai.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 24/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

<!-- FICHA-COMPLETA-INICIO -->

## Todas as medidas

Os três modos de risco lado a lado. **dividido** é 1% repartido entre os setups da carteira; **1%** e **2%** são por operação, independentemente de quantos setups você opera.


<details>
<summary><b>Ficha completa de Pôr do Sol (17h45)</b></summary>

| Medida | Risco dividido | Risco 1% | Risco 2% |
|---|---|---|---|
| Operações | 503 | 503 | 503 |
| Operações por ano | 99 | 99 | 99 |
| Taxa de acerto | 53,5% | 53,5% | 53,5% |
| Payoff (ganho médio ÷ perda média) | 1,27 | 1,27 | 1,27 |
| Expectativa por operação (em R) | 0,064 | 0,064 | 0,064 |
| Fator de lucro | 1,47 | 1,47 | 1,47 |
| Pontos no período | 9.134 | 9.134 | 9.134 |
| Lucro com 1 contrato fixo | R\$ 1.827 | R\$ 1.827 | R\$ 1.827 |
| Capital final | R\$ 135.889 | R\$ 135.889 | R\$ 185.011 |
| Múltiplo do capital | 1,36× | 1,36× | 1,85× |
| Rentabilidade ao ano | +6,2% | +6,2% | +12,9% |
| Pior queda do período | -9,7% | -9,7% | -18,8% |
| Pior queda dentro de um ano | -8,7% | -8,7% | -17,0% |
| Cauda — pior em 1 de 20 anos | -5,1% | -5,1% | -9,9% |
| Maior tempo sem novo topo (dias) | 442 | 442 | 442 |
| Meses positivos | 65% | 65% | 65% |
| Sharpe | 1,45 | 1,45 | 1,45 |
| Sortino | 1,48 | 1,48 | 1,48 |
| Contratos na 1ª operação | 12 | 12 | 24 |
| Maior lote | 32 | 32 | 79 |
| Operações no teto de contratos | 0% | 0% | 0% |

</details>

<!-- FICHA-COMPLETA-FIM -->

---
title: Pôr do Sol (17h45)
date: 2026-11-07
tags: [setup, win]
---

**Se às 17h50 o dia inteiro andou forte para um lado, entra a favor desse movimento e sai em poucos minutos, no máximo às 18h10.**

🟡 promissor · Mini índice (WIN) · gráfico de 5 minutos · só a vela das 17h45

🎬 **Vídeo de origem:** [Arthur 777 – "padrão repetitivo, 90% de acerto no candle de 17:45"](https://youtu.be/HswLyQd9rm8) · testado de forma independente nos nossos dados em 07/11/2026 · página gerada em 07/11/2026 21:52 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 21.554** na versão ATR 0,15 / 0,15 com o capital no CDI (+17% ao ano · pior queda −3%)
> - **R\$ 18.376** na versão como no vídeo (alvo 50) com o capital no CDI (+13% ao ano · pior queda −2%)
> - **R\$ 22.230** na versão alvo 220 (vídeo, versão WIN) com o capital no CDI (+17% ao ano · pior queda −3%)
> - **R\$ 22.071** na versão alvo 300 (1 para 1) com o capital no CDI (+17% ao ano · pior queda −3%)
> - **R\$ 21.385** na versão alvo 180 com o capital no CDI (+17% ao ano · pior queda −3%)
> - **R\$ 16.919** na versão distância de 500 pts com o capital no CDI (+11% ao ano · pior queda −4%)
> - **R\$ 18.193** só no CDI (+13% ao ano)
> - **R\$ 15.964** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 24.684** na versão ATR 0,15 / 0,15 **arriscando 1% do capital por operação** (+20% ao ano · pior queda −3%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **2 operações** · acerto 100% · **+0,35R por operação** (no teste 2024 →: +0,08R) · líquido +460 pts (R\$ 92 por contrato)
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

- **Versão principal (escolhida só pelo treino): ATR 0,15 / 0,15** — stop 0,154 ATR · alvo 0,154 ATR (1,0× o stop); hoje ≈ 648 pts de stop e 648 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.201 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,15 / 0,15** (principal) | stop 0,154 ATR · alvo 0,154 ATR (1,0× o stop) | 53% · 1,20 | +11,7 → +21,4 | +16,7% | −2,7% |
| **como no vídeo (alvo 50)** | stop 300 · alvo 50 pts | 78% · 0,29 | −13,9 → +12,4 | +13,0% | −1,9% |
| **alvo 220 (vídeo, versão WIN)** | stop 300 · alvo 220 pts | 55% · 1,19 | +5,4 → +31,6 | +17,4% | −3,1% |
| **alvo 300 (1 para 1)** | stop 300 · alvo 300 pts | 54% · 1,23 | +12,0 → +25,3 | +17,3% | −2,9% |
| **alvo 180** | stop 300 · alvo 180 pts | 56% · 1,08 | −0,7 → +29,3 | +16,5% | −3,2% |
| **distância de 500 pts** | stop 300 · alvo 50 pts | 75% · 0,29 | −15,3 → +4,4 | +11,2% | −4,1% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,15 / 0,15

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 284 | 499 |
| Operações por mês | 8,0 | 8,1 | 8,0 |
| Taxa de acerto | 52,1% | 54,2% | 53,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 8% / 2% / 90% | 8% / 4% / 88% | 8% / 3% / 89% |
| Stop típico | 295 pts | 287 pts | 292 pts |
| Ganho médio · perda média | +120 · −106 pts | +121 · −97 pts | +121 · −101 pts |
| Payoff (ganho médio ÷ perda média) | 1,13 | 1,25 | 1,20 |
| Fator de lucro (total ganho ÷ total perdido) | 1,23 | 1,48 | 1,36 |
| Resultado médio por operação | +11,7 pts (+26,7 sem custo) | +21,4 pts (+36,4 sem custo) | +17,2 pts (+32,2 sem custo) |
| **Lucro líquido** | **+2.511 pts · R\$ 502** | **+6.083 pts · R\$ 1.217** | **+8.594 pts · R\$ 1.719** |
| Pior queda (drawdown) | −2.829 pts · −R\$ 566 | −1.815 pts · −R\$ 363 | −3.099 pts · −R\$ 620 |
| Maior sequência de perdas | 8 seguidas | 6 seguidas | 8 seguidas |
| Compras: acerto · lucro | 47% · −725 pts | 55% · +2.459 pts | 51% · +1.734 pts |
| Vendas: acerto · lucro | 57% · +3.236 pts | 54% · +3.625 pts | 55% · +6.860 pts |

### Versão como no vídeo (alvo 50)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 284 | 499 |
| Operações por mês | 8,0 | 8,1 | 8,0 |
| Taxa de acerto | 70,7% | 83,8% | 78,2% |
| Bateram o alvo / o stop / zeraram no fim do dia | 64% / 3% / 33% | 83% / 2% / 15% | 75% / 2% / 23% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +33 · −128 pts | +35 · −103 pts | +34 · −117 pts |
| Payoff (ganho médio ÷ perda média) | 0,26 | 0,34 | 0,29 |
| Fator de lucro (total ganho ÷ total perdido) | 0,63 | 1,74 | 1,04 |
| Resultado médio por operação | −13,9 pts (+1,1 sem custo) | +12,4 pts (+27,4 sem custo) | +1,1 pts (+16,1 sem custo) |
| **Lucro líquido** | **−2.995 pts · −R\$ 599** | **+3.525 pts · R\$ 705** | **+530 pts · R\$ 106** |
| Pior queda (drawdown) | −3.685 pts · −R\$ 737 | −470 pts · −R\$ 94 | −4.115 pts · −R\$ 823 |
| Maior sequência de perdas | 4 seguidas | 3 seguidas | 4 seguidas |
| Compras: acerto · lucro | 67% · −2.475 pts | 85% · +1.995 pts | 77% · −480 pts |
| Vendas: acerto · lucro | 75% · −520 pts | 82% · +1.530 pts | 79% · +1.010 pts |

### Versão alvo 220 (vídeo, versão WIN)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 284 | 499 |
| Operações por mês | 8,0 | 8,1 | 8,0 |
| Taxa de acerto | 52,1% | 57,4% | 55,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 16% / 3% / 80% | 24% / 4% / 72% | 20% / 4% / 76% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +111 · −109 pts | +122 · −91 pts | +118 · −99 pts |
| Payoff (ganho médio ÷ perda média) | 1,01 | 1,35 | 1,19 |
| Fator de lucro (total ganho ÷ total perdido) | 1,10 | 1,82 | 1,46 |
| Resultado médio por operação | +5,4 pts (+20,4 sem custo) | +31,6 pts (+46,6 sem custo) | +20,3 pts (+35,3 sem custo) |
| **Lucro líquido** | **+1.155 pts · R\$ 231** | **+8.965 pts · R\$ 1.793** | **+10.120 pts · R\$ 2.024** |
| Pior queda (drawdown) | −2.825 pts · −R\$ 565 | −920 pts · −R\$ 184 | −3.175 pts · −R\$ 635 |
| Maior sequência de perdas | 8 seguidas | 6 seguidas | 8 seguidas |
| Compras: acerto · lucro | 47% · −1.650 pts | 60% · +4.905 pts | 54% · +3.255 pts |
| Vendas: acerto · lucro | 57% · +2.805 pts | 55% · +4.060 pts | 56% · +6.865 pts |

### Versão alvo 300 (1 para 1)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 284 | 499 |
| Operações por mês | 8,0 | 8,1 | 8,0 |
| Taxa de acerto | 52,1% | 54,6% | 53,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 10% / 3% / 87% | 12% / 5% / 83% | 11% / 4% / 85% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +123 · −109 pts | +125 · −94 pts | +124 · −101 pts |
| Payoff (ganho médio ÷ perda média) | 1,13 | 1,32 | 1,23 |
| Fator de lucro (total ganho ÷ total perdido) | 1,23 | 1,59 | 1,42 |
| Resultado médio por operação | +12,0 pts (+27,0 sem custo) | +25,3 pts (+40,3 sem custo) | +19,6 pts (+34,6 sem custo) |
| **Lucro líquido** | **+2.585 pts · R\$ 517** | **+7.190 pts · R\$ 1.438** | **+9.775 pts · R\$ 1.955** |
| Pior queda (drawdown) | −2.825 pts · −R\$ 565 | −945 pts · −R\$ 189 | −3.095 pts · −R\$ 619 |
| Maior sequência de perdas | 8 seguidas | 6 seguidas | 8 seguidas |
| Compras: acerto · lucro | 47% · −1.035 pts | 55% · +3.175 pts | 52% · +2.140 pts |
| Vendas: acerto · lucro | 57% · +3.620 pts | 54% · +4.015 pts | 55% · +7.635 pts |

### Versão alvo 180

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 215 | 284 | 499 |
| Operações por mês | 8,0 | 8,1 | 8,0 |
| Taxa de acerto | 52,1% | 59,2% | 56,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 19% / 3% / 78% | 30% / 4% / 65% | 25% / 4% / 71% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +99 · −109 pts | +112 · −91 pts | +107 · −100 pts |
| Payoff (ganho médio ÷ perda média) | 0,91 | 1,23 | 1,08 |
| Fator de lucro (total ganho ÷ total perdido) | 0,99 | 1,79 | 1,37 |
| Resultado médio por operação | −0,7 pts (+14,3 sem custo) | +29,3 pts (+44,3 sem custo) | +16,4 pts (+31,4 sem custo) |
| **Lucro líquido** | **−150 pts · −R\$ 30** | **+8.320 pts · R\$ 1.664** | **+8.170 pts · R\$ 1.634** |
| Pior queda (drawdown) | −3.110 pts · −R\$ 622 | −915 pts · −R\$ 183 | −3.465 pts · −R\$ 693 |
| Maior sequência de perdas | 8 seguidas | 6 seguidas | 8 seguidas |
| Compras: acerto · lucro | 47% · −2.145 pts | 62% · +4.610 pts | 56% · +2.465 pts |
| Vendas: acerto · lucro | 57% · +1.995 pts | 56% · +3.710 pts | 57% · +5.705 pts |

### Versão distância de 500 pts

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 372 | 479 | 851 |
| Operações por mês | 13,8 | 13,7 | 13,7 |
| Taxa de acerto | 71,2% | 77,2% | 74,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 65% / 3% / 32% | 76% / 2% / 22% | 71% / 2% / 26% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +33 · −136 pts | +35 · −98 pts | +34 · −117 pts |
| Payoff (ganho médio ÷ perda média) | 0,25 | 0,35 | 0,29 |
| Fator de lucro (total ganho ÷ total perdido) | 0,61 | 1,20 | 0,86 |
| Resultado médio por operação | −15,3 pts (−0,3 sem custo) | +4,4 pts (+19,4 sem custo) | −4,2 pts (+10,8 sem custo) |
| **Lucro líquido** | **−5.695 pts · −R\$ 1.139** | **+2.120 pts · R\$ 424** | **−3.575 pts · −R\$ 715** |
| Pior queda (drawdown) | −6.455 pts · −R\$ 1.291 | −1.545 pts · −R\$ 309 | −6.925 pts · −R\$ 1.385 |
| Maior sequência de perdas | 5 seguidas | 4 seguidas | 5 seguidas |
| Compras: acerto · lucro | 66% · −4.980 pts | 78% · +1.790 pts | 73% · −3.190 pts |
| Vendas: acerto · lucro | 76% · −715 pts | 76% · +330 pts | 76% · −385 pts |

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
| **ATR 0,15 / 0,15** | **R\$ 21.554** · +16,7% | −2,7% | 3,0% · 1,15 | 66% · 52% | −0,9% · +3,5% |
| **como no vídeo (alvo 50)** | **R\$ 18.376** · +13,0% | −1,9% | 1,5% · 0,14 | 56% · 49% | −0,6% · +1,8% |
| **alvo 220 (vídeo, versão WIN)** | **R\$ 22.230** · +17,4% | −3,1% | 2,7% · 1,48 | 69% · 54% | −1,3% · +4,8% |
| **alvo 300 (1 para 1)** | **R\$ 22.071** · +17,3% | −2,9% | 3,0% · 1,33 | 66% · 52% | −1,2% · +3,7% |
| **alvo 180** | **R\$ 21.385** · +16,5% | −3,2% | 2,6% · 1,28 | 70% · 52% | −1,4% · +4,0% |
| **distância de 500 pts** | **R\$ 16.919** · +11,2% | −4,1% | 2,1% · −0,68 | 52% · 49% | −1,5% · +2,2% |
| **risco 1%** | **R\$ 24.684** · +19,9% | −3,0% | 4,4% · 1,41 | 66% · 56% | −1,4% · +6,0% |
| **pura** | **R\$ 11.848** · +3,5% | −6,0% | 3,0% · −2,83 | 23% · 49% | −2,0% · +2,8% |
| **CDI** | **R\$ 18.193** · +12,8% | +0,0% | 0,1% · — | — · 44% | +0,2% · +1,3% |
| **Ibovespa** | **R\$ 15.964** · +9,9% | −20,9% | 18,6% · −0,05 | 56% · — | −11,5% · +12,6% |

![Quedas](setups/img/por-do-sol_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,15 / 0,15** | +3,9% | +16,5% | +11,6% | +21,5% | +17,1% | +12,2% | **+115,5%** (+16,7% · R\$ 21.554) |
| **como no vídeo (alvo 50)** | +1,8% | +10,3% | +7,8% | +13,6% | +15,3% | +16,0% | **+83,8%** (+13,0% · R\$ 18.376) |
| **alvo 220 (vídeo, versão WIN)** | +3,0% | +14,9% | +11,1% | +20,6% | +17,9% | +18,9% | **+122,3%** (+17,4% · R\$ 22.230) |
| **alvo 300 (1 para 1)** | +3,4% | +16,6% | +12,2% | +21,5% | +17,0% | +14,8% | **+120,7%** (+17,3% · R\$ 22.071) |
| **alvo 180** | +2,7% | +13,5% | +9,9% | +20,6% | +17,7% | +17,6% | **+113,9%** (+16,5% · R\$ 21.385) |
| **distância de 500 pts** | +1,9% | +5,6% | +6,5% | +14,4% | +11,9% | +15,2% | **+69,2%** (+11,2% · R\$ 16.919) |
| **risco 1%** | +4,7% | +21,1% | +10,0% | +33,5% | +18,5% | +11,9% | **+146,8%** (+19,9% · R\$ 24.684) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,9% | **+81,9%** (+12,8% · R\$ 18.193) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,6% | **+59,6%** (+9,9% · R\$ 15.964) |
| *Quem ganhou* | *risco 1%* | *risco 1%* | *Ibovespa* | *risco 1%* | *Ibovespa* | *alvo 220 (vídeo, versão WIN)* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 06/11/2026.

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
> | mai/2026 | +0,1% | +0,0% | +1,1% | −7,2% |
> | jun/2026 | +1,7% | +1,7% | +1,1% | −1,0% |
> | jul/2026 | +1,5% | +1,6% | +1,2% | +3,5% |
> | ago/2026 | +1,4% | +1,4% | +1,1% | −0,3% |
> | set/2026 | −0,3% | −0,2% | +1,1% | +5,0% |
> | out/2026 | +3,0% | +2,8% | +1,1% | −9,9% |
> | nov/2026 | +0,9% | +0,7% | +0,2% | +0,3% |
> | **Acumulado** | **+115,5%** | **+146,8%** | **+81,9%** | **+59,6%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,15 / 0,15** | +21% ao ano · queda −6% | +17% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **como no vídeo (alvo 50)** | +13% ao ano · queda −4% | +13% ao ano · queda −2% | +13% ao ano · queda −1% | +13% ao ano · queda −0% |
| **alvo 220 (vídeo, versão WIN)** | +22% ao ano · queda −7% | +17% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **alvo 300 (1 para 1)** | +22% ao ano · queda −7% | +17% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **alvo 180** | +20% ao ano · queda −7% | +17% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **distância de 500 pts** | +10% ao ano · queda −9% | +11% ao ano · queda −4% | +12% ao ano · queda −2% | +12% ao ano · queda −0% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 07/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 499 operações, 80% de acerto e fator de lucro 1,71. O vídeo mostra: 258 operações · 86% de acerto · fator de lucro 3,17 (desde jan/2024, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,04R por operação no treino (p 0,005) e +0,08R no teste (p 0,000). |
| **É sorte de parâmetro?** | 6 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,12 a +0,17R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,04 → +0,08R · sem exigir distância da abertura: −0,02 → +0,01R · distância de 2.000: +0,03 → +0,19R · zera às 18h20 (como os outros setups): +0,07 → +0,07R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,04 → +0,08R · 25 pts: +0,01 → +0,05R · 30 pts: −0,01 → +0,03R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,15 / 0,15 foi de −R\$ 620 por contrato (começou em mar/2023, recuperada em jul/2024); 8 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,15 / 0,15 + CDI ficou abaixo do CDI em 34% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2023.
- **As vendas carregam o setup:** compras +0,04R × vendas +0,09R por operação.
- **Alvo curto com custo:** o alvo do vídeo (50 pts) é pouco mais de 3 vezes o custo de 15 pts, e o stop é 6 vezes o alvo. Basta uma sequência ruim para apagar dezenas de acertos. As versões com alvo maior existem justamente para ver se o setup se sustenta sem depender da taxa de acerto.
- **Pouco tempo de mercado:** 20 minutos no fim do pregão, justo quando o livro afina e o giro cai.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 06/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

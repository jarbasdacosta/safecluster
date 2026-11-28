---
title: Primeira Vela de Quinta
date: 2026-11-28
tags: [setup, win]
---

**Na quinta-feira, entra no rompimento da primeira vela de 15 minutos do dia, na direção da cor dela, com stop e alvo iguais.**

🟡 promissor · dia escolhido pelo autor · Mini índice (WIN) · gráfico de 15 minutos · só a primeira vela do dia

🎬 **Vídeo de origem:** [Arthur 777 – "descobri um padrão bizarro no mini índice"](https://youtu.be/5pmW0UMnXwE) · testado de forma independente nos nossos dados em 28/11/2026 · página gerada em 28/11/2026 08:18 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 125.274** arriscando **1% do capital** por operação (+5% ao ano · pior queda −6% · cauda −7%)
> - **R\$ 156.750** arriscando **2% do capital** por operação (+9% ao ano · pior queda −12% · cauda −14%)
>
> - **R\$ 182.943** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **3 operações** · acerto 33% · **−0,36R por operação** (no teste 2024 →: +0,19R) · líquido −845 pts (−R\$ 169 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/primeira-vela-de-quinta_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Primeira vela** | a vela das 9h00 fecha **positiva** | a vela das 9h00 fecha **negativa** |
| **2. Dia** | **quinta-feira** (no vídeo) | igual |
| **Entrada** | ordem de compra na **máxima** dela (só na vela seguinte) | ordem de venda na **mínima** |
| **Stop · alvo** | 400 · 400 pts no vídeo → em ATR aqui | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 0,21** — stop 0,206 ATR · alvo 0,206 ATR (1,0× o stop); hoje ≈ 708 pts de stop e 708 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 3.441 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 0,21** (principal) | stop 0,206 ATR · alvo 0,206 ATR (1,0× o stop) | 63% · 0,83 | +106,6 → +50,1 | +16,4% | −3,7% |
| **todos os dias** | stop 400 · alvo 400 pts | 53% · 0,93 | +30,4 → −8,8 | +14,3% | −8,4% |
| **só quinta (vídeo)** | stop 400 · alvo 400 pts | 63% · 0,93 | +104,3 → +77,3 | +18,0% | −2,5% |
| **só quinta, entrada a mercado (vídeo)** | stop 400 · alvo 400 pts | 61% · 0,94 | +96,1 → +63,3 | +21,5% | −3,9% |
| **só quinta, corpo de 100+ (vídeo)** | stop 400 · alvo 400 pts | 65% · 0,93 | +124,1 → +89,6 | +18,0% | −2,0% |
| **todos os dias, entrada a mercado** | stop 400 · alvo 400 pts | 53% · 0,93 | +10,2 → +13,2 | +18,6% | −15,7% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 0,21

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 46 | 65 | 111 |
| Operações por mês | 1,7 | 1,9 | 1,8 |
| Taxa de acerto | 65,2% | 61,5% | 63,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 65% / 35% / 0% | 62% / 38% / 0% | 63% / 37% / 0% |
| Stop típico | 389 pts | 386 pts | 386 pts |
| Ganho médio · perda média | +387 · −420 pts | +407 · −520 pts | +398 · −481 pts |
| Payoff (ganho médio ÷ perda média) | 0,92 | 0,78 | 0,83 |
| Fator de lucro (total ganho ÷ total perdido) | 1,73 | 1,25 | 1,41 |
| Resultado médio por operação | +106,6 pts (+121,6 sem custo) | +50,1 pts (+65,1 sem custo) | +73,5 pts (+88,5 sem custo) |
| **Lucro líquido** | **+4.904 pts · R\$ 981** | **+3.257 pts · R\$ 651** | **+8.161 pts · R\$ 1.632** |
| Pior queda (drawdown) | −1.031 pts · −R\$ 206 | −4.099 pts · −R\$ 820 | −4.099 pts · −R\$ 820 |
| Maior sequência de perdas | 2 seguidas | 4 seguidas | 4 seguidas |
| Compras: acerto · lucro | 59% · +1.064 pts | 60% · +2.622 pts | 60% · +3.687 pts |
| Vendas: acerto · lucro | 71% · +3.839 pts | 63% · +635 pts | 66% · +4.474 pts |

### Versão todos os dias

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 282 | 391 | 673 |
| Operações por mês | 10,4 | 11,2 | 10,9 |
| Taxa de acerto | 55,7% | 50,9% | 52,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 56% / 44% / 0% | 51% / 49% / 1% | 53% / 47% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +383 · −415 pts | +384 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,92 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,17 | 0,96 | 1,04 |
| Resultado médio por operação | +30,4 pts (+45,4 sem custo) | −8,8 pts (+6,2 sem custo) | +7,6 pts (+22,6 sem custo) |
| **Lucro líquido** | **+8.570 pts · R\$ 1.714** | **−3.425 pts · −R\$ 685** | **+5.145 pts · R\$ 1.029** |
| Pior queda (drawdown) | −4.200 pts · −R\$ 840 | −7.760 pts · −R\$ 1.552 | −7.760 pts · −R\$ 1.552 |
| Maior sequência de perdas | 5 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 55% · +3.205 pts | 51% · −970 pts | 53% · +2.235 pts |
| Vendas: acerto · lucro | 56% · +5.365 pts | 51% · −2.455 pts | 53% · +2.910 pts |

### Versão só quinta (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 57 | 78 | 135 |
| Operações por mês | 2,1 | 2,2 | 2,2 |
| Taxa de acerto | 64,9% | 61,5% | 63,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 65% / 35% / 0% | 62% / 38% / 0% | 63% / 37% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +385 · −415 pts | +385 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,72 | 1,48 | 1,58 |
| Resultado médio por operação | +104,3 pts (+119,3 sem custo) | +77,3 pts (+92,3 sem custo) | +88,7 pts (+103,7 sem custo) |
| **Lucro líquido** | **+5.945 pts · R\$ 1.189** | **+6.030 pts · R\$ 1.206** | **+11.975 pts · R\$ 2.395** |
| Pior queda (drawdown) | −1.780 pts · −R\$ 356 | −2.580 pts · −R\$ 516 | −2.580 pts · −R\$ 516 |
| Maior sequência de perdas | 4 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 59% · +1.595 pts | 57% · +1.475 pts | 58% · +3.070 pts |
| Vendas: acerto · lucro | 70% · +4.350 pts | 65% · +4.555 pts | 67% · +8.905 pts |

### Versão só quinta, entrada a mercado (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 108 | 143 | 251 |
| Operações por mês | 4,0 | 4,1 | 4,0 |
| Taxa de acerto | 63,9% | 59,4% | 61,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 64% / 36% / 0% | 59% / 40% / 1% | 61% / 38% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +385 · −408 pts | +385 · −411 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 1,64 | 1,38 | 1,49 |
| Resultado médio por operação | +96,1 pts (+111,1 sem custo) | +63,3 pts (+78,3 sem custo) | +77,4 pts (+92,4 sem custo) |
| **Lucro líquido** | **+10.380 pts · R\$ 2.076** | **+9.045 pts · R\$ 1.809** | **+19.425 pts · R\$ 3.885** |
| Pior queda (drawdown) | −1.810 pts · −R\$ 362 | −2.490 pts · −R\$ 498 | −2.520 pts · −R\$ 504 |
| Maior sequência de perdas | 4 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 65% · +5.945 pts | 59% · +3.840 pts | 62% · +9.785 pts |
| Vendas: acerto · lucro | 63% · +4.435 pts | 59% · +5.205 pts | 61% · +9.640 pts |

### Versão só quinta, corpo de 100+ (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 46 | 65 | 111 |
| Operações por mês | 1,7 | 1,9 | 1,8 |
| Taxa de acerto | 67,4% | 63,1% | 64,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 67% / 33% / 0% | 63% / 37% / 0% | 65% / 35% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +385 · −415 pts | +385 · −415 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,92 | 1,58 | 1,71 |
| Resultado médio por operação | +124,1 pts (+139,1 sem custo) | +89,6 pts (+104,6 sem custo) | +103,9 pts (+118,9 sem custo) |
| **Lucro líquido** | **+5.710 pts · R\$ 1.142** | **+5.825 pts · R\$ 1.165** | **+11.535 pts · R\$ 2.307** |
| Pior queda (drawdown) | −860 pts · −R\$ 172 | −1.660 pts · −R\$ 332 | −1.660 pts · −R\$ 332 |
| Maior sequência de perdas | 2 seguidas | 4 seguidas | 4 seguidas |
| Compras: acerto · lucro | 59% · +1.270 pts | 60% · +1.950 pts | 60% · +3.220 pts |
| Vendas: acerto · lucro | 75% · +4.440 pts | 66% · +3.875 pts | 69% · +8.315 pts |

### Versão todos os dias, entrada a mercado

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 540 | 718 | 1.258 |
| Operações por mês | 20,0 | 20,5 | 20,3 |
| Taxa de acerto | 53,1% | 53,5% | 53,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 53% / 47% / 0% | 53% / 46% / 1% | 53% / 47% / 0% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +385 · −415 pts | +384 · −413 pts | +384 · −414 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Fator de lucro (total ganho ÷ total perdido) | 1,05 | 1,07 | 1,06 |
| Resultado médio por operação | +10,2 pts (+25,2 sem custo) | +13,2 pts (+28,2 sem custo) | +11,9 pts (+26,9 sem custo) |
| **Lucro líquido** | **+5.500 pts · R\$ 1.100** | **+9.475 pts · R\$ 1.895** | **+14.975 pts · R\$ 2.995** |
| Pior queda (drawdown) | −12.015 pts · −R\$ 2.403 | −5.250 pts · −R\$ 1.050 | −12.015 pts · −R\$ 2.403 |
| Maior sequência de perdas | 9 seguidas | 7 seguidas | 9 seguidas |
| Compras: acerto · lucro | 55% · +7.625 pts | 55% · +9.120 pts | 55% · +16.745 pts |
| Vendas: acerto · lucro | 51% · −2.125 pts | 52% · +355 pts | 51% · −1.770 pts |

![Pontos acumulados com 1 contrato](setups/img/primeira-vela-de-quinta_pontos.png)

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
| **ATR 0,21 / 0,21** | **R\$ 21.473** · +16,4% | −3,7% | 4,2% · 0,77 | 49% · 49% | −2,1% · +3,4% |
| **todos os dias** | **R\$ 19.586** · +14,3% | −8,4% | 9,2% · 0,19 | 54% · 51% | −4,8% · +5,6% |
| **só quinta (vídeo)** | **R\$ 23.003** · +18,0% | −2,5% | 4,1% · 1,13 | 49% · 51% | −1,3% · +3,5% |
| **só quinta, entrada a mercado (vídeo)** | **R\$ 26.600** · +21,5% | −3,9% | 5,6% · 1,36 | 52% · 52% | −2,1% · +5,0% |
| **só quinta, corpo de 100+ (vídeo)** | **R\$ 22.994** · +18,0% | −2,0% | 3,7% · 1,24 | 46% · 49% | −0,6% · +3,4% |
| **todos os dias, entrada a mercado** | **R\$ 23.598** · +18,6% | −15,7% | 12,6% · 0,46 | 59% · 48% | −5,1% · +8,8% |
| **risco 1%** | **R\$ 23.124** · +18,2% | −2,6% | 4,5% · 1,06 | 48% · 49% | −1,0% · +3,9% |
| **pura** | **R\$ 11.720** · +3,2% | −8,0% | 4,2% · −2,08 | 21% · 41% | −3,1% · +2,4% |
| **CDI** | **R\$ 18.323** · +12,8% | 0,0% | 0,1% · — | — · 44% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 16.729** · +10,8% | −21,5% | 18,8% · −0,00 | 56% · — | −11,5% · +12,6% |

![Quedas](setups/img/primeira-vela-de-quinta_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 0,21** | +4,0% | +18,1% | +15,3% | +16,4% | +21,9% | +6,8% | **+114,7%** (+16,4% · R\$ 21.473) |
| **todos os dias** | +0,5% | +14,9% | +29,1% | +0,9% | +17,4% | +10,9% | **+95,9%** (+14,3% · R\$ 19.586) |
| **só quinta (vídeo)** | +2,7% | +16,8% | +19,5% | +19,8% | +20,7% | +10,9% | **+130,0%** (+18,0% · R\$ 23.003) |
| **só quinta, entrada a mercado (vídeo)** | +3,4% | +21,6% | +24,4% | +20,9% | +18,9% | +18,3% | **+166,0%** (+21,5% · R\$ 26.600) |
| **só quinta, corpo de 100+ (vídeo)** | +2,0% | +19,8% | +17,8% | +18,1% | +18,0% | +14,7% | **+129,9%** (+18,0% · R\$ 22.994) |
| **todos os dias, entrada a mercado** | +5,7% | −0,6% | +33,5% | +2,5% | +22,5% | +34,1% | **+136,0%** (+18,6% · R\$ 23.598) |
| **risco 1%** | +4,2% | +19,1% | +16,4% | +19,2% | +23,5% | +8,8% | **+131,2%** (+18,2% · R\$ 23.124) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,7% | **+83,2%** (+12,8% · R\$ 18.323) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +9,6% | **+67,3%** (+10,8% · R\$ 16.729) |
| *Quem ganhou* | *todos os dias, entrada a mercado* | *só quinta, entrada a mercado (vídeo)* | *todos os dias, entrada a mercado* | *só quinta, entrada a mercado (vídeo)* | *Ibovespa* | *todos os dias, entrada a mercado* | *só quinta, entrada a mercado (vídeo)* |

\* ano parcial: os dados vão de 01/11/2021 a 27/11/2026.

![Retorno por ano](setups/img/primeira-vela-de-quinta_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 0,21 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +1,6% | +1,5% | +0,6% | −3,4% |
> | dez/2021 | +2,4% | +2,6% | +0,7% | +2,9% |
> | jan/2022 | +1,4% | +1,6% | +0,7% | +7,0% |
> | fev/2022 | +0,7% | +0,7% | +0,8% | +0,9% |
> | mar/2022 | +0,9% | +0,9% | +0,9% | +6,1% |
> | abr/2022 | +2,2% | +2,7% | +0,8% | −10,1% |
> | mai/2022 | +1,9% | +2,0% | +1,0% | +3,2% |
> | jun/2022 | +3,4% | +3,9% | +1,0% | −11,5% |
> | jul/2022 | +1,0% | +0,9% | +1,0% | +4,7% |
> | ago/2022 | +0,2% | +0,1% | +1,2% | +6,2% |
> | set/2022 | +2,9% | +3,0% | +1,1% | +0,5% |
> | out/2022 | −0,1% | −0,1% | +1,0% | +5,5% |
> | nov/2022 | +1,0% | +1,0% | +1,0% | −3,1% |
> | dez/2022 | +1,2% | +1,0% | +1,1% | −2,4% |
> | jan/2023 | +1,1% | +1,1% | +1,1% | +3,4% |
> | fev/2023 | +2,7% | +2,8% | +0,9% | −7,5% |
> | mar/2023 | +0,3% | +0,2% | +1,2% | −2,9% |
> | abr/2023 | +0,8% | +0,8% | +0,9% | +2,5% |
> | mai/2023 | +1,1% | +1,0% | +1,1% | +3,7% |
> | jun/2023 | +1,8% | +2,0% | +1,1% | +9,0% |
> | jul/2023 | +1,0% | +1,0% | +1,1% | +3,3% |
> | ago/2023 | +1,0% | +1,1% | +1,1% | −5,1% |
> | set/2023 | +1,6% | +1,9% | +1,0% | +0,7% |
> | out/2023 | +0,9% | +0,9% | +1,0% | −2,9% |
> | nov/2023 | +0,7% | +0,8% | +0,9% | +12,5% |
> | dez/2023 | +1,4% | +1,7% | +0,9% | +5,4% |
> | jan/2024 | +0,3% | −0,0% | +1,0% | −4,8% |
> | fev/2024 | +1,3% | +1,7% | +0,8% | +1,0% |
> | mar/2024 | +1,9% | +2,7% | +0,8% | −0,7% |
> | abr/2024 | +1,5% | +1,7% | +0,9% | −1,7% |
> | mai/2024 | +1,4% | +1,7% | +0,8% | −3,0% |
> | jun/2024 | +0,8% | +0,7% | +0,8% | +1,5% |
> | jul/2024 | +1,4% | +1,8% | +0,9% | +3,0% |
> | ago/2024 | +1,1% | +1,6% | +0,9% | +6,5% |
> | set/2024 | +0,7% | +0,7% | +0,8% | −3,1% |
> | out/2024 | +1,6% | +1,8% | +0,9% | −1,6% |
> | nov/2024 | +0,7% | +0,7% | +0,8% | −3,1% |
> | dez/2024 | +2,5% | +2,7% | +0,8% | −4,3% |
> | jan/2025 | +1,0% | +1,0% | +1,0% | +4,9% |
> | fev/2025 | +2,4% | +2,9% | +1,0% | −2,6% |
> | mar/2025 | +0,6% | +0,8% | +1,0% | +6,1% |
> | abr/2025 | +3,4% | +3,0% | +1,1% | +3,7% |
> | mai/2025 | +1,8% | +2,0% | +1,1% | +1,5% |
> | jun/2025 | +1,9% | +2,0% | +1,1% | +1,3% |
> | jul/2025 | +2,1% | +2,2% | +1,3% | −4,2% |
> | ago/2025 | +2,0% | +2,1% | +1,2% | +6,3% |
> | set/2025 | +0,5% | +0,2% | +1,2% | +3,4% |
> | out/2025 | +2,6% | +3,1% | +1,3% | +2,3% |
> | nov/2025 | +1,1% | +1,1% | +1,1% | +6,4% |
> | dez/2025 | +0,7% | +1,0% | +1,1% | +1,3% |
> | jan/2026 | +3,0% | +3,1% | +1,2% | +12,6% |
> | fev/2026 | −2,1% | −1,0% | +1,0% | +4,1% |
> | mar/2026 | +1,2% | +1,2% | +1,2% | −0,7% |
> | abr/2026 | +1,0% | +1,0% | +1,1% | −0,1% |
> | mai/2026 | +2,1% | +2,0% | +1,1% | −7,2% |
> | jun/2026 | +1,1% | +1,1% | +1,1% | −1,0% |
> | jul/2026 | −1,1% | −0,8% | +1,2% | +3,5% |
> | ago/2026 | −1,4% | −0,9% | +1,1% | −0,3% |
> | set/2026 | +1,1% | +1,1% | +1,1% | +5,0% |
> | out/2026 | +2,7% | +2,0% | +1,1% | −9,9% |
> | nov/2026 | −0,9% | −0,2% | +0,9% | +5,2% |
> | **Acumulado** | **+114,7%** | **+131,2%** | **+83,2%** | **+67,3%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 0,21** | +20% ao ano · queda −8% | +16% ao ano · queda −4% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **todos os dias** | +15% ao ano · queda −22% | +14% ao ano · queda −8% | +14% ao ano · queda −3% | +13% ao ano · queda −1% |
| **só quinta (vídeo)** | +23% ao ano · queda −7% | +18% ao ano · queda −3% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **só quinta, entrada a mercado (vídeo)** | +30% ao ano · queda −9% | +21% ao ano · queda −4% | +17% ao ano · queda −1% | +15% ao ano · queda −0% |
| **só quinta, corpo de 100+ (vídeo)** | +23% ao ano · queda −5% | +18% ao ano · queda −2% | +15% ao ano · queda −1% | +14% ao ano · queda −0% |
| **todos os dias, entrada a mercado** | +23% ao ano · queda −32% | +19% ao ano · queda −16% | +16% ao ano · queda −6% | +14% ao ano · queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +11% ao ano, pior queda −22%.*

## O que os testes mostraram

*Testes de robustez rodados em 28/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 673 operações, 53% de acerto e fator de lucro 1,12. O vídeo mostra: 126 operações · 70% de acerto · fator de lucro 2,41 (out/2021–2026, só quintas, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,27R por operação no treino (p 0,018) e +0,19R no teste (p 0,033). |
| **É sorte de parâmetro?** | 9 de 9 combinações de stop × alvo deram lucro no treino **e** no teste (+0,11 a +0,27R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,27 → +0,19R · só segunda: −0,10 → −0,05R · só terça: +0,08 → −0,04R · só quarta: −0,11 → +0,12R · só quinta: +0,27 → +0,19R · só sexta: +0,05 → −0,05R · entrada a mercado: +0,26 → +0,16R · corpo de 200+: +0,33 → +0,08R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,27 → +0,19R · 25 pts: +0,24 → +0,17R · 30 pts: +0,23 → +0,16R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 0,21 foi de −R\$ 820 por contrato (começou em jan/2026, ainda não recuperada); 4 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 0,21 + CDI ficou abaixo do CDI em 51% dos meses. O resultado aparece no ano.
- **Dia da semana escolhido pelo autor (só a quinta-feira):** o vídeo testou todos os dias no mesmo período que usamos e mostrou o que deu certo — pode ser sorte. Por regra, fica no máximo como promissor e **fora da carteira recomendada** até os dados novos confirmarem.
- **Opera pouco** (~1,8 operações por mês): os números têm mais incerteza.
- **Anos negativos:** 2026.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 27/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

<!-- FICHA-COMPLETA-INICIO -->

## Todas as medidas

Os três modos de risco lado a lado. **dividido** é 1% repartido entre os setups da carteira; **1%** e **2%** são por operação, independentemente de quantos setups você opera.


<details>
<summary><b>Ficha completa de Primeira Vela de Quinta</b></summary>

| Medida | Risco dividido | Risco 1% | Risco 2% |
|---|---|---|---|
| Operações | 111 | 111 | 111 |
| Operações por ano | 22 | 22 | 22 |
| Taxa de acerto | 63,1% | 63,1% | 63,1% |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,93 | 0,93 |
| Expectativa por operação (em R) | 0,214 | 0,214 | 0,214 |
| Fator de lucro | 1,58 | 1,58 | 1,58 |
| Pontos no período | 8.161 | 8.161 | 8.161 |
| Lucro com 1 contrato fixo | R\$ 1.632 | R\$ 1.632 | R\$ 1.632 |
| Capital final | R\$ 125.274 | R\$ 125.274 | R\$ 156.750 |
| Múltiplo do capital | 1,25× | 1,25× | 1,57× |
| Rentabilidade ao ano | +4,5% | +4,5% | +9,2% |
| Pior queda do período | -5,7% | -5,7% | -11,7% |
| Cauda — pior em 1 de 20 anos | -7,0% | -7,0% | -13,6% |
| Maior tempo sem novo topo (dias) | 289 | 289 | 289 |
| Meses positivos | 47% | 47% | 47% |
| Sharpe | 1,07 | 1,07 | 1,06 |
| Sortino | 10,16 | 10,16 | 27,11 |
| Contratos na 1ª operação | 9 | 9 | 18 |
| Maior lote | 22 | 22 | 52 |
| Operações no teto de contratos | 0% | 0% | 0% |

</details>

<!-- FICHA-COMPLETA-FIM -->

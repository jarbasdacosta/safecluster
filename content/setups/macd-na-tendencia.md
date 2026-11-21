---
title: MACD na Tendência
date: 2026-11-21
tags: [setup, win]
---

**Dia já forte (longe da abertura e além do extremo de ontem) com o MACD subindo a favor: entra com break even.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · velas das 9h00 às 11h30 e das 14h00 às 16h00

🎬 **Vídeo de origem:** [Arthur 777 – "parecia uma coincidência, mas não era"](https://youtu.be/eHvY4bvS95c) · testado de forma independente nos nossos dados em 21/11/2026 · página gerada em 21/11/2026 08:17 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 285.314** arriscando **1% do capital** por operação (+23% ao ano · pior queda −11% · cauda −21%)
> - **R\$ 703.610** arriscando **2% do capital** por operação (+47% ao ano · pior queda −22% · cauda −38%)
>
> - **R\$ 182.572** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **14 operações** · acerto 21% · **+0,07R por operação** (no teste 2024 →: +0,17R) · líquido +1.458 pts (R\$ 292 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/macd-na-tendencia_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Vela a favor** | vela **positiva** | vela **negativa** |
| **2. Força do dia** | fecha **pelo menos 700 pts acima** da abertura do dia (em ATR aqui) | fecha **pelo menos 700 pts abaixo** da abertura |
| **3. MACD** | histograma **acima de zero** e **subindo** | histograma **abaixo de zero** e **caindo** |
| **4. Dia anterior** | fecha **acima da máxima** do dia anterior | fecha **abaixo da mínima** do dia anterior |
| **Entrada** | compra a mercado na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop · alvo** | 400 · 1.500 pts no vídeo → em ATR aqui | igual |
| **Break even** | stop no preço de entrada quando uma vela fecha com 100+ pts de lucro (sem stop móvel: no treino ele atrapalhou) | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 576 pts de stop e 2.881 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 2.800 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** (principal) | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | 22% · 4,44 | +22,3 → +58,4 | +30,6% | −16,7% |
| **como no vídeo: pontos fixos, com stop móvel** | stop 400 · alvo 1.500 pts | 29% · 2,90 | +19,3 → +41,5 | +28,1% | −11,6% |
| **distância em ATR, sem stop móvel** | stop 400 · alvo 1.500 pts | 22% · 4,42 | +24,8 → +55,6 | +31,9% | −10,6% |
| **alvo 400 · stop 400 (vídeo), ATR, sem stop móvel** | stop 400 · alvo 400 pts | 44% · 1,46 | +17,0 → +20,3 | +23,9% | −8,4% |
| **alvo 2.000 (vídeo), ATR, sem stop móvel** | stop 400 · alvo 2.000 pts | 21% · 4,74 | +28,5 → +55,2 | +31,9% | −13,1% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 351 | 557 | 908 |
| Operações por mês | 13,0 | 15,9 | 14,6 |
| Taxa de acerto | 21,4% | 22,4% | 22,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 35% / 20% | 5% / 35% / 20% | 4% / 35% / 20% |
| Stop típico | 394 pts | 386 pts | 390 pts |
| Ganho médio · perda média | +869 · −208 pts | +1.074 · −236 pts | +998 · −225 pts |
| Payoff (ganho médio ÷ perda média) | 4,18 | 4,56 | 4,44 |
| Fator de lucro (total ganho ÷ total perdido) | 1,14 | 1,32 | 1,25 |
| Resultado médio por operação | +22,3 pts (+37,3 sem custo) | +58,4 pts (+73,4 sem custo) | +44,4 pts (+59,4 sem custo) |
| **Lucro líquido** | **+7.832 pts · R\$ 1.566** | **+32.507 pts · R\$ 6.501** | **+40.339 pts · R\$ 8.068** |
| Pior queda (drawdown) | −5.855 pts · −R\$ 1.171 | −9.799 pts · −R\$ 1.960 | −9.799 pts · −R\$ 1.960 |
| Maior sequência de perdas | 16 seguidas | 17 seguidas | 17 seguidas |
| Compras: acerto · lucro | 26% · +6.493 pts | 25% · +18.150 pts | 25% · +24.643 pts |
| Vendas: acerto · lucro | 17% · +1.339 pts | 21% · +14.357 pts | 19% · +15.696 pts |

### Versão como no vídeo: pontos fixos, com stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 376 | 644 | 1.020 |
| Operações por mês | 13,9 | 18,4 | 16,5 |
| Taxa de acerto | 30,9% | 28,6% | 29,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 37% / 7% | 6% / 36% / 6% | 5% / 36% / 6% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +578 · −230 pts | +700 · −222 pts | +653 · −225 pts |
| Payoff (ganho médio ÷ perda média) | 2,51 | 3,15 | 2,90 |
| Fator de lucro (total ganho ÷ total perdido) | 1,12 | 1,26 | 1,21 |
| Resultado médio por operação | +19,3 pts (+34,3 sem custo) | +41,5 pts (+56,5 sem custo) | +33,3 pts (+48,3 sem custo) |
| **Lucro líquido** | **+7.245 pts · R\$ 1.449** | **+26.725 pts · R\$ 5.345** | **+33.970 pts · R\$ 6.794** |
| Pior queda (drawdown) | −3.630 pts · −R\$ 726 | −6.880 pts · −R\$ 1.376 | −6.880 pts · −R\$ 1.376 |
| Maior sequência de perdas | 14 seguidas | 18 seguidas | 18 seguidas |
| Compras: acerto · lucro | 34% · +4.640 pts | 31% · +24.255 pts | 32% · +28.895 pts |
| Vendas: acerto · lucro | 28% · +2.605 pts | 26% · +2.470 pts | 27% · +5.075 pts |

### Versão distância em ATR, sem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 355 | 601 | 956 |
| Operações por mês | 13,1 | 17,2 | 15,4 |
| Taxa de acerto | 21,7% | 22,8% | 22,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 35% / 18% | 10% / 38% / 14% | 8% / 37% / 16% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +822 · −196 pts | +968 · −214 pts | +916 · −207 pts |
| Payoff (ganho médio ÷ perda média) | 4,19 | 4,53 | 4,42 |
| Fator de lucro (total ganho ÷ total perdido) | 1,16 | 1,34 | 1,27 |
| Resultado médio por operação | +24,8 pts (+39,8 sem custo) | +55,6 pts (+70,6 sem custo) | +44,2 pts (+59,2 sem custo) |
| **Lucro líquido** | **+8.810 pts · R\$ 1.762** | **+33.405 pts · R\$ 6.681** | **+42.215 pts · R\$ 8.443** |
| Pior queda (drawdown) | −4.020 pts · −R\$ 804 | −6.840 pts · −R\$ 1.368 | −6.840 pts · −R\$ 1.368 |
| Maior sequência de perdas | 18 seguidas | 23 seguidas | 23 seguidas |
| Compras: acerto · lucro | 26% · +7.150 pts | 25% · +27.480 pts | 25% · +34.630 pts |
| Vendas: acerto · lucro | 17% · +1.660 pts | 21% · +5.925 pts | 20% · +7.585 pts |

### Versão alvo 400 · stop 400 (vídeo), ATR, sem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 496 | 823 | 1.319 |
| Operações por mês | 18,4 | 23,5 | 21,3 |
| Taxa de acerto | 42,5% | 44,3% | 43,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 40% / 32% / 4% | 42% / 34% / 4% | 41% / 33% / 4% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +371 · −245 pts | +374 · −261 pts | +373 · −255 pts |
| Payoff (ganho médio ÷ perda média) | 1,51 | 1,43 | 1,46 |
| Fator de lucro (total ganho ÷ total perdido) | 1,12 | 1,14 | 1,13 |
| Resultado médio por operação | +17,0 pts (+32,0 sem custo) | +20,3 pts (+35,3 sem custo) | +19,1 pts (+34,1 sem custo) |
| **Lucro líquido** | **+8.435 pts · R\$ 1.687** | **+16.715 pts · R\$ 3.343** | **+25.150 pts · R\$ 5.030** |
| Pior queda (drawdown) | −4.810 pts · −R\$ 962 | −5.475 pts · −R\$ 1.095 | −5.475 pts · −R\$ 1.095 |
| Maior sequência de perdas | 9 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 44% · +4.850 pts | 47% · +15.405 pts | 46% · +20.255 pts |
| Vendas: acerto · lucro | 41% · +3.585 pts | 42% · +1.310 pts | 42% · +4.895 pts |

### Versão alvo 2.000 (vídeo), ATR, sem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 351 | 588 | 939 |
| Operações por mês | 13,0 | 16,8 | 15,1 |
| Taxa de acerto | 21,1% | 21,4% | 21,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 34% / 20% | 6% / 38% / 17% | 4% / 37% / 18% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +856 · −192 pts | +1.026 · −209 pts | +963 · −203 pts |
| Payoff (ganho médio ÷ perda média) | 4,45 | 4,90 | 4,74 |
| Fator de lucro (total ganho ÷ total perdido) | 1,19 | 1,34 | 1,28 |
| Resultado médio por operação | +28,5 pts (+43,5 sem custo) | +55,2 pts (+70,2 sem custo) | +45,2 pts (+60,2 sem custo) |
| **Lucro líquido** | **+10.020 pts · R\$ 2.004** | **+32.450 pts · R\$ 6.490** | **+42.470 pts · R\$ 8.494** |
| Pior queda (drawdown) | −3.870 pts · −R\$ 774 | −8.450 pts · −R\$ 1.690 | −8.450 pts · −R\$ 1.690 |
| Maior sequência de perdas | 20 seguidas | 25 seguidas | 25 seguidas |
| Compras: acerto · lucro | 25% · +7.390 pts | 24% · +27.310 pts | 24% · +34.700 pts |
| Vendas: acerto · lucro | 17% · +2.630 pts | 20% · +5.140 pts | 19% · +7.770 pts |

![Pontos acumulados com 1 contrato](setups/img/macd-na-tendencia_pontos.png)

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
| **ATR 0,21 / 1,03** | **R\$ 38.044** · +30,6% | −16,7% | 17,3% · 0,93 | 62% · 56% | −7,1% · +13,1% |
| **como no vídeo: pontos fixos, com stop móvel** | **R\$ 34.567** · +28,1% | −11,6% | 14,3% · 0,96 | 56% · 56% | −6,2% · +13,6% |
| **distância em ATR, sem stop móvel** | **R\$ 39.945** · +31,9% | −10,6% | 15,9% · 1,06 | 66% · 57% | −4,8% · +13,8% |
| **alvo 400 · stop 400 (vídeo), ATR, sem stop móvel** | **R\$ 29.197** · +23,9% | −8,4% | 11,8% · 0,85 | 64% · 57% | −5,2% · +11,2% |
| **alvo 2.000 (vídeo), ATR, sem stop móvel** | **R\$ 39.949** · +31,9% | −13,1% | 16,6% · 1,03 | 69% · 59% | −6,8% · +13,9% |
| **risco 1%** | **R\$ 53.645** · +39,9% | −10,5% | 18,7% · 1,24 | 64% · 61% | −5,3% · +15,3% |
| **pura** | **R\$ 20.813** · +15,8% | −18,2% | 17,3% · 0,23 | 49% · 51% | −8,1% · +11,8% |
| **CDI** | **R\$ 18.285** · +12,8% | 0,0% | 0,1% · — | — · 46% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.763** · +9,5% | −20,9% | 18,6% · −0,07 | 54% · — | −11,5% · +12,6% |

![Quedas](setups/img/macd-na-tendencia_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** | −2,9% | +20,7% | +25,7% | +36,6% | +40,1% | +35,0% | **+280,4%** (+30,6% · R\$ 38.044) |
| **como no vídeo: pontos fixos, com stop móvel** | +2,9% | +13,4% | +26,5% | +18,1% | +56,6% | +26,7% | **+245,7%** (+28,1% · R\$ 34.567) |
| **distância em ATR, sem stop móvel** | −1,0% | +17,4% | +29,6% | +37,3% | +47,4% | +31,1% | **+299,4%** (+31,9% · R\$ 39.945) |
| **alvo 400 · stop 400 (vídeo), ATR, sem stop móvel** | +0,6% | +22,0% | +22,6% | +23,4% | +29,1% | +21,8% | **+192,0%** (+23,9% · R\$ 29.197) |
| **alvo 2.000 (vídeo), ATR, sem stop móvel** | −3,1% | +23,9% | +28,3% | +35,8% | +48,9% | +28,3% | **+299,5%** (+31,9% · R\$ 39.949) |
| **risco 1%** | −2,8% | +27,8% | +30,3% | +51,6% | +60,7% | +36,1% | **+436,5%** (+39,9% · R\$ 53.645) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,4% | **+82,9%** (+12,8% · R\$ 18.285) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +3,3% | **+57,6%** (+9,5% · R\$ 15.763) |
| *Quem ganhou* | *como no vídeo: pontos fixos, com stop móvel* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 19/11/2026.

![Retorno por ano](setups/img/macd-na-tendencia_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 1,03 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | −0,3% | −0,3% | +0,6% | −3,4% |
> | dez/2021 | −2,6% | −2,5% | +0,7% | +2,9% |
> | jan/2022 | +3,0% | +3,8% | +0,7% | +7,0% |
> | fev/2022 | −1,9% | −2,7% | +0,8% | +0,9% |
> | mar/2022 | +5,7% | +6,7% | +0,9% | +6,1% |
> | abr/2022 | +1,9% | +2,1% | +0,8% | −10,1% |
> | mai/2022 | −0,2% | −0,4% | +1,0% | +3,2% |
> | jun/2022 | +0,9% | +0,8% | +1,0% | −11,5% |
> | jul/2022 | +1,3% | +1,9% | +1,0% | +4,7% |
> | ago/2022 | +5,2% | +6,5% | +1,2% | +6,2% |
> | set/2022 | +7,2% | +7,8% | +1,1% | +0,5% |
> | out/2022 | +1,6% | +1,9% | +1,0% | +5,5% |
> | nov/2022 | −6,0% | −4,3% | +1,0% | −3,1% |
> | dez/2022 | +1,0% | +1,4% | +1,1% | −2,4% |
> | jan/2023 | +4,5% | +4,5% | +1,1% | +3,4% |
> | fev/2023 | −0,5% | −0,6% | +0,9% | −7,5% |
> | mar/2023 | +5,9% | +6,8% | +1,2% | −2,9% |
> | abr/2023 | −4,4% | −5,2% | +0,9% | +2,5% |
> | mai/2023 | +2,8% | +3,1% | +1,1% | +3,7% |
> | jun/2023 | +2,1% | +2,3% | +1,1% | +9,0% |
> | jul/2023 | +5,1% | +6,2% | +1,1% | +3,3% |
> | ago/2023 | −0,1% | −0,3% | +1,1% | −5,1% |
> | set/2023 | +0,5% | +0,5% | +1,0% | +0,7% |
> | out/2023 | +2,6% | +3,5% | +1,0% | −2,9% |
> | nov/2023 | +3,6% | +4,4% | +0,9% | +12,5% |
> | dez/2023 | +1,6% | +2,2% | +0,9% | +5,4% |
> | jan/2024 | +0,4% | +0,3% | +1,0% | −4,8% |
> | fev/2024 | +9,9% | +13,8% | +0,8% | +1,0% |
> | mar/2024 | −0,7% | −1,7% | +0,8% | −0,7% |
> | abr/2024 | −1,0% | −1,4% | +0,9% | −1,7% |
> | mai/2024 | −1,5% | −2,1% | +0,8% | −3,0% |
> | jun/2024 | +4,0% | +6,0% | +0,8% | +1,5% |
> | jul/2024 | −0,7% | −1,0% | +0,9% | +3,0% |
> | ago/2024 | +5,8% | +8,3% | +0,9% | +6,5% |
> | set/2024 | +2,2% | +3,3% | +0,8% | −3,1% |
> | out/2024 | +3,6% | +5,0% | +0,9% | −1,6% |
> | nov/2024 | +3,2% | +4,9% | +0,8% | −3,1% |
> | dez/2024 | +7,1% | +8,2% | +0,8% | −4,3% |
> | jan/2025 | +9,0% | +12,1% | +1,0% | +4,9% |
> | fev/2025 | +4,1% | +5,0% | +1,0% | −2,6% |
> | mar/2025 | +2,4% | +2,8% | +1,0% | +6,1% |
> | abr/2025 | −7,1% | −5,3% | +1,1% | +3,7% |
> | mai/2025 | +4,0% | +5,2% | +1,1% | +1,5% |
> | jun/2025 | +0,6% | +1,0% | +1,1% | +1,3% |
> | jul/2025 | +2,1% | +2,6% | +1,3% | −4,2% |
> | ago/2025 | +13,1% | +15,3% | +1,2% | +6,3% |
> | set/2025 | −3,3% | −4,5% | +1,2% | +3,4% |
> | out/2025 | +1,7% | +1,7% | +1,3% | +2,3% |
> | nov/2025 | +7,6% | +10,5% | +1,1% | +6,4% |
> | dez/2025 | +1,5% | +3,8% | +1,1% | +1,3% |
> | jan/2026 | +10,5% | +11,1% | +1,2% | +12,6% |
> | fev/2026 | +3,1% | +2,2% | +1,0% | +4,1% |
> | mar/2026 | +9,2% | +6,4% | +1,2% | −0,7% |
> | abr/2026 | +1,4% | +2,2% | +1,1% | −0,1% |
> | mai/2026 | +3,6% | +3,2% | +1,1% | −7,2% |
> | jun/2026 | −3,2% | −2,5% | +1,1% | −1,0% |
> | jul/2026 | +6,1% | +6,1% | +1,2% | +3,5% |
> | ago/2026 | +5,1% | +4,5% | +1,1% | −0,3% |
> | set/2026 | −2,3% | −0,4% | +1,1% | +5,0% |
> | out/2026 | −2,4% | −0,5% | +1,1% | −9,9% |
> | nov/2026 | +0,3% | −0,2% | +0,7% | −0,9% |
> | **Acumulado** | **+280,4%** | **+436,5%** | **+82,9%** | **+57,6%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 1,03** | +47% ao ano · queda −33% | +31% ao ano · queda −17% | +22% ao ano · queda −8% | +17% ao ano · queda −3% |
| **como no vídeo: pontos fixos, com stop móvel** | +43% ao ano · queda −23% | +28% ao ano · queda −12% | +21% ao ano · queda −5% | +17% ao ano · queda −2% |
| **distância em ATR, sem stop móvel** | +50% ao ano · queda −22% | +32% ao ano · queda −11% | +22% ao ano · queda −5% | +18% ao ano · queda −2% |
| **alvo 400 · stop 400 (vídeo), ATR, sem stop móvel** | +34% ao ano · queda −17% | +24% ao ano · queda −8% | +18% ao ano · queda −4% | +16% ao ano · queda −1% |
| **alvo 2.000 (vídeo), ATR, sem stop móvel** | +50% ao ano · queda −26% | +32% ao ano · queda −13% | +22% ao ano · queda −6% | +18% ao ano · queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 21/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1020 operações, 29% de acerto e fator de lucro 1,33. O vídeo mostra: 1.329 operações · 30% de acerto · fator de lucro 1,40 · payoff 1,92 (desde 2021, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,08R por operação no treino (p 0,089) e +0,17R no teste (p 0,000). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,05 a +0,17R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,08 → +0,17R · sem o MACD: +0,08 → +0,10R · MACD linha em vez do histograma: +0,08 → +0,14R · sem 'MACD subindo': +0,07 → +0,14R · sem a máxima/mínima do dia anterior: +0,02 → +0,07R · sem a distância da abertura: +0,08 → +0,08R · sem o horário (velas das 9h00 às 17h00): +0,06 → +0,12R · sem break even: +0,03 → +0,15R · COM stop móvel (como no vídeo): +0,05 → +0,11R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,08 → +0,17R · 25 pts: +0,05 → +0,14R · 30 pts: +0,04 → +0,13R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 1.960 por contrato (começou em set/2026, ainda não recuperada); 17 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 38% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021.
- **As compras carregam o setup:** compras +0,19R × vendas +0,09R por operação.
- **Acerto de ~22%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 19/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

<!-- FICHA-COMPLETA-INICIO -->

## Todas as medidas

Os três modos de risco lado a lado. **dividido** é 1% repartido entre os setups da carteira; **1%** e **2%** são por operação, independentemente de quantos setups você opera.


<details>
<summary><b>Ficha completa de MACD na Tendência</b></summary>

| Medida | Risco dividido | Risco 1% | Risco 2% |
|---|---|---|---|
| Operações | 908 | 908 | 908 |
| Operações por ano | 179 | 179 | 179 |
| Taxa de acerto | 22,0% | 22,0% | 22,0% |
| Payoff (ganho médio ÷ perda média) | 4,75 | 4,75 | 4,75 |
| Expectativa por operação (em R) | 0,128 | 0,128 | 0,128 |
| Fator de lucro | 1,34 | 1,34 | 1,34 |
| Pontos no período | 40.339 | 40.339 | 40.339 |
| Lucro com 1 contrato fixo | R\$ 8.068 | R\$ 8.068 | R\$ 8.068 |
| Capital final | R\$ 285.314 | R\$ 285.314 | R\$ 703.610 |
| Múltiplo do capital | 2,85× | 2,85× | 7,04× |
| Rentabilidade ao ano | +23,0% | +23,0% | +47,0% |
| Pior queda do período | -11,2% | -11,2% | -21,8% |
| Pior queda dentro de um ano | -11,2% | -11,2% | -21,8% |
| Cauda — pior em 1 de 20 anos | -21,2% | -21,2% | -38,5% |
| Maior tempo sem novo topo (dias) | 279 | 279 | 347 |
| Meses positivos | 66% | 66% | 63% |
| Sharpe | 1,25 | 1,25 | 1,24 |
| Sortino | 2,31 | 2,31 | 2,29 |
| Pregões para dobrar o capital | 839 | 839 | 711 |
| Contratos na 1ª operação | 9 | 9 | 18 |
| Maior lote | 33 | 33 | 150 |
| Operações no teto de contratos | 0% | 0% | 0% |

</details>

<!-- FICHA-COMPLETA-FIM -->

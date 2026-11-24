---
title: Primeira Vela de 80 Minutos
date: 2026-11-24
tags: [setup, win]
---

**Se a primeira vela de 80 minutos do dia fecha forte (quase sem sombra contra), entra a favor às 10h20 com alvo longo, break even e stop móvel.**

🟡 promissor · dia escolhido pelo autor · Mini índice (WIN) · gráfico de 80 minutos · só a primeira vela do dia (9h00–10h20)

🎬 **Vídeo de origem:** [Arthur 777 – "encontrei algo muito estranho no mini índice"](https://youtu.be/UFLCVkzcghU) · testado de forma independente nos nossos dados em 21/11/2026 · página gerada em 24/11/2026 19:46 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 356.298** arriscando **1% do capital** por operação (+28% ao ano · pior queda −18% · cauda −24%)
> - **R\$ 1.041.276** arriscando **2% do capital** por operação (+59% ao ano · pior queda −34% · cauda −43%)
>
> - **R\$ 182.665** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **8 operações** · acerto 12% · **−0,05R por operação** (no teste 2024 →: +0,44R) · líquido −118 pts (−R\$ 24 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/primeira-vela-80-min_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Primeira vela** | a vela das 9h00 (80 min) **fecha positiva** | a vela das 9h00 **fecha negativa** |
| **2. Força** | **sombra superior** de no máximo 300 pts (em ATR aqui) | **sombra inferior** de no máximo 300 pts |
| **Entrada** | compra a mercado às 10h20 | vende a mercado às 10h20 |
| **Stop · alvo** | 600 · 2.500 pts no vídeo → em ATR aqui | igual |
| **Break even** | quando uma vela de 80 min fecha no lucro, o stop vai para o preço de entrada | igual |
| **Stop móvel** | depois de uma vela fechar com 300+ pts de lucro, stop na mínima de cada vela que fecha | na máxima de cada vela que fecha |

- **Versão principal (escolhida só pelo treino): ATR 0,15 / 1,28** — stop 0,154 ATR · alvo 1,285 ATR (8,3× o stop); hoje ≈ 422 pts de stop e 3.513 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 2.735 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,15 / 1,28** (principal) | stop 0,154 ATR · alvo 1,285 ATR (8,3× o stop) | 21% · 5,14 | +41,9 → +115,9 | +31,0% | −12,8% |
| **como no vídeo: ter–qui, pontos fixos** | stop 600 · alvo 2.500 pts | 35% · 2,29 | −1,1 → +96,9 | +23,3% | −14,4% |
| **ter–qui, sombra em ATR** | stop 600 · alvo 2.500 pts | 34% · 2,39 | −19,8 → +111,3 | +23,8% | −16,9% |
| **todos os dias, sombra em ATR** | stop 600 · alvo 2.500 pts | 33% · 2,29 | −4,5 → +55,0 | +21,6% | −21,1% |
| **1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR** | stop 300 · alvo 2.500 pts | 21% · 5,32 | +51,6 → +109,3 | +31,3% | −9,0% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,15 / 1,28

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 208 | 272 | 480 |
| Operações por mês | 7,7 | 7,8 | 7,7 |
| Taxa de acerto | 19,2% | 23,2% | 21,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 63% / 14% | 3% / 56% / 17% | 2% / 59% / 16% |
| Stop típico | 300 pts | 288 pts | 294 pts |
| Ganho médio · perda média | +1.311 · −260 pts | +1.386 · −267 pts | +1.357 · −264 pts |
| Payoff (ganho médio ÷ perda média) | 5,04 | 5,19 | 5,14 |
| Fator de lucro (total ganho ÷ total perdido) | 1,20 | 1,57 | 1,40 |
| Resultado médio por operação | +41,9 pts (+56,9 sem custo) | +115,9 pts (+130,9 sem custo) | +83,9 pts (+98,9 sem custo) |
| **Lucro líquido** | **+8.716 pts · R\$ 1.743** | **+31.535 pts · R\$ 6.307** | **+40.251 pts · R\$ 8.050** |
| Pior queda (drawdown) | −8.323 pts · −R\$ 1.665 | −8.159 pts · −R\$ 1.632 | −8.323 pts · −R\$ 1.665 |
| Maior sequência de perdas | 19 seguidas | 19 seguidas | 19 seguidas |
| Compras: acerto · lucro | 21% · +8.696 pts | 23% · +14.366 pts | 22% · +23.061 pts |
| Vendas: acerto · lucro | 17% · +20 pts | 23% · +17.169 pts | 21% · +17.189 pts |

### Versão como no vídeo: ter–qui, pontos fixos

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 206 | 259 | 465 |
| Operações por mês | 7,6 | 7,4 | 7,5 |
| Taxa de acerto | 32,5% | 36,3% | 34,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 44% / 1% | 3% / 37% / 7% | 3% / 40% / 5% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +834 · −403 pts | +915 · −369 pts | +881 · −385 pts |
| Payoff (ganho médio ÷ perda média) | 2,07 | 2,48 | 2,29 |
| Fator de lucro (total ganho ÷ total perdido) | 1,00 | 1,41 | 1,21 |
| Resultado médio por operação | −1,1 pts (+13,9 sem custo) | +96,9 pts (+111,9 sem custo) | +53,4 pts (+68,4 sem custo) |
| **Lucro líquido** | **−235 pts · −R\$ 47** | **+25.085 pts · R\$ 5.017** | **+24.850 pts · R\$ 4.970** |
| Pior queda (drawdown) | −11.090 pts · −R\$ 2.218 | −6.225 pts · −R\$ 1.245 | −11.090 pts · −R\$ 2.218 |
| Maior sequência de perdas | 11 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 33% · −1.580 pts | 34% · +10.465 pts | 33% · +8.885 pts |
| Vendas: acerto · lucro | 32% · +1.345 pts | 39% · +14.620 pts | 36% · +15.965 pts |

### Versão ter–qui, sombra em ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 208 | 272 | 480 |
| Operações por mês | 7,7 | 7,8 | 7,7 |
| Taxa de acerto | 30,3% | 36,0% | 33,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 46% / 2% | 4% / 40% / 7% | 3% / 42% / 5% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +874 · −408 pts | +1.005 · −392 pts | +954 · −399 pts |
| Payoff (ganho médio ÷ perda média) | 2,14 | 2,56 | 2,39 |
| Fator de lucro (total ganho ÷ total perdido) | 0,93 | 1,44 | 1,21 |
| Resultado médio por operação | −19,8 pts (−4,8 sem custo) | +111,3 pts (+126,3 sem custo) | +54,5 pts (+69,5 sem custo) |
| **Lucro líquido** | **−4.120 pts · −R\$ 824** | **+30.285 pts · R\$ 6.057** | **+26.165 pts · R\$ 5.233** |
| Pior queda (drawdown) | −12.555 pts · −R\$ 2.511 | −6.015 pts · −R\$ 1.203 | −12.555 pts · −R\$ 2.511 |
| Maior sequência de perdas | 14 seguidas | 11 seguidas | 14 seguidas |
| Compras: acerto · lucro | 31% · −3.345 pts | 36% · +14.870 pts | 33% · +11.525 pts |
| Vendas: acerto · lucro | 30% · −775 pts | 36% · +15.415 pts | 34% · +14.640 pts |

### Versão todos os dias, sombra em ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 349 | 456 | 805 |
| Operações por mês | 12,9 | 13,0 | 13,0 |
| Taxa de acerto | 31,2% | 33,6% | 32,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 45% / 4% | 3% / 43% / 7% | 3% / 44% / 5% |
| Stop típico | 600 pts | 600 pts | 600 pts |
| Ganho médio · perda média | +883 · −407 pts | +964 · −404 pts | +930 · −405 pts |
| Payoff (ganho médio ÷ perda média) | 2,17 | 2,39 | 2,29 |
| Fator de lucro (total ganho ÷ total perdido) | 0,98 | 1,21 | 1,11 |
| Resultado médio por operação | −4,5 pts (+10,5 sem custo) | +55,0 pts (+70,0 sem custo) | +29,2 pts (+44,2 sem custo) |
| **Lucro líquido** | **−1.555 pts · −R\$ 311** | **+25.100 pts · R\$ 5.020** | **+23.545 pts · R\$ 4.709** |
| Pior queda (drawdown) | −11.440 pts · −R\$ 2.288 | −15.235 pts · −R\$ 3.047 | −15.235 pts · −R\$ 3.047 |
| Maior sequência de perdas | 12 seguidas | 16 seguidas | 16 seguidas |
| Compras: acerto · lucro | 31% · −5.110 pts | 36% · +17.180 pts | 34% · +12.070 pts |
| Vendas: acerto · lucro | 31% · +3.555 pts | 32% · +7.920 pts | 32% · +11.475 pts |

### Versão 1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 208 | 272 | 480 |
| Operações por mês | 7,7 | 7,8 | 7,7 |
| Taxa de acerto | 19,7% | 22,4% | 21,2% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 62% / 14% | 4% / 59% / 16% | 3% / 61% / 15% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +1.274 · −249 pts | +1.331 · −244 pts | +1.308 · −246 pts |
| Payoff (ganho médio ÷ perda média) | 5,13 | 5,46 | 5,32 |
| Fator de lucro (total ganho ÷ total perdido) | 1,26 | 1,58 | 1,44 |
| Resultado médio por operação | +51,6 pts (+66,6 sem custo) | +109,3 pts (+124,3 sem custo) | +84,3 pts (+99,3 sem custo) |
| **Lucro líquido** | **+10.725 pts · R\$ 2.145** | **+29.720 pts · R\$ 5.944** | **+40.445 pts · R\$ 8.089** |
| Pior queda (drawdown) | −7.015 pts · −R\$ 1.403 | −4.595 pts · −R\$ 919 | −7.015 pts · −R\$ 1.403 |
| Maior sequência de perdas | 19 seguidas | 14 seguidas | 19 seguidas |
| Compras: acerto · lucro | 21% · +9.130 pts | 22% · +14.480 pts | 21% · +23.610 pts |
| Vendas: acerto · lucro | 18% · +1.595 pts | 23% · +15.240 pts | 21% · +16.835 pts |

![Pontos acumulados com 1 contrato](setups/img/primeira-vela-80-min_pontos.png)

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
| **ATR 0,15 / 1,28** | **R\$ 38.674** · +31,0% | −12,8% | 15,1% · 1,06 | 62% · 59% | −4,0% · +13,8% |
| **como no vídeo: ter–qui, pontos fixos** | **R\$ 28.565** · +23,3% | −14,4% | 14,4% · 0,69 | 51% · 52% | −6,3% · +10,1% |
| **ter–qui, sombra em ATR** | **R\$ 29.110** · +23,8% | −16,9% | 15,4% · 0,68 | 56% · 52% | −6,3% · +13,2% |
| **todos os dias, sombra em ATR** | **R\$ 26.648** · +21,6% | −21,1% | 19,6% · 0,48 | 51% · 52% | −10,4% · +15,5% |
| **1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR** | **R\$ 39.109** · +31,3% | −9,0% | 14,1% · 1,15 | 61% · 59% | −3,9% · +13,5% |
| **risco 1%** | **R\$ 66.421** · +45,9% | −13,6% | 22,3% · 1,26 | 64% · 67% | −6,8% · +17,3% |
| **pura** | **R\$ 21.147** · +16,1% | −15,6% | 15,1% · 0,27 | 51% · 48% | −5,0% · +12,7% |
| **CDI** | **R\$ 18.295** · +12,8% | 0,0% | 0,1% · — | — · 46% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.652** · +9,4% | −21,2% | 18,6% · −0,07 | 54% · — | −11,5% · +12,6% |

![Quedas](setups/img/primeira-vela-80-min_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,15 / 1,28** | +7,7% | +9,1% | +27,7% | +37,8% | +46,7% | +27,5% | **+286,7%** (+31,0% · R\$ 38.674) |
| **como no vídeo: ter–qui, pontos fixos** | +9,8% | −0,2% | +14,3% | +32,8% | +39,4% | +23,2% | **+185,6%** (+23,3% · R\$ 28.565) |
| **ter–qui, sombra em ATR** | +1,6% | −0,4% | +14,3% | +32,9% | +47,4% | +28,4% | **+191,1%** (+23,8% · R\$ 29.110) |
| **todos os dias, sombra em ATR** | −1,4% | +3,2% | +18,0% | +32,0% | +54,7% | +8,8% | **+166,5%** (+21,6% · R\$ 26.648) |
| **1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR** | +6,5% | +14,7% | +27,8% | +29,8% | +44,5% | +33,4% | **+291,1%** (+31,3% · R\$ 39.109) |
| **risco 1%** | +10,2% | +7,2% | +36,6% | +73,1% | +77,3% | +34,2% | **+564,2%** (+45,9% · R\$ 66.421) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,5% | **+82,9%** (+12,8% · R\$ 18.295) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +2,5% | **+56,5%** (+9,4% · R\$ 15.652) |
| *Quem ganhou* | *risco 1%* | *1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 24/11/2026.

![Retorno por ano](setups/img/primeira-vela-80-min_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,15 / 1,28 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +1,9% | +2,2% | +0,6% | −3,4% |
> | dez/2021 | +5,6% | +7,8% | +0,7% | +2,9% |
> | jan/2022 | +2,1% | +3,2% | +0,7% | +7,0% |
> | fev/2022 | −0,0% | −0,8% | +0,8% | +0,9% |
> | mar/2022 | −3,1% | −5,0% | +0,9% | +6,1% |
> | abr/2022 | −0,9% | −2,2% | +0,8% | −10,1% |
> | mai/2022 | +13,8% | +17,3% | +1,0% | +3,2% |
> | jun/2022 | −4,0% | −6,6% | +1,0% | −11,5% |
> | jul/2022 | −0,2% | −1,6% | +1,0% | +4,7% |
> | ago/2022 | +6,7% | +10,8% | +1,2% | +6,2% |
> | set/2022 | −1,0% | −1,9% | +1,1% | +0,5% |
> | out/2022 | −2,9% | −4,0% | +1,0% | +5,5% |
> | nov/2022 | −3,1% | −3,0% | +1,0% | −3,1% |
> | dez/2022 | +2,8% | +3,3% | +1,1% | −2,4% |
> | jan/2023 | +4,3% | +5,1% | +1,1% | +3,4% |
> | fev/2023 | +1,3% | +1,4% | +0,9% | −7,5% |
> | mar/2023 | +1,7% | +1,8% | +1,2% | −2,9% |
> | abr/2023 | −0,7% | −1,3% | +0,9% | +2,5% |
> | mai/2023 | +4,3% | +6,8% | +1,1% | +3,7% |
> | jun/2023 | +3,0% | +4,7% | +1,1% | +9,0% |
> | jul/2023 | +5,8% | +9,2% | +1,1% | +3,3% |
> | ago/2023 | −3,6% | −6,8% | +1,1% | −5,1% |
> | set/2023 | −0,8% | −2,2% | +1,0% | +0,7% |
> | out/2023 | +1,2% | +1,2% | +1,0% | −2,9% |
> | nov/2023 | +9,6% | +15,9% | +0,9% | +12,5% |
> | dez/2023 | −0,7% | −2,4% | +0,9% | +5,4% |
> | jan/2024 | +7,5% | +14,6% | +1,0% | −4,8% |
> | fev/2024 | +1,8% | +2,9% | +0,8% | +1,0% |
> | mar/2024 | +0,8% | +0,6% | +0,8% | −0,7% |
> | abr/2024 | +2,8% | +3,8% | +0,9% | −1,7% |
> | mai/2024 | +4,6% | +8,9% | +0,8% | −3,0% |
> | jun/2024 | +1,5% | +3,1% | +0,8% | +1,5% |
> | jul/2024 | +3,6% | +8,6% | +0,9% | +3,0% |
> | ago/2024 | +6,2% | +11,5% | +0,9% | +6,5% |
> | set/2024 | +0,8% | +1,4% | +0,8% | −3,1% |
> | out/2024 | −1,7% | −4,2% | +0,9% | −1,6% |
> | nov/2024 | +2,5% | +3,3% | +0,8% | −3,1% |
> | dez/2024 | +2,2% | +3,1% | +0,8% | −4,3% |
> | jan/2025 | +6,4% | +10,2% | +1,0% | +4,9% |
> | fev/2025 | +2,1% | +2,9% | +1,0% | −2,6% |
> | mar/2025 | +5,2% | +8,0% | +1,0% | +6,1% |
> | abr/2025 | +1,7% | +2,6% | +1,1% | +3,7% |
> | mai/2025 | +5,9% | +9,8% | +1,1% | +1,5% |
> | jun/2025 | +0,2% | +0,1% | +1,1% | +1,3% |
> | jul/2025 | +2,5% | +3,0% | +1,3% | −4,2% |
> | ago/2025 | +6,8% | +9,7% | +1,2% | +6,3% |
> | set/2025 | +2,9% | +4,0% | +1,2% | +3,4% |
> | out/2025 | +1,4% | +1,3% | +1,3% | +2,3% |
> | nov/2025 | +5,5% | +8,8% | +1,1% | +6,4% |
> | dez/2025 | −1,2% | −0,9% | +1,1% | +1,3% |
> | jan/2026 | +5,6% | +8,1% | +1,2% | +12,6% |
> | fev/2026 | +13,8% | +11,6% | +1,0% | +4,1% |
> | mar/2026 | −1,7% | −1,0% | +1,2% | −0,7% |
> | abr/2026 | +5,1% | +5,9% | +1,1% | −0,1% |
> | mai/2026 | −1,8% | −2,0% | +1,1% | −7,2% |
> | jun/2026 | −0,4% | −0,5% | +1,1% | −1,0% |
> | jul/2026 | +10,1% | +12,2% | +1,2% | +3,5% |
> | ago/2026 | +4,8% | +4,9% | +1,1% | −0,3% |
> | set/2026 | −3,5% | −3,0% | +1,1% | +5,0% |
> | out/2026 | −2,9% | −2,4% | +1,1% | −9,9% |
> | nov/2026 | −2,9% | −2,3% | +0,7% | −1,6% |
> | **Acumulado** | **+286,7%** | **+564,2%** | **+82,9%** | **+56,5%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,15 / 1,28** | +49% ao ano · queda −26% | +31% ao ano · queda −13% | +22% ao ano · queda −5% | +17% ao ano · queda −2% |
| **como no vídeo: ter–qui, pontos fixos** | +32% ao ano · queda −32% | +23% ao ano · queda −14% | +18% ao ano · queda −5% | +16% ao ano · queda −1% |
| **ter–qui, sombra em ATR** | +33% ao ano · queda −36% | +24% ao ano · queda −17% | +19% ao ano · queda −6% | +16% ao ano · queda −1% |
| **todos os dias, sombra em ATR** | +26% ao ano · queda −44% | +22% ao ano · queda −21% | +18% ao ano · queda −9% | +15% ao ano · queda −3% |
| **1ª configuração (stop 300 · móvel 1.500), ter–qui, ATR** | +50% ao ano · queda −20% | +31% ao ano · queda −9% | +22% ao ano · queda −3% | +17% ao ano · queda −1% |

*Referência: CDI +13% ao ano · Ibovespa +9% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 21/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 465 operações, 35% de acerto e fator de lucro 1,28. O vídeo mostra: stop 300: 677 operações, 21% de acerto, payoff 5,65; stop 600: fator de lucro 1,61, 27% de acerto (2018–2026, só terça a quinta, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,14R por operação no treino (p 0,391) e +0,44R no teste (p 0,003). |
| **É sorte de parâmetro?** | 7 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,04 a +0,45R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,14 → +0,44R · sem o filtro da sombra: +0,03 → +0,30R · sombra máxima de 150: +0,56 → +0,40R · sombra máxima de 500: +0,07 → +0,32R · todos os dias da semana: +0,09 → +0,20R · sem break even: +0,14 → +0,41R · sem stop móvel: +0,15 → +0,42R · sem break even e sem stop móvel: +0,15 → +0,39R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,14 → +0,44R · 25 pts: +0,10 → +0,41R · 30 pts: +0,09 → +0,39R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,15 / 1,28 foi de −R\$ 1.665 por contrato (começou em mai/2022, recuperada em jul/2023); 19 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,15 / 1,28 + CDI ficou abaixo do CDI em 38% dos meses. O resultado aparece no ano.
- **Dia da semana escolhido pelo autor (terça a quinta):** o vídeo testou todos os dias no mesmo período que usamos e mostrou o que deu certo — pode ser sorte. Por regra, fica no máximo como promissor e **fora da carteira recomendada** até os dados novos confirmarem.
- **Anos negativos:** 2022.
- **Acerto de ~21%:** a maioria das operações dá stop; sequências de stops são normais.
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
<summary><b>Ficha completa de Primeira Vela de 80 Minutos</b></summary>

| Medida | Risco dividido | Risco 1% | Risco 2% |
|---|---|---|---|
| Operações | 480 | 480 | 480 |
| Operações por ano | 95 | 95 | 95 |
| Taxa de acerto | 21,5% | 21,5% | 21,5% |
| Payoff (ganho médio ÷ perda média) | 5,46 | 5,46 | 5,46 |
| Expectativa por operação (em R) | 0,294 | 0,294 | 0,294 |
| Fator de lucro | 1,49 | 1,49 | 1,49 |
| Pontos no período | 40.251 | 40.251 | 40.251 |
| Lucro com 1 contrato fixo | R\$ 8.050 | R\$ 8.050 | R\$ 8.050 |
| Capital final | R\$ 356.298 | R\$ 356.298 | R\$ 1.041.276 |
| Múltiplo do capital | 3,56× | 3,56× | 10,41× |
| Rentabilidade ao ano | +28,4% | +28,4% | +58,6% |
| Pior queda do período | -18,0% | -18,0% | -34,0% |
| Pior queda dentro de um ano | -18,0% | -18,0% | -34,0% |
| Cauda — pior em 1 de 20 anos | -23,9% | -23,9% | -43,0% |
| Maior tempo sem novo topo (dias) | 435 | 435 | 435 |
| Meses positivos | 65% | 65% | 63% |
| Sharpe | 1,27 | 1,27 | 1,27 |
| Sortino | 4,32 | 4,32 | 4,31 |
| Pregões para dobrar o capital | 711 | 711 | 596 |
| Contratos na 1ª operação | 12 | 12 | 24 |
| Maior lote | 55 | 55 | 280 |
| Operações no teto de contratos | 0% | 0% | 0% |

</details>

<!-- FICHA-COMPLETA-FIM -->

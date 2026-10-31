---
title: Rompimento da Média de 200
date: 2026-10-31
tags: [setup, win]
---

**O dia abre de um lado da média de 200 e, quando o preço atravessa a média a favor da de 300, entra no rompimento atrás de um alvo longo.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · das 9h às 16h

🎬 **Vídeo de origem:** [Arthur 777 – "95% de acerto, vários testes (500 trades)"](https://youtu.be/GGi3PKhC0Jo) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 21.661** na versão ATR 0,21 / 1,03 com o capital no CDI (+17% ao ano · pior queda −11%)
> - **R\$ 26.109** na versão como no vídeo (alvo 2.000) com o capital no CDI (+21% ao ano · pior queda −7%)
> - **R\$ 21.988** na versão alvo 1.000 com o capital no CDI (+17% ao ano · pior queda −7%)
> - **R\$ 18.956** na versão alvo 2.000, stop 200 (payoff alto do vídeo) com o capital no CDI (+14% ao ano · pior queda −6%)
> - **R\$ 24.857** na versão entrada a mercado com o capital no CDI (+20% ao ano · pior queda −12%)
> - **R\$ 25.705** na versão com break even a 400 pts com o capital no CDI (+21% ao ano · pior queda −7%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 24.941** na versão ATR 0,21 / 1,03 **arriscando 1% do capital por operação** (+20% ao ano · pior queda −10%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> Ainda sem operações. O resultado aparece aqui conforme os dias passam.

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

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 892 pts de stop e 4.460 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** (principal) | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | 39% · 1,85 | +91,8 → +20,7 | +16,9% | −10,7% |
| **como no vídeo (alvo 2.000)** | stop 400 · alvo 2.000 pts | 39% · 2,17 | +134,9 → +67,7 | +21,4% | −6,9% |
| **alvo 1.000** | stop 400 · alvo 1.000 pts | 41% · 1,72 | +69,5 → +37,2 | +17,2% | −6,9% |
| **alvo 2.000, stop 200 (payoff alto do vídeo)** | stop 200 · alvo 2.000 pts | 23% · 3,68 | +61,7 → −19,0 | +13,8% | −6,4% |
| **entrada a mercado** | stop 400 · alvo 2.000 pts | 36% · 2,24 | +124,9 → +30,8 | +20,2% | −11,5% |
| **com break even a 400 pts** | stop 400 · alvo 2.000 pts | 34% · 2,69 | +123,7 → +63,0 | +21,0% | −7,0% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 79 | 126 | 205 |
| Operações por mês | 2,9 | 3,7 | 3,4 |
| Taxa de acerto | 43,0% | 36,5% | 39,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 57% / 38% | 5% / 54% / 41% | 5% / 55% / 40% |
| Stop típico | 390 pts | 390 pts | 390 pts |
| Ganho médio · perda média | +762 · −414 pts | +817 · −437 pts | +793 · −429 pts |
| Payoff (ganho médio ÷ perda média) | 1,84 | 1,87 | 1,85 |
| Fator de lucro (total ganho ÷ total perdido) | 1,39 | 1,07 | 1,18 |
| Resultado médio por operação | +91,8 pts (+106,8 sem custo) | +20,7 pts (+35,7 sem custo) | +48,1 pts (+63,1 sem custo) |
| **Lucro líquido** | **+7.253 pts · R\$ 1.451** | **+2.606 pts · R\$ 521** | **+9.858 pts · R\$ 1.972** |
| Pior queda (drawdown) | −3.613 pts · −R\$ 723 | −8.443 pts · −R\$ 1.689 | −8.443 pts · −R\$ 1.689 |
| Maior sequência de perdas | 7 seguidas | 14 seguidas | 14 seguidas |
| Compras: acerto · lucro | 39% · +1.868 pts | 34% · +2.553 pts | 36% · +4.421 pts |
| Vendas: acerto · lucro | 46% · +5.385 pts | 39% · +53 pts | 42% · +5.438 pts |

### Versão como no vídeo (alvo 2.000)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 80 | 124 | 204 |
| Operações por mês | 3,0 | 3,6 | 3,3 |
| Taxa de acerto | 45,0% | 35,5% | 39,2% |
| Bateram o alvo / o stop / zeraram no fim do dia | 6% / 51% / 42% | 5% / 56% / 39% | 5% / 54% / 40% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +796 · −406 pts | +881 · −380 pts | +843 · −389 pts |
| Payoff (ganho médio ÷ perda média) | 1,96 | 2,32 | 2,17 |
| Fator de lucro (total ganho ÷ total perdido) | 1,60 | 1,28 | 1,40 |
| Resultado médio por operação | +134,9 pts (+149,9 sem custo) | +67,7 pts (+82,7 sem custo) | +94,1 pts (+109,1 sem custo) |
| **Lucro líquido** | **+10.795 pts · R\$ 2.159** | **+8.400 pts · R\$ 1.680** | **+19.195 pts · R\$ 3.839** |
| Pior queda (drawdown) | −3.735 pts · −R\$ 747 | −5.180 pts · −R\$ 1.036 | −5.180 pts · −R\$ 1.036 |
| Maior sequência de perdas | 9 seguidas | 13 seguidas | 13 seguidas |
| Compras: acerto · lucro | 38% · +2.675 pts | 35% · +6.345 pts | 36% · +9.020 pts |
| Vendas: acerto · lucro | 52% · +8.120 pts | 36% · +2.055 pts | 42% · +10.175 pts |

### Versão alvo 1.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 81 | 124 | 205 |
| Operações por mês | 3,0 | 3,6 | 3,4 |
| Taxa de acerto | 45,7% | 38,7% | 41,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 21% / 51% / 28% | 20% / 54% / 26% | 20% / 53% / 27% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +635 · −406 pts | +703 · −383 pts | +673 · −391 pts |
| Payoff (ganho médio ÷ perda média) | 1,56 | 1,83 | 1,72 |
| Fator de lucro (total ganho ÷ total perdido) | 1,32 | 1,16 | 1,22 |
| Resultado médio por operação | +69,5 pts (+84,5 sem custo) | +37,2 pts (+52,2 sem custo) | +50,0 pts (+65,0 sem custo) |
| **Lucro líquido** | **+5.630 pts · R\$ 1.126** | **+4.615 pts · R\$ 923** | **+10.245 pts · R\$ 2.049** |
| Pior queda (drawdown) | −3.735 pts · −R\$ 747 | −4.780 pts · −R\$ 956 | −4.780 pts · −R\$ 956 |
| Maior sequência de perdas | 9 seguidas | 13 seguidas | 13 seguidas |
| Compras: acerto · lucro | 38% · −1.310 pts | 37% · +2.195 pts | 37% · +885 pts |
| Vendas: acerto · lucro | 54% · +6.940 pts | 41% · +2.420 pts | 46% · +9.360 pts |

### Versão alvo 2.000, stop 200 (payoff alto do vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 87 | 139 | 226 |
| Operações por mês | 3,2 | 4,1 | 3,7 |
| Taxa de acerto | 27,6% | 19,4% | 22,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 72% / 25% | 2% / 80% / 18% | 2% / 77% / 21% |
| Stop típico | 200 pts | 200 pts | 200 pts |
| Ganho médio · perda média | +798 · −219 pts | +794 · −215 pts | +796 · −216 pts |
| Payoff (ganho médio ÷ perda média) | 3,65 | 3,69 | 3,68 |
| Fator de lucro (total ganho ÷ total perdido) | 1,39 | 0,89 | 1,07 |
| Resultado médio por operação | +61,7 pts (+76,7 sem custo) | −19,0 pts (−4,0 sem custo) | +12,1 pts (+27,1 sem custo) |
| **Lucro líquido** | **+5.365 pts · R\$ 1.073** | **−2.640 pts · −R\$ 528** | **+2.725 pts · R\$ 545** |
| Pior queda (drawdown) | −2.670 pts · −R\$ 534 | −6.420 pts · −R\$ 1.284 | −6.420 pts · −R\$ 1.284 |
| Maior sequência de perdas | 12 seguidas | 21 seguidas | 21 seguidas |
| Compras: acerto · lucro | 23% · +1.245 pts | 19% · +1.575 pts | 21% · +2.820 pts |
| Vendas: acerto · lucro | 32% · +4.120 pts | 19% · −4.215 pts | 24% · −95 pts |

### Versão entrada a mercado

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 98 | 154 | 252 |
| Operações por mês | 3,6 | 4,5 | 4,1 |
| Taxa de acerto | 40,8% | 33,1% | 36,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 56% / 39% | 5% / 60% / 35% | 5% / 58% / 37% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +887 · −401 pts | +878 · −389 pts | +882 · −393 pts |
| Payoff (ganho médio ÷ perda média) | 2,21 | 2,26 | 2,24 |
| Fator de lucro (total ganho ÷ total perdido) | 1,53 | 1,12 | 1,27 |
| Resultado médio por operação | +124,9 pts (+139,9 sem custo) | +30,8 pts (+45,8 sem custo) | +67,4 pts (+82,4 sem custo) |
| **Lucro líquido** | **+12.240 pts · R\$ 2.448** | **+4.745 pts · R\$ 949** | **+16.985 pts · R\$ 3.397** |
| Pior queda (drawdown) | −4.565 pts · −R\$ 913 | −9.270 pts · −R\$ 1.854 | −9.270 pts · −R\$ 1.854 |
| Maior sequência de perdas | 11 seguidas | 20 seguidas | 20 seguidas |
| Compras: acerto · lucro | 35% · +2.730 pts | 29% · +3.230 pts | 32% · +5.960 pts |
| Vendas: acerto · lucro | 46% · +9.510 pts | 37% · +1.515 pts | 40% · +11.025 pts |

### Versão com break even a 400 pts

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 82 | 130 | 212 |
| Operações por mês | 3,0 | 3,8 | 3,5 |
| Taxa de acerto | 40,2% | 30,8% | 34,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 6% / 46% / 37% | 4% / 48% / 33% | 5% / 48% / 34% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +812 · −340 pts | +894 · −306 pts | +857 · −318 pts |
| Payoff (ganho médio ÷ perda média) | 2,39 | 2,92 | 2,69 |
| Fator de lucro (total ganho ÷ total perdido) | 1,61 | 1,30 | 1,41 |
| Resultado médio por operação | +123,7 pts (+138,7 sem custo) | +63,0 pts (+78,0 sem custo) | +86,5 pts (+101,5 sem custo) |
| **Lucro líquido** | **+10.140 pts · R\$ 2.028** | **+8.195 pts · R\$ 1.639** | **+18.335 pts · R\$ 3.667** |
| Pior queda (drawdown) | −3.350 pts · −R\$ 670 | −5.100 pts · −R\$ 1.020 | −5.100 pts · −R\$ 1.020 |
| Maior sequência de perdas | 10 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 32% · +1.785 pts | 29% · +5.430 pts | 30% · +7.215 pts |
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
| **ATR 0,21 / 1,03** | **R\$ 21.661** · +16,9% | −10,7% | 9,2% · 0,43 | 45% · 42% | −4,3% · +9,1% |
| **como no vídeo (alvo 2.000)** | **R\$ 26.109** · +21,4% | −6,9% | 9,1% · 0,85 | 47% · 43% | −4,4% · +8,5% |
| **alvo 1.000** | **R\$ 21.988** · +17,2% | −6,9% | 7,3% · 0,56 | 53% · 40% | −4,4% · +6,4% |
| **alvo 2.000, stop 200 (payoff alto do vídeo)** | **R\$ 18.956** · +13,8% | −6,4% | 6,8% · 0,16 | 32% · 47% | −2,9% · +7,3% |
| **entrada a mercado** | **R\$ 24.857** · +20,2% | −11,5% | 10,2% · 0,67 | 47% · 45% | −4,7% · +8,8% |
| **com break even a 400 pts** | **R\$ 25.705** · +21,0% | −7,0% | 8,8% · 0,84 | 47% · 45% | −4,1% · +8,4% |
| **risco 1%** | **R\$ 24.941** · +20,3% | −10,4% | 10,7% · 0,65 | 45% · 50% | −6,9% · +10,6% |
| **pura** | **R\$ 11.931** · +3,6% | −15,9% | 9,2% · −0,88 | 28% · 37% | −5,2% · +7,9% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/rompe-media-200_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** | −4,6% | +22,0% | +26,7% | +10,6% | +34,6% | −1,3% | **+116,6%** (+16,9% · R\$ 21.661) |
| **como no vídeo (alvo 2.000)** | −4,8% | +29,2% | +28,5% | +12,5% | +31,4% | +11,7% | **+161,1%** (+21,4% · R\$ 26.109) |
| **alvo 1.000** | −3,1% | +19,1% | +24,0% | +10,1% | +27,2% | +9,7% | **+119,9%** (+17,2% · R\$ 21.988) |
| **alvo 2.000, stop 200 (payoff alto do vídeo)** | −3,4% | +18,7% | +24,2% | +4,7% | +19,6% | +6,3% | **+89,6%** (+13,8% · R\$ 18.956) |
| **entrada a mercado** | −6,2% | +38,2% | +25,3% | +6,8% | +33,5% | +7,3% | **+148,6%** (+20,2% · R\$ 24.857) |
| **com break even a 400 pts** | −4,2% | +29,8% | +25,6% | +11,5% | +28,8% | +14,6% | **+157,0%** (+21,0% · R\$ 25.705) |
| **risco 1%** | −4,1% | +23,6% | +27,6% | +11,5% | +40,2% | +5,5% | **+149,4%** (+20,3% · R\$ 24.941) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *CDI* | *entrada a mercado* | *como no vídeo (alvo 2.000)* | *como no vídeo (alvo 2.000)* | *risco 1%* | *com break even a 400 pts* | *como no vídeo (alvo 2.000)* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

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
> | out/2026 | −0,0% | +0,3% | +1,0% | −9,9% |
> | **Acumulado** | **+116,6%** | **+149,4%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 1,03** | +20% ao ano · queda −25% | +17% ao ano · queda −11% | +15% ao ano · queda −3% | +14% ao ano · queda −2% |
| **como no vídeo (alvo 2.000)** | +30% ao ano · queda −15% | +21% ao ano · queda −7% | +17% ao ano · queda −3% | +15% ao ano · queda −1% |
| **alvo 1.000** | +21% ao ano · queda −15% | +17% ao ano · queda −7% | +15% ao ano · queda −3% | +14% ao ano · queda −1% |
| **alvo 2.000, stop 200 (payoff alto do vídeo)** | +14% ao ano · queda −17% | +14% ao ano · queda −6% | +13% ao ano · queda −2% | +13% ao ano · queda −1% |
| **entrada a mercado** | +27% ao ano · queda −26% | +20% ao ano · queda −12% | +17% ao ano · queda −4% | +15% ao ano · queda −2% |
| **com break even a 400 pts** | +29% ao ano · queda −15% | +21% ao ano · queda −7% | +17% ao ano · queda −3% | +15% ao ano · queda −1% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 204 operações, 40% de acerto e fator de lucro 1,48. O vídeo mostra: 533 operações · 37% de acerto · payoff 2,57 (2015–2026, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,23R por operação no treino (p 0,044) e +0,14R no teste (p 0,080). |
| **É sorte de parâmetro?** | 8 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,10 a +0,27R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,23 → +0,14R · sem o filtro da abertura do dia: +0,16 → −0,02R · sem o filtro da média de 300: +0,34 → +0,07R · entrada a mercado: +0,24 → +0,09R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,23 → +0,14R · 25 pts: +0,20 → +0,12R · 30 pts: +0,19 → +0,11R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 1.689 por contrato (começou em jan/2026, ainda não recuperada); 14 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 55% dos meses. O resultado aparece no ano.
- **Opera pouco** (~3,4 operações por mês): os números têm mais incerteza.
- **Anos negativos:** 2021, 2026.
- **Acerto de ~39%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

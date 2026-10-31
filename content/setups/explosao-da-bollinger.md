---
title: Explosão da Bollinger
date: 2026-10-31
tags: [setup, win]
---

**Preço acima das médias de 50 e 200 e uma vela estourando a banda de Bollinger: entra a favor com stop curto e alvo três vezes maior.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · entradas das 10h às 16h

🎬 **Vídeo de origem:** [Arthur 777 – "só 10% de acerto? testei 3.000 trades"](https://youtu.be/V9EbJHI9wDw) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 31.296** na versão ATR 0,10 / 1,54 com o capital no CDI (+26% ao ano · pior queda −14%)
> - **R\$ 30.011** na versão como no vídeo (alvo 1.000) com o capital no CDI (+25% ao ano · pior queda −14%)
> - **R\$ 29.979** na versão alvo 2.000 com o capital no CDI (+25% ao ano · pior queda −20%)
> - **R\$ 25.830** na versão alvo 3.000, stop 200 (payoff 5 do vídeo) com o capital no CDI (+21% ao ano · pior queda −14%)
> - **R\$ 24.563** na versão alvo 600 (2 para 1) com o capital no CDI (+20% ao ano · pior queda −12%)
> - **R\$ 34.040** na versão com break even a 300 pts com o capital no CDI (+28% ao ano · pior queda −13%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 50.700** na versão ATR 0,10 / 1,54 **arriscando 1% do capital por operação** (+39% ao ano · pior queda −33%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **3 operações** · acerto 67% · **+2,54R por operação** (no teste 2024 →: +0,14R) · líquido +3.354 pts (R\$ 671 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/explosao-da-bollinger_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Tendência** | fechamento **acima** das médias exponenciais de 50 e 200 | fechamento **abaixo** das duas médias |
| **2. Rompimento** | a vela fecha **acima da banda superior** (Bollinger 20, desvio 2) | fecha **abaixo da banda inferior** |
| **3. Horário** | entradas só das **10h às 16h** | igual |
| **Entrada** | **a mercado** na abertura da vela seguinte | igual |
| **Alvo · stop** | 1.000 · 300 pts no vídeo → em ATR aqui | igual |
| **Saída no tempo** | zera às **17h** | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,10 / 1,54** — stop 0,103 ATR · alvo 1,544 ATR (15,0× o stop); hoje ≈ 446 pts de stop e 6.691 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,10 / 1,54** (principal) | stop 0,103 ATR · alvo 1,544 ATR (15,0× o stop) | 26% · 3,30 | +20,8 → +28,9 | +25,9% | −14,0% |
| **como no vídeo (alvo 1.000)** | stop 300 · alvo 1.000 pts | 34% · 2,16 | +18,7 → +25,9 | +24,8% | −14,3% |
| **alvo 2.000** | stop 300 · alvo 2.000 pts | 33% · 2,32 | +16,3 → +32,7 | +24,8% | −19,9% |
| **alvo 3.000, stop 200 (payoff 5 do vídeo)** | stop 200 · alvo 3.000 pts | 24% · 3,43 | +15,3 → +17,6 | +21,1% | −14,4% |
| **alvo 600 (2 para 1)** | stop 300 · alvo 600 pts | 39% · 1,66 | +4,0 → +18,5 | +19,9% | −12,3% |
| **com break even a 300 pts** | stop 300 · alvo 1.000 pts | 29% · 2,85 | +21,2 → +32,3 | +28,1% | −13,0% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,10 / 1,54

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 512 | 692 | 1.204 |
| Operações por mês | 19,0 | 20,4 | 19,7 |
| Taxa de acerto | 27,3% | 24,9% | 25,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 0% / 71% / 29% | 0% / 73% / 27% | 0% / 72% / 28% |
| Stop típico | 198 pts | 189 pts | 194 pts |
| Ganho médio · perda média | +655 · −218 pts | +807 · −229 pts | +739 · −224 pts |
| Payoff (ganho médio ÷ perda média) | 3,01 | 3,53 | 3,30 |
| Fator de lucro (total ganho ÷ total perdido) | 1,13 | 1,17 | 1,15 |
| Resultado médio por operação | +20,8 pts (+35,8 sem custo) | +28,9 pts (+43,9 sem custo) | +25,4 pts (+40,4 sem custo) |
| **Lucro líquido** | **+10.649 pts · R\$ 2.130** | **+19.976 pts · R\$ 3.995** | **+30.625 pts · R\$ 6.125** |
| Pior queda (drawdown) | −10.774 pts · −R\$ 2.155 | −7.946 pts · −R\$ 1.589 | −10.774 pts · −R\$ 2.155 |
| Maior sequência de perdas | 16 seguidas | 22 seguidas | 22 seguidas |
| Compras: acerto · lucro | 32% · +11.046 pts | 25% · +13.658 pts | 28% · +24.704 pts |
| Vendas: acerto · lucro | 23% · −397 pts | 25% · +6.317 pts | 24% · +5.921 pts |

### Versão como no vídeo (alvo 1.000)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 519 | 712 | 1.231 |
| Operações por mês | 19,2 | 20,9 | 20,2 |
| Taxa de acerto | 35,1% | 33,3% | 34,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 16% / 61% / 23% | 18% / 61% / 21% | 17% / 61% / 22% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +613 · −302 pts | +676 · −298 pts | +648 · −300 pts |
| Payoff (ganho médio ÷ perda média) | 2,03 | 2,27 | 2,16 |
| Fator de lucro (total ganho ÷ total perdido) | 1,10 | 1,13 | 1,12 |
| Resultado médio por operação | +18,7 pts (+33,7 sem custo) | +25,9 pts (+40,9 sem custo) | +22,9 pts (+37,9 sem custo) |
| **Lucro líquido** | **+9.710 pts · R\$ 1.942** | **+18.450 pts · R\$ 3.690** | **+28.160 pts · R\$ 5.632** |
| Pior queda (drawdown) | −11.300 pts · −R\$ 2.260 | −9.195 pts · −R\$ 1.839 | −11.300 pts · −R\$ 2.260 |
| Maior sequência de perdas | 9 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 38% · +9.150 pts | 36% · +21.525 pts | 37% · +30.675 pts |
| Vendas: acerto · lucro | 32% · +560 pts | 31% · −3.075 pts | 31% · −2.515 pts |

### Versão alvo 2.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 480 | 640 | 1.120 |
| Operações por mês | 17,8 | 18,8 | 18,4 |
| Taxa de acerto | 33,8% | 31,9% | 32,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 62% / 36% | 4% / 63% / 34% | 3% / 62% / 35% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +639 · −301 pts | +743 · −299 pts | +697 · −300 pts |
| Payoff (ganho médio ÷ perda média) | 2,12 | 2,48 | 2,32 |
| Fator de lucro (total ganho ÷ total perdido) | 1,08 | 1,16 | 1,13 |
| Resultado médio por operação | +16,3 pts (+31,3 sem custo) | +32,7 pts (+47,7 sem custo) | +25,7 pts (+40,7 sem custo) |
| **Lucro líquido** | **+7.840 pts · R\$ 1.568** | **+20.915 pts · R\$ 4.183** | **+28.755 pts · R\$ 5.751** |
| Pior queda (drawdown) | −14.390 pts · −R\$ 2.878 | −8.825 pts · −R\$ 1.765 | −14.390 pts · −R\$ 2.878 |
| Maior sequência de perdas | 13 seguidas | 14 seguidas | 14 seguidas |
| Compras: acerto · lucro | 37% · +7.590 pts | 34% · +19.190 pts | 35% · +26.780 pts |
| Vendas: acerto · lucro | 31% · +250 pts | 30% · +1.725 pts | 30% · +1.975 pts |

### Versão alvo 3.000, stop 200 (payoff 5 do vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 528 | 717 | 1.245 |
| Operações por mês | 19,6 | 21,1 | 20,4 |
| Taxa de acerto | 25,9% | 23,2% | 24,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 0% / 72% / 28% | 1% / 75% / 24% | 1% / 74% / 26% |
| Stop típico | 200 pts | 200 pts | 200 pts |
| Ganho médio · perda média | +657 · −210 pts | +779 · −212 pts | +724 · −211 pts |
| Payoff (ganho médio ÷ perda média) | 3,14 | 3,68 | 3,43 |
| Fator de lucro (total ganho ÷ total perdido) | 1,10 | 1,11 | 1,10 |
| Resultado médio por operação | +15,3 pts (+30,3 sem custo) | +17,6 pts (+32,6 sem custo) | +16,6 pts (+31,6 sem custo) |
| **Lucro líquido** | **+8.085 pts · R\$ 1.617** | **+12.635 pts · R\$ 2.527** | **+20.720 pts · R\$ 4.144** |
| Pior queda (drawdown) | −11.150 pts · −R\$ 2.230 | −7.735 pts · −R\$ 1.547 | −11.150 pts · −R\$ 2.230 |
| Maior sequência de perdas | 16 seguidas | 25 seguidas | 25 seguidas |
| Compras: acerto · lucro | 29% · +7.660 pts | 24% · +7.650 pts | 26% · +15.310 pts |
| Vendas: acerto · lucro | 23% · +425 pts | 23% · +4.985 pts | 23% · +5.410 pts |

### Versão alvo 600 (2 para 1)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 600 | 818 | 1.418 |
| Operações por mês | 22,2 | 24,1 | 23,2 |
| Taxa de acerto | 39,3% | 38,9% | 39,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 29% / 57% / 14% | 32% / 56% / 11% | 31% / 57% / 13% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +476 · −302 pts | +517 · −298 pts | +499 · −300 pts |
| Payoff (ganho médio ÷ perda média) | 1,58 | 1,73 | 1,66 |
| Fator de lucro (total ganho ÷ total perdido) | 1,02 | 1,10 | 1,07 |
| Resultado médio por operação | +4,0 pts (+19,0 sem custo) | +18,5 pts (+33,5 sem custo) | +12,3 pts (+27,3 sem custo) |
| **Lucro líquido** | **+2.385 pts · R\$ 477** | **+15.110 pts · R\$ 3.022** | **+17.495 pts · R\$ 3.499** |
| Pior queda (drawdown) | −10.225 pts · −R\$ 2.045 | −8.720 pts · −R\$ 1.744 | −11.465 pts · −R\$ 2.293 |
| Maior sequência de perdas | 9 seguidas | 10 seguidas | 10 seguidas |
| Compras: acerto · lucro | 42% · +5.775 pts | 41% · +17.280 pts | 42% · +23.055 pts |
| Vendas: acerto · lucro | 37% · −3.390 pts | 36% · −2.170 pts | 37% · −5.560 pts |

### Versão com break even a 300 pts

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 520 | 717 | 1.237 |
| Operações por mês | 19,3 | 21,1 | 20,3 |
| Taxa de acerto | 29,2% | 28,7% | 28,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 15% / 53% / 18% | 17% / 53% / 16% | 16% / 53% / 16% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +660 · −242 pts | +716 · −243 pts | +692 · −243 pts |
| Payoff (ganho médio ÷ perda média) | 2,72 | 2,94 | 2,85 |
| Fator de lucro (total ganho ÷ total perdido) | 1,12 | 1,19 | 1,16 |
| Resultado médio por operação | +21,2 pts (+36,2 sem custo) | +32,3 pts (+47,3 sem custo) | +27,7 pts (+42,7 sem custo) |
| **Lucro líquido** | **+11.050 pts · R\$ 2.210** | **+23.155 pts · R\$ 4.631** | **+34.205 pts · R\$ 6.841** |
| Pior queda (drawdown) | −10.195 pts · −R\$ 2.039 | −9.025 pts · −R\$ 1.805 | −10.195 pts · −R\$ 2.039 |
| Maior sequência de perdas | 15 seguidas | 17 seguidas | 17 seguidas |
| Compras: acerto · lucro | 32% · +10.880 pts | 31% · +22.595 pts | 32% · +33.475 pts |
| Vendas: acerto · lucro | 27% · +170 pts | 26% · +560 pts | 26% · +730 pts |

![Pontos acumulados com 1 contrato](setups/img/explosao-da-bollinger_pontos.png)

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
| **ATR 0,10 / 1,54** | **R\$ 31.296** · +25,9% | −14,0% | 16,7% · 0,74 | 58% · 55% | −6,9% · +9,8% |
| **como no vídeo (alvo 1.000)** | **R\$ 30.011** · +24,8% | −14,3% | 15,7% · 0,73 | 55% · 55% | −6,6% · +12,0% |
| **alvo 2.000** | **R\$ 29.979** · +24,8% | −19,9% | 17,3% · 0,67 | 52% · 55% | −6,8% · +12,7% |
| **alvo 3.000, stop 200 (payoff 5 do vídeo)** | **R\$ 25.830** · +21,1% | −14,4% | 15,9% · 0,53 | 57% · 53% | −6,9% · +12,1% |
| **alvo 600 (2 para 1)** | **R\$ 24.563** · +19,9% | −12,3% | 13,9% · 0,51 | 57% · 52% | −6,0% · +12,0% |
| **com break even a 300 pts** | **R\$ 34.040** · +28,1% | −13,0% | 15,0% · 0,92 | 53% · 60% | −6,0% · +12,7% |
| **risco 1%** | **R\$ 50.700** · +38,8% | −33,3% | 35,1% · 0,76 | 55% · 55% | −16,6% · +22,6% |
| **pura** | **R\$ 17.242** · +11,6% | −19,9% | 16,7% · 0,02 | 48% · 52% | −7,8% · +8,6% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/explosao-da-bollinger_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,10 / 1,54** | −5,6% | +20,6% | +36,6% | +3,3% | +41,4% | +37,8% | **+213,0%** (+25,9% · R\$ 31.296) |
| **como no vídeo (alvo 1.000)** | −2,5% | +7,7% | +45,3% | +0,8% | +73,1% | +12,7% | **+200,1%** (+24,8% · R\$ 30.011) |
| **alvo 2.000** | −10,2% | +11,1% | +46,8% | +0,9% | +53,2% | +32,5% | **+199,8%** (+24,8% · R\$ 29.979) |
| **alvo 3.000, stop 200 (payoff 5 do vídeo)** | −10,5% | +20,9% | +36,5% | +3,4% | +39,1% | +21,7% | **+158,3%** (+21,1% · R\$ 25.830) |
| **alvo 600 (2 para 1)** | +0,0% | +1,4% | +30,5% | −3,1% | +74,2% | +9,9% | **+145,6%** (+19,9% · R\$ 24.563) |
| **com break even a 300 pts** | −0,2% | +8,2% | +45,6% | +4,3% | +81,3% | +14,6% | **+240,4%** (+28,1% · R\$ 34.040) |
| **risco 1%** | −12,2% | +24,2% | +66,0% | −10,9% | +100,5% | +56,9% | **+407,0%** (+38,8% · R\$ 50.700) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *CDI* | *risco 1%* | *risco 1%* | *CDI* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/explosao-da-bollinger_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,10 / 1,54 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | −1,8% | −3,9% | +0,6% | −3,4% |
> | dez/2021 | −3,9% | −8,6% | +0,7% | +2,9% |
> | jan/2022 | +2,2% | +3,9% | +0,7% | +7,0% |
> | fev/2022 | −3,3% | −9,1% | +0,8% | +0,9% |
> | mar/2022 | +3,2% | +5,6% | +0,9% | +6,1% |
> | abr/2022 | +5,6% | +12,6% | +0,8% | −10,1% |
> | mai/2022 | −5,6% | −11,5% | +1,0% | +3,2% |
> | jun/2022 | −0,7% | −3,6% | +1,0% | −11,5% |
> | jul/2022 | −6,9% | −16,6% | +1,0% | +4,7% |
> | ago/2022 | +9,4% | +22,6% | +1,2% | +6,2% |
> | set/2022 | +1,2% | +1,0% | +1,1% | +0,5% |
> | out/2022 | +4,6% | +8,0% | +1,0% | +5,5% |
> | nov/2022 | +5,5% | +7,3% | +1,0% | −3,1% |
> | dez/2022 | +5,2% | +8,3% | +1,1% | −2,4% |
> | jan/2023 | +6,2% | +11,1% | +1,1% | +3,4% |
> | fev/2023 | +6,3% | +12,2% | +0,9% | −7,5% |
> | mar/2023 | +1,6% | +1,9% | +1,2% | −2,9% |
> | abr/2023 | +3,9% | +7,9% | +0,9% | +2,5% |
> | mai/2023 | +5,0% | +10,4% | +1,1% | +3,7% |
> | jun/2023 | +3,1% | +5,9% | +1,1% | +9,0% |
> | jul/2023 | −1,7% | −5,4% | +1,1% | +3,3% |
> | ago/2023 | +4,0% | +8,7% | +1,1% | −5,1% |
> | set/2023 | +0,0% | −1,4% | +1,0% | +0,7% |
> | out/2023 | −1,0% | −5,4% | +1,0% | −2,9% |
> | nov/2023 | +4,5% | +9,1% | +0,9% | +12,5% |
> | dez/2023 | +0,2% | −1,1% | +0,9% | +5,4% |
> | jan/2024 | −0,1% | −2,5% | +1,0% | −4,8% |
> | fev/2024 | +3,8% | +9,4% | +0,8% | +1,0% |
> | mar/2024 | +0,8% | +0,7% | +0,8% | −0,7% |
> | abr/2024 | −2,3% | −7,1% | +0,9% | −1,7% |
> | mai/2024 | −4,2% | −13,2% | +0,8% | −3,0% |
> | jun/2024 | −1,2% | −4,8% | +0,8% | +1,5% |
> | jul/2024 | +0,7% | +2,2% | +0,9% | +3,0% |
> | ago/2024 | +2,9% | +6,5% | +0,9% | +6,5% |
> | set/2024 | +2,7% | +6,0% | +0,8% | −3,1% |
> | out/2024 | −2,9% | −9,6% | +0,9% | −1,6% |
> | nov/2024 | −1,6% | −5,8% | +0,8% | −3,1% |
> | dez/2024 | +5,1% | +10,1% | +0,8% | −4,3% |
> | jan/2025 | +2,3% | +4,9% | +1,0% | +4,9% |
> | fev/2025 | +2,3% | +4,3% | +1,0% | −2,6% |
> | mar/2025 | +9,3% | +21,8% | +1,0% | +6,1% |
> | abr/2025 | +0,4% | +0,3% | +1,1% | +3,7% |
> | mai/2025 | +7,4% | +17,4% | +1,1% | +1,5% |
> | jun/2025 | +2,1% | +4,2% | +1,1% | +1,3% |
> | jul/2025 | +1,1% | +0,9% | +1,3% | −4,2% |
> | ago/2025 | +4,8% | +9,2% | +1,2% | +6,3% |
> | set/2025 | +0,4% | −0,7% | +1,2% | +3,4% |
> | out/2025 | +1,6% | +1,8% | +1,3% | +2,3% |
> | nov/2025 | +8,0% | +20,4% | +1,1% | +6,4% |
> | dez/2025 | −3,8% | −8,7% | +1,1% | +1,3% |
> | jan/2026 | +3,3% | +5,8% | +1,2% | +12,6% |
> | fev/2026 | −1,4% | −2,5% | +1,0% | +4,1% |
> | mar/2026 | +1,0% | +1,2% | +1,2% | −0,7% |
> | abr/2026 | +4,7% | +5,1% | +1,1% | −0,1% |
> | mai/2026 | +5,1% | +7,6% | +1,1% | −7,2% |
> | jun/2026 | +0,8% | +0,9% | +1,1% | −1,0% |
> | jul/2026 | +8,8% | +15,0% | +1,2% | +3,5% |
> | ago/2026 | +9,8% | +14,2% | +1,1% | −0,3% |
> | set/2026 | −0,2% | +0,1% | +1,1% | +5,0% |
> | out/2026 | +1,3% | +0,2% | +1,0% | −9,9% |
> | **Acumulado** | **+213,0%** | **+407,0%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,10 / 1,54** | +37% ao ano · queda −32% | +26% ao ano · queda −14% | +20% ao ano · queda −6% | +16% ao ano · queda −3% |
| **como no vídeo (alvo 1.000)** | +35% ao ano · queda −32% | +25% ao ano · queda −14% | +19% ao ano · queda −6% | +16% ao ano · queda −2% |
| **alvo 2.000** | +34% ao ano · queda −41% | +25% ao ano · queda −20% | +19% ao ano · queda −7% | +16% ao ano · queda −2% |
| **alvo 3.000, stop 200 (payoff 5 do vídeo)** | +27% ao ano · queda −33% | +21% ao ano · queda −14% | +17% ao ano · queda −6% | +15% ao ano · queda −2% |
| **alvo 600 (2 para 1)** | +25% ao ano · queda −30% | +20% ao ano · queda −12% | +17% ao ano · queda −5% | +15% ao ano · queda −2% |
| **com break even a 300 pts** | +42% ao ano · queda −30% | +28% ao ano · queda −13% | +21% ao ano · queda −5% | +17% ao ano · queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1231 operações, 34% de acerto e fator de lucro 1,20. O vídeo mostra: 2.700 operações · 32% de acerto · payoff 2,73 (desde 2015, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,10R por operação no treino (p 0,078) e +0,14R no teste (p 0,001). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,01 a +0,15R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,10 → +0,14R · sem a média de 50: +0,10 → +0,13R · sem a média de 200: +0,07 → +0,06R · Bollinger desvio 2,5: +0,12 → +0,14R · o dia todo (9h–17h): +0,08 → +0,09R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,10 → +0,14R · 25 pts: +0,05 → +0,08R · 30 pts: +0,02 → +0,06R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,10 / 1,54 foi de −R\$ 2.155 por contrato (começou em nov/2021, recuperada em dez/2022); 22 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,10 / 1,54 + CDI ficou abaixo do CDI em 42% dos meses. O resultado aparece no ano.
- **Stop curto** (~194 pts): o custo e o escorregão pesam mais — veja "E se o custo for maior?".
- **Anos negativos:** 2021, 2024.
- **As compras carregam o setup:** compras +0,21R × vendas +0,04R por operação.
- **Acerto de ~26%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

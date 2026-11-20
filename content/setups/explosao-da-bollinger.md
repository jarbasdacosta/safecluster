---
title: Explosão da Bollinger
date: 2026-11-20
tags: [setup, win]
---

**Preço acima das médias de 50 e 200 e uma vela estourando a banda de Bollinger: entra a favor com stop curto e alvo três vezes maior.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · entradas das 10h às 16h

🎬 **Vídeo de origem:** [Arthur 777 – "só 10% de acerto? testei 3.000 trades"](https://youtu.be/V9EbJHI9wDw) · testado de forma independente nos nossos dados em 14/11/2026 · página gerada em 20/11/2026 19:47 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 307.707** arriscando **1% do capital** por operação (+25% ao ano · pior queda −37% · cauda −42%)
> - **R\$ 546.043** arriscando **2% do capital** por operação (+40% ao ano · pior queda −63% · cauda −68%)
>
> - **R\$ 182.572** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **12 operações** · acerto 58% · **+1,74R por operação** (no teste 2024 →: +0,15R) · líquido +8.648 pts (R\$ 1.730 por contrato)
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

- **Versão principal (escolhida só pelo treino): ATR 0,10 / 1,54** — stop 0,103 ATR · alvo 1,544 ATR (15,0× o stop); hoje ≈ 288 pts de stop e 4.322 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 2.800 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,10 / 1,54** (principal) | stop 0,103 ATR · alvo 1,544 ATR (15,0× o stop) | 26% · 3,33 | +20,8 → +36,0 | +28,4% | −14,0% |
| **como no vídeo (alvo 1.000)** | stop 300 · alvo 1.000 pts | 34% · 2,17 | +18,7 → +28,7 | +25,9% | −14,3% |
| **alvo 2.000** | stop 300 · alvo 2.000 pts | 33% · 2,33 | +16,3 → +37,1 | +26,3% | −19,9% |
| **alvo 3.000, stop 200 (payoff 5 do vídeo)** | stop 200 · alvo 3.000 pts | 24% · 3,45 | +15,3 → +19,2 | +21,7% | −14,4% |
| **alvo 600 (2 para 1)** | stop 300 · alvo 600 pts | 39% · 1,67 | +4,0 → +21,5 | +21,2% | −12,3% |
| **com break even a 300 pts** | stop 300 · alvo 1.000 pts | 29% · 2,86 | +21,2 → +34,0 | +28,8% | −13,0% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,10 / 1,54

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 512 | 701 | 1.213 |
| Operações por mês | 19,0 | 20,0 | 19,6 |
| Taxa de acerto | 27,3% | 25,2% | 26,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 0% / 71% / 29% | 0% / 72% / 28% | 0% / 71% / 28% |
| Stop típico | 198 pts | 189 pts | 194 pts |
| Ganho médio · perda média | +655 · −218 pts | +821 · −229 pts | +747 · −224 pts |
| Payoff (ganho médio ÷ perda média) | 3,01 | 3,58 | 3,33 |
| Fator de lucro (total ganho ÷ total perdido) | 1,13 | 1,21 | 1,18 |
| Resultado médio por operação | +20,8 pts (+35,8 sem custo) | +36,0 pts (+51,0 sem custo) | +29,6 pts (+44,6 sem custo) |
| **Lucro líquido** | **+10.649 pts · R\$ 2.130** | **+25.270 pts · R\$ 5.054** | **+35.919 pts · R\$ 7.184** |
| Pior queda (drawdown) | −10.774 pts · −R\$ 2.155 | −7.946 pts · −R\$ 1.589 | −10.774 pts · −R\$ 2.155 |
| Maior sequência de perdas | 16 seguidas | 22 seguidas | 22 seguidas |
| Compras: acerto · lucro | 32% · +11.046 pts | 25% · +16.186 pts | 28% · +27.232 pts |
| Vendas: acerto · lucro | 23% · −397 pts | 25% · +9.084 pts | 24% · +8.688 pts |

### Versão como no vídeo (alvo 1.000)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 519 | 724 | 1.243 |
| Operações por mês | 19,2 | 20,7 | 20,0 |
| Taxa de acerto | 35,1% | 33,4% | 34,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 16% / 61% / 23% | 18% / 61% / 21% | 17% / 61% / 22% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +613 · −302 pts | +679 · −298 pts | +651 · −300 pts |
| Payoff (ganho médio ÷ perda média) | 2,03 | 2,28 | 2,17 |
| Fator de lucro (total ganho ÷ total perdido) | 1,10 | 1,14 | 1,12 |
| Resultado médio por operação | +18,7 pts (+33,7 sem custo) | +28,7 pts (+43,7 sem custo) | +24,5 pts (+39,5 sem custo) |
| **Lucro líquido** | **+9.710 pts · R\$ 1.942** | **+20.775 pts · R\$ 4.155** | **+30.485 pts · R\$ 6.097** |
| Pior queda (drawdown) | −11.300 pts · −R\$ 2.260 | −9.195 pts · −R\$ 1.839 | −11.300 pts · −R\$ 2.260 |
| Maior sequência de perdas | 9 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 38% · +9.150 pts | 36% · +22.495 pts | 37% · +31.645 pts |
| Vendas: acerto · lucro | 32% · +560 pts | 31% · −1.720 pts | 32% · −1.160 pts |

### Versão alvo 2.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 480 | 650 | 1.130 |
| Operações por mês | 17,8 | 18,6 | 18,2 |
| Taxa de acerto | 33,8% | 32,2% | 32,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 62% / 36% | 4% / 62% / 34% | 3% / 62% / 35% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +639 · −301 pts | +747 · −299 pts | +700 · −300 pts |
| Payoff (ganho médio ÷ perda média) | 2,12 | 2,50 | 2,33 |
| Fator de lucro (total ganho ÷ total perdido) | 1,08 | 1,18 | 1,14 |
| Resultado médio por operação | +16,3 pts (+31,3 sem custo) | +37,1 pts (+52,1 sem custo) | +28,3 pts (+43,3 sem custo) |
| **Lucro líquido** | **+7.840 pts · R\$ 1.568** | **+24.145 pts · R\$ 4.829** | **+31.985 pts · R\$ 6.397** |
| Pior queda (drawdown) | −14.390 pts · −R\$ 2.878 | −8.825 pts · −R\$ 1.765 | −14.390 pts · −R\$ 2.878 |
| Maior sequência de perdas | 13 seguidas | 14 seguidas | 14 seguidas |
| Compras: acerto · lucro | 37% · +7.590 pts | 34% · +19.800 pts | 35% · +27.390 pts |
| Vendas: acerto · lucro | 31% · +250 pts | 31% · +4.345 pts | 31% · +4.595 pts |

### Versão alvo 3.000, stop 200 (payoff 5 do vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 528 | 729 | 1.257 |
| Operações por mês | 19,6 | 20,8 | 20,3 |
| Taxa de acerto | 25,9% | 23,2% | 24,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 0% / 72% / 28% | 1% / 75% / 24% | 1% / 74% / 26% |
| Stop típico | 200 pts | 200 pts | 200 pts |
| Ganho médio · perda média | +657 · −210 pts | +783 · −211 pts | +727 · −211 pts |
| Payoff (ganho médio ÷ perda média) | 3,14 | 3,70 | 3,45 |
| Fator de lucro (total ganho ÷ total perdido) | 1,10 | 1,12 | 1,11 |
| Resultado médio por operação | +15,3 pts (+30,3 sem custo) | +19,2 pts (+34,2 sem custo) | +17,6 pts (+32,6 sem custo) |
| **Lucro líquido** | **+8.085 pts · R\$ 1.617** | **+13.980 pts · R\$ 2.796** | **+22.065 pts · R\$ 4.413** |
| Pior queda (drawdown) | −11.150 pts · −R\$ 2.230 | −7.735 pts · −R\$ 1.547 | −11.150 pts · −R\$ 2.230 |
| Maior sequência de perdas | 16 seguidas | 25 seguidas | 25 seguidas |
| Compras: acerto · lucro | 29% · +7.660 pts | 23% · +6.520 pts | 26% · +14.180 pts |
| Vendas: acerto · lucro | 23% · +425 pts | 23% · +7.460 pts | 23% · +7.885 pts |

### Versão alvo 600 (2 para 1)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 600 | 834 | 1.434 |
| Operações por mês | 22,2 | 23,8 | 23,1 |
| Taxa de acerto | 39,3% | 39,2% | 39,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 29% / 57% / 14% | 33% / 56% / 11% | 31% / 57% / 12% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +476 · −302 pts | +518 · −299 pts | +500 · −300 pts |
| Payoff (ganho médio ÷ perda média) | 1,58 | 1,73 | 1,67 |
| Fator de lucro (total ganho ÷ total perdido) | 1,02 | 1,12 | 1,08 |
| Resultado médio por operação | +4,0 pts (+19,0 sem custo) | +21,5 pts (+36,5 sem custo) | +14,2 pts (+29,2 sem custo) |
| **Lucro líquido** | **+2.385 pts · R\$ 477** | **+17.915 pts · R\$ 3.583** | **+20.300 pts · R\$ 4.060** |
| Pior queda (drawdown) | −10.225 pts · −R\$ 2.045 | −8.720 pts · −R\$ 1.744 | −11.465 pts · −R\$ 2.293 |
| Maior sequência de perdas | 9 seguidas | 10 seguidas | 10 seguidas |
| Compras: acerto · lucro | 42% · +5.775 pts | 42% · +18.360 pts | 42% · +24.135 pts |
| Vendas: acerto · lucro | 37% · −3.390 pts | 37% · −445 pts | 37% · −3.835 pts |

### Versão com break even a 300 pts

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 520 | 729 | 1.249 |
| Operações por mês | 19,3 | 20,8 | 20,1 |
| Taxa de acerto | 29,2% | 28,8% | 29,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 15% / 53% / 18% | 17% / 53% / 16% | 16% / 53% / 16% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +660 · −242 pts | +718 · −243 pts | +694 · −243 pts |
| Payoff (ganho médio ÷ perda média) | 2,72 | 2,96 | 2,86 |
| Fator de lucro (total ganho ÷ total perdido) | 1,12 | 1,20 | 1,17 |
| Resultado médio por operação | +21,2 pts (+36,2 sem custo) | +34,0 pts (+49,0 sem custo) | +28,7 pts (+43,7 sem custo) |
| **Lucro líquido** | **+11.050 pts · R\$ 2.210** | **+24.820 pts · R\$ 4.964** | **+35.870 pts · R\$ 7.174** |
| Pior queda (drawdown) | −10.195 pts · −R\$ 2.039 | −9.025 pts · −R\$ 1.805 | −10.195 pts · −R\$ 2.039 |
| Maior sequência de perdas | 15 seguidas | 17 seguidas | 17 seguidas |
| Compras: acerto · lucro | 32% · +10.880 pts | 31% · +22.905 pts | 31% · +33.785 pts |
| Vendas: acerto · lucro | 27% · +170 pts | 27% · +1.915 pts | 27% · +2.085 pts |

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
| **ATR 0,10 / 1,54** | **R\$ 34.959** · +28,4% | −14,0% | 16,9% · 0,85 | 59% · 56% | −6,9% · +11,6% |
| **como no vídeo (alvo 1.000)** | **R\$ 31.647** · +25,9% | −14,3% | 15,7% · 0,78 | 56% · 56% | −6,6% · +12,0% |
| **alvo 2.000** | **R\$ 32.171** · +26,3% | −19,9% | 17,4% · 0,74 | 52% · 56% | −6,8% · +12,7% |
| **alvo 3.000, stop 200 (payoff 5 do vídeo)** | **R\$ 26.694** · +21,7% | −14,4% | 16,0% · 0,55 | 57% · 54% | −6,9% · +12,1% |
| **alvo 600 (2 para 1)** | **R\$ 26.146** · +21,2% | −12,3% | 13,9% · 0,58 | 57% · 52% | −6,0% · +12,0% |
| **com break even a 300 pts** | **R\$ 35.424** · +28,8% | −13,0% | 15,0% · 0,96 | 54% · 61% | −6,0% · +12,7% |
| **risco 1%** | **R\$ 57.839** · +42,0% | −33,3% | 35,1% · 0,83 | 56% · 56% | −16,6% · +22,6% |
| **pura** | **R\$ 19.124** · +13,8% | −19,9% | 16,9% · 0,14 | 49% · 52% | −7,8% · +10,9% |
| **CDI** | **R\$ 18.285** · +12,8% | 0,0% | 0,1% · — | — · 46% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.763** · +9,5% | −20,9% | 18,6% · −0,07 | 54% · — | −11,5% · +12,6% |

![Quedas](setups/img/explosao-da-bollinger_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,10 / 1,54** | −5,6% | +20,6% | +36,6% | +3,3% | +41,4% | +53,9% | **+249,6%** (+28,4% · R\$ 34.959) |
| **como no vídeo (alvo 1.000)** | −2,5% | +7,7% | +45,3% | +0,8% | +73,1% | +18,8% | **+216,5%** (+25,9% · R\$ 31.647) |
| **alvo 2.000** | −10,2% | +11,1% | +46,8% | +0,9% | +53,2% | +42,1% | **+221,7%** (+26,3% · R\$ 32.171) |
| **alvo 3.000, stop 200 (payoff 5 do vídeo)** | −10,5% | +20,9% | +36,5% | +3,4% | +39,1% | +25,7% | **+166,9%** (+21,7% · R\$ 26.694) |
| **alvo 600 (2 para 1)** | 0,0% | +1,4% | +30,5% | −3,1% | +74,2% | +17,0% | **+161,5%** (+21,2% · R\$ 26.146) |
| **com break even a 300 pts** | −0,2% | +8,2% | +45,6% | +4,3% | +81,3% | +19,3% | **+254,2%** (+28,8% · R\$ 35.424) |
| **risco 1%** | −12,2% | +24,2% | +66,0% | −10,9% | +100,5% | +79,0% | **+478,4%** (+42,0% · R\$ 57.839) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,4% | **+82,9%** (+12,8% · R\$ 18.285) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +3,3% | **+57,6%** (+9,5% · R\$ 15.763) |
| *Quem ganhou* | *CDI* | *risco 1%* | *risco 1%* | *CDI* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 19/11/2026.

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
> | set/2023 | 0,0% | −1,4% | +1,0% | +0,7% |
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
> | out/2026 | +1,4% | +0,3% | +1,1% | −9,9% |
> | nov/2026 | +11,6% | +14,0% | +0,7% | −0,9% |
> | **Acumulado** | **+249,6%** | **+478,4%** | **+82,9%** | **+57,6%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,10 / 1,54** | +42% ao ano · queda −32% | +28% ao ano · queda −14% | +21% ao ano · queda −6% | +17% ao ano · queda −3% |
| **como no vídeo (alvo 1.000)** | +37% ao ano · queda −32% | +26% ao ano · queda −14% | +20% ao ano · queda −6% | +16% ao ano · queda −2% |
| **alvo 2.000** | +37% ao ano · queda −41% | +26% ao ano · queda −20% | +20% ao ano · queda −7% | +16% ao ano · queda −2% |
| **alvo 3.000, stop 200 (payoff 5 do vídeo)** | +28% ao ano · queda −33% | +22% ao ano · queda −14% | +18% ao ano · queda −6% | +15% ao ano · queda −2% |
| **alvo 600 (2 para 1)** | +28% ao ano · queda −30% | +21% ao ano · queda −12% | +17% ao ano · queda −5% | +15% ao ano · queda −2% |
| **com break even a 300 pts** | +44% ao ano · queda −30% | +29% ao ano · queda −13% | +21% ao ano · queda −5% | +17% ao ano · queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 14/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1237 operações, 34% de acerto e fator de lucro 1,21. O vídeo mostra: 2.700 operações · 32% de acerto · payoff 2,73 (desde 2015, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,10R por operação no treino (p 0,037) e +0,14R no teste (p 0,005). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,01 a +0,16R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,10 → +0,14R · sem a média de 50: +0,10 → +0,14R · sem a média de 200: +0,07 → +0,06R · Bollinger desvio 2,5: +0,12 → +0,15R · o dia todo (9h–17h): +0,08 → +0,10R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,10 → +0,14R · 25 pts: +0,05 → +0,09R · 30 pts: +0,02 → +0,07R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,10 / 1,54 foi de −R\$ 2.155 por contrato (começou em nov/2021, recuperada em dez/2022); 22 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,10 / 1,54 + CDI ficou abaixo do CDI em 41% dos meses. O resultado aparece no ano.
- **Stop curto** (~194 pts): o custo e o escorregão pesam mais — veja "E se o custo for maior?".
- **Anos negativos:** 2021, 2024.
- **As compras carregam o setup:** compras +0,22R × vendas +0,03R por operação.
- **Acerto de ~26%:** a maioria das operações dá stop; sequências de stops são normais.
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
<summary><b>Ficha completa de Explosão da Bollinger</b></summary>

| Medida | Risco dividido | Risco 1% | Risco 2% |
|---|---|---|---|
| Operações | 1.213 | 1.213 | 1.213 |
| Operações por ano | 239 | 239 | 239 |
| Taxa de acerto | 26,1% | 26,1% | 26,1% |
| Payoff (ganho médio ÷ perda média) | 3,29 | 3,29 | 3,29 |
| Expectativa por operação (em R) | 0,120 | 0,120 | 0,120 |
| Fator de lucro | 1,17 | 1,17 | 1,17 |
| Pontos no período | 35.919 | 35.919 | 35.919 |
| Lucro com 1 contrato fixo | R\$ 7.184 | R\$ 7.184 | R\$ 7.184 |
| Capital final | R\$ 307.707 | R\$ 307.707 | R\$ 546.043 |
| Múltiplo do capital | 3,08× | 3,08× | 5,46× |
| Rentabilidade ao ano | +24,8% | +24,8% | +39,8% |
| Pior queda do período | -37,0% | -37,0% | -63,2% |
| Pior queda dentro de um ano | -34,9% | -34,9% | -60,2% |
| Cauda — pior em 1 de 20 anos | -42,4% | -42,4% | -68,4% |
| Maior tempo sem novo topo (dias) | 420 | 420 | 690 |
| Meses positivos | 61% | 61% | 61% |
| Sharpe | 0,82 | 0,82 | 0,82 |
| Sortino | 2,52 | 2,52 | 2,54 |
| Pregões para dobrar o capital | 1.006 | 1.006 | 884 |
| Contratos na 1ª operação | 17 | 17 | 35 |
| Maior lote | 55 | 55 | 183 |
| Operações no teto de contratos | 0% | 0% | 0% |

</details>

<!-- FICHA-COMPLETA-FIM -->

---
title: Vai na Onda
date: 2026-11-24
tags: [setup, win]
---

**Três velas seguidas para o mesmo lado, renovando a máxima (ou a mínima) do dia com volume acima da média: entra a favor da onda.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · velas das 9h45 às 16h00

🎬 **Vídeo de origem:** [Arthur 777 – "achei um padrão bizarro no mini índice"](https://youtu.be/5JZC82O-0Nc) · testado de forma independente nos nossos dados em 21/11/2026 · página gerada em 24/11/2026 19:46 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 287.477** arriscando **1% do capital** por operação (+23% ao ano · pior queda −27% · cauda −30%)
> - **R\$ 610.441** arriscando **2% do capital** por operação (+43% ao ano · pior queda −50% · cauda −53%)
>
> - **R\$ 182.665** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **14 operações** · acerto 36% · **−0,07R por operação** (no teste 2024 →: +0,17R) · líquido +393 pts (R\$ 79 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/vai-na-onda_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Sequência** | **3 velas positivas** seguidas | **3 velas negativas** seguidas |
| **2. Extremo do dia** | a última **renova a máxima do dia** | a última **renova a mínima do dia** |
| **3. Volume** | volume da última **acima da média exponencial de 10** do volume | igual |
| **Entrada** | compra a mercado na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop · alvo** | 400 · 400 pts no vídeo → em ATR aqui | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 563 pts de stop e 2.814 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 2.735 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** (principal) | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | 35% · 2,05 | +4,7 → +59,8 | +29,3% | −18,7% |
| **como no vídeo (todos os dias)** | stop 400 · alvo 400 pts | 53% · 0,94 | −14,5 → +27,3 | +17,9% | −20,0% |
| **sem as sextas (vídeo)** | stop 400 · alvo 400 pts | 52% · 0,94 | −11,2 → +21,1 | +15,3% | −18,7% |
| **até 17h00** | stop 400 · alvo 400 pts | 53% · 0,94 | −6,6 → +26,0 | +20,6% | −17,0% |
| **alvo 800** | stop 400 · alvo 800 pts | 39% · 1,64 | −10,7 → +30,6 | +18,8% | −20,8% |
| **alvo 2.000** | stop 400 · alvo 2.000 pts | 34% · 2,20 | −0,5 → +56,3 | +28,6% | −17,7% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 556 | 640 | 1.196 |
| Operações por mês | 20,6 | 18,3 | 19,3 |
| Taxa de acerto | 32,9% | 37,5% | 35,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 4% / 62% / 35% | 5% / 56% / 39% | 4% / 59% / 37% |
| Stop típico | 402 pts | 392 pts | 397 pts |
| Ganho médio · perda média | +864 · −417 pts | +901 · −445 pts | +885 · −431 pts |
| Payoff (ganho médio ÷ perda média) | 2,07 | 2,03 | 2,05 |
| Fator de lucro (total ganho ÷ total perdido) | 1,02 | 1,22 | 1,12 |
| Resultado médio por operação | +4,7 pts (+19,7 sem custo) | +59,8 pts (+74,8 sem custo) | +34,2 pts (+49,2 sem custo) |
| **Lucro líquido** | **+2.606 pts · R\$ 521** | **+38.292 pts · R\$ 7.658** | **+40.898 pts · R\$ 8.180** |
| Pior queda (drawdown) | −13.413 pts · −R\$ 2.683 | −10.155 pts · −R\$ 2.031 | −13.413 pts · −R\$ 2.683 |
| Maior sequência de perdas | 11 seguidas | 12 seguidas | 12 seguidas |
| Compras: acerto · lucro | 33% · +861 pts | 38% · +12.049 pts | 36% · +12.911 pts |
| Vendas: acerto · lucro | 33% · +1.744 pts | 37% · +26.243 pts | 35% · +27.988 pts |

### Versão como no vídeo (todos os dias)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 823 | 941 | 1.764 |
| Operações por mês | 30,5 | 26,9 | 28,5 |
| Taxa de acerto | 49,7% | 55,0% | 52,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 47% / 6% | 52% / 41% / 6% | 50% / 44% / 6% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +373 · −397 pts | +372 · −394 pts | +372 · −396 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,93 | 1,15 | 1,04 |
| Resultado médio por operação | −14,5 pts (+0,5 sem custo) | +27,3 pts (+42,3 sem custo) | +7,8 pts (+22,8 sem custo) |
| **Lucro líquido** | **−11.905 pts · −R\$ 2.381** | **+25.725 pts · R\$ 5.145** | **+13.820 pts · R\$ 2.764** |
| Pior queda (drawdown) | −18.155 pts · −R\$ 3.631 | −6.450 pts · −R\$ 1.290 | −18.155 pts · −R\$ 3.631 |
| Maior sequência de perdas | 7 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 50% · −5.730 pts | 59% · +23.355 pts | 55% · +17.625 pts |
| Vendas: acerto · lucro | 50% · −6.175 pts | 52% · +2.370 pts | 51% · −3.805 pts |

### Versão sem as sextas (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 647 | 744 | 1.391 |
| Operações por mês | 24,0 | 21,3 | 22,4 |
| Taxa de acerto | 50,2% | 54,3% | 52,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 46% / 6% | 51% / 42% / 7% | 49% / 44% / 7% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +371 · −397 pts | +371 · −394 pts | +371 · −395 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,94 | 1,12 | 1,03 |
| Resultado médio por operação | −11,2 pts (+3,8 sem custo) | +21,1 pts (+36,1 sem custo) | +6,1 pts (+21,1 sem custo) |
| **Lucro líquido** | **−7.250 pts · −R\$ 1.450** | **+15.685 pts · R\$ 3.137** | **+8.435 pts · R\$ 1.687** |
| Pior queda (drawdown) | −16.900 pts · −R\$ 3.380 | −6.120 pts · −R\$ 1.224 | −16.900 pts · −R\$ 3.380 |
| Maior sequência de perdas | 8 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 51% · −2.420 pts | 59% · +19.765 pts | 55% · +17.345 pts |
| Vendas: acerto · lucro | 50% · −4.830 pts | 50% · −4.080 pts | 50% · −8.910 pts |

### Versão até 17h00

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 883 | 993 | 1.876 |
| Operações por mês | 32,7 | 28,4 | 30,3 |
| Taxa de acerto | 50,7% | 55,0% | 53,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 45% / 8% | 51% / 40% / 9% | 49% / 42% / 9% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +367 · −391 pts | +366 · −390 pts | +366 · −390 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,97 | 1,15 | 1,06 |
| Resultado médio por operação | −6,6 pts (+8,4 sem custo) | +26,0 pts (+41,0 sem custo) | +10,6 pts (+25,6 sem custo) |
| **Lucro líquido** | **−5.820 pts · −R\$ 1.164** | **+25.775 pts · R\$ 5.155** | **+19.955 pts · R\$ 3.991** |
| Pior queda (drawdown) | −15.290 pts · −R\$ 3.058 | −7.135 pts · −R\$ 1.427 | −15.290 pts · −R\$ 3.058 |
| Maior sequência de perdas | 7 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 50% · −4.715 pts | 59% · +23.155 pts | 55% · +18.440 pts |
| Vendas: acerto · lucro | 51% · −1.105 pts | 52% · +2.620 pts | 51% · +1.515 pts |

### Versão alvo 800

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 664 | 779 | 1.443 |
| Operações por mês | 24,6 | 22,3 | 23,3 |
| Taxa de acerto | 37,2% | 40,6% | 39,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 25% / 58% / 17% | 29% / 54% / 17% | 27% / 56% / 17% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +640 · −396 pts | +651 · −393 pts | +646 · −394 pts |
| Payoff (ganho médio ÷ perda média) | 1,62 | 1,66 | 1,64 |
| Fator de lucro (total ganho ÷ total perdido) | 0,96 | 1,13 | 1,05 |
| Resultado médio por operação | −10,7 pts (+4,3 sem custo) | +30,6 pts (+45,6 sem custo) | +11,6 pts (+26,6 sem custo) |
| **Lucro líquido** | **−7.130 pts · −R\$ 1.426** | **+23.875 pts · R\$ 4.775** | **+16.745 pts · R\$ 3.349** |
| Pior queda (drawdown) | −17.925 pts · −R\$ 3.585 | −7.810 pts · −R\$ 1.562 | −17.925 pts · −R\$ 3.585 |
| Maior sequência de perdas | 11 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 39% · +2.105 pts | 42% · +14.705 pts | 41% · +16.810 pts |
| Vendas: acerto · lucro | 35% · −9.235 pts | 39% · +9.170 pts | 37% · −65 pts |

### Versão alvo 2.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 584 | 662 | 1.246 |
| Operações por mês | 21,6 | 18,9 | 20,1 |
| Taxa de acerto | 31,5% | 35,5% | 33,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 4% / 63% / 33% | 6% / 58% / 36% | 5% / 60% / 35% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +852 · −393 pts | +868 · −390 pts | +861 · −391 pts |
| Payoff (ganho médio ÷ perda média) | 2,17 | 2,22 | 2,20 |
| Fator de lucro (total ganho ÷ total perdido) | 1,00 | 1,22 | 1,11 |
| Resultado médio por operação | −0,5 pts (+14,5 sem custo) | +56,3 pts (+71,3 sem custo) | +29,7 pts (+44,7 sem custo) |
| **Lucro líquido** | **−265 pts · −R\$ 53** | **+37.285 pts · R\$ 7.457** | **+37.020 pts · R\$ 7.404** |
| Pior queda (drawdown) | −14.825 pts · −R\$ 2.965 | −8.635 pts · −R\$ 1.727 | −14.825 pts · −R\$ 2.965 |
| Maior sequência de perdas | 11 seguidas | 16 seguidas | 16 seguidas |
| Compras: acerto · lucro | 33% · +3.345 pts | 36% · +9.205 pts | 34% · +12.550 pts |
| Vendas: acerto · lucro | 31% · −3.610 pts | 35% · +28.080 pts | 33% · +24.470 pts |

![Pontos acumulados com 1 contrato](setups/img/vai-na-onda_pontos.png)

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
| **ATR 0,21 / 1,03** | **R\$ 36.186** · +29,3% | −18,7% | 23,4% · 0,70 | 56% · 54% | −9,5% · +27,4% |
| **como no vídeo (todos os dias)** | **R\$ 22.857** · +17,9% | −20,0% | 15,1% · 0,37 | 44% · 56% | −8,6% · +11,4% |
| **sem as sextas (vídeo)** | **R\$ 20.424** · +15,3% | −18,7% | 13,3% · 0,23 | 48% · 49% | −9,9% · +9,7% |
| **até 17h00** | **R\$ 25.573** · +20,6% | −17,0% | 15,4% · 0,51 | 54% · 54% | −7,4% · +13,1% |
| **alvo 800** | **R\$ 23.689** · +18,8% | −20,8% | 18,7% · 0,37 | 49% · 54% | −8,9% · +13,6% |
| **alvo 2.000** | **R\$ 35.313** · +28,6% | −17,7% | 21,7% · 0,71 | 56% · 56% | −12,2% · +25,3% |
| **risco 1%** | **R\$ 53.033** · +39,5% | −19,8% | 25,9% · 0,95 | 62% · 56% | −10,6% · +24,1% |
| **pura** | **R\$ 19.784** · +14,6% | −25,8% | 23,4% · 0,18 | 44% · 48% | −10,3% · +25,8% |
| **CDI** | **R\$ 18.295** · +12,8% | 0,0% | 0,1% · — | — · 46% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.652** · +9,4% | −21,2% | 18,6% · −0,07 | 54% · — | −11,5% · +12,6% |

![Quedas](setups/img/vai-na-onda_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** | −3,9% | +5,0% | +26,9% | +62,1% | +22,7% | +42,0% | **+261,9%** (+29,3% · R\$ 36.186) |
| **como no vídeo (todos os dias)** | −5,4% | +1,6% | +2,9% | +30,2% | +39,0% | +27,7% | **+128,6%** (+17,9% · R\$ 22.857) |
| **sem as sextas (vídeo)** | −9,3% | +6,8% | +10,9% | +18,3% | +28,3% | +25,3% | **+104,2%** (+15,3% · R\$ 20.424) |
| **até 17h00** | −4,6% | +2,7% | +13,0% | +29,3% | +38,2% | +29,3% | **+155,7%** (+20,6% · R\$ 25.573) |
| **alvo 800** | −1,3% | −3,7% | +13,6% | +46,0% | +28,2% | +17,3% | **+136,9%** (+18,8% · R\$ 23.689) |
| **alvo 2.000** | −13,8% | +17,1% | +24,3% | +60,5% | +34,8% | +30,0% | **+253,1%** (+28,6% · R\$ 35.313) |
| **risco 1%** | −3,7% | +8,2% | +36,6% | +97,1% | +36,3% | +38,7% | **+430,3%** (+39,5% · R\$ 53.033) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,5% | **+82,9%** (+12,8% · R\$ 18.295) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +2,5% | **+56,5%** (+9,4% · R\$ 15.652) |
| *Quem ganhou* | *CDI* | *alvo 2.000* | *risco 1%* | *risco 1%* | *como no vídeo (todos os dias)* | *ATR 0,21 / 1,03* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 24/11/2026.

![Retorno por ano](setups/img/vai-na-onda_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,21 / 1,03 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | −8,9% | −8,4% | +0,6% | −3,4% |
> | dez/2021 | +5,5% | +5,1% | +0,7% | +2,9% |
> | jan/2022 | −0,7% | −0,7% | +0,7% | +7,0% |
> | fev/2022 | +1,1% | +2,0% | +0,8% | +0,9% |
> | mar/2022 | +9,0% | +10,8% | +0,9% | +6,1% |
> | abr/2022 | −2,0% | −3,4% | +0,8% | −10,1% |
> | mai/2022 | +0,4% | +1,3% | +1,0% | +3,2% |
> | jun/2022 | +0,1% | −0,2% | +1,0% | −11,5% |
> | jul/2022 | −5,0% | −6,9% | +1,0% | +4,7% |
> | ago/2022 | +10,3% | +12,6% | +1,2% | +6,2% |
> | set/2022 | −3,0% | −2,9% | +1,1% | +0,5% |
> | out/2022 | −1,5% | −0,9% | +1,0% | +5,5% |
> | nov/2022 | +4,5% | +3,6% | +1,0% | −3,1% |
> | dez/2022 | −6,8% | −5,5% | +1,1% | −2,4% |
> | jan/2023 | +7,2% | +7,3% | +1,1% | +3,4% |
> | fev/2023 | −9,5% | −10,6% | +0,9% | −7,5% |
> | mar/2023 | −3,7% | −4,3% | +1,2% | −2,9% |
> | abr/2023 | +1,4% | +1,7% | +0,9% | +2,5% |
> | mai/2023 | +1,7% | +1,7% | +1,1% | +3,7% |
> | jun/2023 | +7,4% | +10,4% | +1,1% | +9,0% |
> | jul/2023 | −1,7% | −2,1% | +1,1% | +3,3% |
> | ago/2023 | +5,6% | +6,8% | +1,1% | −5,1% |
> | set/2023 | −3,5% | −5,8% | +1,0% | +0,7% |
> | out/2023 | +6,1% | +8,1% | +1,0% | −2,9% |
> | nov/2023 | +5,7% | +6,8% | +0,9% | +12,5% |
> | dez/2023 | +8,9% | +14,6% | +0,9% | +5,4% |
> | jan/2024 | +4,0% | +5,3% | +1,0% | −4,8% |
> | fev/2024 | +2,8% | +3,8% | +0,8% | +1,0% |
> | mar/2024 | −1,3% | −2,7% | +0,8% | −0,7% |
> | abr/2024 | +5,2% | +7,0% | +0,9% | −1,7% |
> | mai/2024 | +0,8% | +1,2% | +0,8% | −3,0% |
> | jun/2024 | +0,5% | −0,4% | +0,8% | +1,5% |
> | jul/2024 | +7,1% | +14,0% | +0,9% | +3,0% |
> | ago/2024 | +3,4% | +5,0% | +0,9% | +6,5% |
> | set/2024 | +10,5% | +15,9% | +0,8% | −3,1% |
> | out/2024 | +0,6% | +1,1% | +0,9% | −1,6% |
> | nov/2024 | +5,7% | +8,8% | +0,8% | −3,1% |
> | dez/2024 | +10,7% | +12,6% | +0,8% | −4,3% |
> | jan/2025 | +8,5% | +11,4% | +1,0% | +4,9% |
> | fev/2025 | +5,4% | +7,1% | +1,0% | −2,6% |
> | mar/2025 | +1,4% | +2,3% | +1,0% | +6,1% |
> | abr/2025 | −7,0% | −4,8% | +1,1% | +3,7% |
> | mai/2025 | +8,2% | +10,4% | +1,1% | +1,5% |
> | jun/2025 | +2,0% | +2,6% | +1,1% | +1,3% |
> | jul/2025 | −1,4% | −1,8% | +1,3% | −4,2% |
> | ago/2025 | +1,5% | +1,5% | +1,2% | +6,3% |
> | set/2025 | +2,8% | +3,8% | +1,2% | +3,4% |
> | out/2025 | −0,0% | −0,3% | +1,3% | +2,3% |
> | nov/2025 | −1,9% | −2,4% | +1,1% | +6,4% |
> | dez/2025 | +2,2% | +2,8% | +1,1% | +1,3% |
> | jan/2026 | +0,9% | +3,2% | +1,2% | +12,6% |
> | fev/2026 | +3,9% | +2,9% | +1,0% | +4,1% |
> | mar/2026 | +15,5% | +9,6% | +1,2% | −0,7% |
> | abr/2026 | +5,0% | +5,2% | +1,1% | −0,1% |
> | mai/2026 | −4,6% | −3,5% | +1,1% | −7,2% |
> | jun/2026 | −2,7% | −1,7% | +1,1% | −1,0% |
> | jul/2026 | +27,4% | +24,1% | +1,2% | +3,5% |
> | ago/2026 | +1,7% | +1,6% | +1,1% | −0,3% |
> | set/2026 | +1,0% | +0,8% | +1,1% | +5,0% |
> | out/2026 | −6,5% | −4,3% | +1,1% | −9,9% |
> | nov/2026 | −1,6% | −1,9% | +0,7% | −1,6% |
> | **Acumulado** | **+261,9%** | **+430,3%** | **+82,9%** | **+56,5%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 1,03** | +40% ao ano · queda −41% | +29% ao ano · queda −19% | +22% ao ano · queda −9% | +17% ao ano · queda −4% |
| **como no vídeo (todos os dias)** | +21% ao ano · queda −45% | +18% ao ano · queda −20% | +16% ao ano · queda −7% | +14% ao ano · queda −2% |
| **sem as sextas (vídeo)** | +16% ao ano · queda −42% | +15% ao ano · queda −19% | +14% ao ano · queda −8% | +14% ao ano · queda −3% |
| **até 17h00** | +26% ao ano · queda −39% | +21% ao ano · queda −17% | +17% ao ano · queda −6% | +15% ao ano · queda −2% |
| **alvo 800** | +21% ao ano · queda −47% | +19% ao ano · queda −21% | +16% ao ano · queda −6% | +15% ao ano · queda −2% |
| **alvo 2.000** | +40% ao ano · queda −38% | +29% ao ano · queda −18% | +21% ao ano · queda −8% | +17% ao ano · queda −3% |

*Referência: CDI +13% ao ano · Ibovespa +9% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 21/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1760 operações, 53% de acerto e fator de lucro 1,13. O vídeo mostra: ~3.078 operações · 54% de acerto · fator de lucro 1,22 · payoff 1,01 (desde 2016, sem as sextas, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,03R por operação no treino (p 0,315) e +0,18R no teste (p 0,000). |
| **É sorte de parâmetro?** | 6 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,05 a +0,24R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,03 → +0,18R · sem o volume: +0,02 → +0,13R · sem renovar o extremo do dia: +0,07 → +0,10R · 2 velas em vez de 3: +0,01 → +0,12R · 4 velas em vez de 3: +0,04 → +0,20R · volume com média de 20: +0,01 → +0,14R · sem o horário (velas das 9h00 às 17h30): +0,05 → +0,10R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,03 → +0,18R · 25 pts: +0,01 → +0,15R · 30 pts: −0,00 → +0,14R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 2.683 por contrato (começou em abr/2022, recuperada em dez/2023); 12 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 44% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021, 2022.
- **Acerto de ~36%:** a maioria das operações dá stop; sequências de stops são normais.
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
<summary><b>Ficha completa de Vai na Onda</b></summary>

| Medida | Risco dividido | Risco 1% | Risco 2% |
|---|---|---|---|
| Operações | 1.196 | 1.196 | 1.196 |
| Operações por ano | 235 | 235 | 235 |
| Taxa de acerto | 35,4% | 35,4% | 35,4% |
| Payoff (ganho médio ÷ perda média) | 2,14 | 2,14 | 2,14 |
| Expectativa por operação (em R) | 0,103 | 0,103 | 0,103 |
| Fator de lucro | 1,17 | 1,17 | 1,17 |
| Pontos no período | 40.898 | 40.898 | 40.898 |
| Lucro com 1 contrato fixo | R\$ 8.180 | R\$ 8.180 | R\$ 8.180 |
| Capital final | R\$ 287.477 | R\$ 287.477 | R\$ 610.441 |
| Múltiplo do capital | 2,87× | 2,87× | 6,10× |
| Rentabilidade ao ano | +23,1% | +23,1% | +42,8% |
| Pior queda do período | -27,1% | -27,1% | -50,3% |
| Pior queda dentro de um ano | -19,3% | -19,3% | -36,6% |
| Cauda — pior em 1 de 20 anos | -30,4% | -30,4% | -52,7% |
| Maior tempo sem novo topo (dias) | 617 | 617 | 639 |
| Meses positivos | 61% | 61% | 61% |
| Sharpe | 0,97 | 0,97 | 0,96 |
| Sortino | 2,96 | 2,96 | 2,96 |
| Pregões para dobrar o capital | 799 | 799 | 713 |
| Contratos na 1ª operação | 9 | 9 | 18 |
| Maior lote | 36 | 36 | 143 |
| Operações no teto de contratos | 0% | 0% | 0% |

</details>

<!-- FICHA-COMPLETA-FIM -->

---
title: Vai na Onda
date: 2026-11-28
tags: [setup, win]
---

**Três velas seguidas para o mesmo lado, renovando a máxima (ou a mínima) do dia com volume acima da média: entra a favor da onda.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · velas das 9h45 às 16h00

🎬 **Vídeo de origem:** [Arthur 777 – "achei um padrão bizarro no mini índice"](https://youtu.be/5JZC82O-0Nc) · testado de forma independente nos nossos dados em 28/11/2026 · página gerada em 28/11/2026 08:18 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 100.000 aplicados em nov/2021 viraram
> - **R\$ 308.550** arriscando **1% do capital** por operação (+25% ao ano · pior queda −27% · cauda −31%)
> - **R\$ 701.980** arriscando **2% do capital** por operação (+47% ao ano · pior queda −50% · cauda −53%)
>
> - **R\$ 182.943** CDI (sem operar nada) — +13% ao ano, praticamente sem queda
> - **R\$ 197.252** Ibovespa comprado e parado (BOVA11) — +14% ao ano, pior queda −21%
>
> Contratos **inteiros** (mínimo 1, teto de 2000), 15 pts de custo já descontados de cada operação, sem imposto. As duas últimas linhas são as alternativas a operar: o dinheiro parado na renda fixa e comprado no índice.
>
> [Por que o risco por operação é a decisão que mais importa](../entender/suavidade) · [a trilha completa do método](../entender/)

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **19 operações** · acerto 42% · **+0,35R por operação** (no teste 2024 →: +0,18R) · líquido +5.205 pts (R\$ 1.041 por contrato)
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

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 708 pts de stop e 3.541 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 3.441 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** (principal) | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | 35% · 2,07 | +4,7 → +66,8 | +31,7% | −18,7% |
| **como no vídeo (todos os dias)** | stop 400 · alvo 400 pts | 53% · 0,94 | −14,5 → +28,0 | +18,3% | −20,0% |
| **sem as sextas (vídeo)** | stop 400 · alvo 400 pts | 53% · 0,94 | −11,2 → +23,2 | +16,1% | −18,7% |
| **até 17h00** | stop 400 · alvo 400 pts | 53% · 0,94 | −6,6 → +26,6 | +21,0% | −17,0% |
| **alvo 800** | stop 400 · alvo 800 pts | 39% · 1,64 | −10,7 → +33,5 | +19,9% | −20,8% |
| **alvo 2.000** | stop 400 · alvo 2.000 pts | 34% · 2,21 | −0,5 → +60,9 | +30,3% | −17,7% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 556 | 645 | 1.201 |
| Operações por mês | 20,6 | 18,4 | 19,4 |
| Taxa de acerto | 32,9% | 37,7% | 35,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 4% / 62% / 35% | 5% / 56% / 39% | 4% / 59% / 37% |
| Stop típico | 402 pts | 392 pts | 398 pts |
| Ganho médio · perda média | +864 · −417 pts | +916 · −446 pts | +893 · −432 pts |
| Payoff (ganho médio ÷ perda média) | 2,07 | 2,05 | 2,07 |
| Fator de lucro (total ganho ÷ total perdido) | 1,02 | 1,24 | 1,14 |
| Resultado médio por operação | +4,7 pts (+19,7 sem custo) | +66,8 pts (+81,8 sem custo) | +38,1 pts (+53,1 sem custo) |
| **Lucro líquido** | **+2.606 pts · R\$ 521** | **+43.104 pts · R\$ 8.621** | **+45.710 pts · R\$ 9.142** |
| Pior queda (drawdown) | −13.413 pts · −R\$ 2.683 | −10.155 pts · −R\$ 2.031 | −13.413 pts · −R\$ 2.683 |
| Maior sequência de perdas | 11 seguidas | 12 seguidas | 12 seguidas |
| Compras: acerto · lucro | 33% · +861 pts | 38% · +15.084 pts | 36% · +15.946 pts |
| Vendas: acerto · lucro | 33% · +1.744 pts | 37% · +28.020 pts | 35% · +29.764 pts |

### Versão como no vídeo (todos os dias)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 823 | 951 | 1.774 |
| Operações por mês | 30,5 | 27,2 | 28,6 |
| Taxa de acerto | 49,7% | 55,1% | 52,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 47% / 6% | 52% / 41% / 7% | 50% / 44% / 6% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +373 · −397 pts | +372 · −394 pts | +372 · −395 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,93 | 1,16 | 1,04 |
| Resultado médio por operação | −14,5 pts (+0,5 sem custo) | +28,0 pts (+43,0 sem custo) | +8,3 pts (+23,3 sem custo) |
| **Lucro líquido** | **−11.905 pts · −R\$ 2.381** | **+26.650 pts · R\$ 5.330** | **+14.745 pts · R\$ 2.949** |
| Pior queda (drawdown) | −18.155 pts · −R\$ 3.631 | −6.450 pts · −R\$ 1.290 | −18.155 pts · −R\$ 3.631 |
| Maior sequência de perdas | 7 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 50% · −5.730 pts | 59% · +25.110 pts | 55% · +19.380 pts |
| Vendas: acerto · lucro | 50% · −6.175 pts | 52% · +1.540 pts | 51% · −4.635 pts |

### Versão sem as sextas (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 647 | 752 | 1.399 |
| Operações por mês | 24,0 | 21,5 | 22,6 |
| Taxa de acerto | 50,2% | 54,5% | 52,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 46% / 6% | 52% / 42% / 7% | 50% / 44% / 7% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +371 · −397 pts | +371 · −394 pts | +371 · −395 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,94 | 1,13 | 1,04 |
| Resultado médio por operação | −11,2 pts (+3,8 sem custo) | +23,2 pts (+38,2 sem custo) | +7,3 pts (+22,3 sem custo) |
| **Lucro líquido** | **−7.250 pts · −R\$ 1.450** | **+17.440 pts · R\$ 3.488** | **+10.190 pts · R\$ 2.038** |
| Pior queda (drawdown) | −16.900 pts · −R\$ 3.380 | −6.120 pts · −R\$ 1.224 | −16.900 pts · −R\$ 3.380 |
| Maior sequência de perdas | 8 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 51% · −2.420 pts | 59% · +21.520 pts | 55% · +19.100 pts |
| Vendas: acerto · lucro | 50% · −4.830 pts | 50% · −4.080 pts | 50% · −8.910 pts |

### Versão até 17h00

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 883 | 1.003 | 1.886 |
| Operações por mês | 32,7 | 28,7 | 30,4 |
| Taxa de acerto | 50,7% | 55,0% | 53,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 45% / 8% | 51% / 40% / 9% | 49% / 42% / 9% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +367 · −391 pts | +367 · −389 pts | +367 · −390 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,97 | 1,15 | 1,06 |
| Resultado médio por operação | −6,6 pts (+8,4 sem custo) | +26,6 pts (+41,6 sem custo) | +11,1 pts (+26,1 sem custo) |
| **Lucro líquido** | **−5.820 pts · −R\$ 1.164** | **+26.700 pts · R\$ 5.340** | **+20.880 pts · R\$ 4.176** |
| Pior queda (drawdown) | −15.290 pts · −R\$ 3.058 | −7.135 pts · −R\$ 1.427 | −15.290 pts · −R\$ 3.058 |
| Maior sequência de perdas | 7 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 50% · −4.715 pts | 59% · +24.910 pts | 55% · +20.195 pts |
| Vendas: acerto · lucro | 51% · −1.105 pts | 52% · +1.790 pts | 51% · +685 pts |

### Versão alvo 800

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 664 | 788 | 1.452 |
| Operações por mês | 24,6 | 22,5 | 23,4 |
| Taxa de acerto | 37,2% | 40,7% | 39,1% |
| Bateram o alvo / o stop / zeraram no fim do dia | 25% / 58% / 17% | 30% / 54% / 17% | 27% / 56% / 17% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +640 · −396 pts | +653 · −392 pts | +647 · −394 pts |
| Payoff (ganho médio ÷ perda média) | 1,62 | 1,66 | 1,64 |
| Fator de lucro (total ganho ÷ total perdido) | 0,96 | 1,14 | 1,06 |
| Resultado médio por operação | −10,7 pts (+4,3 sem custo) | +33,5 pts (+48,5 sem custo) | +13,3 pts (+28,3 sem custo) |
| **Lucro líquido** | **−7.130 pts · −R\$ 1.426** | **+26.415 pts · R\$ 5.283** | **+19.285 pts · R\$ 3.857** |
| Pior queda (drawdown) | −17.925 pts · −R\$ 3.585 | −7.810 pts · −R\$ 1.562 | −17.925 pts · −R\$ 3.585 |
| Maior sequência de perdas | 11 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 39% · +2.105 pts | 43% · +18.075 pts | 41% · +20.180 pts |
| Vendas: acerto · lucro | 35% · −9.235 pts | 39% · +8.340 pts | 37% · −895 pts |

### Versão alvo 2.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 584 | 668 | 1.252 |
| Operações por mês | 21,6 | 19,1 | 20,2 |
| Taxa de acerto | 31,5% | 35,6% | 33,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 4% / 63% / 33% | 6% / 58% / 36% | 5% / 60% / 35% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +852 · −393 pts | +876 · −390 pts | +866 · −391 pts |
| Payoff (ganho médio ÷ perda média) | 2,17 | 2,24 | 2,21 |
| Fator de lucro (total ganho ÷ total perdido) | 1,00 | 1,24 | 1,12 |
| Resultado médio por operação | −0,5 pts (+14,5 sem custo) | +60,9 pts (+75,9 sem custo) | +32,3 pts (+47,3 sem custo) |
| **Lucro líquido** | **−265 pts · −R\$ 53** | **+40.650 pts · R\$ 8.130** | **+40.385 pts · R\$ 8.077** |
| Pior queda (drawdown) | −14.825 pts · −R\$ 2.965 | −8.635 pts · −R\$ 1.727 | −14.825 pts · −R\$ 2.965 |
| Maior sequência de perdas | 11 seguidas | 16 seguidas | 16 seguidas |
| Compras: acerto · lucro | 33% · +3.345 pts | 36% · +13.400 pts | 34% · +16.745 pts |
| Vendas: acerto · lucro | 31% · −3.610 pts | 35% · +27.250 pts | 33% · +23.640 pts |

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
| **ATR 0,21 / 1,03** | **R\$ 39.829** · +31,7% | −18,7% | 23,5% · 0,77 | 57% · 54% | −9,5% · +27,4% |
| **como no vídeo (todos os dias)** | **R\$ 23.305** · +18,3% | −20,0% | 15,1% · 0,39 | 44% · 56% | −8,6% · +11,4% |
| **sem as sextas (vídeo)** | **R\$ 21.176** · +16,1% | −18,7% | 13,4% · 0,28 | 48% · 49% | −9,9% · +9,7% |
| **até 17h00** | **R\$ 26.074** · +21,0% | −17,0% | 15,5% · 0,53 | 54% · 54% | −7,4% · +13,1% |
| **alvo 800** | **R\$ 24.919** · +19,9% | −20,8% | 18,8% · 0,42 | 49% · 54% | −8,9% · +13,6% |
| **alvo 2.000** | **R\$ 37.728** · +30,3% | −17,7% | 22,0% · 0,76 | 57% · 56% | −12,2% · +25,3% |
| **risco 1%** | **R\$ 57.127** · +41,5% | −19,8% | 25,9% · 1,00 | 64% · 57% | −10,6% · +24,1% |
| **pura** | **R\$ 21.744** · +16,7% | −25,8% | 23,5% · 0,26 | 46% · 49% | −10,3% · +25,8% |
| **CDI** | **R\$ 18.323** · +12,8% | 0,0% | 0,1% · — | — · 44% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 16.729** · +10,8% | −21,5% | 18,8% · −0,00 | 56% · — | −11,5% · +12,6% |

![Quedas](setups/img/vai-na-onda_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** | −3,9% | +5,0% | +26,9% | +62,1% | +22,7% | +56,3% | **+298,3%** (+31,7% · R\$ 39.829) |
| **como no vídeo (todos os dias)** | −5,4% | +1,6% | +2,9% | +30,2% | +39,0% | +30,2% | **+133,1%** (+18,3% · R\$ 23.305) |
| **sem as sextas (vídeo)** | −9,3% | +6,8% | +10,9% | +18,3% | +28,3% | +29,9% | **+111,8%** (+16,1% · R\$ 21.176) |
| **até 17h00** | −4,6% | +2,7% | +13,0% | +29,3% | +38,2% | +31,8% | **+160,7%** (+21,0% · R\$ 26.074) |
| **alvo 800** | −1,3% | −3,7% | +13,6% | +46,0% | +28,2% | +23,4% | **+149,2%** (+19,9% · R\$ 24.919) |
| **alvo 2.000** | −13,8% | +17,1% | +24,3% | +60,5% | +34,8% | +38,9% | **+277,3%** (+30,3% · R\$ 37.728) |
| **risco 1%** | −3,7% | +8,2% | +36,6% | +97,1% | +36,3% | +49,4% | **+471,3%** (+41,5% · R\$ 57.127) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +12,7% | **+83,2%** (+12,8% · R\$ 18.323) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +9,6% | **+67,3%** (+10,8% · R\$ 16.729) |
| *Quem ganhou* | *CDI* | *alvo 2.000* | *risco 1%* | *risco 1%* | *como no vídeo (todos os dias)* | *ATR 0,21 / 1,03* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 27/11/2026.

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
> | nov/2026 | +8,3% | +5,7% | +0,9% | +5,2% |
> | **Acumulado** | **+298,3%** | **+471,3%** | **+83,2%** | **+67,3%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 1,03** | +46% ao ano · queda −41% | +32% ao ano · queda −19% | +23% ao ano · queda −9% | +18% ao ano · queda −4% |
| **como no vídeo (todos os dias)** | +21% ao ano · queda −45% | +18% ao ano · queda −20% | +16% ao ano · queda −7% | +14% ao ano · queda −2% |
| **sem as sextas (vídeo)** | +17% ao ano · queda −42% | +16% ao ano · queda −19% | +15% ao ano · queda −8% | +14% ao ano · queda −3% |
| **até 17h00** | +27% ao ano · queda −39% | +21% ao ano · queda −17% | +17% ao ano · queda −6% | +15% ao ano · queda −2% |
| **alvo 800** | +23% ao ano · queda −47% | +20% ao ano · queda −21% | +17% ao ano · queda −6% | +15% ao ano · queda −2% |
| **alvo 2.000** | +44% ao ano · queda −38% | +30% ao ano · queda −18% | +22% ao ano · queda −8% | +17% ao ano · queda −3% |

*Referência: CDI +13% ao ano · Ibovespa +11% ao ano, pior queda −22%.*

## O que os testes mostraram

*Testes de robustez rodados em 28/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1774 operações, 53% de acerto e fator de lucro 1,13. O vídeo mostra: ~3.078 operações · 54% de acerto · fator de lucro 1,22 · payoff 1,01 (desde 2016, sem as sextas, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,03R por operação no treino (p 0,340) e +0,18R no teste (p 0,001). |
| **É sorte de parâmetro?** | 6 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,05 a +0,24R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,03 → +0,18R · sem o volume: +0,02 → +0,13R · sem renovar o extremo do dia: +0,07 → +0,11R · 2 velas em vez de 3: +0,01 → +0,12R · 4 velas em vez de 3: +0,04 → +0,20R · volume com média de 20: +0,01 → +0,15R · sem o horário (velas das 9h00 às 17h30): +0,05 → +0,12R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,03 → +0,18R · 25 pts: +0,01 → +0,16R · 30 pts: −0,00 → +0,15R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 2.683 por contrato (começou em abr/2022, recuperada em dez/2023); 12 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 43% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021, 2022.
- **Acerto de ~36%:** a maioria das operações dá stop; sequências de stops são normais.
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
<summary><b>Ficha completa de Vai na Onda</b></summary>

| Medida | Risco dividido | Risco 1% | Risco 2% |
|---|---|---|---|
| Operações | 1.201 | 1.201 | 1.201 |
| Operações por ano | 236 | 236 | 236 |
| Taxa de acerto | 35,5% | 35,5% | 35,5% |
| Payoff (ganho médio ÷ perda média) | 2,14 | 2,14 | 2,14 |
| Expectativa por operação (em R) | 0,109 | 0,109 | 0,109 |
| Fator de lucro | 1,18 | 1,18 | 1,18 |
| Pontos no período | 45.710 | 45.710 | 45.710 |
| Lucro com 1 contrato fixo | R\$ 9.142 | R\$ 9.142 | R\$ 9.142 |
| Capital final | R\$ 308.550 | R\$ 308.550 | R\$ 701.980 |
| Múltiplo do capital | 3,09× | 3,09× | 7,02× |
| Rentabilidade ao ano | +24,8% | +24,8% | +46,7% |
| Pior queda do período | -27,1% | -27,1% | -50,3% |
| Pior queda dentro de um ano | -19,3% | -19,3% | -36,6% |
| Cauda — pior em 1 de 20 anos | -30,8% | -30,8% | -53,4% |
| Maior tempo sem novo topo (dias) | 617 | 617 | 639 |
| Meses positivos | 63% | 63% | 63% |
| Sharpe | 1,02 | 1,02 | 1,01 |
| Sortino | 3,13 | 3,13 | 3,13 |
| Pregões para dobrar o capital | 799 | 799 | 713 |
| Contratos na 1ª operação | 9 | 9 | 18 |
| Maior lote | 36 | 36 | 143 |
| Operações no teto de contratos | 0% | 0% | 0% |

</details>

<!-- FICHA-COMPLETA-FIM -->

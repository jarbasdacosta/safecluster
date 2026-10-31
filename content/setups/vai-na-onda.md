---
title: Vai na Onda
date: 2026-10-31
tags: [setup, win]
---

**Três velas seguidas para o mesmo lado, renovando a máxima (ou a mínima) do dia com volume acima da média: entra a favor da onda.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · velas das 9h45 às 16h00

🎬 **Vídeo de origem:** [Arthur 777 – "achei um padrão bizarro no mini índice"](https://youtu.be/5JZC82O-0Nc) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 36.747** na versão ATR 0,21 / 1,03 com o capital no CDI (+30% ao ano · pior queda −19%)
> - **R\$ 23.965** na versão como no vídeo (todos os dias) com o capital no CDI (+19% ao ano · pior queda −20%)
> - **R\$ 21.375** na versão sem as sextas (vídeo) com o capital no CDI (+17% ao ano · pior queda −19%)
> - **R\$ 26.812** na versão até 17h00 com o capital no CDI (+22% ao ano · pior queda −17%)
> - **R\$ 25.552** na versão alvo 800 com o capital no CDI (+21% ao ano · pior queda −21%)
> - **R\$ 36.323** na versão alvo 2.000 com o capital no CDI (+30% ao ano · pior queda −18%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 54.029** na versão ATR 0,21 / 1,03 **arriscando 1% do capital por operação** (+41% ao ano · pior queda −20%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **3 operações** · acerto 67% · **+0,54R por operação** (no teste 2024 →: +0,18R) · líquido +1.434 pts (R\$ 287 por contrato)
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

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 892 pts de stop e 4.460 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** (principal) | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | 35% · 2,05 | +4,7 → +62,5 | +30,1% | −18,7% |
| **como no vídeo (todos os dias)** | stop 400 · alvo 400 pts | 53% · 0,94 | −14,5 → +31,0 | +19,3% | −20,0% |
| **sem as sextas (vídeo)** | stop 400 · alvo 400 pts | 53% · 0,94 | −11,2 → +25,2 | +16,6% | −18,7% |
| **até 17h00** | stop 400 · alvo 400 pts | 53% · 0,94 | −6,6 → +29,4 | +22,0% | −17,0% |
| **alvo 800** | stop 400 · alvo 800 pts | 39% · 1,64 | −10,7 → +36,7 | +20,9% | −20,8% |
| **alvo 2.000** | stop 400 · alvo 2.000 pts | 34% · 2,19 | −0,5 → +60,2 | +29,8% | −17,7% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 556 | 629 | 1.185 |
| Operações por mês | 20,6 | 18,5 | 19,4 |
| Taxa de acerto | 32,9% | 37,7% | 35,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 4% / 62% / 35% | 5% / 56% / 39% | 4% / 59% / 37% |
| Stop típico | 402 pts | 390 pts | 396 pts |
| Ganho médio · perda média | +864 · −417 pts | +895 · −441 pts | +882 · −429 pts |
| Payoff (ganho médio ÷ perda média) | 2,07 | 2,03 | 2,05 |
| Fator de lucro (total ganho ÷ total perdido) | 1,02 | 1,23 | 1,13 |
| Resultado médio por operação | +4,7 pts (+19,7 sem custo) | +62,5 pts (+77,5 sem custo) | +35,4 pts (+50,4 sem custo) |
| **Lucro líquido** | **+2.606 pts · R\$ 521** | **+39.334 pts · R\$ 7.867** | **+41.939 pts · R\$ 8.388** |
| Pior queda (drawdown) | −13.413 pts · −R\$ 2.683 | −10.155 pts · −R\$ 2.031 | −13.413 pts · −R\$ 2.683 |
| Maior sequência de perdas | 11 seguidas | 12 seguidas | 12 seguidas |
| Compras: acerto · lucro | 33% · +861 pts | 38% · +12.572 pts | 36% · +13.434 pts |
| Vendas: acerto · lucro | 33% · +1.744 pts | 37% · +26.761 pts | 35% · +28.506 pts |

### Versão como no vídeo (todos os dias)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 823 | 919 | 1.742 |
| Operações por mês | 30,5 | 27,0 | 28,6 |
| Taxa de acerto | 49,7% | 55,5% | 52,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 47% / 6% | 53% / 41% / 7% | 50% / 44% / 6% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +373 · −397 pts | +372 · −394 pts | +372 · −395 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,93 | 1,18 | 1,05 |
| Resultado médio por operação | −14,5 pts (+0,5 sem custo) | +31,0 pts (+46,0 sem custo) | +9,5 pts (+24,5 sem custo) |
| **Lucro líquido** | **−11.905 pts · −R\$ 2.381** | **+28.455 pts · R\$ 5.691** | **+16.550 pts · R\$ 3.310** |
| Pior queda (drawdown) | −18.155 pts · −R\$ 3.631 | −6.450 pts · −R\$ 1.290 | −18.155 pts · −R\$ 3.631 |
| Maior sequência de perdas | 7 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 50% · −5.730 pts | 59% · +24.365 pts | 55% · +18.635 pts |
| Vendas: acerto · lucro | 50% · −6.175 pts | 52% · +4.090 pts | 51% · −2.085 pts |

### Versão sem as sextas (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 647 | 728 | 1.375 |
| Operações por mês | 24,0 | 21,4 | 22,5 |
| Taxa de acerto | 50,2% | 54,8% | 52,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 46% / 6% | 52% / 41% / 7% | 50% / 44% / 7% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +371 · −397 pts | +371 · −394 pts | +371 · −395 pts |
| Payoff (ganho médio ÷ perda média) | 0,93 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,94 | 1,14 | 1,04 |
| Resultado médio por operação | −11,2 pts (+3,8 sem custo) | +25,2 pts (+40,2 sem custo) | +8,1 pts (+23,1 sem custo) |
| **Lucro líquido** | **−7.250 pts · −R\$ 1.450** | **+18.325 pts · R\$ 3.665** | **+11.075 pts · R\$ 2.215** |
| Pior queda (drawdown) | −16.900 pts · −R\$ 3.380 | −6.120 pts · −R\$ 1.224 | −16.900 pts · −R\$ 3.380 |
| Maior sequência de perdas | 8 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 51% · −2.420 pts | 60% · +20.685 pts | 55% · +18.265 pts |
| Vendas: acerto · lucro | 50% · −4.830 pts | 50% · −2.360 pts | 50% · −7.190 pts |

### Versão até 17h00

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 883 | 971 | 1.854 |
| Operações por mês | 32,7 | 28,6 | 30,4 |
| Taxa de acerto | 50,7% | 55,4% | 53,2% |
| Bateram o alvo / o stop / zeraram no fim do dia | 47% / 45% / 8% | 51% / 40% / 9% | 49% / 42% / 9% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +367 · −391 pts | +366 · −389 pts | +366 · −390 pts |
| Payoff (ganho médio ÷ perda média) | 0,94 | 0,94 | 0,94 |
| Fator de lucro (total ganho ÷ total perdido) | 0,97 | 1,17 | 1,07 |
| Resultado médio por operação | −6,6 pts (+8,4 sem custo) | +29,4 pts (+44,4 sem custo) | +12,2 pts (+27,2 sem custo) |
| **Lucro líquido** | **−5.820 pts · −R\$ 1.164** | **+28.505 pts · R\$ 5.701** | **+22.685 pts · R\$ 4.537** |
| Pior queda (drawdown) | −15.290 pts · −R\$ 3.058 | −7.135 pts · −R\$ 1.427 | −15.290 pts · −R\$ 3.058 |
| Maior sequência de perdas | 7 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 50% · −4.715 pts | 59% · +24.165 pts | 55% · +19.450 pts |
| Vendas: acerto · lucro | 51% · −1.105 pts | 52% · +4.340 pts | 52% · +3.235 pts |

### Versão alvo 800

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 664 | 763 | 1.427 |
| Operações por mês | 24,6 | 22,4 | 23,4 |
| Taxa de acerto | 37,2% | 41,2% | 39,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 25% / 58% / 17% | 30% / 53% / 17% | 27% / 56% / 17% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +640 · −396 pts | +650 · −392 pts | +645 · −394 pts |
| Payoff (ganho médio ÷ perda média) | 1,62 | 1,66 | 1,64 |
| Fator de lucro (total ganho ÷ total perdido) | 0,96 | 1,16 | 1,06 |
| Resultado médio por operação | −10,7 pts (+4,3 sem custo) | +36,7 pts (+51,7 sem custo) | +14,6 pts (+29,6 sem custo) |
| **Lucro líquido** | **−7.130 pts · −R\$ 1.426** | **+28.020 pts · R\$ 5.604** | **+20.890 pts · R\$ 4.178** |
| Pior queda (drawdown) | −17.925 pts · −R\$ 3.585 | −7.810 pts · −R\$ 1.562 | −17.925 pts · −R\$ 3.585 |
| Maior sequência de perdas | 11 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 39% · +2.105 pts | 43% · +17.240 pts | 41% · +19.345 pts |
| Vendas: acerto · lucro | 35% · −9.235 pts | 40% · +10.780 pts | 38% · +1.545 pts |

### Versão alvo 2.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 584 | 648 | 1.232 |
| Operações por mês | 21,6 | 19,1 | 20,2 |
| Taxa de acerto | 31,5% | 36,0% | 33,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 4% / 63% / 33% | 6% / 57% / 37% | 5% / 60% / 35% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +852 · −393 pts | +861 · −390 pts | +857 · −391 pts |
| Payoff (ganho médio ÷ perda média) | 2,17 | 2,21 | 2,19 |
| Fator de lucro (total ganho ÷ total perdido) | 1,00 | 1,24 | 1,12 |
| Resultado médio por operação | −0,5 pts (+14,5 sem custo) | +60,2 pts (+75,2 sem custo) | +31,5 pts (+46,5 sem custo) |
| **Lucro líquido** | **−265 pts · −R\$ 53** | **+39.020 pts · R\$ 7.804** | **+38.755 pts · R\$ 7.751** |
| Pior queda (drawdown) | −14.825 pts · −R\$ 2.965 | −8.635 pts · −R\$ 1.727 | −14.825 pts · −R\$ 2.965 |
| Maior sequência de perdas | 11 seguidas | 16 seguidas | 16 seguidas |
| Compras: acerto · lucro | 33% · +3.345 pts | 36% · +10.850 pts | 34% · +14.195 pts |
| Vendas: acerto · lucro | 31% · −3.610 pts | 36% · +28.170 pts | 33% · +24.560 pts |

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
| **ATR 0,21 / 1,03** | **R\$ 36.747** · +30,1% | −18,7% | 23,4% · 0,73 | 57% · 53% | −9,5% · +27,4% |
| **como no vídeo (todos os dias)** | **R\$ 23.965** · +19,3% | −20,0% | 15,1% · 0,45 | 45% · 57% | −8,6% · +11,4% |
| **sem as sextas (vídeo)** | **R\$ 21.375** · +16,6% | −18,7% | 13,4% · 0,31 | 48% · 50% | −9,9% · +9,7% |
| **até 17h00** | **R\$ 26.812** · +22,0% | −17,0% | 15,5% · 0,59 | 55% · 55% | −7,4% · +13,1% |
| **alvo 800** | **R\$ 25.552** · +20,9% | −20,8% | 18,7% · 0,46 | 50% · 55% | −8,9% · +13,6% |
| **alvo 2.000** | **R\$ 36.323** · +29,8% | −17,7% | 21,8% · 0,75 | 57% · 57% | −12,2% · +25,3% |
| **risco 1%** | **R\$ 54.029** · +40,6% | −19,8% | 25,9% · 0,98 | 63% · 57% | −10,6% · +24,1% |
| **pura** | **R\$ 20.245** · +15,3% | −25,8% | 23,4% · 0,21 | 45% · 48% | −10,3% · +25,8% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/vai-na-onda_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** | −3,9% | +5,0% | +26,9% | +62,1% | +22,7% | +44,2% | **+267,5%** (+30,1% · R\$ 36.747) |
| **como no vídeo (todos os dias)** | −5,4% | +1,6% | +2,9% | +30,2% | +39,0% | +33,8% | **+139,6%** (+19,3% · R\$ 23.965) |
| **sem as sextas (vídeo)** | −9,3% | +6,8% | +10,9% | +18,3% | +28,3% | +31,1% | **+113,8%** (+16,6% · R\$ 21.375) |
| **até 17h00** | −4,6% | +2,7% | +13,0% | +29,3% | +38,2% | +35,5% | **+168,1%** (+22,0% · R\$ 26.812) |
| **alvo 800** | −1,3% | −3,7% | +13,6% | +46,0% | +28,2% | +26,5% | **+155,5%** (+20,9% · R\$ 25.552) |
| **alvo 2.000** | −13,8% | +17,1% | +24,3% | +60,5% | +34,8% | +33,7% | **+263,2%** (+29,8% · R\$ 36.323) |
| **risco 1%** | −3,7% | +8,2% | +36,6% | +97,1% | +36,3% | +41,3% | **+440,3%** (+40,6% · R\$ 54.029) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *CDI* | *alvo 2.000* | *risco 1%* | *risco 1%* | *como no vídeo (todos os dias)* | *ATR 0,21 / 1,03* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

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
> | out/2026 | −6,6% | −4,4% | +1,0% | −9,9% |
> | **Acumulado** | **+267,5%** | **+440,3%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 1,03** | +42% ao ano · queda −41% | +30% ao ano · queda −19% | +22% ao ano · queda −9% | +17% ao ano · queda −4% |
| **como no vídeo (todos os dias)** | +23% ao ano · queda −45% | +19% ao ano · queda −20% | +16% ao ano · queda −7% | +15% ao ano · queda −2% |
| **sem as sextas (vídeo)** | +18% ao ano · queda −42% | +17% ao ano · queda −19% | +15% ao ano · queda −8% | +14% ao ano · queda −3% |
| **até 17h00** | +29% ao ano · queda −39% | +22% ao ano · queda −17% | +18% ao ano · queda −6% | +15% ao ano · queda −2% |
| **alvo 800** | +25% ao ano · queda −47% | +21% ao ano · queda −21% | +17% ao ano · queda −6% | +15% ao ano · queda −2% |
| **alvo 2.000** | +43% ao ano · queda −38% | +30% ao ano · queda −18% | +22% ao ano · queda −8% | +17% ao ano · queda −3% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1742 operações, 53% de acerto e fator de lucro 1,14. O vídeo mostra: ~3.078 operações · 54% de acerto · fator de lucro 1,22 · payoff 1,01 (desde 2016, sem as sextas, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,03R por operação no treino (p 0,191) e +0,18R no teste (p 0,000). |
| **É sorte de parâmetro?** | 6 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,05 a +0,24R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,03 → +0,18R · sem o volume: +0,02 → +0,12R · sem renovar o extremo do dia: +0,07 → +0,11R · 2 velas em vez de 3: +0,01 → +0,12R · 4 velas em vez de 3: +0,04 → +0,20R · volume com média de 20: +0,01 → +0,14R · sem o horário (velas das 9h00 às 17h30): +0,05 → +0,11R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,03 → +0,18R · 25 pts: +0,01 → +0,15R · 30 pts: −0,00 → +0,14R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 2.683 por contrato (começou em abr/2022, recuperada em dez/2023); 12 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 43% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021, 2022.
- **Acerto de ~36%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

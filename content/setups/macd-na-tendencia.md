---
title: MACD na Tendência
date: 2026-10-31
tags: [setup, win]
---

**Dia já forte (longe da abertura e além do extremo de ontem) com o MACD subindo a favor: entra com break even.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · velas das 9h00 às 11h30 e das 14h00 às 16h00

🎬 **Vídeo de origem:** [Arthur 777 – "parecia uma coincidência, mas não era"](https://youtu.be/eHvY4bvS95c) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 37.908** na versão ATR 0,21 / 1,03 com o capital no CDI (+31% ao ano · pior queda −17%)
> - **R\$ 36.840** na versão como no vídeo: pontos fixos, com stop móvel com o capital no CDI (+30% ao ano · pior queda −8%)
> - **R\$ 41.760** na versão distância em ATR, sem stop móvel com o capital no CDI (+33% ao ano · pior queda −11%)
> - **R\$ 30.543** na versão alvo 400 · stop 400 (vídeo), ATR, sem stop móvel com o capital no CDI (+25% ao ano · pior queda −8%)
> - **R\$ 41.765** na versão alvo 2.000 (vídeo), ATR, sem stop móvel com o capital no CDI (+33% ao ano · pior queda −13%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 53.747** na versão ATR 0,21 / 1,03 **arriscando 1% do capital por operação** (+40% ao ano · pior queda −11%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **4 operações** · acerto 25% · **+0,48R por operação** (no teste 2024 →: +0,17R) · líquido +1.603 pts (R\$ 321 por contrato)
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

- **Versão principal (escolhida só pelo treino): ATR 0,21 / 1,03** — stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop); hoje ≈ 892 pts de stop e 4.460 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** (principal) | stop 0,206 ATR · alvo 1,029 ATR (5,0× o stop) | 22% · 4,45 | +22,3 → +59,7 | +30,9% | −16,7% |
| **como no vídeo: pontos fixos, com stop móvel** | stop 400 · alvo 1.500 pts | 30% · 2,91 | +19,3 → +48,3 | +30,1% | −8,2% |
| **distância em ATR, sem stop móvel** | stop 400 · alvo 1.500 pts | 23% · 4,43 | +24,8 → +61,0 | +33,5% | −10,6% |
| **alvo 400 · stop 400 (vídeo), ATR, sem stop móvel** | stop 400 · alvo 400 pts | 44% · 1,47 | +17,0 → +23,8 | +25,3% | −8,4% |
| **alvo 2.000 (vídeo), ATR, sem stop móvel** | stop 400 · alvo 2.000 pts | 22% · 4,75 | +28,5 → +60,7 | +33,5% | −13,1% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,21 / 1,03

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 351 | 547 | 898 |
| Operações por mês | 13,0 | 16,1 | 14,7 |
| Taxa de acerto | 21,4% | 22,5% | 22,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 35% / 20% | 5% / 35% / 19% | 4% / 35% / 20% |
| Stop típico | 394 pts | 384 pts | 389 pts |
| Ganho médio · perda média | +869 · −208 pts | +1.077 · −235 pts | +998 · −225 pts |
| Payoff (ganho médio ÷ perda média) | 4,18 | 4,58 | 4,45 |
| Fator de lucro (total ganho ÷ total perdido) | 1,14 | 1,33 | 1,26 |
| Resultado médio por operação | +22,3 pts (+37,3 sem custo) | +59,7 pts (+74,7 sem custo) | +45,1 pts (+60,1 sem custo) |
| **Lucro líquido** | **+7.832 pts · R\$ 1.566** | **+32.653 pts · R\$ 6.531** | **+40.484 pts · R\$ 8.097** |
| Pior queda (drawdown) | −5.855 pts · −R\$ 1.171 | −9.799 pts · −R\$ 1.960 | −9.799 pts · −R\$ 1.960 |
| Maior sequência de perdas | 16 seguidas | 17 seguidas | 17 seguidas |
| Compras: acerto · lucro | 26% · +6.493 pts | 24% · +17.155 pts | 25% · +23.648 pts |
| Vendas: acerto · lucro | 17% · +1.339 pts | 21% · +15.497 pts | 19% · +16.837 pts |

### Versão como no vídeo: pontos fixos, com stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 376 | 626 | 1.002 |
| Operações por mês | 13,9 | 18,4 | 16,4 |
| Taxa de acerto | 30,9% | 29,2% | 29,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 37% / 7% | 6% / 36% / 6% | 5% / 36% / 7% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +578 · −230 pts | +702 · −222 pts | +654 · −225 pts |
| Payoff (ganho médio ÷ perda média) | 2,51 | 3,17 | 2,91 |
| Fator de lucro (total ganho ÷ total perdido) | 1,12 | 1,31 | 1,24 |
| Resultado médio por operação | +19,3 pts (+34,3 sem custo) | +48,3 pts (+63,3 sem custo) | +37,4 pts (+52,4 sem custo) |
| **Lucro líquido** | **+7.245 pts · R\$ 1.449** | **+30.245 pts · R\$ 6.049** | **+37.490 pts · R\$ 7.498** |
| Pior queda (drawdown) | −3.630 pts · −R\$ 726 | −5.200 pts · −R\$ 1.040 | −5.200 pts · −R\$ 1.040 |
| Maior sequência de perdas | 14 seguidas | 18 seguidas | 18 seguidas |
| Compras: acerto · lucro | 34% · +4.640 pts | 32% · +25.945 pts | 33% · +30.585 pts |
| Vendas: acerto · lucro | 28% · +2.605 pts | 27% · +4.300 pts | 27% · +6.905 pts |

### Versão distância em ATR, sem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 355 | 590 | 945 |
| Operações por mês | 13,1 | 17,4 | 15,5 |
| Taxa de acerto | 21,7% | 23,2% | 22,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 35% / 18% | 10% / 38% / 14% | 8% / 37% / 16% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +822 · −196 pts | +968 · −213 pts | +916 · −207 pts |
| Payoff (ganho médio ÷ perda média) | 4,19 | 4,54 | 4,43 |
| Fator de lucro (total ganho ÷ total perdido) | 1,16 | 1,37 | 1,30 |
| Resultado médio por operação | +24,8 pts (+39,8 sem custo) | +61,0 pts (+76,0 sem custo) | +47,4 pts (+62,4 sem custo) |
| **Lucro líquido** | **+8.810 pts · R\$ 1.762** | **+35.970 pts · R\$ 7.194** | **+44.780 pts · R\$ 8.956** |
| Pior queda (drawdown) | −4.020 pts · −R\$ 804 | −6.840 pts · −R\$ 1.368 | −6.840 pts · −R\$ 1.368 |
| Maior sequência de perdas | 18 seguidas | 23 seguidas | 23 seguidas |
| Compras: acerto · lucro | 26% · +7.150 pts | 25% · +27.895 pts | 25% · +35.045 pts |
| Vendas: acerto · lucro | 17% · +1.660 pts | 22% · +8.075 pts | 20% · +9.735 pts |

### Versão alvo 400 · stop 400 (vídeo), ATR, sem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 496 | 810 | 1.306 |
| Operações por mês | 18,4 | 23,8 | 21,4 |
| Taxa de acerto | 42,5% | 44,8% | 44,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 40% / 32% / 4% | 43% / 33% / 4% | 42% / 33% / 4% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +371 · −245 pts | +374 · −260 pts | +373 · −254 pts |
| Payoff (ganho médio ÷ perda média) | 1,51 | 1,44 | 1,47 |
| Fator de lucro (total ganho ÷ total perdido) | 1,12 | 1,17 | 1,15 |
| Resultado médio por operação | +17,0 pts (+32,0 sem custo) | +23,8 pts (+38,8 sem custo) | +21,2 pts (+36,2 sem custo) |
| **Lucro líquido** | **+8.435 pts · R\$ 1.687** | **+19.310 pts · R\$ 3.862** | **+27.745 pts · R\$ 5.549** |
| Pior queda (drawdown) | −4.810 pts · −R\$ 962 | −5.475 pts · −R\$ 1.095 | −5.475 pts · −R\$ 1.095 |
| Maior sequência de perdas | 9 seguidas | 11 seguidas | 11 seguidas |
| Compras: acerto · lucro | 44% · +4.850 pts | 47% · +15.820 pts | 46% · +20.670 pts |
| Vendas: acerto · lucro | 41% · +3.585 pts | 43% · +3.490 pts | 42% · +7.075 pts |

### Versão alvo 2.000 (vídeo), ATR, sem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 351 | 577 | 928 |
| Operações por mês | 13,0 | 17,0 | 15,2 |
| Taxa de acerto | 21,1% | 21,8% | 21,6% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 34% / 20% | 6% / 37% / 17% | 5% / 36% / 18% |
| Stop típico | 400 pts | 400 pts | 400 pts |
| Ganho médio · perda média | +856 · −192 pts | +1.026 · −209 pts | +963 · −203 pts |
| Payoff (ganho médio ÷ perda média) | 4,45 | 4,91 | 4,75 |
| Fator de lucro (total ganho ÷ total perdido) | 1,19 | 1,37 | 1,31 |
| Resultado médio por operação | +28,5 pts (+43,5 sem custo) | +60,7 pts (+75,7 sem custo) | +48,5 pts (+63,5 sem custo) |
| **Lucro líquido** | **+10.020 pts · R\$ 2.004** | **+35.015 pts · R\$ 7.003** | **+45.035 pts · R\$ 9.007** |
| Pior queda (drawdown) | −3.870 pts · −R\$ 774 | −8.450 pts · −R\$ 1.690 | −8.450 pts · −R\$ 1.690 |
| Maior sequência de perdas | 20 seguidas | 25 seguidas | 25 seguidas |
| Compras: acerto · lucro | 25% · +7.390 pts | 24% · +27.725 pts | 24% · +35.115 pts |
| Vendas: acerto · lucro | 17% · +2.630 pts | 20% · +7.290 pts | 19% · +9.920 pts |

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
| **ATR 0,21 / 1,03** | **R\$ 37.908** · +30,9% | −16,7% | 17,3% · 0,94 | 63% · 55% | −7,1% · +13,1% |
| **como no vídeo: pontos fixos, com stop móvel** | **R\$ 36.840** · +30,1% | −8,2% | 14,3% · 1,07 | 57% · 57% | −3,1% · +13,6% |
| **distância em ATR, sem stop móvel** | **R\$ 41.760** · +33,5% | −10,6% | 16,0% · 1,13 | 67% · 58% | −4,8% · +13,8% |
| **alvo 400 · stop 400 (vídeo), ATR, sem stop móvel** | **R\$ 30.543** · +25,3% | −8,4% | 11,8% · 0,95 | 65% · 58% | −5,2% · +11,2% |
| **alvo 2.000 (vídeo), ATR, sem stop móvel** | **R\$ 41.765** · +33,5% | −13,1% | 16,6% · 1,10 | 70% · 60% | −6,8% · +13,9% |
| **risco 1%** | **R\$ 53.747** · +40,4% | −10,5% | 18,8% · 1,26 | 65% · 60% | −5,3% · +15,3% |
| **pura** | **R\$ 20.886** · +16,0% | −18,2% | 17,3% · 0,25 | 50% · 50% | −8,1% · +11,8% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/macd-na-tendencia_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,21 / 1,03** | −2,9% | +20,7% | +25,7% | +36,6% | +40,1% | +34,5% | **+279,1%** (+30,9% · R\$ 37.908) |
| **como no vídeo: pontos fixos, com stop móvel** | +2,9% | +13,4% | +26,5% | +18,1% | +56,6% | +35,0% | **+268,4%** (+30,1% · R\$ 36.840) |
| **distância em ATR, sem stop móvel** | −1,0% | +17,4% | +29,6% | +37,3% | +47,4% | +37,1% | **+317,6%** (+33,5% · R\$ 41.760) |
| **alvo 400 · stop 400 (vídeo), ATR, sem stop móvel** | +0,6% | +22,0% | +22,6% | +23,4% | +29,1% | +27,4% | **+205,4%** (+25,3% · R\$ 30.543) |
| **alvo 2.000 (vídeo), ATR, sem stop móvel** | −3,1% | +23,9% | +28,3% | +35,8% | +48,9% | +34,2% | **+317,7%** (+33,5% · R\$ 41.765) |
| **risco 1%** | −2,8% | +27,8% | +30,3% | +51,6% | +60,7% | +36,3% | **+437,5%** (+40,4% · R\$ 53.747) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *como no vídeo: pontos fixos, com stop móvel* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *distância em ATR, sem stop móvel* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

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
> | out/2026 | −2,5% | −0,6% | +1,0% | −9,9% |
> | **Acumulado** | **+279,1%** | **+437,5%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,21 / 1,03** | +48% ao ano · queda −33% | +31% ao ano · queda −17% | +22% ao ano · queda −8% | +17% ao ano · queda −3% |
| **como no vídeo: pontos fixos, com stop móvel** | +47% ao ano · queda −17% | +30% ao ano · queda −8% | +21% ao ano · queda −4% | +17% ao ano · queda −2% |
| **distância em ATR, sem stop móvel** | +54% ao ano · queda −22% | +33% ao ano · queda −11% | +23% ao ano · queda −5% | +18% ao ano · queda −2% |
| **alvo 400 · stop 400 (vídeo), ATR, sem stop móvel** | +37% ao ano · queda −17% | +25% ao ano · queda −8% | +19% ao ano · queda −4% | +16% ao ano · queda −1% |
| **alvo 2.000 (vídeo), ATR, sem stop móvel** | +54% ao ano · queda −26% | +33% ao ano · queda −13% | +23% ao ano · queda −6% | +18% ao ano · queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1002 operações, 30% de acerto e fator de lucro 1,36. O vídeo mostra: 1.329 operações · 30% de acerto · fator de lucro 1,40 · payoff 1,92 (desde 2021, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,08R por operação no treino (p 0,143) e +0,17R no teste (p 0,000). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,06 a +0,17R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,08 → +0,17R · sem o MACD: +0,08 → +0,10R · MACD linha em vez do histograma: +0,08 → +0,14R · sem 'MACD subindo': +0,07 → +0,15R · sem a máxima/mínima do dia anterior: +0,02 → +0,07R · sem a distância da abertura: +0,08 → +0,08R · sem o horário (velas das 9h00 às 17h00): +0,06 → +0,12R · sem break even: +0,03 → +0,15R · COM stop móvel (como no vídeo): +0,05 → +0,12R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,08 → +0,17R · 25 pts: +0,05 → +0,15R · 30 pts: +0,04 → +0,14R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,21 / 1,03 foi de −R\$ 1.960 por contrato (começou em set/2026, ainda não recuperada); 17 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,21 / 1,03 + CDI ficou abaixo do CDI em 37% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021.
- **Acerto de ~22%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

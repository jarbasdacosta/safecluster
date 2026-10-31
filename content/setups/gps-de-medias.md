---
title: GPS de Médias
date: 2026-10-31
tags: [setup, win]
---

**Quando as oito médias curtas estão enfileiradas e o preço rompe a banda de Bollinger, entra a favor com stop curto e alvo seis vezes maior.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · 10h–11h e 14h–16h

🎬 **Vídeo de origem:** [Arthur 777 – "criei um GPS BRUTAL de médias"](https://youtu.be/g0FJNSNubW8) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 46.242** na versão ATR 0,10 / 1,29 com o capital no CDI (+36% ao ano · pior queda −15%)
> - **R\$ 30.667** na versão como no vídeo (alvo 1.800) com o capital no CDI (+25% ao ano · pior queda −11%)
> - **R\$ 23.290** na versão alvo 1.000 com o capital no CDI (+19% ao ano · pior queda −12%)
> - **R\$ 35.049** na versão alvo 2.500, stop 200 com o capital no CDI (+29% ao ano · pior queda −14%)
> - **R\$ 34.267** na versão com break even a 300 pts com o capital no CDI (+28% ao ano · pior queda −9%)
> - **R\$ 20.415** na versão o dia todo (9h–17h) com o capital no CDI (+16% ao ano · pior queda −21%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 126.024** na versão ATR 0,10 / 1,29 **arriscando 1% do capital por operação** (+67% ao ano · pior queda −23%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **4 operações** · acerto 50% · **+2,41R por operação** (no teste 2024 →: +0,18R) · líquido +4.246 pts (R\$ 849 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/gps-de-medias_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Rompimento** | a vela fecha **acima da banda superior** (Bollinger 20, desvio 2) | fecha **abaixo da banda inferior** |
| **2. Nuvem** | a vela fecha **acima** das médias exponenciais de 3 a 10 | fecha **abaixo** de todas elas |
| **3. Alinhamento** | as médias estão em ordem: **3 > 4 > 5 > … > 10** | em ordem inversa: **3 < 4 < … < 10** |
| **4. Horário** | só das **10h às 11h** e das **14h às 16h** | igual |
| **Entrada** | **a mercado** na abertura da vela seguinte | igual |
| **Alvo · stop** | 1.800 · 300 pts no vídeo → em ATR aqui | igual |

- **Versão principal (escolhida só pelo treino): ATR 0,10 / 1,29** — stop 0,103 ATR · alvo 1,286 ATR (12,5× o stop); hoje ≈ 446 pts de stop e 5.576 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,10 / 1,29** (principal) | stop 0,103 ATR · alvo 1,286 ATR (12,5× o stop) | 23% · 4,15 | +53,7 → +33,3 | +36,2% | −15,3% |
| **como no vídeo (alvo 1.800)** | stop 300 · alvo 1.800 pts | 29% · 2,74 | +31,7 → +22,5 | +25,4% | −11,1% |
| **alvo 1.000** | stop 300 · alvo 1.000 pts | 31% · 2,32 | +15,8 → +10,5 | +18,6% | −12,0% |
| **alvo 2.500, stop 200** | stop 200 · alvo 2.500 pts | 22% · 4,19 | +44,2 → +17,8 | +28,8% | −13,6% |
| **com break even a 300 pts** | stop 300 · alvo 1.800 pts | 24% · 3,75 | +26,9 → +32,9 | +28,2% | −8,7% |
| **o dia todo (9h–17h)** | stop 300 · alvo 1.800 pts | 27% · 2,83 | +12,7 → +2,1 | +15,5% | −20,8% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,10 / 1,29

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 512 | 714 | 1.226 |
| Operações por mês | 19,0 | 21,0 | 20,1 |
| Taxa de acerto | 23,2% | 22,8% | 23,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 74% / 24% | 1% / 76% / 23% | 1% / 75% / 23% |
| Stop típico | 197 pts | 190 pts | 194 pts |
| Ganho médio · perda média | +944 · −216 pts | +934 · −233 pts | +938 · −226 pts |
| Payoff (ganho médio ÷ perda média) | 4,37 | 4,01 | 4,15 |
| Fator de lucro (total ganho ÷ total perdido) | 1,32 | 1,19 | 1,24 |
| Resultado médio por operação | +53,7 pts (+68,7 sem custo) | +33,3 pts (+48,3 sem custo) | +41,8 pts (+56,8 sem custo) |
| **Lucro líquido** | **+27.498 pts · R\$ 5.500** | **+23.784 pts · R\$ 4.757** | **+51.282 pts · R\$ 10.256** |
| Pior queda (drawdown) | −5.843 pts · −R\$ 1.169 | −8.974 pts · −R\$ 1.795 | −8.974 pts · −R\$ 1.795 |
| Maior sequência de perdas | 16 seguidas | 19 seguidas | 19 seguidas |
| Compras: acerto · lucro | 25% · +16.290 pts | 23% · +14.056 pts | 24% · +30.346 pts |
| Vendas: acerto · lucro | 21% · +11.208 pts | 22% · +9.728 pts | 22% · +20.936 pts |

### Versão como no vídeo (alvo 1.800)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 488 | 674 | 1.162 |
| Operações por mês | 18,1 | 19,8 | 19,0 |
| Taxa de acerto | 28,5% | 29,4% | 29,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 68% / 27% | 6% / 68% / 26% | 6% / 68% / 27% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +878 · −306 pts | +813 · −306 pts | +840 · −306 pts |
| Payoff (ganho médio ÷ perda média) | 2,87 | 2,65 | 2,74 |
| Fator de lucro (total ganho ÷ total perdido) | 1,14 | 1,10 | 1,12 |
| Resultado médio por operação | +31,7 pts (+46,7 sem custo) | +22,5 pts (+37,5 sem custo) | +26,4 pts (+41,4 sem custo) |
| **Lucro líquido** | **+15.450 pts · R\$ 3.090** | **+15.170 pts · R\$ 3.034** | **+30.620 pts · R\$ 6.124** |
| Pior queda (drawdown) | −8.085 pts · −R\$ 1.617 | −6.195 pts · −R\$ 1.239 | −8.085 pts · −R\$ 1.617 |
| Maior sequência de perdas | 14 seguidas | 18 seguidas | 18 seguidas |
| Compras: acerto · lucro | 31% · +11.835 pts | 33% · +18.395 pts | 32% · +30.230 pts |
| Vendas: acerto · lucro | 26% · +3.615 pts | 26% · −3.225 pts | 26% · +390 pts |

### Versão alvo 1.000

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 515 | 724 | 1.239 |
| Operações por mês | 19,1 | 21,3 | 20,3 |
| Taxa de acerto | 31,3% | 31,5% | 31,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 17% / 66% / 17% | 18% / 66% / 16% | 18% / 66% / 16% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +723 · −306 pts | +700 · −306 pts | +709 · −306 pts |
| Payoff (ganho médio ÷ perda média) | 2,36 | 2,28 | 2,32 |
| Fator de lucro (total ganho ÷ total perdido) | 1,08 | 1,05 | 1,06 |
| Resultado médio por operação | +15,8 pts (+30,8 sem custo) | +10,5 pts (+25,5 sem custo) | +12,7 pts (+27,7 sem custo) |
| **Lucro líquido** | **+8.140 pts · R\$ 1.628** | **+7.600 pts · R\$ 1.520** | **+15.740 pts · R\$ 3.148** |
| Pior queda (drawdown) | −8.590 pts · −R\$ 1.718 | −9.040 pts · −R\$ 1.808 | −9.040 pts · −R\$ 1.808 |
| Maior sequência de perdas | 14 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 34% · +10.215 pts | 36% · +15.510 pts | 35% · +25.725 pts |
| Vendas: acerto · lucro | 28% · −2.075 pts | 28% · −7.910 pts | 28% · −9.985 pts |

### Versão alvo 2.500, stop 200

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 533 | 741 | 1.274 |
| Operações por mês | 19,7 | 21,8 | 20,9 |
| Taxa de acerto | 22,0% | 21,9% | 21,9% |
| Bateram o alvo / o stop / zeraram no fim do dia | 2% / 76% / 23% | 2% / 77% / 21% | 2% / 77% / 22% |
| Stop típico | 200 pts | 200 pts | 200 pts |
| Ganho médio · perda média | +949 · −210 pts | +844 · −213 pts | +888 · −212 pts |
| Payoff (ganho médio ÷ perda média) | 4,51 | 3,96 | 4,19 |
| Fator de lucro (total ganho ÷ total perdido) | 1,27 | 1,11 | 1,17 |
| Resultado médio por operação | +44,2 pts (+59,2 sem custo) | +17,8 pts (+32,8 sem custo) | +28,9 pts (+43,9 sem custo) |
| **Lucro líquido** | **+23.545 pts · R\$ 4.709** | **+13.215 pts · R\$ 2.643** | **+36.760 pts · R\$ 7.352** |
| Pior queda (drawdown) | −5.950 pts · −R\$ 1.190 | −8.550 pts · −R\$ 1.710 | −8.550 pts · −R\$ 1.710 |
| Maior sequência de perdas | 25 seguidas | 18 seguidas | 25 seguidas |
| Compras: acerto · lucro | 24% · +13.465 pts | 23% · +8.815 pts | 23% · +22.280 pts |
| Vendas: acerto · lucro | 20% · +10.080 pts | 21% · +4.400 pts | 21% · +14.480 pts |

### Versão com break even a 300 pts

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 493 | 681 | 1.174 |
| Operações por mês | 18,3 | 20,0 | 19,2 |
| Taxa de acerto | 23,3% | 23,9% | 23,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 59% / 20% | 5% / 56% / 21% | 5% / 57% / 21% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +933 · −249 pts | +899 · −239 pts | +913 · −243 pts |
| Payoff (ganho médio ÷ perda média) | 3,75 | 3,75 | 3,75 |
| Fator de lucro (total ganho ÷ total perdido) | 1,14 | 1,18 | 1,16 |
| Resultado médio por operação | +26,9 pts (+41,9 sem custo) | +32,9 pts (+47,9 sem custo) | +30,4 pts (+45,4 sem custo) |
| **Lucro líquido** | **+13.280 pts · R\$ 2.656** | **+22.435 pts · R\$ 4.487** | **+35.715 pts · R\$ 7.143** |
| Pior queda (drawdown) | −5.745 pts · −R\$ 1.149 | −5.395 pts · −R\$ 1.079 | −5.745 pts · −R\$ 1.149 |
| Maior sequência de perdas | 14 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 25% · +10.580 pts | 26% · +21.060 pts | 26% · +31.640 pts |
| Vendas: acerto · lucro | 22% · +2.700 pts | 22% · +1.375 pts | 22% · +4.075 pts |

### Versão o dia todo (9h–17h)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 930 | 1.302 | 2.232 |
| Operações por mês | 34,4 | 38,3 | 36,6 |
| Taxa de acerto | 28,3% | 25,5% | 26,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 5% / 68% / 27% | 6% / 71% / 22% | 6% / 70% / 24% |
| Stop típico | 300 pts | 300 pts | 300 pts |
| Ganho médio · perda média | +822 · −307 pts | +901 · −306 pts | +866 · −306 pts |
| Payoff (ganho médio ÷ perda média) | 2,68 | 2,95 | 2,83 |
| Fator de lucro (total ganho ÷ total perdido) | 1,06 | 1,01 | 1,03 |
| Resultado médio por operação | +12,7 pts (+27,7 sem custo) | +2,1 pts (+17,1 sem custo) | +6,5 pts (+21,5 sem custo) |
| **Lucro líquido** | **+11.785 pts · R\$ 2.357** | **+2.715 pts · R\$ 543** | **+14.500 pts · R\$ 2.900** |
| Pior queda (drawdown) | −12.130 pts · −R\$ 2.426 | −13.885 pts · −R\$ 2.777 | −13.885 pts · −R\$ 2.777 |
| Maior sequência de perdas | 17 seguidas | 19 seguidas | 19 seguidas |
| Compras: acerto · lucro | 30% · +12.590 pts | 28% · +19.895 pts | 29% · +32.485 pts |
| Vendas: acerto · lucro | 26% · −805 pts | 23% · −17.180 pts | 24% · −17.985 pts |

![Pontos acumulados com 1 contrato](setups/img/gps-de-medias_pontos.png)

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
| **ATR 0,10 / 1,29** | **R\$ 46.242** · +36,2% | −15,3% | 19,3% · 1,07 | 65% · 58% | −6,9% · +12,6% |
| **como no vídeo (alvo 1.800)** | **R\$ 30.667** · +25,4% | −11,1% | 19,0% · 0,65 | 57% · 48% | −6,4% · +12,1% |
| **alvo 1.000** | **R\$ 23.290** · +18,6% | −12,0% | 16,4% · 0,39 | 52% · 47% | −4,1% · +12,0% |
| **alvo 2.500, stop 200** | **R\$ 35.049** · +28,8% | −13,6% | 17,8% · 0,83 | 55% · 53% | −4,8% · +10,8% |
| **com break even a 300 pts** | **R\$ 34.267** · +28,2% | −8,7% | 18,0% · 0,80 | 60% · 60% | −3,8% · +10,4% |
| **o dia todo (9h–17h)** | **R\$ 20.415** · +15,5% | −20,8% | 26,6% · 0,22 | 48% · 43% | −9,4% · +17,3% |
| **risco 1%** | **R\$ 126.024** · +66,8% | −23,3% | 40,9% · 1,15 | 65% · 63% | −11,4% · +26,2% |
| **pura** | **R\$ 25.480** · +20,8% | −16,5% | 19,3% · 0,45 | 57% · 50% | −7,9% · +11,3% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/gps-de-medias_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,10 / 1,29** | −0,6% | +40,1% | +54,4% | +22,4% | +15,5% | +52,2% | **+362,4%** (+36,2% · R\$ 46.242) |
| **como no vídeo (alvo 1.800)** | −3,0% | +22,6% | +41,9% | +17,5% | +21,1% | +27,7% | **+206,7%** (+25,4% · R\$ 30.667) |
| **alvo 1.000** | +0,3% | +7,3% | +36,8% | +15,2% | +29,6% | +6,1% | **+132,9%** (+18,6% · R\$ 23.290) |
| **alvo 2.500, stop 200** | −5,0% | +33,7% | +56,5% | +16,5% | +16,2% | +30,3% | **+250,5%** (+28,8% · R\$ 35.049) |
| **com break even a 300 pts** | −1,3% | +29,9% | +26,4% | +24,5% | +32,3% | +28,4% | **+242,7%** (+28,2% · R\$ 34.267) |
| **o dia todo (9h–17h)** | −12,1% | +17,0% | +48,0% | +14,2% | +2,3% | +14,7% | **+104,1%** (+15,5% · R\$ 20.415) |
| **risco 1%** | −4,2% | +68,9% | +118,4% | +46,2% | +29,3% | +88,6% | **+1160,2%** (+66,8% · R\$ 126.024) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *CDI* | *risco 1%* | *risco 1%* | *risco 1%* | *Ibovespa* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/gps-de-medias_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,10 / 1,29 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +2,2% | +3,3% | +0,6% | −3,4% |
> | dez/2021 | −2,7% | −7,3% | +0,7% | +2,9% |
> | jan/2022 | +2,6% | +5,4% | +0,7% | +7,0% |
> | fev/2022 | −0,6% | −2,6% | +0,8% | +0,9% |
> | mar/2022 | +6,2% | +13,1% | +0,9% | +6,1% |
> | abr/2022 | +3,7% | +7,6% | +0,8% | −10,1% |
> | mai/2022 | +3,2% | +5,6% | +1,0% | +3,2% |
> | jun/2022 | −0,9% | −4,8% | +1,0% | −11,5% |
> | jul/2022 | −3,6% | −9,6% | +1,0% | +4,7% |
> | ago/2022 | +11,2% | +26,2% | +1,2% | +6,2% |
> | set/2022 | −3,1% | −7,2% | +1,1% | +0,5% |
> | out/2022 | +3,2% | +5,4% | +1,0% | +5,5% |
> | nov/2022 | +8,1% | +11,0% | +1,0% | −3,1% |
> | dez/2022 | +5,5% | +8,7% | +1,1% | −2,4% |
> | jan/2023 | +7,4% | +13,7% | +1,1% | +3,4% |
> | fev/2023 | +9,3% | +19,3% | +0,9% | −7,5% |
> | mar/2023 | +5,8% | +11,8% | +1,2% | −2,9% |
> | abr/2023 | +3,7% | +7,4% | +0,9% | +2,5% |
> | mai/2023 | +5,4% | +11,6% | +1,1% | +3,7% |
> | jun/2023 | −1,4% | −5,4% | +1,1% | +9,0% |
> | jul/2023 | +4,9% | +10,1% | +1,1% | +3,3% |
> | ago/2023 | +5,5% | +12,5% | +1,1% | −5,1% |
> | set/2023 | −3,3% | −10,1% | +1,0% | +0,7% |
> | out/2023 | +3,2% | +6,4% | +1,0% | −2,9% |
> | nov/2023 | +3,4% | +5,5% | +0,9% | +12,5% |
> | dez/2023 | +1,0% | +1,6% | +0,9% | +5,4% |
> | jan/2024 | +0,5% | −0,4% | +1,0% | −4,8% |
> | fev/2024 | +6,9% | +17,8% | +0,8% | +1,0% |
> | mar/2024 | +3,1% | +8,1% | +0,8% | −0,7% |
> | abr/2024 | +6,2% | +16,6% | +0,9% | −1,7% |
> | mai/2024 | −2,8% | −9,4% | +0,8% | −3,0% |
> | jun/2024 | +1,2% | +1,9% | +0,8% | +1,5% |
> | jul/2024 | −1,1% | −2,9% | +0,9% | +3,0% |
> | ago/2024 | +5,7% | +14,7% | +0,9% | +6,5% |
> | set/2024 | +3,6% | +8,8% | +0,8% | −3,1% |
> | out/2024 | −1,6% | −6,3% | +0,9% | −1,6% |
> | nov/2024 | +0,3% | −1,7% | +0,8% | −3,1% |
> | dez/2024 | −1,2% | −4,1% | +0,8% | −4,3% |
> | jan/2025 | +2,3% | +5,8% | +1,0% | +4,9% |
> | fev/2025 | −1,5% | −5,1% | +1,0% | −2,6% |
> | mar/2025 | +6,4% | +13,6% | +1,0% | +6,1% |
> | abr/2025 | −6,9% | −11,4% | +1,1% | +3,7% |
> | mai/2025 | +6,7% | +15,8% | +1,1% | +1,5% |
> | jun/2025 | +1,5% | +2,8% | +1,1% | +1,3% |
> | jul/2025 | +4,5% | +9,3% | +1,3% | −4,2% |
> | ago/2025 | +4,7% | +8,7% | +1,2% | +6,3% |
> | set/2025 | −1,7% | −5,4% | +1,2% | +3,4% |
> | out/2025 | −0,1% | −2,3% | +1,3% | +2,3% |
> | nov/2025 | +2,6% | +4,4% | +1,1% | +6,4% |
> | dez/2025 | −2,9% | −6,1% | +1,1% | +1,3% |
> | jan/2026 | +12,6% | +25,2% | +1,2% | +12,6% |
> | fev/2026 | +0,5% | −0,3% | +1,0% | +4,1% |
> | mar/2026 | −1,9% | −2,7% | +1,2% | −0,7% |
> | abr/2026 | +8,9% | +11,5% | +1,1% | −0,1% |
> | mai/2026 | +5,6% | +8,1% | +1,1% | −7,2% |
> | jun/2026 | +0,3% | +0,1% | +1,1% | −1,0% |
> | jul/2026 | +12,2% | +21,1% | +1,2% | +3,5% |
> | ago/2026 | +1,1% | +1,2% | +1,1% | −0,3% |
> | set/2026 | +1,8% | +3,2% | +1,1% | +5,0% |
> | out/2026 | +2,9% | +1,7% | +1,0% | −9,9% |
> | **Acumulado** | **+362,4%** | **+1160,2%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,10 / 1,29** | +59% ao ano · queda −29% | +36% ao ano · queda −15% | +25% ao ano · queda −7% | +19% ao ano · queda −3% |
| **como no vídeo (alvo 1.800)** | +35% ao ano · queda −25% | +25% ao ano · queda −11% | +19% ao ano · queda −5% | +16% ao ano · queda −2% |
| **alvo 1.000** | +22% ao ano · queda −28% | +19% ao ano · queda −12% | +16% ao ano · queda −5% | +15% ao ano · queda −2% |
| **alvo 2.500, stop 200** | +43% ao ano · queda −28% | +29% ao ano · queda −14% | +21% ao ano · queda −6% | +17% ao ano · queda −2% |
| **com break even a 300 pts** | +41% ao ano · queda −19% | +28% ao ano · queda −9% | +21% ao ano · queda −4% | +17% ao ano · queda −2% |
| **o dia todo (9h–17h)** | +10% ao ano · queda −43% | +16% ao ano · queda −21% | +15% ao ano · queda −9% | +14% ao ano · queda −4% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1162 operações, 29% de acerto e fator de lucro 1,20. O vídeo mostra: 2.374 operações · 27% de acerto · payoff 3,48 (desde 2015, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,25R por operação no treino (p 0,005) e +0,18R no teste (p 0,007). |
| **É sorte de parâmetro?** | 9 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (−0,02 a +0,25R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,25 → +0,18R · sem exigir o alinhamento das médias: +0,25 → +0,17R · sem exigir estar acima da nuvem: +0,25 → +0,18R · sem a Bollinger (só a nuvem): −0,03 → +0,01R · o dia todo (9h–17h): +0,11 → +0,05R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,25 → +0,18R · 25 pts: +0,20 → +0,12R · 30 pts: +0,17 → +0,10R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,10 / 1,29 foi de −R\$ 1.795 por contrato (começou em set/2026, ainda não recuperada); 19 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,10 / 1,29 + CDI ficou abaixo do CDI em 35% dos meses. O resultado aparece no ano.
- **Stop curto** (~194 pts): o custo e o escorregão pesam mais — veja "E se o custo for maior?".
- **Anos negativos:** 2021.
- **As compras carregam o setup:** compras +0,29R × vendas +0,13R por operação.
- **Acerto de ~23%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

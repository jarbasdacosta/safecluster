---
title: IFR de Tendência
date: 2026-10-31
tags: [setup, win]
---

**Entra quando o IFR mostra força nos horários de tendência do dia (10h–11h e 14h–16h): vela a favor com o IFR acima de 70 ou abaixo de 30, stop curto e alvo longo.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · velas das 10h00 às 11h00 e das 14h00 às 16h00

🎬 **Vídeo de origem:** [Arthur 777 – "só precisei de 1 indicador no mini índice"](https://youtu.be/sswleA6JTvY) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 58.699** na versão manhã + tarde com o capital no CDI (+43% ao ano · pior queda −7%)
> - **R\$ 38.857** na versão só a tarde com o capital no CDI (+32% ao ano · pior queda −4%)
> - **R\$ 43.810** na versão como no vídeo com o capital no CDI (+35% ao ano · pior queda −8%)
> - **R\$ 50.404** na versão ATR 0,12 / 0,58 com o capital no CDI (+39% ao ano · pior queda −7%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 129.415** na versão manhã + tarde **arriscando 1% do capital por operação** (+68% ao ano · pior queda −11%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **4 operações** · acerto 25% · **+0,46R por operação** (no teste 2024 →: +0,33R) · líquido +658 pts (R\$ 132 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/ifr-de-tendencia_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Horário** | a vela começa entre 10h00 e 11h00 **ou** entre 14h00 e 16h00 | igual |
| **2. Vela a favor** | a vela é **positiva** (fecha acima da abertura) | a vela é **negativa** (fecha abaixo da abertura) |
| **3. IFR(14)** | o IFR está **acima de 70** | o IFR está **abaixo de 30** |
| **Entrada** | compra **a mercado** na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop** | **0,20%** abaixo da entrada (≈ 341 pts hoje) | 0,20% acima da entrada |
| **Alvo** | **1%** acima da entrada (≈ 1.703 pts hoje) | 1% abaixo da entrada |
| **Fim do dia** | se não bateu stop nem alvo, zera às 18h20 | igual |

- **Versão principal (escolhida só pelo treino): manhã + tarde** — stop 0,20% · alvo 1,00% do preço; hoje ≈ 341 pts de stop e 1.703 pts de alvo.
- **IFR (Índice de Força Relativa)** mede se as últimas 14 velas subiram muito mais do que caíram (acima de 70) ou caíram muito mais do que subiram (abaixo de 30). Aqui ele é usado a favor da força, não para vender "caro" ou comprar "barato".
- **Sem nenhuma outra condição:** o tamanho da vela e as sombras não importam.
- **Uma operação de cada vez.**
- **A tarde é a parte mais forte:** sozinha, a janela das 14h às 16h acerta perto de metade das operações (veja a versão "só a tarde").
- **De onde veio:** stop e alvo já são em % do preço no vídeo (em ATR o resultado ficou igual, e o treino escolheu manter em %). O vídeo zera às 17h15; zerando às 18h20, como os outros setups, o resultado foi melhor no treino (testado em 26/10/2026).
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **manhã + tarde** (principal) | stop 0,20% · alvo 1,00% do preço | 33% · 2,97 | +55,7 → +99,5 | +43,0% | −7,5% |
| **só a tarde** | stop 0,20% · alvo 1,00% do preço | 47% · 2,24 | +136,3 → +142,1 | +31,5% | −4,3% |
| **como no vídeo** | stop 0,20% · alvo 1,00% do preço | 33% · 2,73 | +32,4 → +83,4 | +34,8% | −8,0% |
| **ATR 0,12 / 0,58** | stop 0,115 ATR · alvo 0,576 ATR (5,0× o stop) | 30% · 3,14 | +57,6 → +73,8 | +38,6% | −7,5% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão manhã + tarde

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 351 | 421 | 772 |
| Operações por mês | 13,0 | 12,4 | 12,7 |
| Taxa de acerto | 30,2% | 34,4% | 32,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 14% / 69% / 17% | 12% / 63% / 25% | 13% / 66% / 21% |
| Stop típico | 222 pts | 279 pts | 252 pts |
| Ganho médio · perda média | +730 · −236 pts | +878 · −309 pts | +815 · −275 pts |
| Payoff (ganho médio ÷ perda média) | 3,09 | 2,84 | 2,97 |
| Fator de lucro (total ganho ÷ total perdido) | 1,34 | 1,49 | 1,43 |
| Resultado médio por operação | +55,7 pts (+70,7 sem custo) | +99,5 pts (+114,5 sem custo) | +79,6 pts (+94,6 sem custo) |
| **Lucro líquido** | **+19.548 pts · R\$ 3.910** | **+41.876 pts · R\$ 8.375** | **+61.424 pts · R\$ 12.285** |
| Pior queda (drawdown) | −2.919 pts · −R\$ 584 | −5.382 pts · −R\$ 1.076 | −5.382 pts · −R\$ 1.076 |
| Maior sequência de perdas | 12 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 35% · +16.551 pts | 36% · +30.030 pts | 35% · +46.581 pts |
| Vendas: acerto · lucro | 26% · +2.997 pts | 33% · +11.846 pts | 30% · +14.842 pts |

### Versão só a tarde

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 127 | 152 | 279 |
| Operações por mês | 4,7 | 4,5 | 4,6 |
| Taxa de acerto | 46,5% | 48,0% | 47,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 11% / 51% / 38% | 7% / 46% / 47% | 9% / 48% / 43% |
| Stop típico | 223 pts | 274 pts | 251 pts |
| Ganho médio · perda média | +559 · −230 pts | +607 · −288 pts | +586 · −261 pts |
| Payoff (ganho médio ÷ perda média) | 2,43 | 2,11 | 2,24 |
| Fator de lucro (total ganho ÷ total perdido) | 2,10 | 1,95 | 2,01 |
| Resultado médio por operação | +136,3 pts (+151,3 sem custo) | +142,1 pts (+157,1 sem custo) | +139,4 pts (+154,4 sem custo) |
| **Lucro líquido** | **+17.309 pts · R\$ 3.462** | **+21.593 pts · R\$ 4.319** | **+38.902 pts · R\$ 7.780** |
| Pior queda (drawdown) | −1.335 pts · −R\$ 267 | −3.103 pts · −R\$ 621 | −3.103 pts · −R\$ 621 |
| Maior sequência de perdas | 6 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 55% · +13.767 pts | 45% · +10.200 pts | 50% · +23.967 pts |
| Vendas: acerto · lucro | 38% · +3.541 pts | 51% · +11.394 pts | 45% · +14.935 pts |

### Versão como no vídeo

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 351 | 421 | 772 |
| Operações por mês | 13,0 | 12,4 | 12,7 |
| Taxa de acerto | 29,6% | 35,4% | 32,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 13% / 68% / 19% | 10% / 60% / 30% | 11% / 63% / 25% |
| Stop típico | 222 pts | 279 pts | 252 pts |
| Ganho médio · perda média | +662 · −233 pts | +791 · −305 pts | +738 · −270 pts |
| Payoff (ganho médio ÷ perda média) | 2,84 | 2,60 | 2,73 |
| Fator de lucro (total ganho ÷ total perdido) | 1,20 | 1,42 | 1,33 |
| Resultado médio por operação | +32,4 pts (+47,4 sem custo) | +83,4 pts (+98,4 sem custo) | +60,2 pts (+75,2 sem custo) |
| **Lucro líquido** | **+11.371 pts · R\$ 2.274** | **+35.095 pts · R\$ 7.019** | **+46.466 pts · R\$ 9.293** |
| Pior queda (drawdown) | −3.071 pts · −R\$ 614 | −5.957 pts · −R\$ 1.191 | −5.957 pts · −R\$ 1.191 |
| Maior sequência de perdas | 10 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 34% · +10.457 pts | 37% · +26.961 pts | 36% · +37.418 pts |
| Vendas: acerto · lucro | 26% · +914 pts | 33% · +8.135 pts | 30% · +9.048 pts |

### Versão ATR 0,12 / 0,58

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 330 | 470 | 800 |
| Operações por mês | 12,2 | 13,8 | 13,1 |
| Taxa de acerto | 30,3% | 30,6% | 30,5% |
| Bateram o alvo / o stop / zeraram no fim do dia | 14% / 69% / 18% | 16% / 67% / 17% | 15% / 68% / 18% |
| Stop típico | 223 pts | 218 pts | 220 pts |
| Ganho médio · perda média | +751 · −244 pts | +836 · −263 pts | +801 · −255 pts |
| Payoff (ganho médio ÷ perda média) | 3,08 | 3,18 | 3,14 |
| Fator de lucro (total ganho ÷ total perdido) | 1,34 | 1,40 | 1,38 |
| Resultado médio por operação | +57,6 pts (+72,6 sem custo) | +73,8 pts (+88,8 sem custo) | +67,1 pts (+82,1 sem custo) |
| **Lucro líquido** | **+19.001 pts · R\$ 3.800** | **+34.702 pts · R\$ 6.940** | **+53.703 pts · R\$ 10.741** |
| Pior queda (drawdown) | −3.014 pts · −R\$ 603 | −5.100 pts · −R\$ 1.020 | −5.100 pts · −R\$ 1.020 |
| Maior sequência de perdas | 12 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 34% · +17.686 pts | 33% · +25.405 pts | 34% · +43.091 pts |
| Vendas: acerto · lucro | 26% · +1.315 pts | 28% · +9.297 pts | 27% · +10.612 pts |

![Pontos acumulados com 1 contrato](setups/img/ifr-de-tendencia_pontos.png)

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
| **manhã + tarde** | **R\$ 58.699** · +43,0% | −7,5% | 15,5% · 1,60 | 72% · 60% | −3,5% · +14,6% |
| **só a tarde** | **R\$ 38.857** · +31,5% | −4,3% | 8,2% · 1,91 | 68% · 55% | −2,6% · +8,0% |
| **como no vídeo** | **R\$ 43.810** · +34,8% | −8,0% | 14,7% · 1,28 | 63% · 60% | −3,5% · +14,4% |
| **ATR 0,12 / 0,58** | **R\$ 50.404** · +38,6% | −7,5% | 14,6% · 1,48 | 63% · 60% | −2,6% · +15,0% |
| **risco 1%** | **R\$ 129.415** · +67,7% | −11,2% | 27,0% · 1,60 | 68% · 65% | −6,4% · +24,8% |
| **pura** | **R\$ 32.349** · +26,8% | −8,5% | 15,5% · 0,83 | 52% · 53% | −4,7% · +13,3% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/ifr-de-tendencia_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **manhã + tarde** | −3,6% | +51,5% | +28,3% | +30,7% | +55,3% | +54,3% | **+487,0%** (+43,0% · R\$ 58.699) |
| **só a tarde** | −1,4% | +41,0% | +29,9% | +25,4% | +25,3% | +36,9% | **+288,6%** (+31,5% · R\$ 38.857) |
| **como no vídeo** | −3,6% | +37,9% | +20,0% | +21,3% | +54,0% | +47,0% | **+338,1%** (+34,8% · R\$ 43.810) |
| **ATR 0,12 / 0,58** | −0,3% | +51,8% | +22,1% | +27,1% | +39,9% | +53,4% | **+404,0%** (+38,6% · R\$ 50.404) |
| **risco 1%** | −9,3% | +108,3% | +45,0% | +48,1% | +88,9% | +69,0% | **+1194,2%** (+67,7% · R\$ 129.415) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *CDI* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/ifr-de-tendencia_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | manhã + tarde | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | −1,9% | −4,8% | +0,6% | −3,4% |
> | dez/2021 | −1,8% | −4,7% | +0,7% | +2,9% |
> | jan/2022 | +6,4% | +13,6% | +0,7% | +7,0% |
> | fev/2022 | −2,6% | −6,1% | +0,8% | +0,9% |
> | mar/2022 | +7,8% | +15,7% | +0,9% | +6,1% |
> | abr/2022 | +0,6% | +0,6% | +0,8% | −10,1% |
> | mai/2022 | +2,0% | +2,9% | +1,0% | +3,2% |
> | jun/2022 | +3,5% | +6,8% | +1,0% | −11,5% |
> | jul/2022 | +1,0% | +0,9% | +1,0% | +4,7% |
> | ago/2022 | +11,5% | +23,5% | +1,2% | +6,2% |
> | set/2022 | −1,2% | −3,9% | +1,1% | +0,5% |
> | out/2022 | +6,2% | +11,0% | +1,0% | +5,5% |
> | nov/2022 | +1,7% | +2,2% | +1,0% | −3,1% |
> | dez/2022 | +6,2% | +12,3% | +1,1% | −2,4% |
> | jan/2023 | +2,0% | +2,8% | +1,1% | +3,4% |
> | fev/2023 | +1,4% | +1,8% | +0,9% | −7,5% |
> | mar/2023 | +0,4% | −0,6% | +1,2% | −2,9% |
> | abr/2023 | +2,2% | +3,3% | +0,9% | +2,5% |
> | mai/2023 | +0,7% | +0,5% | +1,1% | +3,7% |
> | jun/2023 | +1,3% | +1,6% | +1,1% | +9,0% |
> | jul/2023 | +5,9% | +10,5% | +1,1% | +3,3% |
> | ago/2023 | +5,1% | +9,0% | +1,1% | −5,1% |
> | set/2023 | +0,1% | −0,7% | +1,0% | +0,7% |
> | out/2023 | +3,6% | +6,3% | +1,0% | −2,9% |
> | nov/2023 | +2,1% | +3,5% | +0,9% | +12,5% |
> | dez/2023 | +0,6% | +0,4% | +0,9% | +5,4% |
> | jan/2024 | −0,9% | −2,3% | +1,0% | −4,8% |
> | fev/2024 | +5,8% | +9,8% | +0,8% | +1,0% |
> | mar/2024 | +1,5% | +2,0% | +0,8% | −0,7% |
> | abr/2024 | +5,1% | +8,5% | +0,9% | −1,7% |
> | mai/2024 | −1,4% | −3,2% | +0,8% | −3,0% |
> | jun/2024 | +1,3% | +1,7% | +0,8% | +1,5% |
> | jul/2024 | +3,6% | +5,8% | +0,9% | +3,0% |
> | ago/2024 | +2,1% | +2,8% | +0,9% | +6,5% |
> | set/2024 | +2,2% | +3,1% | +0,8% | −3,1% |
> | out/2024 | +1,4% | +1,7% | +0,9% | −1,6% |
> | nov/2024 | +4,5% | +7,4% | +0,8% | −3,1% |
> | dez/2024 | +2,2% | +3,5% | +0,8% | −4,3% |
> | jan/2025 | +5,3% | +9,1% | +1,0% | +4,9% |
> | fev/2025 | +6,0% | +10,1% | +1,0% | −2,6% |
> | mar/2025 | −0,4% | −1,4% | +1,0% | +6,1% |
> | abr/2025 | +0,1% | −0,8% | +1,1% | +3,7% |
> | mai/2025 | +6,8% | +10,9% | +1,1% | +1,5% |
> | jun/2025 | +2,3% | +3,0% | +1,1% | +1,3% |
> | jul/2025 | +0,9% | +0,4% | +1,3% | −4,2% |
> | ago/2025 | +14,6% | +24,8% | +1,2% | +6,3% |
> | set/2025 | −3,5% | −6,4% | +1,2% | +3,4% |
> | out/2025 | +2,1% | +2,6% | +1,3% | +2,3% |
> | nov/2025 | +5,9% | +8,4% | +1,1% | +6,4% |
> | dez/2025 | +5,7% | +7,8% | +1,1% | +1,3% |
> | jan/2026 | +4,8% | +6,2% | +1,2% | +12,6% |
> | fev/2026 | +1,6% | +1,8% | +1,0% | +4,1% |
> | mar/2026 | +1,2% | +1,1% | +1,2% | −0,7% |
> | abr/2026 | +7,0% | +8,5% | +1,1% | −0,1% |
> | mai/2026 | +5,1% | +6,1% | +1,1% | −7,2% |
> | jun/2026 | −2,6% | −4,0% | +1,1% | −1,0% |
> | jul/2026 | +8,9% | +11,7% | +1,2% | +3,5% |
> | ago/2026 | +5,8% | +7,6% | +1,1% | −0,3% |
> | set/2026 | −0,6% | −1,1% | +1,1% | +5,0% |
> | out/2026 | +14,0% | +17,6% | +1,0% | −9,9% |
> | **Acumulado** | **+487,0%** | **+1194,2%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **manhã + tarde** | +77% ao ano · queda −15% | +43% ao ano · queda −7% | +27% ao ano · queda −3% | +20% ao ano · queda −1% |
| **só a tarde** | +52% ao ano · queda −10% | +32% ao ano · queda −4% | +22% ao ano · queda −1% | +17% ao ano · queda −0% |
| **como no vídeo** | +58% ao ano · queda −17% | +35% ao ano · queda −8% | +24% ao ano · queda −3% | +18% ao ano · queda −1% |
| **ATR 0,12 / 0,58** | +67% ao ano · queda −15% | +39% ao ano · queda −7% | +25% ao ano · queda −3% | +19% ao ano · queda −1% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 772 operações, 33% de acerto e fator de lucro 1,54. O vídeo mostra: 826 operações · 33% de acerto · payoff 2,90 (sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,25R por operação no treino (p 0,007) e +0,33R no teste (p 0,000). |
| **É sorte de parâmetro?** | 9 de 9 combinações de stop × alvo deram lucro no treino **e** no teste (+0,13 a +0,47R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,25 → +0,33R · sem o IFR (só a cor da vela): +0,02 → +0,03R · sem a cor da vela (só o IFR): +0,21 → +0,25R · sem o horário (velas das 9h15 às 16h45): +0,14 → +0,14R · níveis 80/20: +0,41 → +0,41R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu manter como no vídeo. |
| **E se o custo for maior?** | 15 pts: +0,25 → +0,33R · 25 pts: +0,21 → +0,29R · 30 pts: +0,18 → +0,27R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão manhã + tarde foi de −R\$ 1.076 por contrato (começou em mai/2026, recuperada em jul/2026); 15 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão manhã + tarde + CDI ficou abaixo do CDI em 28% dos meses. O resultado aparece no ano.
- **Anos negativos:** 2021.
- **As compras carregam o setup:** compras +0,45R × vendas +0,13R por operação.
- **Acerto de ~33%:** a maioria das operações dá stop; sequências de stops são normais.
- **As compras carregam o setup:** +0,45R por operação contra +0,13R nas vendas. Num mercado de queda longa, o resultado pode ser menor.
- **Acerto de ~33%:** dois terços das operações dão stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

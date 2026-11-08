---
title: Pullback no 50% do dia
date: 2026-11-07
tags: [setup, win]
---

**Na primeira hora e meia, se o dia já subiu bem e a vela corrige até a metade do range do dia e fecha positiva acima das médias, entra a favor da tendência com stop móvel.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · das 10h às 11h30

🎬 **Vídeo de origem:** [usei a retração de fibo e achei um padrão bizarro](https://youtu.be/krHN5ziozlA) · testado de forma independente nos nossos dados em 07/11/2026 · página gerada em 07/11/2026 21:52 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 26.956** na versão ATR 0,57 / 1,29 com o capital no CDI (+22% ao ano · pior queda −13%)
> - **R\$ 27.464** na versão como no vídeo: pontos fixos com o capital no CDI (+23% ao ano · pior queda −11%)
> - **R\$ 27.673** na versão distância da abertura em ATR com o capital no CDI (+23% ao ano · pior queda −12%)
> - **R\$ 27.310** na versão sem stop móvel (só break even) com o capital no CDI (+22% ao ano · pior queda −15%)
> - **R\$ 23.378** na versão sem break even nem stop móvel com o capital no CDI (+19% ao ano · pior queda −18%)
> - **R\$ 28.379** na versão stop 1.100 (variação do vídeo) com o capital no CDI (+23% ao ano · pior queda −13%)
> - **R\$ 18.193** só no CDI (+13% ao ano)
> - **R\$ 15.964** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 21.677** na versão ATR 0,57 / 1,29 **arriscando 1% do capital por operação** (+17% ao ano · pior queda −3%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **1 operações** · acerto 100% · **+1,41R por operação** (no teste 2024 →: +0,07R) · líquido +3.360 pts (R\$ 672 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/fibo-50-do-dia_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Médias** | fechamento **acima** das médias de **5** e de **200** | fechamento **abaixo** das duas |
| **2. Retração** | a vela **toca a linha de 50%** do range do dia e **fecha acima** dela | toca a linha e **fecha abaixo** dela |
| **3. Cor da vela** | vela **positiva** | vela **negativa** |
| **4. Força do dia** | fechamento pelo menos **700 pts acima** da abertura do dia (em ATR aqui) | pelo menos **700 pts abaixo** |
| **5. Horário** | só as velas das **10h às 11h30** | igual |
| **Entrada** | **a mercado** na abertura da vela seguinte | igual |
| **Alvo · stop** | 2.500 · 1.500 pts no vídeo → em ATR aqui | igual |
| **Break even · stop móvel** | **300 pts** de lucro trazem o stop para a entrada; de **1.000 pts** em diante o stop segue a mínima de cada vela | igual, pela máxima |

- **Versão principal (escolhida só pelo treino): ATR 0,57 / 1,29** — stop 0,566 ATR · alvo 1,286 ATR (2,3× o stop); hoje ≈ 2.378 pts de stop e 5.404 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.201 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,57 / 1,29** (principal) | stop 0,566 ATR · alvo 1,286 ATR (2,3× o stop) | 42% · 1,87 | +154,0 → +57,4 | +22,1% | −12,6% |
| **como no vídeo: pontos fixos** | stop 1.500 · alvo 2.500 pts | 41% · 1,90 | +74,8 → +100,0 | +22,6% | −10,5% |
| **distância da abertura em ATR** | stop 1.500 · alvo 2.500 pts | 43% · 1,85 | +117,5 → +88,6 | +22,7% | −11,6% |
| **sem stop móvel (só break even)** | stop 1.500 · alvo 2.500 pts | 39% · 2,16 | +139,6 → +71,2 | +22,4% | −15,0% |
| **sem break even nem stop móvel** | stop 1.500 · alvo 2.500 pts | 54% · 1,01 | +107,0 → +38,6 | +18,6% | −18,3% |
| **stop 1.100 (variação do vídeo)** | stop 1.100 · alvo 2.500 pts | 42% · 1,91 | +115,2 → +96,9 | +23,4% | −12,9% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,57 / 1,29

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 138 | 226 |
| Operações por mês | 3,3 | 3,9 | 3,6 |
| Taxa de acerto | 47,7% | 38,4% | 42,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 0% / 16% / 33% | 0% / 17% / 28% | 0% / 16% / 30% |
| Stop típico | 1.075 pts | 1.079 pts | 1.075 pts |
| Ganho médio · perda média | +745 · −386 pts | +961 · −506 pts | +865 · −464 pts |
| Payoff (ganho médio ÷ perda média) | 1,93 | 1,90 | 1,87 |
| Fator de lucro (total ganho ÷ total perdido) | 1,76 | 1,18 | 1,35 |
| Resultado médio por operação | +154,0 pts (+169,0 sem custo) | +57,4 pts (+72,4 sem custo) | +95,0 pts (+110,0 sem custo) |
| **Lucro líquido** | **+13.554 pts · R\$ 2.711** | **+7.926 pts · R\$ 1.585** | **+21.480 pts · R\$ 4.296** |
| Pior queda (drawdown) | −4.567 pts · −R\$ 913 | −8.608 pts · −R\$ 1.722 | −8.608 pts · −R\$ 1.722 |
| Maior sequência de perdas | 6 seguidas | 6 seguidas | 6 seguidas |
| Compras: acerto · lucro | 53% · +6.997 pts | 45% · +7.474 pts | 48% · +14.471 pts |
| Vendas: acerto · lucro | 41% · +6.557 pts | 31% · +452 pts | 35% · +7.009 pts |

### Versão como no vídeo: pontos fixos

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 99 | 152 | 251 |
| Operações por mês | 3,7 | 4,3 | 4,0 |
| Taxa de acerto | 41,4% | 40,8% | 41,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 10% / 36% | 3% / 15% / 28% | 2% / 13% / 31% |
| Stop típico | 1.500 pts | 1.500 pts | 1.500 pts |
| Ganho médio · perda média | +768 · −415 pts | +983 · −508 pts | +897 · −472 pts |
| Payoff (ganho médio ÷ perda média) | 1,85 | 1,93 | 1,90 |
| Fator de lucro (total ganho ÷ total perdido) | 1,31 | 1,33 | 1,32 |
| Resultado médio por operação | +74,8 pts (+89,8 sem custo) | +100,0 pts (+115,0 sem custo) | +90,0 pts (+105,0 sem custo) |
| **Lucro líquido** | **+7.405 pts · R\$ 1.481** | **+15.195 pts · R\$ 3.039** | **+22.600 pts · R\$ 4.520** |
| Pior queda (drawdown) | −4.885 pts · −R\$ 977 | −7.730 pts · −R\$ 1.546 | −7.730 pts · −R\$ 1.546 |
| Maior sequência de perdas | 6 seguidas | 9 seguidas | 9 seguidas |
| Compras: acerto · lucro | 49% · +5.140 pts | 49% · +13.115 pts | 49% · +18.255 pts |
| Vendas: acerto · lucro | 32% · +2.265 pts | 32% · +2.080 pts | 32% · +4.345 pts |

### Versão distância da abertura em ATR

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 139 | 227 |
| Operações por mês | 3,3 | 4,0 | 3,7 |
| Taxa de acerto | 44,3% | 41,7% | 42,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 7% / 39% | 2% / 14% / 31% | 2% / 11% / 34% |
| Stop típico | 1.500 pts | 1.500 pts | 1.500 pts |
| Ganho médio · perda média | +736 · −375 pts | +932 · −515 pts | +853 · −462 pts |
| Payoff (ganho médio ÷ perda média) | 1,96 | 1,81 | 1,85 |
| Fator de lucro (total ganho ÷ total perdido) | 1,56 | 1,30 | 1,38 |
| Resultado médio por operação | +117,5 pts (+132,5 sem custo) | +88,6 pts (+103,6 sem custo) | +99,8 pts (+114,8 sem custo) |
| **Lucro líquido** | **+10.340 pts · R\$ 2.068** | **+12.315 pts · R\$ 2.463** | **+22.655 pts · R\$ 4.531** |
| Pior queda (drawdown) | −4.560 pts · −R\$ 912 | −7.960 pts · −R\$ 1.592 | −7.960 pts · −R\$ 1.592 |
| Maior sequência de perdas | 6 seguidas | 9 seguidas | 9 seguidas |
| Compras: acerto · lucro | 49% · +5.415 pts | 48% · +8.980 pts | 48% · +14.395 pts |
| Vendas: acerto · lucro | 38% · +4.925 pts | 35% · +3.335 pts | 36% · +8.260 pts |

### Versão sem stop móvel (só break even)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 139 | 227 |
| Operações por mês | 3,3 | 4,0 | 3,7 |
| Taxa de acerto | 39,8% | 38,1% | 38,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 7% / 52% | 4% / 14% / 49% | 4% / 11% / 50% |
| Stop típico | 1.500 pts | 1.500 pts | 1.500 pts |
| Ganho médio · perda média | +877 · −347 pts | +975 · −486 pts | +936 · −433 pts |
| Payoff (ganho médio ÷ perda média) | 2,52 | 2,01 | 2,16 |
| Fator de lucro (total ganho ÷ total perdido) | 1,67 | 1,24 | 1,37 |
| Resultado médio por operação | +139,6 pts (+154,6 sem custo) | +71,2 pts (+86,2 sem custo) | +97,7 pts (+112,7 sem custo) |
| **Lucro líquido** | **+12.285 pts · R\$ 2.457** | **+9.890 pts · R\$ 1.978** | **+22.175 pts · R\$ 4.435** |
| Pior queda (drawdown) | −4.560 pts · −R\$ 912 | −10.730 pts · −R\$ 2.146 | −10.730 pts · −R\$ 2.146 |
| Maior sequência de perdas | 7 seguidas | 9 seguidas | 9 seguidas |
| Compras: acerto · lucro | 45% · +6.255 pts | 41% · +4.525 pts | 43% · +10.780 pts |
| Vendas: acerto · lucro | 33% · +6.030 pts | 35% · +5.365 pts | 34% · +11.395 pts |

### Versão sem break even nem stop móvel

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 139 | 227 |
| Operações por mês | 3,3 | 4,0 | 3,7 |
| Taxa de acerto | 59,1% | 50,4% | 53,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 3% / 11% / 85% | 4% / 16% / 81% | 4% / 14% / 82% |
| Stop típico | 1.500 pts | 1.500 pts | 1.500 pts |
| Ganho médio · perda média | +759 · −834 pts | +863 · −798 pts | +819 · −810 pts |
| Payoff (ganho médio ÷ perda média) | 0,91 | 1,08 | 1,01 |
| Fator de lucro (total ganho ÷ total perdido) | 1,31 | 1,10 | 1,17 |
| Resultado médio por operação | +107,0 pts (+122,0 sem custo) | +38,6 pts (+53,6 sem custo) | +65,1 pts (+80,1 sem custo) |
| **Lucro líquido** | **+9.415 pts · R\$ 1.883** | **+5.370 pts · R\$ 1.074** | **+14.785 pts · R\$ 2.957** |
| Pior queda (drawdown) | −8.305 pts · −R\$ 1.661 | −12.130 pts · −R\$ 2.426 | −12.130 pts · −R\$ 2.426 |
| Maior sequência de perdas | 5 seguidas | 5 seguidas | 5 seguidas |
| Compras: acerto · lucro | 61% · +6.160 pts | 55% · +2.730 pts | 57% · +8.890 pts |
| Vendas: acerto · lucro | 56% · +3.255 pts | 45% · +2.640 pts | 50% · +5.895 pts |

### Versão stop 1.100 (variação do vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 88 | 141 | 229 |
| Operações por mês | 3,3 | 4,0 | 3,7 |
| Taxa de acerto | 44,3% | 41,1% | 42,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 1% / 17% / 28% | 2% / 21% / 26% | 2% / 20% / 27% |
| Stop típico | 1.100 pts | 1.100 pts | 1.100 pts |
| Ganho médio · perda média | +736 · −379 pts | +932 · −486 pts | +853 · −446 pts |
| Payoff (ganho médio ÷ perda média) | 1,94 | 1,92 | 1,91 |
| Fator de lucro (total ganho ÷ total perdido) | 1,55 | 1,34 | 1,40 |
| Resultado médio por operação | +115,2 pts (+130,2 sem custo) | +96,9 pts (+111,9 sem custo) | +104,0 pts (+119,0 sem custo) |
| **Lucro líquido** | **+10.140 pts · R\$ 2.028** | **+13.665 pts · R\$ 2.733** | **+23.805 pts · R\$ 4.761** |
| Pior queda (drawdown) | −3.920 pts · −R\$ 784 | −8.560 pts · −R\$ 1.712 | −8.560 pts · −R\$ 1.712 |
| Maior sequência de perdas | 6 seguidas | 10 seguidas | 10 seguidas |
| Compras: acerto · lucro | 49% · +4.885 pts | 48% · +13.365 pts | 48% · +18.250 pts |
| Vendas: acerto · lucro | 38% · +5.255 pts | 34% · +300 pts | 36% · +5.555 pts |

![Pontos acumulados com 1 contrato](setups/img/fibo-50-do-dia_pontos.png)

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
| **ATR 0,57 / 1,29** | **R\$ 26.956** · +22,1% | −12,6% | 12,1% · 0,71 | 54% · 56% | −7,9% · +9,7% |
| **como no vídeo: pontos fixos** | **R\$ 27.464** · +22,6% | −10,5% | 12,7% · 0,72 | 56% · 51% | −7,9% · +7,5% |
| **distância da abertura em ATR** | **R\$ 27.673** · +22,7% | −11,6% | 11,6% · 0,79 | 57% · 51% | −7,9% · +10,3% |
| **sem stop móvel (só break even)** | **R\$ 27.310** · +22,4% | −15,0% | 12,3% · 0,73 | 49% · 48% | −7,9% · +11,4% |
| **sem break even nem stop móvel** | **R\$ 23.378** · +18,6% | −18,3% | 13,5% · 0,44 | 56% · 51% | −10,7% · +11,4% |
| **stop 1.100 (variação do vídeo)** | **R\$ 28.379** · +23,4% | −12,9% | 11,2% · 0,85 | 56% · 51% | −5,6% · +10,3% |
| **risco 1%** | **R\$ 21.677** · +16,8% | −3,3% | 4,5% · 0,80 | 54% · 46% | −2,9% · +4,8% |
| **pura** | **R\$ 14.819** · +8,2% | −16,6% | 12,1% · −0,28 | 49% · 44% | −8,8% · +8,6% |
| **CDI** | **R\$ 18.193** · +12,8% | +0,0% | 0,1% · — | — · 44% | +0,2% · +1,3% |
| **Ibovespa** | **R\$ 15.964** · +9,9% | −20,9% | 18,6% · −0,05 | 56% · — | −11,5% · +12,6% |

![Quedas](setups/img/fibo-50-do-dia_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,57 / 1,29** | +3,5% | +46,3% | +10,2% | +14,2% | +28,7% | +9,9% | **+169,6%** (+22,1% · R\$ 26.956) |
| **como no vídeo: pontos fixos** | +5,0% | +26,5% | +10,7% | +22,0% | +26,7% | +20,7% | **+174,6%** (+22,6% · R\$ 27.464) |
| **distância da abertura em ATR** | +3,5% | +39,3% | +8,5% | +27,4% | +24,8% | +11,2% | **+176,7%** (+22,7% · R\$ 27.673) |
| **sem stop móvel (só break even)** | +1,3% | +49,4% | +7,3% | +25,2% | +30,8% | +2,7% | **+173,1%** (+22,4% · R\$ 27.310) |
| **sem break even nem stop móvel** | +0,0% | +52,0% | +0,4% | +17,7% | +29,7% | +0,4% | **+133,8%** (+18,6% · R\$ 23.378) |
| **stop 1.100 (variação do vídeo)** | +3,5% | +40,8% | +6,9% | +24,1% | +29,2% | +13,6% | **+183,8%** (+23,4% · R\$ 28.379) |
| **risco 1%** | +2,0% | +23,6% | +11,4% | +13,0% | +21,9% | +12,0% | **+116,8%** (+16,8% · R\$ 21.677) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,9% | **+81,9%** (+12,8% · R\$ 18.193) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,6% | **+59,6%** (+9,9% · R\$ 15.964) |
| *Quem ganhou* | *como no vídeo: pontos fixos* | *sem break even nem stop móvel* | *Ibovespa* | *distância da abertura em ATR* | *Ibovespa* | *como no vídeo: pontos fixos* | *stop 1.100 (variação do vídeo)* |

\* ano parcial: os dados vão de 01/11/2021 a 06/11/2026.

![Retorno por ano](setups/img/fibo-50-do-dia_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,57 / 1,29 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +0,6% | +0,6% | +0,6% | −3,4% |
> | dez/2021 | +2,9% | +1,5% | +0,7% | +2,9% |
> | jan/2022 | +0,6% | +0,7% | +0,7% | +7,0% |
> | fev/2022 | −0,7% | +0,0% | +0,8% | +0,9% |
> | mar/2022 | +4,1% | +2,1% | +0,9% | +6,1% |
> | abr/2022 | +4,7% | +2,8% | +0,8% | −10,1% |
> | mai/2022 | +3,4% | +1,9% | +1,0% | +3,2% |
> | jun/2022 | +5,4% | +3,0% | +1,0% | −11,5% |
> | jul/2022 | −7,9% | −2,9% | +1,0% | +4,7% |
> | ago/2022 | +6,4% | +3,7% | +1,2% | +6,2% |
> | set/2022 | −0,3% | +0,6% | +1,1% | +0,5% |
> | out/2022 | +5,6% | +2,7% | +1,0% | +5,5% |
> | nov/2022 | +9,0% | +3,1% | +1,0% | −3,1% |
> | dez/2022 | +9,7% | +3,9% | +1,1% | −2,4% |
> | jan/2023 | +0,5% | +0,9% | +1,1% | +3,4% |
> | fev/2023 | +0,9% | +0,9% | +0,9% | −7,5% |
> | mar/2023 | +3,5% | +2,2% | +1,2% | −2,9% |
> | abr/2023 | −1,8% | −0,2% | +0,9% | +2,5% |
> | mai/2023 | −3,6% | −1,1% | +1,1% | +3,7% |
> | jun/2023 | +2,4% | +1,7% | +1,1% | +9,0% |
> | jul/2023 | +5,9% | +3,4% | +1,1% | +3,3% |
> | ago/2023 | +3,4% | +2,2% | +1,1% | −5,1% |
> | set/2023 | −0,2% | +0,3% | +1,0% | +0,7% |
> | out/2023 | −2,2% | −0,7% | +1,0% | −2,9% |
> | nov/2023 | +3,5% | +2,2% | +0,9% | +12,5% |
> | dez/2023 | −2,0% | −0,8% | +0,9% | +5,4% |
> | jan/2024 | +2,3% | +1,7% | +1,0% | −4,8% |
> | fev/2024 | +4,5% | +2,7% | +0,8% | +1,0% |
> | mar/2024 | +1,8% | +1,4% | +0,8% | −0,7% |
> | abr/2024 | +2,1% | +1,9% | +0,9% | −1,7% |
> | mai/2024 | −1,6% | −0,6% | +0,8% | −3,0% |
> | jun/2024 | +0,1% | +0,4% | +0,8% | +1,5% |
> | jul/2024 | −0,9% | +0,2% | +0,9% | +3,0% |
> | ago/2024 | +0,4% | +0,4% | +0,9% | +6,5% |
> | set/2024 | +0,8% | +0,8% | +0,8% | −3,1% |
> | out/2024 | −0,9% | −0,1% | +0,9% | −1,6% |
> | nov/2024 | +3,8% | +2,5% | +0,8% | −3,1% |
> | dez/2024 | +1,1% | +0,9% | +0,8% | −4,3% |
> | jan/2025 | +2,4% | +1,5% | +1,0% | +4,9% |
> | fev/2025 | +0,9% | +1,0% | +1,0% | −2,6% |
> | mar/2025 | +7,5% | +4,0% | +1,0% | +6,1% |
> | abr/2025 | +0,4% | +0,9% | +1,1% | +3,7% |
> | mai/2025 | +2,7% | +2,0% | +1,1% | +1,5% |
> | jun/2025 | −3,5% | −0,9% | +1,1% | +1,3% |
> | jul/2025 | +3,1% | +2,2% | +1,3% | −4,2% |
> | ago/2025 | +4,1% | +2,5% | +1,2% | +6,3% |
> | set/2025 | −1,8% | −0,3% | +1,2% | +3,4% |
> | out/2025 | +1,8% | +1,5% | +1,3% | +2,3% |
> | nov/2025 | +8,0% | +4,8% | +1,1% | +6,4% |
> | dez/2025 | +0,4% | +0,9% | +1,1% | +1,3% |
> | jan/2026 | +4,9% | +2,3% | +1,2% | +12,6% |
> | fev/2026 | −1,5% | +0,5% | +1,0% | +4,1% |
> | mar/2026 | +3,6% | +2,1% | +1,2% | −0,7% |
> | abr/2026 | +3,9% | +1,8% | +1,1% | −0,1% |
> | mai/2026 | −2,5% | +0,1% | +1,1% | −7,2% |
> | jun/2026 | +1,8% | +1,3% | +1,1% | −1,0% |
> | jul/2026 | −3,5% | −0,3% | +1,2% | +3,5% |
> | ago/2026 | −4,8% | −0,6% | +1,1% | −0,3% |
> | set/2026 | +5,5% | +2,7% | +1,1% | +5,0% |
> | out/2026 | +2,5% | +1,3% | +1,1% | −9,9% |
> | nov/2026 | +0,2% | +0,2% | +0,2% | +0,3% |
> | **Acumulado** | **+169,6%** | **+116,8%** | **+81,9%** | **+59,6%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,57 / 1,29** | +30% ao ano · queda −28% | +22% ao ano · queda −13% | +18% ao ano · queda −5% | +15% ao ano · queda −2% |
| **como no vídeo: pontos fixos** | +31% ao ano · queda −25% | +23% ao ano · queda −11% | +18% ao ano · queda −4% | +15% ao ano · queda −2% |
| **distância da abertura em ATR** | +32% ao ano · queda −26% | +23% ao ano · queda −12% | +18% ao ano · queda −4% | +15% ao ano · queda −2% |
| **sem stop móvel (só break even)** | +31% ao ano · queda −33% | +22% ao ano · queda −15% | +18% ao ano · queda −5% | +15% ao ano · queda −2% |
| **sem break even nem stop móvel** | +23% ao ano · queda −37% | +19% ao ano · queda −18% | +16% ao ano · queda −8% | +14% ao ano · queda −2% |
| **stop 1.100 (variação do vídeo)** | +33% ao ano · queda −27% | +23% ao ano · queda −13% | +18% ao ano · queda −5% | +15% ao ano · queda −2% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 07/11/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 251 operações, 41% de acerto e fator de lucro 1,39. O vídeo mostra: 424 operações · ~76% de acerto · fator de lucro 1,59 · pior queda 8% (desde 2021, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,10R por operação no treino (p 0,102) e +0,07R no teste (p 0,054). |
| **É sorte de parâmetro?** | 12 de 12 combinações de stop × alvo deram lucro no treino **e** no teste (+0,04 a +0,11R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,10 → +0,07R · sem as médias: +0,10 → +0,03R · sem exigir a cor da vela: +0,10 → +0,07R · sem exigir o toque na linha de 50%: +0,04 → +0,02R · sem a força do dia (distância 0): +0,02 → +0,01R · sem break even nem stop móvel: +0,08 → +0,05R · o dia todo (9h–16h): +0,03 → +0,07R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,10 → +0,07R · 25 pts: +0,10 → +0,06R · 30 pts: +0,09 → +0,05R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,57 / 1,29 foi de −R\$ 1.722 por contrato (começou em mai/2026, ainda não recuperada); 6 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,57 / 1,29 + CDI ficou abaixo do CDI em 46% dos meses. O resultado aparece no ano.
- **Opera pouco** (~3,6 operações por mês): os números têm mais incerteza.
- **Anos negativos:** 2023.
- **As compras carregam o setup:** compras +0,11R × vendas +0,05R por operação.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 06/11/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

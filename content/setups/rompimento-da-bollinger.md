---
title: Rompimento da Bollinger
date: 2026-10-31
tags: [setup, win]
---

**Três velas (a favor, contra, a favor) e a última rompe a banda de Bollinger a favor das médias de 50 e 200: stop curto e alvo 6× maior.**

✅ aprovado · Mini índice (WIN) · gráfico de 15 minutos · velas das 10h15 às 11h00 e das 14h00 às 17h30

🎬 **Vídeo de origem:** [Arthur 777 – "isso apareceu nos meus testes no mini índice"](https://youtu.be/2l5k3OyC7eQ) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 30.836** na versão ATR 0,09 / 0,52 com o capital no CDI (+26% ao ano · pior queda −4%)
> - **R\$ 31.438** na versão como no vídeo (até 17h30) com o capital no CDI (+26% ao ano · pior queda −3%)
> - **R\$ 30.954** na versão tarde só até 17h00 com o capital no CDI (+26% ao ano · pior queda −3%)
> - **R\$ 28.331** na versão stop 0,10% (vídeo) com o capital no CDI (+23% ao ano · pior queda −3%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 79.379** na versão ATR 0,09 / 0,52 **arriscando 1% do capital por operação** (+52% ao ano · pior queda −7%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> Ainda sem operações. O resultado aparece aqui conforme os dias passam.

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/rompimento-da-bollinger_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Padrão** | 3 velas: **positiva, negativa, positiva** | 3 velas: **negativa, positiva, negativa** |
| **2. Rompimento** | a última **fecha acima da banda superior** da Bollinger (20, desvio 2) | a última **fecha abaixo da banda inferior** |
| **3. Tendência** | fecha **acima** das médias exponenciais de 50 e 200 | fecha **abaixo** das duas médias |
| **Entrada** | compra a mercado na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop · alvo** | 0,15% · 0,90% do preço | 0,15% · 0,90% do preço |

- **Versão principal (escolhida só pelo treino): ATR 0,09 / 0,52** — stop 0,086 ATR · alvo 0,518 ATR (6,0× o stop); hoje ≈ 374 pts de stop e 2.247 pts de alvo.
- **ATR** = quanto o índice costuma andar num dia: a média da distância entre a máxima e a mínima dos últimos 14 pregões (hoje ≈ 4.335 pts). Usar múltiplos do ATR em vez de pontos fixos faz o setup acompanhar o mercado quando ele fica mais calmo ou mais agitado.
- **Uma operação de cada vez.** Se não bateu stop nem alvo, zera às 18h20.
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **ATR 0,09 / 0,52** (principal) | stop 0,086 ATR · alvo 0,518 ATR (6,0× o stop) | 37% · 3,18 | +73,0 → +128,5 | +25,5% | −3,6% |
| **como no vídeo (até 17h30)** | stop 0,15% · alvo 0,90% do preço | 37% · 3,13 | +55,5 → +150,9 | +26,0% | −3,4% |
| **tarde só até 17h00** | stop 0,15% · alvo 0,90% do preço | 36% · 3,22 | +53,1 → +160,1 | +25,6% | −3,4% |
| **stop 0,10% (vídeo)** | stop 0,10% · alvo 0,90% do preço | 28% · 4,75 | +34,4 → +127,0 | +23,4% | −2,9% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão ATR 0,09 / 0,52

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 112 | 147 | 259 |
| Operações por mês | 4,1 | 4,3 | 4,2 |
| Taxa de acerto | 39,3% | 34,7% | 36,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 9% / 56% / 35% | 22% / 63% / 14% | 17% / 60% / 23% |
| Stop típico | 166 pts | 168 pts | 166 pts |
| Ganho médio · perda média | +464 · −180 pts | +758 · −206 pts | +622 · −195 pts |
| Payoff (ganho médio ÷ perda média) | 2,58 | 3,68 | 3,18 |
| Fator de lucro (total ganho ÷ total perdido) | 1,67 | 1,95 | 1,84 |
| Resultado médio por operação | +73,0 pts (+88,0 sem custo) | +128,5 pts (+143,5 sem custo) | +104,5 pts (+119,5 sem custo) |
| **Lucro líquido** | **+8.177 pts · R\$ 1.635** | **+18.887 pts · R\$ 3.777** | **+27.064 pts · R\$ 5.413** |
| Pior queda (drawdown) | −1.561 pts · −R\$ 312 | −2.756 pts · −R\$ 551 | −2.756 pts · −R\$ 551 |
| Maior sequência de perdas | 7 seguidas | 8 seguidas | 8 seguidas |
| Compras: acerto · lucro | 42% · +4.791 pts | 43% · +12.954 pts | 42% · +17.745 pts |
| Vendas: acerto · lucro | 36% · +3.386 pts | 28% · +5.933 pts | 31% · +9.319 pts |

### Versão como no vídeo (até 17h30)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 113 | 145 | 258 |
| Operações por mês | 4,2 | 4,3 | 4,2 |
| Taxa de acerto | 36,3% | 37,2% | 36,8% |
| Bateram o alvo / o stop / zeraram no fim do dia | 11% / 60% / 29% | 16% / 60% / 24% | 14% / 60% / 26% |
| Stop típico | 168 pts | 203 pts | 188 pts |
| Ganho médio · perda média | +463 · −177 pts | +801 · −235 pts | +655 · −209 pts |
| Payoff (ganho médio ÷ perda média) | 2,62 | 3,41 | 3,13 |
| Fator de lucro (total ganho ÷ total perdido) | 1,49 | 2,02 | 1,83 |
| Resultado médio por operação | +55,5 pts (+70,5 sem custo) | +150,9 pts (+165,9 sem custo) | +109,1 pts (+124,1 sem custo) |
| **Lucro líquido** | **+6.269 pts · R\$ 1.254** | **+21.874 pts · R\$ 4.375** | **+28.143 pts · R\$ 5.629** |
| Pior queda (drawdown) | −1.786 pts · −R\$ 357 | −2.725 pts · −R\$ 545 | −2.725 pts · −R\$ 545 |
| Maior sequência de perdas | 11 seguidas | 8 seguidas | 11 seguidas |
| Compras: acerto · lucro | 40% · +3.478 pts | 46% · +15.119 pts | 43% · +18.597 pts |
| Vendas: acerto · lucro | 33% · +2.790 pts | 29% · +6.755 pts | 31% · +9.546 pts |

### Versão tarde só até 17h00

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 102 | 137 | 239 |
| Operações por mês | 3,8 | 4,0 | 3,9 |
| Taxa de acerto | 33,3% | 38,7% | 36,4% |
| Bateram o alvo / o stop / zeraram no fim do dia | 12% / 66% / 23% | 16% / 60% / 24% | 14% / 62% / 23% |
| Stop típico | 168 pts | 203 pts | 189 pts |
| Ganho médio · perda média | +524 · −182 pts | +792 · −239 pts | +688 · −214 pts |
| Payoff (ganho médio ÷ perda média) | 2,87 | 3,32 | 3,22 |
| Fator de lucro (total ganho ÷ total perdido) | 1,44 | 2,09 | 1,84 |
| Resultado médio por operação | +53,1 pts (+68,1 sem custo) | +160,1 pts (+175,1 sem custo) | +114,4 pts (+129,4 sem custo) |
| **Lucro líquido** | **+5.412 pts · R\$ 1.082** | **+21.937 pts · R\$ 4.387** | **+27.350 pts · R\$ 5.470** |
| Pior queda (drawdown) | −1.696 pts · −R\$ 339 | −2.590 pts · −R\$ 518 | −2.590 pts · −R\$ 518 |
| Maior sequência de perdas | 10 seguidas | 8 seguidas | 10 seguidas |
| Compras: acerto · lucro | 37% · +2.838 pts | 46% · +15.119 pts | 42% · +17.957 pts |
| Vendas: acerto · lucro | 30% · +2.574 pts | 31% · +6.819 pts | 31% · +9.392 pts |

### Versão stop 0,10% (vídeo)

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 116 | 148 | 264 |
| Operações por mês | 4,3 | 4,4 | 4,3 |
| Taxa de acerto | 25,9% | 29,1% | 27,7% |
| Bateram o alvo / o stop / zeraram no fim do dia | 9% / 73% / 18% | 14% / 69% / 18% | 11% / 71% / 18% |
| Stop típico | 112 pts | 135 pts | 125 pts |
| Ganho médio · perda média | +493 · −125 pts | +836 · −163 pts | +695 · −146 pts |
| Payoff (ganho médio ÷ perda média) | 3,93 | 5,12 | 4,75 |
| Fator de lucro (total ganho ÷ total perdido) | 1,37 | 2,10 | 1,82 |
| Resultado médio por operação | +34,4 pts (+49,4 sem custo) | +127,0 pts (+142,0 sem custo) | +86,3 pts (+101,3 sem custo) |
| **Lucro líquido** | **+3.995 pts · R\$ 799** | **+18.799 pts · R\$ 3.760** | **+22.793 pts · R\$ 4.559** |
| Pior queda (drawdown) | −1.296 pts · −R\$ 259 | −3.556 pts · −R\$ 711 | −3.556 pts · −R\$ 711 |
| Maior sequência de perdas | 11 seguidas | 15 seguidas | 15 seguidas |
| Compras: acerto · lucro | 29% · +2.661 pts | 37% · +13.349 pts | 33% · +16.011 pts |
| Vendas: acerto · lucro | 23% · +1.333 pts | 22% · +5.449 pts | 23% · +6.782 pts |

![Pontos acumulados com 1 contrato](setups/img/rompimento-da-bollinger_pontos.png)

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
| **ATR 0,09 / 0,52** | **R\$ 30.836** · +25,5% | −3,6% | 6,8% · 1,61 | 65% · 52% | −1,4% · +9,5% |
| **como no vídeo (até 17h30)** | **R\$ 31.438** · +26,0% | −3,4% | 7,4% · 1,53 | 62% · 52% | −1,1% · +9,7% |
| **tarde só até 17h00** | **R\$ 30.954** · +25,6% | −3,4% | 7,3% · 1,51 | 63% · 53% | −1,1% · +9,7% |
| **stop 0,10% (vídeo)** | **R\$ 28.331** · +23,4% | −2,9% | 6,6% · 1,40 | 58% · 55% | −1,9% · +10,0% |
| **risco 1%** | **R\$ 79.379** · +51,9% | −6,9% | 17,4% · 1,80 | 67% · 63% | −3,9% · +21,6% |
| **pura** | **R\$ 16.988** · +11,3% | −5,0% | 6,8% · −0,16 | 43% · 42% | −2,5% · +8,4% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/rompimento-da-bollinger_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **ATR 0,09 / 0,52** | +4,0% | +18,2% | +22,8% | +23,1% | +40,2% | +18,4% | **+208,4%** (+25,5% · R\$ 30.836) |
| **como no vídeo (até 17h30)** | +3,3% | +16,8% | +20,4% | +29,2% | +42,6% | +17,5% | **+214,4%** (+26,0% · R\$ 31.438) |
| **tarde só até 17h00** | +3,3% | +16,2% | +19,0% | +30,2% | +41,3% | +17,8% | **+209,5%** (+25,6% · R\$ 30.954) |
| **stop 0,10% (vídeo)** | +1,7% | +16,4% | +17,3% | +26,7% | +42,2% | +13,3% | **+183,3%** (+23,4% · R\$ 28.331) |
| **risco 1%** | +6,4% | +30,1% | +40,6% | +56,8% | +108,7% | +24,6% | **+693,8%** (+51,9% · R\$ 79.379) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/rompimento-da-bollinger_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | ATR 0,09 / 0,52 | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +2,8% | +5,1% | +0,6% | −3,4% |
> | dez/2021 | +1,1% | +1,2% | +0,7% | +2,9% |
> | jan/2022 | +2,0% | +4,8% | +0,7% | +7,0% |
> | fev/2022 | +0,5% | −0,1% | +0,8% | +0,9% |
> | mar/2022 | +3,3% | +6,3% | +0,9% | +6,1% |
> | abr/2022 | +3,2% | +8,2% | +0,8% | −10,1% |
> | mai/2022 | +0,2% | −1,0% | +1,0% | +3,2% |
> | jun/2022 | +0,7% | +0,2% | +1,0% | −11,5% |
> | jul/2022 | +0,5% | +0,3% | +1,0% | +4,7% |
> | ago/2022 | +3,6% | +8,0% | +1,2% | +6,2% |
> | set/2022 | +0,3% | −0,9% | +1,1% | +0,5% |
> | out/2022 | +1,7% | +2,4% | +1,0% | +5,5% |
> | nov/2022 | +2,4% | +3,3% | +1,0% | −3,1% |
> | dez/2022 | −1,4% | −3,9% | +1,1% | −2,4% |
> | jan/2023 | +5,7% | +12,1% | +1,1% | +3,4% |
> | fev/2023 | +1,6% | +2,6% | +0,9% | −7,5% |
> | mar/2023 | +0,8% | −0,1% | +1,2% | −2,9% |
> | abr/2023 | −0,6% | −3,1% | +0,9% | +2,5% |
> | mai/2023 | +0,5% | −0,8% | +1,1% | +3,7% |
> | jun/2023 | +4,9% | +12,5% | +1,1% | +9,0% |
> | jul/2023 | +2,0% | +4,0% | +1,1% | +3,3% |
> | ago/2023 | +0,5% | −0,8% | +1,1% | −5,1% |
> | set/2023 | +3,6% | +10,0% | +1,0% | +0,7% |
> | out/2023 | +0,6% | −0,2% | +1,0% | −2,9% |
> | nov/2023 | +1,6% | +3,1% | +0,9% | +12,5% |
> | dez/2023 | −0,3% | −3,1% | +0,9% | +5,4% |
> | jan/2024 | +3,6% | +9,7% | +1,0% | −4,8% |
> | fev/2024 | +1,2% | +3,0% | +0,8% | +1,0% |
> | mar/2024 | +0,0% | −2,2% | +0,8% | −0,7% |
> | abr/2024 | +2,2% | +4,3% | +0,9% | −1,7% |
> | mai/2024 | +1,0% | +1,3% | +0,8% | −3,0% |
> | jun/2024 | +1,0% | +1,9% | +0,8% | +1,5% |
> | jul/2024 | +1,1% | +2,0% | +0,9% | +3,0% |
> | ago/2024 | +3,2% | +9,5% | +0,9% | +6,5% |
> | set/2024 | +1,9% | +4,1% | +0,8% | −3,1% |
> | out/2024 | +2,1% | +5,1% | +0,9% | −1,6% |
> | nov/2024 | +1,9% | +4,1% | +0,8% | −3,1% |
> | dez/2024 | +1,9% | +3,7% | +0,8% | −4,3% |
> | jan/2025 | +2,9% | +6,8% | +1,0% | +4,9% |
> | fev/2025 | +2,0% | +3,9% | +1,0% | −2,6% |
> | mar/2025 | +6,0% | +15,8% | +1,0% | +6,1% |
> | abr/2025 | −0,8% | −2,9% | +1,1% | +3,7% |
> | mai/2025 | +4,6% | +11,2% | +1,1% | +1,5% |
> | jun/2025 | +1,1% | +1,3% | +1,1% | +1,3% |
> | jul/2025 | +2,3% | +4,3% | +1,3% | −4,2% |
> | ago/2025 | +8,5% | +21,6% | +1,2% | +6,3% |
> | set/2025 | +1,3% | +1,7% | +1,2% | +3,4% |
> | out/2025 | +3,2% | +6,7% | +1,3% | +2,3% |
> | nov/2025 | +3,0% | +6,5% | +1,1% | +6,4% |
> | dez/2025 | +0,6% | +1,3% | +1,1% | +1,3% |
> | jan/2026 | +5,8% | +11,4% | +1,2% | +12,6% |
> | fev/2026 | +0,1% | −0,4% | +1,0% | +4,1% |
> | mar/2026 | +0,5% | +0,2% | +1,2% | −0,7% |
> | abr/2026 | +9,5% | +14,4% | +1,1% | −0,1% |
> | mai/2026 | −0,9% | −2,4% | +1,1% | −7,2% |
> | jun/2026 | −0,9% | −2,9% | +1,1% | −1,0% |
> | jul/2026 | +0,2% | −0,8% | +1,2% | +3,5% |
> | ago/2026 | +3,1% | +4,7% | +1,1% | −0,3% |
> | set/2026 | +1,2% | +1,6% | +1,1% | +5,0% |
> | out/2026 | −1,0% | −2,0% | +1,0% | −9,9% |
> | **Acumulado** | **+208,4%** | **+693,8%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **ATR 0,09 / 0,52** | +39% ao ano · queda −8% | +26% ao ano · queda −4% | +19% ao ano · queda −1% | +16% ao ano · queda −0% |
| **como no vídeo (até 17h30)** | +40% ao ano · queda −8% | +26% ao ano · queda −3% | +19% ao ano · queda −1% | +16% ao ano · queda −0% |
| **tarde só até 17h00** | +39% ao ano · queda −8% | +26% ao ano · queda −3% | +19% ao ano · queda −1% | +16% ao ano · queda −0% |
| **stop 0,10% (vídeo)** | +34% ao ano · queda −8% | +23% ao ano · queda −3% | +18% ao ano · queda −1% | +15% ao ano · queda −0% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 258 operações, 37% de acerto e fator de lucro 2,01. O vídeo mostra: 197 operações · 36% de acerto · fator de lucro 4,19 (desde 2022, sem custo). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,43R por operação no treino (p 0,009) e +0,83R no teste (p 0,000). |
| **É sorte de parâmetro?** | 16 de 16 combinações de stop × alvo deram lucro no treino **e** no teste (+0,09 a +0,84R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,43 → +0,83R · sem o padrão de 3 velas (só a última a favor): +0,23 → +0,16R · sem a Bollinger: +0,11 → +0,13R · sem a média de 50: +0,43 → +0,80R · sem a média de 200: +0,29 → +0,72R · sem as duas médias: +0,25 → +0,62R · sem o horário (velas das 9h15 às 17h30): +0,33 → +0,23R · Bollinger desvio 1,5: +0,21 → +0,54R · Bollinger desvio 2,5: +0,29 → +1,50R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu **ATR**. |
| **E se o custo for maior?** | 15 pts: +0,43 → +0,83R · 25 pts: +0,37 → +0,77R · 30 pts: +0,34 → +0,74R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão ATR 0,09 / 0,52 foi de −R\$ 551 por contrato (começou em abr/2026, ainda não recuperada); 8 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão ATR 0,09 / 0,52 + CDI ficou abaixo do CDI em 35% dos meses. O resultado aparece no ano.
- **Stop curto** (~166 pts): o custo e o escorregão pesam mais — veja "E se o custo for maior?".
- **Opera pouco** (~4,2 operações por mês): os números têm mais incerteza.
- **Acerto de ~37%:** a maioria das operações dá stop; sequências de stops são normais.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

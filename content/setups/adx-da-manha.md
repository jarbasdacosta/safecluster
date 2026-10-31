---
title: ADX da Manhã
date: 2026-10-31
tags: [setup, win]
---

**Aposta curta e barata no começo da tendência das 10h às 11h: vela a favor com o ADX subindo, stop pequeno e alvo bem longo.**

🟡 promissor · Mini índice (WIN) · gráfico de 15 minutos · só as velas das 10h00, 10h15, 10h30, 10h45 e 11h00

🎬 **Vídeo de origem:** [Arthur 777 – "esse indicador é bizarro no mini índice"](https://youtu.be/D9mwdxexECE) · testado de forma independente nos nossos dados em 31/10/2026 · página gerada em 31/10/2026 14:49 BRT · [voltar para todos os setups](./)

> [!success] Em resumo: R\$ 10.000 aplicados em nov/2021 viraram
> - **R\$ 48.526** na versão filtro 0,89% com o capital no CDI (+38% ao ano · pior queda −15%)
> - **R\$ 41.436** na versão como no vídeo com o capital no CDI (+33% ao ano · pior queda −13%)
> - **R\$ 47.072** na versão ATR 0,09 / 0,75 com o capital no CDI (+37% ao ano · pior queda −17%)
> - **R\$ 18.156** só no CDI (+13% ao ano)
> - **R\$ 15.909** comprado no Ibovespa (+10% ao ano · pior queda −21%)
>
> - **R\$ 120.603** na versão filtro 0,89% **arriscando 1% do capital por operação** (+65% ao ano · pior queda −31%) — o tamanho sugerido, veja [tamanho de posição](carteira#tamanho-de-posição)
>
> Com 1 contrato de WIN para cada R\$ 10.000 (ou pelo risco de 1%), sem imposto.

> [!example] Ao vivo: desde 27/10/2026 (dias que nenhum vídeo viu)
> **8 operações** · acerto 12% · **+0,15R por operação** (no teste 2024 →: +0,21R) · líquido +359 pts (R\$ 72 por contrato)
>
> *Com poucas operações o número ainda diz pouco — fica confiável depois de algumas dezenas.*

> [!warning] Leia antes
> Resultado passado, em backtest, não garante resultado futuro. É um estudo educacional, **não é recomendação de investimento**. Day trade com mini índice é alavancado: dá para perder mais do que o capital da conta.

![Curva de capital contra CDI e Ibovespa](setups/img/adx-da-manha_curva.png)

## Como o setup funciona

| | 🟢 Compra | 🔴 Venda |
|---|---|---|
| **1. Horário** | a vela começa entre 10h00 e 11h00 | igual |
| **2. Vela a favor** | a vela é **positiva** (fecha acima da abertura) | a vela é **negativa** (fecha abaixo da abertura) |
| **3. ADX(9, média 9)** | o ADX está **subindo** (maior que na vela anterior) | o ADX está **subindo** também — o ADX mede a força do movimento, não a direção |
| **4. Filtro** | a vela tem **no máximo 0,89% do preço** de tamanho (≈ 1.516 pts hoje; evita dias de volatilidade anormal) | igual |
| **Entrada** | compra **a mercado** na abertura da vela seguinte | vende a mercado na abertura da vela seguinte |
| **Stop** | **0,15%** abaixo da entrada (≈ 255 pts hoje) | 0,15% acima da entrada |
| **Alvo** | **1,30%** acima da entrada (≈ 2.214 pts hoje) | 1,30% abaixo da entrada |
| **Fim do dia** | se não bateu stop nem alvo, zera às 18h20 | igual |

- **Versão principal (escolhida só pelo treino): filtro 0,89%** — stop 0,15% · alvo 1,30% do preço; hoje ≈ 255 pts de stop e 2.214 pts de alvo.
- **Uma operação de cada vez.** Se tomar stop cedo, pode entrar de novo numa vela seguinte ainda dentro da janela das 10h às 11h.
- **Acerta pouco e ganha muito quando acerta:** cerca de 1 em cada 5 operações dá lucro, mas o ganho médio é 5 a 6 vezes a perda média.
- **Sem condução do trade** (sem stop no zero a zero), exatamente como no vídeo.
- **De onde veio:** no vídeo o filtro é de 1.000 pontos fixos e a venda é com o ADX descendo. Aqui o filtro virou 0,89% do preço (com o índice subindo, os 1.000 pts barravam cada vez mais velas normais) e a venda usa o ADX subindo (escolhidos no treino, testados em 26/10/2026).
- **Testado pela bateria padrão** (a mesma para todos os setups): réplica do vídeo, pontos/% × ATR, vizinhança, peça por peça, custo e comparação com o acaso. Veredito por regras fixas, refeito todo sábado com os dados novos.

### As versões testadas

| Versão | Regra | Acerto · payoff | Treino → teste (pts/op) | Ao ano (+ CDI) | Pior queda (+ CDI) |
|---|---|---|---|---|---|
| **filtro 0,89%** (principal) | stop 0,15% · alvo 1,30% do preço | 18% · 5,22 | +9,8 → +46,8 | +37,6% | −15,4% |
| **como no vídeo** | stop 0,15% · alvo 1,30% do preço | 18% · 5,21 | +7,9 → +40,2 | +33,2% | −13,2% |
| **ATR 0,09 / 0,75** | stop 0,086 ATR · alvo 0,749 ATR (8,7× o stop) | 17% · 5,74 | +12,9 → +40,4 | +36,7% | −17,4% |

## Estatísticas da operação (1 contrato, em pontos)

Cada operação já desconta **15 pontos de custo** (corretagem, emolumentos e escorregão). R\$ = pontos × R\$ 0,20 por contrato. **Treino** = nov/2021 a dez/2023 · **Teste** = 2024 até hoje.

### Versão filtro 0,89%

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 818 | 976 | 1.794 |
| Operações por mês | 30,3 | 28,7 | 29,4 |
| Taxa de acerto | 15,2% | 21,0% | 18,3% |
| Bateram o alvo / o stop / zeraram no fim do dia | 8% / 84% / 8% | 6% / 78% / 16% | 7% / 81% / 12% |
| Stop típico | 167 pts | 208 pts | 190 pts |
| Ganho médio · perda média | +1.086 · −182 pts | +1.130 · −241 pts | +1.113 · −213 pts |
| Payoff (ganho médio ÷ perda média) | 5,95 | 4,69 | 5,22 |
| Fator de lucro (total ganho ÷ total perdido) | 1,06 | 1,25 | 1,17 |
| Resultado médio por operação | +9,8 pts (+24,8 sem custo) | +46,8 pts (+61,8 sem custo) | +30,0 pts (+45,0 sem custo) |
| **Lucro líquido** | **+8.040 pts · R\$ 1.608** | **+45.699 pts · R\$ 9.140** | **+53.739 pts · R\$ 10.748** |
| Pior queda (drawdown) | −6.554 pts · −R\$ 1.311 | −9.419 pts · −R\$ 1.884 | −9.419 pts · −R\$ 1.884 |
| Maior sequência de perdas | 24 seguidas | 18 seguidas | 24 seguidas |
| Compras: acerto · lucro | 15% · +627 pts | 19% · +16.227 pts | 17% · +16.854 pts |
| Vendas: acerto · lucro | 16% · +7.413 pts | 22% · +29.472 pts | 19% · +36.885 pts |

### Versão como no vídeo

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 923 | 1.040 | 1.963 |
| Operações por mês | 34,2 | 30,6 | 32,2 |
| Taxa de acerto | 14,8% | 20,9% | 18,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 8% / 84% / 7% | 6% / 78% / 16% | 7% / 81% / 12% |
| Stop típico | 168 pts | 205 pts | 189 pts |
| Ganho médio · perda média | +1.100 · −182 pts | +1.085 · −235 pts | +1.091 · −210 pts |
| Payoff (ganho médio ÷ perda média) | 6,03 | 4,61 | 5,21 |
| Fator de lucro (total ganho ÷ total perdido) | 1,05 | 1,22 | 1,15 |
| Resultado médio por operação | +7,9 pts (+22,9 sem custo) | +40,2 pts (+55,2 sem custo) | +25,0 pts (+40,0 sem custo) |
| **Lucro líquido** | **+7.302 pts · R\$ 1.460** | **+41.804 pts · R\$ 8.361** | **+49.106 pts · R\$ 9.821** |
| Pior queda (drawdown) | −9.325 pts · −R\$ 1.865 | −7.054 pts · −R\$ 1.411 | −9.325 pts · −R\$ 1.865 |
| Maior sequência de perdas | 32 seguidas | 30 seguidas | 32 seguidas |
| Compras: acerto · lucro | 14% · −2.263 pts | 22% · +30.663 pts | 19% · +28.400 pts |
| Vendas: acerto · lucro | 15% · +9.565 pts | 20% · +11.141 pts | 18% · +20.706 pts |

### Versão ATR 0,09 / 0,75

| | Treino | Teste | Total |
|---|---|---|---|
| Operações | 788 | 1.068 | 1.856 |
| Operações por mês | 29,2 | 31,4 | 30,4 |
| Taxa de acerto | 15,4% | 18,2% | 17,0% |
| Bateram o alvo / o stop / zeraram no fim do dia | 7% / 84% / 8% | 9% / 82% / 9% | 8% / 83% / 9% |
| Stop típico | 166 pts | 165 pts | 166 pts |
| Ganho médio · perda média | +1.125 · −189 pts | +1.156 · −207 pts | +1.144 · −199 pts |
| Payoff (ganho médio ÷ perda média) | 5,96 | 5,58 | 5,74 |
| Fator de lucro (total ganho ÷ total perdido) | 1,08 | 1,24 | 1,17 |
| Resultado médio por operação | +12,9 pts (+27,9 sem custo) | +40,4 pts (+55,4 sem custo) | +28,7 pts (+43,7 sem custo) |
| **Lucro líquido** | **+10.181 pts · R\$ 2.036** | **+43.147 pts · R\$ 8.629** | **+53.328 pts · R\$ 10.666** |
| Pior queda (drawdown) | −8.651 pts · −R\$ 1.730 | −11.443 pts · −R\$ 2.289 | −11.443 pts · −R\$ 2.289 |
| Maior sequência de perdas | 24 seguidas | 18 seguidas | 24 seguidas |
| Compras: acerto · lucro | 15% · +1.299 pts | 18% · +19.948 pts | 17% · +21.247 pts |
| Vendas: acerto · lucro | 16% · +8.883 pts | 18% · +23.199 pts | 17% · +32.082 pts |

![Pontos acumulados com 1 contrato](setups/img/adx-da-manha_pontos.png)

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
| **filtro 0,89%** | **R\$ 48.526** · +37,6% | −15,4% | 21,4% · 1,03 | 63% · 60% | −10,0% · +23,4% |
| **como no vídeo** | **R\$ 41.436** · +33,2% | −13,2% | 22,1% · 0,86 | 60% · 57% | −7,4% · +15,6% |
| **ATR 0,09 / 0,75** | **R\$ 47.072** · +36,7% | −17,4% | 21,5% · 1,00 | 60% · 62% | −10,4% · +31,3% |
| **risco 1%** | **R\$ 120.603** · +65,3% | −30,8% | 49,1% · 1,02 | 60% · 63% | −19,1% · +38,5% |
| **pura** | **R\$ 26.740** · +22,0% | −17,2% | 21,4% · 0,47 | 55% · 52% | −10,9% · +22,1% |
| **CDI** | **R\$ 18.156** · +12,8% | +0,0% | 0,1% · — | — · 45% | +0,6% · +1,3% |
| **Ibovespa** | **R\$ 15.909** · +9,8% | −20,9% | 18,6% · −0,05 | 55% · — | −11,5% · +12,6% |

![Quedas](setups/img/adx-da-manha_queda.png)

### Ano a ano

| | 2021* | 2022 | 2023 | 2024 | 2025 | 2026* | **No período** (média/ano · R\$ 10.000 viraram) |
|---|---|---|---|---|---|---|---|
| **filtro 0,89%** | +2,1% | +29,8% | +12,0% | +36,5% | +65,9% | +44,4% | **+385,3%** (+37,6% · R\$ 48.526) |
| **como no vídeo** | −2,8% | +26,8% | +11,5% | +63,7% | +42,1% | +29,7% | **+314,4%** (+33,2% · R\$ 41.436) |
| **ATR 0,09 / 0,75** | −7,2% | +27,8% | +27,4% | +32,5% | +61,1% | +46,0% | **+370,7%** (+36,7% · R\$ 47.072) |
| **risco 1%** | +2,0% | +51,0% | +7,4% | +71,5% | +161,6% | +62,3% | **+1106,0%** (+65,3% · R\$ 120.603) |
| **CDI** | +1,3% | +12,3% | +13,0% | +10,8% | +14,2% | +11,6% | **+81,6%** (+12,8% · R\$ 18.156) |
| **Ibovespa** | −0,7% | +4,7% | +22,3% | −10,4% | +34,0% | +4,2% | **+59,1%** (+9,8% · R\$ 15.909) |
| *Quem ganhou* | *filtro 0,89%* | *risco 1%* | *ATR 0,09 / 0,75* | *risco 1%* | *risco 1%* | *risco 1%* | *risco 1%* |

\* ano parcial: os dados vão de 01/11/2021 a 30/10/2026.

![Retorno por ano](setups/img/adx-da-manha_anos.png)

> [!example]- Mês a mês (clique para abrir)
> | Mês | filtro 0,89% | risco 1% | CDI | Ibovespa |
> |---|---|---|---|---|
> | nov/2021 | +1,3% | +2,1% | +0,6% | −3,4% |
> | dez/2021 | +0,8% | −0,0% | +0,7% | +2,9% |
> | jan/2022 | +2,7% | +5,7% | +0,7% | +7,0% |
> | fev/2022 | −1,1% | −4,6% | +0,8% | +0,9% |
> | mar/2022 | +4,5% | +10,4% | +0,9% | +6,1% |
> | abr/2022 | −4,1% | −12,3% | +0,8% | −10,1% |
> | mai/2022 | +6,6% | +16,7% | +1,0% | +3,2% |
> | jun/2022 | −1,2% | −5,5% | +1,0% | −11,5% |
> | jul/2022 | −2,9% | −11,1% | +1,0% | +4,7% |
> | ago/2022 | +12,3% | +32,9% | +1,2% | +6,2% |
> | set/2022 | −1,7% | −7,1% | +1,1% | +0,5% |
> | out/2022 | +6,3% | +14,5% | +1,0% | +5,5% |
> | nov/2022 | −1,0% | −5,2% | +1,0% | −3,1% |
> | dez/2022 | +7,2% | +17,7% | +1,1% | −2,4% |
> | jan/2023 | −0,1% | −2,8% | +1,1% | +3,4% |
> | fev/2023 | +7,9% | +20,2% | +0,9% | −7,5% |
> | mar/2023 | −2,9% | −11,3% | +1,2% | −2,9% |
> | abr/2023 | +7,4% | +20,2% | +0,9% | +2,5% |
> | mai/2023 | +3,9% | +8,6% | +1,1% | +3,7% |
> | jun/2023 | −4,6% | −13,7% | +1,1% | +9,0% |
> | jul/2023 | +3,2% | +5,8% | +1,1% | +3,3% |
> | ago/2023 | +0,6% | −0,7% | +1,1% | −5,1% |
> | set/2023 | −1,6% | −5,5% | +1,0% | +0,7% |
> | out/2023 | +1,0% | +0,7% | +1,0% | −2,9% |
> | nov/2023 | +3,4% | +7,3% | +0,9% | +12,5% |
> | dez/2023 | −5,7% | −14,2% | +0,9% | +5,4% |
> | jan/2024 | +10,5% | +24,2% | +1,0% | −4,8% |
> | fev/2024 | +7,2% | +16,0% | +0,8% | +1,0% |
> | mar/2024 | −5,6% | −14,1% | +0,8% | −0,7% |
> | abr/2024 | +3,2% | +6,2% | +0,9% | −1,7% |
> | mai/2024 | −4,0% | −10,5% | +0,8% | −3,0% |
> | jun/2024 | −0,9% | −3,9% | +0,8% | +1,5% |
> | jul/2024 | −1,9% | −6,0% | +0,9% | +3,0% |
> | ago/2024 | +4,7% | +9,3% | +0,9% | +6,5% |
> | set/2024 | +2,2% | +3,4% | +0,8% | −3,1% |
> | out/2024 | +6,2% | +13,3% | +0,9% | −1,6% |
> | nov/2024 | +2,3% | +3,8% | +0,8% | −3,1% |
> | dez/2024 | +9,0% | +21,3% | +0,8% | −4,3% |
> | jan/2025 | +8,6% | +19,5% | +1,0% | +4,9% |
> | fev/2025 | +5,5% | +11,8% | +1,0% | −2,6% |
> | mar/2025 | +7,3% | +16,4% | +1,0% | +6,1% |
> | abr/2025 | +0,7% | +0,4% | +1,1% | +3,7% |
> | mai/2025 | +10,5% | +22,7% | +1,1% | +1,5% |
> | jun/2025 | +2,0% | +2,5% | +1,1% | +1,3% |
> | jul/2025 | +4,0% | +6,9% | +1,3% | −4,2% |
> | ago/2025 | +8,2% | +17,5% | +1,2% | +6,3% |
> | set/2025 | +3,8% | +6,4% | +1,2% | +3,4% |
> | out/2025 | +5,1% | +8,9% | +1,3% | +2,3% |
> | nov/2025 | +7,3% | +13,4% | +1,1% | +6,4% |
> | dez/2025 | −9,7% | −19,1% | +1,1% | +1,3% |
> | jan/2026 | +7,3% | +12,6% | +1,2% | +12,6% |
> | fev/2026 | −10,0% | −16,9% | +1,0% | +4,1% |
> | mar/2026 | +1,9% | +2,0% | +1,2% | −0,7% |
> | abr/2026 | +23,4% | +38,5% | +1,1% | −0,1% |
> | mai/2026 | −1,8% | −4,5% | +1,1% | −7,2% |
> | jun/2026 | −2,9% | −6,5% | +1,1% | −1,0% |
> | jul/2026 | −0,1% | −1,6% | +1,2% | +3,5% |
> | ago/2026 | +1,9% | +2,1% | +1,1% | −0,3% |
> | set/2026 | +16,4% | +27,8% | +1,1% | +5,0% |
> | out/2026 | +5,3% | +7,0% | +1,0% | −9,9% |
> | **Acumulado** | **+385,3%** | **+1106,0%** | **+81,6%** | **+59,1%** |
>
> *As outras versões aparecem no ano a ano acima; o mês a mês é da versão principal.*

### E se o capital por contrato for outro?

| Versão (+ CDI) | R\$ 5.000 por contrato | R\$ 10.000 por contrato | R\$ 20.000 por contrato | R\$ 40.000 por contrato |
|---|---|---|---|---|
| **filtro 0,89%** | +61% ao ano · queda −30% | +38% ao ano · queda −15% | +25% ao ano · queda −7% | +19% ao ano · queda −3% |
| **como no vídeo** | +50% ao ano · queda −29% | +33% ao ano · queda −13% | +23% ao ano · queda −6% | +18% ao ano · queda −3% |
| **ATR 0,09 / 0,75** | +59% ao ano · queda −35% | +37% ao ano · queda −17% | +25% ao ano · queda −8% | +19% ao ano · queda −3% |

*Referência: CDI +13% ao ano · Ibovespa +10% ao ano, pior queda −21%.*

## O que os testes mostraram

*Testes de robustez rodados em 31/10/2026.*

| Pergunta | Resposta |
|---|---|
| **Bate com o vídeo?** | Na versão do vídeo, sem custo, nossos dados deram 1794 operações, 18% de acerto e fator de lucro 1,28. O vídeo mostra: 1.940 operações (nossos dados: 1.960). |
| **Ganha do acaso?** | Entradas quaisquer nos mesmos horários ficam perto de zero; o setup faz +0,06R por operação no treino (p 0,361) e +0,21R no teste (p 0,014). |
| **É sorte de parâmetro?** | 9 de 9 combinações de stop × alvo deram lucro no treino **e** no teste (+0,02 a +0,35R por operação). |
| **Cada condição importa?** | COMPLETO (versão principal): +0,06 → +0,21R · sem o ADX: +0,03 → +0,07R · sem o filtro do tamanho da vela: +0,04 → +0,24R · venda com o ADX descendo: +0,06 → +0,20R (treino → teste). |
| **Pontos, % ou ATR?** | O treino escolheu manter como no vídeo. |
| **E se o custo for maior?** | 15 pts: +0,06 → +0,21R · 25 pts: +0,00 → +0,17R · 30 pts: −0,03 → +0,14R (treino → teste). |

## Riscos e cuidados

- **Fases ruins:** a pior queda da versão filtro 0,89% foi de −R\$ 1.884 por contrato (começou em nov/2025, recuperada em abr/2026); 24 perdas seguidas aconteceram no período.
- **Mês a mês é quase cara ou coroa:** a versão filtro 0,89% + CDI ficou abaixo do CDI em 37% dos meses. O resultado aparece no ano.
- **Stop curto** (~190 pts): o custo e o escorregão pesam mais — veja "E se o custo for maior?".
- **Anos negativos:** 2021.
- **Acerto de ~18%:** a maioria das operações dá stop; sequências de stops são normais.
- **Treino fraco:** em 2021–2023 o setup ganhou só ~10 pts por operação e não bateu o acaso; com custo de 25 pts já seria zero. Quase todo o lucro veio de 2024–2025.
- **Acerto de ~18%:** sequências longas de stops são normais neste setup.
- **Poucos anos de dados** (desde out/2021) e **sem imposto** (day trade paga 20% sobre o lucro).

## Como o teste foi feito

- **Dados:** WIN\$N em velas de 1 minuto do MetaTrader 5, de 25/10/2021 a 30/10/2026, com os saltos das rolagens ajustados para os indicadores; resultados em **pontos reais** do contrato de cada época.
- **Execução realista:** cada operação acompanhada minuto a minuto; stop e alvo no mesmo minuto contam como **stop**; se o preço abriu além do stop, a saída foi no preço da abertura.
- **Custo:** 15 pontos por operação. **CDI:** série diária do Banco Central. **Ibovespa:** fechamento diário, comprado o período todo.
- **Os parâmetros vieram prontos do vídeo**; o período de 2024 em diante serviu como prova.

*Leitura educacional baseada em backtest. Não é recomendação de investimento.*

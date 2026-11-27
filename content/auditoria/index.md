---
title: "Auditoria dos dados"
date: 2026-11-27
description: "A série do pregão chegou inteira? O que já foi publicado continua valendo? Medido todo dia, depois do fechamento."
---

# ⚠ 1 ponto(s) de atenção

*Medido em 27/11/2026 às 13:32 · último pregão no acervo: 26/11/2026*

Esta página responde três perguntas sobre os dados que alimentam os setups, todo dia, depois do fechamento. Ela não conserta nada — mede e avisa.

## A série do pregão chegou inteira?

| Ativo | Candles M1 | Mediana | Primeiro | Último | Maior vão | D1 bate com M1 |
|---|---:|---:|---|---|---:|---|
| WINSN | 562 | 565 | 09:03 ⚠ | 18:24 | 1 min | sim |
| WDOSN | 570 | 570 | 09:00 | 18:29 | 1 min | sim |
| DI1SN | 532 | 528 | 09:03 ⚠ | 17:59 | 2 min | sim |
| IBOV | 491 | 494 | 10:02 ⚠ | 18:17 | 6 min ⚠ | sim |

> [!info]- O que cada coluna mede
> - **Candles M1**: quantos minutos o pregão trouxe. A **mediana** é a dos 10 pregões anteriores do mesmo ativo — abaixo de 99% dela, o pregão está curto.
> - **Primeiro**: a hora do primeiro candle. Mais tarde que o costume significa que o começo do pregão não chegou.
> - **Maior vão**: o maior intervalo sem candle **dentro** do pregão.
> - **D1 bate com M1**: a barra diária tem de ter a abertura do primeiro minuto, os extremos de todos os minutos e o fechamento do último. Quando não bate, um dos dois está errado.

### O que não está certo

- IBOV: vao de 6 min dentro do pregao de 2026.11.26 (18:11 -> 18:17)

## O que já foi publicado mudou?

Nenhum pregão anterior mudou nesta rodada. Os números publicados ontem continuam sendo os de hoje.

## Conta real × sinal

Pregão de 26/11/2026 · **3** sinal(is) da regra · **3** posição(ões) na conta.

### Operações que bateram

| Horário | Setup | Sinal (pts líq) | Conta (pts) | Contratos | Saída | Resultado |
|---|---|---:|---:|---:|---|---:|
| 10:14 | IFR de Tendência | 1.711,80 | 1.755 | 2 | alvo | R$ 702,00 |
| 11:14 | IFR de Tendência | -364,71 | -350 | 2 | stop | R$ -140,00 |
| 17:30 | Rompimento da Bollinger | 1.511,91 | — | 3 | alvo | R$ 855,00 |

A coluna do sinal é a simulação do site, com 2.000 contratos e preenchimento ideal; a da conta é o que aconteceu. Comparar reais seria comparar coisas diferentes — o que vale conferir é existência, horário e pontos por contrato.

Onde os pontos aparecem como **—**, a posição teve inversão (um negócio que fechou e abriu ao mesmo tempo) ou o volume de saída não bate com o de entrada. Nesses casos o preço médio de saída não representa a saída desta posição, e o ponto calculado dele seria falso; o resultado em reais continua exato, porque é somado negócio a negócio.

**Tudo que a regra mandou foi feito, e o robô não operou nada além disso.**

## Incidentes registrados

Cada vez que um pregão já publicado mudou, fica registrado aqui — mesmo depois de a causa ter sido corrigida.

| Registrado em | Pregão | O que mudou | Antes | Depois | Diferença |
|---|---|---|---|---|---:|
| 27/11/2026 12:24 | 26/11/2026 | operacoes tendencia-forte-do-dia | 3 op · 2.827,42 pts líq | 4 op · 4.469,58 pts líq | +1.642,17 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes primeira-vela-de-quinta | não havia | 1 op · 591,32 pts líq | +591,32 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes macd-na-tendencia | 1 op · 3.016,61 pts líq | 2 op · 3.001,61 pts líq | -15 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes ifr-de-tendencia | 2 op · 1.347,15 pts líq | 2 op · 1.347,09 pts líq | -0,06 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes fibo-50-do-dia | 1 op · 1.990 pts líq | deixou de existir | -1.990 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes explosao-da-bollinger | 1 op · 2.405 pts líq | 1 op · 2.410 pts líq | +5 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes adx-da-manha | 2 op · 1.952,63 pts líq | 2 op · 1.952,56 pts líq | -0,07 pts |
| 27/11/2026 12:24 | 2026.11.26 | serie WINSN | 550 candles · abertura 170.620 · mínima 170.570 | 562 candles · abertura 169.790 · mínima 169.340 | +12 candles |
| 27/11/2026 12:24 | 2026.11.26 | serie WDOSN | 554 candles · abertura 5.776 · máxima 5.780 | 570 candles · abertura 5.791,5 · máxima 5.795 | +16 candles |
| 27/11/2026 12:24 | 2026.11.26 | serie IBOV | máxima 177.024 | máxima 177.025 | preço revisado |
| 27/11/2026 12:24 | 2026.11.26 | serie DI1SN | 519 candles · abertura 14,695 · máxima 14,75 | 532 candles · abertura 14,745 · máxima 14,78 | +13 candles |

Os 15 mais recentes. A lista completa está em [incidentes.csv](auditoria/incidentes.csv).

## Histórico das medições

| Medido em | Pregão | Problemas | Pregões alterados |
|---|---|---:|---:|
| 27/11/2026 13:09 | 2026.11.26 | 1 | 0 |
| 27/11/2026 12:24 | 2026.11.26 | 1 | 5 |
| 27/11/2026 12:19 | 2026.11.26 | 1 | 5 |
| 27/11/2026 12:13 | 2026.11.26 | 1 | 0 |
| 27/11/2026 12:12 | 2026.11.26 | 1 | 5 |
| 27/11/2026 12:08 | 2026.11.26 | 1 | 5 |
| 27/11/2026 12:02 | 2026.11.27 | 12 | 5 |

As 20 medições mais recentes. O histórico completo está em [historico.csv](auditoria/historico.csv).

> [!quote]- Aviso
> Conteúdo educacional. Não constitui recomendação de investimento.

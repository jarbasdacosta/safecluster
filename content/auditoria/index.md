---
title: "Auditoria dos dados"
date: 2026-11-28
description: "A série do pregão chegou inteira? O que já foi publicado continua valendo? Medido todo dia, depois do fechamento."
---

# ⚠ 2 ponto(s) de atenção

*Medido em 28/11/2026 às 08:21 · último pregão no acervo: 27/11/2026*

Esta página responde três perguntas sobre os dados que alimentam os setups, todo dia, depois do fechamento. Ela não conserta nada — mede e avisa.

## A série do pregão chegou inteira?

| Ativo | Candles M1 | Mediana | Primeiro | Último | Maior vão | D1 bate com M1 |
|---|---:|---:|---|---|---:|---|
| WINSN | 563 | 565 | 09:03 ⚠ | 18:31 | 7 min ⚠ | sim |
| WDOSN | 567 | 570 | 09:03 ⚠ | 18:29 | 1 min | sim |
| DI1SN | 534 | 528 | 09:03 ⚠ | 17:59 | 2 min | sim |
| IBOV | 492 | 493 | 10:02 ⚠ | 18:18 | 6 min ⚠ | sim |

> [!info]- O que cada coluna mede
> - **Candles M1**: quantos minutos o pregão trouxe. A **mediana** é a dos 10 pregões anteriores do mesmo ativo — abaixo de 99% dela, o pregão está curto.
> - **Primeiro**: a hora do primeiro candle. Mais tarde que o costume significa que o começo do pregão não chegou.
> - **Maior vão**: o maior intervalo sem candle **dentro** do pregão.
> - **D1 bate com M1**: a barra diária tem de ter a abertura do primeiro minuto, os extremos de todos os minutos e o fechamento do último. Quando não bate, um dos dois está errado.

### O que não está certo

- WINSN: vao de 7 min dentro do pregao de 2026.11.27 (18:24 -> 18:31)
- IBOV: vao de 6 min dentro do pregao de 2026.11.27 (18:12 -> 18:18)

## O que já foi publicado mudou?

Nenhum pregão anterior mudou nesta rodada. Os números publicados ontem continuam sendo os de hoje.

## Conta real × sinal

Pregão de 27/11/2026 · **1** sinal(is) da regra · **1** posição(ões) na conta.

### Operações que bateram

| Horário | Setup | Sinal (pts líq) | Conta (pts) | Contratos | Saída | Resultado |
|---|---|---:|---:|---:|---|---:|
| 11:00 | IFR de Tendência | -381,18 | -365 | 2 | stop | R$ -146,00 |

A coluna do sinal é a simulação do site, com 2.000 contratos e preenchimento ideal; a da conta é o que aconteceu. Comparar reais seria comparar coisas diferentes — o que vale conferir é existência, horário e pontos por contrato.

**Tudo que a regra mandou foi feito, e o robô não operou nada além disso.**

## Incidentes registrados

Cada vez que um pregão já publicado mudou, fica registrado aqui — mesmo depois de a causa ter sido corrigida.

| Registrado em | Pregão | O que mudou | Antes | Depois | Diferença |
|---|---|---|---|---|---:|
| 27/11/2026 20:25 | 27/11/2026 | operacoes vai-na-onda | 1 op · -723,27 pts líq | 2 op · 1.776,73 pts líq | +2.500 pts |
| 27/11/2026 20:25 | 27/11/2026 | operacoes por-do-sol | não havia | 1 op · 15 pts líq | +15 pts |
| 27/11/2026 20:25 | 27/11/2026 | operacoes adx-da-manha | 1 op · 2.200 pts líq | 1 op · 2.379,14 pts líq | +179,14 pts |
| 27/11/2026 20:25 | 2026.11.27 | serie WINSN | 141 candles · mínima 181.910 · fechamento 181.950 | 563 candles · mínima 177.050 · fechamento 177.600 | +422 candles |
| 27/11/2026 20:25 | 2026.11.27 | serie WDOSN | 141 candles · máxima 5.562,5 · fechamento 5.536 | 567 candles · máxima 5.591,5 · fechamento 5.576,5 | +426 candles |
| 27/11/2026 20:25 | 2026.11.27 | serie IBOV | 82 candles · mínima 176.814 · fechamento 180.825 | 492 candles · mínima 175.899 · fechamento 176.573 | +410 candles |
| 27/11/2026 20:25 | 2026.11.27 | serie DI1SN | 141 candles · máxima 13,95 · fechamento 13,89 | 534 candles · máxima 13,97 · fechamento 13,93 | +393 candles |
| 27/11/2026 12:24 | 26/11/2026 | operacoes tendencia-forte-do-dia | 3 op · 2.827,42 pts líq | 4 op · 4.469,58 pts líq | +1.642,17 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes primeira-vela-de-quinta | não havia | 1 op · 591,32 pts líq | +591,32 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes macd-na-tendencia | 1 op · 3.016,61 pts líq | 2 op · 3.001,61 pts líq | -15 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes ifr-de-tendencia | 2 op · 1.347,15 pts líq | 2 op · 1.347,09 pts líq | -0,06 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes fibo-50-do-dia | 1 op · 1.990 pts líq | deixou de existir | -1.990 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes explosao-da-bollinger | 1 op · 2.405 pts líq | 1 op · 2.410 pts líq | +5 pts |
| 27/11/2026 12:24 | 26/11/2026 | operacoes adx-da-manha | 2 op · 1.952,63 pts líq | 2 op · 1.952,56 pts líq | -0,07 pts |
| 27/11/2026 12:24 | 2026.11.26 | serie WINSN | 550 candles · abertura 170.620 · mínima 170.570 | 562 candles · abertura 169.790 · mínima 169.340 | +12 candles |

Os 15 mais recentes. A lista completa está em [incidentes.csv](auditoria/incidentes.csv).

## Histórico das medições

| Medido em | Pregão | Problemas | Pregões alterados |
|---|---|---:|---:|
| 27/11/2026 20:25 | 2026.11.27 | 2 | 5 |
| 27/11/2026 13:32 | 2026.11.26 | 1 | 0 |
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

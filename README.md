[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/iqbalmaulana25/invent-a-word-afterlaugh/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/iqbalmaulana25/invent-a-word-afterlaugh/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)

# afterlaugh — Invent a Word We Need

An entry for the make.fun bounty
[Invent a Word We Need](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0):
coin one new English word and define it in a single clear line.

## The word

> **afterlaugh** (n.) — the laugh that slips out a beat after everyone else has stopped laughing.

Everyone knows the moment: the room has gone quiet, the joke has landed
and passed, and then — one laugh escapes, a beat too late. English has no
word for it. Now it does.

## How it works

`main.ts` writes the entry (one line, under 140 characters) to
`/output/entry.txt`. It validates the length against the competition gate
(1–140 characters, not only white space) before writing, so an invalid
entry fails loudly instead of being submitted.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (TypeScript runs as-is).

# INFINIZOOM

Turn almost anything into a procedural infinite-zoom experience.

## Use

With an agent that can use the bundled skill:

```text
INFINIZOOM a Rolex Submariner
```

or:

```text
INFINIZOOM GitHub from repository → source code → AST → machine instruction → transistor
```

Local fallback:

```bash
bun install
bun run infinizoom -- "Rolex Submariner"
bun run server -- rolex-submariner
```

Open `http://localhost:3000`.

## Architecture

- `skills/infinizoom/SKILL.md` — authoring + QA brain
- `projects/*/project.json` — zoom graphs
- `src/schema.ts` — project schema
- `src/validate.ts` — structural and quality gates
- `src/author.ts` — local fallback author
- `src/render/registry.ts` — renderer registry
- `src/render/primitives.ts` — reusable render primitives
- `src/client.ts` — interactive Three.js runtime
- `src/server.ts` — Bun preview server
- `ENGINE_LAWS.md` — permanent engine laws

## Commands

```bash
bun run infinizoom -- "Chicken tender"
bun run validate -- projects/chicken-tender/project.json
bun run inspect -- projects/chicken-tender/project.json
bun run server -- chicken-tender
bun run check
```

## Controls

- W — travel deeper
- S — travel back out
- A / D — choose branch
- drag — look around

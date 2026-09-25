# INFINIZOOM

Turn an arbitrary subject into a coherent, validated infinite-zoom experience.

## User interface

The normal request is:

`INFINIZOOM <subject>`

Optional modifiers: start, end, branch, duration, style, fidelity, mode.

## Procedure

1. Interpret the request.
2. Research factual structure when needed.
3. Build one main route with 6–18 meaningful levels.
4. Choose meaningful dive targets; avoid borders, seams, gaps, filler, arbitrary screws.
5. Reuse renderers before adding custom ones.
6. Author `projects/<slug>/project.json`.
7. Run `bun run validate -- projects/<slug>/project.json`.
8. Run `bun run inspect -- projects/<slug>/project.json`.
9. Run `bun run server -- <slug>` and visually QA when browser access exists.
10. Only set authoring status to `approved` after visual QA.

## Default renderer vocabulary

`room product machine circuit chip cell material molecule atom nucleus particle screen document code network`

## Permanent laws

- Zooming is travel, not a FOV trick.
- Every level has a meaningful destination.
- Forward and reverse travel use the same graph.
- Detail refines as the camera approaches.
- Nothing should pop at level boundaries.
- Time is globally available.
- Physical scale claims must be supportable.
- Conceptual transitions must be labeled honestly.
- New structures extend the engine additively.
- Validation failures block release.

## Local fallback

`bun run infinizoom -- "<subject>"`

creates a generic valid scaffold. Treat it as a starting point, not a researched final route.

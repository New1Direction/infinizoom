# INFINIZOOM Engine Laws

1. Track position `t` is the canonical travel state.
2. Project structure is explicit data, never hidden scene state.
3. Every level has a meaningful visual destination.
4. Forward and reverse travel are symmetric.
5. Physical routes progress monotonically in scale where scale is specified.
6. Outward routes progress monotonically toward larger scales.
7. The camera path uses purposeful curves and should not terminate on empty composition.
8. Shell penetration should be handled with smooth fades in production renderers.
9. Detail should refine rather than pop or coarsen as a target approaches.
10. No visible z-fighting or coincident translucent surfaces in production renderers.
11. Time is globally available for deterministic animation at any depth.
12. Motion should communicate function when possible.
13. Scale labels must be truthful; omit uncertain values instead of inventing precision.
14. Branches are explicit route graph structure.
15. Routes may reconverge when semantically or physically correct.
16. New subjects extend renderer coverage additively.
17. Project-specific code is a last resort; prefer reusable renderers.
18. Same config + same time + same seed must render the same procedural result.
19. Validation failures block release.
20. A visually impressive but structurally false zoom is a failed project when fidelity is requested.

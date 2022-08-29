# Smooth Linear Hatch Transitions

In a generative art series I worked on in mid-2022 called [Hatchet](https://www.fxhash.xyz/u/bupedev), I filled polygons arranged in symmetric patterns with hatch lines of varying density. If you study any of the pieces in the Hatchet series, you may notice that as polygons move further from the center, they become less 'filled'. I spent a considerable amount of time refining the optimal spacing of these hatch lines such that the transition between polygon fill density was as smooth as possible. You can do quite a bit with some highschool geometry, allow me to share my learnings.

{% include ext-figure.html caption="Hatchet: Magarikuneri #31" link="https://www.fxhash.xyz/gentk/921437" url="https://gateway.fxhash2.xyz/ipfs/QmTaVGkyD6ash7m7F3GWKsr2sxDi4jTy1nj41ABKPa3jqW/?fxhash=opTQWCNFvw6PSv1BzPAkZhEFuoFwaZui5Gnd1SGLYGgbgrAWrrg"%}

## The Problem - Non Linear Hatch Transitions

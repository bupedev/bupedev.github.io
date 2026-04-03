---
title: Introducing the blog
publishedAt: 2026-04-02
tags:
  - astro
  - markdown
  - math
---

This site now has a proper blog backed by plain markdown. That keeps writing lightweight while still supporting technical posts with code, references, and notation.[^why-markdown]

## Image with caption


This paragraph is intentionally long so you can see text wrapping around an image in the blog flow. If you prefer a more editorial style post layout, floating a figure like this can break up dense sections and keep the reading rhythm tighter without needing full-width media breaks.

You can move the same pattern to the left with a different class, or clear the float before the next section if you want strict section boundaries. This gives you the option to mix narrative text and imagery without switching to custom Astro components.

<figure class="blog-figure-wrap-right blog-figure-card">
  <img src="../../assets/images/art/hatchet_magarikuneri_n050.png" alt="Hatchet: Magarikuneri #50 generative artwork" />
  <figcaption>Hatchet: Magarikuneri #50 - linked artwork from the home page feature.</figcaption>
</figure>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non nisl tortor. Donec varius augue sed sem eleifend venenatis. Praesent porta tincidunt semper. Nulla in ornare mi. In ac neque et turpis mattis molestie ac in lacus. Nam mattis mi eu molestie aliquet. Integer varius venenatis arcu vitae faucibus. Donec porttitor scelerisque accumsan. Etiam tristique tortor aliquet quam sodales, eu eleifend eros varius. Etiam pretium lectus id purus lobortis, at ultricies ipsum suscipit. Vestibulum sed sem eu tortor gravida fringilla. Fusce blandit nisi nec magna tincidunt blandit. Duis semper molestie rutrum.

Nunc posuere facilisis bibendum. Proin ut odio vehicula metus feugiat aliquam sed a magna. Pellentesque luctus lacus diam, varius porttitor neque malesuada sit amet. Aenean diam ipsum, tincidunt vel nibh blandit, lobortis malesuada nulla. Aenean id lacus sit amet est tempor euismod. Nam consectetur ultrices erat at bibendum. Fusce porta, arcu eu porta iaculis, purus libero eleifend dolor, sit amet dapibus libero neque sit amet libero.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus mollis ligula vel ornare euismod. Suspendisse id lacinia mi. Nunc at accumsan nisl, id tempus felis. Etiam feugiat egestas nibh. Quisque vehicula molestie condimentum. Mauris dictum feugiat feugiat. Donec vestibulum, purus vitae placerat fermentum, libero enim sagittis erat, vitae pellentesque tortor neque eget nisi. Suspendisse nec sagittis ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis consequat metus vitae viverra. Cras id ornare orci. Phasellus fermentum nisi vel nisi finibus, vitae tristique nunc volutpat. Proin lacinia vulputate pretium.

Aliquam sed accumsan tortor. Sed semper, mauris eget euismod pretium, magna metus dignissim purus, eleifend iaculis ex diam et quam. Cras tempus enim dolor, eget condimentum dolor lobortis vitae. Nullam euismod dolor eu odio iaculis rutrum. Cras finibus erat id libero pharetra, et sagittis nunc tempor. Donec porttitor augue quis nulla tincidunt, a tempus velit maximus. Etiam molestie viverra feugiat. Vivamus ornare felis sem, in rhoncus magna consequat et. Curabitur augue augue, lobortis sed leo sed, vestibulum iaculis urna. Vestibulum laoreet lacus nec nibh vestibulum, in pulvinar mi cursus. Integer sed augue a est vehicula egestas a ac nunc. Aenean mattis euismod est, eget ultrices felis euismod nec. Aliquam vel nunc vel turpis fringilla commodo quis sit amet eros. Proin non dapibus felis. Fusce purus leo, vestibulum non magna ac, faucibus condimentum ligula.

Nullam tempor blandit consectetur. Suspendisse bibendum urna eu leo convallis laoreet. Etiam eleifend metus in augue condimentum, non aliquet magna mollis. Phasellus faucibus elit at suscipit posuere. In varius luctus euismod. Nulla aliquet at elit sit amet semper. Donec rhoncus, nunc eu blandit venenatis, dui odio tincidunt leo, quis laoreet arcu neque vel est. Curabitur at feugiat purus, in gravida leo. Praesent vitae tortor nec nunc vehicula hendrerit vel sed tortor. Sed imperdiet aliquam diam, et dictum sem accumsan interdum. Aliquam erat volutpat.


<div class="blog-float-clear"/>

## Code snippets

Fenced code blocks work as expected:

```ts
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
```

## Math blocks

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non nisl tortor. Donec varius augue sed sem eleifend venenatis. Praesent porta tincidunt semper. Nulla in ornare mi. In ac neque et turpis mattis molestie ac in lacus. Nam mattis mi eu molestie aliquet. Integer varius venenatis arcu vitae faucibus. Donec porttitor scelerisque accumsan. Etiam tristique tortor aliquet quam sodales, eu eleifend eros varius. Etiam pretium lectus id purus lobortis, at ultricies ipsum suscipit. Vestibulum sed sem eu tortor gravida fringilla. Fusce blandit nisi nec magna tincidunt blandit. Duis semper molestie rutrum.

Nunc posuere facilisis bibendum. Proin ut odio vehicula metus feugiat aliquam sed a magna. Pellentesque luctus lacus diam, varius porttitor neque malesuada sit amet. Aenean diam ipsum, tincidunt vel nibh blandit, lobortis malesuada nulla. Aenean id lacus sit amet est tempor euismod. Nam consectetur ultrices erat at bibendum. Fusce porta, arcu eu porta iaculis, purus libero eleifend dolor, sit amet dapibus libero neque sit amet libero.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus mollis ligula vel ornare euismod. Suspendisse id lacinia mi. Nunc at accumsan nisl, id tempus felis. Etiam feugiat egestas nibh. Quisque vehicula molestie condimentum. Mauris dictum feugiat feugiat. Donec vestibulum, purus vitae placerat fermentum, libero enim sagittis erat, vitae pellentesque tortor neque eget nisi. Suspendisse nec sagittis ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis consequat metus vitae viverra. Cras id ornare orci. Phasellus fermentum nisi vel nisi finibus, vitae tristique nunc volutpat. Proin lacinia vulputate pretium.

Aliquam sed accumsan tortor. Sed semper, mauris eget euismod pretium, magna metus dignissim purus, eleifend iaculis ex diam et quam. Cras tempus enim dolor, eget condimentum dolor lobortis vitae. Nullam euismod dolor eu odio iaculis rutrum. Cras finibus erat id libero pharetra, et sagittis nunc tempor. Donec porttitor augue quis nulla tincidunt, a tempus velit maximus. Etiam molestie viverra feugiat. Vivamus ornare felis sem, in rhoncus magna consequat et. Curabitur augue augue, lobortis sed leo sed, vestibulum iaculis urna. Vestibulum laoreet lacus nec nibh vestibulum, in pulvinar mi cursus. Integer sed augue a est vehicula egestas a ac nunc. Aenean mattis euismod est, eget ultrices felis euismod nec. Aliquam vel nunc vel turpis fringilla commodo quis sit amet eros. Proin non dapibus felis. Fusce purus leo, vestibulum non magna ac, faucibus condimentum ligula.

Nullam tempor blandit consectetur. Suspendisse bibendum urna eu leo convallis laoreet. Etiam eleifend metus in augue condimentum, non aliquet magna mollis. Phasellus faucibus elit at suscipit posuere. In varius luctus euismod. Nulla aliquet at elit sit amet semper. Donec rhoncus, nunc eu blandit venenatis, dui odio tincidunt leo, quis laoreet arcu neque vel est. Curabitur at feugiat purus, in gravida leo. Praesent vitae tortor nec nunc vehicula hendrerit vel sed tortor. Sed imperdiet aliquam diam, et dictum sem accumsan interdum. Aliquam erat volutpat.

Inline math also renders: $e^{i\pi} + 1 = 0$.

Display math is useful when the expression deserves space:

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

## Footnotes Two

Footnotes are available for citations, side remarks, and asides.[^footnotes]

[^why-markdown]: Plain markdown keeps authoring simple and portable.
[^footnotes]: This support comes through Astro's markdown pipeline with GitHub-flavored markdown enabled.

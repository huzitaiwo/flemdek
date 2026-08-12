import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge has to be taught this project's type scale.
 *
 * Its default config decides whether a `text-*` class is a font size or a text
 * colour by inspecting the value: `text-sm` and `text-[17px]` look like sizes,
 * anything else is treated as a colour. The scale in `globals.css` is named
 * semantically (`text-nav`, `text-h4`, `text-body`), so every step was being
 * filed as a colour and then discarded as a conflict against the real colour
 * beside it — `text-nav text-ink-muted` collapsed to `text-ink-muted`, and
 * `text-accent-contrast` was stripped from every accent button, leaving its
 * label inheriting ink instead of white.
 *
 * Declaring the scale here is the whole fix: sizes and colours land in
 * separate groups, so both survive and genuine conflicts still resolve
 * last-wins. Keep this list in step with the `--text-*` tokens.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "h1",
            "h2",
            "h3",
            "h4",
            "body-lg",
            "body",
            "body-sm",
            "nav",
            "meta",
            "label",
          ],
        },
      ],
    },
  },
});

/**
 * Merge conditional class names and resolve conflicting Tailwind utilities.
 *
 * Layout primitives accept a `className` prop so callers can adjust them per
 * composition. Without a conflict-aware merge, a caller-supplied `py-0` would
 * lose to the primitive's own `py-*` depending on stylesheet order.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

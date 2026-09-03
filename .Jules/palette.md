## 2025-03-03 - WAI-ARIA Keyboard Navigation for Custom Carousels

**Learning:** Interactive carousel components with `role="region"` or `role="roledescription"` often implement horizontal arrow navigation, but omitting `Home` and `End` key bindings creates a friction point for keyboard/screen-reader users who need quick jump points to boundary items in longer galleries.
**Action:** Always include `Home` (jump to first item) and `End` (jump to last item) key event handlers alongside `ArrowLeft`/`ArrowRight` when implementing custom interactive carousel components.

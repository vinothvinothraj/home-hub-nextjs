# Home Hub Upgrade Plan

## Current Status

- Next.js app is already set up and production build now passes.
- Existing content is present for `Home`, `Products`, `About`, and `Contact`.
- Product data is hardcoded in `data/products.ts`, which is good for the first phase.
- The app already has a base design system, but the visual style needs to feel more polished, modern, and consistent.

## Primary Goals

- Make the whole app look more professional and trustworthy.
- Improve UI/UX across all pages without removing existing content.
- Make the layout more responsive and mobile-friendly.
- Use a stronger gradient-based visual language across the app.
- Improve hero sections so they feel premium and balanced.
- Keep product data hardcoded for now, but structure it so adding new products later is easier.
- Replace weak or repetitive visual choices with more realistic product imagery.

## Important Constraints

- Keep the app content complete. Do not remove sections unless they are duplicated or broken.
- Keep product data in a hardcoded file for now.
- Use images that are already available in the project first.
- If remote images are added later, update `next.config.mjs` for allowed domains.
- The app should stay buildable after every major change.

## Design Direction

- Use a warm, premium home-store look instead of flat default blues.
- Build around layered gradients, soft shadows, glass-like cards, and clean spacing.
- Use consistent border radius and spacing across cards, banners, and buttons.
- Prefer darker text on light cards and high-contrast white text on hero sections.
- Keep buttons, badges, and section headings visually consistent.

## Page-by-Page Improvements

### Home Page

- Rework the hero section to feel more balanced and high-end.
- Add stronger overlay gradients so text is always readable.
- Make the hero CTAs more visible and action-driven.
- Improve the category grid with richer cards, better hover states, and clearer labels.
- Update featured product cards so they feel more premium and easier to scan.
- Add a stronger “Why Choose Us” section with more polished cards and spacing.
- Keep the homepage content structure, but refine typography and hierarchy.

### Products Page

- Improve filtering and browsing layout.
- Make the product grid more flexible for mobile and tablet screens.
- Add clearer category presentation and stronger empty-state feedback.
- Make product cards more consistent with the home page.
- Add clearer spacing for the product detail entry points.

### Product Detail Page

- Make the detail layout more polished and easier to scan.
- Improve product image presentation and supporting information hierarchy.
- Highlight price, rating, stock, and specs more clearly.
- Add a more reliable “add product” friendly structure so future hardcoded items fit cleanly.

### About Page

- Improve the hero section so it matches the rest of the new visual system.
- Use stronger section spacing and more modern information blocks.
- Make the trust and achievements sections feel less generic.

### Contact Page

- Turn the page into a more polished contact experience.
- Improve form spacing, input styling, and support info cards.
- Make the map and contact details feel integrated instead of separated.

## Product Data Improvements

- Keep `data/products.ts` as the main hardcoded source for now.
- Split products into cleaner groups if needed, but keep the structure simple.
- Add more realistic image paths for products and hero content.
- Replace repeated placeholder images with distinct images per product where possible.
- Add helper fields later only if they help layout or filtering.

## Image Plan

- Use the existing local images in `/public/images` for the first pass.
- Improve product variety by assigning more relevant images to each category.
- For a future pass, add remote Google-hosted images only after remote image config is allowed.
- Make sure every image has a strong aspect ratio and looks good on mobile.

## Visual System

- Background: full-page gradient atmosphere instead of plain white sections.
- Cards: soft elevation, subtle borders, and slightly tinted surfaces.
- Buttons: primary gradient buttons with clear hover/focus states.
- Badges: compact, high-contrast labels for category, stock, and rating.
- Typography: stronger heading scale, better line height, and cleaner spacing.

## Mobile UX

- Make nav, hero, cards, and sections adapt cleanly to small screens.
- Reduce overly tall hero blocks on phones.
- Keep tap targets large enough for thumb use.
- Avoid dense multi-column layouts on mobile unless they collapse gracefully.
- Make product cards and content sections stack naturally.

## Build And Quality Checks

- Run `corepack pnpm build` after every major set of edits.
- Run lint if code changes are made.
- Check the app on desktop and mobile widths before finalizing.
- Confirm the home page, product listing, product detail page, about page, and contact page still show all required content.

## Suggested Implementation Order

1. Global visual refresh in `app/globals.css` and `app/layout.tsx`.
2. Home page hero, category, and featured product redesign.
3. Product card and product detail improvements.
4. About and contact page polish.
5. Data cleanup in `data/products.ts` for better product variety.
6. Final responsive pass and build verification.

## Acceptance Criteria

- The app builds successfully.
- All existing pages still render their original content.
- The design looks more premium and cohesive.
- The app feels better on mobile.
- Hardcoded product data is still in place and easier to expand later.
- The visual system uses gradients, better spacing, and more realistic product presentation.

## Next Step

- Use this file as the roadmap for the redesign pass.
- After approval, start with the global style and homepage refresh first.

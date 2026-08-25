# hbd-cake

Birthday page with a cake you can blow out, then a letter at the end.

Copy and photos are in `src/config.js`. Put images in `public/` and point `letter.photo` at them, e.g. `/photo-1.jpg`.

## Run

```bash
npm install
npm run dev
```

`npm run build` makes a static site in `dist/`. `npm run preview` serves that build locally.

## Flow

1. Tap each candle
2. After the last one, confetti and “Wish granted”
3. Open the letter

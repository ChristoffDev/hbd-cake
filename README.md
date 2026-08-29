# hbd-cake

Birthday page with a cake you can blow out, then a letter at the end.

Copy and photos are in `src/config.js`. Put images in `public/` and point `letter.photo` at them, e.g. `/photo-1.jpg`. The looping song is `public/music/libu-libong-buwan.mp3`; it starts when she pulls the curtain rope. Use the ♪ button to mute it.

## Run

```bash
npm install
npm run dev
```

`npm run build` makes a static site in `dist/`. `npm run preview` serves that build locally.

## Flow

1. Pull the curtain rope to open
2. Tap each candle
3. After the last one, confetti and “Wish granted”
4. Open the letter

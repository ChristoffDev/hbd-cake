// All of the copy lives here so you can edit the site without touching React.

export const birthdayConfig = {
    // First screen, before she opens the cake
    cover: {
        kicker: 'a little something',
        title: 'For you, Love',
        hint: 'Pull',
        volumeTip: 'Turn the volume up',
    },

    // Header before the candles are out
    kicker: 'with all my love',
    title: 'Happy Birthday, My Love ❤️',
    wishPrompt: 'Make a wish...',

    // Hint under the cake
    blowHint: 'Tap a candle to blow it out',

    // Header after the last candle
    wishGranted: 'Wish granted! ✨',
    wishGrantedNote: 'I hope it was a sweet one.',
    surpriseButton: 'Open My Letter 💌',

    // Starts when she opens the cover. File is in public/music/
    song: '/music/libu-libong-buwan.mp3',

    // Shown after she opens the letter. Photo files go in /public.
    letter: {
        greeting: 'Hi Love,',
        paragraphs: [
            'Happy happy birthday. I hope you always remain the person you are. Love kaayo tika. I hope nga on this day, happy ra gyud ka. I hope you have many more birthdays to come. ❤️',
            'I hope this year brings you more happiness and good things. I hope you get to enjoy many more happy moments, and I hope I can be there to share them with you.',
            'Happy birthday again, Love. Thank you for letting me be part of your life. I love you always. ❤️',
        ],
        signOff: 'Forever yours,',
        from: 'Christoff',
        photo: '/photo-1.jpg',
        photoAlt: 'A photo of us together',
        floaterTip: 'You can pop the balloons and hearts by tapping them',
    },
}
// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Carly",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Lotus Valentine? 🪷💜",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🪷', '💜', '🌸', '✨', '💕'],  // Lotus and soft romantic emojis
        bears: ['🪷', '🌷']                       // Lotus and floral accents
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! You're my lotus love! 🪷💜✨",
        message: "Now come get your gift: a big warm hug and a huge kiss!",
        emojis: "🪷💜🌸✨💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#E9D5FF",      // Soft pastel purple gradient start
        backgroundEnd: "#D6BCFA",        // Complementary pastel purple gradient end
        buttonBackground: "#B794F4",     // Pastel purple button color
        buttonHover: "#C4A3F7",          // Slightly lighter hover purple
        textColor: "#6B46C1"             // Readable purple text color
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Fallback single music URL
        tracks: [
            {
                title: "Sky (Falling for You) — Whatsaheart",
                url: "https://res.cloudinary.com/dh4c3vc7r/video/upload/v1770887150/whatsaheart_-_sky_falling_for_you_LYRIC_VIDEO_z7wrpi.mp3"
            },
            {
                title: "For Her — Whatsaheart",
                url: "YOUR_FOR_HER_URL_HERE"
            },
            {
                title: "Like Me — Whatsaheart",
                url: "YOUR_LIKE_ME_URL_HERE"
            },
            {
                title: "Starboy — The Weeknd",
                url: "YOUR_STARBOY_URL_HERE"
            },
            {
                title: "Snakelike (The Stars Collide) — Whatsaheart",
                url: "YOUR_SNAKELIKE_URL_HERE"
            }
        ],
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

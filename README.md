# 💝 Valentine's Day Website 2026 💝

[![Stars](https://img.shields.io/github/stars/End2EndAI/valentine-website-2025?style=social)](https://github.com/End2EndAI/valentine-website-2025/stargazers)
[![Fork](https://img.shields.io/github/forks/End2EndAI/valentine-website-2025?style=social)](https://github.com/End2EndAI/valentine-website-2025/fork)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Support me](https://img.shields.io/badge/Support-Stripe-blue)](https://buy.stripe.com/bJefZa8Le7fvgDe3ric7u00)

A beautiful, interactive Valentine's Day website generator to ask your special someone to be your Valentine! Create your own personalized version in minutes. Perfect for Valentine's Day 2026! 💝
Follow below the tutorial how to custom the website and get your custom URL and access your website on the internet from everywhere !

🌟 **[Live Demo](https://end2endai.github.io/valentine-website-2025)** | 🚀 **[Quick Start](#-quick-start-guide)** | 🌐 **[Deploy Your Website](#4-make-it-live-get-your-online-website-url)**

## 🌟 Share The Love

If you liked it, please :
- ⭐ Star this repository if you like it
- 🔄 Fork it to create your own version
- 🔥 Like and follow on instagram for more websites : [Instagram](https://www.instagram.com/reel/DFh3ZaxtrYX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)

## ✨ Features
- 💖 Floating hearts and bears
- 🎵 Custom music
- 📏 Love meter that goes beyond 100%
- 🏃‍♂️ Playful buttons that run away
- 🎁 Hidden answer for the first question, "Do you like me?"
- 🎉 Grand celebration when they say yes!

## 🚀 Quick Start Guide

### 1. Get Your Own Copy
1. Click the "Fork" button at the top right of this page or [click here](https://github.com/End2EndAI/valentine-website-2025/fork)
2. Wait a few seconds while GitHub creates your copy
3. You now have your own version of the code!

Note: Make sure you're logged into your GitHub account. If you don't have one, you can [create a free account here](https://github.com/signup).

### 2. Customize for Your Valentine

#### Easy Way (Recommended)
1. In your new repository, click on `config.js`
2. Click the pencil icon (✏️) to edit
3. Change the values to personalize your website
4. Click "Commit changes" at the bottom

Here's what you can customize in `config.js`:
```javascript
diff --git a/script.js b/script.js
index 6bec45c7e62d74835f452d4dcd1069ce039a1b9f..5d1ba2061cd433e0675a958c95780c47cda09ab2 100644
--- a/script.js
+++ b/script.js
@@ -191,52 +191,103 @@ function celebrate() {
 // Create heart explosion animation
 function createHeartExplosion() {
     for (let i = 0; i < 50; i++) {
         const heart = document.createElement('div');
         const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
         heart.innerHTML = randomHeart;
         heart.className = 'heart';
         document.querySelector('.floating-elements').appendChild(heart);
         setRandomPosition(heart);
     }
 }
 
 // Music Player Setup
 function setupMusicPlayer() {
     const musicControls = document.getElementById('musicControls');
     const musicToggle = document.getElementById('musicToggle');
     const bgMusic = document.getElementById('bgMusic');
     const musicSource = document.getElementById('musicSource');
 
     // Only show controls if music is enabled in config
     if (!config.music.enabled) {
         musicControls.style.display = 'none';
         return;
     }
 
-    // Set music source and volume
-    musicSource.src = config.music.musicUrl;
+    const tracks = Array.isArray(config.music.tracks)
+        ? config.music.tracks.filter(track => track && track.url && !track.url.includes('YOUR_'))
+        : [];
+
+    let currentTrackIndex = 0;
+
+    const setTrack = (index) => {
+        if (tracks.length === 0) {
+            musicSource.src = config.music.musicUrl;
+            bgMusic.loop = true;
+            musicToggle.textContent = bgMusic.paused ? config.music.startText : config.music.stopText;
+            return;
+        }
+
+        currentTrackIndex = (index + tracks.length) % tracks.length;
+        musicSource.src = tracks[currentTrackIndex].url;
+        bgMusic.loop = false;
+
+        const currentTitle = tracks[currentTrackIndex].title || `Track ${currentTrackIndex + 1}`;
+        const prefix = bgMusic.paused ? '🎵' : '🔇';
+        const action = bgMusic.paused ? 'Play' : 'Pause';
+        musicToggle.textContent = `${prefix} ${action}: ${currentTitle}`;
+    };
+
+    setTrack(0);
     bgMusic.volume = config.music.volume || 0.5;
     bgMusic.load();
 
+    bgMusic.addEventListener('ended', () => {
+        if (tracks.length > 1) {
+            setTrack(currentTrackIndex + 1);
+            bgMusic.load();
+            bgMusic.play().catch(() => {
+                musicToggle.textContent = `🎵 Play: ${tracks[currentTrackIndex].title}`;
+            });
+        }
+    });
+
     // Try autoplay if enabled
     if (config.music.autoplay) {
         const playPromise = bgMusic.play();
         if (playPromise !== undefined) {
-            playPromise.catch(error => {
+            playPromise.then(() => {
+                if (tracks.length > 0) {
+                    musicToggle.textContent = `🔇 Pause: ${tracks[currentTrackIndex].title}`;
+                } else {
+                    musicToggle.textContent = config.music.stopText;
+                }
+            }).catch(() => {
                 console.log("Autoplay prevented by browser");
-                musicToggle.textContent = config.music.startText;
+                if (tracks.length > 0) {
+                    musicToggle.textContent = `🎵 Play: ${tracks[currentTrackIndex].title}`;
+                } else {
+                    musicToggle.textContent = config.music.startText;
+                }
             });
         }
     }
 
     // Toggle music on button click
     musicToggle.addEventListener('click', () => {
         if (bgMusic.paused) {
             bgMusic.play();
-            musicToggle.textContent = config.music.stopText;
+            if (tracks.length > 0) {
+                musicToggle.textContent = `🔇 Pause: ${tracks[currentTrackIndex].title}`;
+            } else {
+                musicToggle.textContent = config.music.stopText;
+            }
         } else {
             bgMusic.pause();
-            musicToggle.textContent = config.music.startText;
+            if (tracks.length > 0) {
+                musicToggle.textContent = `🎵 Play: ${tracks[currentTrackIndex].title}`;
+            } else {
+                musicToggle.textContent = config.music.startText;
+            }
         }
     });
-} 
\ No newline at end of file
+}

```

### 3. Adding Your Own Background Music 🎵

Want to make it extra special with your own romantic song? Follow these steps to add background music:

1. **Get a Cloudinary Account (Free):**
   - Go to [Cloudinary.com](https://cloudinary.com) and sign up for a free account

2. **Upload Your Music:**
   - Log in to your Cloudinary dashboard
   - Click on the "Upload" button in the top right
   - Select "Upload" from the dropdown menu
   - Choose your MP3 file (keep it under 10MB for better loading)
   - Wait for the upload to complete

3. **Get Your Music URL:**
   - After upload, find your music file in the Media Library
   - Click the "..." (more options) button on your music file
   - Click "Copy URL"
   - Select "Copy Original URL with options"
   - The URL should look like: `https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/your-file-name.mp3`

4. **Add to Your Website:**
   - Open `config.js`
   - Find the `music` section
   - Replace the `musicUrl` value with your Cloudinary URL

```javascript
music: {
    enabled: true,
    autoplay: true,
    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your URL here
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
}
```

### 4. Make It Live! (Get your online website URL)

#### Using GitHub Pages (Free)
1. Go to your repository's "Settings"
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes
6. Your site will be live at: `https://your-username.github.io/repository-name`

#### Using Netlify (Free, Recommended, Custom URL)
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up for a free account
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. Click "Deploy site"
6. Once deployed, click "Domain settings"
7. Choose a custom domain (e.g., `my-valentine-2025.netlify.app`)

## 💡 Tips
- Test the website before sending it to your Valentine
- Try all the buttons and interactions
- Check how it looks on mobile phones

## 🎨 Want Different Colors?
Use these tools to find beautiful colors:
- [Coolors](https://coolors.co/) - Color palette generator
- [ColorHunt](https://colorhunt.co/) - Color palettes

## 🔍 Need More Emojis?
Find more emojis at:
- [EmojiKeyboard](https://emojikeyboard.top/fr/)
- [Emojipedia](https://emojipedia.org/)

## 💖 Credits
Created with love for Valentine's Day 2026.
Feel free to use and modify for your special someone!

\- Louis Fontaine -

## ❤️ Support this project

This Valentine website template is completely **free and open-source**.

If it helped you create something special, you can support the project with a small donation:

👉 [Tip](https://buy.stripe.com/bJefZa8Le7fvgDe3ric7u00)

Thank you for keeping it alive!

## 📜 License
MIT License - Feel free to use this for your Valentine! 

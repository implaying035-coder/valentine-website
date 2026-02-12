diff --git a/README.md b/README.md
index 134f0f2a648b9b311a4e1bbdc748c07e8bea33b6..3aa8f440a38b222d744a7cf13f85d3664cbb9888 100644
--- a/README.md
+++ b/README.md
@@ -87,94 +87,108 @@ celebration: {
     message: "Now come get your gift...",          // Celebration message
     emojis: "🎁💖🤗💝💋❤️💕"                        // Celebration emojis
 }
 
 // Website Colors
 colors: {
     backgroundStart: "#ffafbd",      // Background gradient start
     backgroundEnd: "#ffc3a0",        // Background gradient end
     buttonBackground: "#ff6b6b",     // Button color
     buttonHover: "#ff8787",          // Button hover color
     textColor: "#ff4757"            // Text color
 }
 
 // Animation Settings
 animations: {
     floatDuration: "15s",           // How long hearts float (10-20s)
     floatDistance: "50px",          // Sideways movement (30-70px)
     bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
     heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
 }
 
 // Music Settings
 music: {
     enabled: true, // Music feature is enabled
     autoplay: true, // Try to autoplay (note: some browsers may block this)
-    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your music URL here
+    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Fallback single track URL
+    tracks: [ // Optional playlist (rotates automatically)
+        { title: "Sky (Falling for You) — Whatsaheart", url: "YOUR_TRACK_URL_1" },
+        { title: "For Her — Whatsaheart", url: "YOUR_TRACK_URL_2" }
+    ],
     startText: "🎵 Play Music", // Button text to start music
     stopText: "🔇 Stop Music", // Button text to stop music
     volume: 0.5 // Volume level (0.0 to 1.0)
 }
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
-    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your URL here
+    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Fallback URL if playlist is empty
+    tracks: [
+        { title: "Sky (Falling for You) — Whatsaheart", url: "YOUR_TRACK_URL_1" },
+        { title: "For Her — Whatsaheart", url: "YOUR_TRACK_URL_2" },
+        { title: "Like Me — Whatsaheart", url: "YOUR_TRACK_URL_3" },
+        { title: "Starboy — The Weeknd", url: "YOUR_TRACK_URL_4" },
+        { title: "Snakelike (The Stars Collide) — Whatsaheart", url: "YOUR_TRACK_URL_5" }
+    ],
     startText: "🎵 Play Music",
     stopText: "🔇 Stop Music",
     volume: 0.5
 }
 ```
 
+
+> ✅ **Playlist tip:** Add direct `.mp3` URLs in `music.tracks` to make the player auto-rotate through songs.
+
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

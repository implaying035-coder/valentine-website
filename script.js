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

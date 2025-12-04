# How to Change Screenshots and App Icon

## 📱 Changing App Screenshots

Currently, the screenshots are **hardcoded mockups** in the `Screenshots.tsx` component. You have two options:

### Option 1: Use Real Screenshot Images (Recommended)

1. **Prepare Your Screenshots:**
   - Take screenshots of your actual app
   - Recommended dimensions: **1080x2340px** (standard Android resolution)
   - Save them as PNG or WebP for best quality
   - Name them clearly: `screenshot1.png`, `screenshot2.png`, `screenshot3.png`

2. **Add Images to Project:**
   - Place your screenshots in the `public/` folder:
     ```
     public/
       ├── screenshot1.png
       ├── screenshot2.png
       └── screenshot3.png
     ```

3. **Update strings.json:**
   Add a screenshots section in `src/config/strings.json`:
   ```json
   {
     "screenshots": {
       "player": "/screenshot1.png",
       "playlist": "/screenshot2.png",
       "equalizer": "/screenshot3.png"
     }
   }
   ```

4. **Update Screenshots Component:**
   - Open `src/components/landing/Screenshots.tsx`
   - Replace the hardcoded mockup divs with actual images
   - Use the paths from `strings.json`

### Option 2: Keep Mockups But Customize Them

If you want to keep the current mockup style but customize it:
- Edit `src/components/landing/Screenshots.tsx`
- Change the song name (line 56): `"Neon Nights"` → Your song name
- Change the artist name (line 57): `"Future City"` → Your artist name
- Modify colors in the gradient background (line 52)

## 🎨 Changing App Icon

### 1. Prepare Your Icon

- **Size:** Create icons in multiple sizes:
  - `512x512px` (main icon)
  - `192x192px` (smaller variant)
  - `180x180px` (for iOS if needed)
- **Format:** PNG with transparent background (or SVG)
- **Design:** Should match your app's theme

### 2. Replace Icon Files

Place your new icons in the `public/` folder:

```
public/
  ├── logo.png          ← Replace this (main icon)
  ├── logo.svg          ← Replace this (SVG version)
  ├── logo_bg.png       ← Icon with background
  └── logo_bg.svg       ← SVG with background
```

### 3. Update Favicon

To change the browser tab icon:

1. Create a `favicon.ico` file (16x16px and 32x32px)
2. Place it in the `public/` folder
3. Update `index.html`:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico">
   ```

### 4. Update Manifest (for PWA)

Edit `public/manifest.webmanifest`:
```json
{
  "icons": [
    {
      "src": "/logo.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/logo_bg.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## 🎭 Changing the Hero Icon

The floating icon on the landing page hero section is in `src/components/landing/Hero.tsx`:

**Current code (lines 60-62):**
```tsx
<Music className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
```

**To use a custom image instead:**
```tsx
<img src="/logo.png" alt="Musifly" className="w-12 h-12" />
```

## 📸 Quick Example: Adding Real Screenshots

Here's a complete example for `Screenshots.tsx`:

```tsx
import { motion } from "framer-motion";
import strings from "@/config/strings.json";

export function Screenshots() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* ... header code ... */}
        
        <div className="relative flex justify-center gap-8 items-center">
          {/* Left Screenshot */}
          <motion.div className="w-[280px] h-[600px]">
            <img 
              src={strings.screenshots.playlist} 
              alt="Playlist View"
              className="w-full h-full object-cover rounded-[2.5rem] border-8 border-gray-900 shadow-2xl"
            />
          </motion.div>

          {/* Center Screenshot */}
          <motion.div className="w-[300px] h-[640px]">
            <img 
              src={strings.screenshots.player} 
              alt="Music Player"
              className="w-full h-full object-cover rounded-[3rem] border-8 border-gray-900 shadow-2xl"
            />
          </motion.div>

          {/* Right Screenshot */}
          <motion.div className="w-[280px] h-[600px]">
            <img 
              src={strings.screenshots.equalizer} 
              alt="Equalizer"
              className="w-full h-full object-cover rounded-[2.5rem] border-8 border-gray-900 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

## ✨ Pro Tips

1. **Image Optimization:**
   - Use WebP format for smaller file sizes
   - Compress images using tools like TinyPNG
   - Don't exceed 500KB per screenshot

2. **Mockup Tools:**
   - If you want professional mockups, use:
     - [Mockuphone.com](https://mockuphone.com)
     - [Smartmockups.com](https://smartmockups.com)
     - [Shots.so](https://shots.so)

3. **Design Consistency:**
   - Use the same phone frame for all screenshots
   - Maintain consistent lighting and backgrounds
   - Show your best features first

## 📋 Checklist

- [ ] App screenshots prepared (1080x2340px)
- [ ] Screenshots added to `public/` folder
- [ ] `strings.json` updated with screenshot paths
- [ ] `Screenshots.tsx` component updated
- [ ] App icon created (512x512px)
- [ ] Icons replaced in `public/` folder
- [ ] Favicon created and added
- [ ] `manifest.webmanifest` updated
- [ ] Hero section icon updated (optional)

---

**Need Help?** Check the current mockup implementation in `src/components/landing/Screenshots.tsx` to see how the phone mockups are structured!

<<<<<<< HEAD
# Musifly Strings Configuration

यह file सभी download links, social media URLs, और text content को centralized तरीके से manage करने के लिए है।

## Location

```
src/config/strings.json
```

## कैसे use करें?

### 1. Download Links Update करना

`strings.json` में जाकर download links को अपने actual APK links से replace करें:

```json
{
  "downloads": {
    "arm64": "https://github.com/your-repo/musifly/releases/download/v1.0.0/musifly-arm64.apk",
    "arm32": "https://github.com/your-repo/musifly/releases/download/v1.0.0/musifly-arm32.apk"
  }
}
```

### 2. Social Media Links Update करना

अपने actual social media profiles की links add करें:

```json
{
  "social": {
    "twitter": "https://twitter.com/your-handle",
    "instagram": "https://instagram.com/your-handle",
    "facebook": "https://facebook.com/your-page",
    "github": "https://github.com/your-repo"
  }
}
```

### 3. App Text Content Change करना

App का name या description change करना चाहते हैं? आसानी से बदल सकते हैं:

```json
{
  "app": {
    "name": "Musifly",
    "tagline": "Feel The Music, Beyond Limits."
  },
  "footer": {
    "description": "Your app description here..."
  }
}
```

### 4. Stats Update करना

Hero section के stats को update करें:

```json
{
  "stats": {
    "downloads": "2M+",
    "rating": "4.9/5",
    "songs": "Unlimited"
  }
}
```

## कहाँ-कहाँ use हो रहा है?

1. **Hero Component** (`src/components/landing/Hero.tsx`)
   - Download buttons की links
   - App name
   - Stats (Downloads, Rating, Songs)

2. **Footer Component** (`src/components/landing/Footer.tsx`)
   - Social media links
   - App name और description
   - Footer menu links

## फायदे

✅ **एक ही जगह से सब manage करें** - सभी links एक ही file में
✅ **आसानी से update करें** - कोड में जाने की ज़रूरत नहीं
✅ **गलती की संभावना कम** - सिर्फ JSON file edit करनी है
✅ **Version control friendly** - Git में आसानी से track हो सकता है

## Example: नया release publish करना

जब नया APK release करें, बस यह करें:

1. `src/config/strings.json` खोलें
2. Download links को नई release links से replace करें
3. Stats (downloads count) update करें अगर ज़रूरत हो
4. Save करें और deploy करें!

बस इतना ही! 🎉
=======
# Musifly Strings Configuration

यह file सभी download links, social media URLs, और text content को centralized तरीके से manage करने के लिए है।

## Location

```
src/config/strings.json
```

## कैसे use करें?

### 1. Download Links Update करना

`strings.json` में जाकर download links को अपने actual APK links से replace करें:

```json
{
  "downloads": {
    "arm64": "https://github.com/your-repo/musifly/releases/download/v1.0.0/musifly-arm64.apk",
    "arm32": "https://github.com/your-repo/musifly/releases/download/v1.0.0/musifly-arm32.apk"
  }
}
```

### 2. Social Media Links Update करना

अपने actual social media profiles की links add करें:

```json
{
  "social": {
    "twitter": "https://twitter.com/your-handle",
    "instagram": "https://instagram.com/your-handle",
    "facebook": "https://facebook.com/your-page",
    "github": "https://github.com/your-repo"
  }
}
```

### 3. App Text Content Change करना

App का name या description change करना चाहते हैं? आसानी से बदल सकते हैं:

```json
{
  "app": {
    "name": "Musifly",
    "tagline": "Feel The Music, Beyond Limits."
  },
  "footer": {
    "description": "Your app description here..."
  }
}
```

### 4. Stats Update करना

Hero section के stats को update करें:

```json
{
  "stats": {
    "downloads": "2M+",
    "rating": "4.9/5",
    "songs": "Unlimited"
  }
}
```

## कहाँ-कहाँ use हो रहा है?

1. **Hero Component** (`src/components/landing/Hero.tsx`)
   - Download buttons की links
   - App name
   - Stats (Downloads, Rating, Songs)

2. **Footer Component** (`src/components/landing/Footer.tsx`)
   - Social media links
   - App name और description
   - Footer menu links

## फायदे

✅ **एक ही जगह से सब manage करें** - सभी links एक ही file में
✅ **आसानी से update करें** - कोड में जाने की ज़रूरत नहीं
✅ **गलती की संभावना कम** - सिर्फ JSON file edit करनी है
✅ **Version control friendly** - Git में आसानी से track हो सकता है

## Example: नया release publish करना

जब नया APK release करें, बस यह करें:

1. `src/config/strings.json` खोलें
2. Download links को नई release links से replace करें
3. Stats (downloads count) update करें अगर ज़रूरत हो
4. Save करें और deploy करें!

बस इतना ही! 🎉
>>>>>>> 3c0bdd2eae304b2a15a2ff0ab5a6a4d84aa1b791

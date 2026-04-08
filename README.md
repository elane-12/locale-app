# locale — Social Discovery App

Discover hotels, restaurants & things to do — with AI-powered picks for tonight.

---

## 🚀 Deploy to Vercel in 5 Minutes

### Step 1 — Get your files ready
You have these files:
```
locale-app/
├── api/
│   ├── ai.js          ← AI (Claude) serverless function
│   └── auth.js        ← User accounts serverless function
├── public/
│   ├── index.html     ← The full app
│   └── data.js        ← All cities and places data
├── package.json
├── vercel.json
└── README.md
```

### Step 2 — Get your Anthropic API key
1. Go to https://console.anthropic.com
2. Sign up (free)
3. Click **API Keys** → **Create Key**
4. Copy your key — you'll need it in Step 5

### Step 3 — Push to GitHub
1. Go to https://github.com and create a new repository named `locale-app`
2. On your computer, open Terminal in the `locale-app` folder
3. Run these commands:
```bash
git init
git add .
git commit -m "Launch locale app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/locale-app.git
git push -u origin main
```
(Replace YOUR_USERNAME with your GitHub username)

### Step 4 — Deploy to Vercel
1. Go to https://vercel.com and sign up with GitHub
2. Click **Add New Project**
3. Find and import your `locale-app` repository
4. Click **Deploy** (default settings work perfectly)

### Step 5 — Add your API key (IMPORTANT)
Without this, the AI tab won't work.

1. In Vercel, go to your project → **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** (paste your key from Step 2)
   - **Environments:** Production, Preview, Development ✓ all three
3. Click **Save**
4. Go to **Deployments** → click the three dots → **Redeploy**

### Step 6 — You're live! 🎉
Your app is now live at: `https://locale-app-XXXX.vercel.app`

Share that URL with anyone — it works on any device, any browser.

---

## 📍 Adding More Places

Open `public/data.js` and find your city under `places:`.
Copy an existing place object and fill in the details:

```javascript
{ 
  id:'unique-id-123',        // Must be unique
  emoji:'🍕',                // Any emoji
  name:'Pizza Palace',       // Place name
  type:'restaurant',         // restaurant | hotel | todo
  price:'$$',                // $ | $$ | $$$ | $$$$
  rating:4.7,                // 0-5
  vibe:'Casual',             // One word vibe label
  status:'open',             // open | busy
  wait:'15 min wait',        // Wait time text
  hours:'Until 11pm',        // Hours text
  desc:'Description here.',  // 1-2 sentence description
  tags:['Tag1','Tag2'],      // 2-4 tags
  friends:[],                // Friend initials [] or ['AB','CD']
  friendText:''              // Social text or ''
}
```

To add a new city:
1. Add it to the `cities` array at the top of `data.js`
2. Add a `places` entry with the city's id as the key
3. Push to GitHub — Vercel auto-deploys in ~30 seconds

---

## 🔧 Adding a Real Database (Optional)

For v2 with real user accounts and saved spots synced across devices:
- **Supabase** (free tier) — `npm install @supabase/supabase-js`
- Replace `api/auth.js` with real JWT auth
- Store saved places in a `saved_places` table

---

## 💡 Tips
- The AI uses Claude Sonnet — very fast and smart
- Each city page costs ~$0.001 in API calls (extremely cheap)
- The app works offline for browsing — only AI tab needs internet
- Users' saved spots persist in their browser localStorage

---

Built with Claude AI · Deployed on Vercel

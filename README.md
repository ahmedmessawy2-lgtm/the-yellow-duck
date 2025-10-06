# The Yellow Duck — Halloween Guest Pass (Netlify-ready)

This is a **single-page site** for event check-in. It reads the following URL parameters and shows them on a themed pass:
- `name`
- `id`
- `phone`
- `code` (internal invite code, optional)

## Deploy on Netlify
1. Create a new site in Netlify and **drag & drop** these files, or connect a Git repo.
2. Once deployed, your base URL will look like `https://your-site.netlify.app/`.

## Link format
```
https://your-site.netlify.app/?name=Ahmed%20Magdy&id=30502052100712&phone=01110707086&code=INV001
```

You can generate 200 of these links (one per guest) and make QR codes from them.

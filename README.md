# Minecraft Server Status Page

A simple free HTML/CSS/JS website for a Minecraft server.

## Quick setup

1. Open `script.js`.
2. Change:
   - `serverIp`
   - `statusApi`
   - `storeUrl`
   - `discordUrl`
3. Edit `index.html` to change the server name, staff, VIP ranks, rules and vote links.
4. Upload all three files (`index.html`, `style.css`, `script.js`) to GitHub.
5. Enable GitHub Pages in the repository settings.

## Status API

The default example uses mcstatus.io:

`https://api.mcstatus.io/v2/status/java/YOUR_SERVER_IP`

Replace `YOUR_SERVER_IP` with your actual Java server address.

## Important

This is a static website. It does not process payments itself. The Store button should link to your existing Minecraft store.

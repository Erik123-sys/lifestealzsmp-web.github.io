// ========================================
// LIFESTEALZ SMP WEBSITE SETTINGS
// ========================================

const CONFIG = {

  // Minecraft server IP
  serverIp: "lifestealzsmp.falix.pro",

  // Minecraft Java server status API
  statusApi:
    "https://api.mcstatus.io/v2/status/java/lifestealzsmp.falix.pro",

  // CraftingStore
  storeUrl:
    "https://lifestealzsmp0.craftingstore.net/",

  // Discord
  discordUrl:
    "https://discord.gg/fT3yHx7kg"

};


// ========================================
// DISPLAY SERVER IP
// ========================================

document.getElementById("serverIp").textContent =
  CONFIG.serverIp;


// ========================================
// DISCORD LINKS
// ========================================

document
  .querySelectorAll('a[href*="discord.gg"]')
  .forEach(link => {

    link.href = CONFIG.discordUrl;

  });


// ========================================
// STORE LINKS
// ========================================

document
  .querySelectorAll('a[href="#store"]')
  .forEach(link => {

    link.addEventListener("click", () => {

      setTimeout(() => {

        const store =
          document.getElementById("store");

        if (store) {
          store.scrollIntoView({
            behavior: "smooth"
          });
        }

      }, 50);

    });

  });


// ========================================
// COPY SERVER IP
// ========================================

document
  .getElementById("copyIp")
  .addEventListener("click", async () => {

    try {

      await navigator.clipboard.writeText(
        CONFIG.serverIp
      );

      const message =
        document.getElementById("copyMessage");

      message.textContent =
        "✓ IP adresa bola skopírovaná!";

      setTimeout(() => {

        message.textContent = "";

      }, 2000);

    } catch {

      alert(
        "Nepodarilo sa skopírovať IP.\n\n" +
        CONFIG.serverIp
      );

    }

  });


// ========================================
// SERVER STATUS
// ========================================

async function updateServerStatus() {

  const status =
    document.getElementById("serverStatus");

  const players =
    document.getElementById("playerCount");

  const dot =
    document.getElementById("statusDot");


  try {

    const response =
      await fetch(
        CONFIG.statusApi,
        {
          cache: "no-store"
        }
      );


    if (!response.ok) {

      throw new Error(
        "API error"
      );

    }


    const data =
      await response.json();


    if (data.online) {

      dot.className =
        "status-dot online";

      status.textContent =
        "ONLINE";

      players.textContent =
        data.players?.online ?? 0;

    } else {

      dot.className =
        "status-dot offline";

      status.textContent =
        "OFFLINE";

      players.textContent =
        "0";

    }


  } catch {

    dot.className =
      "status-dot offline";

    status.textContent =
      "STATUS UNAVAILABLE";

    players.textContent =
      "—";

  }

}


// ========================================
// INITIAL STATUS CHECK
// ========================================

updateServerStatus();


// ========================================
// UPDATE EVERY 30 SECONDS
// ========================================

setInterval(
  updateServerStatus,
  30000
);

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa"; // Correct import

export default defineConfig({
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // Registers the service worker automatically
      manifest: {
        name: "MyStudyMap",
        short_name: "StudyMap",
        description: "A study and academic progress management tool",
        start_url: "/", // Start URL when launched from the home screen
        display: "standalone", // Makes the app behave like a native app
        background_color: "#1e40af", // Blue background color
        theme_color: "#1e40af", // Blue theme color for the browser
        icons: [
          {
            src: "icons/icon-192x192.png", // Icon for 192x192
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png", // Icon for 512x512
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/your-api-url/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60, // Cache for 1 day
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    allowedHosts: ["*"], // Allow all hosts, including ngrok
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),
    VitePWA ({
      registerType: "autoUpdate",
      manifest: {
        name: 'PWA GG',
        short_name: 'PWA',
        description: 'blin',
        theme_color: '#ffffff',
        icons: [
          {
          src: 'img/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
      }]
    },
    workbox: {
      globPatterns: [
        '**/*.{css,js,jsx,jpg,png,svg,jpeg,app,document}'
      ]
    }
  })
 
  ],

})

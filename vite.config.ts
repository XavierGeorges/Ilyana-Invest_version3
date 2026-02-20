import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Fixed: Use '.' instead of process.cwd() to avoid TS error "Property 'cwd' does not exist on type 'Process'"
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    define: {
      // Robustly replace process.env.API_KEY with the actual string value during build
      // Using || '' ensures it doesn't become undefined in the code which can cause issues
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  }
})
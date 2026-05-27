import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()],
        base: '/paula-portfolio',
    };

    if (command !== 'serve') {
        config.base = '/paula-portfolio/';
    }

    return config;
});
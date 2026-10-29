import react from '@vitejs/plugin-react';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig, type Plugin } from 'vite';

/** `vite preview` serves prerendered pages the way static hosts do: /courses -> /courses/index.html. */
function prerenderedRoutes(): Plugin {
	return {
		name: 'prerendered-routes',
		configurePreviewServer(server) {
			server.middlewares.use((req, _res, next) => {
				const path = (req.url ?? '/').split('?')[0]!.replace(/\/+$/, '');
				if (path && !path.includes('.') && existsSync(join('dist', path, 'index.html'))) req.url = `${path}/index.html`;
				next();
			});
		},
	};
}

export default defineConfig({
	plugins: [react(), prerenderedRoutes()],
});

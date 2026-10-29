import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { notFound, routes } from './routes';
import { schemaFor } from './seo';
import { site } from './site';

export { notFound, routes, schemaFor, site };

export function render(url: string) {
	return renderToString(
		<StrictMode>
			<StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
				<App />
			</StaticRouter>
		</StrictMode>,
	);
}

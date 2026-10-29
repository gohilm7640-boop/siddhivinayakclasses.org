import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/manrope';
import './styles/global.css';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root')!;
const app = (
	<StrictMode>
		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<App />
		</BrowserRouter>
	</StrictMode>
);

// Production pages are prerendered (scripts/prerender.mjs); the dev server serves an empty root.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);

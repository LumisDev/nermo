import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className='h-screen w-screen bg-slate-500'>
			<Canvas>
				<OrbitControls />
				<App />
			</Canvas>
		</div>
	</React.StrictMode>,
);

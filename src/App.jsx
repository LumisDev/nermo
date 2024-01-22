import React from 'react';
import { Html, MeshDistortMaterial } from '@react-three/drei';
const App = () => {
	return (
		<>
			<Html>
				<h1 className='text-3xl font-bold underline first-letter:font-extrabold first-letter:text-red-400'>
					HEY! Welcome there!
				</h1>
			</Html>
			<ambientLight intensity={4} />
			<mesh>
				<torusGeometry
					radius={10}
					tube={3}
					radialSegments={16}
					tubalSegments={100}
				/>
				<MeshDistortMaterial
					speed={3}
					radius={1}
					distort={distort}
					color='#ffe4a2'
					wireframe
				/>
			</mesh>
		</>
	);
};

export default App;

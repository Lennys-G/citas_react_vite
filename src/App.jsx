import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListoPacientes';
import { useState, useEffect } from 'react';
function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	useEffect(() => {
		const obtenerLS = () => {
			const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
			setPacientes(pacientesLS);
		};
		obtenerLS();
	}, []);

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes));
	}, [pacientes]);

	/* Para eliminar un paciente por medio de su id, lo que hacemos es filtrar el arrreglo de todos los pacientes y buscamos todos los que no coinciden con su id, es decir todos los que son diferentes al que deseamos eliminar y los colocamos en una variable y los seteamos como el nuevo valor, es decir aislamos todos los pacientes del que deseamos eleminar y los mandamos todos como la nueva actualización del estado, de esta forma quedaría por fuera el paciente que deseamos eliminar y así lo desechamos... */

	const eliminarPaciente = (id) => {
		const pacientesActualizados = pacientes.filter(
			(paciente) => paciente.id !== id
		);
		setPacientes(pacientesActualizados);
	};

	return (
		<div className="container mx-auto mt-20">
			<Header />

			<div className="mt-12 md:flex">
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;

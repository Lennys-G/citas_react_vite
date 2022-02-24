import Paciente from './Paciente';

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
	return (
		<div className="md:w-1/2 lg:w-2/3 ">
			{pacientes && pacientes.length ? (
				<>
					<h2 className="font-black text-3xl text-center">
						Listado de pacientes
					</h2>
					<p className="text-lg mt-5 text-center mb-10 ">
						Administra tus{' '}
						<span className="text-indigo-600 font-bold">pacientes y citas</span>
					</p>

					<div className=" md:h-[83.5vh] md:overflow-y-scroll">
						{pacientes.map((paciente) => (
							<Paciente
								key={paciente.id}
								paciente={paciente}
								setPaciente={setPaciente}
								eliminarPaciente={eliminarPaciente}
							/>
						))}
					</div>
				</>
			) : (
				<>
					<h2 className="font-black text-3xl text-center">No hay pacientes</h2>
					<p className="text-lg mt-5 text-center mb-10 ">
						Comienza agreando pacientes{' '}
						<span className="text-indigo-600 font-bold">
							y apareceran en este lugar
						</span>
					</p>
				</>
			)}
		</div>
	);
}

export default ListadoPacientes;

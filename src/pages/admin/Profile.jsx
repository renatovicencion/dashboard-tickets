import React, { useState } from "react";

// Imgs
import Avatar from "./../../assets/avatar.jpeg";
import GoogleLogo from "./../../assets/google.png";
import SlackLogo from "./../../assets/slack.png";

import { Switch } from "@headlessui/react";

// Icons
import {
	RiPencilLine,
	RiCloseLine,
	RiShieldCheckLine,
	RiGithubFill,
	RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Profile = () => {
	const [enabled, setEnabled] = useState(false);

	return (
		<>
			{/* Profile */}
			<div className='bg-secondary-100 p-8 rounded-xl mb-8'>
				<h1 className='text-xl text-gray-100'>Perfil</h1>
				<hr className='my-8 border-gray-500/30' />
				<form action=''>
					<div className='flex items-center mb-8'>
						<div className='w-1/4'>
							<p>Avatar</p>
						</div>
						<div className='flex-1'>
							<div className='relative mb-2'>
								<img
									src={Avatar}
									alt='avatar'
									className='w-20 h-20 object-cover rounded-lg'
								/>
								<label htmlFor='avatar'>
									<RiPencilLine className='absolute text-white hover:text-primary bg-secondary-100 rounded-full p-1 text-sm box-content hover:cursor-pointer -top-1 left-[68px]' />
									<input
										type='file'
										id='avatar'
										className='hidden'
									/>
									<RiCloseLine className='absolute text-white hover:text-primary bg-secondary-100 rounded-full p-1 text-sm box-content hover:cursor-pointer -bottom-1 left-[68px]' />
								</label>
							</div>
							<p className='text-gray-500 text-xs'>
								Tipos de formatos permitidos: png, jpg, jpeg.
							</p>
						</div>
					</div>

					<div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
						<div className='w-full md:w-1/4'>
							<p>
								Nombre Completo{" "}
								<span className='text-primary'>*</span>
							</p>
						</div>
						<div className='flex-1 flex items-center gap-4'>
							<div className='w-full'>
								<input
									className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
									type='text'
									placeholder='Nombre(s)'
								/>
							</div>
							<div className='w-full'>
								<input
									className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
									type='text'
									placeholder='Apellido(s)'
								/>
							</div>
						</div>
					</div>

					<div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
						<div className='w-full md:w-1/4'>
							<p>
								Empresa <span className='text-primary'>*</span>
							</p>
						</div>
						<div className='flex-1'>
							<input
								className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
								type='text'
								placeholder='Nombre de la empresa'
							/>
						</div>
					</div>

					<div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
						<div className='w-full md:w-1/4'>
							<p>
								Número de contacto{" "}
								<span className='text-primary'>*</span>
							</p>
						</div>
						<div className='flex-1'>
							<input
								className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
								type='text'
								placeholder='Ej: +56 9 92319823'
							/>
						</div>
					</div>

					<div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
						<div className='w-full md:w-1/4'>
							<p>
								Página web{" "}
								<span className='text-primary'>*</span>
							</p>
						</div>
						<div className='flex-1'>
							<input
								className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900'
								type='text'
								placeholder='Ej: www.google.cl'
							/>
						</div>
					</div>

					<div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
						<div className='w-full md:w-1/4'>
							<p>
								País <span className='text-primary'>*</span>
							</p>
						</div>
						<div className='flex-1'>
							<select
								defaultValue='QLL'
								className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none'
							>
								<option value='QLL'>Quillota</option>
								<option value='VÑA'>Viña</option>
							</select>
						</div>
					</div>

					<div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
						<div className='w-full md:w-1/4'>
							<p>
								Ciudad <span className='text-primary'>*</span>
							</p>
						</div>
						<div className='flex-1'>
							<select
								defaultValue='CL'
								className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none'
							>
								<option value='AR'>Argentina</option>
								<option value='CL'>Chile</option>
							</select>
						</div>
					</div>

					<hr className='my-8 border-gray-500/30' />

					<div className='flex justify-end'>
						<button className='py-2 px-4 rounded-lg bg-primary/80 hover:bg-primary transition-colors text-secondary-900'>
							Guardar
						</button>
					</div>
				</form>
			</div>

			{/* Change Password */}
			<div className='bg-secondary-100 p-8 rounded-xl mb-8'>
				<h1 className='text-xl text-gray-100'>Credenciales</h1>
				<hr className='my-8 border-gray-500/30' />
				<form action=''>
					<div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between'>
						<div>
							<h5 className='text-gray-100 text-xl mb-1'>
								Correo electrónico
							</h5>
							<p className='text-gray-500 text-sm'>
								jorgetrejo@gmail.com
							</p>
						</div>

						<div>
							<button className='w-full md:w-auto py-3 px-4 bg-secondary-900/50 hover:bg-secondary-900 transition-colors hover:text-gray-100 rounded-lg'>
								Cambiar email
							</button>
						</div>
					</div>

					<hr className='my-8 border-gray-500/30' />
				</form>

				<form action=''>
					<div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between mb-8'>
						<div>
							<h5 className='text-gray-100 text-xl mb-1'>
								Contraseña
							</h5>
							<p className='text-gray-500 text-sm'>
								****************
							</p>
						</div>

						<div>
							<button className='w-full md:w-auto py-3 px-4 bg-secondary-900/50 hover:bg-secondary-900 transition-colors hover:text-gray-100 rounded-lg'>
								Cambiar contraseña
							</button>
						</div>
					</div>
				</form>

				<form action=''>
					<div className='grid grid-cols-1 md:grid-cols-8 items-center gap-y-4 bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600'>
						<div className='flex justify-center'>
							<RiShieldCheckLine className='text-5xl text-green-600' />
						</div>

						<div className='md:col-span-6'>
							<h5 className='text-gray-100 text-xl mb-2'>
								Asegura tu cuenta
							</h5>
							<p className='text-gray-500'>
								La autenticación de dos factores agrega una capa
								adicional de seguridad a su cuenta. Para iniciar
								sesión, además deberá proporcionar un código de
								6 dígitos
							</p>
						</div>

						<div className='flex justify-center'>
							<button className='py-2 px-4 rounded-lg bg-green-600/70 hover:bg-green-600 transition-colors text-gray-100 hover:text-white'>
								Activar
							</button>
						</div>
					</div>
				</form>
			</div>

			{/* Connected Accounts */}
			<div className='bg-secondary-100 p-8 rounded-xl mb-8'>
				<h1 className='text-xl text-gray-100'>Conectar cuentas</h1>

				<hr className='my-8 border-gray-500/30' />

				<div className='flex flex-col md:flex-row gap-4 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8'>
					<div className='flex justify-center'>
						<RiShieldCheckLine className='text-5xl text-green-600' />
					</div>

					<div className='flex-1'>
						<p className='text-gray-500'>
							La autenticación de dos factores agrega una capa
							adicional de seguridad a su cuenta. Para iniciar
							sesión, además deberá proporcionar un código de 6
							dígitos.{" "}
							<Link to='/' className='text-green-400'>
								Leer más
							</Link>
						</p>
					</div>
				</div>

				<form action=''>
					<div className='flex items-center justify-between gap-4'>
						<div className='flex items-center gap-4'>
							<img
								src={GoogleLogo}
								alt='google'
								className='w-8 h-8 object-cover'
							/>
						</div>

						<div className='flex flex-col gap-y-1 flex-1'>
							<h5 className='text-gray-100'>Google</h5>
							<p className='text-gray-500'>
								Planea apropiadamente tu flujo de trabajo
							</p>
						</div>

						<div>
							<Switch
								checked={enabled}
								onChange={setEnabled}
								className={`${
									enabled ? "bg-primary" : "bg-secondary-900"
								} relative inline-flex h-6 w-11 items-center rounded-full`}
							>
								<span className='sr-only'>
									Enable notifications
								</span>
								<span
									className={`${
										enabled
											? "translate-x-6 bg-secondary-900"
											: "translate-x-1 bg-gray-500"
									} inline-block h-4 w-4 transform rounded-full transition`}
								/>
							</Switch>
						</div>
					</div>

					<hr className='my-8 border-gray-500/30 border-dashed' />
				</form>

				<form action=''>
					<div className='flex items-center justify-between gap-4'>
						<div className='flex items-center gap-4'>
							<RiGithubFill className='w-8 h-8 object-cover text-white' />
						</div>

						<div className='flex flex-col gap-y-1 flex-1'>
							<h5 className='text-gray-100'>Github</h5>
							<p className='text-gray-500'>
								Manten la vista en tus repositorios
							</p>
						</div>

						<div>
							<Switch
								checked={enabled}
								onChange={setEnabled}
								className={`${
									enabled ? "bg-primary" : "bg-secondary-900"
								} relative inline-flex h-6 w-11 items-center rounded-full`}
							>
								<span className='sr-only'>
									Enable notifications
								</span>
								<span
									className={`${
										enabled
											? "translate-x-6 bg-secondary-900"
											: "translate-x-1 bg-gray-500"
									} inline-block h-4 w-4 transform rounded-full transition`}
								/>
							</Switch>
						</div>
					</div>

					<hr className='my-8 border-gray-500/30 border-dashed' />
				</form>

				<form action=''>
					<div className='flex items-center justify-between gap-4'>
						<div className='flex items-center gap-4'>
							<img
								src={SlackLogo}
								alt='slack'
								className='w-8 h-8 object-cover'
							/>
						</div>

						<div className='flex flex-col gap-y-1 flex-1'>
							<h5 className='text-gray-100'>Slack</h5>
							<p className='text-gray-500'>
								Habla acerca de tus proyectos
							</p>
						</div>

						<div>
							<Switch
								checked={enabled}
								onChange={setEnabled}
								className={`${
									enabled ? "bg-primary" : "bg-secondary-900"
								} relative inline-flex h-6 w-11 items-center rounded-full`}
							>
								<span className='sr-only'>
									Enable notifications
								</span>
								<span
									className={`${
										enabled
											? "translate-x-6 bg-secondary-900"
											: "translate-x-1 bg-gray-500"
									} inline-block h-4 w-4 transform rounded-full transition`}
								/>
							</Switch>
						</div>
					</div>

					<hr className='my-8 border-gray-500/30 border-dashed' />
				</form>
			</div>

			{/* Email Preferences */}
			<div className='bg-secondary-100 p-8 rounded-xl mb-8'>
				<h1 className='text-xl text-gray-100'>
					Notificaciones por correo electrónico
				</h1>

				<hr className='my-8 border-gray-500/30' />

				<form action=''>
					<div className='flex items-center justify-between gap-4'>
						<input
							type='checkbox'
							className='accent-primary'
							id='checkbox1'
						/>

						<div className='flex flex-col gap-y-1 flex-1'>
							<label
								htmlFor='checkbox1'
								className='text-gray-100'
							>
								Pagos exitosos
							</label>
							<p className='text-gray-500'>
								Recibe una notificación por cada pago exitoso.
							</p>
						</div>
					</div>
					<hr className='my-8 border-gray-500/30 border-dashed' />

					<div className='flex items-center justify-between gap-4'>
						<input
							type='checkbox'
							className='accent-primary'
							id='checkbox2'
						/>

						<div className='flex flex-col gap-y-1 flex-1'>
							<label
								htmlFor='checkbox2'
								className='text-gray-100'
							>
								Pagos
							</label>
							<p className='text-gray-500'>
								Recibe una notificación por cada pago iniciado.
							</p>
						</div>
					</div>
					<hr className='my-8 border-gray-500/30 border-dashed' />

					<div className='flex items-center justify-between gap-4'>
						<input
							type='checkbox'
							className='accent-primary'
							id='checkbox3'
						/>

						<div className='flex flex-col gap-y-1 flex-1'>
							<label
								htmlFor='checkbox3'
								className='text-gray-100'
							>
								Disputa de pago del cliente
							</label>
							<p className='text-gray-500'>
								Recibe una notificación si un pago es disputado
								por un cliente y para fines de disputa.
							</p>
						</div>
					</div>

					<hr className='my-8 border-gray-500/30' />

					<div className='flex justify-end'>
						<button className='py-2 px-4 rounded-lg bg-primary/80 hover:bg-primary transition-colors text-secondary-900'>
							Guardar
						</button>
					</div>
				</form>
			</div>

			{/* Inactive Account */}
			<div className='bg-secondary-100 p-8 rounded-xl mb-8'>
				<h1 className='text-xl text-gray-100'>Desactivar cuenta</h1>

				<hr className='my-8 border-gray-500/30' />

				<div className='flex flex-col md:flex-row items-center gap-4 bg-yellow-600/10 p-4 rounded-lg border border-dashed border-yellow-600 mb-8'>
					<div className='flex justify-center'>
						<RiErrorWarningLine className='text-5xl text-yellow-600' />
					</div>

					<div className='flex-1'>
						<h5 className='text-gray-100 text-xl mb-2'>
							Estas desactivando tu cuenta
						</h5>
						<p className='text-gray-500'>
							Para seguridad extra, esto requiere que confirmes tu
							correo electrónico o teléfono cuando resetes tu
							contraseña.{" "}
							<Link to='/' className='text-yellow-400'>
								Leer más
							</Link>
						</p>
					</div>
				</div>

				<form action=''>
					<div className='flex items-center gap-4'>
						<input
							type='checkbox'
							id='checkboxAccount'
							className='accent-primary'
						/>
						<label
							htmlFor='checkboxAccount'
							className='text-gray-500'
						>
							Confirmo la desactivación de mi cuenta
						</label>
					</div>

					<hr className='my-8 border-gray-500/30' />

					<div className='flex justify-end'>
						<button className='py-2 px-4 rounded-lg bg-red-500/80 hover:bg-red-500 transition-colors text-red-100'>
							Desactivar cuenta
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Profile;

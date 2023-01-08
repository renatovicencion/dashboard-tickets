import React, { useState } from "react";

import { Link } from "react-router-dom";

import { RiLock2Line, RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const ResetPassword = () => {
	const [showPass, setshowPass] = useState(false);
	const [showResetPass, setshowResetPass] = useState(false);

	const handleShowPass = () => {
		setshowPass(!showPass);
	};

	const handleShowResetPass = () => {
		setshowResetPass(!showResetPass);
	};

	return (
		<div className='bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450px]'>
			<h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>
				Actualizar <span className='text-primary'>contraseña</span>
			</h1>
			<form className='mb-4'>
				<div className='relative mb-8'>
					<RiLock2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
					<input
						type={`${showPass ? "text" : "password"}`}
						className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
						placeholder='Nueva Contraseña'
					/>

					{!showPass ? (
						<RiEyeLine
							className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
							onClick={handleShowPass}
						/>
					) : (
						<RiEyeOffLine
							className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
							onClick={handleShowPass}
						/>
					)}
				</div>

				<div className='relative mb-8'>
					<RiLock2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
					<input
						type={`${showResetPass ? "text" : "password"}`}
						className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
						placeholder='Confirmar Contraseña'
					/>

					{!showResetPass ? (
						<RiEyeLine
							className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
							onClick={handleShowResetPass}
						/>
					) : (
						<RiEyeOffLine
							className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
							onClick={handleShowResetPass}
						/>
					)}
				</div>

				<div>
					<button
						type='submit'
						className='bg-secondary-900 w-full py-3 px-4 rounded-full hover:bg-secondary-300 transition-colors text-sm uppercase'
					>
						Actualizar
					</button>
				</div>
			</form>

			<span className='flex items-center justify-center gap-2'>
				¡Recordé mi contraseña!,
				<Link
					to='/auth/login'
					className='text-primary hover:cursor-pointer hover:animate-pulse'
				>
					Inicia sesión
				</Link>
			</span>
		</div>
	);
};

export default ResetPassword;

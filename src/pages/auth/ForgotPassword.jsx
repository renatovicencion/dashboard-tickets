import React from "react";

import { Link } from "react-router-dom";

import { RiMailLine } from "react-icons/ri";

const ForgotPassword = () => {
	return (
		<div className='bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450px]'>
			<h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>
				Recuperar <span className='text-primary'>contraseña</span>
			</h1>
			<form className='mb-8'>
				<div className='relative mb-8'>
					<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
					<input
						type='email'
						className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
						placeholder='Correo electrónico'
					/>
				</div>

				<div>
					<button
						type='submit'
						className='bg-secondary-900 w-full py-3 px-4 rounded-full hover:bg-secondary-300 transition-colors uppercase text-sm'
					>
						Enviar instrucciones
					</button>
				</div>
			</form>

			<div className='flex flex-col gap-2 items-center text-gray-100'>
				<span className='flex items-center gap-2'>
					¿Ya tienes cuenta?,
					<Link
						to='/auth/login'
						className='text-primary hover:cursor-pointer hover:animate-pulse'
					>
						Inicia sesión
					</Link>
				</span>
				<span className='flex items-center gap-2'>
					¿No tienes cuenta?,
					<Link
						to='/auth/register'
						className='text-primary hover:cursor-pointer hover:animate-pulse'
					>
						Regístrate
					</Link>
				</span>
			</div>
		</div>
	);
};

export default ForgotPassword;

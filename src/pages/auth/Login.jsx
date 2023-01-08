import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
	RiMailLine,
	RiLock2Line,
	RiEyeLine,
	RiEyeOffLine,
} from "react-icons/ri";

const Login = () => {
	const [showPass, setshowPass] = useState(false);

	const handleShowPass = () => {
		setshowPass(!showPass);
	};

	return (
		<div className='bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450px]'>
			<h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>
				Iniciar <span className='text-primary'>sesión</span>
			</h1>
			<form className='mb-8'>
				<button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100 hover:bg-secondary-300 transition-colors'>
					<img
						src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'
						alt=''
						className='w-4 h-4'
					/>
					Ingresa con Google
				</button>
				<div className='relative mb-4'>
					<RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
					<input
						type='email'
						className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
						placeholder='Correo electrónico'
					/>
				</div>

				<div className='relative mb-8'>
					<RiLock2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
					<input
						type={`${showPass ? "text" : "password"}`}
						className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
						placeholder='Contraseña'
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

				<div>
					<button
						type='submit'
						className='bg-secondary-900 w-full py-3 px-4 rounded-full hover:bg-secondary-300 transition-colors text-sm uppercase'
					>
						Ingresar
					</button>
				</div>
			</form>

			<div className='flex flex-col gap-2 items-center text-gray-100'>
				<Link
					to='/auth/forgot-password'
					className='hover:text-primary transition-colors hover:animate-pulse'
				>
					¿Olvidaste tu contraseña?
				</Link>
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

export default Login;

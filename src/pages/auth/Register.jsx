import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
	RiMailLine,
	RiLock2Line,
	RiEyeLine,
	RiEyeOffLine,
	RiUser3Line,
} from "react-icons/ri";

const Register = () => {
	const [showPass, setshowPass] = useState(false);
	const [showConfirmPass, setshowConfirmPass] = useState(false);

	const handleShowPass = () => {
		setshowPass(!showPass);
	};

	const handleShowConfirmPass = () => {
		setshowConfirmPass(!showConfirmPass);
	};

	return (
		<div className='bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450px]'>
			<h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>
				Crear <span className='text-primary'>cuenta</span>
			</h1>
			<form className='mb-4'>
				<button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100 hover:bg-secondary-300 transition-colors'>
					<img
						src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'
						alt=''
						className='w-4 h-4'
					/>
					Regístrate con Google
				</button>

				<div className='relative mb-4'>
					<RiUser3Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
					<input
						type='text'
						className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
						placeholder='Nombre de usuario'
					/>
				</div>

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

				<div className='relative mb-8'>
					<RiLock2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
					<input
						type={`${showConfirmPass ? "text" : "password"}`}
						className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'
						placeholder='Confirmar Contraseña'
					/>

					{!showConfirmPass ? (
						<RiEyeLine
							className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
							onClick={handleShowConfirmPass}
						/>
					) : (
						<RiEyeOffLine
							className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary'
							onClick={handleShowConfirmPass}
						/>
					)}
				</div>

				<div>
					<button
						type='submit'
						className='bg-secondary-900 w-full py-3 px-4 rounded-full hover:bg-secondary-300 transition-colors text-sm uppercase'
					>
						Registrarme
					</button>
				</div>
			</form>

			<span className='flex items-center justify-center gap-2'>
				¿Ya tienes cuenta?,
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

export default Register;

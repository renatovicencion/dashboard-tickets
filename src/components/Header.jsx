import React from "react";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { Link } from "react-router-dom";

// Icons
import {
	RiNotification3Line,
	RiArrowDownSLine,
	RiSettings3Line,
	RiLogoutCircleRLine,
	RiChat1Line,
	RiThumbUpLine,
} from "react-icons/ri";

// Imgs
import Avatar from "./../assets/avatar.jpeg";

const Header = () => {
	return (
		<header className='h-[7vh] md:h-[10vh] border-b flex items-center justify-end border-secondary-100 p-8'>
			<nav className='flex items-center gap-x-2'>
				<Menu
					menuButton={
						<MenuButton
							className='relative hover:bg-secondary-100
						p-2 rounded-lg transition-colors'
						>
							<RiNotification3Line />
							<span className='absolute -top-0.5 right-0 py-0.5 bg-primary px-[5px] text-white box-content rounded-full text-[8px] font-bold'>
								2
							</span>
						</MenuButton>
					}
					align='end'
					arrow
					arrowClassName='bg-secondary-100'
					transition
					menuClassName='bg-secondary-100 p-4 text-gray-300'
				>
					<h1 className='text-center font-medium'>
						Notifications (2)
					</h1>
					<hr className='my-4 border-gray-500' />
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							to='/'
							className='flex flex-1 items-center gap-3 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'
						>
							<img
								src={Avatar}
								alt='avatar'
								className='w-8 h-8 rounded-full object-cover'
							/>
							<div className='text-sm flex flex-col'>
								<div className='flex items-center justify-between gap-4'>
									<span>Jorge Luis Trejo</span>{" "}
									<span className='text-xs'>08/01/2023</span>
								</div>
								<p className='text-gray-500 text-xs'>
									Neque porro quisquam est qui...
								</p>
							</div>
						</Link>
					</MenuItem>

					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							to='/'
							className='flex flex-1 items-center gap-3 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'
						>
							<RiThumbUpLine className='p-2 bg-blue-200 text-blue-700 box-content rounded-full' />
							<div className='text-sm flex flex-col'>
								<div className='flex items-center justify-between gap-4'>
									<span>New like</span>{" "}
									<span className='text-xs'>08/01/2023</span>
								</div>
								<p className='text-gray-500 text-xs'>
									Jorge Luis liked your publicatio...
								</p>
							</div>
						</Link>
					</MenuItem>

					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							to='/'
							className='flex flex-1 items-center gap-3 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'
						>
							<RiChat1Line className='p-2 bg-green-200 text-green-700 box-content rounded-full' />
							<div className='text-sm flex flex-col'>
								<div className='flex items-center justify-between gap-4'>
									<span>New comment</span>{" "}
									<span className='text-xs'>08/01/2023</span>
								</div>
								<p className='text-gray-500 text-xs'>
									Jorge Luis commented your publicatio...
								</p>
							</div>
						</Link>
					</MenuItem>

					<hr className='my-4 border-gray-500' />
					<MenuItem className='p-0 hover:bg-transparent flex justify-center cursor-pointer'>
						<Link
							to='/'
							className='text-gray-500 text-sm hover:text-primary transition-colors'
						>
							Read all
						</Link>
					</MenuItem>
				</Menu>

				<Menu
					menuButton={
						<MenuButton
							className='flex items-center gap-x-2 hover:bg-secondary-100
						py-2 px-4 rounded-lg transition-colors'
						>
							<img
								src={Avatar}
								alt='avatar'
								className='w-6 h-6 rounded-full object-cover'
							/>
							<span>Jorge Luis Trejo</span>
							<RiArrowDownSLine />
						</MenuButton>
					}
					align='end'
					arrow
					arrowClassName='bg-secondary-100'
					transition
					menuClassName='bg-secondary-100 p-4 text-gray-300'
				>
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							to='/profile'
							className='rounded-lg flex-1 py-2 px-6 transition-colors hover:bg-secondary-900 flex items-center gap-x-4'
						>
							<img
								src={Avatar}
								alt='avatar'
								className='w-8 h-8 rounded-full object-cover'
							/>
							<div className='flex flex-col text-sm'>
								<span>Jorge Luis Trejo</span>
								<span className='text-xs text-gray-500'>
									jorgeluistrejo@gmail.com
								</span>
							</div>
						</Link>
					</MenuItem>
					<hr className='my-4 border-gray-500' />
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							to='/configuration'
							className='rounded-lg flex-1 transition-colors hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6'
						>
							<RiSettings3Line />
							Configuration
						</Link>
					</MenuItem>
					<MenuItem className='p-0 hover:bg-transparent'>
						<Link
							to='/logout'
							className='rounded-lg flex-1 transition-colors hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6'
						>
							<RiLogoutCircleRLine />
							Logout
						</Link>
					</MenuItem>
				</Menu>
			</nav>
		</header>
	);
};

export default Header;

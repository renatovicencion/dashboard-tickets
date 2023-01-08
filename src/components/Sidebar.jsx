import React, { useState } from "react";

import { Link } from "react-router-dom";

// Icons
import {
	RiBarChart2Line,
	RiEarthLine,
	RiCustomerService2Line,
	RiCalendarTodoLine,
	RiLogoutCircleRLine,
	RiArrowRightSLine,
	RiMenuLine,
	RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showSubUl, setShowSubUl] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const toggleSubUl = () => {
		setShowSubUl(!showSubUl);
	};

	return (
		<>
			<div
				className={`w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full bg-secondary-100 xl:h-screen overflow-y-scroll fixed xl:static top-0 p-4 flex flex-col justify-between z-50 ${
					showMenu ? "left-0" : "-left-full transition-all"
				}`}
			>
				<div>
					<h1 className='text-center text-2xl font-bold text-white mb-10'>
						Admin <span className='text-primary text-4xl'>.</span>
					</h1>
					<ul>
						<li>
							<Link
								to='/'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
							>
								<RiBarChart2Line className='text-primary' />
								Analytic
							</Link>
						</li>

						<li>
							<button
								onClick={toggleSubUl}
								className='w-full flex items-center justify-between gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
							>
								<span className='flex items-center gap-4'>
									<RiEarthLine className='text-primary' />
									Social media
								</span>
								<RiArrowRightSLine
									className={`mt-1 ${
										showSubUl && "rotate-90"
									} transition-all`}
								/>
							</button>
							<ul
								className={`${
									showSubUl ? "h-[130px]" : "h-0"
								} overflow-y-hidden transition-all`}
							>
								<li>
									<Link
										to='/'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 text-white'
									>
										Post social media
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'
									>
										Statistics
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'
									>
										Profiles
									</Link>
								</li>
							</ul>
						</li>

						<li>
							<Link
								to='/'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
							>
								<RiCustomerService2Line className='text-primary' />
								Technical Support
							</Link>
						</li>

						<li>
							<Link
								to='/'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
							>
								<RiCalendarTodoLine className='text-primary' />
								Calendar
							</Link>
						</li>
					</ul>
				</div>
				<nav>
					<Link
						to='/'
						className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'
					>
						<RiLogoutCircleRLine className='text-primary' />
						Logout
					</Link>
				</nav>
			</div>
			<button
				onClick={toggleMenu}
				className='xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50'
			>
				{showMenu ? <RiCloseLine /> : <RiMenuLine />}
			</button>
		</>
	);
};

export default Sidebar;

import * as Icons from "./Icons";
import "./Layout.css";
import { useState, useEffect } from 'react'

const drawerId = "main-drawer";
const darkTheme = "night";
const lightTheme = "winter";

function setThemeFromLocalStorage() {
	const theme = localStorage.getItem("theme");
	if (theme === darkTheme) {
		setThemeDark();
	}
	else if (theme === lightTheme) {
		setThemeLight();
	}
	else {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// dark mode
			setThemeDark();
		}
		else {
			// light mode
			setThemeLight();
		}
	}
}

function setThemeDark() {
	const root = document.documentElement;
	root.classList.add("dark");
	root.dataset.theme = darkTheme;
	localStorage.setItem("theme", darkTheme);
	const themeToggleInput = document.getElementById("themeToggleInput");
	themeToggleInput.checked = true;
}
function setThemeLight() {
	const root = document.documentElement;
	root.classList.remove("dark");
	root.dataset.theme = lightTheme;
	localStorage.setItem("theme", lightTheme);
	const themeToggleInput = document.getElementById("themeToggleInput");
	themeToggleInput.checked = false;
}

function WebsiteName(props) {
	return (
		<div className={props.className}>
			<button className="btn btn-ghost normal-case text-xl md:text-2xl w-fit">
				<span className="text-primary">
					رياكت
				</span>
				&nbsp;
				<span className="text-base-content">
					بالعربي
				</span>
			</button>
		</div>
	);
}

function Navbar() {

	function toggleDrawer() {
		const drawer = document.getElementById(drawerId);
		drawer.checked = !drawer.checked;
	}

	function toggleTheme(event) {
		if (event.target.checked) {
			setThemeDark();
		}
		else {
			setThemeLight();
		}
	}

	return (
		<div className="navbar z-40 mt-0.5 sticky top-0 bg-base-100 bg-opacity-90 backdrop-blur border-b-2 border-b-primary-content">
			<div className="flex-none tooltip tooltip-bottom" data-tip="القائمة">
				<div>
					<button className="btn btn-square btn-ghost lg:hidden" onClick={toggleDrawer}>
						<Icons.Menu />
					</button>
				</div>
			</div>
			<div className="flex-1">
				<div className="tooltip tooltip-bottom" data-tip="الرئيسية">
					<WebsiteName className="lg:hidden " />
				</div>
			</div>
			<div className="flex-none">
				<div className="tooltip tooltip-bottom" data-tip="تغيير الثيم">
					<label className="btn btn-square btn-ghost swap swap-rotate">
						<input type="checkbox" onChange={toggleTheme} id="themeToggleInput" />
						<div className="swap-off">
							<Icons.Sun />

						</div>
						<div className="swap-on">
							<Icons.Moon />
						</div>
					</label>
				</div>
				<div className="tooltip tooltip-bottom" data-tip="Github">
					<a className="btn btn-square btn-ghost" href="https://github.com/Saad5400/Learn-React-In-Arabic" target="_blank" rel="noreferrer">
						<Icons.Github />
					</a>
				</div>
			</div>
		</div>
	);
}


function Drawer(props) {
	return (
		<div>
			<div className="drawer drawer-mobile">
				<input id={drawerId} type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col primary-scrollbar">
					{props.children}
				</div>
				<div className="drawer-side primary-scrollbar">
					<label htmlFor={drawerId} className="drawer-overlay"></label>
					<div className="menu w-80 bg-base-300">
						<div className="p-2 sticky top-0 bg-opacity-90 backdrop-blur hidden lg:flex border-b-2 border-b-primary-content">
							<WebsiteName />
						</div>
						<div className="p-2 ps-4">
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>
							<div>Hello</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Layout(props) {
	const [firstRender, setFirstRender] = useState(true);
	useEffect(() => {
		if (firstRender) {
			setThemeFromLocalStorage();
			setFirstRender(false);
		}
	}, [firstRender])
	return (
		<div>
			<Drawer>
				<Navbar />
				<div>
					{props.children}
				</div>
			</Drawer>
		</div>
	);
}
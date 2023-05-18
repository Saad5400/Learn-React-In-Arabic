import * as Icons from "./Icons";
import "./Layout.css";
import { useState, useLayoutEffect, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

const drawerId = "main-drawer";
const drawerContentId = "main-drawer-content";
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
		// set theme based on user's preference

		// changed: always use dark theme as default
		setThemeDark();
		// uncomment to use user's preference
		// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// 	// dark mode
		// 	setThemeDark();
		// }
		// else {
		// 	// light mode
		// 	setThemeLight();
		// }
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
			<Link to="/" className="btn btn-ghost normal-case text-xl md:text-2xl w-fit">
				<span className="text-primary">
					رياكت
				</span>
				&nbsp;
				<span className="text-base-content">
					بالعربي
				</span>
			</Link>
		</div>
	);
}

function Navbar(props) {

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
		<div className={"navbar z-40 sticky top-0 bg-opacity-90 backdrop-blur py-8 bg-base text-primary-content " + (props.isSticky && "bg-base-100 text-primary-focus border-b-2 border-b-primary-content")}>
			<div className="flex-none tooltip tooltip-bottom" data-tip="القائمة">
				<div>
					<button className={"btn btn-square btn-ghost " + (props.isSticky ? "lg:hidden" : "")} onClick={toggleDrawer}>
						<Icons.Menu />
					</button>
				</div>
			</div>
			<div className="flex-1">
				<div className="tooltip tooltip-bottom" data-tip="الرئيسية">
					<WebsiteName className={"lg:hidden " + (props.isSticky || "hidden")} />
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

function MenuTitle(props) {
	return (
		<li className="menu-title">
			<span>{props.children}</span>
		</li>
	);
}

function MenuLink(props) {
	const location = useLocation();
	const isActive = location.pathname === props.to;
	return (
		<li className={isActive ? "bordered" : "hover-bordered"}>
			<Link to={props.to} className="w-full">
				<div className="w-full">
					{props.children}
				</div>
				<div className=""></div>
				{/* if props.badge */}
				{props.badge && (
					<div className={"badge " + (props.read && "badge-success")}>
						{props.badge}
					</div>
				)}
			</Link>
		</li>
	);
}

function Drawer(props) {
	function handleScroll(event) {
		if (event.target.scrollTop <= 10 && props.isHome) {
			props.setIsSticky(false);
		}
		else {
			props.setIsSticky(true);
		}
	};
	return (
		<div>
			<div className={"drawer " + (props.isSticky && " drawer-mobile") }>
				<input id={drawerId} type="checkbox" className="drawer-toggle" />
				<div id={drawerContentId} className="drawer-content flex flex-col primary-scrollbar" onScroll={handleScroll}>
					{props.children}
				</div>
				<div className="drawer-side primary-scrollbar">
					<label htmlFor={drawerId} className="drawer-overlay"></label>
					<ul className="menu w-80 bg-base-300">
						<div className="p-2 sticky top-0 bg-opacity-90 backdrop-blur hidden lg:flex border-b-2 border-b-primary-content">
							<WebsiteName />
						</div>
						<ul className="pt-2 drawer-side-menu">
							<MenuTitle>مقدمة</MenuTitle>
							<MenuLink to={"/about-react"} badge="5د">
								ما هو رياكت؟
							</MenuLink>
							<MenuTitle>
								من جافاسكربت الى رياكت
							</MenuTitle>
							<MenuLink to={"/from-js-to-react/index"} badge="5د">
								اساسيات
							</MenuLink>
							<MenuLink to={"/from-js-to-react/updating-ui"} badge="5د">
								تحديث الواجهة
							</MenuLink>
							<MenuLink to={"/from-js-to-react/getting-started"} badge="5د">
								ابدأ مع رياكت
							</MenuLink>
							<MenuLink to={"/from-js-to-react/essential-javascript"} badge="5د">
								مفاهيم جافاسكربت
							</MenuLink>
							<MenuLink to={"/from-js-to-react/core-concepts"} badge="5د">
								مفاهيم رياكت
							</MenuLink>
						</ul>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default function Layout(props) {

	const [isSticky, setIsSticky] = useState(false);
	const [firstRender, setFirstRender] = useState(true);
	const [isHome, setIsHome] = useState(true);

	const location = useLocation();

	useLayoutEffect(() => {
		if (firstRender) {
			setThemeFromLocalStorage();
			setFirstRender(false);
		}
	}, [firstRender])
	useLayoutEffect(() => {
		setIsHome(location.pathname === "/");
		// if window scroll is less than 10 and is home page
		if (location.pathname === "/") {
			setIsSticky(false);
		}
		else {
			setIsSticky(true);
		}
	}, [location])
	 useEffect(() => {
		console.log("scrolling to top");
		const drawer = document.getElementById(drawerContentId);
		drawer.scrollTop = 0;
	 }, [location]);

	
	return (
		<div>
			<Drawer setIsSticky={setIsSticky} isSticky={isSticky} isHome={isHome}>
				<Navbar isSticky={isSticky} />
				<div>
					{props.children}
				</div>
			</Drawer>
		</div>
	);
}
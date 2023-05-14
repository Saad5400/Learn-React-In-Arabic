import * as Icons from "./Icons";
import "./Layout.css";

const drawerId = "main-drawer";

function WebsiteName(props) {
	return (
		<div className={props.className}>
			<a className="btn btn-ghost normal-case text-2xl w-fit">
				<span className="text-primary">
					رياكت
				</span>
				&nbsp;
				<span className="text-base-content">
					بالعربي
				</span>
			</a>
		</div>
	);
}

function Navbar() {

	function toggleDrawer() {
		const drawer = document.getElementById(drawerId);
		drawer.checked = !drawer.checked;
	}

	return (
		<div className="navbar z-40 sticky top-0 bg-base-100 bg-opacity-90 backdrop-blur">
			<div className="flex-none">
				<button className="btn btn-square btn-ghost lg:hidden" onClick={toggleDrawer}>
					<Icons.Menu />
				</button>
			</div>
			<div className="flex-1">
				<WebsiteName className="lg:hidden" />
			</div>
			<div className="flex-none">
				<button className="btn btn-square btn-ghost">
					<Icons.Elipses />
				</button>
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
						<div className="p-2 sticky top-0 bg-opacity-90 backdrop-blur hidden lg:flex">
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
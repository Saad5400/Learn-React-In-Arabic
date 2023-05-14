import * as Icons from "./Icons";

const drawerId = "main-drawer";

function Navbar() {

    function toggleDrawer() {
        const drawer = document.getElementById(drawerId);
        drawer.checked = !drawer.checked;
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost " onClick={toggleDrawer}>
                        <Icons.Menu />
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">رياكت بالعربي</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <Icons.Elipses />
                    </button>
                </div>
            </div>
        </div>
    );
}


function Drawer(props) {
    return (
        <div>
            <div className="drawer">
                <input id={drawerId} type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {props.children}
                </div>
                <div className="drawer-side w-fit fixed">
                    <label htmlFor={drawerId} className="drawer-overlay hidden"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function Layout(props) {
    return (
        <div>
            <Navbar />
            <Drawer>
                {props.children}
            </Drawer>
        </div>
    );
}
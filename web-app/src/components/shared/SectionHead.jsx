export default function SectionHead(props) {

    function scrollTo(event) {
        const element = event.currentTarget;
        const drawer = document.getElementById("main-drawer-content");
        if (element) {
            const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
            console.log(yCoordinate);
            drawer.scrollTo({behavior: "smooth", top: yCoordinate - 100});
        }
    }

    return (
        <>
            <h2 className="mb-0" onClick={scrollTo}>
                # {props.children}
            </h2>
            <hr className="max-w-xs mt-2 mb-6" />
        </>
    );
}
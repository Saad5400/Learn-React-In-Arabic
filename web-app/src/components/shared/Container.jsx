export default function Container(props) {
    return (
        <div>
            <div className="container mx-auto p-3">
                {props.children}
            </div>

            <div className="h-screen">

            </div>
        </div>
    );
}
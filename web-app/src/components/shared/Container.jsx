export default function Container(props) {
    return (
        <div>
            <div className="container mx-auto p-3 min-h-screen">
                {props.children}
            </div>
        </div>
    );
}
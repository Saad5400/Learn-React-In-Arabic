export default function Container(props) {
    return (
        <div>
            <br />
            <div className="container mx-auto p-3 min-h-screen">
                {props.children}
            </div>
            <br />
        </div>
    );
}
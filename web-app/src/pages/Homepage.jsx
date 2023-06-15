import { Link } from "react-router-dom";
import * as Icons from "../components/shared/Icons";

function Hero() {
    return (
        <div className="hero h-screen -mt-20 bg-primary text-primary-content">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">رياكت بالعربي</h1>
                    <p className="py-6 text-lg">تعلم رياكت باللغة العربية عن طريق القرائة والتطبيق</p>
                    <Link to="about-react" className="btn w-10/12 hover:bg-transparent hover:text-primary-content">ابدأ الآن!</Link>
                </div>
            </div>
        </div>
    );
}

export default function Homepage() {
    return (
        <>
            <Hero />
        </>
    );
}
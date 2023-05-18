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

function Footer() {
    return (
        <>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">الخدمات</span>
                    <a className="link link-hover">تطوير البرمجيات</a>
                    <a className="link link-hover">المساعدة التعلمية</a>
                </div>
                <div>
                    <span className="footer-title">المطور</span>
                    <a className="link link-hover">حول</a>
                    <a className="link link-hover">تواصل</a>
                </div>
                <div>
                    <span className="footer-title">قانوني</span>
                    <a className="link link-hover">شروط الاستخدام</a>
                    <a className="link link-hover">سياسة الخصوصية</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 bg-neutral text-neutral-content border-base-300">
                <div className="items-center grid-flow-col">
                    <Icons.Hashtag />
                    <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a className="link" href="https://twitter.com/SaadBatwa" target="_blank" rel="noreferrer">
                            <Icons.Twitter />
                        </a>
                        <a className="link" href="https://www.linkedin.com/in/saadbatwa" target="_blank" rel="noreferrer">
                            <Icons.LinkedIn />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default function Homepage() {
    return (
        <>
            <Hero />
            <Footer />
        </>
    );
}
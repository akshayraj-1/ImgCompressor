import {Link} from "react-router-dom";
import {version} from "../../../package.json";

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-2 w-screen px-5 sm:px-8 py-10 bg-colorSurfaceSecondary">
            <Link to="/">
                <img className="h-5" src="/images/logo-grayscale.svg" alt="logo"/>
            </Link>
            <p className="text-sm text-textSecondary text-center mt-2">Copyright © 2024. All rights reserved.</p>
            <p className="text-sm text-textSecondary text-center">Version: {version}</p>
        </footer>
);
}

export default Footer;
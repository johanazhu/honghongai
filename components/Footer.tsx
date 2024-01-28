import Link from "next/link";
import {
    VercelIcon,
    GithubIcon,
} from "@/components/Icons";

export default function Footer() {
    return (
        <div className="text-center text-xs text-gray-400">
            <Link
                target="_blank"
                href="https://azhubaby.com"
                aria-label="developer"
                className="text-slate-600">
                开发者
            </Link>
            {" "}| {" "}
            <Link
                target="_blank"
                href="https://hong.azhubaby.com/privacy"
                aria-label="Privacy"
                className="text-slate-600">
                Privacy
            </Link>
            {" "}| {" "}
            <Link
                target="_blank"
                href="https://hong.azhubaby.com/terms"
                aria-label="Terms of Service"
                className="text-slate-600">
                terms
            </Link>
            <p className="mt-4 text-sm text-slate-500 sm:mt-2">
                Copyright © hong.azhubaby.com rights reserved.
            </p>
        </div>
    );
}

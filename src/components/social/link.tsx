import {ResponsiveButton} from "./responsive.tsx";
import {classes} from "../../util/compose.classes.ts";

export function Link({className, href, children}: {
    className?: string,
    href: string,
    children: React.ReactNode
}) {
    return <a className={classes("transform hover:-translate-y-1 transition duration-200", className)} href={href}>
        <ResponsiveButton children={children}/>
    </a>
}

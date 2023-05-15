import {ReactNode} from "react";
import {classes} from "../util/compose.classes.ts";

export default function CenterContainer({children, extra}: { children: ReactNode, extra?: string }) {
    return (
        <div className={classes("grid grid-cols-1 justify-items-center", extra)}>
            {children}
        </div>
    )
}

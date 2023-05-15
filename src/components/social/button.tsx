import {classes} from "../../util/compose.classes.ts";

export function Button({className, children}: { className: string, children: React.ReactNode }) {
    return <div className={classes(className, "bg-neutral-700 rounded-full")}>
        {children}
    </div>
}

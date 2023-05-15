import {ProfileProps} from "./types.ts";
import {classes} from "../../util/compose.classes.ts";

export function Profile({src, alt, className}: ProfileProps) {
    return (<img
        className={classes(className, "rounded-full border-neutral-400")}
        src={src}
        alt={alt}
    />)
}


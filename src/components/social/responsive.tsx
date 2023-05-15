import {ResponsiveComponent} from "../../responsive/ResponsiveComponent.tsx";
import {states} from "./states.ts";
import {Button} from "./button.tsx";
import {ReactNode} from "react";

export function ResponsiveButton({children}: { children: ReactNode }) {
    return <ResponsiveComponent states={states}>
        {(state) => <Button className={state} children={children}/>}
    </ResponsiveComponent>
}

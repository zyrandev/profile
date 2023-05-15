import {ResponsiveStates} from "../../responsive/ResponsiveComponent.tsx";
import {DeviceType} from "../../responsive/type.ts";

export const states: ResponsiveStates<string> = {
    [DeviceType.Mobile]: "p-2 text-xl",
    [DeviceType.Tablet]: "p-2 text-xl",
    [DeviceType.Desktop]: "p-2 text-xl",
}

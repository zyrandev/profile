import {DeviceType} from "../../responsive/type.ts";
import {ProfileSizes} from "./types.ts";
import {ResponsiveStates} from "../../responsive/ResponsiveComponent.tsx";

export const States: ResponsiveStates<ProfileSizes> = {
    [DeviceType.Mobile]: {
        image: 100,
        size: "10",
    },
    [DeviceType.Tablet]: {
        image: 128,
        size: "14",
    },
    [DeviceType.Desktop]: {
        image: 100,
        size: "14",
    }
}
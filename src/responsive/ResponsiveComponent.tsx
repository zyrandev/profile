import {DeviceType} from "./type.ts";
import {useDevice} from "./deviceContext.tsx";

export type ResponsiveStates<T> = Record<DeviceType, T>;

export type ResponsiveComponentProps<T> = {
    states: ResponsiveStates<T>,
    children: (state: T) => JSX.Element
}

export function ResponsiveComponent<T>({states, children}: ResponsiveComponentProps<T>) {
    const device = useDevice();
    const state = states[device];
    return children(state);
}
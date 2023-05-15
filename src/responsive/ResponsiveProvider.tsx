import {createContext, ReactNode, useEffect, useState} from "react";
import {DeviceType} from "./type.js";

export const DeviceContext = createContext<DeviceType>(DeviceType.Mobile);

export interface ProviderProps {
    children: ReactNode;
    device?: DeviceType;
}

function selectDevice() {
    const width = window.innerWidth;
    if (width < 768) return DeviceType.Mobile;
    if (width < 1024) return DeviceType.Tablet;
    return DeviceType.Desktop;
}

export function ResponsiveProvider({children, device = DeviceType.Mobile}: ProviderProps) {
    const [currentDevice, setDevice] = useState<DeviceType>()

    useEffect(() => {
        function resize() {
            const device = selectDevice();
            if (device !== currentDevice) setDevice(device);
        }

        resize()
        window.addEventListener("resize", () => resize())
    }, [currentDevice])

    return <DeviceContext.Provider value={currentDevice || device}>
        {children}
    </DeviceContext.Provider>
}


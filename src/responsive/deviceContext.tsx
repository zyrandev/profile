import {useContext} from 'react';
import {DeviceContext} from "./ResponsiveProvider.tsx";

export const useDevice = () => useContext(DeviceContext);
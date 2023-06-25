import {ResponsiveComponent} from "../../responsive/ResponsiveComponent.tsx";
import {States as ProfilePresets} from "./states.ts";
import {ProfileSizes} from "./types.ts";
import {Profile} from "./component.tsx";

export function ResponsiveProfile() {
    return <ResponsiveComponent states={ProfilePresets}>
        {(state: ProfileSizes) =>
            <Profile
                className={`mt-10 border-2 w-${state.size} h-${state.size}`}
                src={`https://cdn.discordapp.com/avatars/907512336988913664/7ced4dd762f61c345d9342f51406e1b8?size=${state.image}`}
                alt="zyran profile"
            />
        }
    </ResponsiveComponent>
}

import {ResponsiveComponent} from "../../responsive/ResponsiveComponent.tsx";
import {States as ProfilePresets} from "./states.ts";
import {ProfileSizes} from "./types.ts";
import {Profile} from "./component.tsx";

export function ResponsiveProfile() {
    return <ResponsiveComponent states={ProfilePresets}>
        {(state: ProfileSizes) =>
            <Profile
                className={`mt-10 border-2 w-${state.size} h-${state.size}`}
                src={`https://cdn.discordapp.com/avatars/907512336988913664/598d177fffd129f8ebcb656472db0ecf.webp?size=${state.image}`}
                alt="zyran profile"
            />
        }
    </ResponsiveComponent>
}
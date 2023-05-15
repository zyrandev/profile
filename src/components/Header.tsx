import CenterContainer from "./CenterContainer.tsx";
import {SocialGroup} from "./social/group.tsx";
import Titles from "./Titles.tsx";
import {ResponsiveProfile} from "./profile";

export function Header() {
    return (
        <header>
            <CenterContainer>
                <ResponsiveProfile/>
                <Titles/>
                <SocialGroup/>
            </CenterContainer>
        </header>
    )
}
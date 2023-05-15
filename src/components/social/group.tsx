import {BsDiscord, BsGithub, BsInstagram, BsTiktok, BsTwitter, BsYoutube} from "react-icons/bs";
import {Link} from "./link.tsx";

export function SocialGroup() {
    return (
        <div className="flex flex-row space-x-[0.5rem]">
            <Link href="https://discord.com/users/907512336988913664" children={<BsDiscord className=""/>}/>
            <Link href="https://github.com/ZyranDev" children={<BsGithub/>}/>
            <Link href="https://www.tiktok.com/@zyrandev" children={<BsTiktok/>}/>
            <Link href="https://www.youtube.com/channel/UCfxHxBZ7TPHCz4vnpeViugQ" children={<BsYoutube/>}/>
            <Link href="https://twitter.com/ZyranDev" children={<BsTwitter/>}/>
            <Link href="https://www.instagram.com/zyrandev/" children={<BsInstagram/>}/>
        </div>
    )
}
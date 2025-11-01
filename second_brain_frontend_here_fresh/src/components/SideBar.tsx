import { SideBarItems } from './SideBarItems'
import { Youtube } from '../icons/YoutubeIcon'
import { Twitter } from '../icons/TwitterIcon'
import {Logo} from '../icons/Logo'

export function SideBar() {
    return (


        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 ">
            <div className='flex text-2xl justify-center p-4'>
                <div className='pr-2 text-purple-500' >
                    <Logo></Logo>
                </div>
                brainly
            </div>

            <div className='pt-4 pl-4'>
                <SideBarItems text="Youtube" icon={<Youtube></Youtube>}></SideBarItems>
                <SideBarItems text="Twitter" icon={<Twitter></Twitter>}></SideBarItems>
            </div>
        </div>
    )
}
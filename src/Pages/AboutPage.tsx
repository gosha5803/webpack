import { FC } from "react";
import PngAvatar from '@/assets/avatar.png'
import CalendarSvg from '@/assets/calendar.svg'

var AboutPage: FC = () => {
    var pow = (a:number) => a**2
    console.log(pow('4'))

    throw new Error('komjn')
    return(
        <div>
            About Page
            <img src={PngAvatar} width={200}/>
            <CalendarSvg color="orange" height={100} width={100}/>
        </div>
    )
}

export default AboutPage
import { FC, useState } from "react";
import PngAvatar from '@/assets/avatar.png'
import CalendarSvg from '@/assets/calendar.svg'

var AboutPage: FC = () => {
    var [color, setColor] = useState<'orange' | 'blue'>('orange')
    var switchColor = () => setColor(prev => prev == 'blue' ? 'orange' : 'blue')

    return(
        <div>
            About Page
            <img src={PngAvatar} width={200}/>
            <h2 style={{color}}>This app was loaded by: {__LOADER__} loader</h2>
            <CalendarSvg color={color} onClick={() => switchColor()} height={100} width={100}/>
        </div>
    )
}

export default AboutPage
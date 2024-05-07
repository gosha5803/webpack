import { FC } from "react";
import JpgAvatar from '@/assets/avatar.jpg'

var ShopPage:FC = () => {
    return(
        <>
            <h2>Shop Page</h2>
            <img src={JpgAvatar} width={200}/>
        </>
    )
}

export default ShopPage
import React from "react"
import Error from "../../components/Error/Error"
import StoreItemsBoard from '../../components/StoreItemsBoard/StoreItemsBoard'
import { StoreItemPropsTemplate } from '../../types/storeItemsTypes'

const StoreItemsView = (props: StoreItemPropsTemplate) => {
    if (!props.storeItems) return <Error errorTitle="we can`t take store data"/>
    return <StoreItemsBoard {...props}/>
}

export default StoreItemsView
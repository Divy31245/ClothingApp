import React from "react";
import '../../components(reusable)/preview-collection/preview-collection.component'
import CollectionPreview from "../../components(reusable)/preview-collection/preview-collection.component";
import ShopData from "./shop.data";
class ShopPage extends React.Component {
    constructor(){
        super();

        this.state = {
            collections:ShopData
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps}) =>(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;
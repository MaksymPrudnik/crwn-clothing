import { Component } from 'react'
import { SHOP_DATA } from './collectionData'

import { CollectionPreview } from '../../components/CollectionPreview/CollectionPreview.component'

class ShopPage extends Component {
    constructor() {
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                <h1>Shop Page</h1>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage
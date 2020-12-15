import './CollectionPreview.styles.scss'

import { CollectionItem } from '../CollectionItem/CollectionItem.component'

export const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)
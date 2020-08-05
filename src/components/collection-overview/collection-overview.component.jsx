import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  CollectionPreview  from '../preview-collection/preview-collection.component';
import './collection-overview.styles.scss';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        <div className='shop-page'>
        {
            collections.map( ({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview 
})

export default connect(mapStateToProps)(CollectionsOverview);
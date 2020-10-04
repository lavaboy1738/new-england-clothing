import React from "react";
import "./collection.styles.scss";
import {connect} from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component.jsx";
import {selectCollection} from "../../redux/shop/shop.selectors.js";


const CollectionPage = ({match}) => {
    return <div className="collection-page">
        <h2>CATEGORY PAGE</h2>
    </div>
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage);
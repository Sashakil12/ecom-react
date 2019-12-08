import { connect } from 'react-redux';
import CollectionPage from './collection.components';
import { createStructuredSelector } from 'reselect';
import { selectIsThereAnyItemsInCollection } from '../../redux/collection-items/collectionSelector';
import { compose } from 'redux'
import WithSpinner from '../../components/withSpinner/withSpinner.component'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsThereAnyItemsInCollection(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage)

export default CollectionPageContainer;
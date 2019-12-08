import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collections-overview/collectinsOverView.components';
import { selectIsFetching } from '../../redux/collection-items/collectionSelector';
import WithSpinner from '../../components/withSpinner/withSpinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
})

const CollectionOverviewContainer =  compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionOverview)
export default CollectionOverviewContainer
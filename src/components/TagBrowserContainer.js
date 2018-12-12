import TagBrowser from './TagBrowser'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  tags: state.tags
})

export default connect(mapStateToProps)(TagBrowser)
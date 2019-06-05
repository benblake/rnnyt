import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadNews } from "../actions/newsActions";
import { NewsFeed } from "../components/NewsFeed/NewsFeed";
import { allNewsSelector } from "../selectors/newsSelectors";

const mapStateToProps = (state: any) => ({
  news: allNewsSelector(state),
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      loadNews,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsFeed);

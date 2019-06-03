import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js'
// import searchYouTube from './lib/searchYouTube.js'
// import YOUTUBE_API_KEY from './config/youtube.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watching: false,
      video: exampleVideoData[0],
      // key: videos[0].etag,
      videos: []
    };

    this.displayVideo = this.displayVideo.bind(this);
  }

  componentDidMount() {
    this.get('hack reactor');
  }

  //finding the correct function location
  displayVideo(e) {
    console.log(e);
    this.setState({
      watching: !this.state.watching,
      video: e.video,
      key: e.video.etag
    });
  }

  get(query){
    // searchYouTube({
    //   key: YOUTUBE_API_KEY,
    //   query: query
    // }, callback)
    var options = {
      key: this.props.API_KEY,
      query: query
    }

    this.props.searchYouTube(options, (videos) => {
      // console.log(videos);
      this.setState({
        videos: videos,
        video: videos[0]
      })
    })
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} key={this.state.key} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClick={this.displayVideo} />
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
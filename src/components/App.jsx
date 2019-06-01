import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watching: false,
      video: exampleVideoData[0],
      key: exampleVideoData[0].etag,
    };

    this.displayVideo = this.displayVideo.bind(this);
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

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} key={this.state.key} />
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} onClick={this.displayVideo} />
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
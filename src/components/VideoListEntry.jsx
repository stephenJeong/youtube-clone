import App from './App.js';
import exampleVideoData from '../data/exampleVideoData.js';


var VideoListEntry = (props) => {


  // var displayVideo = (e) => {
  //   event.preventDefault();
  //   // console.log(e.target);
  //   App.video = props.video;
  //   console.log(App.video);
  //   App.key = props.video.etag;
  //   // console.log(App.key);
  //   // exampleVideoData.unshift(App.video)
  //   // App.setState({
  //   //   watching: true
  //   // })

  // };

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.title} />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => props.onClick(props)}>{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

// class VideoListEntry extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {watching: false};
//   }

//   displayVideo() {
//     this.setState({
//       watching: !this.state.watching
//     });
//   }

//   render() {
//     return (
//       <div className="video-list-entry media">
//         <div className="media-left media-middle">
//           <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt={this.props.video.snippet.title} />
//         </div>
//         <div className="media-body">
//           <div className="video-list-entry-title" onClick={this.displayVideo}>{this.props.video.snippet.title}</div>
//           <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
//         </div>
//       </div>
//     )
//   }
// }



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;

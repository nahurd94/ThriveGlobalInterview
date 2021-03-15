import * as React from "react"

//styles for responsive video iframe
const videoWrapperStyles = {
    position: "relative",
    paddingBottom: "56.25%", //16:9  aspect ratio
    paddingTop: 25,
}

const videoFrameStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "75%",
    height: "75%"
}

//Video component 
//input: props - title and video source to allow for reuse with future videos
const EmbeddedVideo = (props) => {
    return (
      <div style={videoWrapperStyles}>
        <iframe title={props.title} style={videoFrameStyles} src={props.videoSource} frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
    )
  }

export default EmbeddedVideo
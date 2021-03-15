import * as React from "react"
import EmbeddedVideo from "../components/video"

// styles
const headingStyles = {
  color: "#FF0000"
}

// HomePage component
const HomePage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        <a style={headingStyles} href="http://google.com">Hello World</a>
      </h1>
      <EmbeddedVideo title="Kitten Video" videoSource="https://www.youtube.com/embed/kr4g2h5YmnU"/>
    </main>
  )
}

export default HomePage

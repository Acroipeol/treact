import React from "react"
// import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/TwoColumnWithVideo.js";

function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
    </AnimationRevealPage>
  )
}

export default App
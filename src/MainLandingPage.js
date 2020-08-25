import React from "react"
// import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Pricing from "components/pricing/ThreePlans.js";

function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <Pricing />
    </AnimationRevealPage>
  )
}

export default App
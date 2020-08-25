import React from "react"
// import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
// import Hero from "components/hero/Sss.js";
import Headers from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

function App() {
  return (
    <AnimationRevealPage disabled>
      <Headers />
      <Pricing />
    </AnimationRevealPage>
  )
}

export default App
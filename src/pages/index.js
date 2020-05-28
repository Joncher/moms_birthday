import React, { useState } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import pic0 from "../images/001.jpg"
import pic1 from "../images/002.jpg"
import pic2 from "../images/003.jpg"
import pic3 from "../images/004.jpg"

const picArray = [pic0, pic1, pic2]

function IndexPage() {
  const [count, setCount] = useState(0)
  const [picClass, setPicClass] = useState("pic")
  return (
    <Layout>
      <SEO title="Home" />
      <div className="text">I made this for you as a birthday card</div>
      <div className="text">I love you!!!!</div>
      <div className="card">
        <div className="text">
          To a Mom who is always there no matter the cost
        </div>
        <div>Click me</div>
        <img
          className={picClass}
          src={picArray[count]}
          onClick={() => {
            if (count > 1) {
              setCount(0)
              setPicClass("pic")
            } else {
              setCount(count + 1)
              setPicClass("pic")
            }
          }}
        ></img>
        <div className="text">
          Happy 65th Birthday Mom thank you for everything
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

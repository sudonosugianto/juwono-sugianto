import React from "react"
import { graphql } from "gatsby"
import Background from '../../static/background.jpg'
import Instagram from "../../static/instagram.svg"
import Twitter from "../../static/twitter.svg"
import Youtube from "../../static/youtube.svg"
import "../styles/global.css"


export default ({ data }) => (
    <div className="grid grid-rows-2 lg:grid-cols-2 h-screen">

        {/* home image */}
        <div>
            <img className="h-screen w-full object-cover object-top" src={Background} alt="" />
        </div>

        {/* profile */}
        <div className="h-screen bg-black p-6 md:p-16">

            {/* title */}
            <div className="mt-4 sm:mb-20 md:mb-10">
                <h1 className="title text-white text-center uppercase font-bold lg:text-2xl">{data.site.siteMetadata.title}</h1>
            </div>

            {/* tagline and about */}
            <div className="mb-20">
                <div className="mb-12">
                    <p className="tagline text-white text-center font-bold">{data.site.siteMetadata.description}</p>
                </div>
                <div>
                    <p className="about text-white text-center">
                        Loves Portraits. Beautiful Stories.&nbsp;Currently reside in Wuhan, China.
                    </p>
                </div>
                <div className="text-center mt-10 md:mt-16">
                    <a href="https://www.instagram.com/juwonosugianto/" target="_blank" rel="noopener noreferrer">
                        <button className="action bg-transparent hover:bg-white py-3 px-5 border-white border-2 text-white font-bold hover:text-black uppercase">
                            Gallery
                        </button>
                    </a>
                </div>
            </div>

            {/* social media */}
            <div className="text-center">
                <a href="https://www.instagram.com/juwonosugianto/" target="_blank" rel="noopener noreferrer">
                    <img className="social-media-icon inline" src={Youtube} alt="" />
                </a>
                <a href="https://www.instagram.com/juwonosugianto/" target="_blank" rel="noopener noreferrer">
                    <img className="social-media-icon inline" src={Instagram} alt="" />
                </a>
                <a href="https://www.instagram.com/juwonosugianto/" target="_blank" rel="noopener noreferrer">
                    <img className="social-media-icon inline" src={Twitter} alt="" />
                </a>
            </div>
        </div>
    </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
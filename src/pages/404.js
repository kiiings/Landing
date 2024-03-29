import tw from "twin.macro"
import React from "react"
import SEO from "../components/seo"

import kiiin from "../images/kiiin.svg"

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase text-center
`

const Text = tw.p`
  text-xl text-gray-700
`

const Logos = tw.div`
  flex items-center justify-around mb-6 px-16
`

const Icon = tw.img`
  h-10
`

const Footer = tw.footer`
  mt-6 text-center
`

export default () => (
  <Wrapper>
    <SEO title="Page Not Found" />
    <Main>
      <Logos>
        <Icon src={kiiin} alt="KIIIN" />
      </Logos>
      <Heading>Oops!</Heading>
      <Text>We can't find the page that you are looking for..</Text>
      <Footer>
        <p>Copyright &copy; 2020</p>
      </Footer>
    </Main>
  </Wrapper>
)

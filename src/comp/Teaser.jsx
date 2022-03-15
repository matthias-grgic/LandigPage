import styled from 'styled-components'
import TeaserImg1 from '../img/teaser_01.jpg'
import TeaserImg2 from '../img/teaser_02.jpg'
import TeaserImg3 from '../img/teaser_03.jpg'
import { useState } from 'react'

function Teaser() {
  const [lightboxDisplay, setLightboxDisplay] = useState(false)
  const [setImage, setSetImage] = useState(null)

  const showImage = () => setLightboxDisplay((prev) => !prev)
  const whichIMG = (img) => setSetImage(img)

  return (
    <TeaserContainer>
      <TeaserItem onClick={() => showImage() + whichIMG(TeaserImg1)}>
        <TeaserImageOne />
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem mollitia voluptates cumque nemo ipsa qui suscipit eius saepe culpa quae!</Text>
      </TeaserItem>

      <TeaserItem onClick={() => showImage() + whichIMG(TeaserImg2)}>
        <TeaserImageTwo />
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, necessitatibus odio? Libero voluptatibus mollitia laudantium dolor veritatis voluptatem rerum hic?</Text>
      </TeaserItem>

      <TeaserItem onClick={() => showImage() + whichIMG(TeaserImg3)}>
        <TeaserImageThree />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis perferendis asperiores consequatur numquam, fugit odio.</Text>
      </TeaserItem>

      {lightboxDisplay ? (
        <LightBox onClick={() => showImage()}>
          <img src={setImage}></img>
        </LightBox>
      ) : (
        ''
      )}
    </TeaserContainer>
  )
}

export default Teaser

const LightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 155, 237, 0.52);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const TeaserContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 80%;
  height: auto;
  gap: 50px;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
`

const TeaserItem = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
`

const Text = styled.div`
  display: flex;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
`

const TeaserImageOne = styled.div`
  background-image: url(${TeaserImg1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease;
  }
`

const TeaserImageTwo = styled(TeaserImageOne)`
  background-image: url(${TeaserImg2});
`

const TeaserImageThree = styled(TeaserImageOne)`
  background-image: url(${TeaserImg3});
`

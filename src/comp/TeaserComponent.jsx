import styled from 'styled-components'
import { useState } from 'react'

function TeaserComponent({ img1, img2, img3, text1, text2, text3 }) {
  const [lightboxDisplay, setLightboxDisplay] = useState(false)
  const [setImage, setSetImage] = useState('')

  const showImage = () => setLightboxDisplay((prev) => !prev)
  const whichIMG = (img) => setSetImage(img)

  return (
    <TeaserContainer>
      <TeaserItem onClick={() => showImage() + whichIMG(img1)}>
        <TeaserImageOne url={img1} />
        <Text>{text1}</Text>
      </TeaserItem>

      <TeaserItem onClick={() => showImage() + whichIMG(img2)}>
        <TeaserImageTwo url={img2} />
        <Text>{text2}</Text>
      </TeaserItem>

      <TeaserItem onClick={() => showImage() + whichIMG(img3)}>
        <TeaserImageThree url={img3} />
        <Text>{text3}</Text>
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

export default TeaserComponent

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
  background-color: transparent;
  height: auto;
  justify-content: center;
  padding: 20px;
  width: 100%;
  gap: 40px;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
`

const TeaserItem = styled.section`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
`

const Text = styled.div`
  display: flex;
  background-color: transparent;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
`

const TeaserImageOne = styled.div`
  background-color: transparent;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease;
  }
`

const TeaserImageTwo = styled(TeaserImageOne)``

const TeaserImageThree = styled(TeaserImageOne)``

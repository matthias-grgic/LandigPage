import styled from 'styled-components'
import TeaserImg1 from '../img/teaser_01.jpg'
import TeaserImg2 from '../img/teaser_02.jpg'
import TeaserImg3 from '../img/teaser_03.jpg'
import { useState } from 'react'

function Teaser() {
  const [lightboxDisplay, setLightboxDisplay] = useState(false)

  const showImage = () => setLightboxDisplay((prev) => !prev)

  return (
    <TeaserContainer>
      <TeaserOne onClick={() => showImage()}>
        <TeaserImageOne />
        {lightboxDisplay ? (
          <LightBox>
            <img src={TeaserImg1}></img>
          </LightBox>
        ) : (
          ''
        )}
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>
      </TeaserOne>

      <TeaserTwo>
        <TeaserImageTwo />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>{' '}
      </TeaserTwo>

      <TeaserThree>
        <TeaserImageThree />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>{' '}
      </TeaserThree>
    </TeaserContainer>
  )
}

export default Teaser

const LightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(196, 155, 237, 0.52);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const TeaserContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: auto;
  gap: 50px;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`

const TeaserOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`

const TeaserTwo = styled(TeaserOne)``

const TeaserThree = styled(TeaserOne)``

const Text = styled.div`
  display: flex;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
`

const TeaserImageOne = styled.div`
  background-image: url(${TeaserImg1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
`

const TeaserImageTwo = styled(TeaserImageOne)`
  background-image: url(${TeaserImg2});
`

const TeaserImageThree = styled(TeaserImageOne)`
  background-image: url(${TeaserImg3});
`

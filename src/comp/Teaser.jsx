import styled from 'styled-components'
import TeaserImg1 from '../img/teaser_01.jpg'
import TeaserImg2 from '../img/teaser_02.jpg'
import TeaserImg3 from '../img/teaser_03.jpg'

function Teaser() {
  return (
    <TeaserContainer>
      <TeaserOne>
        <TeaserImageOne />
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

const TeaserContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: auto;
  gap: 50px;
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

import InfoText from '../comp/InfoText'
import TeaserComponent from '../comp/TeaserComponent'
import TeaserImg1 from '../img/teaser_01.jpg'
import TeaserImg2 from '../img/teaser_02.jpg'
import TeaserImg3 from '../img/teaser_03.jpg'
import Welcome from '../comp/Welcome.jsx'

function LandingPage() {
  return (
    <>
      <Welcome />
      <InfoText />
      <TeaserComponent
        img1={TeaserImg1}
        text1={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem mollitia voluptates cumque nemo ipsa qui suscipit eius saepe culpa quae!'}
        img2={TeaserImg2}
        text2={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem mollitia voluptates cumque nemo ipsa qui suscipit eius saepe culpa quae!'}
        img3={TeaserImg3}
        text3={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem mollitia voluptates cumque nemo ipsa qui suscipit eius saepe culpa quae!'}
      />
    </>
  )
}

export default LandingPage

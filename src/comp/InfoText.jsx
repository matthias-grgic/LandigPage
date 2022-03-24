import styled from 'styled-components'

function InfoText() {
  return (
    <ColorContainer>
      <Text>
        {`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam doloremque eos delectus nostrum voluptatem nam architecto eveniet ut, velit itaque animi labore necessitatibus sed excepturi ducimus laudantium ipsa ea. Non laborum nulla et at, accusantium, impedit, fuga animi porro nostrum quidem blanditiis obcaecati similique laudantium illum consequuntur minima cum. Mollitia nemo asperiores earum consectetur et fuga.  Officiis sunt eos provident possimus repellendus porro nihil fugit est dolores voluptatum temporibus rerum qui vitae maxime labore, ipsam, commodi magnam soluta consequuntur quis nesciunt delectus dolorum. Rem quibusdam quod voluptatem dolorem sed doloremque, id placeat nesciunt neque, nulla et consequatur quisquam. Laboriosam fugit deleniti, consequatur voluptatem dicta non aspernatur voluptatum earum reprehenderit molestiae cumque ipsa veritatis vel distinctio sint architecto ratione eveniet quam aut repudiandae fugiat corporis eius.
        `}
      </Text>
    </ColorContainer>
  )
}

export default InfoText

const ColorContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.article`
  display: flex;
  background-color: transparent;
  color: var(--main-txt-color);
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  padding: 30px 0;
  white-space: pre-line;
  width: 50%;
  @media (max-width: 550px) {
    width: 80%;
  }
  @media (min-width: 2000px) {
    width: 40%;
  }
`

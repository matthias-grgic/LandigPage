import styled from 'styled-components'

function InfoText() {
  return (
    <>
      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam doloremque eos delectus nostrum voluptatem nam architecto eveniet ut, velit itaque animi labore necessitatibus sed
        excepturi ducimus laudantium ipsa ea. Non laborum nulla et at, accusantium, impedit, fuga animi porro nostrum quidem blanditiis obcaecati similique laudantium illum consequuntur minima cum.
        Mollitia nemo asperiores earum consectetur et fuga. Officiis sunt eos provident possimus repellendus porro nihil fugit est dolores voluptatum temporibus rerum qui vitae maxime labore, ipsam,
        commodi magnam soluta consequuntur quis nesciunt delectus dolorum. Rem quibusdam quod voluptatem dolorem sed doloremque, id placeat nesciunt neque, nulla et consequatur quisquam. Laboriosam
        fugit deleniti, consequatur voluptatem dicta non aspernatur voluptatum earum reprehenderit molestiae cumque ipsa veritatis vel distinctio sint architecto ratione eveniet quam aut repudiandae
        fugiat corporis eius.
      </Container>
    </>
  )
}

export default InfoText

const Container = styled.div`
  display: flex;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  margin-bottom: 50px;
  width: 80%;
`

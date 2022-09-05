import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  min-height: calc(100vh - 7rem);
  grid-template-columns: 1fr;
  grid-template-rows: 10rem 30rem 50rem 6rem;
  background: var(--clr-white);
  .footer {
    background: #4c4b61;
  }
  .title {
    font-size: 3rem;
    text-align: center;
    padding-top: 1rem;
    /* color: var(--clr-primary-2); */
  }
  .bold {
    font-size: 3rem;
    color: var(--clr-black);
  }
  .name {
    text-transform: capitalize;
    font-size: 3rem;
  }
  .image {
    height: 25rem;
    width: 20rem;
    display: grid;
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    justify-self: center;
  }
  .img {
    justify-self: center;
  }
  .font {
    font-size: 2rem;
  }
  .text {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 1fr;
    gap: 1rem;
  }
  .start-btn {
    text-align: center;
    justify-self: left;
    border-radius: 3rem;
    color: var(--clr-white);
    font-size: 2rem;
    padding: 1rem;
    background: var(--clr-primary-1);
  }
  .earth {
    display: grid;
    background-image: url(".Image.jpg");

    /* background: var(--clr-darkblue); */
    opacity: 0.92;
    height: 50rem;
    width: 100%;
    padding-top: 5rem;
  }
  .earth-container {
    display: grid;
    width: 80vw;
    text-align: center;
    padding-top: 10rem;
    justify-self: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    color: white;
  }
`;

export default Wrapper;

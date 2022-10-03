import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  min-height: calc(100vh - 7rem);
  grid-template-columns: 1fr;
  grid-template-rows: 18rem 30rem 50rem 6rem;
  background: var(--clr-white);
  .footer {
    background: #242323;
    color: white;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }
  .link {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .main-title {
    font-size: 1.4rem;
    text-align: center;
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
  .pic {
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }

  .background {
    background: linear-gradient(to left, #009ffd, #2a2a72);
  }

  .earth-container {
    display: grid;
    width: 80vw;
    text-align: center;
    height: 20rem;
    justify-self: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    color: white;
    position: absolute;
    z-index: 2;
    top: 73rem;
    font-size: 2rem;
  }
`;

export default Wrapper;

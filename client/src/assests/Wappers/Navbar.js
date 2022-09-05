import styled from "styled-components";

const Wrapper = styled.div`
  height: 7rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid lightgray;
  background: linear-gradient(
    to right,
    var(--clr-primary-1),
    var(--clr-primary-4),
    var(--clr-primary-1)
  );
  opacity: 0.8;
  color: var(--clr-white);
  .logo-container {
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .logo-containers {
    padding-left: 3rem;
  }
  .icon {
    justify-self: end;
    align-self: center;
    padding-right: 0.5rem;
    font-size: 2rem;
  }
  .title {
    align-self: center;
    font-size: 2rem;
  }
  .links-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
    font-size: 1.3rem;
  }
  .logout-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-self: end;
    padding: 2rem;
  }
  .logout-btn {
    border: none;
    background: var(--clr-darkblue);
    height: 2rem;
    width: 5rem;
    color: var(--clr-white);
    border-radius: var(--radius);
    cursor: pointer;
  }
  .small-screen {
    justify-self: end;
    background: none;
    border: none;
    width: 100%;
    font-size: 2rem;
    color: var(--clr-darkblue);
    cursor: pointer;
  }

  @media screen and (min-width: 1600px) {
    .small-screen {
      display: none;
    }
  }

  @media screen and (max-width: 1600px) {
    .big-screen {
      display: none;
    }
  }
`;

export default Wrapper;

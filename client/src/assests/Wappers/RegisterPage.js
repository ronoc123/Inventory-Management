import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  column-gap: 2rem;
  height: 100vh;

  opacity: 0.8;
  .demo-container {
    display: grid;
    place-items: center;
    justify-self: right;
    background: linear-gradient(
      to right,
      var(--clr-primary-1),
      var(--clr-primary-4),
      var(--clr-primary-1)
    );
    border-radius: 0.5rem;
    min-width: 25rem;
    min-height: 30rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  }
  .demo-btn {
    cursor: pointer;
    min-width: 40%;
    min-height: 20%;
    background: white;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    font-size: 2rem;
    padding: 1rem;
  }
  .form {
    justify-self: left;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    min-width: 25rem;
    min-height: 30rem;
    padding: 1em;
    border-radius: 0.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      to right,
      var(--clr-primary-1),
      var(--clr-primary-4),
      var(--clr-primary-1)
    );
    font-size: 1.5rem;
  }
  .form-row {
    display: grid;
    width: 100%;
    justify-content: center;
  }
  .form-input {
    justify-self: center;
    width: 100%;
    min-height: 2rem;
    font-size: 1.3rem;
    padding-left: 0.2rem;
  }
  .form-label {
    text-transform: capitalize;
  }

  .submit-btn {
    border: 1px solid black;
    background: white;
    font-size: 1rem;
    padding: 0.5rem;
    width: 50%;
    border-radius: 0.2rem;
    cursor: pointer;
  }
  .toggle-btn {
    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;

    /* grid-template-rows: 1fr 1fr; */
    .form {
      justify-self: center;
      margin-bottom: 2rem;
    }
    .demo-container {
      justify-self: center;
      min-height: 15rem;
      margin-top: 2rem;
    }
  }
`;

export default Wrapper;

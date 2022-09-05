import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  justify-content: center;
  .container {
    width: 70vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    margin-top: 3rem;
    border: 1px solid lightgrey;
    padding: 1rem;
    box-shadow: var(--dark-shadow);
  }
  .single-container {
    height: 10rem;
    width: 100%;
    font-size: 1.2rem;
  }
  .add-container {
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    width: 50%;
    margin-bottom: 1rem;
  }
  .form-label {
    font-size: 1.3rem;
  }
  .form-input {
    height: 1.5rem;
    font-size: 1.1rem;
  }
  .form-select {
    height: 1.5rem;
    font-size: 1.1rem;
  }
  .option-input {
    font-size: 1.1rem;
  }
  .submit-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .invBtn {
    background: none;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
    background: var(--clr-primary-9);
    border: 1px solid var(--clr-primary-1);
  }
  .search-container {
    display: grid;
    grid-template-columns: 1fr 3rem;
    align-items: center;
    .form-row {
      width: 100%;
    }
    .form-input {
      height: 2rem;
    }
  }
  .search-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: grid;
    place-items: center;
    height: 2rem;
    align-self: flex-start;
    width: 100%;
    border: 1px solid grey;
  }
  .inventory-container {
    display: grid;
    justify-content: left;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 3rem;
    gap: 0.5rem;
  }
`;

export default Wrapper;

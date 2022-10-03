import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: 22rem auto;
  row-gap: 2rem;
  justify-content: center;
  width: 100vw;

  .single-container {
    display: grid;
    justify-self: center;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    width: 70%;
    padding: 1rem;
    background: #fbf8f5;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.13);
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 3rem 1fr;
    justify-self: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.13);
    width: 70%;
    padding: 2rem;

    background: #fbf8f5;
  }
  .form-input {
    display: grid;
  }
  .add-container {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
  }
  .form-input {
    height: 1.5rem;
    font-size: 1.1rem;
    padding-left: 0.2rem;
  }
  .form-select {
    display: grid;
    height: 1.5rem;
    width: 14rem;
    font-size: 1.1rem;
  }
  .form-label {
    font-size: 1.1rem;
  }
  .option-input {
  }
  .search-container {
    display: grid;
    grid-template-columns: 1fr 5rem;
    column-gap: 2rem;
    .form-input {
      width: 100%;
      height: 2rem;
      font-size: 1.3rem;
    }
    .search-btn {
      height: 2rem;
      background: white;
      cursor: pointer;
    }
  }
  .inventory-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
  .invBtn {
    background: none;
    width: 15rem;
    height: 3rem;
    cursor: pointer;
    border: none;
    font-size: 1.3rem;
  }
  .submit-btn {
    background: none;
    justify-self: left;
    height: 2rem;
    width: 14rem;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  .info-container {
    justify-self: left;
  }
  .info {
    font-size: 1.5rem;
  }
`;

export default Wrapper;

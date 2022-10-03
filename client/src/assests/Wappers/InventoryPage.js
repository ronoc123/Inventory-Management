import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    width: 70vw;
    margin-top: 2rem;
    background: #fbf8f5;
    box-shadow: var(--dark-shadow);
    padding: 2rem;
  }
  .search-container {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 5rem;
  }

  .search-items {
    display: grid;
    grid-template-columns: 1fr 5rem;
    width: 100%;
  }

  .form-input {
    width: 100%;
    height: 100%;
    padding-left: 0.2rem;
    font-size: 1.2rem;
  }
  .search-btn {
    background: none;
    border: 1px solid grey;
    display: grid;
    place-items: center;
    cursor: pointer;
    height: 2rem;
  }
  .letter {
    display: grid;
    place-items: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: var(--clr-primary-2);
    font-size: 2rem;
    font-weight: 600;
  }
  .info-container {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }
  .single-item {
    padding: 1rem;
    display: grid;
    place-items: center;
    grid-template-columns: 15rem 1fr 1fr 10rem;
    position: relative;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid grey;
    background: white;
  }
  .col-title {
    display: grid;
    grid-template-columns: 15rem 1fr 1fr 10rem;
    place-items: center;
  }
  .delete-btn {
    background: none;
    border: none;
    color: #a10000;
    font-size: 2rem;
    cursor: pointer;
  }

  .info {
    display: grid;
    grid-template-columns: 1fr;
  }
  .name {
    font-size: 1.5rem;
  }
  .quantity {
    font-size: 3rem;
  }
  .overlay {
  }
  .overlay-btn {
    background: none;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    background: #42403e;
    color: white;
    border-radius: 0.5rem;
    width: 10%;
    min-width: 8rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1300px) {
    .info-container {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 800px) {
    .info-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;

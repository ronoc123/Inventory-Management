import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: var(--transition);
  z-index: 2;
  place-items: center;
  .container {
    position: relative;
    width: 40%;
    min-width: 25rem;
    max-width: 45rem;
    min-height: 20rem;
    height: 50%;
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-rows: 20% 60%; */
    place-items: center;
    border-radius: 0.5rem;
    /* opacity: 0.9; */
  }
  .add-btn {
    background: none;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    background: #42403e;
    color: white;
    /* font-weight: 500; */
    border-radius: 0.5rem;
  }
  .close-icons {
    position: absolute;
    font-size: 3rem;
    cursor: pointer;
    top: 0.5rem;
    right: 0.5rem;
    color: #ff5257;
    background: none;
    border: none;
  }
  .form-label {
    font-size: 1.5rem;
  }
  .form-input {
    height: 2rem;
    font-size: 1.3rem;
  }
`;

export default Wrapper;

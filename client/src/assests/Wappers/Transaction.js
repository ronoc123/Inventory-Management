import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  .transaction-container {
    border: 1px solid lightgrey;
    box-shadow: var(--dark-shadow);
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr;
    /* color: #0000ee; */
  }
  .title-heading {
    font-size: 2rem;
  }
  .title {
    font-size: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    text-decoration: bold;
    font-size: 1.3rem;
    height: 5rem;
    align-items: center;
    padding-left: 0.8rem;
  }

  .number {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .transaction {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 4rem;
    padding-left: 1rem;
  }
  .transaction:nth-child(even) {
    background: #f0eff4;
  }
`;

export default Wrapper;

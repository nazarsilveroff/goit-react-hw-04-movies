import styled from 'styled-components';
export const MovieDetailsPageWrapper = styled.div`
  .buttonBack {
    font-weight: bolder;
    font-size: 25px;
    cursor: pointer;
    width: 100%;
    padding: 10px 0;
    border-color: transparent;
    color: #2c2c2c;
    transition: all 150ms ease-in-out;
    background: rgb(168, 86, 162);
    background: radial-gradient(
      circle,
      rgba(168, 86, 162, 0.31976540616246496) 0%,
      rgba(245, 59, 59, 0.3169642857142857) 50%,
      rgba(238, 210, 43, 0.25253851540616246) 100%
    );
  }
  .buttonBack:hover {
    transition: all 150ms ease-in-out;
    font-size: 30px;
    color: #ffe600;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
  h1,
  h2 {
    text-align: center;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    background-color: rgba(255, 255, 255, 0.699);
  }
  .posterContainer {
    background-color: rgba(255, 255, 255, 0.699);
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    width: 500px;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    .poster {
      
    }
    .userScore {
      font-weight: bolder;
      font-size: 25px;
    }
  }
  .overviewConatiner {
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    .overview {
      background-color: rgba(205, 214, 219, 0.4);

      margin: 0 0 20px;
      font-size: 25px;
      font-weight: 300px;
      padding: 0 40px 20px;
      box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 6px 1px -1px rgba(0, 0, 0, 0.12);
    }
  }

  .genresList {
    list-style: none;
    padding: 0;
  }
  .genresItems {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    background-color: rgba(205, 214, 219, 0.4);
    margin-bottom: 5px;
    padding: 5px 0 5px;
  }
  .additionalList {
    list-style: none;
    padding: 0;
  }
  .additionalItems {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    background-color: rgba(205, 214, 219, 0.4);
    margin-bottom: 5px;
    padding: 5px 0 5px;
    .link {
      text-decoration: none;
      text-transform: uppercase;
      color: black;
    }
    .activeLink {
      color: #ffe600;
      border-bottom: 3px solid #ffe600;
    }
    .link:hover {
      border-bottom: 3px solid #ffe600;
    }
  }
  .additionalItems:hover,
  .genresItems:hover {
    background-color: rgba(253, 253, 253, 0.4);
    transform: scale(1.03);
  }
  .opacity {
    opacity: 0.7;
  }
`;

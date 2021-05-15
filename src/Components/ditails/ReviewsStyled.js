import styled from 'styled-components';

export const ReviewContainer = styled.div`
  .reviewList {
    padding: 0;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
  .reviewItems {
    list-style: none;
  }
  .nikName {
    padding-top: 20px;
    padding-left: 40px;
    margin: 0 0 20px;
    font-size: 20px;
    font-weight: 600;
  }
  .overviewContainer {
    overflow: scroll;
    max-height: 300px;
    /* полоса прокрутки (скроллбар) */
    ::-webkit-scrollbar {
      width: 15px; /* ширина для вертикального скролла */
      height: 8px; /* высота для горизонтального скролла */
      background-color: rgba(205, 214, 219, 0.4);
    }

    /* ползунок скроллбара */
    ::-webkit-scrollbar-thumb {
      background-color: #f7f0f4;
      border-radius: 9em;
      box-shadow: inset 1px 1px 10px #f3faf7;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(205, 214, 219, 0.4);
    }
  }
  .overview {
    margin: 0;
    font-size: 25px;
    font-weight: 300px;
    background-color: rgba(205, 214, 219, 0.4);
    padding: 10px 100px;
    box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 6px 1px -1px rgba(0, 0, 0, 0.12);
  }
  .Sore {
    text-align: center;
    width: 100%;
    padding: 100px;
    strong {
      font-size: 40px;
    }
  }
`;

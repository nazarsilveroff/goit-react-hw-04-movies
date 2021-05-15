import styled from 'styled-components';
export const HomePageWrapper = styled.div`
  h1 {
    text-align: center;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    background-color: rgba(255, 255, 255, 0.699);
  }
  .ImageGallery {
    display: grid;
    max-width: calc(100% - 260px);
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 19px;
    margin-top: 25px;
    margin-bottom: 40px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  .ImageGalleryItem {
    background-color: rgba(255, 255, 255, 0.699);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }

  .ImageGalleryItem-image {
    width: 100%;
    height: 90%;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .ImageGalleryItem:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  .ImageGalleryItem-title {
    margin: 0;
    padding: 10px;
    text-align: center;
    font-weight: bolder;
    font-size: 25px;
    font-weight: 300px;
  }
  .ImageGalleryItem-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    justify-content: space-between;
    text-decoration: none;
    color: black;
  }
`;

import styled from 'styled-components'

export const MoviesPageContainer = styled.header`
  .Searchbar {
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: rgba(253, 227, 155, 0.699);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  /*
 * Стили компонента SearchForm
 */
  .SearchForm {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }

  .SearchForm-button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  .SearchForm-button:hover {
    opacity: 1;
  }

  .SearchForm-button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  .SearchForm-input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
  }

  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }
  .ImageGallery {
    display: grid;
    max-width: calc(100vw - 160px);
    grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
    grid-gap: 16px;
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
    justify-content: center;
    justify-content: space-between;
    text-decoration: none;
    color: black;
  }
`;
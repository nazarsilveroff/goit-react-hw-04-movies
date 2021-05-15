import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  font-weight: 400;
  font-size: 25px;
  .list {
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: -30px;
  }

  .listItem {
    margin-right: 30px;
  }

  .link {
    color:gray;
    text-decoration: none;
    text-transform: uppercase;
  }
  .activeLink {
    color: salmon;
    border-bottom: 3px solid salmon;
  }
  .link:hover {
    border-bottom: 3px solid salmon;
  }
`;

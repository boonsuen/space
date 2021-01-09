import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import img_logo from '../assets/img/logo.svg';
import img_todo from '../assets/img/todo.svg';
import img_settings from '../assets/img/settings.svg';
import img_logout from '../assets/img/logout.svg';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 0 48px;
  border-right: 1px solid #E4E7ED;  
`;

const Logo = styled.div`
  padding: 35px 0 50px 0;

  img {
    width: 90px;
  }
`;

const NavButton = styled.button`
  justify-content: flex-start;
  margin: auto;
  width: 160px;
  padding: 12px 0;
  background: none;
  color: #4F4E53;

  img {
    margin-right: 28px;
  }
`;

const Sidebar = () => {
  const router = useRouter();

  return (
    <StyledSidebar>
      <Head>
        <title>Todo: Space</title>
      </Head>
      <Logo>
        <img src={img_logo} alt="Space logo" />
      </Logo>      
      <nav>
        <NavButton>
          <img src={img_todo} alt="Todo" />
          Todo
        </NavButton>
        <NavButton>
          <img src={img_settings} alt="Settings" />
          Settings
        </NavButton>
        <NavButton onClick={e => {
          router.push('/login');
        }}>
          <img src={img_logout} alt="Log out" />
          Log out
        </NavButton>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
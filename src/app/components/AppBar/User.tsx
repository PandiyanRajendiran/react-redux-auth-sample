import * as React from 'react';
import styled from 'styled-components/macro';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import {
  selectLoggedIn,
  selectUserName,
  selectUserImage,
} from '../../pages/Login/slice/selectors';
import { useDispatch } from 'react-redux';
import { useUserSessionSlice } from 'app/pages/Login/slice';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const UserAvatar = () => {
  const name = useSelector(selectUserName);
  const image = useSelector(selectUserImage);
  const loggedIn = useSelector(selectLoggedIn);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { actions } = useUserSessionSlice();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogoutHandler = () => {
    dispatch(actions.resetUserDetails());
    setAnchorEl(null);
    history.push('/');
  };

  return (
    <>
      {loggedIn && image && (
        <Avatar
          onClick={handleClick}
          aria-haspopup="true"
          src={image}
          alt={name}
        />
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onLogoutHandler}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export function User() {
  const name = useSelector(selectUserName);

  return (
    <Wrapper>
      {name && <Item> {name} </Item>}
      <UserAvatar />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;

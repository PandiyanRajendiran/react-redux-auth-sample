import React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import IdleTimer from 'react-idle-timer';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { useUserSessionSlice } from 'app/pages/Login/slice';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'app/pages/Login/slice/selectors';

export const IdleWatcher = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const [open, setOpen] = React.useState(false);
  const idleTimer = React.createRef() as any;
  const { actions } = useUserSessionSlice();
  const dispatch = useDispatch();
  const history = useHistory();
  let confirmTimeout;

  const logOffUser = () => {
    console.log('User should sign off here');
    setOpen(false);
    dispatch(actions.resetUserDetails());
    history.push('/');
  };

  const handleOnIdle = () => {
    confirmTimeout = setTimeout(logOffUser, 60000);
    setOpen(true);
  };

  const onContinueClickHandler = () => {
    setOpen(false);
    clearTimeout(confirmTimeout);
    idleTimer.current.start();
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>{'Seems your away'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onContinueClickHandler} color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
      {loggedIn && (
        <IdleTimer
          ref={idleTimer}
          timeout={59000}
          onIdle={handleOnIdle}
          stopOnIdle
          debounce={250}
        />
      )}
    </>
  );
};

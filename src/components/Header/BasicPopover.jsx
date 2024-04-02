import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Svg } from 'components/Icons/Icons';
import Icons from '../../images/icons.svg';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button aria-describedby={id} variant="contained" onClick={handleClick}>
        <Svg id="#unfold" width={16} height={16}/>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        >
        <ul>
            <li>
              <button type="button">
                <Svg id="#setting" width={16} height={16}/>
                Setting
              </button>
            </li>
            <li>
              <button type="button">
                <Svg id="#exit" width={16} height={16}/>
                Log out
              </button>
            </li>
        </ul>
      </Popover>
    </div>
  );
}

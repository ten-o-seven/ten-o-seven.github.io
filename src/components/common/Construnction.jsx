/* eslint-disable react/no-children-prop */
import styled from '@emotion/styled';
import * as React from 'react';
// import GhostSVG from '../../icons/Ghost.svg';
import PropTypes from 'prop-types';
import Icon from './Icon';

const IconKeys = styled.span`
    padding: ${({theme: {size}})=>size?.u2}px;
    margin: ${({theme: {size}})=>size?.u1}px;
    border: 1px solid ${({theme: {color}})=>color?.gray[400]};
    border-radius: 5px;
`;
const LetterKeys = styled.p`
    padding: ${({theme: {size}})=>size?.u2}px;
    margin: ${({theme: {size}})=>size?.u1}px;
    border: 1px solid ${({theme: {color}})=>color?.gray[400]};
    border-radius: 5px;
    width: 16px;
    height: 16px;
    text-align: center;
`;

const Construction = ({title, style}) => {
  const ghostRef = React.useRef();
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [pressedKey, setPressedKey] = React.useState(null);

  const clydeNavigation = ({keyCode}) =>{
    switch (keyCode) {
      case 87:
        setPressedKey('up');
        setY((prev) => prev-10);
        break;
      case 68:
        setPressedKey('right');
        setX((prev) => prev+10);
        break;
      case 83:
        setPressedKey('down');
        setY((prev) => prev+10);
        break;
      case 65:
        setPressedKey('left');
        setX((prev) => prev-10);
        break;
      case 38:
        setPressedKey('up');
        setY((prev) => prev-10);
        break;
      case 39:
        setPressedKey('right');
        setX((prev) => prev+10);
        break;
      case 40:
        setPressedKey('down');
        setY((prev) => prev+10);
        break;
      case 37:
        setPressedKey('left');
        setX((prev) => prev-10);
        break;
    }
  };

  const onKeyUp = () => setPressedKey(null);

  React.useEffect(()=>{
    document.addEventListener('keydown', clydeNavigation);
    document.addEventListener('keyup', onKeyUp);
    // context?.drawImage(img, x, y);

    return () => {
      document.removeEventListener('keydown', clydeNavigation);
      document.removeEventListener('keyup', clydeNavigation);
    };
  }, []);

  const bg = (elementKey) =>{
    return pressedKey === elementKey ? '#ddd' : 'white';
  };

  return (
    <div
      className="flex flex-column align-items-center justify-center full-view relative"
      style={{...style}}
    >
      <div
        ref={ghostRef}
        id="ghost"
        style={{
          'position': 'relative',
          'left': x,
          'top': y,
          'transition': 'all 0.2s ease-out',
          'transform': pressedKey === 'right' ? 'scale(-1,1)' : 'scale(1, 1)',
        }}
      >
        <Icon name={'Ghost'}/>
      </div>
      <h2>{title}</h2>
      <br />
      <p className="flex flex-column align-items-center">
        Sorry, still contemplating on this page. Or Clyde may have ate the page.
      </p>
      <div className="flex" style={{paddingTop: 30}}>
        <div className="flex flex-column align-items-center" >
          <LetterKeys children="W" style={{backgroundColor: bg('up')}} />
          <div className="flex">
            <LetterKeys children="A" style={{backgroundColor: bg('left')}}/>
            <LetterKeys children="S" style={{backgroundColor: bg('down')}}/>
            <LetterKeys children="D" style={{backgroundColor: bg('right')}}/>
          </div>
        </div>
        <div style={{width: 20}} />
        <div className="flex flex-column align-items-center">
          <IconKeys className="fa-solid fa-arrow-up" style={{backgroundColor: bg('up')}}/>
          <div>
            <IconKeys className="fa-solid fa-arrow-left" style={{backgroundColor: bg('left')}}/>
            <IconKeys className="fa-solid fa-arrow-down" style={{backgroundColor: bg('down')}}/>
            <IconKeys className="fa-solid fa-arrow-right" style={{backgroundColor: bg('right')}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;


Construction.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
};

Construction.defaultProps = {
  title: 'Page Under Construction',
  style: null,
};

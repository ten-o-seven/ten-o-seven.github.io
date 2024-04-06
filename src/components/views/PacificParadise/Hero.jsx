import React from 'react';
import ppHero from './images/pp_hero.png';
import Divider from '../../common/Divider';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Section
 */
export default function Hero() {
  return (
    <>
      <h1 id="pp">Pacific Paradise.</h1>
      <h6 style={{marginTop: 10}}>Mobile App for a Local Restaurant</h6>
      <div className="flex" style={{marginTop: 60, justifyContent: 'space-between'}}>
        <h3 style={{width: '67%'}}>
        During COVID, PP was forced to transition to a take-out only business model.
        However, the existing take-out ordering experience discourages many customers
        from placing orders. The owners requested an app capable of addressing user
        concerns and preventing further customer loss.
        </h3>
        <div style={{width: '20%', alignSelf: 'flex-end'}}>
          <h2 style={{fontFamily: 'Chelsea Market Outline'}}>2022</h2>
          <Divider style={{marginBottom: 10}}/>
          <h6 style={{fontWeight: 600}}>Service</h6>
          <p>UX/UI Design</p>
          <Divider style={{marginTop: 20, marginBottom: 10}}/>
          <h6 style={{fontWeight: 600}}>My Role</h6>
          <p>
            User Reserch <br/>
            Wireframing <br/>
            Lofi - Hifi <br/>
            Usability Studies <br/>
            UI Design <br/>
          </p>
          <Divider style={{marginTop: 20, marginBottom: 10}}/>
          <h6 style={{fontWeight: 600}}>Team</h6>
          <p>
            Me, Myself and I
          </p>
        </div>
      </div>
      <img
        src={ppHero}
        style={{marginTop: 120, objectFit: 'cover'}}
      />
      <div className="flex" style={{marginTop: 60}}>
      </div>
    </>
  );
}

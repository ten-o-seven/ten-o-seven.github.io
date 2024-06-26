import React from 'react';
import ppHero from './images/pp_hero.png';

/**
 * @param {Node} na
 * @return {Node} Pacific Paradise Hero Section
 */
export default function Hero() {
  return (
    <div style={{marginTop: 150}}>
      <h1 id="pp">Pacific Paradise.</h1>
      <h6 style={{marginTop: 10}}>Mobile App Case Study for a Local Chinese Restaurant.</h6>
      <div className="flex" style={{marginTop: 60, justifyContent: 'space-between'}}>
        <h3 style={{width: '67%'}}>
        During COVID, Pacific Paradise was forced to transition to a take-out only business model.
        However, the existing take-out ordering experience discourages many customers
        from placing orders. The owners requested an app capable of addressing user
        concerns and preventing further customer loss.
        </h3>
        <div style={{width: '20%', alignSelf: 'flex-start', marginTop: 10}}>
          <h6 style={{fontWeight: 600}}>Service</h6>
          <p>UX/UI Design</p>
          <p>
            User Reserch <br/>
            Wireframing <br/>
            Lofi - Hifi <br/>
            Usability Studies <br/>
            UI Design <br/>
          </p>
          <h6 style={{marginTop: 30, fontWeight: 600}}>Team</h6>
          <p>
            Angela Zhang
          </p>
        </div>
      </div>
      <img
        src={ppHero}
        style={{
          position: 'absolute',
          left: 0,
          marginTop: 120,
          objectFit: 'cover',
          width: '100%',
        }}
      />
      <div style={{overflowX: 'hidden'}}>
        <img
          src={ppHero}
          className="full-vw"
          style={{
            opacity: 0,
            marginTop: 120,
          }}
        />
      </div>
      <div className="flex" style={{marginTop: 60}}>
      </div>
    </div>
  );
}

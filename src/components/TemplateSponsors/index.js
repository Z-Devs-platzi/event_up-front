import React from 'react';
import PropTypes from 'prop-types';
import { Sponsors, SponsorsContainer, Sponsor } from './style';

const TemplateSponsors = ({ sponsors }) => {
  const Sponsor = ({ sponsorWeb, sponsorName, sponsorLogo }) => {
    return (
      <a href={sponsorWeb} target='_blank'>
        <img src={sponsorLogo} alt={sponsorName} className='sponsorImage' />
      </a>
    );
  };
  return (
    <Sponsors>
      <h2>Sponsors</h2>
      <SponsorsContainer>
        {sponsors.map((sponsor) => (
          <Sponsor>
            <Sponsor key={sponsor.sponsorName} {...sponsor} />
          </Sponsor>
        ))}
      </SponsorsContainer>
    </Sponsors>
  );
};

TemplateSponsors.propTypes = {
  sponsorWeb: PropTypes.string,
  sponsorLogo: PropTypes.string,
  sponsorName: PropTypes.string,
};

export default TemplateSponsors;

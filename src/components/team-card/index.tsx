import React from 'react';
import styles from './style.module.css';

const TeamCard: React.FC = () => {
  const teamMembers = [
    {
      name: 'Nikhil Dange',
      position: 'Hack Technical Lead',
      email: 'nikhil@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/nsdange/',
      imageUrl: 'assets/nikhil_pfp.PNG',
    },
    {
      name: 'Angela Hu',
      position: 'Hack Technical Event Director',
      email: 'angelahu@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/angelahu925/',
      imageUrl: 'assets/angela_pfp.PNG',
    },
    {
      name: 'Khushi Patel',
      position: 'Hack Technical Event Director',
      email: 'khushi@acmucsd.org',
      linkedinLink: 'http://www.linkedin.com/in/pateljkhushi',
      imageUrl: 'assets/khushi_pfp.PNG',
    },
    {
      name: 'Charvi Shukla',
      position: 'Hack Technical Event Director',
      email: 'charvi@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/charvi-shukla-439b681b2/',
      imageUrl: 'assets/charvi_pfp.PNG',
    },
    {
      name: 'Alexis Vergnet',
      position: 'Hack Technical Event Director',
      email: 'alexis@acmucsd.org',
      linkedinLink: 'https://www.linkedin.com/in/avergnet/',
      imageUrl: 'assets/alexis_pfp.PNG',
    },
  ];
  return (
    <div className={styles.team}>
      {teamMembers.map((member, index) => (
        <div key={member.name} className={styles.card}>
          <div className={styles.cardOutline}>
            <img src={member.imageUrl} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
            <div className={styles.icons}>
              {member.email && (
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                  {/* Email icon */}
                  <svg width="18" height="14" viewBox="1 0 16 13.5" fill="none">
                    <path d="M16.6177 0.458008H1.36449C1.04 0.458008 0.777832 0.718533 0.777832 1.041V12.7009C0.777832 13.0233 1.04 13.2838 1.36449 13.2838H16.6177C16.9422 13.2838 17.2043 13.0233 17.2043 12.7009V1.041C17.2043 0.718533 16.9422 0.458008 16.6177 0.458008ZM15.8844 2.47662V11.9721H2.09782V2.47662L1.59182 2.08492L2.31232 1.16489L3.09698 1.77156H14.887L15.6717 1.16489L16.3922 2.08492L15.8844 2.47662ZM14.887 1.76974L8.99109 6.32437L3.09514 1.76974L2.31048 1.16306L1.58999 2.0831L2.09599 2.4748L8.35859 7.31364C8.5387 7.45268 8.76027 7.52816 8.98834 7.52816C9.21641 7.52816 9.43798 7.45268 9.61808 7.31364L15.8844 2.47662L16.3904 2.08492L15.6699 1.16489L14.887 1.76974Z" />
                  </svg>
                </a>
              )}
              {member.linkedinLink && (
                <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                  {/* LinkedIn icon */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94654e-07 3.34182C4.94654e-07 2.45552 0.352084 1.60551 0.978796 0.9788C1.60551 0.352088 2.45551 4.45511e-06 3.34182 4.45511e-06H36.6545C37.0938 -0.000712911 37.5288 0.0852097 37.9348 0.252853C38.3408 0.420496 38.7097 0.666568 39.0204 0.976979C39.3312 1.28739 39.5777 1.65605 39.7458 2.06184C39.9138 2.46763 40.0002 2.9026 40 3.34182V36.6545C40.0005 37.0939 39.9143 37.529 39.7465 37.9349C39.5786 38.3409 39.3324 38.7098 39.0218 39.0206C38.7113 39.3313 38.3425 39.5777 37.9366 39.7458C37.5307 39.9139 37.0957 40.0002 36.6564 40H3.34182C2.90281 40 2.46811 39.9135 2.06254 39.7454C1.65697 39.5774 1.28849 39.3311 0.978153 39.0206C0.667813 38.7101 0.421694 38.3414 0.253859 37.9358C0.0860241 37.5301 -0.000238356 37.0954 4.94654e-07 36.6564V3.34182ZM15.8327 15.2509H21.2491V17.9709C22.0309 16.4073 24.0309 15 27.0364 15C32.7982 15 34.1636 18.1145 34.1636 23.8291V34.4145H28.3327V25.1309C28.3327 21.8764 27.5509 20.04 25.5655 20.04C22.8109 20.04 21.6655 22.02 21.6655 25.1309V34.4145H15.8327V15.2509ZM5.83273 34.1655H11.6655V15H5.83273V34.1636V34.1655ZM12.5 8.74909C12.511 9.2485 12.4221 9.74507 12.2386 10.2097C12.0551 10.6743 11.7806 11.0975 11.4313 11.4546C11.082 11.8117 10.6649 12.0954 10.2045 12.2891C9.74402 12.4828 9.24953 12.5826 8.75 12.5826C8.25047 12.5826 7.75598 12.4828 7.29554 12.2891C6.83509 12.0954 6.41798 11.8117 6.06867 11.4546C5.71936 11.0975 5.4449 10.6743 5.26138 10.2097C5.07787 9.74507 4.989 9.2485 5 8.74909C5.02159 7.76883 5.42615 6.83599 6.12706 6.15034C6.82797 5.4647 7.7695 5.08076 8.75 5.08076C9.7305 5.08076 10.672 5.4647 11.3729 6.15034C12.0738 6.83599 12.4784 7.76883 12.5 8.74909V8.74909Z"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeamCard;

import React from 'react';
import SrikanthProfile from '../assets/Leadership/Srikanth B.png';
import gopiProfile from '../assets/Leadership/Gopi.png';
import SundeepProfile from '../assets/Leadership/Dass.png';


const teamMembers = [
 
{
    name: 'Srikanth BG',
    role: 'Founder & Executive Director',
    image: SrikanthProfile,
    bio: 'Srikanth has over 3 decades of diverse experience in Business & Operation Leadership, Analytics, People Management. A Decade of experience in Entrepreneurship, rolling out New business models and Tech savvy.'
},
  
{
    name: 'Sundeep Dasa',
    role: 'Director - Corporate Relationship ',
    image: SundeepProfile,
    bio: 'Sundeep Dasa has over three decades of hands-on experience in HR Leadership, Talent Management, and Operational Excellence, specializing in Talent Acquisition, HR Operations, and Strategic Resource Management.'
  },  
   {
    name: 'Gopi',
    role: 'Director - Engineering Services ',
    image: gopiProfile,
    bio: 'Gopi has over 2 decades of experience in software development and quality engineering. He has worked with prominent MNCs such as Honeywell, Juniper Networks, and Netsurion gaining extensive expertise in Development, Quality Engineering and Automation across a wide range of platforms, '
  },
];

function Leadership() {
  return (
    <div className="team-page">
      <h1>Meet Our <strong>Leadership Team</strong></h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <h3>{member.name} <p className="role">[{member.role}]</p>
</h3>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leadership;


import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Us" />
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-brand-green mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to build a united purpose-driven support group that fosters Inclusiveness, Active Citizen Participation and Grassroot Mobilization for Tinubu 2027 re-election. We aspire to be a strong voice for promoting good governance, transparency and accountability while supporting PRESIDENT BOLA AHMED TINUBU, through Collaboration, Education and Advocacy. We seek to empower people, shape public opinion and contribute meaningfully to democracy, development and nation building.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-brand-green mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our Mission is to Mobilize, Educate and Empower citizens to actively participate in the political process. We are committed to strengthening Democratic Values, supporting Visionary Leadership and creating a platform where diverse voices can be heard. By fostering Unity, Advocacy and Innovation. We aim to contribute to sustainable Community and National Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

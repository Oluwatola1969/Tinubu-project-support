import React from 'react';
import SectionTitle from './SectionTitle';

const coreObjectives = [
  "Mobilization and Awareness: We are out to mobilize, sensitize and engage communities at the grassroot level on political participation and working for the success of our principal ASIWAJU BOLA AHMED TINUBU's 2027 re-election.",
  "Support for Leadership: To provide organized and strategic support for our candidate/party before, during and after election.",
  "Capacity Building: To train and empower members with political leadership and civic knowledge.",
  "Advocacy: To promote good governance, accountability and citizen centred policies.",
  "Unity and Inclusion: To foster cooperation across diverse groups ensuring women, youth and marginalized voices are represented.",
  "Sustainable: To establish a lasting structure that continues to influence governance positively beyond election circle."
];

const targets = [
  { title: "Voter's Mobilization", description: "Registering new voters, ensuring existing voters have their PVC's and encouraging high voter turnout." },
  { title: "Grassroots Engagement", description: "Building strong presence in communities, wards and polling units through town hall meetings, rallies, and door-to-door campaigns." },
  { title: "Image & Message Promotion", description: "Spreading the vision and manifesto, countering misinformation, and projecting a positive image of our candidate." },
  { title: "Fund Raising/Resources Support", description: "Raising funds, materials, and logistics to support campaign activities and provide for volunteers and agents." },
  { title: "Media & Publicity", description: "Using traditional and social media to communicate effectively, creating jingles, flyers, and online campaigns." },
  { title: "Strategic Alliance", description: "Forming partnerships with community leaders, youth groups, women, unions and other influencers." },
  { title: "Election Monitoring", description: "Training and deploying polling unit agents to monitor elections and ensure results are transmitted properly." },
  { title: "Loyalty & Continuity", description: "Strengthening membership commitments to the group, candidate and party." },
  { title: "Forecast Result", description: "Forecasting results and counting our vote before election date based on membership strength." }
];

const Objectives: React.FC = () => {
  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-brand-green/10 via-gray-50 to-brand-blue/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Core Objectives & Targets" />
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-700 mb-8">Core Objectives</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {coreObjectives.map((obj, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                <p className="text-gray-600">{obj}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-700 mb-8">Our Targets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targets.map((target, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-xl text-brand-green mb-2">{index + 1}. {target.title}</h4>
                <p className="text-gray-600">{target.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
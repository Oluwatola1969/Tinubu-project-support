
import React from 'react';
import SectionTitle from './SectionTitle';

const TreeNode: React.FC<{ label: string; className?: string }> = ({ label, className }) => (
  <div className={`px-4 py-2 rounded-lg shadow-md text-sm md:text-base ${className}`}>
    {label}
  </div>
);

const Connector: React.FC<{ height?: string }> = ({ height = 'h-8' }) => (
  <div className={`w-px ${height} bg-gray-400`}></div>
);

const Structure: React.FC = () => {
  return (
    <section id="structure" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Structure" />
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-brand-green mb-4">Operational Structure</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <h4 className="font-semibold text-lg">1. National Executive Council (NEC)</h4>
                <p className="pl-4">Headed by the National Coordinator, oversees all group activities.</p>
              </li>
              <li>
                <h4 className="font-semibold text-lg">2. State Executive Council (SEC)</h4>
                <p className="pl-4">Each State Coordinator and their Executives oversee state affairs, reporting to the National Coordinator.</p>
              </li>
               <li>
                <h4 className="font-semibold text-lg">3. Local Government Coordinators</h4>
                <p className="pl-4">Oversee affairs of their Local Government, reporting to the State Coordinator.</p>
              </li>
               <li>
                <h4 className="font-semibold text-lg">4. Ward Coordinators</h4>
                <p className="pl-4">Oversee affairs of their wards, reporting to the Local Government Coordinators.</p>
              </li>
              <li>
                <h4 className="font-semibold text-lg">5. Polling units Agent/Volunteers</h4>
                <p className="pl-4">Represent the group at polling stations during elections.</p>
              </li>
              <li>
                <h4 className="font-semibold text-lg">6. Advisory Council/Patrons</h4>
                <p className="pl-4">Elder Statesmen, respected leaders, and prominent supporters who give guidance, credibility, and connection.</p>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-brand-green mb-8 text-center">Organogram</h3>
            <div className="flex flex-col items-center text-center font-medium">
              
              <TreeNode label="National/State Executive Council" className="bg-brand-green text-white" />
              <Connector />

              <div className="w-full relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gray-400"></div>
                <div className="absolute top-0 left-1/2 w-px h-full bg-gray-400"></div>

                <div className="flex justify-between relative">
                  
                  <div className="w-1/2 flex justify-start">
                     <div className="w-1/2 h-px bg-gray-400 absolute top-0"></div>
                     <div className="flex flex-col items-center w-full">
                        <Connector height="h-4"/>
                        <TreeNode label="Advisory Council/Patrons" className="bg-gray-200 text-gray-800" />
                     </div>
                  </div>

                  <div className="w-1/2 flex justify-end">
                    <div className="w-1/2 h-px bg-gray-400 absolute top-0 right-0"></div>
                  </div>

                </div>
              </div>

              <div className="w-full flex justify-center">
                 <div className="flex flex-col items-center">
                    <Connector height="h-4"/>
                    <TreeNode label="National Coordinators" className="bg-blue-100 text-blue-800" />
                    <Connector height="h-4"/>
                    <TreeNode label="National Executives" className="bg-blue-100 text-blue-800" />
                    <Connector />
                    <TreeNode label="State Coordinators" className="bg-green-100 text-green-800" />
                    <Connector height="h-4"/>
                    <TreeNode label="State Executive" className="bg-green-100 text-green-800" />
                    <Connector />
                    <TreeNode label="LGA Coordinators" className="bg-yellow-100 text-yellow-800" />
                    <Connector />
                    <TreeNode label="Ward Coordinators" className="bg-red-100 text-red-800" />
                    <Connector />
                    <TreeNode label="Polling Unit Agents/Volunteers" className="bg-purple-100 text-purple-800" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;

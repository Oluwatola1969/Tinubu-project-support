import React from 'react';
import SectionTitle from './SectionTitle';
import TeamCard from './TeamCard';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  // National Leadership
  { name: "Comrade Olusola Olawoore", role: "National Coordinator", category: "Director", details: ["Oyo State Origin", "Member AD, AC, ACN, APC Lagos State", "MD at Groundbuilt Nigeria Ltd.", "National Coordinator"], imageUrl: "https://i.ibb.co/7jZq1zQ/comrade-olusola-olawoore.jpg" },
  { name: "Prof. Nentawe Yilwatda", role: "National Chairman, APC", category: "Director", details: ["All Progressive Congress"], imageUrl: "https://i.ibb.co/Xz9tN8M/nentawe-yilwatda.png" },
  { name: "Mr. Adelugba Olayinka", role: "National Secretary", category: "Director", details: ["Ekiti State Origin", "Grassroot Inspirational Coach", "Graduate of Business Administration"], imageUrl: "https://i.ibb.co/hZ2vY32/adelugba-olayinka.jpg" },
  { name: "Bello Kado (B.Sc. MBA)", role: "Director Finance", category: "Director", details: ["Katsina State Origin", "Former Bank Manager", "Senior Legislative Aid to Speaker, National Assembly"], imageUrl: "https://i.ibb.co/R9mQz7d/bello-kado.jpg" },
  { name: "Saeedat Gbadamosi", role: "Woman Leader", category: "Director", details: ["Kwara State Origin", "A Seasoned Marketer & Brand Expert", "A Grassroot Mobilizer"], imageUrl: "https://i.ibb.co/0y4kVsPc/saeedat-gbadamosi.jpg" },
  { name: "Hon. Hakeem Sotomiwa", role: "Director of Research and Strategy", category: "Director", details: ["Lagos State Origin", "Former Vice Chairman, APC Ikorodu", "A Grassroot Mobiliser"], imageUrl: "https://i.ibb.co/z5p2wJv/hakeem-sotomiwa.jpg" },
  { name: "Hon. Abideeen Fasasi", role: "Director of Planning", category: "Director", details: ["Lagos State Origin", "Former Party Secretary, Ward G, Ikorodu", "A Grassroot Mobiliser"], imageUrl: "https://i.ibb.co/MGDhK4H/abideeen-fasasi.jpg" },
  { name: "Chief Ambassador Sampson O. Olanibi", role: "Director of Publicity", category: "Director", details: ["Ondo State Origin", "Graduate of Mass Communication", "A Grassroot Mobiliser"], imageUrl: "https://i.ibb.co/f4nL3cR/sampson-olanibi.jpg" },
  { name: "Hon. Oni-Orisan Abayomi Kazeem", role: "Director of Mobilization", category: "Director", details: ["Lagos State Origin", "Mobilization Chairman, Bola Ahmed Tinubu Solidarity Front", "A Grassroot Mobiliser"], imageUrl: "https://i.ibb.co/wYx6X0K/abayomi-kazeem.png" },
  { name: "Mr. Taiwo Owoeye", role: "National Media Director", category: "Director", details: ["Ondo State Origin", "Editor-in-Chief, Momentum International Magazine", "Journalist, Politician, Tourist"], imageUrl: "https://i.ibb.co/yY13kG3/taiwo-owoeye.png" },
  { name: "Mustapha Akeem Olawale", role: "Director of Social-Media", category: "Director", details: ["Lagos State Origin", "Chief Press Secretary to Chairman Ikorodu", "A Grassroot Mobilizer"], imageUrl: "https://i.ibb.co/L5tN0mP/mustapha-olawale.png" },
  { name: "Adedoyin Alli-Williams (Mrs.)", role: "Treasurer", category: "Director", details: ["Osun State Origin", "South West Ambassador for African Young Leaders", "National Exco, Tinubu Support Organisation"], imageUrl: "https://i.ibb.co/gZ7k2tJ/adedoyin-alli-williams.jpg" },

  // State Coordinators
  { name: "Hon. Owolabi Hameed Folorunsho", role: "Coordinator", state: "Lagos", category: "Coordinator", details: ["Assistance National Coordinator", "Former Supervising Councillor", "A Grassroot Mobiliser"], imageUrl: "https://i.ibb.co/mG7P2bY/owolabi-folorunsho.jpg" },
  { name: "Hajia Yetunde Lawal", role: "Coordinator", state: "Abuja", category: "Coordinator", details: ["Lagos State Origin", "Member, Tinubu Support Organization 2023", "A Grassroot Mobilizer"], imageUrl: "https://i.ibb.co/dGt07yP/hajia-yetunde-lawal.jpg" },
  { name: "Mr. Ayeni Olusegun Collins", role: "Coordinator", state: "Ekiti", category: "Coordinator", details: ["A Property Consultant", "A Graduate of Accountancy", "Former Auditor, Governor Fayemi Campaign Organization"], imageUrl: "https://i.ibb.co/G5f6V5f/ayeni-collins.jpg" },
  { name: "Hon. Femi Ogunsola James", role: "Coordinator", state: "Ondo", category: "Coordinator", details: ["Ondo State Origin", "CEO, Fadam Investment Limited", "A Grassroot Mobilizer"], imageUrl: "https://i.ibb.co/4P2T0p9/femi-james.jpg" },
  { name: "Hon. Oladipupo Nojeem", role: "Coordinator", state: "Osun", category: "Coordinator", details: ["Osun State Origin", "Former SLG Ejigbo Local Government", "Member, TAMPAN Guild of Film Producers"], imageUrl: "https://i.ibb.co/bK7hY4k/oladipupo-nojeem.jpg" },
  { name: "Alhaji Nda Musa Muhammed", role: "Coordinator", state: "Kwara", category: "Coordinator", details: ["Kwara State Origin", "Former Member, House of Assembly", "A Grassroot Mobilizer"], imageUrl: "https://i.ibb.co/bF9F0Yc/nda-musa-muhammed.jpg" },
  { name: "Mr. Abayomi Oyerinde Jacob", role: "Coordinator", state: "Niger", category: "Coordinator", details: ["Oyo State Origin", "A graduate of Chemical Engineering", "CEO in Oil and Gas"], imageUrl: "https://i.ibb.co/2d1h4c2/abayomi-jacob.jpg" },
  { name: "Dr. Kamal Kamaludeen", role: "Coordinator", state: "Sokoto", category: "Coordinator", details: ["Sokoto State Origin", "A Medical Doctor", "A Grassroot Mobilizer"], imageUrl: "https://i.ibb.co/B2v4j9f/kamal-kamaludeen.jpg" },
  { name: "Comrade Aliyu Ahmed Yusuf", role: "Coordinator", state: "Gombe", category: "Coordinator", details: ["Gombe State Origin", "State Internal Auditor", "National Vice President, Gombe State Student Association"], imageUrl: "https://i.ibb.co/gZt0P5d/aliyu-yusuf.jpg" },
  { name: "Mr. Abdullahi Shettima", role: "Coordinator", state: "Kaduna", category: "Coordinator", details: ["Kaduna State Origin", "A Graduate of Political Science", "SA Political, Kaduna North Local Government"], imageUrl: "https://i.ibb.co/0FDjX1K/abdullahi-shettima.jpg" },
  { name: "Mr. Joshua Bulus Dawa", role: "Coordinator", state: "Katsina", category: "Coordinator", details: ["Borno State Origin", "A Civil Servant", "B.Sc. Political Science"], imageUrl: "https://i.ibb.co/zXq6P4v/joshua-dawa.jpg" },
  { name: "Mr. Dominic Yilkudi", role: "Coordinator", state: "Plateau", category: "Coordinator", details: ["Plateau State Origin", "A Seasoned Banker", "A Grassroot Mobilizer"], imageUrl: "https://i.ibb.co/Q8Q0H5t/dominic-yilkudi.png" },
];

const Team: React.FC = () => {
  const directors = teamMembers.filter(m => m.category === 'Director');
  const coordinators = teamMembers.filter(m => m.category === 'Coordinator');

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-brand-green/10 via-gray-50 to-brand-blue/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Team" subtitle="Meet the dedicated leaders of our movement" />
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-700 mb-8">National Leadership</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {directors.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-700 mb-8">State Coordinators</h3>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coordinators.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
import React from 'react';
import SectionTitle from './SectionTitle';

const activitiesImages = [
  "https://i.ibb.co/hJWhqhs8/activity-1.jpg",
  "https://i.ibb.co/3k5f3r1/activity-2.jpg",
  "https://i.ibb.co/56w0pLg/activity-3.jpg",
  "https://i.ibb.co/hL4X1b6/activity-4.jpg",
  "https://i.ibb.co/mHX0fBv/activity-5.jpg",
  "https://i.ibb.co/M2xXn6R/activity-6.jpg",
  "https://i.ibb.co/b2V8J8V/activity-7.jpg",
  "https://i.ibb.co/N1Xy0j3/activity-8.jpg",
  "https://i.ibb.co/bH4tYmS/activity-9.jpg",
  "https://i.ibb.co/yqg1S9G/activity-10.jpg",
  "https://i.ibb.co/zG5H3fJ/activity-11.jpg",
  "https://i.ibb.co/Bq8Mv9B/activity-12.jpg",
  "https://i.ibb.co/jGGvLzX/activity-13.jpg",
  "https://i.ibb.co/N7Y2t3h/activity-14.jpg",
  "https://i.ibb.co/JqjT6w4/activity-15.jpg",
  "https://i.ibb.co/C9Hh0Tf/activity-16.jpg",
];

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Activities" subtitle="Engaging communities and mobilizing for victory" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activitiesImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group aspect-w-16 aspect-h-9">
              <img 
                src={src} 
                alt={`Activity ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
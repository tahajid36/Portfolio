import React from 'react';
import ServiceCard from '../Components/ServiceCard';

const Service = () => {
    return (
        <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              WHAT I DO
            </p>
            <h2 className="text-4xl font-bold text-white">
              What I Provide For You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CARD 1 */}
            <ServiceCard
              icon="code"
              title="UI/UX Design"
              text="Each one showcases my approach and dedication to detail..."
            />

            {/* CARD 2 */}
            <ServiceCard
              icon="public"
              title="Web Development"
              highlight
              text="Business consulting consul us to a provide expert advice..."
            />

            {/* CARD 3 */}
            <ServiceCard
              icon="print"
              title="Business Solutions"
              text="Each one showcases my approach and dedication..."
            />

            {/* CARD 4 */}
            <ServiceCard
              icon="insights"
              title="Profit Partners"
              text="Business consulting consul us to provide expert advice..."
            />
          </div>
        </div>
      </section>
    );
};

export default Service;
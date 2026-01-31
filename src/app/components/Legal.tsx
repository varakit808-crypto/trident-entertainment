import React from 'react';

export const Legal = () => {
  return (
    <section id="legal" className="py-24 bg-[#0c0e0c] border-t border-white/5">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-2xl font-[family-name:var(--font-brand)] text-gold mb-8">Privacy Policy</h3>
              <div className="text-white/30 font-sans text-xs leading-loose tracking-wider space-y-4">
                <p>
                  Trident Entertainment is committed to protecting the privacy of our clients and performers. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
                </p>
                <p>
                  Information collected during the booking process is used solely for the coordination of services and internal record-keeping. All digital communication and inquiry data is handled with the highest level of discretion.
                </p>
                <p>
                  Our website may use cookies to enhance the user experience. By using our site, you consent to our privacy policy.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-[family-name:var(--font-brand)] text-gold mb-8">Service Terms</h3>
              <div className="text-white/30 font-sans text-xs leading-loose tracking-wider space-y-4">
                <p>
                  All services provided by Trident Entertainment are for entertainment and hospitality purposes only. We maintain a zero-tolerance policy for any form of illegal activity or non-consensual behavior.
                </p>
                <p>
                  Bookings require a non-refundable deposit to secure the date. Cancellations must be made within 72 hours of the event to avoid full service charges.
                </p>
                <p>
                  Performers reserve the right to terminate service immediately if safety or professional boundaries are compromised, without refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

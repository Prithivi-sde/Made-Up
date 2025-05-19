'use client';

import { useState } from "react";
import { OrderCard } from "../../components/OrderCard";
import { Sidebar } from "../../components/Sidebar";
import { ProfileForm } from "../../components/ProfileForm";
import { orders } from "../../Data/Orders";
import { usePathname } from "next/navigation";

export default function ProfilePage () {
  const [activeSection, setActiveSection] = useState<'profile' | 'orders' | 'addresses'>('profile');
  const pathname = usePathname();

  const formatted = () =>pathname
      .split('/')
      .filter(Boolean)
      .map((str) =>
        str
          .replace(/-/g, ' ') 
          .replace(/\b\w/g, (l) => l.toUpperCase()) 
      )
      .join(' / ');

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return(
        <ProfileForm/>);

      case 'orders':
        return (
          <>
            <h4 className="my-4">My Orders</h4>
            {orders.map((order, index) => (
              <OrderCard key={index} {...order} />
            ))}
          </>
        );

      case 'addresses':
        return <h4 className="m-5">Shipping Addresses</h4>;

      default:
        return null;
    }
  };

  return (
    <div className="row" style={{ overflow: 'hidden' }}>
      <div className="py-2 px-3 ms-5 my-4">
        <p className="mb-0 text-muted"><span className="fw-bold">{formatted()}</span></p>
      </div>
      <div className="col-md-3 mx-4 mt-3">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <div className="d-none d-md-block col-md-8 border border-dark border-1 my-3" style={{ overflowY: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  );
}

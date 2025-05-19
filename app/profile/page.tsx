'use client';

import { useState } from "react";
import { OrderCard } from "../components/OrderCard";
import { Sidebar } from "../components/Sidebar";
import { ProfileForm } from "../components/ProfileForm";
import { orders } from "../Data/Orders";
import { usePathname } from "next/navigation";

export default function ProfilePage () {
  const [activeSection, setActiveSection] = useState<'profile' | 'orders' | 'addresses'>('profile');
  const pathname = usePathname();

  const getDisplayPath = () => {
    if (pathname === '/profile') {
      return '/ My Profile';
    }
    return pathname;
  };

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
        return <h4 className="mb-4">Shipping Addresses</h4>;

      default:
        return null;
    }
  };

  return (
    <div className="row">
      <div className="col-md-3">
       <div className="bg-light py-2 px-3 text-center">
        <p className="mb-0 text-muted">Home <span className="fw-bold">{getDisplayPath()}</span></p>
      </div>
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <div className="d-none d-md-block col-md-8 border border-dark border-1 my-3">
        {renderContent()}
      </div>
    </div>
  );
}

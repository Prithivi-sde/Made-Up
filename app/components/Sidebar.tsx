'use client';
import React, { useEffect } from 'react';
import { IconRight } from '../icons/IconRight';
import { ProfileForm } from './ProfileForm';
import { orders } from '../Data/Orders';
import { OrderCard } from './OrderCard';
import ProfileImage from '../Images/ProfileImage.jpg';

interface Props {
  activeSection: 'profile' | 'orders' | 'addresses';
  setActiveSection: (section: 'profile' | 'orders' | 'addresses') => void;
}

export const Sidebar = ({ activeSection, setActiveSection }: Props) => {
  const pendingOrders = orders.filter(order => order.status === 'Pending');
  useEffect(() => {
    const bootstrap = require('bootstrap');
    const accordionElements = document.querySelectorAll('.accordion');
    accordionElements.forEach((element) => {
      new bootstrap.Collapse(element);
    });
  }, []);

  return (
    <>
      <div className="d-block d-md-none overflow-auto px-3 pb-4">
        <div className="d-flex align-items-center pt-3">
          <img
            src={ProfileImage.src}
            alt="Profile"
            className="rounded-circle me-3"
          />
          <div>
            <h6 className="mb-0">Grishk</h6>
            <small className="text-muted">griiskaim@gmail.com</small>
          </div>
        </div>

        <div className="accordion mt-4" id="mobileAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="mobileProfileHeading">
              <button
                className="accordion-button collapsed d-flex justify-content-between align-items-center w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileProfileCollapse"
              >
                <div className="d-flex flex-column text-start">
                  <span>My Profile</span>
                  <small className="text-muted pt-2">Notifications, password</small>
                </div>
              </button>
            </h2>
            <div
              id="mobileProfileCollapse"
              className="accordion-collapse collapse"
              data-bs-parent="#mobileAccordion"
            >
              <div className="accordion-body border-top border-dark">
                <ProfileForm />
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="mobileOrdersHeading">
              <button
                className="accordion-button collapsed d-flex justify-content-between align-items-center w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileOrdersCollapse"
              >
                <div className="d-flex flex-column text-start">
                  <span>My Orders</span>
                  <small className="text-muted pt-2">Already have 12 orders</small>
                </div>
              </button>
            </h2>
            <div
              id="mobileOrdersCollapse"
              className="accordion-collapse collapse"
              data-bs-parent="#mobileAccordion"
            >
              <div className="accordion-body">
                <h4 className="m-2 fw-semibold fs-14">Pending Orders</h4>
                {pendingOrders.length > 0 ? (
                  pendingOrders.map((order, index) => (
                    <OrderCard key={index} {...order} />
                  ))
                ) : (
                  <p className="ms-2">No pending orders.</p>
                )}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="mobileAddressHeading">
              <button
                className="accordion-button collapsed d-flex justify-content-between align-items-center w-100 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileAddressCollapse"
              >
                <div className="d-flex flex-column text-start">
                  <span>Shipping Addresses</span>
                  <small className="text-muted pt-2">3 addresses</small>
                </div>
              </button>
            </h2>
            <div
              id="mobileAddressCollapse"
              className="accordion-collapse collapse"
              data-bs-parent="#mobileAccordion"
            >
              <div className="accordion-body">3 saved addresses</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 d-none d-md-block">
        <div className="d-flex align-items-center mb-3">
          <img
            src={ProfileImage.src}
            alt="Profile"
            className="rounded-circle"
          />
          <div className="ms-3">
            <h6 className="mb-0">Grishk</h6>
            <small className="text-muted">griiskaim@gmail.com</small>
          </div>
        </div>

        <div className="list-group">
          <button
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-start ${activeSection === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveSection('profile')}
          >
            <div>
              <div><strong> My Profile </strong> </div>
              <small className="text-muted">Notifications, password</small>
            </div>
            <span className="me-5"><IconRight /></span>
          </button>
          <button
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-start ${activeSection === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveSection('orders')}
          >
            <div>
              <div><strong>My Orders</strong></div>
              <small className="text-muted">Already have 12 orders</small>
            </div>
            <span className="me-5"><IconRight /></span>
          </button>
          <button
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-start ${activeSection === 'addresses' ? 'active' : ''}`}
            onClick={() => setActiveSection('addresses')}
          >
            <div>
              <div><strong>Shipping addresses </strong></div>
              <small className="text-muted">3 addresses</small>
            </div>
            <div className="me-5">
              <IconRight />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
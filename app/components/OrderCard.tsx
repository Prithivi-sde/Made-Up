import OrderImage from "../Images/OrderImage.jpg";
import { ORDER_HEADER } from "../utils/CONSTANTS";

interface OrderCardProps {
  orderNumber: string;
  date: string;
  status: string;
}

export const OrderCard = ({ orderNumber, date, status }: OrderCardProps) => {
  return (
    <div className="position-relative" >
      <div className="d-flex justify-content-between border-bottom p-3 mb-3 align-items-center">
        <div className="d-flex align-items-center">
          <div className="p-3" style={{ backgroundColor: '#e5e5e5', display: 'inline-block' }}>
            <img src={OrderImage.src} alt="Order image"/>
          </div>
          <div className="ms-4">
            <p className="mb-1">{`${ORDER_HEADER} ${orderNumber}`}</p>
            <h6 className="mb-1">Madeup White Cotton Blend Checkered Slim Fit Shirt</h6>
            <small>Express Delivery by {date}</small>
          </div>
        </div>
        <div className="text-end">
          <p className="mb-1">Credit Card Payment</p>
          <h6 className="mb-1">Rs 1,899</h6>
        </div>
      </div>

      <span
        className={`px-3 py-1 rounded-top fw-normal fs-6 position-absolute end-0`}
        style={{
          bottom: '-1px',
          backgroundColor: status === 'Delivered' ? '#f8f9fa' : '#212529',
          color: status === 'Delivered' ? '#212529' : '#fff',
        }}
      >
        {status}
      </span>
    </div>
  );
};

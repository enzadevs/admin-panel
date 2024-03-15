"use client";

import PaymentTypesForm from "components/Containers/Forms/PaymentTypesForm";
import DeliveryTypesForm from "components/Containers/Forms/DeliveryTypesForm";
import OrderStatusesForm from "components/Containers/Forms/OrderStatusesForm";

export default function OrderSettingsPage() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <PaymentTypesForm />
      <DeliveryTypesForm />
      <OrderStatusesForm />
    </div>
  );
}

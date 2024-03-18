"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";

export default function CurrentOrdersPage() {
  const {
    data: orders,
    error,
    isLoading,
  } = UseFetcher("http://localhost:3001/orders/all");
  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const groupedOrders = {};

  orders.forEach((order) => {
    const statusTitle = order.orderStatus.titleRu;
    if (!groupedOrders[statusTitle]) {
      groupedOrders[statusTitle] = [];
    }
    groupedOrders[statusTitle].push(order);
  });

  return (
    <div className="flex flex-col gap-4">
      <h2>Текущие заказы</h2>
      {Object.entries(groupedOrders).map(([statusTitle, statusOrders]) => (
        <div
          key={statusTitle}
          className="bg-yellow-400 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <h3 className="text-lg font-bold">{statusTitle}</h3>
          {statusOrders.map((order) => (
            <div key={order.id} className="bg-emerald-400 flex flex-col gap-2">
              <h2 className="font-bold">Order details</h2>
              <p>Address: {order.address}</p>
              <p>Comment: {order.comment}</p>
              <p>Sum: {order.sum}</p>
              <p>Payment: {order.paymentType.titleRu}</p>
              <p>Delivery: {order.deliveryType.titleRu}</p>
              {/* List of product titles */}
              <ul className="list-disc pl-4">
                {order.productsList.map((product) => (
                  <li key={product.id}>
                    {product.productId
                      ? `Product ID: ${product.productId}`
                      : product.quantity + " item(s)"}
                  </li>
                ))}
                <p className="font-bold">{order.productsList.length}</p>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

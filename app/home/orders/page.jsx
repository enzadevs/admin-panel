"use client";

import Link from "next/link";
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
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(groupedOrders).map(([statusTitle, statusOrders]) => (
          <div
            key={statusTitle}
            className="bg-white rounded-lg flex flex-col gap-4 p-2"
          >
            <h3 className="text-lg font-bold">{statusTitle}</h3>
            {statusOrders.map((order) => (
              <Link
                href={"/home/orders/" + order.id}
                key={order.id}
                className="bg-white border rounded-lg shadow-md flex flex-col items-center gap-2 p-2 transition hover:bg-mercury-100"
              >
                <div className="flex-row-center justify-between p-2 h-6 w-full">
                  Номер заказа:
                  <p className="font-bold">{order.id}</p>
                </div>
                <div className="flex-row-center justify-between p-2 h-6 w-full">
                  Адрес:
                  <p className="font-bold">{order.address}</p>
                </div>
                <div className="flex-row-center justify-between p-2 h-6 w-full">
                  Комментарий:
                  <p className="font-bold">
                    {order.comment ? order.comment : "Нет"}
                  </p>
                </div>
                <div className="flex-row-center justify-between p-2 h-6 w-full">
                  Сумма:
                  <p className="font-bold">{order.sum}</p>
                </div>
                <div className="flex-row-center justify-between p-2 h-6 w-full">
                  Способ оплаты:
                  <p className="font-bold">{order.paymentType.titleRu}</p>
                </div>
                <div className="flex-row-center justify-between p-2 h-6 w-full">
                  Способ доставки:
                  <p className="font-bold">{order.deliveryType.titleRu}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

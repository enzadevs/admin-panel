import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { useState, useEffect, useRef } from "react";
import { UseFetcher } from "utils/UseFetcher";
import { BsCart2 } from "react-icons/bs";

export default function OrdersCount() {
  const [notificationPermission, setNotificationPermission] =
    useState("default");
  const [ordersCount, setOrdersCount] = useState(0);
  const audioRef = useRef(new Audio("/bell.mp3"));

  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      setNotificationPermission(permission);
    });
  }, []);

  const {
    data: stats,
    isLoading,
    isError,
  } = UseFetcher("http://localhost:3001/orders/today");

  useEffect(() => {
    if (stats && stats.ordersCount !== undefined) {
      setOrdersCount(stats.ordersCount);
      audioRef.current.play();
    }
  }, [stats]);

  useEffect(() => {
    if (notificationPermission === "granted" && ordersCount > 0) {
      const notification = new Notification("New Order!", {
        body: `You have ${ordersCount} new orders!`,
      });

      audioRef.current.play();
    }
  }, [ordersCount, notificationPermission]);

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="short-sum-box">
      <div className="flex flex-col flex-[75%] h-full max-w-[75%]">
        <p className="border-b flex items-center pl-2 h-8">Заказы</p>
        <div className="center grow">
          <p className="font-semibold text-lg lg:text-xl">{ordersCount}</p>
        </div>
      </div>
      <span className="border-l center flex-[25%] h-full max-w-[25%]">
        <BsCart2 className="h-6 w-6 lg:h-10 lg:w-10" />
      </span>
    </div>
  );
}

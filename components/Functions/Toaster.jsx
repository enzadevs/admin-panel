import toast from "react-simple-toasts";

export default function ThrowToast() {
  const taskPromise = new Promise((resolve) => setTimeout(resolve, 1500));
  const taskToast = toast("Task started", {
    className:
      "bg-calm border border-calm text-white rounded-lg shadow-md px-8 h-10 z-10",
    loading: taskPromise,
    duration: Infinity,
  });

  taskPromise.then(() => {
    taskToast.update({
      message: "Task finished",
      duration: 1000,
    });
  });
}

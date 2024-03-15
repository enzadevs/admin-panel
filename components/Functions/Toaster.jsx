import toast from "react-simple-toasts";

export function SuccessToast({ successText }) {
  toast(successText, {
    className:
      "bg-green-600 rounded-lg shadow-sm text-white center md:text-sm px-8 h-10 z-20",
    duration: 1750,
  });
}

export function ErrorToast({ errorText }) {
  toast(errorText, {
    className:
      "bg-red-200 rounded-lg md:text-sm text-red-500 center px-8 h-10 z-10",
    duration: 1750,
  });
}

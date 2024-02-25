import toast from "react-simple-toasts";

export function SuccessToast({ successText }) {
  toast(successText, {
    className:
      "bg-green-700 rounded-lg shadow-sm text-white text-center text-sm sm:text-base px-8 h-10 z-10",
    duration: 1750,
  });
}

export function ErrorToast({ errorText }) {
  toast(errorText, {
    className:
      "bg-red-200 border border-red-500 rounded-lg text-xs md:text-sm text-red-500 center px-8 h-10 z-10",
    duration: 1750,
  });
}

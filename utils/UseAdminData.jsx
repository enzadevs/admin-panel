import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const UseAdminData = create(
  persist(
    (set, get) => ({
      admin: undefined,
      setAdmin: (admin) => set(() => ({ admin: admin })),
      removeAdmin: () => {
        localStorage.removeItem("admin-info");
        set({ admin: undefined });
      },
    }),
    {
      name: "admin-info",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

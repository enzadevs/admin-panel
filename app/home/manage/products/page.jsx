"use client";

import ProductStatusForm from "components/Containers/Forms/ProductStatusForm";
import UnitTypeForm from "components/Containers/Forms/UnitTypeForm";

export default function ProductSettingsPage() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <ProductStatusForm />
      <UnitTypeForm />
    </div>
  );
}

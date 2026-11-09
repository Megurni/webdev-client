"use client";
import { FaCheckCircle, FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { useModulesStore } from "../../../store/modulesStore";
export default function ModuleControlButtons({
  moduleId,
}: {
  moduleId: string;
}) {
  const { deleteModule, editModule } = useModulesStore();
  return (
    <span className="flex items-center gap-3">
      <FaCheckCircle className="text-green-600" />
      {
        <>
          <button aria-label="Edit module" onClick={() => editModule(moduleId)}>
            <FaPencilAlt />
          </button>
          <button
            aria-label="Delete module"
            onClick={() => deleteModule(moduleId)}
          >
            <FaTrash />
          </button>
          <BsPlus />
        </>
      }
      <IoEllipsisVertical />
    </span>
  );
}

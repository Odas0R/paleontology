import { useState } from "react";

export default function useDisclosure() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const toggleOpen = () => setOpen(!open);

  return {
    open,
    toggleOpen,
    handleOpen,
    onClose,
  };
}

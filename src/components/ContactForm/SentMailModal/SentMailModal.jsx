import React from "react";

export default function SentMailModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return <>{isOpen && <div>модалка</div>}</>;
}

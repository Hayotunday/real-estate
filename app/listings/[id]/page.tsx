"use client";

import { ReactNode, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const ListingModal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80"
      onClick={handleClick}
    >
      <div
        ref={wrapper}
        className="flex justify-start items-center flex-col absolute h-[85%] w-full bottom-0 bg-white rounded-t-3xl lg:px-20 px-8 pt-14 pb-72 overflow-auto"
      >
        <div className="w-full flex justify-end items-center">
          <button
            type="button"
            onClick={onDismiss}
            className="flex justify-center items-center"
          >
            <IoClose size={25} className="text-blue-950" />
          </button>
        </div>
        children
      </div>
    </div>
  );
};

export default ListingModal;

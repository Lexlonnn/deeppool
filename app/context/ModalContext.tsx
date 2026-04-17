"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type DetailModalData = {
  title: string;
  tagline: string;
  desc: string;
  content?: string;
  type: 'service' | 'portfolio' | 'sector';
  icon?: any;
};

type ModalContextType = {
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;

  isDetailModalOpen: boolean;
  activeDetail: DetailModalData | null;
  openDetailModal: (data: DetailModalData) => void;
  closeDetailModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [activeDetail, setActiveDetail] = useState<DetailModalData | null>(null);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openDetailModal = (data: DetailModalData) => {
    setActiveDetail(data);
    setIsDetailModalOpen(true);
  };
  const closeDetailModal = () => setIsDetailModalOpen(false);

  useEffect(() => {
    if (isContactModalOpen || isDetailModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isContactModalOpen, isDetailModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isContactModalOpen,
        openContactModal,
        closeContactModal,
        isDetailModalOpen,
        activeDetail,
        openDetailModal,
        closeDetailModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

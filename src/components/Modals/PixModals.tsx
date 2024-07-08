"use client";
import Link from "next/link";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import Image from "next/image";
interface ModalProps {
  isOpenModal: boolean;
  isLoading: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  qrCodePix: {
    urlImage: string;
    code: string;
    message: string;
  };
}

export default function ModalPix({
  isOpenModal,
  setIsOpenModal,
  qrCodePix,
  isLoading,
}: ModalProps) {
  const [copied, setCopied] = useState(false);
  const [expiredTime, setExpiredTime] = useState(180);

  useEffect(() => {
    if (isOpenModal) {
      const interval = setInterval(() => {
        if (expiredTime !== 0) {
          setExpiredTime(expiredTime - 1);
        } else {
          setIsOpenModal(false);
          setCopied(false);
          setExpiredTime(120);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isOpenModal, expiredTime]);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrCodePix.code);
    setCopied(true);
  };

  if (!isOpenModal) {
    return null;
  }
  return (
    <Modal
      classNames={{
        modal: "w-[500px]",
        modalContainer: "w-[500px]",
      }}
      open={isOpenModal}
      onClose={() => {
        setIsOpenModal(false);
        setCopied(false);
        if (copied) {
          window.location.href = "https://ingresse.com";
        }
      }}
      center
      styles={{
        modal: {
          width: "100%",
          maxWidth: "350px",
          height: "600px",
        },
      }}
    >
      <div className="!w-[500px] bg-red-200">
        {isLoading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="w-full h-full flex justify-center items-center"
          >
            <ReactLoading
              type={"bubbles"}
              color={"#00ABEC"}
              height={80}
              width={80}
            />
          </div>
        ) : (
          <>
            <div style={{ marginTop: 20 }}>
              <span
                style={{
                  textAlign: "center",
                  display: "block",
                  margin: "0 auto",
                  color: "#dd1839",
                }}
              >
                Expira em: {formatTime(expiredTime)}
              </span>
              <div
                style={{
                  maxWidth: 300,
                  width: "100%",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={qrCodePix.urlImage}
                  style={{ width: "100%", height: "100%" }}
                  width={250}
                  height={250}
                  alt="QR Code Pix"
                />
              </div>
              <span
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  display: "block",
                  maxWidth: "100%",
                  textAlign: "center",
                  color: "#00ABEC",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={qrCodePix.code}
              >
                {qrCodePix.code}
              </span>

              <div
                style={{
                  width: "100%",
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  disabled={copied}
                  onClick={copyToClipboard}
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    maxWidth: 200,
                    textAlign: "center",
                    background: !copied ? "#00ABEC" : "#28d654",
                    color: "#fff",
                    padding: 10,
                    borderRadius: 5,
                    border: "none",
                    cursor: "pointer",
                    marginRight: 10,
                  }}
                >
                  {copied ? "Copiado" : "Copiar"}
                </button>
                <span
                  style={{
                    display: "block",
                    color: "#747474",
                    fontSize: 14,
                    marginTop: 10,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  {qrCodePix.message}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

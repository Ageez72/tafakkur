"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import "../../node_modules/react-modal-video/css/modal-video.css";
import ReactDOM from "react-dom"; // Import ReactDOM for using portals

export default function VideoPopup({ style, videoId, color, shapeIcon, title, videoTitleIcon, videoTitleIconFirsts, customClasses }) {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const [isOpen, setOpen] = useState(false);

  // Create a portal to render the ModalVideo in the body
  const renderModalVideo = () => {
    return (
      isOpen &&
      ReactDOM.createPortal(
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
          style={{
            overlay: {
              zIndex: 9999, // Use a reasonable high z-index value
            },
          }}
        />,
        document.body // Render it directly in the body
      )
    );
  };

  return (
    <>
      {style === 1 && (
        <div className="video-box">
          <a
            onClick={() => setOpen(true)}
            className="video-btn ripple video-popup"
          >
            <i className="fa-solid fa-play" />
          </a>
        </div>
      )}
      {style === 2 && (
        <div className="video-box">
          <a
            onClick={() => setOpen(true)}
            className={`video-button video-popup ${customClasses}`}
          >
            <i className={`fa-solid ${videoTitleIconFirsts} me-2`}></i>
            {title}
            <i className={`fa-solid ${videoTitleIcon} ms-2`}></i>
          </a>
        </div>
      )}
      {style === 3 && (
        <span className="button-text wow fadeInUp" data-wow-delay=".9s">
          <a
            onClick={() => setOpen(true)}
            className={`video-btn ripple video-popup ${
              color === "fff" ? "white-video-btn" : ""
            }`}
          >
            {shapeIcon ? (
              <span className="custom-video-palyer-icon"></span>
            ) : (
              <i className="fa-solid fa-play" />
            )}
          </a>
        </span>
      )}

      {/* Render the ModalVideo using a portal */}
      {renderModalVideo()}
    </>
  );
}

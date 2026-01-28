import React, { useState } from "react";
import { ButtonBlock } from "../types";

interface ButtonBlockComponentProps {
  block: ButtonBlock;
  isSelected: boolean;
}

export const ButtonBlockComponent: React.FC<ButtonBlockComponentProps> = ({
  block,
  isSelected,
}) => {
  const buttonBorder =
    block.borderWidth > 0
      ? `${block.borderWidth}px solid ${block.borderColor}`
      : "none";

  const buttonDisplay =
    block.alignment === "left"
      ? "flex"
      : block.alignment === "right"
        ? "flex"
        : "flex";

  const buttonJustify =
    block.alignment === "left"
      ? "flex-start"
      : block.alignment === "right"
        ? "flex-end"
        : "center";

  const buttonWidth =
    block.widthUnit === "%" ? `${block.width}%` : `${block.width}px`;

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`p-4 transition-all ${
        isSelected ? "ring-2 ring-valasys-orange" : ""
      }`}
      style={{
        display: buttonDisplay,
        justifyContent: buttonJustify,
        margin: `${block.margin}px`,
      }}
    >
      <div
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "visible",
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          style={{
            backgroundColor: block.backgroundColor,
            color: block.textColor,
            padding: `${block.padding}px 20px`,
            borderRadius: `${block.borderRadius}px`,
            border: buttonBorder,
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            width: buttonWidth,
            textAlign: "center",
          }}
          disabled
        >
          {block.text}
        </button>
        {showTooltip && block.linkTooltip && (
          <div
            style={
              {
                position: "absolute",
                bottom: "calc(100% + 18px)",
                left: "50%",
                transform: "translateX(-50%) scale(1)",
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
                padding: "5px 10px",
                borderRadius: "4px",
                fontSize: "11px",
                fontWeight: "500",
                whiteSpace: "nowrap",
                zIndex: 10000,
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.25)",
                pointerEvents: "none",
                animation: "tooltipFade 0.2s ease-in-out",
                letterSpacing: "0.2px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              } as React.CSSProperties
            }
          >
            {block.linkTooltip}
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                marginLeft: "-5px",
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "5px solid #1F2937",
                filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))",
              }}
            />
            <style>{`
              @keyframes tooltipFade {
                from {
                  opacity: 0;
                  transform: translateX(-50%) scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: translateX(-50%) scale(1);
                }
              }
            `}</style>
          </div>
        )}
        {showTooltip && block.link && block.link !== "#" && (
          <div
            style={
              {
                position: "fixed",
                bottom: "20px",
                left: "20px",
                backgroundColor: "#FF6A00",
                color: "#FFFFFF",
                padding: "10px 14px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "600",
                maxWidth: "350px",
                wordBreak: "break-all",
                zIndex: 10001,
                boxShadow: "0 8px 16px rgba(255, 106, 0, 0.3)",
                pointerEvents: "none",
                animation: "urlDisplay 0.2s ease-in-out",
                letterSpacing: "0.3px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontFamily: "monospace",
              } as React.CSSProperties
            }
          >
            <div style={{ fontSize: "10px", opacity: 0.9, marginBottom: "4px" }}>
              URL:
            </div>
            {block.link}
            <style>{`
              @keyframes urlDisplay {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
};

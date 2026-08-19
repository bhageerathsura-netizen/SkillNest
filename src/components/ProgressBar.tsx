import React from "react";

interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  size?: "small" | "medium" | "large";
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  showPercentage = true,
  size = "medium",
}) => {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  const heightClasses = {
    small: "h-1.5",
    medium: "h-2",
    large: "h-3",
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="mb-2 flex items-center justify-between">
          {label && (
            <span className="text-sm font-medium text-gray-700">
              {label}
            </span>
          )}

          {showPercentage && (
            <span className="text-sm font-semibold text-blue-600">
              {safeProgress}%
            </span>
          )}
        </div>
      )}

      <div
        className={`w-full overflow-hidden rounded-full bg-blue-50 ${heightClasses[size]}`}
      >
        <div
          className={`h-full rounded-full bg-blue-600 transition-all duration-700 ease-out`}
          style={{
            width: `${safeProgress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
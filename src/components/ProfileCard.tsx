import React from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  github?: string;
  avatarColor?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  description,
  linkedin,
  github,
  avatarColor = "from-blue-400 to-purple-500",
}) => {
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-center mb-4">
        <div
          className={`w-20 h-20 bg-gradient-to-br ${avatarColor} rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg`}
        >
          <span className="text-white font-bold text-lg">
            {getInitials(name)}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-1">{name}</h3>
        <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
          {role}
        </p>
      </div>
      <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
        {description}
      </p>
      {(linkedin || github) && (
        <div className="flex justify-center space-x-3 pt-3 border-t border-gray-100">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
              title="LinkedIn"
            >
              LinkedIn
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              title="GitHub"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;

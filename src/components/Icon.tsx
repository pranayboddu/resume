import { IconType } from "react-icons";
import { useTheme } from "../contexts/ThemeContext";

interface IconProps {
    IconComponent: IconType;
    size?: number;
    color?: string;
}

const Icon = ({ IconComponent, size = 16, color = '' }: IconProps) => {
    const { isDark } = useTheme();
    return <IconComponent size={size} color={isDark ? '#ffffff' : '#000000'} />;
};

export default Icon;
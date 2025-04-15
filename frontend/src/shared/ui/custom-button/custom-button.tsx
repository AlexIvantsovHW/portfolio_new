import { useRouter } from "next/navigation";
import * as icons from "../icons/index";
type Props = {
  label: string;
  Icon?:
    | "WebStoriesIcon"
    | "WorkIcon"
    | "SmartphoneIcon"
    | "ThumbUpAltIcon"
    | "LoginIcon"
    | "PersonIcon";
  route?: string;
  click?: () => void;
};
export const CustomizedBtn: React.FC<Props> = ({
  label,
  Icon,
  route,
  click,
}) => {
  const router = useRouter();
  const IconComponent = Icon ? icons[Icon] : null;
  return (
    <button
      onClick={() => (route ? router.push(route) : click)}
      className="flex items-center justify-center text-orangeLight text-[15px] hover:border-b hover:border-b-orangeLight py-[5px] hover:text-orangeDark hover:border-orangeDark transition ease-in-out  duration-500 "
    >
      {IconComponent && <IconComponent />}
      <span className="md:block hidden">{label.toUpperCase()}</span>
    </button>
  );
};

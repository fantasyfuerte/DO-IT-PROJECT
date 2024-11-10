import {type route} from '../types'

interface Props{
    routes: route[]
}

const navItemStyle = "text-xl hover:opacity-50 transition cursor-pointer";
const navItemBoldStyle = "text-xl hover:opacity-50 transition cursor-pointer font-semibold";

const Nav: React.FC<Props> = ({routes}) => {
  return (
    <nav className="flex justify-between items-center cursor-pointer">
      <h4 className="font-bold text-4xl inline-block p-3 text-amber-800">DO-IT-NOW</h4>
      <div className="flex flex-row gap-5 pr-3">
        {routes.map(route=><p key={`${route.title}${route.url}`} className={route.bold?navItemBoldStyle:navItemStyle} >{route.title}</p>)}
      </div>
    </nav>
  );
};

export default Nav;

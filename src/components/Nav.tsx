import { type route } from "../types";

interface Props {
  routes: route[];
}

const navItemStyle = "text-xl hover:opacity-50 transition cursor-pointer";
const navItemBoldStyle =
  "text-xl hover:opacity-50 transition cursor-pointer font-semibold";

const Nav: React.FC<Props> = ({ routes }) => {
  return (
    <nav className="bg-nav md:bg-transparent flex fixed w-full top-0 justify-between items-center">
      <h2 className="font-bold text-3xl inline-block p-3 text-black cursor-pointer">
        DO-IT-NOW
      </h2>
      <section className="flex flex-row gap-5 pr-3">
        {routes.map((route) => (
          <p
            key={`${route.title}${route.url}`}
            className={route.bold ? navItemBoldStyle : navItemStyle}
          >
            {route.title}
          </p>
        ))}
      </section>
    </nav>
  );
};

export default Nav;

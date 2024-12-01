import { Route } from "../types";

interface Props {
  routes: Route[];
}

const navItemStyle = "text-xl hover:opacity-50 transition cursor-pointer";
const navItemBoldStyle =
  "text-xl hover:opacity-50 transition cursor-pointer font-semibold";

const Nav: React.FC<Props> = ({ routes }) => {
  return (
    <nav className="bg-white md:bg-transparent flex fixed w-full top-0 justify-center md:justify-between items-center">
      <h2 className="font-bold text-3xl inline-block p-3 text-black cursor-pointer shadow-black-custom">
        DO-IT-NOW
      </h2>
      <section className="hidden md:flex flex-row gap-5 pr-3">
        {routes.map((Route) => (
          <a
            key={`${Route.title}${Route.url}`}
            className={Route.bold ? navItemBoldStyle : navItemStyle}
            href={Route.url}
          >
            {Route.title}
          </a>
        ))}
      </section>
    </nav>
  );
};

export default Nav;

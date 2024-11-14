import { RiArrowDownWideFill } from "react-icons/ri"

const ScrollDownText: React.FC = () =>{
    return <div
    className={`hidden md:flex flex-col items-center mt-40`}
  >
    <p>
      <strong>Scroll down</strong> or press <strong>space</strong>
    </p>
    <RiArrowDownWideFill size={50} />
  </div>
}

export default ScrollDownText

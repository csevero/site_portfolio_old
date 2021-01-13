import { Link } from "react-router-dom";
import arrow from "../../assets/images/vector/arrow-black.svg";

import './buttonBack.css';

interface Props {
  link: string;
}

function ButtonBack({ link }: Props) {
  return (
    <Link to={`${link}`}>
      <img src={arrow} className='back-image' />
    </Link>
  );
}

export default ButtonBack;

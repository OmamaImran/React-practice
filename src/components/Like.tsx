import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}
function Like({ onClick }: Props) {
  const [liked, setLiked] = useState(true);
  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) {
    return <FaHeart color="red" size="40" onClick={toggle} />;
  } else {
    return <FaRegHeart color="red" size="40" onClick={toggle} />;
  }
}

export default Like;

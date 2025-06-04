import Yarder4 from "../assets/images/4-yarder-skip.jpg";
import Yarder5 from "../assets/images/5-yarder-skip.jpg";
import Yarder14 from "../assets/images/14-yarder-skip.jpg";
import Yarder16 from "../assets/images/16-yarder-skip.jpg";
import Yarder20 from "../assets/images/20-yarder-skip.jpg";
import Yarder40 from "../assets/images/40-yarder-skip.jpg";

// Select skip image by size
export const getSkipImage = (size) => {
  if (size < 5) {
    return Yarder4;
  } else if (size < 14) {
    return Yarder5;
  } else if (size < 16) {
    return Yarder14;
  } else if (size < 20) {
    return Yarder16;
  } else if (size < 40) {
    return Yarder20;
  } else {
    return Yarder40;
  }
};

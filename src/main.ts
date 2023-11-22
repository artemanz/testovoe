import "./assets/fonts";
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

new Swiper("[data-selector=dishes-card-1]", {
  modules: [Navigation],
  navigation: {
    nextEl: "[data-slider=dishes-card-1][data-selector=next-slide]",
    prevEl: "[data-slider=dishes-card-1][data-selector=prev-slide]",
    disabledClass: "disabled",
  },
});
new Swiper("[data-selector=dishes-card-2]", {
  modules: [Navigation],
  navigation: {
    nextEl: "[data-slider=dishes-card-2][data-selector=next-slide]",
    prevEl: "[data-slider=dishes-card-2][data-selector=prev-slide]",
    disabledClass: "disabled",
  },
});

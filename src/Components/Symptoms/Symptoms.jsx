import Center from "./SComponents/Center/Center";
import S1 from "./SComponents/S1/S1";
import S2 from "./SComponents/S2/S2";
import S3 from "./SComponents/S3/S3";
import S4 from "./SComponents/S4/S4";
import S5 from "./SComponents/S5/S5";
import S6 from "./SComponents/S6/S6";
import S7 from "./SComponents/S7/S7";
import S8 from "./SComponents/S8/S8";
import "./Symptoms.css";

function Symptoms() {
  
  

  return (
    <div className="sympWrapper">
      <p className="iconsDescription">
        Сообщает ли один из ваших пациентов о следующих симптомах? 
        <span className="pressIcon"> (нажмите на любую иконку и узнайте больше)</span>
      </p>
      <div className="sympIconsWrapper">
        <S1 />
        <S2 />
        <S3 />
        <S4 />
        <S5 />
        <S6 />
        <S7 />
        <S8 />
        <Center />
      </div>
    </div>
  );
}

export default Symptoms;

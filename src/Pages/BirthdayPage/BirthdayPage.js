import React from "react";
import Style from "./BirthdayPage.module.css";
import { Data } from "../../ConstData";
function BirthdayPage() {
  return (
    <>
      <div className={Style.mainWrapper}>
        <div className={Style.secWrapper}>
          {Data.filter(
            (x) =>
              new Date().getDate() == new Date(x.DOB).getDate() &&
              new Date().getMonth()+1 == new Date(x.DOB).getMonth()+1
          ).map((x, id) => {
            return (
              <>
                <ul key={id} className={Style.Content}>
                  <h3>{x.firstName}</h3>
                  <h5>{x.lastName}</h5>
                  <h2>{x.DOB}</h2>
                </ul>
              </>
            );
          })}
          <button></button>
        </div>
      </div>
    </>
  );
}
export default BirthdayPage;

import React, {/* useState */} from "react";
import Footer from "../routes/footer";

export default function MainContents() {
  //const {quote, setQuote} = useState([]);

  return(
    <div>
      <div>
        <h1>자신의 욕망을 극복하는 사람이</h1>
        <h1>강한 적을 물리친 사람보다 위대하다.</h1>
        <h3>-아리스토텔레스-</h3>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
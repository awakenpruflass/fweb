import qavtasi from "./qavtaslogo.png";
import qavtlang from "./qavtaslang.png";
import qavtshek from "./qavtshek.png";
import qavtmaz1 from "./qavtmaz1.png";
import qavtmaz2 from "./qavtmaz2.png";

export default function Header() {
  return (
    <div>
      <div className="zevit">
        <p className="nom">548764238</p>
      </div>
      <div className="qavtasi">
        <img src={qavtasi} />

        <p>მთავარი</p>
        <p>პროდუქცია</p>
        <p>ბლოგი</p>
        <p>ჩვენს შესახებ</p>
        <p>კონტაქტები</p>

        <img src={qavtlang} className="ena" />
      </div>

      <div className="mt">
        <div className="mtavari">
          <img src={qavtshek} className="shek" />
          <div>
            <img src={qavtmaz1} className="maz1" />
            <img src={qavtmaz2} className="maz2" />
          </div>
        </div>
      </div>

      <div className="mtavari2">
        <div>
          <img src={qavtshek} className="shek2" />
          <p className="zz">ნაყენი</p>
        </div>
        <div>
          <img src={qavtmaz1} className="shek2" />
          <p className="zz">მალამო</p>
        </div>
        <div>
          <img src={qavtmaz2} className="shek2" />
          <p className="zz">მალამო</p>
        </div>
      </div>
    </div>
  );
}

import qavtasi from "./qavtaslogo.png"
import qavtlang from "./qavtaslang.png"
import qavtshek from "./qavtshek.png"
import qavtmaz1 from "./qavtmaz1.png"


export default function Header(){
        return (
           <div>
                <div className="zevit">
                    <p className="nom">548764238</p>
                </div>
                <div className="qavtasi">
                <img src={qavtasi}  />

                <p>მთავარი</p>
                <p>პროდუქცია</p>
                <p>ბლოგი</p>
                <p>ჩვენს შესახებ</p>
                <p>კონტაქტები</p>

                <img src={qavtlang} className="ena" />
            </div>

            
            <img src={qavtshek} className="shek" />
                <div>

                <img src={qavtmaz1} className="maz1" />

                </div>


           </div>
        )
}
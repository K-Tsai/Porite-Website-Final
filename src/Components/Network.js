import React, { Component } from 'react';
import P_0313 from "../pictures/P_0313.jpg";
import P_0309 from "../pictures/P_0309.jpg";
import P_0302 from "../pictures/P_0302.jpg";
import P_0303 from "../pictures/P_0303.jpg";
import P_0304 from "../pictures/P_0304.jpg";
import P_0305 from "../pictures/P_0305.jpg";
import P_0306 from "../pictures/P_0306.jpg";
import P_0307 from "../pictures/P_0307.jpg";
import P_0308 from "../pictures/P_0308.jpg";
import P_0310 from "../pictures/P_0310.jpg";
import P_0311 from "../pictures/P_0311.jpg";
import P_0312 from "../pictures/P_0312.jpg";
import PoriteWorldMap from "../pictures/PoriteWorldMap.jpg";
import "./Network.css"

class Network extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="worldmap">
          <img 
            alt="Porite World Map"
            src={PoriteWorldMap}
            id="poriteWorldMap"
            class="world-map"
          />
          </div>
         <h2 className="title1">United States & Europe</h2>
          <div className="offices1">
            <div className="col">
              <img 
                alt="Troy Offices"
                src={P_0313}
                id="troyOffice"
                class="troy"
              />
              <ul className="picture-info">
                <h3>Porite USA Co., Ltd.(Warehouse)</h3>
                <li>1295, Combermere Dr., Troy, MI 48083,</li>
                <li>USA</li>
                <li>Tel：+1-248-597-9988</li>
                <li>Fax：+1-248-597-9990</li>
                <li>E-mail：dianne@poriteusa.com</li>
              </ul>
            </div>
            <div className="col">
              <img 
                alt="Jefferson Offices"
                src={P_0309}
                id="jeffersonOffice"
                class="jefferson"
              />
              <ul className="picture-info">
                <h3>Porite Jefferson Corp.</h3>
                <li>1535, Fairground Road. Jefferson City, MO</li>
                <li>65109, U.S.A.</li>
                <li>Tel：+1-573-893-2445</li>
                <li>Fax：+1-573-893-2098</li>
                <li>E-mail：hungmo@porite-jc.com</li>
              </ul>
            </div>
            <div className="col">
              <img 
                alt="2-121"
                src={P_0312}
                id="poriteJapan"
                class="poriteJapan"
              />
              <ul className="picture-info">
                <h3>Porite Europe S.A.S.(Warehouse)</h3>
                <li>5 Voie Comte Joly de Fleury, 91070  Bondoufle, France</li>
                <li>Tel：+33-1-6991-4664</li>
                <li>Fax：+33-1-6972-2849</li>
                <li>E-mail：jp.benoit@poriteeurope.fr</li>
                <li>http://www.porite-europe.com</li>
              </ul>
            </div>
          </div>
          <h2 className="title2">Asia</h2>
          <div className="offices2">
            <div className="col">
              <img 
                alt="porite-Japan"
                src={P_0302}
                id="japanOffice"
                class="japan"
              />
              <ul className="picture-info">
                <h3>Porite Corporation</h3>
                <li>2-121, Nisshin-Cho, Kita-Ku, Saitama City,</li>
                <li>Saitama Pref., 331-0823, Japan</li>
                <li>Tel：+81-48-653-2222</li>
                <li>Fax：+81-48-653-1293</li>
                <li>E-mail：int@porite.co.jp</li>
                <li>http://www.porite.co.jp</li>
              </ul>
            </div>
            <div className="col">
              <img 
                alt="porite-Japan"
                src={P_0303}
                id="kumagaya"
                class="japan"
              />
              <ul className="picture-info">
                <h3>Porite Corp. Kumagaya Plant </h3>
                <li>Kamiebukuro 350, Kumagaya City</li>
                <li>Saitama, 360-0234, Japan</li>
                <li>Tel: +81-48-588-6182</li>
                <li>Tel: +81-48-567-1020</li>
              </ul>
            </div>
            <div className="col">
              <img 
                alt="2-121"
                src={P_0304}
                id="poriteJapan"
                class="poriteJapan"
              />
              <ul className="picture-info">
                <h3>Porite Taiwan Co., Ltd.</h3>
                <li>1, Zhongpu St. 20 Lin, Dapu Li,Zhunan,</li>
                <li>Miaoli 35059, Taiwan, R.O.C.</li>
                <li>Tel：+886-37-581-121</li>
                <li>Fax：+886-37-581-128</li>
                <li>E-mail：porite@mail.porite.com.tw</li>
                <li>http://www.porite.com.tw</li>
              </ul>
            </div>
          </div>
          <div className="offices3">
            <div className="col">
              <img 
                alt="porite-Singapore"
                src={P_0305}
                id="singaporeOffice"
                class="singapore"
              />
              <ul className="picture-info">
                <h3>Porite Singapore PTE. Ltd.</h3>
                <li>18. Third Chin Bee Road, 618692,</li>
                <li>Singapore</li>
                <li>Tel：+65-264-2323</li>
                <li>Fax：+65-264-4536</li>
                <li>E-mail：porite@pacific.net.sg</li>
              </ul>
            </div>
            <div className="col">
              <img 
                alt="porite-Yangzhou"
                src={P_0306}
                id="yangzhouOffice"
                class="yangzhou"
              />
              <ul className="picture-info">
                <h3>Porite Yangzhou Technology &</h3>
                <li>Industry Co., Ltd.</li>
                <li>399, Han-Jiang South Road, Yangzhou</li>
                <li>Economic & Technical Development Area,</li>
                <li>Jiangsu, 225127 China</li>
                <li>Tel: +86-514-8555-5666</li>
                <li>Fax: +86-514-8796-0050</li>
                <li>E-mail：bao@mail.porite.com.cn</li>
                <li>http://www.porite.com.cn</li>
              </ul>
            </div>
            <div className="col">
              <img 
                alt="porite-Malaysia"
                src={P_0307}
                id="poriteMalaysia"
                class="malaysia"
              />
              <ul className="picture-info">
                <h3>Porite Malaysia SDN. BHD.</h3>
                <li>2, Jalan Keluli 1, Kawasan Perindustrian</li>
                <li>Bukit Raja, Seksyen 7,40000 Shah Alam,</li>
                <li>Selangor Darul Ehsan, Malaysia</li>
                <li>Tel：+60-3343-0535(5 lines)</li>
                <li>Fax：+60-3343-0542</li>
                <li>E-mail：suganuma@porite.com.my</li>
              </ul>
            </div>
          </div>
          <div className="offices4">
            <div className="col">
              <img 
                alt="porite-TouFen"
                src={P_0308}
                id="poriteTouFen"
                class="tou-fen"
              />
              <ul className="picture-info">
                <h3>Tou-Fen Factory</h3>
                <li>236, Hsin-Pu, 7 Lin, Hsing-Lung Li, Tou-</li>
                <li>Fen, Miao-Li, 35163, Taiwan, R.O.C.</li>
                <li>Tel：+886-37-590-222</li>
                <li>Fax：+81-48-653-1293</li>
                <li>Fax：+886-37-590-173</li>
                <li>E-mail：porite@mail.porite.com.tw</li>
                <li>http://www.porite.com.tw</li>
              </ul>
            </div>
            <div className="col">
              <img 
                alt="porite-India"
                src={P_0310}
                id="poriteIndia"
                class="india"
              />
              <ul className="picture-info">
                <h3>Porite India Private Limited</h3>
                <li>Plot No – A-1/2/1, MIDC ChakanPhase II,</li>
                <li>Shinde Village, Pune Disctrict, Maharashtra</li>
                <li>410501, India</li>
                <li>Tel: +91-213-564-6401</li>
                <li>Fax: +91-213-564-6402</li>
                <li>E-mail：Hr@porite.co.in</li>
              </ul>
            </div>
            <div className="col">
              <img 
                alt="porite-HongKong"
                src={P_0311}
                id="poriteHongKong"
                class="hong-kong"
              />
              <ul className="picture-info">
                <h3>Porite Hong Kong Ind. Co., Ltd.</h3>
                <li>Unit No.6, 15th Floor Prosperity Place,</li>
                <li>No.6, Shing Yip St., Kwung Tong, Kowloon,</li>
                <li>HK</li>
                <li>Tel：+852-2342-6568</li>
                <li>Fax：+852-2342-4523</li>
                <li>E-mail：takeuchi@porite.com.hk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Network;
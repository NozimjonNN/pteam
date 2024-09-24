import React from "react"
import './Diyorbek.css'
import imgOne from '../Img/Combined Shape.png'
import imgTwo from '../Img/8.png'
import imgThree from '../Img/6.png'
import imgFour from '../Img/5.png'
import imgFive from '../Img/4.png'
import imgSix from '../Img/3.png'
import imgSeven from '../Img/2.png'
import imgEight from '../Img/1.png'
import ImgIphone from '../Img/Iphone1.png'
import ImgGoogle from '../Img/Google2.png'
import ImgNine from '../Img/Img1.png'
import ImgTen from '../Img/Img2.png'
import ImgEleven from '../Img/adres1.png'
import ImgTwelve from '../Img/telefon2.png'
import ImgThriteen from '../Img/rabota3.png'
import ImgFourteen from '../Img/adres2.png'
import ImgFifteen from '../Img/telefon1.png'
import ImgSixteen from '../Img/rabota3.png'
import ImgSeventeen from '../Img/ImgOne.png'

const DiyorbekPart = ()=> {
    return(
        <div>
            
         <div className="BigBox-1">
            <div className="text-1">1 150 000</div>
            <div className="text-2">питомцам мы помогли <br /> за 18 лет работы</div>
         </div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
         <div className="BigBox-2">
            <div className="text-3">Почему хозяева выбирают нас?</div>
            <br /><br /><br /><br />
            <div className="Box-1" style={{display:"flex",justifyContent:"center"}}>
                
            <div className="MiniBox-1" style={{marginRight:"250px"}}>
                    <div className="text-4">Работаем круглосуточно</div>
                    <div style={{display:"flex",gap:"30px",marginTop:"25px"}}>
                    <img src={imgOne} alt="" />
                    <div className="text-5">Мы готовы в любое время суток <br /> принять домашних питомцев и их <br /> хозяев</div>
                    </div>
                </div>
                <div className="MiniBox-2">
                    <div className="text-4">Широкий спектр услуг</div>
                    <div style={{display:"flex",gap:"30px",marginTop:"25px"}}>
                    <img src={imgTwo} alt="" />
                    <div className="text-5">Кроме широкопрофильных докторов  <br /> в клинике развиты узкие направления <br /> в ветеринарии – офтальмология,<br /> стоматология, дерматология, <br /> травматология, ортопедия и онкология</div>
                    </div>
                </div>
                <div className="MiniBox-3" style={{marginLeft:"250px"}}>
                    <div className="text-4">Большой опыт</div>
                    <div style={{display:"flex",gap:"30px",marginTop:"25px"}}>
                    <img src={imgThree} alt="" />
                    <div className="text-5">Мы готовы в любое время суток <br /> принять домашних питомцев и их <br /> хозяев</div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            <div className="Box-2" style={{display:"flex",justifyContent:"center"}}>
                
            <div className="MiniBox-1" style={{marginRight:"250px"}}>
                    <div className="text-4">Собственная лаборато</div>
                    <div style={{display:"flex",gap:"30px",marginTop:"25px"}}>
                    <img src={imgFour} alt="" />
                    <div className="text-5">Оборудованная профессиональным<br /> оснащением производства компании<br /> IDEXX International Inc.(США), которое <br /> позволяет получить результаты <br /> исследования прямо на приеме</div>
                    </div>
                </div>
                <div className="MiniBox-2">
                    <div className="text-4">Оснащенные стационары</div>
                    <div style={{display:"flex",gap:"30px",marginTop:"25px"}}>
                    <img src={imgFive} alt="" />
                    <div className="text-5">Кроме широкопрофильных докторов  <br /> в клинике развиты узкие направления <br /> в ветеринарии – офтальмология,<br /> стоматология, дерматология, <br /> травматология, ортопедия и онкология</div>
                    </div>
                </div>
                <div className="MiniBox-3" style={{marginLeft:"250px"}}>
                    <div className="text-4">Новейшее оборудование</div>
                    <div style={{display:"flex",gap:"30px",marginTop:"25px"}}>
                    <img src={imgSix} alt="" />
                    <div className="text-5">Мы готовы в любое время суток <br /> принять домашних питомцев и их <br /> хозяев</div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            <div className="Box-3" style={{display:"flex",justifyContent:"center"}}>
                
            <div className="MiniBox-1" style={{marginRight:"250px"}}>
                    <div className="text-4">Запись на прием онлайн</div>
                    <div style={{display:"flex",gap:"30px",marginTop:"25px"}}>
                        
                    <div className="text-0">Запись на приём позволяет избежать <br /> ожиданий в очереди, но если вы не <br /> можете приехать - мы выезжаем на <br /> дом!</div>
                    </div>
                </div>
                <div className="MiniBox-2" style={{marginLeft:"60px"}}>
                    <div className="text-4">Аптека и зоомагазин</div>
                    <div style={{display:"flex",gap:"30px",marginTop:"25px"}}>
                    <img src={imgSeven} alt="" />
                    <div className="text-5">Для удобства в клинике предусмотрен <br /> аптечный пункт, а также бутик с <br /> одеждой и косметическими <br /> средствами для ухода за домашними <br /> любимцами</div>
                    </div>
                </div>
                <div className="MiniBox-3" style={{marginLeft:"250px"}}>
                    <div className="text-4">Груминг-салон</div>
                    <div style={{display:"flex",gap:"30px",marginTop:"25px"}}>
                    <img src={imgEight} alt="" />
                    <div className="text-5">Отдельный кабинет для проведения <br /> гигиенческих и косметических <br /> процедур, таких как мытьё и сушка, <br /> стрижка или тримминг, уход за ушами, <br /> глазами и когтями и многое другое</div>
                    </div>
                </div>
            </div>
            
         </div>
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
         <div className="BigBox-3" style={{background:"#FFC59E",display:"flex"}}>
            <div style={{marginLeft:"250px",marginTop:"350px"}}>
                <div style={{color:"white",fontSize:"20px"}}>скоро</div>
                <div style={{color:"white",fontSize:"60px",marginTop:"15px"}}>Удобное приложениедля <br /> питомцев и <br /> их хозяев</div>
                <br /><br />
                <div style={{display:"flex",gap:"20px"}}>
                <div style={{display:"flex",alignItems:"center"}}><img src={ImgIphone} alt="" /></div>
                <div style={{display:"flex",alignItems:"center"}}><img src={ImgGoogle} alt="" /></div>
                </div>
            </div>
            
            <div style={{display:"flex",marginTop:"350px",marginBottom:"275px"}}>

                <div><img src={ImgNine} alt="" /></div>
                <div style={{position:"absolute",marginLeft:"300px"}}><img src={ImgTen}  alt="" /></div>
            </div>
            
         </div>
         <div className="BigBox-4">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div>
                <div style={{fontSize:"30px",fontWeight:"600",marginLeft:"300px"}}>Контакты</div>
                <br /><br />
                <div style={{display:"flex",gap:"75px"}}>
                <div style={{marginLeft:"300px"}}>
                <div>
                <div style={{fontSize:"25px",fontWeight:"500"}}>Айболит на Краснополянской</div>
                <div><img src={ImgEleven} alt="" /></div>
                <div><img src={ImgTwelve} alt="" /></div>
                <div><img src={ImgThriteen} alt="" /></div>
                </div>
                <br /><br />
                <div>
                    <div style={{fontSize:"25px",fontWeight:"500"}}>Айболит на Тулака</div>
                    <div><img src={ImgFourteen} alt="" /></div>
                    <div><img src={ImgFifteen} alt="" /></div>
                    <div><img src={ImgSixteen} alt="" /></div>
                </div>
                
            </div>
            <div>
                <div><img src={ImgSeventeen} style={{width:"750px",height:"400px"}} alt="" /></div>
            </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
         </div>


        </div>
    )
}

export default DiyorbekPart

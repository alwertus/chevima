import style from "./ChevimaStyl.module.scss";
import "./ChevimaStyl.scss";
import Img_i from './m/i.jpg';
import picArray from "./images";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import React, {useState} from "react";

import {ImageListerComp} from "../imglister/ImageListerComp";

export const ChevimaComp = props => {

    const [ImgListerShow, setImgListerShow] = useState(false);
    const [ImgListerItems, setImgListerItems] = useState([]);
    const [ImgListerCursor, setImgListerCursor] = useState(0);


    const getDescription = (group) => {
        if (group === "groot") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>3D Max</b>
                    <ul>
                        <li>создание всех моделей в сцене</li>
                        <li>болванка для Грута</li>
                        <li>развёртка</li>
                    </ul>
                </li>
                <li><b>3D Coat</b>
                    <ul>
                        <li>модель</li>
                        <li>развёртка и доработка ретопологии Грута</li>
                        <li>текстуры всех моделей</li>
                    </ul></li>
                <li><b>Unreal Engine</b> - сборка, компиляция проекта</li>
                <li><b>Instant Meshses</b> - основа ретопологии Грута</li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li><b>Normal map</b></li>
                <li>Модификатор <b>Quad Chamfer</b></li>
                <li>Запечка света</li>
                <li>Добавление звуковых эффекты</li>
            </ul>
            <h2>Используемые материалы</h2>
            <ul>
                <li>Анимация Грута взята с <a href="https://www.mixamo.com/">mixamo</a></li>
                <li>Звуки взяты с <a href="https://wav-library.net/">wav-library</a></li>
                <li>Некоторые текстуры взяты с <a href="https://3ddd.ru/">3ddd</a>, <a href="https://junior3d.ru/">junior3d</a></li>
            </ul>
            <p>Продвинутый курс "Игровая 3D графика" школы <a href="https://knower.pro/">Knower School</a></p>
        </div>
        if (group === "house") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>Autocad</b> - используя чертежи, делала наброски для 3d max</li>
                <li><b>3d max</b>
                    <ul>
                        <li>моделирование здания</li>
                        <li>рабочая зона кухни</li>
                        <li>кухонный шкаф</li>
                        <li>шкаф в комнате</li>
                        <li>освещение</li>
                        <li>работа с камерами</li>
                    </ul>
                </li>
                <li><b>Corona Render</b></li>
                <li><b>Adobe Photoshop</b> - обработка готового изображения</li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li>Дополнительные модификаторы
                    <ul>
                        <li><b>Clone</b></li>
                        <li><b>Floor Generator</b></li>
                    </ul>
                </li>
                <li>Плагин <b>MultiTexture</b></li>
                <li>Корвертация моделей в proxy</li>
            </ul>
            <h2>Используемые материалы</h2>
            <ul>
                <li>Дополнительная мебель и текстуры взяты с:
                    <ul>
                        <li><a href="https://3ddd.ru/">3ddd</a></li>
                        <li><a href="https://junior3d.ru/">junior3d</a></li>
                        <li><a href="http://www.3dklad.com/">3dklad</a></li>
                        <li><a href="https://www.turbosquid.com/">turbosquid</a></li>
                        <li><a href="https://dimensiva.com/">dimensiva</a></li>
                        <li><a href="https://www.bentanji.com/">bentanji</a></li>
                        <li><a href="http://coronamaterials.com/">coronamaterials</a></li>
                    </ul>
                </li>
            </ul>
            <p>Архитектурный курс школы <a href="https://knower.pro/">Knower School</a></p>
        </div>
        if (group === "dog") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>3d max</b> - работа над правильной сеткой</li>
                <li><b>Corona Render</b></li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li>Основные модификаторы
                    <ul>
                        <li><b>Edit Poly</b></li>
                        <li><b>TurboSmooth</b></li>
                        <li><b>Symmetry</b></li>
                    </ul>
                </li>
                <li>Использование <b>Tips</b> для правильной сетки</li>
            </ul>
            <p>Базовый курс школы <a href="https://knower.pro/">Knower School</a></p>
        </div>
        if (group === "cookies") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>3d max</b></li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li>Основные модификаторы
                    <ul>
                        <li><b>Edit Poly</b></li>
                        <li><b>TurboSmooth</b></li>
                        <li><b>Twist</b></li>
                        <li><b>Bend</b></li>
                    </ul>
                </li>
            </ul>
            <p>Вводный урок школы <a href="https://knower.pro/">Knower School</a></p>
        </div>
        if (group === "chair") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>3d max</b></li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li>Основные модификаторы
                    <ul>
                        <li><b>Edit Poly</b></li>
                        <li><b>TurboSmooth</b></li>
                        <li><b>Symmetry</b></li>
                        <li><b>FFD 4x4x4</b></li>
                    </ul>
                </li>
            </ul>
            <p>Урок взят с youtube</p>
        </div>
    }

    const onClick_Link = (val) => {
        let current = picArray[val.target.id];

        let imagesObj = picArray.filter(e => e.group === current.group);
        let images = [...new Set(imagesObj.map(e => e.img))]

        setImgListerItems(images);
        setImgListerCursor(images.indexOf(current.img));
        setImgListerShow(true);
    }

    const projects = () => {
        let groups = [...new Set(picArray.map(e => e.group))];

        return <div className="about">
            {groups.map((currentGroup, groupNum) => {
                let groupArray = picArray.filter(z => z.group === currentGroup);

                return <Accordion key={groupNum}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h4" gutterBottom>
                            {currentGroup.charAt(0).toUpperCase() + currentGroup.slice(1)}
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className="images">
                            {groupArray.map(
                                (el, i) => <div
                                    className="image"
                                    onClick={onClick_Link}
                                    key={i}
                                    id={picArray.indexOf(el)}>
                                    <img src={el.img} alt="" />
                                </div>
                            )}
                        </div>
                        {getDescription(currentGroup)}
                    </AccordionDetails>
                </Accordion>
            })}
        </div>
    }

    return <div className={style.chevimaWrapper}>
        <div className={style.chevima}>
            <div className={style.title}>
                <div className={style.myFoto}>
                    <img src={Img_i} alt="qwe" width="100%" height="100%"/>
                </div>
                <div className={style.myInfo}>
                    <div className={style.myFio}><span>Чевардина Мария Викторовна</span></div>
                    <div className={style.myBirthday}><span>Дата рождения: 21.10.1994</span></div>
                    <div className={style.myProf}><span>3d моделлер</span></div>
                </div>
            </div>
            <div className={style.portfolioTitle}><span>Портфолио</span></div>
            {projects()}
            <ImageListerComp
                show={ImgListerShow}
                cursor={ImgListerCursor}
                items={ImgListerItems}
                setShow={setImgListerShow}
                setCursor={setImgListerCursor}
            />
        </div>
    </div>
};
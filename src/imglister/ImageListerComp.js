import React from "react";
import style from "./ImageListerStyl.module.scss";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';

export const ImageListerComp = props => {

    if (!props.show ||
        props.cursor < 0 ||
        props.items.length < 1)
        return <div/>

    const onClickDarkScreen = (val) => {
        if (val.target.className !== style.darkscreen) return;
        props.setShow(false)
    }

    const onClickBack = () => {
        if (props.cursor < 1) return;
        props.setCursor(props.cursor - 1);
    }

    const onClick_Forward = () => {
        if (props.cursor >= props.items.length - 1) {
            props.setShow(false);
            return;
        }
        props.setCursor(props.cursor + 1);
    }

    return <div className={style.darkscreen} onClick={onClickDarkScreen}>
        <div className="back"><IconButton onClick={onClickBack}><ArrowBackIosIcon/></IconButton></div>
        <div className={style.image_wrapper}>
            <img src={props.items[props.cursor]} alt="" onClick={onClick_Forward}/>
        </div>
        <div className="forward"><IconButton onClick={onClick_Forward}><ArrowForwardIosIcon/></IconButton></div>
    </div>
};

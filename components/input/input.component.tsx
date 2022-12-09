import { TemplateContext } from "../../context/template.context";
import { Fragment, useContext } from "react";

const Input = ({props}) => {
  const { template,changeTitleContent } = useContext(TemplateContext);

  const {
    color,
    textColor,
    title,
    size,
    subTitle,
    placeholder,
    button,
    logoUrl,
  } = template.content;


  return (<input className="" onChange={} placeholder={deneme}></input>  );
};

export default Input;

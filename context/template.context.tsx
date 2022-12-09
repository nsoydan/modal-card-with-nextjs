import { createContext, useState, useRef } from "react";
import React, { Children } from "react";

// Change  Size Function
const setFontSize = (template, modalSize, defaultTemplate) => {
  const tempTemplate = { ...template };
  console.log("modalSize:", modalSize);
  switch (modalSize) {
    case "s":
      tempTemplate.content.title.textSize = 24;
      tempTemplate.content.subTitle.textSize = 16;
      tempTemplate.content.placeholder.textSize = 12;
      tempTemplate.content.button.button1.textSize = 12;
      tempTemplate.content.button.button2.textSize = 12;
      break;
    case "m":
      tempTemplate.content.title.textSize = 30;
      tempTemplate.content.subTitle.textSize = 20;
      tempTemplate.content.placeholder.textSize = 16;
      tempTemplate.content.button.button1.textSize = 16;
      tempTemplate.content.button.button2.textSize = 16;
      break;
    case "l":
      tempTemplate.content.title.textSize = 36;
      tempTemplate.content.subTitle.textSize = 24;
      tempTemplate.content.placeholder.textSize = 20;
      tempTemplate.content.button.button1.textSize = 20;
      tempTemplate.content.button.button2.textSize = 20;
      break;
  }
  return tempTemplate;
};

// Change Bckround Color Function
const setColor = (template, color) => {
  console.log("color:", color);
  console.log("template", template);

  const copyTemplate = { ...template };
  copyTemplate.content.button.button2.color = color;

  if (color != "#FFFFFF") {
    copyTemplate.content.button.button2.textColor = "white";
  } else {
    copyTemplate.content.button.button2.textColor = "black";
  }
  console.log("copyTemplate", copyTemplate);
  return copyTemplate;
};

// Change Title Content

const setTitleContent = (template, newTitle) => {
  const copyTemplate = { ...template };
  copyTemplate.content.title.content = newTitle;
  return copyTemplate;
};
//Change SubTitle

const setSubTitleContent = (template, newSubTitle) => {
  const copyTemplate = { ...template };
  copyTemplate.content.subTitle.content = newSubTitle;
  return copyTemplate;
};
//change Placeholder

const setPlaceholderContent = (template, newPlaceholder) => {
  const copyTemplate = { ...template };
  copyTemplate.content.placeholder.content = newPlaceholder;
  return copyTemplate;
};
//change button button1 content

const setButtonButton1Content = (template, newContent) => {
  const copyTemplate = { ...template };
  copyTemplate.content.button.button1.content = newContent;
  return copyTemplate;
};
//change Button button2 content

const setButtonButton2Content = (template, newContent) => {
  const copyTemplate = { ...template }; // böyle yapmazsak template , re-render etmiyor neden?
  copyTemplate.content.button.button2.content = newContent;
  return copyTemplate;
};
const setPosition = (template, newPosition) => {
  const copyTemplate = { ...template }; // böyle yapmazsak template , re-render etmiyor neden?
  copyTemplate.content.position = newPosition;
  return copyTemplate;
};

export const TemplateContext = createContext({
  setTemplate: () => null,
  template: {
    id: null,
    type: null,
    content: {
      show: false,
      logoUrl: null,
      title: {
        content: null,
        textSize: null,
        textColor: null,
      },
      subTitle: {
        content: null,
        textSize: null,
        textColor: null,
      },
      position: null,
      button: {
        button1: {
          content: null,
          textSize: null,
          color: null,
          textColor: null,
        },
        button2: {
          content: null,
          textSize: null,
          color: null,
          textColor: null,
        },
      },
      color: null,
      textColor: null,
      placeholder: { content: null, textSize: null },
      size: {
        width: null,
        height: null,
      },

      person: null,
      message: null,
      withText: null,
      viaWhatsapp: null,
      gty: null,
      awu: null,
      connect: null,
      track: 0,
      device: null,
      services: [{}],
    },
  },
  defaultTemplate: {},
  changeSize: (modalSize) => null,
  changeColor: (color) => null,
  changeTitleContent: (newTitle) => null,
  changeSubTitleContent: (newSubTitle) => null,
  changePlaceholderContent: (newPlaceholder) => null,
  changeButtonButton1Content: (newContent) => null,
  changeButtonButton2Content: (newContent) => null,
  changePosition: (newPosition) => null,
});

export const TemplateProvider = ({ children }) => {
  const [template, setTemplate] = useState(null);

  const [defaultTemplate, setDefaultTemplate] = useState(template);
  console.log("Template Provider çalıştı");

  const changeSize = (modalSize, defaultTemplate) => {
    const d = setFontSize(template, modalSize);

    setTemplate(d);
  };

  const changeColor = (color) => {
    const deneme = setColor(template, color);
    console.log("deneme::", deneme);
    setTemplate(deneme);
  };

  const changeTitleContent = (newTitle) => {
    setTemplate(setTitleContent(template, newTitle));
  };
  const changeSubTitleContent = (newSubTitle) => {
    setTemplate(setSubTitleContent(template, newSubTitle));
  };
  const changePlaceholderContent = (newPlaceholder) => {
    setTemplate(setPlaceholderContent(template, newPlaceholder));
  };
  const changeButtonButton1Content = (newContent) => {
    setTemplate(setButtonButton1Content(template, newContent));
  };
  const changeButtonButton2Content = (newContent) => {
    setTemplate(setButtonButton2Content(template, newContent));
  };
  const changePosition = (newPosition) => {
    setTemplate(setPosition(template, newPosition));
  };

  const value = {
    template,
    setTemplate,
    changeSize,
    changeColor,
    changeTitleContent,
    changeSubTitleContent,
    changePlaceholderContent,
    changeButtonButton1Content,
    changeButtonButton2Content,
    changePosition,
  };

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};

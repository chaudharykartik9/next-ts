
import React, { FC, ReactNode } from 'react';
interface ElementWrapperProp{
    elementType: 'div'|'span' | 'h1' | 'button' ;
    children : ReactNode ;
    className ?:string ;
    onClick?:() => void ;
}


const ElementWrapper : FC<ElementWrapperProp> = ({elementType,children,className,onClick}) => {
    const Element = elementType ;
  return (
   <Element className={className} onClick={onClick}>{children}</Element>
  )
}

export default ElementWrapper
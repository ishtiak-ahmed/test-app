import React from "react";
type Props = {
  category: string;
  className: string;
  setActive: any;
};

export default function Category({ category, className, setActive }: Props) {
  return (
    <span className={"main__nav__item " + className} onClick={setActive}>
      {category}
    </span>
  );
}

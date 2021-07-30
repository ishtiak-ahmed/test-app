import { useState } from "react";
import { IItem, RootState } from "../../interfaces";
import { useSelector } from "react-redux";
import Category from "./Category";
import Course from "./Course";
import { useEffect } from "react";

export default function Main() {
  const { minutes, blocks, categories } = useSelector(
    (state: RootState) => state.courses
  );
  const [allCourse, setCourse] = useState<IItem[]>([]);

  useEffect(() => {
    const urls = [
      "https://i.postimg.cc/KzPCH9pG/graphic-course.png",
      "https://i.postimg.cc/FFgQWKwy/illustration-course.png",
    ];
    const all = minutes?.map((item, index: number) => {
      const url = index % 2 === 0 ? urls[1] : urls[0];
      return {
        ...item,
        name: blocks[index],
        url,
      };
    });
    setCourse(all);
  }, [blocks, minutes]);

  const [active, setActive] = useState(0);
  return (
    <div className="main">
      <div className="main__nav">
        <div>
          <h1>Courses {blocks.length}</h1>
        </div>
        <div>
          {categories?.map((cat, index) => (
            <Category
              category={cat}
              key={index}
              setActive={() => setActive(index)}
              className={active === index ? "active" : ""}
            />
          ))}
        </div>
      </div>
      <div className="main__body">
        {allCourse?.map((item) => (
          <Course item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

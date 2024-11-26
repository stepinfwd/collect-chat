import { DragDropContext } from "react-beautiful-dnd";
import React, { useState, useEffect } from "react";
import { useDrop } from 'react-dnd'
import "./App.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import CategorySidebar from "./components/category/category-sidebar";
import CategoryContainer from "./components/category/category-container";
import ResumeContainer from "./components/resume/resumeContainer";
import { initialData } from "./components/data";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
function App(props) {
  const [resume, setResume] = useState(initialData.record);
  const [category, setCategory] = useState([
    { id: 1, name: "devops", items: [] },
    { id: 2, name: "backend", items: [] },
    { id: 3, name: "junior frontend", items: [] },
    { id: 4, name: "business developmnent", items: [] },
    { id: 5, name: "Lead Engineer", items: [] },
  ]);
  const [selectedCategory, setselectedCategory] = useState(category[0]);

  const handleSelectedCategory = (selected) => {
    setselectedCategory(selected);
  };
  // const [, drop] = useDrop(
  //   () => ({
  //     accept: ItemTypes.KNIGHT,
  //     drop: () => moveKnight(x, y)
  //   }),
  //   [x, y]
  // )
  // const [collectedProps, drop] = useDrop(() => ({
  //   accept
  // }))

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Header />

      <div className="layout__container"  >
        <ResumeContainer resume={resume} />

      <CategorySidebar
        category={category}
        setselectedCategory={setselectedCategory}
        handleSelectedCategory={handleSelectedCategory}
      />
      <CategoryContainer selectedCategory={selectedCategory} />
      </div>

      <Footer />
    </div>
    </DndProvider>
  );
}

export default App;

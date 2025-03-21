import {
  AccordionGroup,
  FlowLayout,
  FormField,
  FormFieldLabel,
  Input,
} from "@salt-ds/core";
import React from "react";
import { ReusableAccordion } from "./components/Accordian";
import AgGrid from "./components/AgGrid";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import SignUp from "./components/SignUp";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<AgGrid />} />
    //   <Route path="/user/:id" element={<UserDetails />} />
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route path="/data_table" element={<DataTable />} />

    // </Routes>
    <div style={{ width: "80%", height: "100%" }}>
      <AccordionGroup>
        {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
          <ReusableAccordion
            value={`accordion-example${i}`}
            key={i}
            onToggle={(res)=>console.log(res.currentTarget.value)}
            defaultExpanded={true}
          ></ReusableAccordion>
        ))}
      </AccordionGroup>
    </div>
  );
};

export default App;

// FormCategory.js
import { useState, useEffect } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export default function FormCategory({ categories, onChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    setSelectedCategories(categories);
  }, [categories]);

  const handleChange = (event, newValue) => {
    setSelectedCategories(newValue);
    onChange(event, newValue);
  };

  return (
    <Select
      multiple
      value={selectedCategories}
      onChange={handleChange}
      sx={{
        minWidth: "13rem",
      }}
      slotProps={{
        listbox: {
          sx: {
            width: "100%",
          },
        },
      }}
    >
      <Option value="React.js">React.js</Option>
      <Option value="Node.js">Node.js</Option>
      <Option value="New">New</Option>
      <Option value="Urgent">Urgent</Option>
    </Select>
  );
}

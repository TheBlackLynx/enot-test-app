import "./styles.js";
import React from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as RectIcon } from "../../shared/assets/rect.svg";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { useStyles } from "./styles.js";

import FormControlLabel from '@mui/material/FormControlLabel';
import { IOSSwitch } from "./styles.js";


export const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const styles = useStyles();
  const value = React.useContext(UserContext);
  console.log(value);
  return (
    <>
      <h3>
        Все задачи
        {(value) => <h1>{value.data}</h1>}
      </h3>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        {value.data?.map((todo) => {
          return (
            <div 
            className={styles.detailsContainer}>
                <div 
                className={styles.description}>
                <RectIcon className={styles.rectIconClass}/>
              <AccordionDetails  key={todo.id}>
                {todo.title}
              </AccordionDetails>
                </div>
              
              {/* <Switch 
              classes={styles}
            //    icon={<CloseRoundedIcon className={classes.uncheckedIcon} />}
                checkedIcon={<DoneRoundedIcon className="checkedIcon" />}
                /> */}
        <div className={styles.button}>
     <FormControlLabel 
        control={<IOSSwitch sx={{ m: 1 }} />}
        />
        </div>
         
  
            </div>
          );
        }) ?? null}
      </Accordion>
    </>
  );
};

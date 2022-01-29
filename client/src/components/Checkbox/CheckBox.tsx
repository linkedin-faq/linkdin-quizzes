/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./checkbox.scss";
import isValidOption from "./helpers";

const CheckBox = function ({
  options,
  sendAns,
}: {
  options: string[];
  sendAns: (optionSelected: Option) => void;
}) {
  const [optionSelected, setOptionSelected] = useState<Option>(0);

  useEffect(() => {
    setOptionSelected(0);
  }, [options]);

  const chooseAns = (target: HTMLInputElement) => {
    const option = Number(target.name);
    if (isValidOption(option))
      option === optionSelected
        ? setOptionSelected(0)
        : setOptionSelected(option);
  };
  return (
    <div className="checkbox-container">
      <div className="checkboxes">
        <label className="flipBox">
          <input
            name="1"
            type="checkbox"
            checked={optionSelected === 1}
            onClick={(e) => chooseAns(e.target as HTMLInputElement)}
          />
          <span>{options[0]}</span>
          <div className="flipBox_boxOuter">
            <div role="button" className="flipBox_box">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="flipBox_shadow" />
        </label>

        <label className="flipBox">
          <input
            name="2"
            type="checkbox"
            checked={optionSelected === 2}
            onClick={(e) => chooseAns(e.target as HTMLInputElement)}
          />
          <span>{options[1]}</span>
          <div className="flipBox_boxOuter">
            <div className="flipBox_box">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="flipBox_shadow" />
        </label>

        <label className="flipBox">
          <input
            type="checkbox"
            name="3"
            checked={optionSelected === 3}
            onClick={(e) => chooseAns(e.target as HTMLInputElement)}
          />
          <span>{options[2]}</span>
          <div className="flipBox_boxOuter">
            <div className="flipBox_box">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="flipBox_shadow" />
        </label>
        <label className="flipBox">
          <input
            name="4"
            type="checkbox"
            checked={optionSelected === 4}
            onClick={(e) => chooseAns(e.target as HTMLInputElement)}
          />
          <span>{options[3]}</span>
          <div className="flipBox_boxOuter">
            <div className="flipBox_box">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="flipBox_shadow" />
        </label>
        <div className="send-ans">
          <Button
            variant="contained"
            className="send-ans"
            style={{ backgroundColor: "green" }}
            disabled={!optionSelected}
            onClick={() => sendAns(optionSelected)}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CheckBox;

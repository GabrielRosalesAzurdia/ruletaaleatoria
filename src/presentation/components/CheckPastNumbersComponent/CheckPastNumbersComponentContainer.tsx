import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Failure, LocalStorageError } from "../../../domain/models";
import { getListMethod } from "../../logic";
import CheckPastNumbersComponent from "./CheckPastNumbersComponent";

interface CheckPastNumbersComponentContainerInterface {}

// Checks if a number has past
const CheckPastNumbersComponentContainer: React.FC<
  CheckPastNumbersComponentContainerInterface
> = () => {
  const [formValues, setformValues] = useState({ numberToVerify: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let numberToCompare: Number;
    let flag = true;
    if (
      isNaN(
        Number(
          (
            e.currentTarget.elements.namedItem(
              "numberToVerify"
            ) as HTMLInputElement
          ).value
        )
      )
    ) {
      toast.error("Give me valid data : /");
      return;
    }
    {
      numberToCompare = Number(
        (
          e.currentTarget.elements.namedItem(
            "numberToVerify"
          ) as HTMLInputElement
        ).value
      );
    }
    getListMethod()
      .then((responseList) => {
        if (responseList instanceof LocalStorageError) {
          return;
        } else if (responseList instanceof Failure) {
          toast.error("A Failure happened on the list :(");
          return;
        }
        if (responseList.value.length == 0 || responseList.value == null) {
          toast.error("No numbers yet ; )");
          return;
        }
        responseList.value.map((value) => {
          if (
            value.value == numberToCompare
          ) {
            flag = false
          }
        });
        if(flag){
          toast.error("It's not in the list :/");
        }else{
          toast.success("It's in the list!");
        }
      })
      .catch((e) => console.log(e));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <CheckPastNumbersComponent
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      numberToVerify={formValues.numberToVerify}
    />
  );
};

export default CheckPastNumbersComponentContainer;

/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createEvent } from "./graphql/mutations";
const client = generateClient();
export default function EventCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    category: "",
    datetime: "",
    privacySetting: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [category, setCategory] = React.useState(initialValues.category);
  const [datetime, setDatetime] = React.useState(initialValues.datetime);
  const [privacySetting, setPrivacySetting] = React.useState(
    initialValues.privacySetting
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setCategory(initialValues.category);
    setDatetime(initialValues.datetime);
    setPrivacySetting(initialValues.privacySetting);
    setErrors({});
  };
  const validations = {
    name: [],
    category: [],
    datetime: [],
    privacySetting: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          category,
          datetime,
          privacySetting,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createEvent.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EventCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              category,
              datetime,
              privacySetting,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              category: value,
              datetime,
              privacySetting,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <TextField
        label="Datetime"
        isRequired={false}
        isReadOnly={false}
        value={datetime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              category,
              datetime: value,
              privacySetting,
            };
            const result = onChange(modelFields);
            value = result?.datetime ?? value;
          }
          if (errors.datetime?.hasError) {
            runValidationTasks("datetime", value);
          }
          setDatetime(value);
        }}
        onBlur={() => runValidationTasks("datetime", datetime)}
        errorMessage={errors.datetime?.errorMessage}
        hasError={errors.datetime?.hasError}
        {...getOverrideProps(overrides, "datetime")}
      ></TextField>
      <SelectField
        label="Privacy setting"
        placeholder="Please select an option"
        isDisabled={false}
        value={privacySetting}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              category,
              datetime,
              privacySetting: value,
            };
            const result = onChange(modelFields);
            value = result?.privacySetting ?? value;
          }
          if (errors.privacySetting?.hasError) {
            runValidationTasks("privacySetting", value);
          }
          setPrivacySetting(value);
        }}
        onBlur={() => runValidationTasks("privacySetting", privacySetting)}
        errorMessage={errors.privacySetting?.errorMessage}
        hasError={errors.privacySetting?.hasError}
        {...getOverrideProps(overrides, "privacySetting")}
      >
        <option
          children="Private"
          value="PRIVATE"
          {...getOverrideProps(overrides, "privacySettingoption0")}
        ></option>
        <option
          children="Friends only"
          value="FRIENDS_ONLY"
          {...getOverrideProps(overrides, "privacySettingoption1")}
        ></option>
        <option
          children="Public"
          value="PUBLIC"
          {...getOverrideProps(overrides, "privacySettingoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

import { useContext, useState } from "react";

import FormInput from "../../form-input/form-input.component";

import Button from "../../button/button.component";

import "./location-form.styles.scss";

const defaultFormFields = {
  address: "",
  apt: "",
  city: "",
  zip: "",
  state: "",
  phone: "",
};

const LocationForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { address, apt, city, zip, state, phone } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formFields);
  };

  const handleChange = (event) => {
    setFormFields((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div>
        <div
          className="settings-container"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
        <form onSubmit={handleSubmit}>
          <span>Delivery location: </span>
          <FormInput
            label="Street address"
            type="text"
            required
            onChange={handleChange}
            name="address"
            value={address}
          />
          <FormInput
            label="Apt, suite, floor"
            type="text"
            required
            onChange={handleChange}
            name="apt"
            value={apt}
          />
          <FormInput
            label="City"
            type="text"
            required
            onChange={handleChange}
            name="city"
            value={city}
          />
          <FormInput
            label="Zip code"
            type="text"
            required
            onChange={handleChange}
            name="zip"
            value={zip}
          />
          <FormInput
            label="State"
            type="text"
            required
            onChange={handleChange}
            name="state"
            value={state}
          />
          <FormInput
            label="Phone number"
            type="text"
            required
            onChange={handleChange}
            name="phone"
            value={phone}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button type="submit">Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationForm;

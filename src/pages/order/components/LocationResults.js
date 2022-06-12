import styled from "styled-components";
import Button from "../../../layout/Button";

const LocationResults = ({ locations, setOrderLocation }) => {
  const handleSetLocation = (location) => {
    document.cookie = `selectedAddress=${location.formatted_address}; path=/; `; // set the selected address in the cookies
    setOrderLocation(location);
  };

  return (
    locations && (
      <SelectLocation>
        {locations.map((location, index) => {
          return (
            <div key={index}>
              <header>
                <h2>{index + 1}</h2>
                <h5>{location.name}</h5>
              </header>
              <p>{location.hours[0]}</p>
              <p>{location.formatted_address}</p>
              <Button
                text={"Use this location"}
                bgColor={"#f47d20"}
                color={"#fff"}
                width={"100%"}
                handleClick={() => handleSetLocation(location)}
              />
            </div>
          );
        })}
      </SelectLocation>
    )
  );
};

const SelectLocation = styled.div`
  flex: 1;
  height: 300px;
  overflow-y: auto;
  margin-right: 0.5rem;
  div {
    border: 2px solid #fff;
    border-radius: 1rem;
    padding: 1rem;
    color: #fff;
    header {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default LocationResults;

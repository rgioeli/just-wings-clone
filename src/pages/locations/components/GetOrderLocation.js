import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from "../../../layout/Button";
import { FaSearch } from "react-icons/fa";
import Spacer from "../../../helpers/Spacer";
import LocationResults from "./LocationResults";
import { Audio } from "react-loader-spinner";

const GetOrderLocation = ({ setOrderLocation }) => {
  const mapRef = useRef();
  const input = useRef();
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [locations, setLocations] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error || locations || showMap) {
      setLoading(false);
    }
  }, [error, locations, showMap]);

  useEffect(() => {
    // 1. we are first checking to see if our google object is part of the window object
    // 2. if it's not then we need to attatch the object to the window object so we can use all the google API's
    if (!window.google) {
      const googleScript = document.createElement("script");
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA7PfTyVlqKJxAXJncKwUTagew_d2wrDbg&libraries=places`;
      window.document.body.appendChild(googleScript);
      googleScript.addEventListener("load", () => {
        new window.google.maps.places.SearchBox(input.current);
      });
    } else {
      new window.google.maps.places.SearchBox(input.current);
    }
  }, []);

  const createMap = (coords) => {
    return new window.google.maps.Map(mapRef.current, {
      center: coords,
      zoom: 11,
      mapTypeControl: false,
      streetViewControl: false,
      scaleControl: false,
    });
  };

  const getTodaysHours = (details) => {
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const days = details.opening_hours.weekday_text;
    const dayOfTheWeek = daysOfTheWeek[new Date().getDay()]; // Current Day
    const todaysSchedule = days.filter((day) => day.includes(dayOfTheWeek));

    return todaysSchedule;
  };

  const createMarker = (map, place, id) => {
    const label = {
      text: id.toString(),
      color: "blue",
    };

    new window.google.maps.Marker({
      position: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      },
      map: map,
      label,
      animation: window.google.maps.Animation.DROP,
    });
  };

  const finalizeMap = async (coords) => {
    resetState();
    const map = createMap(coords);

    let markerId = 1;

    try {
      const restaurants = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      const getPlaceDetailsCallback = (details, status) => {
        if (status === "OK") {
          const todaysSchedule = getTodaysHours(details);
          createMarker(map, details, markerId);
          setLocations((prevState) => {
            if (prevState) {
              return [...prevState, { ...details, hours: todaysSchedule }];
            } else {
              return [{ ...details, hours: todaysSchedule }];
            }
          });

          markerId += 1;
        }
      };

      const getPlaceDetails = (places) => {
        // places parameter is an array of place Id's
        places.map((place) => {
          const request = {
            placeId: place.place_id,
            fields: [
              "name",
              "geometry",
              "formatted_address",
              "opening_hours",
              "formatted_phone_number",
            ],
          };

          restaurants.getDetails(request, getPlaceDetailsCallback);
        });
      };

      const getPlacesCallback = (places, status) => {
        if (status === "OK" && places.length > 0) {
          // once we get all the nearby places,
          // now we need to get the details for each one of them
          setShowMap(true);
          getPlaceDetails(places);
        } else {
          setError("There are no locations close enough for delivery.");
          if (showMap) {
            setShowMap(false);
          }
        }
      };

      const nearbySearchRequest = {
        keyword: "It's Just Wings",
        location: coords,
        radius: "5000",
        fields: ["place_id"],
      };

      restaurants.nearbySearch(nearbySearchRequest, getPlacesCallback);
    } catch (e) {
      console.log(e);
    }
  };

  const getCoords = async (address) => {
    const geocoder = new window.google.maps.Geocoder();
    console.log(geocoder);
    console.log("Above this should be geocoder");
    try {
      const coords = await geocoder.geocode({ address });
      return {
        lat: coords.results[0].geometry.location.lat(),
        lng: coords.results[0].geometry.location.lng(),
      };
    } catch (e) {
      setError("Please try a different address.");
    }
  };

  const resetState = () => {
    error && setError(null);
    locations && setLocations(null);
    showMap && setShowMap(false);
  };

  const handleLocationSubmit = async () => {
    setLoading(true); // start loading when search is clicked
    resetState(); // reset state for a better customer UI experience
    const address = input.current.value;
    if (!address) return setError("Search can't be blank.");
    const coords = await getCoords(address);
    if (coords.error)
      return setError("Invalid address. Please try a different address.");

    finalizeMap(coords);
  };

  const handleUseLocation = async () => {
    const permission = await window.navigator.permissions.query({
      name: "geolocation",
    });
    if (permission.state === "denied") return;

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        finalizeMap({ lat: coords.latitude, lng: coords.longitude });
      },
      (error) => setError("You will need to manually search for your address.")
    );
  };

  return (
    <GetOrderLocationWrapper>
      <h2 className="make-text-white">FIND A LOCATION TO PLACE YOUR ORDER</h2>
      <Spacer direction={"bottom"} spacing={"1rem"} />
      <LocationHeader>
        <Button
          handleClick={handleUseLocation}
          bgColor={"#f47d20"}
          color={"#fff"}
          width={"100%"}
          text={"Use My Location"}
        />
        <h4 className="make-text-white">OR</h4>
        <GetUserAddress>
          <input
            type="text"
            placeholder="Enter Address, City, State, or Zip Code."
            ref={input}
          />
          <Button
            borderRadius={false}
            text={<FaSearch />}
            bgColor={"#f47d20"}
            color={"#fff"}
            fontSize={".85rem"}
            handleClick={handleLocationSubmit}
          />
        </GetUserAddress>
      </LocationHeader>
      <MapWrapper>
        {loading && (
          <LoadingSpinner>
            <Audio width={"50px"} height={"50px"} color={"#fff"} />
          </LoadingSpinner>
        )}
        <LocationResults
          locations={locations}
          setOrderLocation={setOrderLocation}
        />
        <Map ref={mapRef} showMap={showMap} />
        {error && <Error>{error}</Error>}
      </MapWrapper>
    </GetOrderLocationWrapper>
  );
};

const GetOrderLocationWrapper = styled.div`
  background-color: #111;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .make-text-white {
    color: #fff;
  }
`;

const LoadingSpinner = styled.div``;

const Error = styled.p`
  color: #db3f3f;
`;

const LocationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  h4 {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 500px) {
    flex-flow: column;
    width: 100%;
  }
`;

const MapWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Map = styled.div`
  display: ${(props) => (props.showMap ? "flex" : "none")};
  width: 300px;
  height: 300px;
`;

const GetUserAddress = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border: 2px solid #f47d20;
  width: 100%;

  input {
    flex: 1;
    width: 100%;
    padding: 1rem;
    outline: none;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export default GetOrderLocation;

// const places = data.map((place) => {
//     restaurants.getDetails(
//       { placeId: place.place_id },
//       (details, detailsStatus) => {
//         if (detailsStatus === "OK") {

//           //   customArr.push({
//           //     id: customArr.length + 1,
//           //     name: place.name,
//           //     address: details.formatted_address,
//           //     coords: {
//           //       lat: place.geometry.location.lat(),
//           //       lng: place.geometry.location.lng(),
//           //     },
//           //     hours: getTodaysHours(details),
//           //   });
//         }
//       }
//     );
//   });

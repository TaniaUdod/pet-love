import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  selectCategories,
  selectGenders,
  selectLocations,
  selectTypes,
} from "../../store/notices/selectors";
import {
  getCategories,
  getGenders,
  getLocations,
  getNotices,
  getTypes,
} from "../../store/notices/operations";
import SearchField from "../SearchField/SearchField";
import sprite from "../../images/sprite.svg";
import {
  AllFilters,
  ButtonClear,
  CategoryWrap,
  FilterBottomWrap,
  FilterWrap,
  Hr,
  LocationsWrap,
  NoticesFiltersContainer,
  RadioButtonWrap,
  ResetButton,
} from "./NoticesFilters.styled";

const NoticesFilters = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const sex = useSelector(selectGenders);
  const species = useSelector(selectTypes);
  const locations = useSelector(selectLocations);
  const [inputValue, setInputValue] = useState("");

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    gender: "",
    type: "",
    location: "",
    radioSearch: "",
  });

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGenders());
    dispatch(getTypes());
    dispatch(getLocations(""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getNotices({
        keyword: filters.search,
        category: filters.category,
        species: filters.type,
        sex: filters.gender,
        locationId: filters.location,
        radioSearch: filters.radioSearch,
        page: currentPage,
        limit: 6,
      })
    );
  }, [dispatch, filters, currentPage]);

  const handleInputChange = (name) => (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    setCurrentPage(1);
  };

  const handleReset = () => {
    setFilters({
      search: "",
      category: "",
      gender: "",
      type: "",
      location: "",
      radioSearch: "",
    });
    setInputValue("");
    setCurrentPage(1);
  };

  const optionsData = (options) => [
    { value: "", label: "Show all" },
    ...options?.map((option) => ({
      value: option,
      label: option?.charAt(0).toUpperCase() + option?.slice(1),
    })),
  ];

  let filteredLocations;
  if (inputValue?.length >= 3) {
    filteredLocations = locations?.filter((location) =>
      `${location?.cityEn}`.toLowerCase().startsWith(inputValue?.toLowerCase())
    );
  }

  const optionsLocations = filteredLocations?.map((location) => ({
    value: `${location._id}`,
    label: `${location.stateEn}, ${location.cityEn}`,
  }));

  const handleByCity = (value) => {
    setTimeout(() => setInputValue(value), 600);
  };

  const selectValue = (field) =>
    filters[field] === ""
      ? null
      : optionsData[field]?.find((option) => option.value === filters[field]);

  const handleClear = () => {
    setFilters({ radioSearch: "" });
  };

  const handleClearLocation = () => {
    setFilters({ location: "" });
  };

  const isAnyFilterActive = () => {
    return (
      filters.search ||
      filters.category ||
      filters.gender ||
      filters.type ||
      filters.location ||
      filters.radioSearch
    );
  };

  return (
    <NoticesFiltersContainer>
      <AllFilters>
        <FilterWrap>
          <SearchField
            onSearch={(value) => handleInputChange("search")(value)}
            value={filters.search}
            inputStyle={{
              margin: "0 0 12px",
              borderColor: "transparent",
            }}
            svgStyle={{ top: "14px" }}
          />

          <CategoryWrap>
            <Select
              options={optionsData(categories)}
              value={selectValue("category", optionsData(categories))}
              onChange={(selected) =>
                handleInputChange("category")(selected ? selected.value : "")
              }
              placeholder="Category"
              isClearable
            />
            <Select
              options={optionsData(sex)}
              value={selectValue("gender", optionsData(sex))}
              onChange={(selected) =>
                handleInputChange("gender")(selected ? selected.value : "")
              }
              placeholder="By gender"
              isClearable
            />
          </CategoryWrap>
        </FilterWrap>

        <FilterBottomWrap>
          <Select
            options={optionsData(species)}
            value={selectValue("type", optionsData(species))}
            onChange={(selected) =>
              handleInputChange("type")(selected ? selected.value : "")
            }
            placeholder="By type"
            isClearable
          />

          <LocationsWrap>
            <Select
              options={optionsLocations}
              value={selectValue("location", optionsLocations)}
              onInputChange={handleByCity}
              onChange={(selected) =>
                handleInputChange("location")(selected ? selected.value : "")
              }
              placeholder="Location"
              isClearable
            />
            <svg width="18" height="18" fill="none" stroke="#262626">
              <use href={`${sprite}#icon-search`} />
            </svg>

            {filters.location && (
              <ButtonClear type="button" onClick={handleClearLocation}>
                <svg width="18" height="18" fill="none" stroke="#262626">
                  <use href={`${sprite}#icon-cross`} />
                </svg>
              </ButtonClear>
            )}
          </LocationsWrap>
        </FilterBottomWrap>
      </AllFilters>

      <Hr />

      <RadioButtonWrap>
        {["Popular", "Unpopular", "Cheap", "Expensive"].map((option) => (
          <li
            key={option}
            className={filters.radioSearch === option ? "checked" : ""}
          >
            <input
              type="radio"
              id={option}
              name="radioSearch"
              value={option}
              checked={filters.radioSearch === option}
              onChange={() => handleInputChange("radioSearch")(option)}
            />
            <label htmlFor={option}>{option}</label>
            {filters.radioSearch === option && (
              <button type="button" onClick={handleClear}>
                <svg width="18" height="18" fill="#ffffff" stroke="#ffffff">
                  <use href={`${sprite}#icon-cross`} />
                </svg>
              </button>
            )}
          </li>
        ))}
      </RadioButtonWrap>

      {isAnyFilterActive() && (
        <ResetButton onClick={handleReset}>Reset</ResetButton>
      )}
    </NoticesFiltersContainer>
  );
};

export default NoticesFilters;

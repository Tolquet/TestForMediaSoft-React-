import { YMaps, Map, Placemark, GeolocationControl } from "react-yandex-map";
import { useState } from "react";
import axios from "axios";

export default function AddressPicker() {
    const [coords, setCoords] = useState([55.751244, 37.618423]); // Москва
    const [address, setAddress] = useState("");

    const fetchAddress = async (lat, lon) => {
        try {
            const response = await axios.get(
                `https://geocode-maps.yandex.ru/1.x/?apikey=439ca3d-14a0-4e02-96d2-08768b470f17&geocode=${lon},${lat}&format=json`
            );
            const foundAddress =
                response.data.response.GeoObjectCollection.featureMember[0]?.GeoObject?.metaDataProperty?.GeocoderMetaData?.text;
            if (foundAddress) {
                setAddress(foundAddress);
            }
        } catch (error) {
            console.error("Ошибка при получении адреса:", error);
        }
    };

    const fetchCoords = async (inputAddress) => {
        try {
            const response = await axios.get(
                `https://geocode-maps.yandex.ru/1.x/?439ca3d-14a0-4e02-96d2-08768b470f17&geocode=${inputAddress}&format=json`
            );
            const pos =
                response.data.response.GeoObjectCollection.featureMember[0]?.GeoObject?.Point?.pos;
            if (pos) {
                const [lon, lat] = pos.split(" ").map(Number);
                setCoords([lat, lon]);
            }
        } catch (error) {
            console.error("Ошибка при получении координат:", error);
        }
    };

    const handleClick = (e) => {
        const newCoords = e.get("coords");
        setCoords(newCoords);
        fetchAddress(newCoords[0], newCoords[1]); 
    };

    const handleInputChange = (e) => {
        setAddress(e.target.value);
    };


    const handleSearch = () => {
        fetchCoords(address);
    };

    return (
        <div className="map-container">
            <h2 className="title">Выберите адрес доставки 📍</h2>
            <div className="address-input">
                <input
                    type="text"
                    value={address}
                    onChange={handleInputChange}
                    placeholder="Введите адрес..."
                />
                <button onClick={handleSearch}>🔍 Найти</button>
            </div>
            <YMaps query={{ apikey: "7439ca3d-14a0-4e02-96d2-08768b470f17" }}>
                <Map
                    defaultState={{ center: coords, zoom: 10 }}
                    width="100%"
                    height="400px"
                    onClick={handleClick}
                >
                    <GeolocationControl options={{ float: "right" }} />
                    <Placemark geometry={coords} />
                </Map>
            </YMaps>
            <p className="coords">Координаты: {coords.join(", ")}</p>
        </div>
    );
}


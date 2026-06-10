import {create} from 'zustand';
import axios from 'axios';

const useStore = create((set, get) => ({
  weatherData: null,
  city: "",

  setCity: (city) => set({ city }),

  fetchWeather: async () => {
const { city } = get();

try {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
    );
    set({ weatherData: response.data });
  }
  catch (error) {
    console.error( error);
}
  }
}))

export default useStore;
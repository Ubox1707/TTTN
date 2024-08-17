import React, { useEffect, useState } from 'react';

const ProvinceSelector = () => {
  const [provinces, setProvinces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProvinces = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://vapi.vnappmob.com/api/province/');
        if (response.ok) {
          const data = await response.json();
          setProvinces(data.results);
        } else {
          setError(`Error fetching provinces: ${response.status} - ${response.statusText}`);
        }
      } catch (err) {
        setError(`Error fetching provinces: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProvinces();
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!isLoading && !error && (
        <select>
          <option value="">Sống tại</option>
          {provinces.map(province => (
            <option key={province.province_id} value={province.province_id}>
              {province.province_name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default ProvinceSelector;
"use client";

import { useState, useEffect } from 'react';

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  isLoading: boolean;
}

export const useGeolocation = (): GeolocationState => {
  const [location, setLocation] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: 'Geolocation is not supported by your browser',
        isLoading: false,
      }));
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        isLoading: false,
      });
    };

    const onError = (geoError: GeolocationPositionError) => {
      let errorMessage = 'An unknown error occurred.';
      switch (geoError.code) {
        case geoError.PERMISSION_DENIED:
          errorMessage = 'User denied the request for Geolocation.';
          break;
        case geoError.POSITION_UNAVAILABLE:
          errorMessage = 'Location information is unavailable.';
          break;
        case geoError.TIMEOUT:
          errorMessage = 'The request to get user location timed out.';
          break;
      }
      setLocation((prev) => ({
        ...prev,
        error: errorMessage,
        isLoading: false,
      }));
    };

    // Request location with options for better accuracy and timeout
    const watchId = navigator.geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 10000, // 10 seconds
      maximumAge: 0, // No cached position
    });

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return location;
};
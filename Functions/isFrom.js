export function isFrom(registrationNumber, locationIndicator) {
    return registrationNumber.startsWith(locationIndicator);
  }
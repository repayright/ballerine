import { HeadquartersContext } from '@app/pages/CollectionFlow/components/organisms/KYBView/views/HeadquartersView/types';

export const buildCompanyAddress = (headquarters: HeadquartersContext): string => {
  const {
    country = '',
    state = '',
    streetNumber,
    postalCode = '',
    street = '',
    city = '',
  } = headquarters || {};

  const addressList = [postalCode, street, streetNumber, city, state, country].filter(Boolean);

  return addressList.join(',');
};

import {request} from './';
import {fetchCity, ICity} from './city';

export type IGameItem = {
  id: number,
  order: number;
  distance?: number;
  expiredIn?: number;
  createdAt: string;
  participantId: number;
  city?: ICity;
};

export type IAddItemRequest = {
  gameId: number;
  id: number;
};

export type IAddItemResponse = {
  id: number;
  order: number;
  lastLetter: string;
  itemsCount: number;
  item?: IGameItem;
};

export function fetchAddItem({id, gameId}: IAddItemRequest) {
  return request<IAddItemResponse>({
    method: 'post',
    url: `/games/${gameId}/items`,
    data: {id}
  });
}

export async function fetchAddedItemDetails(payload: IAddItemResponse): Promise<IAddItemResponse> {
  const {city} = payload.item;
  if (city.id && !city.name) {
    payload.item.city = await fetchCity(city.id);
  }
  return payload;
}

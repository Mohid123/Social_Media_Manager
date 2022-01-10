export enum StorageItem {
  AppToken = 'app-token',
  Club = 'club',
  ClubToken = 'club-token',
  ClubLogo = 'clubLogo',
  ClubUid = 'clubUid',
  Clubsch = 'clubsch',
  Fbsch = 'fbsch',
  Igsch = 'igsch',
  NewUser = 'newUser',
  ProfileImageUrl = 'profileImageUrl',
  SelectedClub = 'selectedClub',
  UserId = 'userId',
  UserName = 'userName'
}

export const getItem = (itemName: StorageItem): any | null => {
  const item = localStorage.getItem(itemName);
  return item ? JSON.parse(item) : null;
};

export const setItem = (itemName: StorageItem, value: unknown): void => {
  localStorage.setItem(itemName, JSON.stringify(value));
};

export const removeItem = (itemName: StorageItem): void => {
  localStorage.removeItem(itemName);
};

export const clear = (): void => {
  let selectedClub = getItem(StorageItem.SelectedClub);
  localStorage.clear();
  setItem(StorageItem.SelectedClub, selectedClub)
};

export const forceClear = (): void => {
  localStorage.clear();
};
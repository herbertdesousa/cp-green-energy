export class NameRepository {
  private LOCAL_STORAGE_NAME_KEY = '@user-name';

  store(name: string) {
    localStorage.setItem(this.LOCAL_STORAGE_NAME_KEY, name);
  }

  get(): string | null {
    return localStorage.getItem(this.LOCAL_STORAGE_NAME_KEY)
  }
}
